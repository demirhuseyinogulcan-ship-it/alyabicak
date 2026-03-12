// =============================================================================
// CuttingEngine — Ana Orkestratör
// =============================================================================
// Tüm alt motor modüllerini (geometri, kuvvet, malzeme uyumluluğu) birleştirip
// tek bir orkestrasyon façade'ı sunar. SimulatorApp bileşeni yalnızca bu modülü
// import eder.
//
// Single Responsibility  → her hesaplama modülü ayrı
// Open/Closed            → yeni malzeme/bıçak eklemek alt modüllerden yapılır
// Dependency Inversion   → engine yalnızca tiplere ve sabitlere bağlı
// =============================================================================

import type {
  BladeType,
  BevelType,
  CoatingType,
  CuttingMethod,
  MachineType,
  MaterialCategory,
  CutMaterialProperties,
  BladeMaterialProperties,
  BladeGeometry,
  BevelGeometryResult,
  ForceCalculationInput,
  ForceCalculationResult,
  PerformanceMetrics,
  WearEstimation,
  Recommendation,
  SimulationReport,
  BladePathPoints,
  CircularBladeParams,
  CircularBevelGeometryResult,
  CircularBladePathPoints,
} from '../types';
import { isCircularBladeType } from '../types';

import {
  CUT_MATERIALS,
  BLADE_MATERIALS,
  BEVEL_TYPES,
  COATINGS,
  MACHINE_TYPES,
  BLADE_TYPES,
  DEFAULTS,
  CIRCULAR_DEFAULTS,
  type BladeTypeInfo,
  type BevelTypeInfo,
  type CoatingInfo,
  type MachineTypeInfo,
} from '../constants';

import {
  calculateBevelGeometry,
  calculateBladePathPoints,
  calculateSharpnessIndex,
  calculateDurabilityIndex,
  calculateIncludedAngle,
} from './geometry';

import {
  calculateCuttingForce,
  estimateWear,
  calculatePerformanceMetrics,
} from './force-calculator';

import {
  generateRecommendations,
  getMaterialCompatibilityScore,
  getRecommendedCoatings,
  getCompatibleBladeTypes,
  getCompatibleCuttingMethods,
} from './material-compatibility';

import {
  calculateCircularBevelGeometry,
  calculateCircularBladePathPoints,
} from './circular-geometry';

import {
  calculateCircularCuttingForce,
  estimateCircularWear,
} from './circular-force';

// ---------------------------------------------------------------------------
// 1. SİMÜLASYON GİRDİ PAKETİ
// ---------------------------------------------------------------------------

export interface SimulationInput {
  // Zorunlu
  materialId: string;
  bladeTypeId: BladeType;
  // Geometri
  primaryAngle: number;
  bevelType: BevelType;
  secondaryAngle?: number;
  bladeThickness: number;
  edgeRadius: number;
  // Malzeme & kaplama
  bladeMaterialId: string;
  coatingId: CoatingType;
  // Makine
  machineTypeId: MachineType;
  cuttingMethod: CuttingMethod;
  cuttingSpeed: number;      // m/min
  materialThickness: number; // mm
  // Faz 2 parametreleri
  rakeAngle: number;          // Talaş açısı (°)
  clearance: number;          // Makaslama boşluğu (% malzeme kalınlığı)
  // Faz 3 — Dairesel bıçak parametreleri (opsiyonel — sadece circular/rotary-knife için)
  circularParams?: CircularBladeParams;
}

// ---------------------------------------------------------------------------
// 2. SİMÜLASYON SONUÇ PAKETİ
// ---------------------------------------------------------------------------

export interface SimulationResult {
  // Giriş referansları
  input: SimulationInput;
  material: CutMaterialProperties;
  bladeMaterial: BladeMaterialProperties;
  bladeType: BladeTypeInfo;

  // Geometri
  bevelGeometry: BevelGeometryResult;
  bladePathPoints: BladePathPoints;
  includedAngle: number;
  sharpnessIndex: number;
  durabilityIndex: number;

  // Kuvvet
  force: ForceCalculationResult;

  // Aşınma
  wear: WearEstimation;

  // Performans
  metrics: PerformanceMetrics;

  // Tavsiyeler
  recommendations: Recommendation[];

  // Uyumluluk
  materialCompatibilityScore: number;
  recommendedCoatings: CoatingType[];

  // Faz 3 — Dairesel bıçak sonuçları (opsiyonel)
  circularBevelGeometry?: CircularBevelGeometryResult;
  circularPathPoints?: CircularBladePathPoints;

  // Zaman damgası
  timestamp: number;
}

// ---------------------------------------------------------------------------
// 3. ANA SİMÜLASYON FONKSİYONU
// ---------------------------------------------------------------------------

/**
 * Verilen konfigürasyon ile tam bir kesim simülasyonu çalıştırır.
 * Tek fonksiyon çağrısıyla tüm hesaplamaları yapar ve sonuç paketi döndürür.
 *
 * Strategy Pattern: isCircularBladeType() → dairesel modüle delege.
 */
export function runSimulation(input: SimulationInput): SimulationResult {
  // --- Veri doğrulama / arama ---
  const material = CUT_MATERIALS.find(m => m.id === input.materialId);
  if (!material) {
    throw new Error(`Bilinmeyen malzeme: ${input.materialId}`);
  }

  const bladeMaterial = BLADE_MATERIALS.find(m => m.id === input.bladeMaterialId);
  if (!bladeMaterial) {
    throw new Error(`Bilinmeyen bıçak malzemesi: ${input.bladeMaterialId}`);
  }

  const bladeType = BLADE_TYPES.find(bt => bt.id === input.bladeTypeId);
  if (!bladeType) {
    throw new Error(`Bilinmeyen bıçak tipi: ${input.bladeTypeId}`);
  }

  const coating = COATINGS.find(c => c.id === input.coatingId);
  if (!coating) {
    throw new Error(`Bilinmeyen kaplama: ${input.coatingId}`);
  }

  // --- Geometri (ortak) ---
  const bladeGeometry: BladeGeometry = {
    primaryAngle: input.primaryAngle,
    secondaryAngle: input.secondaryAngle ?? null,
    bevelType: input.bevelType,
    bladeThickness: input.bladeThickness,
    edgeRadius: input.edgeRadius,
    rakeAngle: input.rakeAngle,
    hollowRadius: null,
    bladeHeight: DEFAULTS.bladeHeight,
    profile: 'straight',
  };

  const bevelGeometry = calculateBevelGeometry(bladeGeometry);
  const bladePathPoints = calculateBladePathPoints(bladeGeometry);
  const includedAngle = calculateIncludedAngle(bladeGeometry.bevelType, bladeGeometry.primaryAngle);
  const sharpnessIndex = calculateSharpnessIndex(bladeGeometry, bladeMaterial);
  const durabilityIndex = calculateDurabilityIndex(bladeGeometry, bladeMaterial);

  // --- Kuvvet girdisi (ortak) ---
  const forceInput: ForceCalculationInput = {
    material,
    bladeMaterial,
    geometry: bladeGeometry,
    coating: input.coatingId,
    cuttingSpeed: input.cuttingSpeed,
    materialThickness: input.materialThickness,
    cuttingMethod: input.cuttingMethod,
    clearance: input.clearance,
  };

  // --- Strategy Dispatch: Dairesel vs Lineer ---
  const isCircular = isCircularBladeType(input.bladeTypeId);
  const circularParams = isCircular ? input.circularParams : undefined;

  let force: ForceCalculationResult;
  let wear: WearEstimation;
  let circularBevelGeometry: CircularBevelGeometryResult | undefined;
  let circularPathPoints: CircularBladePathPoints | undefined;

  if (isCircular && circularParams) {
    // Dairesel bıçak yolu
    force = calculateCircularCuttingForce(forceInput, circularParams);
    wear = estimateCircularWear(
      material, bladeMaterial, bladeGeometry, force,
      input.coatingId, input.cuttingSpeed,
      circularParams, input.materialThickness,
    );
    circularBevelGeometry = calculateCircularBevelGeometry(
      bladeGeometry, circularParams, input.materialThickness,
    );
    circularPathPoints = calculateCircularBladePathPoints(circularParams, bladeGeometry);
  } else {
    // Lineer bıçak yolu (mevcut davranış)
    force = calculateCuttingForce(forceInput);
    wear = estimateWear(
      material, bladeMaterial, bladeGeometry, force,
      input.coatingId, input.cuttingSpeed,
    );
  }

  // --- Performans ---
  const metrics = calculatePerformanceMetrics(
    bladeGeometry,
    material,
    bladeMaterial,
    force,
    wear,
    input.coatingId
  );

  // --- Uyumluluk ---
  const materialCompatibilityScore = getMaterialCompatibilityScore(
    material.category,
    bladeMaterial.id
  );
  const recommendedCoatings = getRecommendedCoatings(material.category);

  // --- Tavsiyeler ---
  const recommendations = generateRecommendations(
    material,
    input.bladeTypeId,
    bladeMaterial,
    input.coatingId,
    input.primaryAngle,
    input.machineTypeId
  );

  return {
    input,
    material,
    bladeMaterial,
    bladeType,
    bevelGeometry,
    bladePathPoints,
    includedAngle,
    sharpnessIndex,
    durabilityIndex,
    force,
    wear,
    metrics,
    recommendations,
    materialCompatibilityScore,
    recommendedCoatings,
    circularBevelGeometry,
    circularPathPoints,
    timestamp: Date.now(),
  };
}

// ---------------------------------------------------------------------------
// 4. RAPLAMA OLUŞTURUCU (RAPOR)
// ---------------------------------------------------------------------------

/**
 * Simülasyon sonuçlarından dışa aktarılabilir rapor üretir.
 */
export function generateReport(result: SimulationResult): SimulationReport {
  return {
    id: `SIM-${result.timestamp}`,
    timestamp: result.timestamp,
    input: {
      materialName: result.material.name,
      materialCategory: result.material.category,
      bladeType: result.bladeType.name,
      bladeMaterial: result.bladeMaterial.name,
      primaryAngle: result.input.primaryAngle,
      secondaryAngle: result.input.secondaryAngle,
      bevelType: result.input.bevelType,
      coating: result.input.coatingId,
      bladeThickness: result.input.bladeThickness,
      edgeRadius: result.input.edgeRadius,
      machineType: result.input.machineTypeId,
      cuttingMethod: result.input.cuttingMethod,
      cuttingSpeed: result.input.cuttingSpeed,
      materialThickness: result.input.materialThickness,
    },
    results: {
      includedAngle: result.includedAngle,
      sharpnessIndex: result.sharpnessIndex,
      durabilityIndex: result.durabilityIndex,
      totalForce: result.force.totalForce,
      specificEnergy: result.force.specificCuttingEnergy,
      power: result.force.powerRequirement,
      edgeLife: result.wear.estimatedEdgeLife,
      resharpenInterval: result.wear.resharpenInterval,
      performanceMetrics: result.metrics,
      materialCompatibility: result.materialCompatibilityScore,
    },
    recommendations: result.recommendations,
  };
}

// ---------------------------------------------------------------------------
// 5. KARŞILAŞTIRMA FONKSİYONU
// ---------------------------------------------------------------------------

export interface ComparisonItem {
  label: string;
  result: SimulationResult;
}

/**
 * İki veya daha fazla simülasyon sonucunu karşılaştırır.
 * Her metrik için yüzde farkını hesaplar.
 */
export function compareSimulations(
  items: ComparisonItem[]
): {
  items: ComparisonItem[];
  metricComparison: Record<string, { values: number[]; best: number }>;
} {
  if (items.length < 2) {
    return { items, metricComparison: {} };
  }

  const metricKeys: (keyof PerformanceMetrics)[] = [
    'sharpness',
    'durability',
    'edgeRetention',
    'cutQuality',
    'energyEfficiency',
    'materialCompatibility',
    'overallScore',
  ];

  const metricComparison: Record<string, { values: number[]; best: number }> = {};

  for (const key of metricKeys) {
    const values = items.map(item => item.result.metrics[key]);
    const best = Math.max(...values);
    metricComparison[key] = { values, best };
  }

  // Ek karşılaştırma metrikleri
  const forceValues = items.map(i => i.result.force.totalForce);
  metricComparison['totalForce'] = {
    values: forceValues,
    best: Math.min(...forceValues), // Düşük kuvvet daha iyi
  };

  const lifeValues = items.map(i => i.result.wear.estimatedEdgeLife);
  metricComparison['edgeLife'] = {
    values: lifeValues,
    best: Math.max(...lifeValues),
  };

  return { items, metricComparison };
}

// ---------------------------------------------------------------------------
// 6. AÇI İZLEYİCİ — Açı değiştikçe metriklerin nasıl değiştiğini gösterir
// ---------------------------------------------------------------------------

export interface AngleSweepPoint {
  angle: number;
  sharpnessIndex: number;
  durabilityIndex: number;
  totalForce: number;
  overallScore: number;
}

/**
 * Belirli bir açı aralığında tüm metrikleri sweep eder.
 * Grafikte açı–metrik ilişkisini göstermek için kullanılır.
 */
export function sweepAngle(
  baseInput: SimulationInput,
  startAngle: number,
  endAngle: number,
  step: number
): AngleSweepPoint[] {
  const points: AngleSweepPoint[] = [];

  for (let angle = startAngle; angle <= endAngle; angle += step) {
    const modifiedInput: SimulationInput = { ...baseInput, primaryAngle: angle };
    const result = runSimulation(modifiedInput);
    points.push({
      angle,
      sharpnessIndex: result.sharpnessIndex,
      durabilityIndex: result.durabilityIndex,
      totalForce: result.force.totalForce,
      overallScore: result.metrics.overallScore,
    });
  }

  return points;
}

// ---------------------------------------------------------------------------
// 7. VARSAYILAN SİMÜLASYON GİRDİSİ FABRİKASI
// ---------------------------------------------------------------------------

/**
 * Varsayılan simülasyon girdisi oluşturur.
 */
export function createDefaultInput(): SimulationInput {
  const defaultBlade = BLADE_TYPES.find(bt => bt.id === DEFAULTS.bladeType)!;

  return {
    materialId: DEFAULTS.materialId,
    bladeTypeId: DEFAULTS.bladeType,
    primaryAngle: defaultBlade.defaultAngle,
    bevelType: defaultBlade.defaultBevel,
    bladeThickness: defaultBlade.defaultThickness,
    edgeRadius: DEFAULTS.edgeRadius,
    bladeMaterialId: DEFAULTS.bladeMaterial,
    coatingId: DEFAULTS.coating,
    machineTypeId: DEFAULTS.machineType,
    cuttingMethod: DEFAULTS.cuttingMethod,
    cuttingSpeed: DEFAULTS.cuttingSpeed,
    materialThickness: DEFAULTS.materialThickness,
    rakeAngle: DEFAULTS.rakeAngle,
    clearance: DEFAULTS.clearance,
    circularParams: { ...CIRCULAR_DEFAULTS },
  };
}

// ---------------------------------------------------------------------------
// 8. YARDIMCI — Lookup fonksiyonları
// ---------------------------------------------------------------------------

export function findMaterial(id: string): CutMaterialProperties | undefined {
  return CUT_MATERIALS.find(m => m.id === id);
}

export function findBladeMaterial(id: string): BladeMaterialProperties | undefined {
  return BLADE_MATERIALS.find(m => m.id === id);
}

export function findBladeType(id: BladeType): BladeTypeInfo | undefined {
  return BLADE_TYPES.find(bt => bt.id === id);
}

export function findCoating(id: CoatingType): CoatingInfo | undefined {
  return COATINGS.find(c => c.id === id);
}

export function findMachineType(id: MachineType): MachineTypeInfo | undefined {
  return MACHINE_TYPES.find(m => m.id === id);
}

// ---------------------------------------------------------------------------
// 9. VERİ LİSTELEME — UI dropdown/select veri kaynakları
// ---------------------------------------------------------------------------

export function listMaterials(): CutMaterialProperties[] {
  return [...CUT_MATERIALS];
}

export function listBladeMaterials(): BladeMaterialProperties[] {
  return [...BLADE_MATERIALS];
}

export function listBladeTypes(): BladeTypeInfo[] {
  return [...BLADE_TYPES];
}

export function listBevelTypes(): BevelTypeInfo[] {
  return [...BEVEL_TYPES];
}

export function listCoatings(): CoatingInfo[] {
  return [...COATINGS];
}

export function listMachineTypes(): MachineTypeInfo[] {
  return [...MACHINE_TYPES];
}

/**
 * Belirli bir makine tipi için uyumlu bıçak tiplerini listeler.
 */
export function listCompatibleBladeTypes(machineType: MachineType): BladeTypeInfo[] {
  return getCompatibleBladeTypes(machineType);
}

/**
 * Belirli bir makine tipi için uyumlu kesim yöntemlerini listeler.
 */
export function listCompatibleCuttingMethods(machineType: MachineType): CuttingMethod[] {
  return getCompatibleCuttingMethods(machineType);
}
