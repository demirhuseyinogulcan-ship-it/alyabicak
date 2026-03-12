// =============================================================================
// Kesim Mühendisliği Simülatörü — Sabitler ve Veritabanları
// Alya Bıçak | alyabicak.com
// =============================================================================
// Akademik ve endüstriyel verilere dayalı malzeme & bıçak veritabanı.
// Kaynaklar: M.01–M.44 makale serisi, ASM Handbook, Kalpakjian MFG Processes
// =============================================================================

import type {
  CutMaterialProperties,
  BladeMaterialProperties,
  BevelType,
  BladeType,
  CoatingType,
  CuttingMethod,
  MachineType,
  MaterialCategory,
} from './types';

// ---------------------------------------------------------------------------
// 1. KESİLEN MALZEME VERİTABANI
// ---------------------------------------------------------------------------

export const CUT_MATERIALS: readonly CutMaterialProperties[] = [
  // ---- FİLM MALZEMELERİ ----
  {
    id: 'ldpe-film',
    category: 'film',
    name: 'LDPE Film (Düşük Yoğunluklu Polietilen)',
    nameEN: 'LDPE Film (Low Density Polyethylene)',
    tensileStrength: 15,      // MPa
    elasticModulus: 0.2,      // GPa
    thicknessRange: [15, 200],
    frictionCoefficient: 0.33,
    abrasiveness: 1,
    adhesionFactor: 3,
    thermalSensitivity: 8,
    density: 0.92,
    recommendedAngleRange: [15, 25],
    color: '#e0f2fe',
    description: 'Streç film, poşet, ambalaj filmi. Düşük kopma dayanımı, yüksek uzama.',
  },
  {
    id: 'hdpe-film',
    category: 'film',
    name: 'HDPE Film (Yüksek Yoğunluklu Polietilen)',
    nameEN: 'HDPE Film (High Density Polyethylene)',
    tensileStrength: 32,
    elasticModulus: 1.0,
    thicknessRange: [15, 250],
    frictionCoefficient: 0.29,
    abrasiveness: 1.5,
    adhesionFactor: 2,
    thermalSensitivity: 7,
    density: 0.95,
    recommendedAngleRange: [18, 28],
    color: '#dbeafe',
    description: 'Market poşetleri, endüstriyel astar filmi. Daha rijit, daha düşük uzama.',
  },
  {
    id: 'bopp-film',
    category: 'film',
    name: 'BOPP Film (Çift Eksen Polipropilen)',
    nameEN: 'BOPP Film (Biaxially Oriented Polypropylene)',
    tensileStrength: 140,
    elasticModulus: 2.5,
    thicknessRange: [12, 80],
    frictionCoefficient: 0.35,
    abrasiveness: 2,
    adhesionFactor: 2,
    thermalSensitivity: 6,
    density: 0.91,
    recommendedAngleRange: [20, 30],
    color: '#f0f9ff',
    description: 'Ambalaj, etiket, laminasyon. Yüksek berraklık, iyi mekanik özellikler.',
  },
  {
    id: 'pet-film',
    category: 'film',
    name: 'PET Film (Polyester)',
    nameEN: 'PET Film (Polyethylene Terephthalate)',
    tensileStrength: 200,
    elasticModulus: 4.0,
    thicknessRange: [6, 350],
    frictionCoefficient: 0.40,
    abrasiveness: 3.5,
    adhesionFactor: 1.5,
    thermalSensitivity: 5,
    density: 1.39,
    recommendedAngleRange: [22, 35],
    color: '#ecfeff',
    description: 'Yüksek mukavemet film. Elektrik izolasyonu, ambalaj, baskı. Aşındırıcı.',
  },
  {
    id: 'pvc-film',
    category: 'film',
    name: 'PVC Film (Polivinil Klorür)',
    nameEN: 'PVC Film (Polyvinyl Chloride)',
    tensileStrength: 50,
    elasticModulus: 3.0,
    thicknessRange: [20, 500],
    frictionCoefficient: 0.45,
    abrasiveness: 4,
    adhesionFactor: 4,
    thermalSensitivity: 9,
    density: 1.40,
    recommendedAngleRange: [25, 35],
    color: '#f0fdfa',
    description: 'Shrink film, koruyucu film, PVC bant. Klor içeriği bıçak korozyonunu hızlandırır.',
  },
  {
    id: 'stretch-film',
    category: 'film',
    name: 'Streç Film (LLDPE bazlı)',
    nameEN: 'Stretch Film (LLDPE based)',
    tensileStrength: 28,
    elasticModulus: 0.3,
    thicknessRange: [8, 35],
    frictionCoefficient: 0.50,
    abrasiveness: 1,
    adhesionFactor: 7,
    thermalSensitivity: 8,
    density: 0.92,
    recommendedAngleRange: [12, 22],
    color: '#faf5ff',
    description: 'Palet sarma filmi. Ekstrem uzama (%300+), yüksek yapışkanlık. Dar açı gerektirir.',
  },

  // ---- KAĞIT / KARTON ----
  {
    id: 'kraft-paper',
    category: 'paper',
    name: 'Kraft Kağıt',
    nameEN: 'Kraft Paper',
    tensileStrength: 80,
    elasticModulus: 5.0,
    thicknessRange: [40, 300],
    frictionCoefficient: 0.50,
    abrasiveness: 5,
    adhesionFactor: 1,
    thermalSensitivity: 3,
    density: 0.70,
    recommendedAngleRange: [25, 40],
    color: '#fef3c7',
    description: 'Torba, ambalaj kağıdı. Selüloz lifleri aşındırıcıdır. Geniş açı gerektirir.',
  },
  {
    id: 'coated-paper',
    category: 'paper',
    name: 'Kuşe Kağıt',
    nameEN: 'Coated Paper',
    tensileStrength: 65,
    elasticModulus: 6.0,
    thicknessRange: [60, 350],
    frictionCoefficient: 0.40,
    abrasiveness: 6,
    adhesionFactor: 1,
    thermalSensitivity: 3,
    density: 1.10,
    recommendedAngleRange: [28, 42],
    color: '#fffbeb',
    description: 'Kalsiyum karbonat/kaolin kaplı. CaCO₃ çok aşındırıcıdır (bıçak ömrünü kısaltır).',
  },
  {
    id: 'tissue-paper',
    category: 'paper',
    name: 'Tuvalet Kağıdı / Peçete (Tissue)',
    nameEN: 'Tissue Paper',
    tensileStrength: 8,
    elasticModulus: 0.5,
    thicknessRange: [50, 200],
    frictionCoefficient: 0.60,
    abrasiveness: 2,
    adhesionFactor: 2,
    thermalSensitivity: 4,
    density: 0.15,
    recommendedAngleRange: [18, 28],
    color: '#fefce8',
    description: 'Çok düşük mukavemet, yüksek gözeneklilik. Temiz kesim için keskin kenar şart.',
  },
  {
    id: 'cardboard',
    category: 'paper',
    name: 'Karton (Solid Board)',
    nameEN: 'Cardboard / Solid Board',
    tensileStrength: 45,
    elasticModulus: 4.0,
    thicknessRange: [300, 2000],
    frictionCoefficient: 0.55,
    abrasiveness: 5.5,
    adhesionFactor: 1,
    thermalSensitivity: 2,
    density: 0.80,
    recommendedAngleRange: [30, 45],
    color: '#fde68a',
    description: 'Ambalaj kartonu. Sert, kalın, aşındırıcı. Geniş açı + sert bıçak.',
  },

  // ---- FOLYO ----
  {
    id: 'aluminum-foil',
    category: 'foil',
    name: 'Alüminyum Folyo',
    nameEN: 'Aluminum Foil',
    tensileStrength: 70,
    elasticModulus: 69,
    thicknessRange: [6, 200],
    frictionCoefficient: 0.35,
    abrasiveness: 3,
    adhesionFactor: 2,
    thermalSensitivity: 2,
    density: 2.70,
    recommendedAngleRange: [20, 35],
    color: '#e2e8f0',
    description: 'Gıda, ilaç ambalajı. Metalik — bıçağa yapışma riski, çapak oluşumu dikkat.',
  },

  // ---- BANT ----
  {
    id: 'adhesive-tape',
    category: 'tape',
    name: 'Yapışkanlı Bant (Akrilik/Hotmelt)',
    nameEN: 'Adhesive Tape (Acrylic/Hotmelt)',
    tensileStrength: 35,
    elasticModulus: 1.5,
    thicknessRange: [30, 200],
    frictionCoefficient: 0.70,
    abrasiveness: 2,
    adhesionFactor: 9,
    thermalSensitivity: 7,
    density: 1.10,
    recommendedAngleRange: [15, 25],
    color: '#fef9c3',
    description: 'Ambalaj bandı. Yüksek yapışkanlık. PTFE kaplama veya anti-stik bıçak zorunlu.',
  },
  {
    id: 'masking-tape',
    category: 'tape',
    name: 'Maskeleme Bandı',
    nameEN: 'Masking Tape',
    tensileStrength: 25,
    elasticModulus: 2.0,
    thicknessRange: [80, 200],
    frictionCoefficient: 0.55,
    abrasiveness: 3,
    adhesionFactor: 6,
    thermalSensitivity: 5,
    density: 0.90,
    recommendedAngleRange: [18, 30],
    color: '#fde68a',
    description: 'Kağıt bazlı bant. Krepon kağıt + yapıştırıcı kombinasyonu.',
  },
  {
    id: 'double-sided-tape',
    category: 'tape',
    name: 'Çift Taraflı Bant',
    nameEN: 'Double-Sided Tape',
    tensileStrength: 20,
    elasticModulus: 0.5,
    thicknessRange: [50, 500],
    frictionCoefficient: 0.80,
    abrasiveness: 1,
    adhesionFactor: 10,
    thermalSensitivity: 8,
    density: 1.05,
    recommendedAngleRange: [12, 20],
    color: '#fef3c7',
    description: 'Her iki yüzey yapışkan. En zor kesim malzemelerinden — bıçağa yapışır.',
  },

  // ---- TEKSTİL ----
  {
    id: 'woven-fabric',
    category: 'textile',
    name: 'Dokuma Kumaş',
    nameEN: 'Woven Fabric',
    tensileStrength: 300,
    elasticModulus: 8.0,
    thicknessRange: [100, 3000],
    frictionCoefficient: 0.50,
    abrasiveness: 4,
    adhesionFactor: 2,
    thermalSensitivity: 4,
    density: 1.30,
    recommendedAngleRange: [25, 40],
    color: '#ddd6fe',
    description: 'Polyester, pamuk, naylon dokuma. Lif tipi ve örgü sıklığı kesimi etkiler.',
  },

  // ---- NONWOVEN ----
  {
    id: 'nonwoven',
    category: 'nonwoven',
    name: 'Nonwoven Kumaş (Spunbond/Meltblown)',
    nameEN: 'Nonwoven Fabric',
    tensileStrength: 25,
    elasticModulus: 0.3,
    thicknessRange: [100, 5000],
    frictionCoefficient: 0.55,
    abrasiveness: 2,
    adhesionFactor: 3,
    thermalSensitivity: 7,
    density: 0.20,
    recommendedAngleRange: [18, 30],
    color: '#f5f3ff',
    description: 'Hijyenik ürünler, filtre, ambalaj. Düşük mukavemet ama yüksek hacim.',
  },

  // ---- KAUÇUK ----
  {
    id: 'rubber-sheet',
    category: 'rubber',
    name: 'Kauçuk Levha (SBR/EPDM)',
    nameEN: 'Rubber Sheet (SBR/EPDM)',
    tensileStrength: 18,
    elasticModulus: 0.01,
    thicknessRange: [500, 10000],
    frictionCoefficient: 0.80,
    abrasiveness: 3,
    adhesionFactor: 5,
    thermalSensitivity: 5,
    density: 1.20,
    recommendedAngleRange: [15, 25],
    color: '#1e293b',
    description: 'Çok elastik. Kesim için çok keskin + dar açılı bıçak. Sürtünme çok yüksek.',
  },

  // ---- KOMPOZİT ----
  {
    id: 'laminate-film',
    category: 'laminate',
    name: 'Laminat Film (PET/AL/PE)',
    nameEN: 'Laminate Film (PET/AL/PE)',
    tensileStrength: 120,
    elasticModulus: 8.0,
    thicknessRange: [50, 400],
    frictionCoefficient: 0.45,
    abrasiveness: 5,
    adhesionFactor: 3,
    thermalSensitivity: 5,
    density: 1.50,
    recommendedAngleRange: [25, 38],
    color: '#d1d5db',
    description: 'Çok katmanlı ambalaj. Metal + plastik katmanlar → değişken kesme kuvveti.',
  },

  // ---- KÖPÜK ----
  {
    id: 'epe-foam',
    category: 'foam',
    name: 'EPE Köpük (Polietilen Köpük)',
    nameEN: 'EPE Foam (Expanded Polyethylene)',
    tensileStrength: 1.5,
    elasticModulus: 0.01,
    thicknessRange: [1000, 50000],
    frictionCoefficient: 0.40,
    abrasiveness: 0.5,
    adhesionFactor: 1,
    thermalSensitivity: 9,
    density: 0.03,
    recommendedAngleRange: [10, 20],
    color: '#f0fdf4',
    description: 'Koruyucu ambalaj köpüğü. Çok yumuşak — ultra keskin bıçak ve dar açı.',
  },

  // ---- ETİKET ----
  {
    id: 'label-stock',
    category: 'label',
    name: 'Etiket Malzeme (Facestock + Yapıştırıcı + Liner)',
    nameEN: 'Label Stock (Facestock + Adhesive + Liner)',
    tensileStrength: 60,
    elasticModulus: 3.0,
    thicknessRange: [60, 250],
    frictionCoefficient: 0.50,
    abrasiveness: 3.5,
    adhesionFactor: 7,
    thermalSensitivity: 6,
    density: 1.10,
    recommendedAngleRange: [18, 30],
    color: '#fefce8',
    description: 'Çok katmanlı: yüzey + yapıştırıcı + silikon + backing. Yapışkanlık problemi.',
  },

  // ---- OLUKLU MUKAVVA ----
  {
    id: 'corrugated',
    category: 'corrugated',
    name: 'Oluklu Mukavva (E/B/C Dalga)',
    nameEN: 'Corrugated Board (E/B/C Flute)',
    tensileStrength: 35,
    elasticModulus: 2.0,
    thicknessRange: [1500, 7000],
    frictionCoefficient: 0.60,
    abrasiveness: 6,
    adhesionFactor: 1,
    thermalSensitivity: 2,
    density: 0.30,
    recommendedAngleRange: [30, 50],
    color: '#d4a574',
    description: 'Koli, kutu malzemesi. Çok aşındırıcı (CaCO₃ dolgu). Geniş açı + sert bıçak.',
  },
] as const;

// ---------------------------------------------------------------------------
// 2. BIÇAK MALZEME VERİTABANI
// ---------------------------------------------------------------------------

export const BLADE_MATERIALS: readonly BladeMaterialProperties[] = [
  {
    id: 'carbon-steel',
    name: 'Karbonlu Çelik (SK5/SK7/C75S)',
    nameEN: 'Carbon Steel (SK5/SK7/C75S)',
    hardnessHRC: [58, 64],
    tensileStrength: 2000,
    elasticModulus: 210,
    fractureToughness: 25,
    thermalConductivity: 50,
    density: 7.85,
    corrosionResistance: 2,
    wearResistance: 6,
    sharpenability: 9,
    costIndex: 1.0,
    maxOperatingTemp: 200,
    description: 'En yaygın jilet malzemesi. Yüksek sertlik, kolay bileme. Korozyon riski.',
  },
  {
    id: 'stainless-steel',
    name: 'Paslanmaz Çelik (420/440C/x50CrMoV15)',
    nameEN: 'Stainless Steel (420/440C/x50CrMoV15)',
    hardnessHRC: [52, 62],
    tensileStrength: 1800,
    elasticModulus: 200,
    fractureToughness: 30,
    thermalConductivity: 25,
    density: 7.75,
    corrosionResistance: 7,
    wearResistance: 5,
    sharpenability: 7,
    costIndex: 2.0,
    maxOperatingTemp: 300,
    description: 'Korozyon dirençli. Gıda, tıbbi, nemli ortam uygulamaları. Orta aşınma direnci.',
  },
  {
    id: 'hss',
    name: 'Yüksek Hız Çeliği (M2/M42)',
    nameEN: 'High Speed Steel (M2/M42)',
    hardnessHRC: [62, 67],
    tensileStrength: 2500,
    elasticModulus: 220,
    fractureToughness: 20,
    thermalConductivity: 25,
    density: 8.15,
    corrosionResistance: 3,
    wearResistance: 8,
    sharpenability: 5,
    costIndex: 4.0,
    maxOperatingTemp: 550,
    description: 'Yüksek aşınma direnci, termal kararlılık. Yüksek hız dilme uygulamaları.',
  },
  {
    id: 'tungsten-carbide',
    name: 'Tungsten Karbür (WC-Co)',
    nameEN: 'Tungsten Carbide (WC-Co)',
    hardnessHRC: [75, 92],
    tensileStrength: 1500,
    elasticModulus: 620,
    fractureToughness: 12,
    thermalConductivity: 80,
    density: 14.9,
    corrosionResistance: 8,
    wearResistance: 10,
    sharpenability: 2,
    costIndex: 10.0,
    maxOperatingTemp: 800,
    description: 'En yüksek aşınma direnci. 10-50x daha uzun ömür. Kırılgan, bilemesi zor.',
  },
  {
    id: 'ceramic',
    name: 'Seramik (ZrO₂ / Si₃N₄)',
    nameEN: 'Ceramic (ZrO₂ / Si₃N₄)',
    hardnessHRC: [80, 90],
    tensileStrength: 500,
    elasticModulus: 300,
    fractureToughness: 6,
    thermalConductivity: 3,
    density: 6.0,
    corrosionResistance: 10,
    wearResistance: 9,
    sharpenability: 1,
    costIndex: 15.0,
    maxOperatingTemp: 1200,
    description: 'Kimyasal inert, aşırı sert. Gıda/ilaç uygulamaları. Çok kırılgan.',
  },
  {
    id: 'coated-carbide',
    name: 'Kaplamalı Karbür (TiN/TiAlN/DLC)',
    nameEN: 'Coated Carbide (TiN/TiAlN/DLC)',
    hardnessHRC: [78, 92],
    tensileStrength: 1500,
    elasticModulus: 600,
    fractureToughness: 11,
    thermalConductivity: 70,
    density: 14.5,
    corrosionResistance: 9,
    wearResistance: 10,
    sharpenability: 1,
    costIndex: 14.0,
    maxOperatingTemp: 900,
    description: 'Tungsten karbür + PVD/CVD kaplama. Maksimum ömür, minimum sürtünme.',
  },
  {
    id: 'tool-steel',
    name: 'Takım Çeliği (D2/A2/O1)',
    nameEN: 'Tool Steel (D2/A2/O1)',
    hardnessHRC: [58, 65],
    tensileStrength: 2200,
    elasticModulus: 210,
    fractureToughness: 28,
    thermalConductivity: 20,
    density: 7.70,
    corrosionResistance: 4,
    wearResistance: 7,
    sharpenability: 6,
    costIndex: 3.0,
    maxOperatingTemp: 350,
    description: 'D2 yarı paslanmaz (%12 Cr). İyi toughness-hardness dengesi. Kalıp/dilme.',
  },
] as const;

// ---------------------------------------------------------------------------
// 3. BEVEL TİPLERİ META VERİLERİ
// ---------------------------------------------------------------------------

export interface BevelTypeInfo {
  readonly id: BevelType;
  readonly name: string;
  readonly nameEN: string;
  readonly description: string;
  readonly angleRange: readonly [number, number];
  readonly symmetry: 'symmetric' | 'asymmetric';
  readonly complexity: 1 | 2 | 3;
  readonly typicalApplications: readonly string[];
}

export const BEVEL_TYPES: readonly BevelTypeInfo[] = [
  {
    id: 'double',
    name: 'Çift Taraflı V-Bileme',
    nameEN: 'Double Bevel (V-Grind)',
    description: 'Her iki tarafta eşit açıda bileme. En yaygın endüstriyel bileme. Dahil açı = 2 × bileme açısı.',
    angleRange: [10, 50],
    symmetry: 'symmetric',
    complexity: 1,
    typicalApplications: ['Dilme jiletleri', 'Trapez bıçaklar', 'Maket bıçağı', 'Genel amaç'],
  },
  {
    id: 'single',
    name: 'Tek Taraflı Bileme (Chisel)',
    nameEN: 'Single Bevel (Chisel Grind)',
    description: 'Bir taraf düz (flat), diğer taraf açılı. Dahil açı = bileme açısı. Japon bıçaklarında yaygın.',
    angleRange: [10, 35],
    symmetry: 'asymmetric',
    complexity: 1,
    typicalApplications: ['Bisturi', 'Mikrotom jileti', 'Sushi bıçağı', 'Hassas dilme'],
  },
  {
    id: 'compound',
    name: 'Bileşik Bileme (Çift Pah)',
    nameEN: 'Compound Bevel (Double Bevel)',
    description: 'Birincil + ikincil bileme açısı. Birincil geniş açı dayanıklılık, ikincil dar açı keskinlik sağlar.',
    angleRange: [12, 50],
    symmetry: 'symmetric',
    complexity: 2,
    typicalApplications: ['Yüksek hız dilme', 'Film kesim', 'Etiket dilme'],
  },
  {
    id: 'hollow',
    name: 'İçbükey Bileme',
    nameEN: 'Hollow Grind',
    description: 'Bevel yüzeyi içbükey (konkav). Çok ince kenar oluşturur. Ustura tipi.',
    angleRange: [8, 25],
    symmetry: 'symmetric',
    complexity: 3,
    typicalApplications: ['Ustura jiletleri', 'Bisturi', 'Ultra-hassas kesim'],
  },
  {
    id: 'convex',
    name: 'Dışbükey Bileme (Konveks)',
    nameEN: 'Convex Grind',
    description: 'Bevel yüzeyi dışbükey. Kenar arkasında en fazla et kalınlığı → en tok kenar.',
    angleRange: [15, 40],
    symmetry: 'symmetric',
    complexity: 3,
    typicalApplications: ['Ağır kesim', 'Karton dilme', 'Dayanıklılık öncelikli'],
  },
  {
    id: 'flat',
    name: 'Tam Düz Bileme (Full Flat)',
    nameEN: 'Flat Grind (Full Flat)',
    description: 'Sırttan kenar ucuna tek düz eğimli yüzey. Minimum bıçak arkası kalınlığı.',
    angleRange: [5, 20],
    symmetry: 'symmetric',
    complexity: 1,
    typicalApplications: ['İnce film dilme', 'Streç film', 'Yumuşak malzeme'],
  },
] as const;

// ---------------------------------------------------------------------------
// 4. KAPLAMA META VERİLERİ
// ---------------------------------------------------------------------------

export interface CoatingInfo {
  readonly id: CoatingType;
  readonly name: string;
  readonly nameEN: string;
  readonly hardnessHV: number;
  readonly frictionReduction: number;     // 0–1 arası çarpan
  readonly wearMultiplier: number;         // ömür çarpanı (1x = kaplama yok)
  readonly maxTemp: number;                // °C
  readonly color: string;                  // SVG rengi
  readonly description: string;
}

export const COATINGS: readonly CoatingInfo[] = [
  {
    id: 'none',
    name: 'Kaplamasız',
    nameEN: 'Uncoated',
    hardnessHV: 0,
    frictionReduction: 1.0,
    wearMultiplier: 1.0,
    maxTemp: 0,
    color: '#94a3b8',
    description: 'Standart bıçak. Kaplama maliyeti yok.',
  },
  {
    id: 'tin',
    name: 'TiN (Titanyum Nitrür)',
    nameEN: 'TiN (Titanium Nitride)',
    hardnessHV: 2400,
    frictionReduction: 0.70,
    wearMultiplier: 3.0,
    maxTemp: 600,
    color: '#fbbf24',
    description: 'Altın sarısı renk. 3x ömür artışı. Genel amaç PVD kaplama.',
  },
  {
    id: 'tialn',
    name: 'TiAlN (Titanyum Alüminyum Nitrür)',
    nameEN: 'TiAlN (Titanium Aluminum Nitride)',
    hardnessHV: 3300,
    frictionReduction: 0.60,
    wearMultiplier: 5.0,
    maxTemp: 800,
    color: '#6d28d9',
    description: 'Koyu mor renk. 5x ömür. Yüksek sıcaklık direnci (800°C).',
  },
  {
    id: 'crn',
    name: 'CrN (Krom Nitrür)',
    nameEN: 'CrN (Chromium Nitride)',
    hardnessHV: 1800,
    frictionReduction: 0.75,
    wearMultiplier: 2.5,
    maxTemp: 700,
    color: '#64748b',
    description: 'Gümüş-gri. Korozyon direnci yüksek. Gıda/ilaç uygulamaları.',
  },
  {
    id: 'dlc',
    name: 'DLC (Elmas Benzeri Karbon)',
    nameEN: 'DLC (Diamond-Like Carbon)',
    hardnessHV: 5000,
    frictionReduction: 0.40,
    wearMultiplier: 8.0,
    maxTemp: 350,
    color: '#1e293b',
    description: 'Siyah. En düşük sürtünme. Yapışkanlı bant kesiminde ideal.',
  },
  {
    id: 'ptfe',
    name: 'PTFE (Teflon)',
    nameEN: 'PTFE (Teflon)',
    hardnessHV: 50,
    frictionReduction: 0.30,
    wearMultiplier: 1.2,
    maxTemp: 260,
    color: '#0ea5e9',
    description: 'Anti-stik kaplama. Sertlik artırmaz ama yapışmayı engeller. Bant/gıda.',
  },
  {
    id: 'chrome',
    name: 'Krom Kaplama',
    nameEN: 'Chrome Plating',
    hardnessHV: 900,
    frictionReduction: 0.80,
    wearMultiplier: 1.8,
    maxTemp: 300,
    color: '#e2e8f0',
    description: 'Parlak gümüş. Korozyon koruma + orta aşınma direnci.',
  },
  {
    id: 'titanium',
    name: 'Titanyum Kaplama (TiC)',
    nameEN: 'Titanium Coating (TiC)',
    hardnessHV: 3200,
    frictionReduction: 0.65,
    wearMultiplier: 4.0,
    maxTemp: 500,
    color: '#a78bfa',
    description: 'Gri-siyah. Yüksek sertlik kaplama. Kağıt/karton dilme.',
  },
  {
    id: 'ceramic',
    name: 'Seramik Kaplama (Al₂O₃)',
    nameEN: 'Ceramic Coating (Al₂O₃)',
    hardnessHV: 2100,
    frictionReduction: 0.75,
    wearMultiplier: 4.5,
    maxTemp: 1000,
    color: '#f5f5f4',
    description: 'Beyaz. Yüksek sıcaklık direnci, kimyasal inert. Kompozit/abrazif malzeme kesimi.',
  },
] as const;

// ---------------------------------------------------------------------------
// 5. MAKİNE TİPLERİ META VERİLERİ
// ---------------------------------------------------------------------------

export interface MachineTypeInfo {
  readonly id: MachineType;
  readonly name: string;
  readonly nameEN: string;
  readonly description: string;
  readonly typicalSpeed: readonly [number, number];  // m/min
  readonly cuttingMethods: readonly CuttingMethod[];
  readonly bladeTypes: readonly BladeType[];
}

export const MACHINE_TYPES: readonly MachineTypeInfo[] = [
  {
    id: 'razor-slitter',
    name: 'Jilet Dilme Makinesi',
    nameEN: 'Razor Slitter',
    description: 'Sabit jilet ile web malzeme dilme. Film, bant, etiket. En yaygın dilme yöntemi.',
    typicalSpeed: [50, 600],
    cuttingMethods: ['razor'],
    bladeTypes: ['slitting-3hole', 'slitting-slotted', 'slitting-injector', 'single-edge'],
  },
  {
    id: 'shear-slitter',
    name: 'Makaslama Dilme Makinesi',
    nameEN: 'Shear Slitter',
    description: 'Üst ve alt dairesel bıçak ikilisi. Kağıt, karton, kalın filmler.',
    typicalSpeed: [100, 800],
    cuttingMethods: ['shear'],
    bladeTypes: ['circular'],
  },
  {
    id: 'score-slitter',
    name: 'Çizme Dilme Makinesi',
    nameEN: 'Score Slitter',
    description: 'Bıçak sert karşılık silindire basar. Oluklu mukavva, kalın karton.',
    typicalSpeed: [50, 400],
    cuttingMethods: ['score'],
    bladeTypes: ['circular', 'rotary-knife'],
  },
  {
    id: 'crush-cutter',
    name: 'Ezme Kesim Makinesi',
    nameEN: 'Crush Cutter',
    description: 'Bıçak sert anvil silindire karşı ezer. Etiket die-cutting.',
    typicalSpeed: [30, 300],
    cuttingMethods: ['crush'],
    bladeTypes: ['rotary-knife', 'circular'],
  },
  {
    id: 'rotary-cutter',
    name: 'Döner Kesim Makinesi',
    nameEN: 'Rotary Cutter',
    description: 'Dönen bıçak ile sürekli kesim. Yüksek hız uygulamaları.',
    typicalSpeed: [100, 1000],
    cuttingMethods: ['rotary'],
    bladeTypes: ['circular', 'rotary-knife'],
  },
  {
    id: 'die-cutter',
    name: 'Kalıp Kesim Makinesi',
    nameEN: 'Die Cutter',
    description: 'Şekilli kalıp bıçak ile kesim. Etiket, ambalaj, sticker.',
    typicalSpeed: [20, 200],
    cuttingMethods: ['die'],
    bladeTypes: ['band-knife', 'custom'],
  },
  {
    id: 'guillotine',
    name: 'Giyotin Kesim',
    nameEN: 'Guillotine Cutter',
    description: 'Dikey bıçak hareketi ile tabaka kesim. Kağıt, karton.',
    typicalSpeed: [5, 60],
    cuttingMethods: ['shear'],
    bladeTypes: ['single-edge', 'custom'],
  },
  {
    id: 'sheeter',
    name: 'Tabaka Kesim Makinesi',
    nameEN: 'Sheeter',
    description: 'Rulo malzemeyi tabakaya dönüştüren makine. Kağıt, film.',
    typicalSpeed: [100, 600],
    cuttingMethods: ['shear', 'rotary'],
    bladeTypes: ['circular', 'rotary-knife'],
  },
  {
    id: 'slitter-rewinder',
    name: 'Dilme-Sarım Makinesi',
    nameEN: 'Slitter Rewinder',
    description: 'Geniş ruloyu dar rulolara bölen makine. Film, kağıt, folyo, bant.',
    typicalSpeed: [50, 800],
    cuttingMethods: ['razor', 'shear', 'score'],
    bladeTypes: ['slitting-3hole', 'slitting-slotted', 'slitting-injector', 'circular'],
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonik Kesim',
    nameEN: 'Ultrasonic Cutter',
    description: '20-40 kHz titreşim ile kesim. Yapışkan, hassas malzemeler.',
    typicalSpeed: [5, 100],
    cuttingMethods: ['ultrasonic'],
    bladeTypes: ['custom'],
  },
  {
    id: 'manual',
    name: 'Manuel Kesim (El ile)',
    nameEN: 'Manual Cutting',
    description: 'El bıçağı ile kesim. Numune, küçük partiler.',
    typicalSpeed: [0, 5],
    cuttingMethods: ['razor', 'shear'],
    bladeTypes: ['trapezoid', 'hook-blade', 'craft-blade', 'scalpel'],
  },
] as const;

// ---------------------------------------------------------------------------
// 6. BIÇAK TİPLERİ META VERİLERİ
// ---------------------------------------------------------------------------

export interface BladeTypeInfo {
  readonly id: BladeType;
  readonly name: string;
  readonly nameEN: string;
  readonly description: string;
  readonly defaultAngle: number;
  readonly defaultBevel: BevelType;
  readonly defaultThickness: number;      // mm
  readonly compatibleMaterials: readonly MaterialCategory[];
  readonly icon: string;                   // Lucide icon adı
}

export const BLADE_TYPES: readonly BladeTypeInfo[] = [
  {
    id: 'slitting-3hole',
    name: '3 Delikli Dilme Jileti',
    nameEN: '3-Hole Slitting Blade',
    description: 'Standart dilme jilet. 3 delik ile tutucu üzerinde sabitlenir.',
    defaultAngle: 22,
    defaultBevel: 'double',
    defaultThickness: 0.15,
    compatibleMaterials: ['film', 'tape', 'label', 'foil', 'nonwoven'],
    icon: 'Scissors',
  },
  {
    id: 'slitting-slotted',
    name: 'Slotted Dilme Jileti',
    nameEN: 'Slotted Slitting Blade',
    description: 'Slot (yarık) ile montaj. Film ve bant dilme.',
    defaultAngle: 22,
    defaultBevel: 'double',
    defaultThickness: 0.15,
    compatibleMaterials: ['film', 'tape', 'label'],
    icon: 'Scissors',
  },
  {
    id: 'slitting-injector',
    name: 'İnjektör Dilme Jileti',
    nameEN: 'Injector Slitting Blade',
    description: 'İnjektör tipli tutucu uyumlu. Hızlı değişim.',
    defaultAngle: 20,
    defaultBevel: 'double',
    defaultThickness: 0.10,
    compatibleMaterials: ['film', 'tape', 'label', 'foil'],
    icon: 'Scissors',
  },
  {
    id: 'single-edge',
    name: 'Tek Kenarlı Jilet',
    nameEN: 'Single Edge Blade',
    description: 'Tek taraf keskin. Kazıma, sıyırma, kesim.',
    defaultAngle: 22,
    defaultBevel: 'single',
    defaultThickness: 0.23,
    compatibleMaterials: ['film', 'tape', 'label', 'paper', 'rubber'],
    icon: 'Minus',
  },
  {
    id: 'trapezoid',
    name: 'Trapez Bıçak',
    nameEN: 'Trapezoid / Utility Blade',
    description: 'Standart maket bıçağı ucu. Genel amaç el kesimi.',
    defaultAngle: 25,
    defaultBevel: 'double',
    defaultThickness: 0.60,
    compatibleMaterials: ['paper', 'cardboard', 'foam', 'rubber', 'textile', 'corrugated'],
    icon: 'Triangle',
  },
  {
    id: 'hook-blade',
    name: 'Kanca Bıçak',
    nameEN: 'Hook Blade',
    description: 'İçe kıvrık uç. Streç film, halat, bant kesimi.',
    defaultAngle: 30,
    defaultBevel: 'double',
    defaultThickness: 0.65,
    compatibleMaterials: ['film', 'tape', 'textile', 'rubber'],
    icon: 'CornerDownRight',
  },
  {
    id: 'circular',
    name: 'Dairesel Jilet',
    nameEN: 'Circular Blade',
    description: 'Döner makaslama bıçağı. Dilme makineleri.',
    defaultAngle: 20,
    defaultBevel: 'double',
    defaultThickness: 1.0,
    compatibleMaterials: ['paper', 'film', 'foil', 'textile', 'nonwoven', 'laminate'],
    icon: 'Circle',
  },
  {
    id: 'craft-blade',
    name: 'Maket Bıçağı Ucu (Falçata)',
    nameEN: 'Craft / Snap-Off Blade',
    description: 'Kırılarak yenilenen segment bıçak. Hassas el kesimi.',
    defaultAngle: 30,
    defaultBevel: 'double',
    defaultThickness: 0.50,
    compatibleMaterials: ['paper', 'film', 'tape', 'foam', 'label'],
    icon: 'PenTool',
  },
  {
    id: 'scalpel',
    name: 'Bisturi / Neşter',
    nameEN: 'Scalpel Blade',
    description: 'Ultra keskin, hassas kesim. Tıbbi, laboratuvar, mikrotom.',
    defaultAngle: 15,
    defaultBevel: 'hollow',
    defaultThickness: 0.30,
    compatibleMaterials: ['film', 'rubber', 'foam', 'textile', 'label'],
    icon: 'Slice',
  },
  {
    id: 'pentagon',
    name: 'Beşgen Bıçak',
    nameEN: 'Pentagon Blade',
    description: '5 kenar → 5 kesim noktası. Uzun ömür. Craft uygulamaları.',
    defaultAngle: 25,
    defaultBevel: 'double',
    defaultThickness: 0.55,
    compatibleMaterials: ['film', 'tape', 'paper', 'label', 'foam'],
    icon: 'Pentagon',
  },
  {
    id: 'lamella',
    name: 'Lamel / Yaprak Bıçak',
    nameEN: 'Lamella / Leaf Blade',
    description: 'İnce yaprak formlu. Özel tutucu sistemleri.',
    defaultAngle: 18,
    defaultBevel: 'single',
    defaultThickness: 0.10,
    compatibleMaterials: ['film', 'tape', 'foil', 'label'],
    icon: 'Feather',
  },
  {
    id: 'rotary-knife',
    name: 'Döner Bıçak',
    nameEN: 'Rotary Knife',
    description: 'Tam dönüşlü kesici. Score ve crush cut uygulamaları.',
    defaultAngle: 28,
    defaultBevel: 'double',
    defaultThickness: 2.0,
    compatibleMaterials: ['paper', 'corrugated', 'laminate', 'textile', 'nonwoven'],
    icon: 'RefreshCw',
  },
  {
    id: 'band-knife',
    name: 'Bant Bıçak',
    nameEN: 'Band Knife',
    description: 'Sürekli kayış bıçak. Köpük, tekstil dilimleme.',
    defaultAngle: 22,
    defaultBevel: 'double',
    defaultThickness: 0.80,
    compatibleMaterials: ['foam', 'textile', 'rubber', 'nonwoven'],
    icon: 'Spline',
  },
  {
    id: 'razor-blade',
    name: 'Endüstriyel Jilet',
    nameEN: 'Industrial Razor Blade',
    description: 'Standart tek kenarlı veya çift kenarlı jilet.',
    defaultAngle: 22,
    defaultBevel: 'double',
    defaultThickness: 0.10,
    compatibleMaterials: ['film', 'tape', 'foil', 'label', 'paper'],
    icon: 'Minus',
  },
  {
    id: 'custom',
    name: 'Özel Bıçak',
    nameEN: 'Custom Blade',
    description: 'Özel tasarım. Tüm parametreler kullanıcı tarafından girilir.',
    defaultAngle: 22,
    defaultBevel: 'double',
    defaultThickness: 0.50,
    compatibleMaterials: ['film', 'paper', 'foil', 'tape', 'textile', 'nonwoven', 'rubber', 'composite', 'foam', 'label', 'laminate', 'corrugated'],
    icon: 'Settings',
  },
] as const;

// ---------------------------------------------------------------------------
// 7. FİZİK SABİTLERİ VE FORMÜL PARAMETRELERİ
// ---------------------------------------------------------------------------

/** Kesim mühendisliği formül sabitleri */
export const PHYSICS = {
  /** Merchant kesme modeli sabit katsayısı */
  MERCHANT_CONSTANT: 0.707,

  /** Atwood sürtünme katsayısı — bıçak-malzeme arayüzü */
  ATWOOD_FRICTION_FACTOR: 0.85,

  /** Kenar yarıçapı etkisi — ince kenar kuvvet azaltma katsayısı */
  EDGE_RADIUS_SENSITIVITY: 0.015,

  /** Bevel açısı → kuvvet dönüşüm üssü */
  ANGLE_FORCE_EXPONENT: 1.4,

  /** Aşınma modeli — Archard katsayısı aralığı */
  ARCHARD_K_RANGE: [1e-7, 1e-4] as readonly [number, number],

  /** Minimum bileme açısı (°) */
  MIN_ANGLE: 5,

  /** Maksimum bileme açısı (°) */
  MAX_ANGLE: 60,

  /** Minimum bıçak kalınlığı (mm) */
  MIN_THICKNESS: 0.05,

  /** Maksimum bıçak kalınlığı (mm) */
  MAX_THICKNESS: 5.0,

  /** Minimum kenar yarıçapı (µm) */
  MIN_EDGE_RADIUS: 0.1,

  /** Maksimum kenar yarıçapı (µm) */
  MAX_EDGE_RADIUS: 50,

  /** Referans bileme açısı (°) — normalizasyon */
  REFERENCE_ANGLE: 22,

  /** Referans sertlik (HRC) — normalizasyon */
  REFERENCE_HARDNESS: 60,

  /** Talaş açısı kuvvet katsayısı — K_rake = 1 - COEFF × sin(γ) */
  RAKE_FORCE_COEFFICIENT: 0.7,

  /** Minimum talaş açısı (°) */
  MIN_RAKE_ANGLE: -15,

  /** Maksimum talaş açısı (°) */
  MAX_RAKE_ANGLE: 15,

  /** Varsayılan makaslama boşluğu (% malzeme kalınlığı) */
  DEFAULT_CLEARANCE: 7,

  /** Sıcaklık bölünme oranı — sürtünme ısısının bıçağa giden fraksiyonu */
  TEMPERATURE_PARTITION: 0.35,
} as const;

/**
 * Optimal makaslama boşluğu — malzeme kategorisine göre (%).
 * Arts 15, 37: Shear slitting clearance best practices.
 */
export const OPTIMAL_CLEARANCE: Record<MaterialCategory, number> = {
  film: 6,          // PE, PP, PET filmleri — ince ve esnek
  paper: 10,        // Kağıt / karton — fiber yapı
  foil: 4,          // Metal folyo — sert ama ince
  tape: 8,          // Bantlar — yapışkan katman etkisi
  textile: 12,      // Tekstil — fiber yoğunluğu
  nonwoven: 12,     // Keçe — gevşek fiber
  rubber: 10,       // Kauçuk — elastik deformasyon
  composite: 8,     // Kompozit — katmanlı yapı
  foam: 15,         // Köpük — sıkıştırılabilir
  label: 7,         // Etiket — film + yapışkan
  laminate: 7,      // Laminat — çok katmanlı
  corrugated: 12,   // Oluklu mukavva — kalın yapı
  cardboard: 10,    // Karton — kompakt fiber
};

// ---------------------------------------------------------------------------
// 8. VARSAYILAN DEĞERLER
// ---------------------------------------------------------------------------

export const DEFAULTS = {
  /** Varsayılan malzeme kimliği */
  materialId: 'bopp-film',

  /** Varsayılan bileme açısı (°) */
  primaryAngle: 22,

  /** Varsayılan bıçak kalınlığı (mm) */
  bladeThickness: 0.15,

  /** Varsayılan bıçak yüksekliği (mm) */
  bladeHeight: 19,

  /** Varsayılan kenar yarıçapı (µm) */
  edgeRadius: 2,

  /** Varsayılan kesme hızı (m/min) */
  cuttingSpeed: 200,

  /** Varsayılan malzeme kalınlığı (mm) */
  materialThickness: 0.025,

  /** Varsayılan web gerilimi (N/m) */
  webTension: 100,

  /** Varsayılan bevel tipi */
  bevelType: 'double' as BevelType,

  /** Varsayılan bıçak profili */
  bladeProfile: 'straight' as const,

  /** Varsayılan bıçak tipi */
  bladeType: 'slitting-3hole' as BladeType,

  /** Varsayılan kaplama */
  coating: 'none' as CoatingType,

  /** Varsayılan bıçak malzemesi */
  bladeMaterial: 'carbon-steel',

  /** Varsayılan makine */
  machineType: 'razor-slitter' as MachineType,

  /** Varsayılan kesim yöntemi */
  cuttingMethod: 'razor' as CuttingMethod,

  /** Varsayılan talaş açısı (°) */
  rakeAngle: 0,

  /** Varsayılan makaslama boşluğu (%) */
  clearance: 7,
} as const;

// ---------------------------------------------------------------------------
// 8b. DAİRESEL BIÇAK SABİTLERİ (Faz 3)
// ---------------------------------------------------------------------------

import type { CircularBladeParams } from './types';

/** Dairesel bıçak varsayılan parametreleri */
export const CIRCULAR_DEFAULTS: Readonly<CircularBladeParams> = {
  outerDiameter: 100,     // mm — endüstri standardı
  innerDiameter: 34,      // mm — standart montaj deliği
  dishAngle: 0,           // ° — düz (flat) varsayılan
  bladeOverlap: 2,        // mm — tipik shear slitting overlap
} as const;

/** Yaygın dairesel bıçak boyut presetleri — Makale 15 referansı */
export interface CircularBladePreset {
  readonly id: string;
  readonly name: string;
  readonly outerDiameter: number;  // mm
  readonly innerDiameter: number;  // mm
  readonly thickness: number;      // mm
  readonly description: string;
}

export const CIRCULAR_PRESETS: readonly CircularBladePreset[] = [
  { id: 'r80',   name: 'Ø80',   outerDiameter: 80,  innerDiameter: 22, thickness: 0.8,  description: 'Kompakt dilme — dar alan' },
  { id: 'r100',  name: 'Ø100',  outerDiameter: 100, innerDiameter: 34, thickness: 1.0,  description: 'Standart dilme bıçağı' },
  { id: 'r105',  name: 'Ø105',  outerDiameter: 105, innerDiameter: 34, thickness: 1.5,  description: 'R105 — yaygın shear slitting' },
  { id: 'r120',  name: 'Ø120',  outerDiameter: 120, innerDiameter: 40, thickness: 1.2,  description: 'Orta boy dilme' },
  { id: 'r150',  name: 'Ø150',  outerDiameter: 150, innerDiameter: 52, thickness: 1.5,  description: 'R150 — geniş format dilme' },
  { id: 'r200',  name: 'Ø200',  outerDiameter: 200, innerDiameter: 76, thickness: 2.0,  description: 'Büyük boy — ağır hizmet' },
] as const;

/** Dairesel bıçak fizik sabitleri */
export const CIRCULAR_PHYSICS = {
  /** Minimum OD (mm) */
  MIN_OD: 30,
  /** Maksimum OD (mm) */
  MAX_OD: 400,
  /** Minimum ID (mm) */
  MIN_ID: 10,
  /** Maksimum ID (mm) */
  MAX_ID: 150,
  /** Minimum dish açısı (°) */
  MIN_DISH_ANGLE: 0,
  /** Maksimum dish açısı (°) */
  MAX_DISH_ANGLE: 12,
  /** Minimum overlap (mm) */
  MIN_OVERLAP: 0,
  /** Maksimum overlap (mm) */
  MAX_OVERLAP: 10,
  /** Çevre aşınma dağılım faktörü — dairesel avantaj */
  CIRCUMFERENTIAL_WEAR_FACTOR: 0.80,
  /** Maksimum çevresel ömür avantajı — endüstri gerçekçiliği (5-30x arası) */
  MAX_CIRCUMFERENTIAL_BENEFIT: 30,
  /** Merkezkaç kuvvet katsayısı */
  CENTRIFUGAL_COEFFICIENT: 0.05,
  /** Temas yay uzunluğu katsayısı */
  CONTACT_ARC_COEFFICIENT: 2.0,
} as const;

// ---------------------------------------------------------------------------
// 9. GÖRSELLEŞTIRME SABİTLERİ
// ---------------------------------------------------------------------------

export const VIS = {
  /** SVG viewport genişliği */
  SVG_WIDTH: 600,

  /** SVG viewport yüksekliği */
  SVG_HEIGHT: 400,

  /** Bıçak çizim ölçeği (px/mm) */
  BLADE_SCALE: 40,

  /** Minimum zoom */
  MIN_ZOOM: 0.5,

  /** Maksimum zoom */
  MAX_ZOOM: 5.0,

  /** Bıçak renkleri */
  BLADE_COLORS: {
    body: '#475569',
    bevel: '#64748b',
    edge: '#f8fafc',
    highlight: '#1a73e8',
    secondary: '#f59e0b',
  },

  /** Kuvvet vektör renkleri */
  FORCE_COLORS: {
    normal: '#dc2626',
    friction: '#f59e0b',
    separation: '#2563eb',
    total: '#7c3aed',
  },

  /** Malzeme katmanı rengi (animasyonda) */
  MATERIAL_COLOR: '#fef3c7',

  /** Animasyon FPS */
  ANIMATION_FPS: 60,

  /** Animasyon varsayılan hız */
  ANIMATION_DEFAULT_SPEED: 1.0,
} as const;

// ---------------------------------------------------------------------------
// 10. PERFORMANS AĞIRLIKLARI
// ---------------------------------------------------------------------------

/** Genel skor hesaplamasında metrik ağırlıkları */
export const METRIC_WEIGHTS = {
  sharpness: 0.25,
  durability: 0.20,
  edgeRetention: 0.15,
  cutQuality: 0.20,
  energyEfficiency: 0.10,
  materialCompatibility: 0.10,
} as const;
