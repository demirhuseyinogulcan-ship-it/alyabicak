// =============================================================================
// Kesim Mühendisliği Simülatörü — Tip Tanımları
// Alya Bıçak | alyabicak.com
// =============================================================================
// Tüm simülatör bileşenleri bu tip tanımlarını paylaşır.
// SOLID: Interface Segregation — her domain kendi tiplerini tanımlar.
// =============================================================================

// ---------------------------------------------------------------------------
// 1. ENUM & UNION TİPLERİ
// ---------------------------------------------------------------------------

/** Bevel (bileme) türleri — akademik sınıflandırma */
export type BevelType =
  | 'single'        // Tek taraflı (chisel grind) — Japon usulü
  | 'double'        // Çift taraflı (V-grind) — Batı usulü
  | 'compound'      // Bileşik — birincil + ikincil pah
  | 'hollow'        // İçbükey (hollow grind) — ustura tipi
  | 'convex'        // Dışbükey (convex grind) — Scandi tipi
  | 'flat';         // Düz (flat grind) — tam kama

/** Bıçak profil tipleri — endüstriyel sınıflandırma */
export type BladeProfile =
  | 'straight'      // Düz kenar
  | 'curved'        // Kavisli kenar
  | 'serrated'      // Dişli kenar
  | 'scalloped'     // Tarak dişli
  | 'wave'          // Dalga kenar
  | 'hook'          // Kanca uçlu
  | 'pointed'       // Sivri uçlu
  | 'rounded';      // Yuvarlak uçlu

/** Endüstriyel bıçak tipleri — Alya ürün gamına uygun */
export type BladeType =
  | 'slitting-3hole'       // 3 delikli dilme jileti
  | 'slitting-slotted'     // Slotted dilme jileti
  | 'slitting-injector'    // İnjektör dilme jileti
  | 'single-edge'          // Tek kenarlı jilet
  | 'trapezoid'            // Trapez bıçak
  | 'hook-blade'           // Kanca bıçak
  | 'circular'             // Dairesel jilet
  | 'craft-blade'          // Maket bıçağı ucu
  | 'scalpel'              // Bisturi / neşter
  | 'pentagon'             // Beşgen bıçak
  | 'lamella'              // Lamel / yaprak bıçak
  | 'rotary-knife'         // Döner bıçak
  | 'band-knife'           // Bant bıçak
  | 'razor-blade'          // Endüstriyel jilet
  | 'custom';              // Özel tip

/** Bıçak kategorileri — strateji seçimi için */
export type BladeCategory = 'linear' | 'circular';

/** Bıçak tipi → kategori dönüşümü (Strategy dispatch) */
const CIRCULAR_BLADE_TYPES: ReadonlySet<BladeType> = new Set(['circular', 'rotary-knife']);

export function getBladeCategory(bladeType: BladeType): BladeCategory {
  return CIRCULAR_BLADE_TYPES.has(bladeType) ? 'circular' : 'linear';
}

export function isCircularBladeType(bladeType: BladeType): boolean {
  return CIRCULAR_BLADE_TYPES.has(bladeType);
}

/** Kesilen malzeme kategorileri */
export type MaterialCategory =
  | 'film'          // Plastik filmler (PE, PP, PET, PVC)
  | 'paper'         // Kağıt / karton
  | 'foil'          // Metal folyo (alüminyum)
  | 'tape'          // Bant (yapışkanlı, maskeleme)
  | 'textile'       // Tekstil / kumaş
  | 'nonwoven'      // Nonwoven / keçe
  | 'rubber'        // Kauçuk / silikon
  | 'composite'     // Kompozit malzeme
  | 'foam'          // Köpük (EPS, EPE, PU)
  | 'label'         // Etiket malzeme
  | 'laminate'      // Laminat
  | 'corrugated'    // Oluklu mukavva
  | 'cardboard';    // Karton

/** Bıçak malzeme türleri */
export type BladeMaterial =
  | 'carbon-steel'       // Karbonlu çelik (SK5, SK7, C75S)
  | 'stainless-steel'    // Paslanmaz çelik (420, 440C)
  | 'hss'                // Yüksek hız çeliği (M2, M42)
  | 'tungsten-carbide'   // Tungsten karbür (WC-Co)
  | 'ceramic'            // Seramik (ZrO₂, Si₃N₄)
  | 'coated-carbide'     // Kaplamalı karbür (TiN, TiAlN, DLC)
  | 'tool-steel';        // Takım çeliği (D2, A2, O1)

/** Kaplama türleri */
export type CoatingType =
  | 'none'
  | 'tin'           // Titanyum nitrür (TiN)
  | 'tialn'         // Titanyum alüminyum nitrür (TiAlN)
  | 'crn'           // Krom nitrür (CrN)
  | 'dlc'           // Diamond-Like Carbon
  | 'ptfe'          // Teflon (yapışma önleyici)
  | 'chrome'        // Krom kaplama
  | 'titanium'      // Titanyum kaplama
  | 'ceramic';      // Seramik kaplama (Al₂O₃)

/** Makine türleri */
export type MachineType =
  | 'slitter-rewinder'   // Dilme-sarım makinesi
  | 'sheeter'            // Tabaka kesim makinesi
  | 'die-cutter'         // Kalıp kesim makinesi
  | 'guillotine'         // Giyotin kesim
  | 'rotary-cutter'      // Döner kesim makinesi
  | 'crush-cutter'       // Ezme kesim
  | 'razor-slitter'      // Jilet dilme
  | 'shear-slitter'      // Makaslama dilme
  | 'score-slitter'      // Çizme dilme
  | 'ultrasonic'         // Ultrasonik kesim
  | 'manual';            // Manuel / elle kesim

/** Kesim yöntemi */
export type CuttingMethod =
  | 'shear'         // Makaslama (iki bıçak arası)
  | 'score'         // Çizme (basınçla ezme)
  | 'razor'         // Jilet ile dilme (tek bıçak)
  | 'crush'         // Ezme kesim (sert karşılık silindire)
  | 'rotary'        // Döner kesim
  | 'die'           // Kalıp kesim
  | 'ultrasonic'    // Ultrasonik kesim
  | 'laser';        // Lazer kesim

// ---------------------------------------------------------------------------
// 2. MALZEME VERİ MODELLERİ
// ---------------------------------------------------------------------------

/** Kesilen malzeme fiziksel özellikleri */
export interface CutMaterialProperties {
  readonly id: string;
  readonly category: MaterialCategory;
  readonly name: string;
  readonly nameEN: string;

  /** Çekme dayanımı (MPa) */
  readonly tensileStrength: number;
  /** Elastisite modülü (GPa) — rijitlik */
  readonly elasticModulus: number;
  /** Kalınlık aralığı (µm) */
  readonly thicknessRange: readonly [number, number];
  /** Sürtünme katsayısı (0–1) */
  readonly frictionCoefficient: number;
  /** Aşındırıcılık faktörü (0–10, 10 = en aşındırıcı) */
  readonly abrasiveness: number;
  /** Yapışkanlık faktörü (0–10, 10 = en yapışkan) */
  readonly adhesionFactor: number;
  /** Termal duyarlılık (0–10, 10 = en duyarlı) */
  readonly thermalSensitivity: number;
  /** Yoğunluk (g/cm³) */
  readonly density: number;
  /** Önerilen bileme açısı aralığı (°) */
  readonly recommendedAngleRange: readonly [number, number];
  /** Renk (görselleştirme) */
  readonly color: string;
  /** Açıklama */
  readonly description: string;
}

/** Bıçak malzemesi fiziksel özellikleri */
export interface BladeMaterialProperties {
  readonly id: BladeMaterial;
  readonly name: string;
  readonly nameEN: string;

  /** Sertlik (HRC) */
  readonly hardnessHRC: readonly [number, number];
  /** Çekme dayanımı (MPa) */
  readonly tensileStrength: number;
  /** Elastisite modülü (GPa) */
  readonly elasticModulus: number;
  /** Kırılma tokluğu (MPa·√m) */
  readonly fractureToughness: number;
  /** Termal iletkenlik (W/m·K) */
  readonly thermalConductivity: number;
  /** Yoğunluk (g/cm³) */
  readonly density: number;
  /** Korozyon direnci (0–10) */
  readonly corrosionResistance: number;
  /** Aşınma direnci (0–10) */
  readonly wearResistance: number;
  /** Bilenebilirlik (0–10) */
  readonly sharpenability: number;
  /** Maliyet endeksi (1 = en ucuz) */
  readonly costIndex: number;
  /** Maksimum çalışma sıcaklığı (°C) */
  readonly maxOperatingTemp: number;
  /** Açıklama */
  readonly description: string;
}

// ---------------------------------------------------------------------------
// 3. BIÇAK GEOMETRİ MODELLERİ
// ---------------------------------------------------------------------------

/** Bıçak geometrik parametreleri */
export interface BladeGeometry {
  /** Bevel (pah) türü */
  bevelType: BevelType;
  /** Birincil bileme açısı (°) — her taraf için, dahil açı = 2 × bu */
  primaryAngle: number;
  /** İkincil bileme açısı (°) — compound bevel için */
  secondaryAngle: number | null;
  /** Bıçak kalınlığı (mm) */
  bladeThickness: number;
  /** Kenar yarıçapı (µm) — 0 = mükemmel keskin (teorik) */
  edgeRadius: number;  /** Talaş açısı / montaj açısı (°) — pozitif = ileri eğim, negatif = geri eğim */
  rakeAngle: number;  /** Hollow grind yarıçapı (mm) — hollow bevel için */
  hollowRadius: number | null;
  /** Bıçak yüksekliği / genişliği (mm) */
  bladeHeight: number;
  /** Bıçak profili */
  profile: BladeProfile;
}

/** Bevel (pah) geometri hesaplama sonucu */
export interface BevelGeometryResult {
  /** Dahil açı (°) — kesme ucu açısı */
  includedAngle: number;
  /** Pah yüksekliği (mm) — bileme noktasından sırta */
  bevelHeight: number;
  /** Kenar kalınlığı (µm) — fiili kesme noktası kalınlığı */
  edgeThickness: number;
  /** Kesme ucu alanı (mm²) — enine kesit */
  wedgeArea: number;
  /** Açıklık genişliği (mm) — karşılık malzemeye nüfuz genişliği */
  penetrationWidth: number;
  /** Bevel A yüzey alanı (mm²/mm) — birim uzunluk başına */
  bevelSurfaceA: number;
  /** Bevel B yüzey alanı (mm²/mm) — tek bevel ise 0 */
  bevelSurfaceB: number;
}

// ---------------------------------------------------------------------------
// 4. KESİM KUVVET MODELLERİ
// ---------------------------------------------------------------------------

/** Kesme kuvvet hesaplama girdileri */
export interface ForceCalculationInput {
  /** Malzeme özellikleri */
  material: CutMaterialProperties;
  /** Bıçak geometrisi */
  geometry: BladeGeometry;
  /** Bıçak malzemesi */
  bladeMaterial: BladeMaterialProperties;
  /** Kaplama türü */
  coating: CoatingType;
  /** Kesme hızı (m/min) */
  cuttingSpeed: number;
  /** Malzeme kalınlığı (µm) */
  materialThickness: number;
  /** Kesim yöntemi */
  cuttingMethod: CuttingMethod;
  /** Makaslama boşluğu (% malzeme kalınlığı) — shear slitting için */
  clearance: number;
}

/** Kesme kuvvet hesaplama sonuçları */
export interface ForceCalculationResult {
  /** Toplam kesme kuvveti (N) */
  totalForce: number;
  /** Bıçak ucu normal kuvveti (N) — malzemeye dik */
  normalForce: number;
  /** Sürtünme kuvveti (N) — bevel yüzeylerinde */
  frictionForce: number;
  /** Yarma kuvveti (N) — malzemeyi ayırma */
  separationForce: number;
  /** Spesifik kesme enerjisi (J/m²) */
  specificCuttingEnergy: number;
  /** Kesme basıncı — kenar noktasında (MPa) */
  edgePressure: number;
  /** Güç gereksinimi (W) — verilen hızda */
  powerRequirement: number;
  /** Tahmini sıcaklık artışı (°C) — sürtünme kaynaklı */
  estimatedTemperatureRise: number;
}

// ---------------------------------------------------------------------------
// 5. PERFORMANS METRİKLERİ
// ---------------------------------------------------------------------------

/** 0–100 arası skala metrikleri */
export interface PerformanceMetrics {
  /** Keskinlik endeksi (0–100) */
  sharpness: number;
  /** Dayanıklılık endeksi (0–100) */
  durability: number;
  /** Kenar tutma süresi (göreli, 0–100) */
  edgeRetention: number;
  /** Kesme kalitesi (0–100) */
  cutQuality: number;
  /** Enerji verimliliği (0–100) */
  energyEfficiency: number;
  /** Malzeme uyumu (0–100) */
  materialCompatibility: number;
  /** Genel skor (0–100) — ağırlıklı ortalama */
  overallScore: number;
}

/** Aşınma modeli sonuçları */
export interface WearEstimation {
  /** Tahmini kenar ömrü (kesim-metre) */
  estimatedEdgeLife: number;
  /** Bileme gereksinimi sıklığı (saat) */
  resharpenInterval: number;
  /** Aşınma tipi dağılımı */
  wearDistribution: {
    /** Abrazif aşınma (%) */
    abrasive: number;
    /** Adhezif aşınma (%) */
    adhesive: number;
    /** Oksidasyon aşınması (%) */
    oxidative: number;
    /** Yorulma aşınması (%) */
    fatigue: number;
  };
  /** Kenar gerilemesi hızı (µm/km) */
  edgeRecessionRate: number;
}

// ---------------------------------------------------------------------------
// 6. SİMÜLASYON DURUMU (STATE)
// ---------------------------------------------------------------------------

/** Simülatör sekme tipleri */
export type SimulatorTab =
  | 'geometry'       // Bıçak geometrisi
  | 'forces'         // Kuvvetler
  | 'metrics'        // Metrikler
  | 'analysis';      // Analiz

// NOT: SimulatorState, SimulatorSnapshot ve SimulatorAction tipleri
// useSimulator.ts'de tanımlanır — engine tiplerini doğrudan alır,
// böylece döngüsel bağımlılık önlenir.

// ---------------------------------------------------------------------------
// 7. GÖRSELLEŞTIRME TİPLERİ
// ---------------------------------------------------------------------------

/** SVG kesit çizimi parametreleri */
export interface CrossSectionViewConfig {
  /** Çizim genişliği (px) */
  width: number;
  /** Çizim yüksekliği (px) */
  height: number;
  /** Yakınlaştırma seviyesi */
  zoom: number;
  /** Açı gösterimi açık/kapalı */
  showAngles: boolean;
  /** Kuvvet vektörleri açık/kapalı */
  showForces: boolean;
  /** Boyut gösterimi açık/kapalı */
  showDimensions: boolean;
  /** Kılavuz çizgileri */
  showGrid: boolean;
  /** Animasyon açık/kapalı */
  animated: boolean;
  /** Renk teması */
  theme: 'light' | 'dark';
}

/** Animasyon durumu */
export interface AnimationState {
  /** Animasyon çalışıyor mu */
  isPlaying: boolean;
  /** Animasyon karesi (0–1 arası) */
  progress: number;
  /** Animasyon hızı çarpanı */
  speed: number;
  /** Nüfuz derinliği (animasyonda) */
  currentPenetration: number;
}

/** SVG çizim koordinatları */
export interface BladePathPoints {
  /** Bıçak sırt çizgisi */
  spine: readonly [number, number][];
  /** Bevel A çizgisi (sol) */
  bevelA: readonly [number, number][];
  /** Bevel B çizgisi (sağ) */
  bevelB: readonly [number, number][];
  /** Kenar ucu noktası */
  edgeTip: [number, number];
  /** İkincil bevel çizgisi A (compound bevel için) */
  secondaryBevelA?: readonly [number, number][];
  /** İkincil bevel çizgisi B (compound bevel için) */
  secondaryBevelB?: readonly [number, number][];
}

// ---------------------------------------------------------------------------
// 7b. DAİRESEL BIÇAK TİPLERİ (Faz 3)
// ---------------------------------------------------------------------------

/** Dairesel bıçak parametreleri — circular ve rotary-knife tipleri için */
export interface CircularBladeParams {
  /** Dış çap (mm) */
  outerDiameter: number;
  /** İç çap / montaj deliği (mm) */
  innerDiameter: number;
  /** Dish açısı (°) — 0 = düz, >0 = konkav (dished) */
  dishAngle: number;
  /** Bıçak overlap (mm) — shear slitting çift bıçak konfigürasyonu */
  bladeOverlap: number;
}

/** Dairesel bıçak geometri sonucu — lineer BevelGeometryResult'ı genişletir */
export interface CircularBevelGeometryResult extends BevelGeometryResult {
  /** Temas yay uzunluğu (mm) — L = 2√(R × t) */
  contactArcLength: number;
  /** Etkin kesim yarıçapı (mm) — OD/2 - overlap */
  effectiveCuttingRadius: number;
  /** Çevre uzunluğu (mm) — π × OD */
  circumference: number;
}

/** Dairesel bıçak SVG çizim koordinatları */
export interface CircularBladePathPoints {
  /** Dış daire */
  outerCircle: { cx: number; cy: number; r: number };
  /** İç daire (montaj deliği) */
  innerCircle: { cx: number; cy: number; r: number };
  /** Kenar bevel profili — radyal kesit çizgisi */
  edgeProfile: readonly [number, number][];
  /** Disk kalınlık çizgisi */
  thicknessLine: readonly [number, number][];
  /** Boyut çizgileri için referans noktaları */
  dimensionAnchors: {
    odLeft: [number, number];
    odRight: [number, number];
    idLeft: [number, number];
    idRight: [number, number];
    thicknessTop: [number, number];
    thicknessBottom: [number, number];
  };
}

/** Kuvvet vektör gösterimi */
export interface ForceVector {
  /** Başlangıç noktası */
  origin: [number, number];
  /** Büyüklük (px olarak ölçekli) */
  magnitude: number;
  /** Açı (°, saat 12 yönü = 0) */
  angle: number;
  /** Etiket */
  label: string;
  /** Renk */
  color: string;
}

// ---------------------------------------------------------------------------
// 8. RAPOR VE ÇIKTI TİPLERİ
// ---------------------------------------------------------------------------

/** Simülatör tavsiye kartı */
export interface Recommendation {
  /** Başlık */
  title: string;
  /** Açıklama */
  description: string;
  /** Öncelik (1 = en yüksek) */
  priority: number;
  /** Kategori */
  category: 'angle' | 'material' | 'coating' | 'method' | 'maintenance';
  /** İyileştirme potansiyeli (%) */
  improvementPotential: number;
}

/** Tam simülasyon raporu */
export interface SimulationReport {
  /** Benzersiz rapor kimliği */
  id: string;
  /** Zaman damgası */
  timestamp: number;
  /** Giriş parametreleri */
  input: {
    materialName: string;
    materialCategory: MaterialCategory;
    bladeType: string;
    bladeMaterial: string;
    primaryAngle: number;
    secondaryAngle?: number;
    bevelType: BevelType;
    coating: CoatingType;
    bladeThickness: number;
    edgeRadius: number;
    machineType: MachineType;
    cuttingMethod: CuttingMethod;
    cuttingSpeed: number;
    materialThickness: number;
  };
  /** Hesaplama sonuçları */
  results: {
    includedAngle: number;
    sharpnessIndex: number;
    durabilityIndex: number;
    totalForce: number;
    specificEnergy: number;
    power: number;
    edgeLife: number;
    resharpenInterval: number;
    performanceMetrics: PerformanceMetrics;
    materialCompatibility: number;
  };
  /** Tavsiyeler */
  recommendations: Recommendation[];
}

// NOT: Reducer action tipleri useSimulator.ts'de tanımlanır.
