/**
 * Blade Engineer - Type Definitions
 * Teknik cizim araci icin tum tip tanimlamalari
 */

// =============================================================================
// 7 TEMEL GEOMETRI
// =============================================================================

export type BladeGeometry =
  | 'circular'        // G1: Dairesel / Disk
  | 'rectangular'     // G2: Dikdortgen / Duz
  | 'oblong'          // G3: Oblong + Delikli (jilet tipi)
  | 'trapezoid'       // G4: Trapez
  | 'triangular'      // G5: Ucgen / Sivri Uclu
  | 'hook'            // G6: Kanca / Konkav
  | 'custom'          // G7: Cokgen / Ozel Profil

// =============================================================================
// KENAR OZELLIKLERI
// =============================================================================

export type EdgeType =
  | 'plain'           // Duz keskin kenar
  | 'serrated'        // Disli (V-dis)
  | 'wavy'            // Dalgali
  | 'perforating'     // Perfore (sivri uc dizisi)
  | 'scalloped'       // Yarim daire oyuklu
  | 'zigzag'          // Zig-zag deseni

export type BevelType =
  | 'none'            // Bileme yok
  | 'single'          // Tek tarafli bileme
  | 'double'          // Cift tarafli bileme
  | 'hollow'          // Oyma bileme
  | 'convex'          // Bombeli bileme

// =============================================================================
// MONTAJ OZELLIKLERI
// =============================================================================

export interface MountingHole {
  id: string
  x: number          // mm — merkezden X mesafe
  y: number          // mm — merkezden Y mesafe
  diameter: number   // mm
  type: 'through' | 'countersunk' | 'threaded'
  label?: string
}

export interface Keyway {
  id: string
  width: number      // mm
  depth: number      // mm
  angle: number      // derece — 12 o'clock = 0
}

export interface Notch {
  id: string
  width: number      // mm
  depth: number      // mm
  position: number   // derece veya mm (geometriye bagli)
  shape: 'rectangular' | 'semicircle' | 'v-notch'
}

// =============================================================================
// GEOMETRI-SPESIFIK PARAMETRELER
// =============================================================================

export interface CircularParams {
  outerDiameter: number     // mm
  innerDiameter: number     // mm (bore)
  thickness: number         // mm
  bevelAngle: number        // derece
  bevelType: BevelType
  dishAngle: number         // derece (0 = duz)
  holes: MountingHole[]
  keyways: Keyway[]
  notches: Notch[]
}

export interface RectangularParams {
  length: number            // mm
  width: number             // mm
  thickness: number         // mm
  bevelAngle: number        // derece
  bevelType: BevelType
  bevelSides: ('top' | 'bottom' | 'left' | 'right')[]
  cornerRadius: number      // mm (0 = kare kose)
  holes: MountingHole[]
}

export interface OblongParams {
  length: number            // mm (tipik 40-45mm)
  width: number             // mm (tipik 20-23mm)
  thickness: number         // mm (tipik 0.10-0.30mm)
  holeCount: number         // 2, 3, veya 0 (slotted)
  holeSpacing: number       // mm
  holeDiameter: number      // mm
  hasSlot: boolean          // slotted tip
  slotLength: number        // mm
  slotWidth: number         // mm
  cornerShape: 'square' | 'rounded' | 'angled'
  cornerRadius: number      // mm
}

export interface TrapezoidParams {
  topWidth: number          // mm (kisa kenar)
  bottomWidth: number       // mm (uzun kenar)
  height: number            // mm
  thickness: number         // mm
  notchCount: number        // montaj centik sayisi
  notchWidth: number        // mm
  notchDepth: number        // mm
  bevelType: BevelType
}

export interface TriangularParams {
  baseWidth: number         // mm
  height: number            // mm
  thickness: number         // mm
  tipAngle: number          // derece
  shankType: 'none' | 'round' | 'flat'
  shankDiameter: number     // mm (round sap icin)
  shankLength: number       // mm
  bevelType: BevelType
}

export interface HookParams {
  overallLength: number     // mm
  overallWidth: number      // mm
  thickness: number         // mm
  hookDepth: number         // mm
  curveRadius: number       // mm
  hasBackEdge: boolean
  mountingType: 'notch' | 'tang' | 'hole'
  notches: Notch[]
}

export interface CustomParams {
  boundingWidth: number     // mm
  boundingHeight: number    // mm
  thickness: number         // mm
  sideCount: number         // kenar sayisi (5=besgen, 6=altigen, vb.)
  circumscribedDiameter: number  // mm
  centerHoleDiameter: number     // mm
  bevelType: BevelType
  holes: MountingHole[]
  // Ozel profil icin SVG path veya nokta listesi
  customPoints: { x: number; y: number }[]
}

// =============================================================================
// KENAR PROFILI (Disli/dalgali bıcaklar icin)
// =============================================================================

export interface ToothProfile {
  type: EdgeType
  pitch: number           // mm — dis araligi
  depth: number           // mm — dis derinligi
  angle: number           // derece — dis acisi (V-dis icin)
  count?: number          // toplam dis sayisi (otomatik hesaplanabilir)
  sides: ('top' | 'bottom' | 'left' | 'right' | 'outer' | 'inner')[]
}

// =============================================================================
// ANA BICAK MODELI
// =============================================================================

export type GeometryParams =
  | { geometry: 'circular'; params: CircularParams }
  | { geometry: 'rectangular'; params: RectangularParams }
  | { geometry: 'oblong'; params: OblongParams }
  | { geometry: 'trapezoid'; params: TrapezoidParams }
  | { geometry: 'triangular'; params: TriangularParams }
  | { geometry: 'hook'; params: HookParams }
  | { geometry: 'custom'; params: CustomParams }

export interface BladeSpec {
  id: string
  name: string
  geometry: BladeGeometry
  params: GeometryParams['params']
  edgeProfile?: ToothProfile
  material?: string
  hardness?: string
  coating?: string
  notes?: string
  createdAt: Date
}

// =============================================================================
// CANVAS STATE
// =============================================================================

export interface CanvasState {
  zoom: number              // 1.0 = 100%
  panX: number              // px
  panY: number              // px
  showGrid: boolean
  showDimensions: boolean
  showCenterLines: boolean
  snapToGrid: boolean
  gridSpacing: number       // mm
  selectedElement: string | null
  isDragging: boolean
  dragTarget: 'pan' | 'element' | null
}

export interface DimensionLine {
  id: string
  fromX: number     // mm
  fromY: number     // mm
  toX: number       // mm
  toY: number       // mm
  offset: number    // mm — boyut cizgisi uzakligi
  value: number     // mm — gosterilen deger
  label?: string
  isVertical: boolean
  isRadius: boolean
  isDiameter: boolean
}

// =============================================================================
// UI STATE
// =============================================================================

export type WizardStep = 'geometry' | 'parameters' | 'edge' | 'mounting' | 'preview'

export interface BladeEngineerState {
  step: WizardStep
  spec: BladeSpec
  canvas: CanvasState
  dimensions: DimensionLine[]
  isExporting: boolean
  showQuoteForm: boolean
}

// =============================================================================
// PARAMETRE TANIMLAMALARI (Form builder icin)
// =============================================================================

export interface ParamField {
  key: string
  labelKey: string        // i18n key
  type: 'number' | 'select' | 'boolean' | 'range'
  unit?: string           // mm, derece, vb.
  min?: number
  max?: number
  step?: number
  defaultValue: number | string | boolean
  options?: { value: string; labelKey: string }[]  // select icin
  group: string           // form gruplama
  required: boolean
  tooltip?: string        // i18n key
}

// Geometri bazinda parametre tanimlamalari
export type GeometryParamDefs = Record<BladeGeometry, ParamField[]>
