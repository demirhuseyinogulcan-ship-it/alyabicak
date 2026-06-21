// =============================================================================
// Engine Barrel Export
// =============================================================================

// Geometri (lineer)
export {
  calculateBevelGeometry,
  calculateBladePathPoints,
  calculateSharpnessIndex,
  calculateDurabilityIndex,
  calculateIncludedAngle,
} from './geometry';

// Geometri (dairesel — Faz 3)
export {
  calculateCircularBevelGeometry,
  calculateCircularBladePathPoints,
  calculatePeripheralSpeed,
  linearSpeedToRPM,
} from './circular-geometry';

// Kuvvet & Aşınma & Metrikler (lineer)
export {
  calculateCuttingForce,
  estimateWear,
  calculatePerformanceMetrics,
} from './force-calculator';

// Kuvvet & Aşınma (dairesel — Faz 3)
export {
  calculateCircularCuttingForce,
  estimateCircularWear,
} from './circular-force';

// Malzeme Uyumluluğu
export {
  generateRecommendations,
  getMaterialCompatibilityScore,
  getRecommendedCoatings,
  getCompatibleBladeTypes,
  getCompatibleCuttingMethods,
} from './material-compatibility';

// Ana Motor
export {
  runSimulation,
  generateReport,
  compareSimulations,
  sweepAngle,
  createDefaultInput,
  findMaterial,
  findBladeMaterial,
  findBladeType,
  findCoating,
  findMachineType,
  listMaterials,
  listBladeMaterials,
  listBladeTypes,
  listBevelTypes,
  listCoatings,
  listMachineTypes,
  listCompatibleBladeTypes,
  listCompatibleCuttingMethods,
} from './cutting-engine';

// Tipler
export type {
  SimulationInput,
  SimulationResult,
  ComparisonItem,
  AngleSweepPoint,
} from './cutting-engine';

// Sabit veri tipleri (constants)
export type {
  BladeTypeInfo,
  BevelTypeInfo,
  CoatingInfo,
  MachineTypeInfo,
} from '../constants';

// Dairesel bıçak sabitleri (Faz 3)
export {
  CIRCULAR_DEFAULTS,
  CIRCULAR_PRESETS,
  CIRCULAR_PHYSICS,
} from '../constants';

export type { CircularBladePreset } from '../constants';
