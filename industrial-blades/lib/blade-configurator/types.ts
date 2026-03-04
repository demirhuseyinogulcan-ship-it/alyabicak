/**
 * Blade Configurator - Type Definitions
 * Clean specification tool for blade quote requests
 */

// ─── Category Types ──────────────────────────────────────────────────────────

export type BladeCategory =
  | 'circular'
  | 'straight'
  | 'machine'
  | 'special'
  | 'packaging'
  | 'custom';

export type EdgeType =
  | 'plain'
  | 'serrated'
  | 'wavy'
  | 'perforating'
  | 'scalloped'
  | 'zigzag';

export type BevelType = 'none' | 'single' | 'double' | 'hollow';

export type ToleranceClass = 'standard' | 'precision' | 'custom';

// ─── Dimension Types (per category) ─────────────────────────────────────────

export interface CircularDimensions {
  outerDiameter: number;
  innerDiameter: number;
  thickness: number;
  bevelAngle: number;
  landWidth: number;
  numberOfTeeth: number;
  toothPitch: number;
}

export interface StraightDimensions {
  length: number;
  width: number;
  thickness: number;
  holeCount: number;
  holeDiameter: number;
  holeSpacing: number;
  cornerRadius: number;
}

export interface MachineDimensions {
  length: number;
  width: number;
  thickness: number;
  boltHoleCount: number;
  boltHoleDiameter: number;
  boltHoleSpacing: number;
  cuttingAngle: number;
  machineModel: string;
}

export interface SpecialDimensions {
  subtype: string;
  overallLength: number;
  overallWidth: number;
  thickness: number;
  description: string;
}

export interface PackagingDimensions {
  subtype: string;
  overallLength: number;
  overallWidth: number;
  thickness: number;
  machineModel: string;
  description: string;
}

export interface CustomDimensions {
  description: string;
  approximateLength: number;
  approximateWidth: number;
  approximateThickness: number;
  usage: string;
}

export type BladeDimensions =
  | CircularDimensions
  | StraightDimensions
  | MachineDimensions
  | SpecialDimensions
  | PackagingDimensions
  | CustomDimensions;

// ─── Specification Types ────────────────────────────────────────────────────

export interface MaterialSpec {
  material: string;
  hardness: string;
  coating: string;
  surfaceFinish: string;
  toleranceClass: ToleranceClass;
  customTolerance: string;
  edgeType: EdgeType;
  bevelType: BevelType;
  quantity: number;
  notes: string;
}

export interface BladeSpec {
  category: BladeCategory;
  dimensions: Record<string, number | string>;
  material: MaterialSpec;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// ─── Component Props ────────────────────────────────────────────────────────

export interface BladeConfiguratorDict {
  [key: string]: string;
}

export type WizardStep = 1 | 2 | 3 | 4;
