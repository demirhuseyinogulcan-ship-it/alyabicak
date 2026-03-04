/**
 * Blade Engineer - Geometry Configuration & Default Values
 * Her geometri icin varsayilan parametreler ve form alanlari
 */

import type {
  BladeGeometry,
  CircularParams,
  RectangularParams,
  OblongParams,
  TrapezoidParams,
  TriangularParams,
  HookParams,
  CustomParams,
  ParamField,
} from './types'

// =============================================================================
// VARSAYILAN PARAMETRELER
// =============================================================================

export const DEFAULT_CIRCULAR: CircularParams = {
  outerDiameter: 200,
  innerDiameter: 40,
  thickness: 2,
  bevelAngle: 20,
  bevelType: 'single',
  dishAngle: 0,
  holes: [],
  keyways: [],
  notches: [],
}

export const DEFAULT_RECTANGULAR: RectangularParams = {
  length: 300,
  width: 50,
  thickness: 3,
  bevelAngle: 25,
  bevelType: 'single',
  bevelSides: ['top'],
  cornerRadius: 0,
  holes: [],
}

export const DEFAULT_OBLONG: OblongParams = {
  length: 43,
  width: 22,
  thickness: 0.2,
  holeCount: 3,
  holeSpacing: 14,
  holeDiameter: 5,
  hasSlot: false,
  slotLength: 18,
  slotWidth: 5,
  cornerShape: 'rounded',
  cornerRadius: 2,
}

export const DEFAULT_TRAPEZOID: TrapezoidParams = {
  topWidth: 50,
  bottomWidth: 62,
  height: 19,
  thickness: 0.65,
  notchCount: 3,
  notchWidth: 4,
  notchDepth: 4,
  bevelType: 'double',
}

export const DEFAULT_TRIANGULAR: TriangularParams = {
  baseWidth: 10,
  height: 40,
  thickness: 1,
  tipAngle: 30,
  shankType: 'round',
  shankDiameter: 6,
  shankLength: 25,
  bevelType: 'single',
}

export const DEFAULT_HOOK: HookParams = {
  overallLength: 50,
  overallWidth: 20,
  thickness: 0.65,
  hookDepth: 8,
  curveRadius: 12,
  hasBackEdge: false,
  mountingType: 'notch',
  notches: [],
}

export const DEFAULT_CUSTOM: CustomParams = {
  boundingWidth: 100,
  boundingHeight: 100,
  thickness: 3,
  sideCount: 5,
  circumscribedDiameter: 80,
  centerHoleDiameter: 10,
  bevelType: 'single',
  holes: [],
  customPoints: [],
}

export function getDefaultParams(geometry: BladeGeometry) {
  switch (geometry) {
    case 'circular': return { ...DEFAULT_CIRCULAR }
    case 'rectangular': return { ...DEFAULT_RECTANGULAR }
    case 'oblong': return { ...DEFAULT_OBLONG }
    case 'trapezoid': return { ...DEFAULT_TRAPEZOID }
    case 'triangular': return { ...DEFAULT_TRIANGULAR }
    case 'hook': return { ...DEFAULT_HOOK }
    case 'custom': return { ...DEFAULT_CUSTOM }
  }
}

// =============================================================================
// FORM ALAN TANIMLAMALARI
// =============================================================================

export const CIRCULAR_FIELDS: ParamField[] = [
  { key: 'outerDiameter', labelKey: 'outerDiameter', type: 'number', unit: 'mm', min: 10, max: 2000, step: 1, defaultValue: 200, group: 'dimensions', required: true },
  { key: 'innerDiameter', labelKey: 'innerDiameter', type: 'number', unit: 'mm', min: 0, max: 1000, step: 1, defaultValue: 40, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 50, step: 0.1, defaultValue: 2, group: 'dimensions', required: true },
  { key: 'bevelAngle', labelKey: 'bevelAngle', type: 'number', unit: '\u00B0', min: 0, max: 90, step: 1, defaultValue: 20, group: 'edge', required: false },
  { key: 'bevelType', labelKey: 'bevelType', type: 'select', defaultValue: 'single', options: [
    { value: 'none', labelKey: 'bevelNone' },
    { value: 'single', labelKey: 'bevelSingle' },
    { value: 'double', labelKey: 'bevelDouble' },
    { value: 'hollow', labelKey: 'bevelHollow' },
  ], group: 'edge', required: false },
  { key: 'dishAngle', labelKey: 'dishAngle', type: 'number', unit: '\u00B0', min: 0, max: 30, step: 0.5, defaultValue: 0, group: 'edge', required: false },
]

export const RECTANGULAR_FIELDS: ParamField[] = [
  { key: 'length', labelKey: 'length', type: 'number', unit: 'mm', min: 10, max: 5000, step: 1, defaultValue: 300, group: 'dimensions', required: true },
  { key: 'width', labelKey: 'width', type: 'number', unit: 'mm', min: 5, max: 500, step: 1, defaultValue: 50, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 50, step: 0.1, defaultValue: 3, group: 'dimensions', required: true },
  { key: 'bevelAngle', labelKey: 'bevelAngle', type: 'number', unit: '\u00B0', min: 0, max: 90, step: 1, defaultValue: 25, group: 'edge', required: false },
  { key: 'bevelType', labelKey: 'bevelType', type: 'select', defaultValue: 'single', options: [
    { value: 'none', labelKey: 'bevelNone' },
    { value: 'single', labelKey: 'bevelSingle' },
    { value: 'double', labelKey: 'bevelDouble' },
  ], group: 'edge', required: false },
  { key: 'cornerRadius', labelKey: 'cornerRadius', type: 'number', unit: 'mm', min: 0, max: 50, step: 0.5, defaultValue: 0, group: 'dimensions', required: false },
]

export const OBLONG_FIELDS: ParamField[] = [
  { key: 'length', labelKey: 'length', type: 'number', unit: 'mm', min: 20, max: 100, step: 0.5, defaultValue: 43, group: 'dimensions', required: true },
  { key: 'width', labelKey: 'width', type: 'number', unit: 'mm', min: 10, max: 50, step: 0.5, defaultValue: 22, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.05, max: 1, step: 0.01, defaultValue: 0.2, group: 'dimensions', required: true },
  { key: 'holeCount', labelKey: 'holeCount', type: 'select', defaultValue: 3, options: [
    { value: '0', labelKey: 'noHoles' },
    { value: '2', labelKey: 'twoHoles' },
    { value: '3', labelKey: 'threeHoles' },
  ], group: 'mounting', required: true },
  { key: 'holeSpacing', labelKey: 'holeSpacing', type: 'number', unit: 'mm', min: 5, max: 30, step: 0.5, defaultValue: 14, group: 'mounting', required: false },
  { key: 'holeDiameter', labelKey: 'holeDiameter', type: 'number', unit: 'mm', min: 1, max: 15, step: 0.5, defaultValue: 5, group: 'mounting', required: false },
  { key: 'hasSlot', labelKey: 'hasSlot', type: 'boolean', defaultValue: false, group: 'mounting', required: false },
  { key: 'cornerShape', labelKey: 'cornerShape', type: 'select', defaultValue: 'rounded', options: [
    { value: 'square', labelKey: 'cornerSquare' },
    { value: 'rounded', labelKey: 'cornerRounded' },
    { value: 'angled', labelKey: 'cornerAngled' },
  ], group: 'dimensions', required: false },
]

export const TRAPEZOID_FIELDS: ParamField[] = [
  { key: 'topWidth', labelKey: 'topWidth', type: 'number', unit: 'mm', min: 10, max: 200, step: 1, defaultValue: 50, group: 'dimensions', required: true },
  { key: 'bottomWidth', labelKey: 'bottomWidth', type: 'number', unit: 'mm', min: 10, max: 200, step: 1, defaultValue: 62, group: 'dimensions', required: true },
  { key: 'height', labelKey: 'height', type: 'number', unit: 'mm', min: 5, max: 100, step: 0.5, defaultValue: 19, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 10, step: 0.01, defaultValue: 0.65, group: 'dimensions', required: true },
  { key: 'notchCount', labelKey: 'notchCount', type: 'select', defaultValue: 3, options: [
    { value: '0', labelKey: 'noNotches' },
    { value: '1', labelKey: 'oneNotch' },
    { value: '2', labelKey: 'twoNotches' },
    { value: '3', labelKey: 'threeNotches' },
  ], group: 'mounting', required: false },
  { key: 'bevelType', labelKey: 'bevelType', type: 'select', defaultValue: 'double', options: [
    { value: 'none', labelKey: 'bevelNone' },
    { value: 'single', labelKey: 'bevelSingle' },
    { value: 'double', labelKey: 'bevelDouble' },
  ], group: 'edge', required: false },
]

export const TRIANGULAR_FIELDS: ParamField[] = [
  { key: 'baseWidth', labelKey: 'baseWidth', type: 'number', unit: 'mm', min: 3, max: 50, step: 0.5, defaultValue: 10, group: 'dimensions', required: true },
  { key: 'height', labelKey: 'height', type: 'number', unit: 'mm', min: 10, max: 150, step: 1, defaultValue: 40, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 10, step: 0.1, defaultValue: 1, group: 'dimensions', required: true },
  { key: 'tipAngle', labelKey: 'tipAngle', type: 'number', unit: '\u00B0', min: 5, max: 90, step: 1, defaultValue: 30, group: 'dimensions', required: true },
  { key: 'shankType', labelKey: 'shankType', type: 'select', defaultValue: 'round', options: [
    { value: 'none', labelKey: 'shankNone' },
    { value: 'round', labelKey: 'shankRound' },
    { value: 'flat', labelKey: 'shankFlat' },
  ], group: 'mounting', required: false },
  { key: 'shankDiameter', labelKey: 'shankDiameter', type: 'number', unit: 'mm', min: 1, max: 20, step: 0.5, defaultValue: 6, group: 'mounting', required: false },
]

export const HOOK_FIELDS: ParamField[] = [
  { key: 'overallLength', labelKey: 'overallLength', type: 'number', unit: 'mm', min: 20, max: 150, step: 1, defaultValue: 50, group: 'dimensions', required: true },
  { key: 'overallWidth', labelKey: 'overallWidth', type: 'number', unit: 'mm', min: 10, max: 80, step: 1, defaultValue: 20, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 5, step: 0.01, defaultValue: 0.65, group: 'dimensions', required: true },
  { key: 'hookDepth', labelKey: 'hookDepth', type: 'number', unit: 'mm', min: 2, max: 40, step: 0.5, defaultValue: 8, group: 'dimensions', required: true },
  { key: 'curveRadius', labelKey: 'curveRadius', type: 'number', unit: 'mm', min: 3, max: 50, step: 0.5, defaultValue: 12, group: 'dimensions', required: true },
  { key: 'hasBackEdge', labelKey: 'hasBackEdge', type: 'boolean', defaultValue: false, group: 'edge', required: false },
  { key: 'mountingType', labelKey: 'mountingType', type: 'select', defaultValue: 'notch', options: [
    { value: 'notch', labelKey: 'mountNotch' },
    { value: 'tang', labelKey: 'mountTang' },
    { value: 'hole', labelKey: 'mountHole' },
  ], group: 'mounting', required: false },
]

export const CUSTOM_FIELDS: ParamField[] = [
  { key: 'boundingWidth', labelKey: 'boundingWidth', type: 'number', unit: 'mm', min: 10, max: 2000, step: 1, defaultValue: 100, group: 'dimensions', required: true },
  { key: 'boundingHeight', labelKey: 'boundingHeight', type: 'number', unit: 'mm', min: 10, max: 2000, step: 1, defaultValue: 100, group: 'dimensions', required: true },
  { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 50, step: 0.1, defaultValue: 3, group: 'dimensions', required: true },
  { key: 'sideCount', labelKey: 'sideCount', type: 'number', min: 3, max: 12, step: 1, defaultValue: 5, group: 'dimensions', required: true },
  { key: 'circumscribedDiameter', labelKey: 'circumscribedDiameter', type: 'number', unit: 'mm', min: 10, max: 1000, step: 1, defaultValue: 80, group: 'dimensions', required: false },
  { key: 'centerHoleDiameter', labelKey: 'centerHoleDiameter', type: 'number', unit: 'mm', min: 0, max: 200, step: 1, defaultValue: 10, group: 'mounting', required: false },
]

export function getFieldsForGeometry(geometry: BladeGeometry): ParamField[] {
  switch (geometry) {
    case 'circular': return CIRCULAR_FIELDS
    case 'rectangular': return RECTANGULAR_FIELDS
    case 'oblong': return OBLONG_FIELDS
    case 'trapezoid': return TRAPEZOID_FIELDS
    case 'triangular': return TRIANGULAR_FIELDS
    case 'hook': return HOOK_FIELDS
    case 'custom': return CUSTOM_FIELDS
  }
}

// =============================================================================
// GEOMETRI METADATA (UI icin)
// =============================================================================

export interface GeometryMeta {
  id: BladeGeometry
  labelKey: string
  descriptionKey: string
  icon: string       // SVG path data
  examples: string[] // i18n keys
}

export const GEOMETRY_LIST: GeometryMeta[] = [
  {
    id: 'circular',
    labelKey: 'circularLabel',
    descriptionKey: 'circularDesc',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z',
    examples: ['circularEx1', 'circularEx2', 'circularEx3'],
  },
  {
    id: 'rectangular',
    labelKey: 'rectangularLabel',
    descriptionKey: 'rectangularDesc',
    icon: 'M3 6h18v12H3z',
    examples: ['rectangularEx1', 'rectangularEx2', 'rectangularEx3'],
  },
  {
    id: 'oblong',
    labelKey: 'oblongLabel',
    descriptionKey: 'oblongDesc',
    icon: 'M6 7h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4zm3 2a1 1 0 1 0 0 0zm3 0a1 1 0 1 0 0 0zm3 0a1 1 0 1 0 0 0z',
    examples: ['oblongEx1', 'oblongEx2', 'oblongEx3'],
  },
  {
    id: 'trapezoid',
    labelKey: 'trapezoidLabel',
    descriptionKey: 'trapezoidDesc',
    icon: 'M7 6h10l3 12H4z',
    examples: ['trapezoidEx1', 'trapezoidEx2'],
  },
  {
    id: 'triangular',
    labelKey: 'triangularLabel',
    descriptionKey: 'triangularDesc',
    icon: 'M12 4l8 16H4z',
    examples: ['triangularEx1', 'triangularEx2', 'triangularEx3'],
  },
  {
    id: 'hook',
    labelKey: 'hookLabel',
    descriptionKey: 'hookDesc',
    icon: 'M6 6h6v4c0 4-6 4-6 8v2h12',
    examples: ['hookEx1', 'hookEx2'],
  },
  {
    id: 'custom',
    labelKey: 'customLabel',
    descriptionKey: 'customDesc',
    icon: 'M12 2l4 3.5 1.5 5-3 4.5H9.5l-3-4.5L8 5.5z',
    examples: ['customEx1', 'customEx2', 'customEx3'],
  },
]
