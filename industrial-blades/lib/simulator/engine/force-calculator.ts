// =============================================================================
// Kesme Kuvveti Hesaplama Modülü
// =============================================================================
// Endüstriyel dilme/kesim operasyonlarında bıçak-malzeme etkileşim kuvvetleri.
//
// Akademik temel:
//   M.02 — Kesme mekaniği (Merchant modeli, Ernst & Merchant)
//   M.03 — Kenar geometrisi ve kuvvet ilişkisi
//   M.09 — Kırılma mekaniği (Griffith enerji yaklaşımı)
//   M.10 — Aşınma mekanizmaları (Archard modeli)
//   M.41 — Dilme/makaslama teknolojisi
//
// Model: Modifiye edilmiş Web Slitting Force modeli
//   F_total = F_separation + F_friction + F_deformation
//
// Tüm birimler SI: Newton (N), Pascal (Pa), metre (m)
// =============================================================================

import type {
  ForceCalculationInput,
  ForceCalculationResult,
  BladeGeometry,
  CutMaterialProperties,
  BladeMaterialProperties,
  WearEstimation,
  PerformanceMetrics,
} from '../types';
import {
  calculateBevelGeometry,
  calculateIncludedAngle,
  calculateSharpnessIndex,
  calculateDurabilityIndex,
  degToRad,
} from './geometry';
import { PHYSICS, COATINGS, METRIC_WEIGHTS, OPTIMAL_CLEARANCE } from '../constants';
import type { CoatingType } from '../types';

// ---------------------------------------------------------------------------
// ANA KUVVET HESAPLAMASI
// ---------------------------------------------------------------------------

/**
 * Toplam kesme kuvvetini hesaplar.
 *
 * Model bileşenleri:
 *   1. Ayırma kuvveti (separation force) — malzemeyi kenar ucuyla ikiye bölme
 *   2. Sürtünme kuvveti (friction force) — bevel yüzeylerinde malzeme sürtünmesi
 *   3. Deformasyon kuvveti (deformation force) — kenar yarıçapı etkisi
 *
 * Toplamda: F_total = F_separation + F_friction + F_deformation
 */
export function calculateCuttingForce(
  input: ForceCalculationInput
): ForceCalculationResult {
  const { material, geometry, bladeMaterial, cuttingSpeed, materialThickness } = input;

  const geoResult = calculateBevelGeometry(geometry);
  const includedAngleRad = degToRad(geoResult.includedAngle);
  const halfAngleRad = includedAngleRad / 2;

  // --- Malzeme kalınlığını metre cinsine çevir ---
  const thickness_m = materialThickness * 1e-3; // mm → m

  // =====================================================
  // 1. AYIRMA KUVVETİ (Separation Force)
  // =====================================================
  // Malzemenin çekme dayanımına ve kalınlığına bağlı
  // F_sep = σ_t × t × w × K_angle
  //   σ_t : çekme dayanımı (Pa)
  //   t   : malzeme kalınlığı (m)
  //   w   : kesim genişliği  (birim: 1m — spesifik kuvvet)
  //   K_angle: açı katsayısı = 1/sin(α/2) — dar açı → düşük kuvvet
  const sigma_t = material.tensileStrength * 1e6; // MPa → Pa

  const K_angle = 1 / Math.sin(halfAngleRad);
  // Açı etkisi üssü uygulanmış düzeltme: daha keskin bıçak gerçekte
  // çok daha az kuvvet gerektirir
  const K_angle_adjusted = Math.pow(K_angle, 0.6);

  // Talaş açısı (rake angle) düzeltmesi — M.02 Merchant modeli
  // Pozitif γ → azalan kuvvet, negatif γ → artan kuvvet
  const gammaRad = degToRad(geometry.rakeAngle);
  const K_rake = 1 - PHYSICS.RAKE_FORCE_COEFFICIENT * Math.sin(gammaRad);

  const F_separation = sigma_t * thickness_m * K_angle_adjusted * 0.5 * K_rake;

  // =====================================================
  // 2. SÜRTÜNME KUVVETİ (Friction Force)
  // =====================================================
  // Bevel yüzeylerinde malzeme-bıçak sürtünmesi
  // F_friction = µ × F_normal_on_bevel × total_bevel_contact
  const mu = material.frictionCoefficient;

  // Normal kuvvet bevel üzerinde: F_sep'in bevel'e dik bileşeni
  const F_normal_bevel = F_separation * Math.sin(halfAngleRad);

  // İki bevel yüzeyi (double bevel) veya tek (single bevel)
  const bevelCount = geometry.bevelType === 'single' ? 1 : 2;

  // Sürtünme uzunluğu: malzeme kalınlığı kadar bevel boyunca temas
  const contactLength = thickness_m / Math.sin(halfAngleRad);

  const F_friction = mu * F_normal_bevel * bevelCount * PHYSICS.ATWOOD_FRICTION_FACTOR;

  // =====================================================
  // 3. DEFORMASYON KUVVETİ (Edge Radius Effect)
  // =====================================================
  // Kenar yarıçapı > 0 → bıçak önce malzemeyi ezer, sonra keser
  // F_deform = K_edge × σ_t × edge_radius × thickness
  const edgeRadius_m = geometry.edgeRadius * 1e-6; // µm → m
  const K_edge = PHYSICS.EDGE_RADIUS_SENSITIVITY * 100;
  const F_deformation = K_edge * sigma_t * edgeRadius_m * thickness_m * 1000;

  // =====================================================
  // TOPLAM KUVVET
  // =====================================================
  let totalForce = F_separation + F_friction + F_deformation;

  // =====================================================
  // 4. MAKASLAMA BOŞLUĞU DÜZELTMESİ (Clearance — Shear Only)
  // =====================================================
  // Optimal boşluktan sapma → kuvvet artışı (M.37, M.15)
  // K_clearance = 1 + 1.5 × (sapma/optimal)²
  if (input.cuttingMethod === 'shear') {
    const optimalClearance = OPTIMAL_CLEARANCE[material.category];
    const deviation = Math.abs(input.clearance - optimalClearance) / optimalClearance;
    const K_clearance = 1 + 1.5 * deviation * deviation;
    totalForce *= K_clearance;
  }

  // =====================================================
  // TÜREV METRİKLER
  // =====================================================

  // Normal kuvvet (bıçağa dikey — malzemeye nüfuz yönü)
  const normalForce = totalForce * Math.cos(halfAngleRad);

  // Spesifik kesme enerjisi (J/m²) — birim alan başına enerji
  const specificCuttingEnergy = totalForce / thickness_m;

  // Kenar noktasında basınç (MPa)
  // Temas alanı ≈ edgeRadius × kesim genişliği (birim: 1m)
  const contactArea = Math.max(edgeRadius_m, 1e-7) * 1; // m²
  const edgePressure = totalForce / contactArea / 1e6; // Pa → MPa

  // Güç gereksinimi (W) = Kuvvet × Hız
  const speed_m_s = cuttingSpeed / 60; // m/min → m/s
  const powerRequirement = totalForce * speed_m_s;

  // =====================================================
  // 5. SICAKLIK ARTIŞI TAHMİNİ (Temperature Rise)
  // =====================================================
  // Modifiye flash sıcaklık modeli (Blok-Jaeger bazlı)
  // ΔT = η × P / (k × t × C_scale)
  //   η : bıçağa giden ısı fraksiyonu (TEMPERATURE_PARTITION)
  //   P : kesme gücü (W/m)
  //   k : bıçak termal iletkenliği (W/m·K)
  //   t : malzeme kalınlığı (m)
  const k_blade = bladeMaterial.thermalConductivity;
  const estimatedTemperatureRise = k_blade > 0 && thickness_m > 0
    ? roundTo(
        PHYSICS.TEMPERATURE_PARTITION * powerRequirement / (k_blade * thickness_m * 1000),
        1
      )
    : 0;

  return {
    totalForce: roundForce(totalForce),
    normalForce: roundForce(normalForce),
    frictionForce: roundForce(F_friction),
    separationForce: roundForce(F_separation),
    specificCuttingEnergy: roundTo(specificCuttingEnergy, 1),
    edgePressure: roundTo(edgePressure, 1),
    powerRequirement: roundTo(powerRequirement, 2),
    estimatedTemperatureRise,
  };
}

// ---------------------------------------------------------------------------
// AŞINMA TAHMİNİ
// ---------------------------------------------------------------------------

/**
 * Bıçak kenar aşınma tahmini — Archard modeli bazlı.
 *
 * Archard yasası: V = K × F × L / H
 *   V : aşınma hacmi (m³)
 *   K : aşınma katsayısı (boyutsuz)
 *   F : yük (N)
 *   L : kayma mesafesi (m)
 *   H : sertlik (Pa)
 *
 * Kenar gerilemesi hızı: ΔR = V / (kenar çevresi × birim uzunluk)
 */
export function estimateWear(
  material: CutMaterialProperties,
  bladeMaterial: BladeMaterialProperties,
  geometry: BladeGeometry,
  forceResult: ForceCalculationResult,
  coating: CoatingType,
  cuttingSpeed: number
): WearEstimation {
  // Bıçak sertliğini HRC → HV → Pa dönüşümü (yaklaşık)
  const avgHRC = (bladeMaterial.hardnessHRC[0] + bladeMaterial.hardnessHRC[1]) / 2;
  const HV = hrcToHv(avgHRC);
  const H_Pa = HV * 9.81e6; // HV → Pa (yaklaşık)

  // Archard katsayısı — malzeme aşındırıcılığına göre ölçekleme
  const baseK = 1e-6; // temel katsayı
  const abrasiveFactor = material.abrasiveness / 5; // 0–2 arası
  const K = baseK * abrasiveFactor;

  // Kaplama etkisi
  const coatingInfo = COATINGS.find(c => c.id === coating);
  const wearMultiplier = coatingInfo?.wearMultiplier ?? 1.0;

  // Kenar gerilemesi hızı (µm/km kesim mesafesi)
  // V/A = K × F × L / (H × A) → δ = K × P / H   (P = basınç)
  const edgePressure_Pa = forceResult.edgePressure * 1e6;
  const edgeRecessionRate = (K * edgePressure_Pa / H_Pa) * 1e9 / wearMultiplier;

  // Tahmini kenar ömrü (kesim-metre)
  // Kenar kullanılabilir aşınma toleransı ≈ 50 µm
  const wearTolerance = 50; // µm
  const edgeLifeKm = edgeRecessionRate > 0
    ? wearTolerance / edgeRecessionRate
    : 9999;
  const edgeLifeM = edgeLifeKm * 1000;

  // Bileme sıklığı (saat) = kenar ömrü / hız
  const hourlyTravel = cuttingSpeed * 60; // m/min → m/h
  const resharpenInterval = hourlyTravel > 0
    ? edgeLifeM / hourlyTravel
    : 9999;

  // Aşınma tipi dağılımı
  const wearDistribution = calculateWearDistribution(material, bladeMaterial);

  return {
    estimatedEdgeLife: roundTo(edgeLifeM, 0),
    resharpenInterval: roundTo(resharpenInterval, 1),
    wearDistribution,
    edgeRecessionRate: roundTo(edgeRecessionRate, 2),
  };
}

/**
 * Aşınma mekanizması dağılımını tahmin eder.
 * M.10 — Aşınma mekanizmaları makalesine dayanır.
 */
function calculateWearDistribution(
  material: CutMaterialProperties,
  bladeMaterial: BladeMaterialProperties
): WearEstimation['wearDistribution'] {
  // Abrazif aşınma: malzeme aşındırıcılığı yükseldikçe dominan
  let abrasive = material.abrasiveness * 8;

  // Adhezif aşınma: yapışkanlık yükseldikçe artar
  let adhesive = material.adhesionFactor * 5;

  // Oksidasyon: termal duyarlılık + korozyon direnci zayıflığı
  let oxidative = material.thermalSensitivity * 2 + (10 - bladeMaterial.corrosionResistance) * 2;

  // Yorulma: tekrarlayan yük, bıçak tokluğu etkisi
  let fatigue = Math.max(5, 30 - bladeMaterial.fractureToughness);

  // Normalize
  const total = abrasive + adhesive + oxidative + fatigue;
  return {
    abrasive: roundTo((abrasive / total) * 100, 1),
    adhesive: roundTo((adhesive / total) * 100, 1),
    oxidative: roundTo((oxidative / total) * 100, 1),
    fatigue: roundTo((fatigue / total) * 100, 1),
  };
}

// ---------------------------------------------------------------------------
// PERFORMANS METRİKLERİ
// ---------------------------------------------------------------------------

/**
 * Tüm performans metriklerini hesaplar (0–100 skala).
 */
export function calculatePerformanceMetrics(
  geometry: BladeGeometry,
  material: CutMaterialProperties,
  bladeMaterial: BladeMaterialProperties,
  forceResult: ForceCalculationResult,
  wearEstimation: WearEstimation,
  coating: CoatingType
): PerformanceMetrics {
  // 1. Keskinlik
  const sharpness = calculateSharpnessIndex(geometry, bladeMaterial);

  // 2. Dayanıklılık
  const durability = calculateDurabilityIndex(geometry, bladeMaterial);

  // 3. Kenar tutma süresi (edge retention)
  const edgeRetention = calculateEdgeRetention(bladeMaterial, wearEstimation, coating);

  // 4. Kesme kalitesi
  const cutQuality = calculateCutQuality(geometry, material, forceResult);

  // 5. Enerji verimliliği
  const energyEfficiency = calculateEnergyEfficiency(forceResult, material);

  // 6. Malzeme uyumu
  const materialCompatibility = calculateMaterialCompatibility(geometry, material);

  // 7. Genel skor (ağırlıklı ortalama)
  const overallScore = Math.round(
    sharpness * METRIC_WEIGHTS.sharpness +
    durability * METRIC_WEIGHTS.durability +
    edgeRetention * METRIC_WEIGHTS.edgeRetention +
    cutQuality * METRIC_WEIGHTS.cutQuality +
    energyEfficiency * METRIC_WEIGHTS.energyEfficiency +
    materialCompatibility * METRIC_WEIGHTS.materialCompatibility
  );

  return {
    sharpness,
    durability,
    edgeRetention,
    cutQuality,
    energyEfficiency,
    materialCompatibility,
    overallScore: clampScore(overallScore),
  };
}

/**
 * Kenar tutma süresi (Edge Retention) — 0–100
 *
 * Bıçak malzeme sertliği × aşınma direnci × kaplama çarpanı
 */
function calculateEdgeRetention(
  bladeMaterial: BladeMaterialProperties,
  wearEstimation: WearEstimation,
  coating: CoatingType
): number {
  const avgHRC = (bladeMaterial.hardnessHRC[0] + bladeMaterial.hardnessHRC[1]) / 2;
  const hardnessFactor = avgHRC / PHYSICS.REFERENCE_HARDNESS;
  const wearFactor = bladeMaterial.wearResistance / 10;

  const coatingInfo = COATINGS.find(c => c.id === coating);
  const coatingBonus = coatingInfo ? Math.log2(coatingInfo.wearMultiplier) * 10 : 0;

  const raw = (hardnessFactor * 35 + wearFactor * 40 + coatingBonus) * 1.0;
  return clampScore(raw);
}

/**
 * Kesme kalitesi (Cut Quality) — 0–100
 *
 * Dar açı + düşük kuvvet + düşük kenar yarıçapı = yüksek kalite
 */
function calculateCutQuality(
  geometry: BladeGeometry,
  material: CutMaterialProperties,
  forceResult: ForceCalculationResult
): number {
  const includedAngle = calculateIncludedAngle(geometry.bevelType, geometry.primaryAngle);

  // Açı uyumu: malzemenin önerilen aralığına ne kadar yakın?
  const [minAngle, maxAngle] = material.recommendedAngleRange;
  const halfIncluded = includedAngle / (geometry.bevelType === 'single' ? 1 : 2);
  const midRecommended = (minAngle + maxAngle) / 2;
  const angleDeviation = Math.abs(halfIncluded - midRecommended);
  const angleFit = Math.max(0, 100 - angleDeviation * 4);

  // Kenar kalitesi: küçük R → temiz kesim
  const edgeFactor = Math.max(0, 100 - geometry.edgeRadius * 8);

  // Kuvvet düşüklüğü: düşük kuvvet → daha az deformasyon
  const forceFactor = Math.max(0, 100 - forceResult.totalForce * 2);

  const raw = angleFit * 0.5 + edgeFactor * 0.3 + forceFactor * 0.2;
  return clampScore(raw);
}

/**
 * Enerji verimliliği — 0–100
 *
 * Düşük güç gereksinimi = yüksek verimlilik
 */
function calculateEnergyEfficiency(
  forceResult: ForceCalculationResult,
  material: CutMaterialProperties
): number {
  // Referans: 25 µm LDPE film, 22° çift bevel → ~0.5W civarı
  const referencePower = 0.5; // W
  const ratio = referencePower / Math.max(forceResult.powerRequirement, 0.01);
  const raw = Math.min(100, ratio * 80);
  return clampScore(raw);
}

/**
 * Malzeme uyumu — 0–100
 *
 * Bileme açısının malzemenin önerilen aralığına uyumu.
 */
function calculateMaterialCompatibility(
  geometry: BladeGeometry,
  material: CutMaterialProperties
): number {
  const [minAngle, maxAngle] = material.recommendedAngleRange;
  const halfIncluded = geometry.bevelType === 'single'
    ? geometry.primaryAngle
    : geometry.primaryAngle;

  // Aralık içinde mi?
  if (halfIncluded >= minAngle && halfIncluded <= maxAngle) {
    // Aralık merkezine yakınlık
    const mid = (minAngle + maxAngle) / 2;
    const halfRange = (maxAngle - minAngle) / 2;
    const distFromCenter = Math.abs(halfIncluded - mid);
    return clampScore(100 - (distFromCenter / halfRange) * 20);
  }

  // Aralık dışında — ceza
  const distOutside = halfIncluded < minAngle
    ? minAngle - halfIncluded
    : halfIncluded - maxAngle;
  return clampScore(Math.max(0, 80 - distOutside * 5));
}

// ---------------------------------------------------------------------------
// YARDIMCI
// ---------------------------------------------------------------------------

/** HRC → HV yaklaşık dönüşüm (ISO 18265 tabanlı polinom yaklaşımı) */
function hrcToHv(hrc: number): number {
  // HRC 20-70 arasında geçerli yaklaşım
  return Math.round(
    -0.027 * hrc * hrc + 8.57 * hrc + 254
  );
}

function roundForce(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
