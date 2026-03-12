// =============================================================================
// Dairesel Bıçak Kuvvet Hesaplama Modülü (Faz 3)
// =============================================================================
// Dairesel/döner bıçaklara özgü kuvvet hesaplamaları.
// Lineer force-calculator.ts'yi delege + dairesel düzeltme uygular.
//
// Single Responsibility: Sadece dairesel kuvvet hesapları.
// Open/Closed: Lineer modül değiştirilmez, genişletilir.
// DRY: Ortak mantık (Archard, sıcaklık) force-calculator.ts'den devralınır.
//
// Akademik temel:
//   Makale 15 — Shear/Crush/Razor slitting methods
//   Makale 37 — Makaslama teknolojisi
// =============================================================================

import type {
  ForceCalculationInput,
  ForceCalculationResult,
  CircularBladeParams,
  WearEstimation,
  BladeGeometry,
  CutMaterialProperties,
  BladeMaterialProperties,
  CoatingType,
} from '../types';
import {
  calculateCuttingForce,
  estimateWear,
} from './force-calculator';
import { calculateCircularBevelGeometry } from './circular-geometry';
import { CIRCULAR_PHYSICS, COATINGS } from '../constants';

// ---------------------------------------------------------------------------
// 1. DAİRESEL KESİM KUVVETİ
// ---------------------------------------------------------------------------

/**
 * Dairesel bıçak için kesim kuvvetini hesaplar.
 *
 * Strateji: Lineer kuvvet hesabını baz al → dairesel düzeltme katsayıları uygula.
 *
 * Düzeltmeler:
 *   1. Temas yay uzunluğu: Kuvvet temas yayıyla orantılı
 *   2. Dish açısı: Konkav bıçak → makaslama etkisi → azalan kuvvet
 *   3. Merkezkaç kuvvet: Yüksek RPM'de kenar basıncı artışı
 *
 * F_circular = F_linear × K_arc × K_dish × K_centrifugal
 */
export function calculateCircularCuttingForce(
  input: ForceCalculationInput,
  circularParams: CircularBladeParams,
): ForceCalculationResult {
  // 1. Lineer baz kuvveti (DRY — delege)
  const baseResult = calculateCuttingForce(input);

  // 2. Dairesel geometri
  const circularGeo = calculateCircularBevelGeometry(
    input.geometry,
    circularParams,
    input.materialThickness,
  );

  // 3. Temas yay katsayısı
  // Dairesel bıçakta malzemeyle temas noktasal değil, bir yay boyunca.
  // Daha büyük çap → daha uzun temas yayı → daha düşük birim kuvvet.
  const refArcLength = 1.0; // mm — lineer referans temas uzunluğu
  const K_arc = circularGeo.contactArcLength > refArcLength
    ? Math.sqrt(refArcLength / circularGeo.contactArcLength)
    : 1.0;

  // 4. Dish açısı katsayısı
  // Dished bıçak → progresif kesim → kuvvet düşüşü
  const K_dish = circularParams.dishAngle > 0
    ? Math.cos(circularParams.dishAngle * Math.PI / 180)
    : 1.0;

  // 5. Merkezkaç etkisi
  // Yüksek hızda bıçak kenarında ek basınç → kuvvet artışı
  const rpm = linearSpeedToRPM(input.cuttingSpeed, circularParams.outerDiameter);
  const K_centrifugal = 1 + CIRCULAR_PHYSICS.CENTRIFUGAL_COEFFICIENT * (rpm / 1000);

  // Toplam düzeltme
  const K_total = K_arc * K_dish * K_centrifugal;

  return {
    totalForce: roundTo(baseResult.totalForce * K_total, 3),
    normalForce: roundTo(baseResult.normalForce * K_total, 3),
    frictionForce: roundTo(baseResult.frictionForce * K_arc * K_dish, 3),
    separationForce: roundTo(baseResult.separationForce * K_arc * K_dish, 3),
    specificCuttingEnergy: roundTo(baseResult.specificCuttingEnergy * K_total, 1),
    edgePressure: roundTo(baseResult.edgePressure * K_centrifugal, 1),
    powerRequirement: roundTo(baseResult.powerRequirement * K_total, 2),
    estimatedTemperatureRise: roundTo(
      baseResult.estimatedTemperatureRise * K_centrifugal,
      1,
    ),
  };
}

// ---------------------------------------------------------------------------
// 2. DAİRESEL AŞINMA TAHMİNİ
// ---------------------------------------------------------------------------

/**
 * Dairesel bıçak aşınma tahmini.
 *
 * Avantaj: Aşınma çevre boyunca dağılır → daha uzun ömür.
 * k_life = (π × OD) / contactArcLength × CIRCUMFERENTIAL_WEAR_FACTOR
 */
export function estimateCircularWear(
  material: CutMaterialProperties,
  bladeMaterial: BladeMaterialProperties,
  geometry: BladeGeometry,
  forceResult: ForceCalculationResult,
  coating: CoatingType,
  cuttingSpeed: number,
  circularParams: CircularBladeParams,
  materialThickness: number,
): WearEstimation {
  // Lineer aşınma bazı (DRY — delege)
  const baseWear = estimateWear(
    material,
    bladeMaterial,
    geometry,
    forceResult,
    coating,
    cuttingSpeed,
  );

  // Çevre dağılım çarpanı
  const circularGeo = calculateCircularBevelGeometry(
    geometry,
    circularParams,
    materialThickness,
  );

  // Ham oran — çevre uzunluğu / temas yay uzunluğu
  // İnce malzemelerde bu oran 100+ olabilir ama gerçek dünyada
  // mikro-hasar yayılımı, makine geçişleri ve tek nokta kusurları
  // nedeniyle max ~30x avantaj gerçekçi (endüstri verisi).
  const rawRatio =
    circularGeo.contactArcLength > 0
      ? (circularGeo.circumference / circularGeo.contactArcLength)
      : 1;
  const circumferenceLife = Math.min(
    rawRatio * CIRCULAR_PHYSICS.CIRCUMFERENTIAL_WEAR_FACTOR,
    CIRCULAR_PHYSICS.MAX_CIRCUMFERENTIAL_BENEFIT,
  );

  return {
    estimatedEdgeLife: Math.round(baseWear.estimatedEdgeLife * circumferenceLife),
    resharpenInterval: roundTo(baseWear.resharpenInterval * circumferenceLife, 1),
    wearDistribution: baseWear.wearDistribution,
    edgeRecessionRate: roundTo(baseWear.edgeRecessionRate / circumferenceLife, 2),
  };
}

// ---------------------------------------------------------------------------
// YARDIMCI
// ---------------------------------------------------------------------------

function linearSpeedToRPM(linearSpeed: number, outerDiameter: number): number {
  if (outerDiameter <= 0) return 0;
  return (linearSpeed * 1000) / (Math.PI * outerDiameter);
}

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
