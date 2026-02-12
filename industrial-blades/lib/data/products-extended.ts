/**
 * Alya Bıçak - Genişletilmiş Ürün Verileri
 * Profesyonel ürün detay sayfaları için
 * 
 * Bu dosya iki veri kaynağını birleştirir:
 * 1. PRODUCTS_EXTENDED - Manuel olarak zenginleştirilmiş ürünler
 * 2. products.ts - Temel ürün verileri (fallback olarak kullanılır)
 * 
 * i18n: Tüm fonksiyonlar locale parametresi alarak çevrilmiş veri döner.
 */

import type { ProductExtended, ProductCardData } from '../types/product.types';
import { getProductBySlug as getBaseProductBySlug, getAllProducts, getProductById as getBaseProductById } from './products';
import { getCategoryById, getSubcategoryById } from './categories';
import { getProductTranslation, getCategoryTranslation, getSpecValueTranslation } from '../i18n/translations';

// Default locale
const DEFAULT_LOCALE = 'tr';

// =============================================================================
// SPEC LABEL ÇEVİRİLERİ
// =============================================================================
const specLabelTranslations: Record<string, Record<string, string>> = {
  tr: {
    material: 'Malzeme',
    hardness: 'Sertlik',
    thickness: 'Kalınlık',
    width: 'Genişlik',
    length: 'Uzunluk',
    coating: 'Kaplama',
    edge: 'Ağız Tipi',
    weight: 'Ağırlık',
    carbonContent: 'Karbon Oranı',
    edgeAngle: 'Bileme Açısı',
    heatTreatment: 'Isıl İşlem',
    dimensions: 'Boyutlar',
    diameter: 'Çap',
    color: 'Renk',
    microstructure: 'Mikro Yapı',
    availableThicknesses: 'Mevcut Kalınlıklar',
    coatingMethod: 'Kaplama Yöntemi',
    coatingColor: 'Kaplama Rengi',
    frictionReduction: 'Sürtünme Azaltma',
    coatingAdhesion: 'Kaplama Tutunumu',
    chromiumContent: 'Krom Oranı',
    composition: 'Bileşim',
    grainSize: 'Tane Boyutu',
    density: 'Yoğunluk',
    wearResistance: 'Aşınma Direnci',
    frictionCoefficient: 'Sürtünme Katsayısı',
    thermalConductivity: 'Isıl İletkenlik',
    chemicalResistance: 'Kimyasal Direnç',
    edgeProfile: 'Kenar Profili',
    specialFeature: 'Özel Özellik',
    scoreLine: 'Çizik Hattı',
    maxTemperature: 'Maks. Sıcaklık',
    format: 'Format',
    splitResult: 'Bölünme Sonucu',
    surfaceQuality: 'Yüzey Kalitesi',
    compatibility: 'Uyumluluk',
    cuttingType: 'Kesim Tipi',
    chemicalComposition: 'Kimyasal Bileşim',
    geometry: 'Geometri',
    thermalStability: 'Termal Kararlılık',
    alloy: 'Alaşım',
    edgeType: 'Kenar Tipi',
    balancing: 'Dengeleme',
    chromiumLevel: 'Krom İçeriği',
    ventilation: 'Havalandırma',
    toothTolerance: 'Diş Toleransı',
    idealMaterial: 'İdeal Malzeme',
  },
  en: {
    material: 'Material',
    hardness: 'Hardness',
    thickness: 'Thickness',
    width: 'Width',
    length: 'Length',
    coating: 'Coating',
    edge: 'Edge Type',
    weight: 'Weight',
    carbonContent: 'Carbon Content',
    edgeAngle: 'Edge Angle',
    heatTreatment: 'Heat Treatment',
    dimensions: 'Dimensions',
    diameter: 'Diameter',
    color: 'Color',
    microstructure: 'Microstructure',
    availableThicknesses: 'Available Thicknesses',
    coatingMethod: 'Coating Method',
    coatingColor: 'Coating Color',
    frictionReduction: 'Friction Reduction',
    coatingAdhesion: 'Coating Adhesion',
    chromiumContent: 'Chromium Content',
    composition: 'Composition',
    grainSize: 'Grain Size',
    density: 'Density',
    wearResistance: 'Wear Resistance',
    frictionCoefficient: 'Friction Coefficient',
    thermalConductivity: 'Thermal Conductivity',
    chemicalResistance: 'Chemical Resistance',
    edgeProfile: 'Edge Profile',
    specialFeature: 'Special Feature',
    scoreLine: 'Score Line',
    maxTemperature: 'Max. Temperature',
    format: 'Format',
    splitResult: 'Split Result',
    surfaceQuality: 'Surface Quality',
    compatibility: 'Compatibility',
    cuttingType: 'Cutting Type',
    chemicalComposition: 'Chemical Composition',
    geometry: 'Geometry',
    thermalStability: 'Thermal Stability',
    alloy: 'Alloy',
    edgeType: 'Edge Type',
    balancing: 'Balancing',
    chromiumLevel: 'Chromium Content',
    ventilation: 'Ventilation',
    toothTolerance: 'Tooth Tolerance',
    idealMaterial: 'Ideal Material',
  },
  ar: {
    material: 'المادة',
    hardness: 'الصلابة',
    thickness: 'السُمك',
    width: 'العرض',
    length: 'الطول',
    coating: 'الطلاء',
    edge: 'نوع الحافة',
    weight: 'الوزن',
    carbonContent: 'نسبة الكربون',
    edgeAngle: 'زاوية الشحذ',
    heatTreatment: 'المعالجة الحرارية',
    dimensions: 'الأبعاد',
    diameter: 'القطر',
    color: 'اللون',
    microstructure: 'البنية المجهرية',
    availableThicknesses: 'السماكات المتوفرة',
    coatingMethod: 'طريقة الطلاء',
    coatingColor: 'لون الطلاء',
    frictionReduction: 'تقليل الاحتكاك',
    coatingAdhesion: 'التصاق الطلاء',
    chromiumContent: 'نسبة الكروم',
    composition: 'التركيب',
    grainSize: 'حجم الحبيبات',
    density: 'الكثافة',
    wearResistance: 'مقاومة التآكل',
    frictionCoefficient: 'معامل الاحتكاك',
    thermalConductivity: 'التوصيل الحراري',
    chemicalResistance: 'المقاومة الكيميائية',
    edgeProfile: 'شكل الحافة',
    specialFeature: 'ميزة خاصة',
    scoreLine: 'خط الكسر',
    maxTemperature: 'الحرارة القصوى',
    format: 'الشكل',
    splitResult: 'نتيجة التقسيم',
    surfaceQuality: 'جودة السطح',
    compatibility: 'التوافق',
    cuttingType: 'نوع القطع',
    chemicalComposition: 'التركيب الكيميائي',
    geometry: 'الهندسة',
    thermalStability: 'الثبات الحراري',
    alloy: 'السبيكة',
    edgeType: 'نوع الحافة',
    balancing: 'الموازنة',
    chromiumLevel: 'نسبة الكروم',
    ventilation: 'التهوية',
    toothTolerance: 'تفاوت الأسنان',
    idealMaterial: 'المادة المثالية',
  },
  ru: {
    material: 'Материал',
    hardness: 'Твёрдость',
    thickness: 'Толщина',
    width: 'Ширина',
    length: 'Длина',
    coating: 'Покрытие',
    edge: 'Тип кромки',
    weight: 'Вес',
    carbonContent: 'Содержание углерода',
    edgeAngle: 'Угол заточки',
    heatTreatment: 'Термообработка',
    dimensions: 'Размеры',
    diameter: 'Диаметр',
    color: 'Цвет',
    microstructure: 'Микроструктура',
    availableThicknesses: 'Доступные толщины',
    coatingMethod: 'Метод покрытия',
    coatingColor: 'Цвет покрытия',
    frictionReduction: 'Снижение трения',
    coatingAdhesion: 'Адгезия покрытия',
    chromiumContent: 'Содержание хрома',
    composition: 'Состав',
    grainSize: 'Размер зерна',
    density: 'Плотность',
    wearResistance: 'Износостойкость',
    frictionCoefficient: 'Коэффициент трения',
    thermalConductivity: 'Теплопроводность',
    chemicalResistance: 'Химическая стойкость',
    edgeProfile: 'Профиль кромки',
    specialFeature: 'Особенность',
    scoreLine: 'Линия разлома',
    maxTemperature: 'Макс. температура',
    format: 'Формат',
    splitResult: 'Результат разделения',
    surfaceQuality: 'Качество поверхности',
    compatibility: 'Совместимость',
    cuttingType: 'Тип резки',
    chemicalComposition: 'Химический состав',
    geometry: 'Геометрия',
    thermalStability: 'Термостабильность',
    alloy: 'Сплав',
    edgeType: 'Тип кромки',
    balancing: 'Балансировка',
    chromiumLevel: 'Содержание хрома',
    ventilation: 'Вентиляция',
    toothTolerance: 'Допуск зубьев',
    idealMaterial: 'Идеальный материал',
  },
  fr: {
    material: 'Matériau',
    hardness: 'Dureté',
    thickness: 'Épaisseur',
    width: 'Largeur',
    length: 'Longueur',
    coating: 'Revêtement',
    edge: 'Type de tranchant',
    weight: 'Poids',
    carbonContent: 'Teneur en carbone',
    edgeAngle: 'Angle de coupe',
    heatTreatment: 'Traitement thermique',
    dimensions: 'Dimensions',
    diameter: 'Diamètre',
    color: 'Couleur',
    microstructure: 'Microstructure',
    availableThicknesses: 'Épaisseurs disponibles',
    coatingMethod: 'Méthode de revêtement',
    coatingColor: 'Couleur du revêtement',
    frictionReduction: 'Réduction du frottement',
    coatingAdhesion: 'Adhérence du revêtement',
    chromiumContent: 'Teneur en chrome',
    composition: 'Composition',
    grainSize: 'Taille de grain',
    density: 'Densité',
    wearResistance: 'Résistance à l\'usure',
    frictionCoefficient: 'Coefficient de frottement',
    thermalConductivity: 'Conductivité thermique',
    chemicalResistance: 'Résistance chimique',
    edgeProfile: 'Profil de bord',
    specialFeature: 'Caractéristique spéciale',
    scoreLine: 'Ligne de rupture',
    maxTemperature: 'Temp. max.',
    format: 'Format',
    splitResult: 'Résultat de division',
    surfaceQuality: 'Qualité de surface',
    compatibility: 'Compatibilité',
    cuttingType: 'Type de coupe',
    chemicalComposition: 'Composition chimique',
    geometry: 'Géométrie',
    thermalStability: 'Stabilité thermique',
    alloy: 'Alliage',
    edgeType: 'Type de tranchant',
    balancing: 'Équilibrage',
    chromiumLevel: 'Teneur en chrome',
    ventilation: 'Ventilation',
    toothTolerance: 'Tolérance des dents',
    idealMaterial: 'Matériau idéal',
  },
};

/** Spec label çevirisi getir */
function getSpecLabel(key: string, locale: string): string {
  const labels = specLabelTranslations[locale] || specLabelTranslations['tr'];
  const label = labels[key];
  if (!label && locale !== 'tr' && process.env.NODE_ENV === 'development') {
    console.warn(`[i18n] Missing spec label translation: "${key}" for locale "${locale}"`);
  }
  return label || key.charAt(0).toUpperCase() + key.slice(1);
}

// =============================================================================
// ÖRNEK ÜRÜNLER (Placeholder görsellerle)
// =============================================================================

export const PRODUCTS_EXTENDED: ProductExtended[] = [
  // --- İŞ GÜVENLİĞİ EL BIÇAKLARI ---
  {
    id: 'h006-001-x01',
    slug: 'h006-001-x01-retro-light-knife-dokum-metal-el-bicagi',
    slugEN: 'h006-001-x01-retro-light-knife-cast-metal-safety-knife',
    code: 'H006 001 X01',
    name: 'RETRO LIGHT KNIFE',
    subtitle: 'Döküm Metal El Bıçağı',

    categoryId: 'safety-knives',
    subcategoryId: 'fixed-blade',
    tags: ['döküm metal', 'sabit uç', 'profesyonel', 'iş güvenliği'],

    shortDescription: 'İş güvenliği standartlarına uygun, dayanıklı döküm metal gövdeli profesyonel el bıçağı. Sheffield çeliğinden üretilmiş kesici uç ile uzun ömürlü performans.',

    longDescription: `
      <p>RETRO LIGHT KNIFE, endüstriyel kullanım için tasarlanmış premium bir el bıçağıdır. Döküm metal gövdesi sayesinde yoğun kullanımda bile dayanıklılığını korur.</p>
      
      <h3>Öne Çıkan Özellikler</h3>
      <ul>
        <li>Sheffield çeliğinden üretilmiş kesici uç</li>
        <li>Döküm metal gövde ile maksimum dayanıklılık</li>
        <li>Ergonomik tasarım sayesinde uzun süreli kullanımda yorgunluk yapmaz</li>
        <li>Kolay ve güvenli bıçak değişim mekanizması</li>
      </ul>
      
      <h3>Kullanım Önerileri</h3>
      <p>Depo, lojistik, üretim hatları ve genel kesim işlerinde idealdir. Karton, plastik film, ambalaj malzemeleri ve benzeri materyallerin kesilmesinde yüksek performans sağlar.</p>
    `,

    images: {
      main: {
        src: '/images/products/h006-001-x01/main.webp',
        alt: 'RETRO LIGHT KNIFE - Döküm Metal El Bıçağı',
        width: 800,
        height: 800,
      },
      gallery: [
        { src: '/images/products/h006-001-x01/gallery-1.webp', alt: 'Yan görünüm', width: 800, height: 800 },
        { src: '/images/products/h006-001-x01/gallery-2.webp', alt: 'Detay görünüm', width: 800, height: 800 },
        { src: '/images/products/h006-001-x01/gallery-3.webp', alt: 'Kullanım örneği', width: 800, height: 800 },
      ],
      thumbnail: {
        src: '/images/products/h006-001-x01/thumb.webp',
        alt: 'RETRO LIGHT KNIFE',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Gövde', value: 'Döküm Metal', icon: 'Box' },
      { label: 'Ağırlık', value: '120g', icon: 'Scale' },
      { label: 'Uzunluk', value: '145mm', icon: 'Ruler' },
      { label: 'Bıçak Genişliği', value: '18mm', icon: 'Ruler' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Depo & Lojistik', icon: 'Warehouse', description: 'Koli açma ve paket işlemleri' },
      { title: 'Üretim Hatları', icon: 'Factory', description: 'Endüstriyel kesim operasyonları' },
      { title: 'Ambalaj', icon: 'Package', description: 'Film ve streç kesimi' },
    ],

    benefits: [
      {
        title: 'Uzun Ömür',
        description: 'Sheffield çeliği sayesinde standart bıçaklara göre daha uzun kesim performansı',
        icon: 'Clock',
      },
      {
        title: 'Güvenli Kullanım',
        description: 'Sabit uç tasarımı ile kontrollü ve güvenli kesim',
        icon: 'Shield',
      },
      {
        title: 'Ergonomik Tasarım',
        description: 'Uzun süreli kullanımda yorgunluk yapmayan kavrama',
        icon: 'Zap',
      },
    ],

    features: [
      'Döküm metal gövde',
      'Ergonomik kavrama',
      'Kolay bıçak değişimi',
      'Uzun ömürlü Sheffield çeliği',
      'İş güvenliği standartlarına uygun',
    ],

    certifications: ['CE'],

    relatedProductIds: ['h008-001-a03', 'h014-001-x01', 'h015-001-z01'],

    compatibleParts: [
      { id: 'b206', name: 'Trapez Bıçak', code: 'B206' },
      { id: 'b207', name: 'Trapez Bıçak Kalın', code: 'B207' },
    ],

    seo: {
      title: 'RETRO LIGHT KNIFE | Döküm Metal El Bıçağı | Alya Bıçak',
      description: 'Sheffield çeliğinden üretilmiş RETRO LIGHT KNIFE döküm metal el bıçağı. İş güvenliği standartlarına uygun, dayanıklı ve ergonomik. Türkiye distribütörü.',
      keywords: ['el bıçağı', 'döküm metal bıçak', 'iş güvenliği bıçağı', 'sheffield çelik', 'durham duplex'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 1,
  },

  {
    id: 'h008-001-a03',
    slug: 'h008-001-a03-auto-retract-otomatik-geri-cekilebilir',
    slugEN: 'h008-001-a03-auto-retract-safety-knife',
    code: 'H008 001 A03',
    name: 'AUTO RETRACT',
    subtitle: 'Otomatik Geri Çekilebilir El Bıçağı',

    categoryId: 'safety-knives',
    subcategoryId: 'auto-retract',
    tags: ['otomatik', 'geri çekilebilir', 'güvenlik', 'iş güvenliği'],

    shortDescription: 'Maksimum güvenlik için otomatik geri çekilme mekanizmalı profesyonel el bıçağı. Bıçak bırakıldığında otomatik olarak geri çekilir.',

    images: {
      main: {
        src: '/images/products/placeholder.jpg',
        alt: 'AUTO RETRACT - Otomatik Geri Çekilebilir',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/placeholder-thumb.jpg',
        alt: 'AUTO RETRACT',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Mekanizma', value: 'Otomatik Geri Çekilme', icon: 'Zap' },
      { label: 'Ağırlık', value: '95g', icon: 'Scale' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Lojistik', icon: 'Truck' },
      { title: 'Üretim', icon: 'Factory' },
      { title: 'Depo', icon: 'Warehouse' },
    ],

    features: [
      'Otomatik geri çekilme mekanizması',
      'Güvenlik kilidi',
      'Ergonomik kavrama',
      'Hafif tasarım',
    ],

    certifications: ['CE', 'ISO 9001'],

    relatedProductIds: ['h006-001-x01', 'h014-001-x01'],

    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 2,
  },

  // --- SANAYİ JİLETLERİ ---
  {
    id: '3-delikli-jilet-020',
    slug: '3-delikli-dilme-jileti-020mm',
    slugEN: '3-hole-slitting-blade-020mm',
    code: '3DJ-020',
    name: '3 Delikli Dilme Jileti',
    subtitle: 'Titanyum Kaplamalı - 0.20mm',

    categoryId: 'industrial-blades',
    subcategoryId: '3-hole-slitting',
    tags: ['3 delikli', 'dilme jileti', 'titanyum kaplama', 'endüstriyel jilet', 'sheffield'],

    shortDescription: 'Sheffield çeliğinden üretilmiş, titanyum kaplamalı 3 delikli dilme jileti. Tekstil, kağıt ve film kesimi için yüksek performanslı endüstriyel jilet.',

    longDescription: `
      <p>3 Delikli Dilme Jileti, endüstriyel dilme makineleri için özel olarak tasarlanmış yüksek performanslı bir kesim jiletdir. Titanyum kaplama sayesinde uzun ömürlü ve aşınmaya dayanıklıdır.</p>
      
      <h3>Öne Çıkan Özellikler</h3>
      <ul>
        <li>Sheffield çeliğinden üretilmiş</li>
        <li>Titanyum kaplama ile ekstra dayanıklılık</li>
        <li>HRC 60-62 sertlik değeri</li>
        <li>3 delikli standart montaj sistemi</li>
        <li>Farklı kalınlık seçenekleri: 0.20mm, 0.25mm, 0.30mm</li>
      </ul>
      
      <h3>Kullanım Alanları</h3>
      <p>Tekstil, kağıt, plastik film, ambalaj malzemeleri ve benzeri ince malzemelerin hassas dilme işlemlerinde kullanılır. Özellikle yüksek hızlı dilme makinelerinde üstün performans gösterir.</p>
    `,

    images: {
      main: {
        src: '/images/products/3-delikli-jilet.jpg',
        alt: '3 Delikli Dilme Jileti - Titanyum Kaplamalı',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/3-delikli-jilet.jpg',
        alt: '3 Delikli Dilme Jileti',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'Titanyum', icon: 'Shield', highlight: true },
      { label: 'Sertlik', value: 'HRC 60-62', icon: 'Gauge' },
      { label: 'Kalınlık', value: '0.20mm', icon: 'Ruler' },
      { label: 'Montaj', value: '3 Delikli Standart', icon: 'Settings' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Tekstil Kesimi', icon: 'Scissors', description: 'Kumaş ve tekstil dilme' },
      { title: 'Kağıt İşleme', icon: 'FileText', description: 'Kağıt ve karton dilme' },
      { title: 'Film Kesimi', icon: 'Film', description: 'Plastik film ve ambalaj' },
    ],

    benefits: [
      {
        title: 'Titanyum Kaplama',
        description: 'Titanyum kaplama sayesinde standart jiletlere göre 3 kat daha uzun ömür',
        icon: 'Shield',
      },
      {
        title: 'Hassas Kesim',
        description: 'Yüksek sertlik değeri ile temiz ve hassas kesim kalitesi',
        icon: 'Target',
      },
      {
        title: 'Uyumlu Montaj',
        description: '3 delikli standart montaj sistemi ile kolay değişim',
        icon: 'Settings',
      },
    ],

    features: [
      'Titanyum kaplama',
      'Sheffield çeliği',
      'HRC 60-62 sertlik',
      '3 delikli montaj',
      'Farklı kalınlık seçenekleri',
      'Uzun ömürlü',
    ],

    certifications: ['CE'],

    availableSizes: ['43x22x0.10mm', '43x22x0.15mm', '43x22x0.20mm', '43x22x0.30mm', '43x22x0.40mm'],

    relatedProductIds: ['slotted-karbon-celik'],

    seo: {
      title: '3 Delikli Dilme Jileti 0.20mm | Titanyum Kaplamalı | Alya Bıçak',
      description: 'Sheffield çeliğinden üretilmiş titanyum kaplamalı 3 delikli dilme jileti. Tekstil, kağıt ve film kesimi için yüksek performans. Türkiye distribütörü.',
      keywords: ['3 delikli jilet', 'dilme jileti', 'titanyum kaplama', 'sheffield çelik', 'endüstriyel jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 1,
  },

  // --- SLOTTED DİLME JİLETLERİ (57x19mm format) ---
  {
    id: 'slotted-karbon-celik',
    slug: 'slotted-dilme-jileti-karbon-celik',
    slugEN: 'slotted-slitting-blade-carbon-steel',
    code: 'SLT-KC',
    name: 'Slotted Dilme Jileti - Karbon Çelik',
    subtitle: 'SK5 Karbon Çelik — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'karbon çelik', 'dilme jileti', 'SK5', '57x19mm', 'sheffield'],

    shortDescription: 'Sheffield çeliğinden üretilmiş SK5 karbon çelik slotted dilme jileti. 57x19mm standart ölçü, 5 farklı kalınlık seçeneği. Kağıt, film ve tekstil dilme makinelerinde yüksek performans.',

    longDescription: `
      <p>SK5 (C85) yüksek karbonlu çelikten üretilmiş slotted dilme jileti. Standart 57x19mm formatında, merkezi slotted yuva ile makinelere güvenli montaj sağlar.</p>

      <h3>Teknik Özellikler</h3>
      <ul>
        <li>Malzeme: SK5 / C85 yüksek karbonlu çelik (%0.85-1.00 C)</li>
        <li>Sertlik: HRC 59-61</li>
        <li>Standart ölçü: 57x19mm</li>
        <li>Mevcut kalınlıklar: 0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm</li>
        <li>Bileme açısı: 22°</li>
      </ul>

      <h3>Kullanım Alanları</h3>
      <p>Kağıt, karton, plastik film, ambalaj malzemeleri ve tekstil dilme işlemlerinde standart ekonomik çözüm. Yüksek hızlı slotted dilme makinelerinde güvenilir performans.</p>
    `,

    images: {
      main: {
        src: '/images/products/slotted-karbon-celik.jpg',
        alt: 'Slotted Dilme Jileti - Karbon Çelik SK5 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-karbon-celik.jpg',
        alt: 'Slotted Dilme Jileti Karbon Çelik',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'SK5 Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 59-61', icon: 'Shield' },
      { label: 'Bileme Açısı', value: '22°', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Kağıt Dilme', icon: 'FileText', description: 'Kağıt ve karton dilme makineleri' },
      { title: 'Film Kesimi', icon: 'Film', description: 'Plastik film ve ambalaj dilme' },
      { title: 'Tekstil', icon: 'Scissors', description: 'Kumaş ve nonwoven kesim' },
    ],

    benefits: [
      {
        title: 'Ekonomik Çözüm',
        description: 'Standart uygulamalar için maliyet-etkin karbon çelik performansı',
        icon: 'DollarSign',
      },
      {
        title: 'Kolay Montaj',
        description: 'Slotted merkezi yuva ile standart makinelere anında uyum',
        icon: 'Settings',
      },
      {
        title: 'HRC 59-61 Sertlik',
        description: 'Hassas ısıl işlem ile tutarlı kesim kalitesi',
        icon: 'Shield',
      },
    ],

    features: [
      'SK5/C85 yüksek karbonlu çelik',
      'HRC 59-61 sertlik',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
      'Slotted merkezi yuva montaj',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-karbon-titanyum', 'slotted-karbon-seramik', '3-delikli-jilet-020'],

    seo: {
      title: 'Slotted Dilme Jileti Karbon Çelik SK5 57x19mm | Alya Bıçak',
      description: 'Sheffield SK5 karbon çelik slotted dilme jileti. 57x19mm, HRC 59-61, 5 kalınlık: 0.25-0.63mm. Kağıt, film, tekstil dilme. Türkiye distribütörü.',
      keywords: ['slotted jilet', 'karbon çelik jilet', 'dilme jileti', 'SK5 jilet', '57x19mm jilet', 'sheffield jilet', 'slotted slitting blade'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 280,
  },
  {
    id: 'slotted-karbon-titanyum',
    slug: 'slotted-dilme-jileti-karbon-celik-titanyum-kaplama',
    slugEN: 'slotted-slitting-blade-carbon-steel-titanium-coated',
    code: 'SLT-KC-TiN',
    name: 'Slotted Dilme Jileti - Karbon Çelik + TiN Kaplama',
    subtitle: 'Titanyum Nitrür PVD Kaplama — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'titanyum kaplama', 'TiN', 'PVD', '57x19mm', 'sheffield'],

    shortDescription: 'SK5 karbon çelik üzerine PVD titanyum nitrür (TiN) kaplama slotted dilme jileti. 57x19mm, 2300 HV yüzey sertliği ile 3-5 kat uzun ömür.',

    images: {
      main: {
        src: '/images/products/slotted-karbon-titanyum.jpg',
        alt: 'Slotted Dilme Jileti - Karbon Çelik TiN Kaplama 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-karbon-titanyum.jpg',
        alt: 'Slotted TiN Kaplama',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'SK5 Karbon Çelik + TiN', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'Titanyum Nitrür (PVD)', icon: 'Shield', highlight: true },
      { label: 'Sertlik', value: '2300 HV (yüzey)', icon: 'Gauge' },
      { label: 'Bileme Açısı', value: '22°', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Yapışkan Malzeme Kesimi', icon: 'Layers', description: 'Bant, etiket, film yapışkan dilme' },
      { title: 'Kağıt İşleme', icon: 'FileText', description: 'Yüksek hızlı kağıt dilme' },
      { title: 'Ambalaj', icon: 'Package', description: 'Film ve ambalaj kesimi' },
    ],

    benefits: [
      {
        title: '3-5 Kat Uzun Ömür',
        description: '2300 HV TiN kaplama ile standart karbon çeliğe göre dramatik ömür artışı',
        icon: 'Clock',
      },
      {
        title: '%40 Az Sürtünme',
        description: 'TiN kaplama sayesinde yapışkan malzemelerde yapışma önlenir',
        icon: 'Zap',
      },
      {
        title: 'Altın Renk Kaplama',
        description: 'Kaplama durumunun görsel kontrolü kolay',
        icon: 'Eye',
      },
    ],

    features: [
      'PVD Titanyum Nitrür kaplama',
      '2300 HV yüzey sertliği',
      '%40 sürtünme azaltma',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-karbon-celik', 'slotted-karbon-seramik'],

    seo: {
      title: 'Slotted Dilme Jileti TiN Kaplama 57x19mm | Alya Bıçak',
      description: 'Titanyum nitrür PVD kaplama slotted dilme jileti. 57x19mm, 2300 HV, 3-5x uzun ömür. Yapışkan malzeme kesiminde üstün performans.',
      keywords: ['TiN kaplama jilet', 'titanyum jilet', 'slotted TiN', '57x19mm jilet', 'PVD kaplama dilme jileti'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 281,
  },
  {
    id: 'slotted-karbon-seramik',
    slug: 'slotted-dilme-jileti-karbon-celik-seramik-kaplama',
    slugEN: 'slotted-slitting-blade-carbon-steel-ceramic-coated',
    code: 'SLT-KC-CER',
    name: 'Slotted Dilme Jileti - Karbon Çelik + Seramik Kaplama',
    subtitle: 'Al₂O₃ Seramik Kaplama — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'seramik kaplama', 'Al₂O₃', '57x19mm', 'yüksek sıcaklık'],

    shortDescription: 'SK5 karbon çelik üzerine alüminyum oksit (Al₂O₃) seramik kaplama slotted dilme jileti. 57x19mm, 3200+ HV, 800°C sıcaklık dayanımı.',

    images: {
      main: {
        src: '/images/products/slotted-karbon-seramik.jpg',
        alt: 'Slotted Dilme Jileti - Seramik Kaplama 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-karbon-seramik.jpg',
        alt: 'Slotted Seramik Kaplama',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'SK5 Karbon Çelik + Seramik', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'Al₂O₃ Seramik', icon: 'Shield', highlight: true },
      { label: 'Sertlik', value: '3200+ HV (yüzey)', icon: 'Gauge' },
      { label: 'Maks. Sıcaklık', value: '800°C', icon: 'Thermometer' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Yüksek Sıcaklık Kesimi', icon: 'Flame', description: 'Termal ortamlarda dilme' },
      { title: 'Aşındırıcı Malzeme', icon: 'Shield', description: 'Cam elyaf, karbon fiber kesimi' },
      { title: 'Uzun Seri Üretim', icon: 'Factory', description: 'Yoğun üretim hatları' },
    ],

    benefits: [
      {
        title: '3200+ HV Sertlik',
        description: 'Seramik kaplama ile TiN\'den %40 daha sert yüzey',
        icon: 'Shield',
      },
      {
        title: '800°C Dayanım',
        description: 'Yüksek sıcaklık ortamlarında performans kaybı yok',
        icon: 'Flame',
      },
      {
        title: 'Ultra Aşınma Direnci',
        description: 'Aşındırıcı malzemelerde olağanüstü ömür',
        icon: 'Clock',
      },
    ],

    features: [
      'Al₂O₃ seramik kaplama',
      '3200+ HV yüzey sertliği',
      '800°C sıcaklık dayanımı',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-karbon-celik', 'slotted-karbon-titanyum'],

    seo: {
      title: 'Slotted Dilme Jileti Seramik Kaplama 57x19mm | Alya Bıçak',
      description: 'Al₂O₃ seramik kaplama slotted dilme jileti. 57x19mm, 3200+ HV, 800°C dayanım. Aşındırıcı malzemelerde üstün performans.',
      keywords: ['seramik kaplama jilet', 'slotted seramik', '57x19mm jilet', 'yüksek sıcaklık jilet', 'Al2O3 kaplama'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 282,
  },
  {
    id: 'slotted-paslanmaz',
    slug: 'slotted-dilme-jileti-paslanmaz-celik',
    slugEN: 'slotted-slitting-blade-stainless-steel',
    code: 'SLT-SS',
    name: 'Slotted Dilme Jileti - Paslanmaz Çelik',
    subtitle: '420HC Paslanmaz Çelik — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'paslanmaz çelik', '420HC', '57x19mm', 'korozyon direnci'],

    shortDescription: '420HC paslanmaz çelikten üretilmiş slotted dilme jileti. 57x19mm, HRC 56-58. Nemli ve korozif ortamlarda korozyon dirençli kesim.',

    images: {
      main: {
        src: '/images/products/slotted-paslanmaz.jpg',
        alt: 'Slotted Dilme Jileti - Paslanmaz Çelik 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-paslanmaz.jpg',
        alt: 'Slotted Paslanmaz Çelik',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: '420HC Paslanmaz Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 56-58', icon: 'Shield' },
      { label: 'Krom Oranı', value: '%13 Cr', icon: 'Shield' },
      { label: 'Bileme Açısı', value: '22°', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Gıda Ambalajı', icon: 'Package', description: 'Nemli ortam gıda paketleme' },
      { title: 'Islak Kesim', icon: 'Droplets', description: 'Su bazlı prosesler' },
      { title: 'Hijyenik Üretim', icon: 'Sparkles', description: 'Temiz oda ve hijyenik ortamlar' },
    ],

    benefits: [
      {
        title: 'Korozyon Direnci',
        description: '%13 krom içeriği ile nemli ortamlarda paslanma yok',
        icon: 'Shield',
      },
      {
        title: 'Gıdaya Uygun',
        description: 'Gıda sektörü uygulamalarında güvenli kullanım',
        icon: 'Check',
      },
      {
        title: 'Hijyenik',
        description: 'Kolay temizlenen yüzey, bakteri tutunumu düşük',
        icon: 'Sparkles',
      },
    ],

    features: [
      '420HC paslanmaz çelik',
      'HRC 56-58 sertlik',
      '%13 krom korozyon direnci',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-paslanmaz-titanyum', 'slotted-paslanmaz-xcd'],

    seo: {
      title: 'Slotted Dilme Jileti Paslanmaz Çelik 57x19mm | Alya Bıçak',
      description: '420HC paslanmaz çelik slotted dilme jileti. 57x19mm, HRC 56-58, korozyon direnci. Nemli ortam ve gıda sektörü için.',
      keywords: ['paslanmaz jilet', 'slotted paslanmaz', '57x19mm jilet', '420HC jilet', 'korozyon dirençli jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 283,
  },
  {
    id: 'slotted-paslanmaz-titanyum',
    slug: 'slotted-dilme-jileti-paslanmaz-celik-titanyum-kaplama',
    slugEN: 'slotted-slitting-blade-stainless-steel-titanium-coated',
    code: 'SLT-SS-TiN',
    name: 'Slotted Dilme Jileti - Paslanmaz + TiN Kaplama',
    subtitle: 'Paslanmaz Çelik + Titanyum Nitrür — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'paslanmaz', 'TiN', 'titanyum', '57x19mm', 'dual koruma'],

    shortDescription: '420HC paslanmaz çelik üzerine PVD titanyum nitrür kaplama slotted dilme jileti. 57x19mm. Korozyon direnci + 2300 HV yüzey sertliği.',

    images: {
      main: {
        src: '/images/products/slotted-paslanmaz-titanyum.jpg',
        alt: 'Slotted Dilme Jileti - Paslanmaz TiN Kaplama 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-paslanmaz-titanyum.jpg',
        alt: 'Slotted Paslanmaz TiN',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: '420HC Paslanmaz + TiN', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'Titanyum Nitrür (PVD)', icon: 'Shield', highlight: true },
      { label: 'Sertlik', value: '2300 HV (yüzey)', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Islak Yapışkan Kesim', icon: 'Droplets', description: 'Nemli ortamda yapışkan malzeme' },
      { title: 'Gıda Filmi', icon: 'Film', description: 'Gıda ambalaj filmi dilme' },
      { title: 'Etiket Üretimi', icon: 'Tag', description: 'Islak etiket dilme' },
    ],

    benefits: [
      {
        title: 'Çift Koruma',
        description: 'Paslanmaz taban + TiN kaplama ile hem korozyon hem aşınma direnci',
        icon: 'Shield',
      },
      {
        title: 'Yapışmazlık',
        description: 'TiN kaplama ile yapışkan malzeme yapışması önlenir',
        icon: 'Zap',
      },
      {
        title: 'Premium Performans',
        description: 'Zorlu ortamlarda en üst düzey dayanıklılık',
        icon: 'Award',
      },
    ],

    features: [
      '420HC + TiN çift koruma',
      '2300 HV yüzey sertliği',
      'Korozyon + aşınma direnci',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-paslanmaz', 'slotted-paslanmaz-xcd'],

    seo: {
      title: 'Slotted Dilme Jileti Paslanmaz TiN 57x19mm | Alya Bıçak',
      description: 'Paslanmaz çelik + TiN kaplama slotted dilme jileti. 57x19mm, 2300 HV, çift koruma. Nemli ve yapışkan malzeme kesiminde üstün.',
      keywords: ['paslanmaz TiN jilet', 'slotted TiN paslanmaz', '57x19mm jilet', 'çift kaplama jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 284,
  },
  {
    id: 'slotted-paslanmaz-xcd',
    slug: 'slotted-dilme-jileti-paslanmaz-celik-xcd-kaplama',
    slugEN: 'slotted-slitting-blade-stainless-steel-xcd-coated',
    code: 'SLT-SS-XCD',
    name: 'Slotted Dilme Jileti - Paslanmaz + XCD Kaplama',
    subtitle: 'DLC/XCD Elmas Benzeri Kaplama — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'XCD', 'DLC', 'elmas kaplama', '57x19mm', 'ultra sert'],

    shortDescription: '420HC paslanmaz çelik üzerine XCD (Diamond-Like Carbon) kaplama slotted dilme jileti. 57x19mm, 5000 HV ultra sertlik, %60 sürtünme azaltma.',

    images: {
      main: {
        src: '/images/products/slotted-paslanmaz-xcd.jpg',
        alt: 'Slotted Dilme Jileti - XCD DLC Kaplama 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-paslanmaz-xcd.jpg',
        alt: 'Slotted XCD Kaplama',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: '420HC Paslanmaz + XCD', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'XCD (DLC) Elmas Benzeri', icon: 'Diamond', highlight: true },
      { label: 'Sertlik', value: '5000 HV (yüzey)', icon: 'Gauge' },
      { label: 'Sürtünme Azaltma', value: '%60', icon: 'Zap' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Yapışkan Film Dilme', icon: 'Layers', description: 'Bant, etiket filmler' },
      { title: 'Kompozit Kesim', icon: 'Shield', description: 'Karbon fiber, cam elyaf' },
      { title: 'Yüksek Hız', icon: 'Zap', description: 'Ultra hızlı dilme hatları' },
    ],

    benefits: [
      {
        title: '5000 HV Ultra Sertlik',
        description: 'TiN\'den 2x, seramikten 1.5x daha sert yüzey',
        icon: 'Diamond',
      },
      {
        title: '%60 Sürtünme Azaltma',
        description: 'Yapışkan malzemelerde bile sıfıra yakın yapışma',
        icon: 'Zap',
      },
      {
        title: 'Maksimum Ömür',
        description: 'Tüm kaplama seçenekleri arasında en uzun kullanım ömrü',
        icon: 'Clock',
      },
    ],

    features: [
      'XCD (DLC) elmas benzeri kaplama',
      '5000 HV ultra yüzey sertliği',
      '%60 sürtünme azaltma',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-paslanmaz', 'slotted-paslanmaz-titanyum'],

    seo: {
      title: 'Slotted Dilme Jileti XCD DLC Kaplama 57x19mm | Alya Bıçak',
      description: 'XCD (DLC) elmas benzeri kaplama slotted dilme jileti. 57x19mm, 5000 HV, %60 sürtünme azaltma. Ultra aşınma direnci.',
      keywords: ['XCD kaplama jilet', 'DLC jilet', 'slotted XCD', '57x19mm jilet', 'elmas kaplama dilme jileti', '5000 HV jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 285,
  },
  {
    id: 'slotted-endurium-seramik',
    slug: 'slotted-dilme-jileti-endurium-celik-seramik-kaplama',
    slugEN: 'slotted-slitting-blade-endurium-steel-ceramic-coated',
    code: 'SLT-END-CER',
    name: 'Slotted Dilme Jileti - Endurium Çelik + Seramik Kaplama',
    subtitle: 'Yüksek Hız Çeliği + Seramik — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'Endurium', 'HSS', 'seramik kaplama', '57x19mm', 'premium'],

    shortDescription: 'Endurium yüksek hız çeliği (HSS) üzerine seramik kaplama slotted dilme jileti. 57x19mm, HRC 64-66 taban sertliği, 600°C termal şok dayanımı.',

    images: {
      main: {
        src: '/images/products/slotted-endurium-seramik.jpg',
        alt: 'Slotted Dilme Jileti - Endurium HSS Seramik 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-endurium-seramik.jpg',
        alt: 'Slotted Endurium HSS',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Endurium HSS + Seramik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 64-66 (taban)', icon: 'Shield', highlight: true },
      { label: 'Kaplama', value: 'Seramik', icon: 'Shield' },
      { label: 'Maks. Sıcaklık', value: '600°C', icon: 'Thermometer' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Metal Folyo Dilme', icon: 'Layers', description: 'Alüminyum, bakır folyo kesimi' },
      { title: 'Kompozit Kesim', icon: 'Shield', description: 'Fiber takviyeli malzemeler' },
      { title: 'Yüksek Sıcaklık', icon: 'Flame', description: 'Termal prosesler' },
    ],

    benefits: [
      {
        title: 'HRC 64-66 Taban',
        description: 'Endurium HSS ile karbon çelikten %10 daha sert taban malzeme',
        icon: 'Shield',
      },
      {
        title: '600°C Dayanım',
        description: 'Yüksek sıcaklık ortamlarında güvenilir performans',
        icon: 'Flame',
      },
      {
        title: 'Premium Kesim',
        description: 'Zorlu uygulamalar için en üst segment slotted jilet',
        icon: 'Award',
      },
    ],

    features: [
      'Endurium HSS taban malzeme',
      'HRC 64-66 ultra sertlik',
      'Seramik kaplama',
      '600°C termal şok dayanımı',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-karbon-seramik', 'slotted-yekpare-tungsten'],

    seo: {
      title: 'Slotted Dilme Jileti Endurium HSS Seramik 57x19mm | Alya Bıçak',
      description: 'Endurium HSS + seramik kaplama slotted dilme jileti. 57x19mm, HRC 64-66, 600°C dayanım. Metal folyo ve kompozit kesimde premium performans.',
      keywords: ['Endurium jilet', 'HSS jilet', 'slotted HSS', '57x19mm jilet', 'yüksek hız çeliği jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 286,
  },
  {
    id: 'slotted-yekpare-tungsten',
    slug: 'slotted-dilme-jileti-yekpare-tungsten-karbur',
    slugEN: 'slotted-slitting-blade-solid-tungsten-carbide',
    code: 'SLT-TC',
    name: 'Slotted Dilme Jileti - Yekpare Tungsten Karbür',
    subtitle: 'Solid WC-Co Monolitik Yapı — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'tungsten karbür', 'WC-Co', 'yekpare', '57x19mm', 'ultra sert'],

    shortDescription: 'Yekpare tungsten karbür (WC-Co) slotted dilme jileti. 57x19mm, HRA 92-94 (HRC 75+). Toz metalurjisi monolitik yapı, çeliğin 20-50 kat ömrü.',

    images: {
      main: {
        src: '/images/products/slotted-yekpare-tungsten.jpg',
        alt: 'Slotted Dilme Jileti - Yekpare Tungsten Karbür 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-yekpare-tungsten.jpg',
        alt: 'Slotted Tungsten Karbür',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Yekpare Tungsten Karbür (WC-Co)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRA 92-94 (HRC 75+)', icon: 'Shield', highlight: true },
      { label: 'Bileşim', value: '%94 WC + %6 Co', icon: 'Layers' },
      { label: 'Yoğunluk', value: '14.8 g/cm³', icon: 'Scale' },
      { label: 'Bileme Açısı', value: '30°', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Seramik Kaplı Kağıt', icon: 'FileText', description: 'Ultra aşındırıcı kağıt kesimi' },
      { title: 'Metal Folyo', icon: 'Layers', description: 'Alüminyum/bakır folyo dilme' },
      { title: 'Pil Elektrot', icon: 'Battery', description: 'Lityum pil elektrot kesimi' },
    ],

    benefits: [
      {
        title: '20-50x Uzun Ömür',
        description: 'Çelik jiletlerin asla erişemeyeceği ömür ve sertlik',
        icon: 'Clock',
      },
      {
        title: 'Monolitik Yapı',
        description: 'Kaynak veya lehim yok — toz metalurjisi ile yekpare üretim',
        icon: 'Box',
      },
      {
        title: 'HRA 92-94 Ultra Sert',
        description: 'En aşındırıcı malzemeleri bile kesebilen sertlik',
        icon: 'Diamond',
      },
    ],

    features: [
      'Yekpare tungsten karbür (WC-Co)',
      'HRA 92-94 ultra yüksek sertlik',
      '%94 WC + %6 Co bileşim',
      'Toz metalurjisi monolitik yapı',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
      '20-50 kat çelikten uzun ömür',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-yekpare-seramik', 'slotted-endurium-seramik'],

    seo: {
      title: 'Slotted Dilme Jileti Tungsten Karbür 57x19mm | Alya Bıçak',
      description: 'Yekpare tungsten karbür slotted dilme jileti. 57x19mm, HRA 92-94, %94 WC. Çeliğin 20-50 kat ömrü. Aşındırıcı malzeme kesiminde ultimate.',
      keywords: ['tungsten karbür jilet', 'yekpare karbür', 'WC jilet', '57x19mm jilet', 'solid carbide slotted blade'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 287,
  },
  {
    id: 'slotted-yekpare-seramik',
    slug: 'slotted-dilme-jileti-yekpare-seramik-zirkonya',
    slugEN: 'slotted-slitting-blade-solid-ceramic-zirconia',
    code: 'SLT-ZR',
    name: 'Slotted Dilme Jileti - Yekpare Seramik (Zirkonya)',
    subtitle: 'Y-TZP Zirkonya Seramik — 57x19mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    tags: ['slotted', 'zirkonya', 'seramik', 'Y-TZP', '57x19mm', 'metal-free'],

    shortDescription: 'Yekpare zirkonya (ZrO₂) seramik slotted dilme jileti. 57x19mm, 1200 HV. Metal kontaminasyonu sıfır, elektriksel izolator, biyouyumlu.',

    images: {
      main: {
        src: '/images/products/slotted-yekpare-seramik.jpg',
        alt: 'Slotted Dilme Jileti - Yekpare Zirkonya Seramik 57x19mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/slotted-yekpare-seramik.jpg',
        alt: 'Slotted Zirkonya Seramik',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Yekpare Zirkonya Seramik (Y-TZP)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: '1200 HV', icon: 'Shield', highlight: true },
      { label: 'Yoğunluk', value: '6.05 g/cm³', icon: 'Scale' },
      { label: 'Elektriksel İletkenlik', value: 'Yok (İzolator)', icon: 'Zap' },
      { label: 'Bileme Açısı', value: '25°', icon: 'Gauge' },
    ],

    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },

    applications: [
      { title: 'Gıda Sektörü', icon: 'UtensilsCrossed', description: 'Metal dedektör geçişli kesim' },
      { title: 'Elektronik', icon: 'Cpu', description: 'Komponent ve film kesimi' },
      { title: 'Medikal', icon: 'Heart', description: 'Steril ambalaj kesimi' },
      { title: 'Pil Üretimi', icon: 'Battery', description: 'Seperatör film dilme' },
    ],

    benefits: [
      {
        title: 'Sıfır Metal Kontaminasyonu',
        description: 'Tamamen metal-free yapı — gıda ve elektronik sektörü için ideal',
        icon: 'Check',
      },
      {
        title: 'Elektriksel İzolator',
        description: 'İletkenlik istenmediği uygulamalarda güvenli kesim',
        icon: 'Zap',
      },
      {
        title: 'Biyouyumlu',
        description: 'Medikal ve gıda uygulamaları için uygun malzeme',
        icon: 'Heart',
      },
    ],

    features: [
      'Yekpare zirkonya seramik (Y-TZP)',
      '1200 HV sertlik',
      'Metal kontaminasyonu sıfır',
      'Elektriksel izolator',
      'Biyouyumlu malzeme',
      '57x19mm standart format',
      '5 kalınlık seçeneği',
    ],

    certifications: ['CE'],

    relatedProductIds: ['slotted-yekpare-tungsten', 'slotted-paslanmaz'],

    seo: {
      title: 'Slotted Dilme Jileti Zirkonya Seramik 57x19mm | Alya Bıçak',
      description: 'Yekpare zirkonya seramik slotted dilme jileti. 57x19mm, 1200 HV, metal kontaminasyonsuz. Gıda, elektronik, medikal sektörü.',
      keywords: ['zirkonya jilet', 'seramik jilet', 'slotted seramik', '57x19mm jilet', 'metal-free jilet', 'biyouyumlu jilet'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 288,
  },

  // --- MAKİNA BIÇAKLARI: TERMOFORM / VAKUM PAKETLEME ---
  // 9 ürün: kontör, yarım yıldız, tam yıldız, düz/lama, dairesel, yuvarlak zımba, oval zımba, dişli, genel VPB-001

  {
    id: 'vakum-paketleme-bicak',
    slug: 'vakum-paketleme-bicagi',
    slugEN: 'vacuum-packaging-knife',
    code: 'VPB-001',
    name: 'Vakum Paketleme Bıçağı',
    subtitle: 'Sheffield Çelik — Termoform & MAP Makineleri',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['vakum paketleme', 'thermoform', 'MAP', 'gıda ambalaj', 'sheffield', 'makina bıçağı'],
    shortDescription: 'Termoform ve vakum paketleme makineleri için Sheffield çeliğinden üretilmiş profesyonel kesim bıçağı. HRC 58-60 sertlik, gıda sınıfı yüzey kalitesi, ISO 9001:2015 sertifikalı üretim süreçleri.',
    longDescription: `<p>Vakum paketleme (MAP — Modified Atmosphere Packaging) makinelerinde kullanılan bu profesyonel bıçak, Sheffield çeliğinden hassas CNC işleme ile üretilmiştir. HRC 58-60 Rockwell sertlik değeri, kontrollü atmosfer fırınlarında uygulanan ısıl işlem ile elde edilir.</p>
<p>Gıda sanayiinde HACCP ve BRC standartlarına uygun yüzey kalitesi sunar. Ra ≤0.4 µm yüzey pürüzlülüğü sayesinde gıda parçacıklarının bıçak yüzeyine yapışması önlenir, böylece hijyen standartları korunur.</p>
<p><strong>Uyumlu Makina Markaları:</strong> Multivac, Tiromat, Opack, Betapak, GEA CFS, Alcan, Ulma Packaging, Variovac, Sealpac, Webomatic, Henkelman.</p>
<p>Düz kesim, kontör kesim, yıldız zımba ve hava zımbası dahil tüm termoform vakum paketleme bıçak tiplerinin genel referans ürünüdür. Spesifik makine modeli için teknik destek ekibimiz en uygun SKU eşleşmesini sağlar.</p>`,
    images: {
      main: { src: '/images/products/vakum-paketleme.jpg', alt: 'Vakum Paketleme Bıçağı - VPB-001 - Thermoform Machine Knife', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/vakum-paketleme.jpg', alt: 'VPB-001 Vacuum Packaging Blade', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik (Yüksek Karbonlu)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-60', icon: 'Shield', highlight: true },
      { label: 'Yüzey Kalitesi', value: 'Ra ≤0.4 µm (Gıda Sınıfı)', icon: 'Gauge' },
      { label: 'Isıl İşlem', value: 'Kontrollü atmosfer fırını', icon: 'Flame' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Ulma, Sealpac', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Vakum Paketleme', icon: 'Package', description: 'MAP ve vakum makinelerinde film kesimi' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Et, peynir, hazır gıda ambalajlama' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Termoform kalıp kesim operasyonları' },
    ],
    benefits: [
      { title: 'HRC 58-60 Sertlik', description: 'Kontrollü atmosfer ısıl işlemiyle kalıcı keskinlik ve 3x ömür artışı', icon: 'Shield' },
      { title: 'Gıda Sınıfı Yüzey', description: 'Ra ≤0.4 µm pürüzlülük — HACCP ve BRC uyumlu hijyenik kesim', icon: 'CheckCircle' },
      { title: 'Geniş Makina Uyumu', description: 'Multivac, Tiromat, GEA, Ulma, Sealpac dahil 10+ marka uyumluluğu', icon: 'Settings' },
    ],
    features: ['Sheffield yüksek karbonlu çelik', 'HRC 58-60 sertlik', 'Ra ≤0.4 µm yüzey', 'Gıda sınıfı hijyen', 'CNC hassas işleme', '10+ makina markası uyumlu'],
    certifications: ['ISO 9001:2015', 'CE'],
    relatedProductIds: ['kontr-biai', 'yarim', 'tam', 'dz-biaklar', 'dairesel'],
    seo: {
      title: 'Vakum Paketleme Bıçağı VPB-001 | Termoform Makina Bıçağı | Alya Bıçak',
      description: 'Sheffield çeliğinden vakum paketleme bıçağı. HRC 58-60, gıda sınıfı Ra ≤0.4 µm. Multivac, Tiromat, GEA, Ulma, Sealpac uyumlu. Türkiye distribütörü.',
      keywords: ['vakum paketleme bıçağı', 'thermoform bıçak', 'vacuum packaging blade', 'MAP packaging knife', 'multivac bıçak', 'tiromat bıçak', 'termoform kesim', 'gıda ambalaj bıçağı'],
    },
    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 300,
  },
  {
    id: 'kontr-biai',
    slug: 'kontr-biai-termoform-vakum-paketleme-bicagi',
    slugEN: 'contour-blade-thermoform-vacuum-packaging',
    code: 'CONTOUR BLADE',
    name: 'KONTÖR BIÇAĞI - Termoform Vakum Paketleme Bıçağı',
    subtitle: 'Kontör Profil Kesim — Sheffield Çelik HRC 58-62',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['kontör bıçağı', 'contour blade', 'termoform', 'vakum paketleme', 'multivac', 'tiromat', 'sheffield'],
    shortDescription: 'Termoform ve vakum paketleme makinaları için kontör (contour) profil bıçağı. Sheffield çeliği HRC 58-62, Multivac, Tiromat, GEA uyumlu. Titanyum nitrür (TiN) kaplama opsiyonu ile 2300 HV yüzey sertliği.',
    longDescription: `<p>Kontör bıçağı, termoform ambalaj makinelerinde film kenarlarını profil takip ederek kesen özel geometrili bıçaktır. Sheffield yüksek karbonlu çelikten CNC ile işlenir, HRC 58-62 sertlik değeri hassas ısıl işlemle elde edilir.</p>
<p><strong>Profil Geometrisi:</strong> Makineye özel kontör profili, film kenar geometrisini birebir takip eder. Burr-free (çapaksız) kesim sağlar — ambalaj yüzeyinde kesim izi oluşmaz.</p>
<p><strong>Kaplama Seçenekleri:</strong></p>
<ul>
<li>Standart: Parlak cilalı yüzey, Ra ≤0.4 µm</li>
<li>TiN (Titanyum Nitrür) PVD kaplama: 2300 HV yüzey sertliği, altın sarısı renk, 3-5x ömür artışı</li>
</ul>
<p><strong>Uyumlu Makinalar:</strong> Multivac R-serisi (R105, R145, R245, R535), Tiromat 3000/660, GEA PowerPak, Opack, Betapak, Alcan, Ulma TFS serisi, Variovac.</p>`,
    images: {
      main: { src: '/images/products/kontr-biai-termoform-vakum-paketleme-bicagi.jpg', alt: 'Kontör Bıçağı - Contour Blade - Thermoform Vacuum Packaging', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/kontr-biai-termoform-vakum-paketleme-bicagi.jpg', alt: 'Contour Blade VPB', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'Sheffield Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield', highlight: true },
      { label: 'Kaplama', value: 'Standart veya TiN PVD (2300 HV)', icon: 'Diamond' },
      { label: 'Yüzey Kalitesi', value: 'Ra ≤0.4 µm (Gıda Sınıfı)', icon: 'Gauge' },
      { label: 'Kesim Tipi', value: 'Kontör/Profil Takipli Kesim', icon: 'Scissors' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Ulma', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Vakum Paketleme', icon: 'Package', description: 'Kontör profilli film kesimi' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Kalıp kenarı takipli hassas kesim' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Et, peynir, hazır gıda MAP ambalajı' },
      { title: 'Endüstriyel Paketleme', icon: 'Factory', description: 'Medikal ve teknik ambalajlama' },
    ],
    benefits: [
      { title: 'HRC 58-62 Sertlik', description: 'Hassas ısıl işlem ile tutarlı kesim kalitesi ve uzun ömür', icon: 'Shield' },
      { title: 'Burr-Free Kesim', description: 'Kontör profil geometrisi ile çapaksız, temiz kenar kesimi', icon: 'Zap' },
      { title: 'TiN Kaplama Opsiyonu', description: '2300 HV yüzey sertliği, 3-5x ömür artışı, yapışma önleme', icon: 'Diamond' },
    ],
    features: ['Sheffield yüksek karbonlu çelik', 'HRC 58-62 sertlik', 'Kontör profil geometrisi', 'Burr-free kesim', 'TiN PVD kaplama seçeneği', 'Gıda sınıfı Ra ≤0.4 µm'],
    certifications: ['CE'],
    relatedProductIds: ['yarim', 'tam', 'dz-biaklar', 'dairesel', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Kontör Bıçağı Termoform Vakum | Multivac Tiromat Uyumlu | Alya Bıçak',
      description: 'Sheffield çeliğinden kontör/contour bıçağı. HRC 58-62, TiN 2300 HV kaplama. Multivac, Tiromat, GEA, Ulma uyumlu. ISO 9001 sertifikalı.',
      keywords: ['kontör bıçağı', 'contour blade', 'termoform bıçak', 'vakum paketleme bıçağı', 'multivac bıçak', 'tiromat bıçak', 'thermoform blade', 'vacuum packaging knife'],
    },
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 301,
  },
  {
    id: 'yarim',
    slug: 'yarim-yildiz-zimbalar',
    slugEN: 'half-star-punches-vacuum-packaging',
    code: 'HALF STAR PUNCH',
    name: 'YARIM YILDIZ ZIMBALAR - Vakum Paketleme Zımba Bıçakları',
    subtitle: 'D2 Takım Çeliği — Yarım Yıldız (Half Star) Geometri',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['yarım yıldız', 'half star punch', 'üçgen zımba', 'D2 çelik', 'vakum zımba', 'termoform'],
    shortDescription: 'D2 takım çeliğinden üretilmiş yarım yıldız (half star / triangle) zımba bıçakları. HRC 58-60, %1.55 karbon, %12 krom içerikli yüksek aşınma dayanımlı alaşım. Titanyum nitrür kaplama opsiyonu.',
    longDescription: `<p>Yarım yıldız (half star) zımba bıçakları, vakum ambalajda film üzerine havalandırma deseni açmak için kullanılır. D2 takım çeliği (%1.55 C, %12 Cr, %0.85 Mo, %0.9 V), yüksek krom içeriği sayesinde hem aşınma direnci hem de boyutsal kararlılık sunar.</p>
<p><strong>Isıl İşlem Parametreleri:</strong> 1020-1040°C ostenit dönüşümü → yağda su verme → 200-250°C temperleme. Bu 3 aşamalı süreç HRC 58-60 sertlik ve yeterli tokluk dengesi sağlar.</p>
<p><strong>Geometri:</strong> Üçgen (triangle) formundaki yarım yıldız deseni, filmde optimum havalandırma alanı oluştururken ambalaj bütünlüğünü korur. DIN 1.2379 eşdeğeri malzeme standardı.</p>
<p><strong>Kaplama:</strong> TiN (Titanyum Nitrür) PVD kaplama ile yüzey sertliği 2300 HV'ye çıkar, sürtünme %40 azalır, bıçak ömrü 3-5x artar.</p>`,
    images: {
      main: { src: '/images/products/vakum-zimba-bicaklar.jpg', alt: 'Yarım Yıldız Zımba - Half Star Punch - Vacuum Packaging', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/titanyum-kaplamali-zimba-bicaklar.jpg', alt: 'TiN Coated Half Star Punch Blade', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/vakum-zimba-bicaklar.jpg', alt: 'Half Star Punch D2 Steel', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'D2 Takım Çeliği (DIN 1.2379)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-60', icon: 'Shield', highlight: true },
      { label: 'Kaplama', value: 'Standart veya TiN PVD (2300 HV)', icon: 'Diamond' },
      { label: 'Kimyasal Bileşim', value: '%1.55 C, %12 Cr, %0.85 Mo, %0.9 V', icon: 'Beaker' },
      { label: 'Geometri', value: 'Yarım Yıldız (Half Star / Triangle)', icon: 'Star' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Betapak', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Vakum Zımbalama', icon: 'Target', description: 'Film üzerinde havalandırma deseni açma' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Termoform makinelerinde zımba operasyonu' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Et, peynir, hazır gıda ambalajı' },
    ],
    benefits: [
      { title: 'D2 Takım Çeliği', description: '%12 krom, %1.55 karbon — üstün aşınma direnci ve boyutsal kararlılık', icon: 'Shield' },
      { title: 'TiN Kaplama Opsiyonu', description: '2300 HV yüzey, %40 sürtünme azaltma, 3-5x ömür', icon: 'Diamond' },
      { title: 'Hassas Geometri', description: 'Üçgen form, optimum havalandırma alanı ile ambalaj bütünlüğü dengesi', icon: 'Star' },
    ],
    features: ['D2 takım çeliği DIN 1.2379', 'HRC 58-60 sertlik', '%12 krom aşınma direnci', 'TiN PVD kaplama seçeneği', 'Yarım yıldız geometrisi', 'Gıda sınıfı yüzey'],
    certifications: ['CE'],
    relatedProductIds: ['tam', 'kontr-biai', 'yuvarlak', 'oval', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Yarım Yıldız Zımba D2 Çelik | Vakum Paketleme Zımba Bıçağı | Alya Bıçak',
      description: 'D2 takım çeliğinden yarım yıldız zımba bıçağı. HRC 58-60, DIN 1.2379, TiN 2300 HV kaplama. Multivac, Tiromat uyumlu.',
      keywords: ['yarım yıldız zımba', 'half star punch', 'vakum paketleme zımba', 'D2 çelik zımba', 'termoform zımba', 'multivac zımba', 'tiromat zımba'],
    },
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 302,
  },
  {
    id: 'tam',
    slug: 'tam-yildiz-zimbalar',
    slugEN: 'full-star-punches-vacuum-packaging',
    code: 'FULL STAR PUNCH',
    name: 'TAM YILDIZ ZIMBALAR - Vakum Paketleme Zımba Bıçakları',
    subtitle: 'D2 Takım Çeliği — Tam Yıldız (Full Star) Geometri',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['tam yıldız', 'full star punch', 'yıldız zımba', 'D2 çelik', 'vakum zımba', 'termoform'],
    shortDescription: 'D2 takım çeliğinden üretilmiş tam yıldız (full star) zımba bıçakları. HRC 58-60, DIN 1.2379 eşdeğeri. Yarım yıldıza göre 2x havalandırma alanı. Titanyum nitrür kaplama opsiyonu.',
    longDescription: `<p>Tam yıldız (full star) zımba bıçakları, vakum ambalajda yarım yıldıza göre 2 kat daha geniş havalandırma deseni açar. D2 takım çeliği (%1.55 C, %12 Cr, %0.85 Mo, %0.9 V) ile üretilir.</p>
<p><strong>Avantajı:</strong> Hızlı gazlaştırma gerektiren MAP uygulamalarında (modifiye atmosfer), full star geometrisi gaz alışverişini hızlandırır. Et, peynir ve hazır gıda paketlemede yaygın tercih.</p>
<p><strong>Malzeme:</strong> DIN 1.2379 / AISI D2 — krom-molibden-vanadyum alaşımlı soğuk iş takım çeliği. İkincil sertleşme etkisiyle HRC 58-60 kararlı sertlik.</p>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, GEA PowerPak, Opack, Betapak, Alcan, Ulma, Variovac, Sealpac.</p>`,
    images: {
      main: { src: '/images/products/vakum-zimba-bicaklar.jpg', alt: 'Tam Yıldız Zımba - Full Star Punch - Vacuum Packaging', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/titanyum-kaplamali-zimba-bicaklar.jpg', alt: 'TiN Coated Full Star Punch', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/vakum-zimba-bicaklar.jpg', alt: 'Full Star Punch D2 Steel', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'D2 Takım Çeliği (DIN 1.2379)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-60', icon: 'Shield', highlight: true },
      { label: 'Kaplama', value: 'Standart veya TiN PVD (2300 HV)', icon: 'Diamond' },
      { label: 'Geometri', value: 'Tam Yıldız (Full Star)', icon: 'Star', highlight: true },
      { label: 'Kimyasal Bileşim', value: '%1.55 C, %12 Cr, %0.85 Mo, %0.9 V', icon: 'Beaker' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Sealpac', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'MAP Paketleme', icon: 'Wind', description: 'Modifiye atmosfer hızlı gaz değişimi' },
      { title: 'Vakum Zımbalama', icon: 'Target', description: 'Geniş havalandırma deseni açma' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Et, peynir, hazır gıda ambalajı' },
    ],
    benefits: [
      { title: '2x Havalandırma Alanı', description: 'Yarım yıldıza göre iki kat geniş gaz geçiş yüzeyi', icon: 'Wind' },
      { title: 'D2 Çelik Dayanım', description: 'DIN 1.2379, %12 krom ile üstün aşınma ve korozyon direnci', icon: 'Shield' },
      { title: 'TiN Kaplama Opsiyonu', description: '2300 HV yüzey sertliği, 3-5x ömür artışı', icon: 'Diamond' },
    ],
    features: ['D2 takım çeliği DIN 1.2379', 'HRC 58-60 sertlik', 'Tam yıldız geometrisi', '2x havalandırma alanı', 'TiN PVD kaplama seçeneği', 'MAP uygulamalarına optimize'],
    certifications: ['CE'],
    relatedProductIds: ['yarim', 'kontr-biai', 'yuvarlak', 'oval', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Tam Yıldız Zımba D2 Çelik | Vakum Paketleme Full Star Punch | Alya Bıçak',
      description: 'D2 takım çeliğinden tam yıldız zımba. HRC 58-60, DIN 1.2379. Yarım yıldıza göre 2x alan. Multivac, Tiromat, GEA uyumlu.',
      keywords: ['tam yıldız zımba', 'full star punch', 'vakum paketleme zımba', 'D2 çelik zımba', 'star punch blade', 'multivac star punch', 'termoform zımba'],
    },
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 303,
  },
  {
    id: 'dz-biaklar',
    slug: 'dz-biaklar-lama-bicaklar',
    slugEN: 'straight-blades-vacuum-packaging',
    code: 'STRAIGHT BLADE',
    name: 'DÜZ BIÇAKLAR - Lama Bıçaklar | Vakum Paketleme',
    subtitle: 'HSS (M2) Yüksek Hız Çeliği — HRC 62-65',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['lama bıçak', 'düz bıçak', 'straight blade', 'HSS', 'M2', 'yüksek hız çeliği', 'vakum paketleme'],
    shortDescription: 'HSS M2 yüksek hız çeliğinden üretilmiş düz (lama) bıçaklar. HRC 62-65 sertlik, %0.85 C / %6 W / %5 Mo / %4 Cr / %2 V alaşım bileşimi. Ezilmeye ve deformasyona karşı olağanüstü direnç.',
    longDescription: `<p>Düz (straight/lama) bıçaklar, termoform ve vakum paketleme makinelerinde film kesim hattında kullanılır. HSS M2 (DIN 1.3343 / AISI M2) yüksek hız çeliğinden üretilir.</p>
<p><strong>Alaşım Bileşimi:</strong> %0.85 C, %6.15 W, %5.0 Mo, %4.15 Cr, %1.85 V — bu bileşim ikincil sertleşme fenomeni sayesinde HRC 62-65 sertliğe ulaşırken 600°C'ye kadar termal kararlılık sunar.</p>
<p><strong>Üstünlükleri:</strong></p>
<ul>
<li>Ezilmeye karşı olağanüstü direnç — Sheffield çeliğe göre 5x deformasyon direnci</li>
<li>Kırmızı sertlik (red hardness): 600°C'de bile HRC 60+ koruma</li>
<li>Vanadyum karbür mikro-yapı: MC karbürler aşınmaya karşı doğal bariyer oluşturur</li>
</ul>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac.</p>`,
    images: {
      main: { src: '/images/products/vakum-lama-bicaklar.jpg', alt: 'Düz Lama Bıçak - Straight Blade - HSS M2 Vacuum Packaging', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/vakum-lama-bicaklar.jpg', alt: 'HSS M2 Straight Blade', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'HSS M2 (DIN 1.3343)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 62-65', icon: 'Shield', highlight: true },
      { label: 'Termal Kararlılık', value: '600°C (Kırmızı Sertlik)', icon: 'Flame' },
      { label: 'Alaşım', value: '%0.85 C / %6 W / %5 Mo / %4 Cr / %2 V', icon: 'Beaker' },
      { label: 'Kenar Tipi', value: 'Düz Kesim (Straight Edge)', icon: 'Minus' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Alcan', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Film Kesimi', icon: 'Scissors', description: 'Vakum paketleme film kesim hattı' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Düz hat kesim operasyonları' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Et, peynir, hazır gıda ambalajı' },
    ],
    benefits: [
      { title: 'HRC 62-65 Ultra Sertlik', description: 'M2 HSS ikincil sertleşme ile çelikler arasında en yüksek değer', icon: 'Shield' },
      { title: '600°C Termal Kararlılık', description: 'Kırmızı sertlik — yüksek hızlı kesimde bile sertlik kaybı yok', icon: 'Flame' },
      { title: 'Ezilmez Yapı', description: 'Vanadyum karbür mikro-yapı ile 5x deformasyon direnci', icon: 'Zap' },
    ],
    features: ['HSS M2 DIN 1.3343', 'HRC 62-65 sertlik', '600°C kırmızı sertlik', 'Ezilmeye karşı üstün direnç', 'Vanadyum karbür mikro-yapı', 'MC karbür aşınma bariyeri'],
    certifications: ['CE'],
    relatedProductIds: ['kontr-biai', 'dairesel', 'dili', 'yarim', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Düz Lama Bıçak HSS M2 | Vakum Paketleme Straight Blade | Alya Bıçak',
      description: 'HSS M2 yüksek hız çeliğinden düz lama bıçak. HRC 62-65, 600°C termal kararlılık. Multivac, Tiromat, GEA uyumlu.',
      keywords: ['lama bıçak', 'düz bıçak', 'straight blade', 'HSS bıçak', 'M2 çelik', 'vakum paketleme lama', 'termoform bıçak', 'film cutting blade'],
    },
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 304,
  },
  {
    id: 'dairesel',
    slug: 'dairesel-bicaklar-vakum-paketleme',
    slugEN: 'circular-blades-vacuum-packaging',
    code: 'CIRCULAR BLADE',
    name: 'DAİRESEL BIÇAKLAR - Vakum Paketleme Döner Bıçak',
    subtitle: 'Sheffield Çelik — Döner (Rotary) Kesim HRC 58-62',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['dairesel bıçak', 'circular blade', 'döner bıçak', 'rotary blade', 'vakum paketleme', 'termoform'],
    shortDescription: 'Sheffield çeliğinden dairesel (circular) döner kesim bıçakları. HRC 58-62, hassas bileme açısı, dinamik dengelenmiş yapı. Termoform ve vakum paketleme makinelerinde rotary kesim.',
    longDescription: `<p>Dairesel bıçaklar, termoform ve vakum paketleme makinelerinde döner (rotary) kesim sistemiyle çalışır. Sheffield yüksek karbonlu çelikten CNC torna ve taşlama ile üretilir.</p>
<p><strong>Dinamik Dengeleme:</strong> Her dairesel bıçak, yüksek hız dönüşünde titreşim oluşturmaması için dinamik olarak dengelenir. Bu sayede 3000+ RPM'de bile burr-free kesim garanti edilir.</p>
<p><strong>Bileme:</strong> Kenar açısı 18-22° hassas taşlama ile oluşturulur. Yeniden bileme kalibrasyon hizmeti mevcuttur.</p>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
    images: {
      main: { src: '/images/products/dairesel-bicaklar.jpg', alt: 'Dairesel Bıçak - Circular Blade - Vacuum Packaging Rotary', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/dairesel-bicaklar.jpg', alt: 'Circular Rotary Blade', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'Sheffield Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield', highlight: true },
      { label: 'Geometri', value: 'Dairesel (Circular Rotary)', icon: 'Circle', highlight: true },
      { label: 'Bileme Açısı', value: '18-22°', icon: 'Gauge' },
      { label: 'Dengeleme', value: 'Dinamik Dengelenmiş (3000+ RPM)', icon: 'RotateCw' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Ulma', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Döner Kesim', icon: 'RotateCw', description: 'Yüksek hızlı rotary film kesimi' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Dairesel kesim operasyonları' },
      { title: 'Gıda Sanayii', icon: 'Utensils', description: 'Gıda paketleme hatlarında döner kesim' },
    ],
    benefits: [
      { title: 'Dinamik Dengelenmiş', description: '3000+ RPM\'de titreşimsiz, burr-free kesim garantisi', icon: 'RotateCw' },
      { title: 'HRC 58-62 Sertlik', description: 'Sheffield çeliğinden uzun ömürlü keskin kenar', icon: 'Shield' },
      { title: 'Yeniden Bileme', description: '18-22° hassas taşlama ile bileme kalibrasyon hizmeti', icon: 'RefreshCw' },
    ],
    features: ['Sheffield yüksek karbonlu çelik', 'HRC 58-62 sertlik', 'Dairesel rotary geometri', 'Dinamik dengelenmiş', '18-22° bileme açısı', '3000+ RPM kapasitesi'],
    certifications: ['CE'],
    relatedProductIds: ['kontr-biai', 'dz-biaklar', 'dili', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Dairesel Döner Bıçak | Vakum Paketleme Rotary Blade | Alya Bıçak',
      description: 'Sheffield çeliğinden dairesel döner bıçak. HRC 58-62, dinamik dengelenmiş, 3000+ RPM. Multivac, Tiromat, GEA uyumlu.',
      keywords: ['dairesel bıçak', 'circular blade', 'döner bıçak', 'rotary blade', 'vakum paketleme dairesel', 'termoform dairesel', 'round cutting blade'],
    },
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 305,
  },
  {
    id: 'yuvarlak',
    slug: 'yuvarlak-hava-zimbasi-vakum-paketleme',
    slugEN: 'round-air-punch-vacuum-packaging',
    code: 'ROUND AIR PUNCH',
    name: 'YUVARLAK HAVA ZIMBASI - Vakum Paketleme Zımba Bıçağı',
    subtitle: '440C Martensitik Paslanmaz Çelik — Hava Delikli',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['yuvarlak zımba', 'round air punch', 'hava zımbası', '440C', 'paslanmaz', 'vakum hava zımba'],
    shortDescription: '440C martensitik paslanmaz çelikten yuvarlak hava zımba bıçakları. HRC 58-60, %17 krom korozyon direnci. Gıda sınıfı yüzey, HACCP uyumlu. Vakum ambalajda havalandırma deliği açma.',
    longDescription: `<p>Yuvarlak hava zımba bıçakları, vakum ambalajlarda yuvarlak profile havalandırma (vent) delikleri açar. AISI 440C (%1.0 C, %17 Cr) martensitik paslanmaz çelikten üretilir.</p>
<p><strong>Korozyon Direnci:</strong> %17 krom içeriği, nemli gıda paketleme ortamlarında paslanma ve pitting korozyonuna karşı üstün direnç sağlar. Tuzlu ortamlarda (deniz ürünleri paketleme) bile performans kaybı yaşanmaz.</p>
<p><strong>Yüzey İşlemi:</strong> Elektropolisaj ile Ra ≤0.3 µm pürüzlülük, HACCP ve FDA 21 CFR 175.300 standartlarına uygun gıda teması kalitesi.</p>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
    images: {
      main: { src: '/images/products/vakum-hava-zimba-bicaklari.jpg', alt: 'Yuvarlak Hava Zımbası - Round Air Punch - Vacuum Packaging', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/vakum-hava-zimba-bicaklari.jpg', alt: 'Round Air Punch 440C', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'AISI 440C Martensitik Paslanmaz', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-60', icon: 'Shield', highlight: true },
      { label: 'Krom İçeriği', value: '%17 Cr (Yüksek Korozyon Direnci)', icon: 'Droplet' },
      { label: 'Yüzey Kalitesi', value: 'Ra ≤0.3 µm (Elektropolisaj)', icon: 'Gauge' },
      { label: 'Geometri', value: 'Yuvarlak (Round) Hava Deliği', icon: 'Circle' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Betapak', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Havalandırma Zımbalama', icon: 'Wind', description: 'Vakum ambalajda vent deliği açma' },
      { title: 'Gıda Paketleme', icon: 'Utensils', description: 'Et, peynir, taze gıda MAP ambalajı' },
      { title: 'Deniz Ürünleri', icon: 'Fish', description: 'Tuzlu ortamda korozyon dirençli zımba' },
    ],
    benefits: [
      { title: '%17 Krom Korozyon Direnci', description: 'Nemli ve tuzlu gıda ortamlarında paslanmaya karşı tam koruma', icon: 'Droplet' },
      { title: 'HACCP Uyumlu Yüzey', description: 'Ra ≤0.3 µm elektropolisaj ile gıda sınıfı hijyen', icon: 'CheckCircle' },
      { title: 'HRC 58-60 Sertlik', description: 'Martensitik yapı ile keskinlik ve korozyon direnci dengesi', icon: 'Shield' },
    ],
    features: ['440C martensitik paslanmaz', '%17 krom korozyon direnci', 'HRC 58-60 sertlik', 'Ra ≤0.3 µm elektropolisaj', 'HACCP ve FDA uyumlu', 'Hava delikli geometri'],
    certifications: ['CE'],
    relatedProductIds: ['oval', 'yarim', 'tam', 'kontr-biai', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Yuvarlak Hava Zımbası 440C | Vakum Paketleme Vent Punch | Alya Bıçak',
      description: '440C paslanmaz çelik yuvarlak hava zımbası. HRC 58-60, %17 krom, HACCP uyumlu. Multivac, Tiromat, GEA uyumlu.',
      keywords: ['yuvarlak hava zımba', 'round air punch', 'vakum hava zımbası', '440C zımba', 'vent hole punch', 'multivac air punch', 'termoform zımba'],
    },
    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 306,
  },
  {
    id: 'oval',
    slug: 'oval-hava-zimbasi-vakum-paketleme',
    slugEN: 'oval-air-punch-vacuum-packaging',
    code: 'OVAL AIR PUNCH',
    name: 'OVAL HAVA ZIMBASI - Vakum Paketleme Zımba Bıçağı',
    subtitle: '440C Martensitik Paslanmaz Çelik — Oval Hava Deliği',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['oval zımba', 'oval air punch', 'elips zımba', '440C', 'paslanmaz', 'vakum hava zımba'],
    shortDescription: '440C martensitik paslanmaz çelikten oval (elips) hava zımba bıçakları. HRC 58-60, %17 krom. Yuvarlak zımbaya göre daha geniş havalandırma alanı. Gıda sınıfı elektropolisaj.',
    longDescription: `<p>Oval hava zımba bıçakları, yuvarlak zımbaya göre eliptik profilde daha geniş havalandırma alanı oluşturur. Aynı AISI 440C (%1.0 C, %17 Cr) martensitik paslanmaz çelikten üretilir.</p>
<p><strong>Oval Avantajı:</strong> Eliptik geometri, aynı film bölgesinde %40 daha fazla gaz geçiş yüzeyi sağlar. Bu özellik, hızlı gaz değişimi gerektiren MAP (Modifiye Atmosfer) paketlemede tercih edilir.</p>
<p><strong>440C Özellikleri:</strong> %1.0 karbon + %17 krom bileşimi, martensitik yapıda hem HRC 58-60 sertlik hem de üstün korozyon direnci sunar. Elektropolisaj ile Ra ≤0.3 µm gıda sınıfı yüzey.</p>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
    images: {
      main: { src: '/images/products/vakum-hava-zimba-bicaklari.jpg', alt: 'Oval Hava Zımbası - Oval Air Punch - Vacuum Packaging', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/vakum-hava-zimba-bicaklari.jpg', alt: 'Oval Air Punch 440C', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'AISI 440C Martensitik Paslanmaz', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-60', icon: 'Shield', highlight: true },
      { label: 'Krom İçeriği', value: '%17 Cr (Yüksek Korozyon Direnci)', icon: 'Droplet' },
      { label: 'Geometri', value: 'Oval (Elips) Hava Deliği', icon: 'Circle', highlight: true },
      { label: 'Havalandırma', value: 'Yuvarlağa göre %40 daha geniş alan', icon: 'Wind' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Betapak', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'MAP Havalandırma', icon: 'Wind', description: 'Hızlı gaz değişimli modifiye atmosfer' },
      { title: 'Gıda Paketleme', icon: 'Utensils', description: 'Et, peynir, taze gıda ambalajı' },
      { title: 'Termoform Ambalaj', icon: 'Box', description: 'Geniş vent alanı gerektiren uygulamalar' },
    ],
    benefits: [
      { title: '%40 Daha Geniş Alan', description: 'Oval geometri ile yuvarlak zımbaya göre %40 fazla havalandırma', icon: 'Wind' },
      { title: '440C Korozyon Direnci', description: '%17 krom, nemli ve tuzlu ortamlarda tam koruma', icon: 'Droplet' },
      { title: 'HACCP Uyumlu Yüzey', description: 'Ra ≤0.3 µm elektropolisaj, gıda sınıfı hijyen', icon: 'CheckCircle' },
    ],
    features: ['440C martensitik paslanmaz', 'Oval elips geometrisi', '%40 daha geniş havalandırma', 'HRC 58-60 sertlik', '%17 krom korozyon direnci', 'Ra ≤0.3 µm gıda sınıfı'],
    certifications: ['CE'],
    relatedProductIds: ['yuvarlak', 'yarim', 'tam', 'kontr-biai', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Oval Hava Zımbası 440C | Vakum Paketleme Elips Vent Punch | Alya Bıçak',
      description: '440C paslanmaz çelik oval hava zımbası. HRC 58-60, %17 krom, %40 daha geniş alan. Multivac, Tiromat, GEA uyumlu.',
      keywords: ['oval hava zımba', 'oval air punch', 'elips zımba', 'vakum hava zımbası', '440C zımba', 'vent hole punch', 'multivac oval punch'],
    },
    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 307,
  },
  {
    id: 'dili',
    slug: 'disli-bicaklar-vakum-paketleme',
    slugEN: 'serrated-blades-vacuum-packaging',
    code: 'SERRATED BLADE',
    name: 'DİŞLİ BIÇAKLAR - Vakum Paketleme Testere Dişli Bıçak',
    subtitle: 'Sheffield Çelik — Testere Dişli (Serrated) Kenar',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    tags: ['dişli bıçak', 'serrated blade', 'testere dişli', 'saw tooth', 'vakum paketleme', 'termoform'],
    shortDescription: 'Sheffield çeliğinden testere dişli (serrated) kesim bıçakları. HRC 58-62, mikro-serrated kenar geometrisi. Kalın film, alüminyum folyo ve sert ambalaj malzemelerinde kayma önleyici kesim.',
    longDescription: `<p>Testere dişli (serrated/saw-tooth) bıçaklar, kalın filmler, alüminyum folyo laminasyonlar ve sert termoplastik ambalajlar gibi düz bıçağın kayacağı malzemelerde kullanılır.</p>
<p><strong>Diş Geometrisi:</strong> Mikro-serrated kenar profili, malzemeyi önce deler sonra keser. Bu iki aşamalı mekanizma kayma (slip) riskini ortadan kaldırır ve her kesimde düzgün kenar oluşturur.</p>
<p><strong>Malzeme:</strong> Sheffield yüksek karbonlu çelik, HRC 58-62 sertlik. Dişler CNC ile hassas olarak açılır, her diş arası tolerans ±0.02mm.</p>
<p><strong>İdeal Kullanım:</strong></p>
<ul>
<li>Kalın PE/PP filmler (100+ mikron)</li>
<li>Alüminyum folyo laminasyonlar</li>
<li>PET/PVC rigid ambalajlar</li>
<li>Çok katmanlı bariyerli filmler</li>
</ul>
<p><strong>Uyumlu Makinalar:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
    images: {
      main: { src: '/images/products/dili-bicaklar.jpg', alt: 'Dişli Bıçak - Serrated Blade - Vacuum Packaging Saw-Tooth', width: 800, height: 800 },
      gallery: [],
      thumbnail: { src: '/images/products/dili-bicaklar.jpg', alt: 'Serrated Saw-Tooth Blade', width: 400, height: 400 },
    },
    specs: [
      { label: 'Malzeme', value: 'Sheffield Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield', highlight: true },
      { label: 'Kenar Tipi', value: 'Mikro-Serrated (Testere Dişli)', icon: 'Scissors', highlight: true },
      { label: 'Diş Toleransı', value: '±0.02mm CNC hassasiyet', icon: 'Gauge' },
      { label: 'İdeal Malzeme', value: 'Kalın film, Al folyo, PET/PVC rigid', icon: 'Layers' },
      { label: 'Uyumluluk', value: 'Multivac, Tiromat, GEA, Opack, Ulma', icon: 'Settings' },
    ],
    origin: { brand: 'Sheffield Steel', country: 'England', city: 'Sheffield' },
    applications: [
      { title: 'Sert Film Kesimi', icon: 'Scissors', description: 'PET, PVC, rigid ambalaj kesimi' },
      { title: 'Laminasyon Kesimi', icon: 'Layers', description: 'Alüminyum folyo laminasyonlar' },
      { title: 'Vakum Paketleme', icon: 'Package', description: 'Çok katmanlı bariyer filmler' },
    ],
    benefits: [
      { title: 'Kayma Önleyici Kesim', description: 'Mikro-serrated diş profili, kaygan malzemelerde bile güvenli kesim', icon: 'Zap' },
      { title: '±0.02mm Diş Hassasiyeti', description: 'CNC ile açılmış hassas dişler, düzgün kenar kalitesi', icon: 'Gauge' },
      { title: 'Çok Malzeme Uyumu', description: 'Kalın film, folyo, rigid plastik, bariyerli film — tek bıçak', icon: 'Layers' },
    ],
    features: ['Sheffield yüksek karbonlu çelik', 'HRC 58-62 sertlik', 'Mikro-serrated kenar', '±0.02mm CNC diş toleransı', 'Kayma önleyici mekanizma', 'Kalın film/folyo/rigid uyumlu'],
    certifications: ['CE'],
    relatedProductIds: ['kontr-biai', 'dz-biaklar', 'dairesel', 'vakum-paketleme-bicak'],
    seo: {
      title: 'Dişli Testere Bıçak | Vakum Paketleme Serrated Blade | Alya Bıçak',
      description: 'Sheffield çeliğinden testere dişli bıçak. HRC 58-62, ±0.02mm CNC. Kalın film, folyo, PET/PVC rigid. Multivac, Tiromat uyumlu.',
      keywords: ['dişli bıçak', 'serrated blade', 'testere dişli', 'saw tooth blade', 'vakum paketleme dişli', 'termoform serrated', 'multivac serrated'],
    },
    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 308,
  },
];

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/**
 * PRODUCTS_EXTENDED ürününü base product (scraped-products.json) verileriyle zenginleştirir.
 * availableSizes gibi base'de tanımlı olup extended'da eksik kalan alanları otomatik doldurur.
 * ID üzerinden eşleştirme yapar (slug farklılıklarından etkilenmez).
 */
function mergeWithBaseProduct(extendedProduct: ProductExtended): ProductExtended {
  const baseProduct = getBaseProductById(extendedProduct.id);
  if (!baseProduct) return extendedProduct;

  return {
    ...extendedProduct,
    // availableSizes: Extended'da tanımlanmışsa onu kullan, yoksa base'den al
    availableSizes: extendedProduct.availableSizes || baseProduct.availableSizes || undefined,
  };
}

/** Base product'ı ProductExtended tipine dönüştür (fallback için) */
function convertBaseToExtended(baseProduct: ReturnType<typeof getBaseProductBySlug>, locale: string = DEFAULT_LOCALE): ProductExtended | undefined {
  if (!baseProduct) return undefined;

  const category = getCategoryById(baseProduct.categoryId);
  const subcategory = baseProduct.subcategoryId ? getSubcategoryById(baseProduct.subcategoryId) : undefined;

  // Specifications'ı ProductSpec[] formatına çevir (locale-aware)
  const specs: ProductExtended['specs'] = [];
  if (baseProduct.specifications) {
    Object.entries(baseProduct.specifications).forEach(([key, value]) => {
      if (value) {
        specs.push({
          label: getSpecLabel(key, locale),
          value: String(value),
        });
      }
    });
  }

  // Placeholder görsel URL
  const placeholderImage = '/images/products/placeholder.jpg';
  const productImage = baseProduct.image || placeholderImage;

  // Galeri görselleri - images array varsa kullan
  const galleryImages = (baseProduct as { images?: string[] }).images || [];
  const gallery = galleryImages
    .filter((img: string) => img !== productImage) // Ana görsel hariç
    .map((img: string, index: number) => ({
      src: img,
      alt: `${baseProduct.name} - Görsel ${index + 2}`,
      width: 800,
      height: 800,
    }));

  return {
    id: baseProduct.id,
    slug: baseProduct.slug,
    slugEN: (baseProduct as { slugEN?: string }).slugEN,
    code: baseProduct.code,
    name: baseProduct.name,
    subtitle: undefined,

    categoryId: baseProduct.categoryId,
    subcategoryId: baseProduct.subcategoryId,
    tags: baseProduct.features?.slice(0, 3),

    shortDescription: baseProduct.description,
    longDescription: undefined,

    images: {
      main: {
        src: productImage,
        alt: `${baseProduct.name} - ${baseProduct.code}`,
        width: 800,
        height: 800,
      },
      gallery,
      thumbnail: {
        src: productImage,
        alt: baseProduct.name,
        width: 400,
        height: 400,
      },
    },

    specs,

    origin: {
      brand: 'Sheffield Steel',
      country: 'İngiltere',
      city: 'Sheffield',
    },

    applications: baseProduct.applications?.map(app => ({
      title: app,
      description: '',
    })),

    // Benefits undefined bırakılarak WhyThisProduct component'i 
    // varsayılan çevirili değerleri kullanır
    benefits: undefined,

    features: baseProduct.features,

    // Mevcut ölçüler (varyantlar)
    availableSizes: baseProduct.availableSizes,

    relatedProductIds: undefined,

    seo: {
      title: `${baseProduct.name} | ${baseProduct.code} | Alya Bıçak`,
      description: baseProduct.description,
    },

    isActive: baseProduct.isActive,
    isFeatured: baseProduct.isFeatured,
    isNew: false,
    inStock: baseProduct.variants?.some(v => v.inStock) ?? true,
    order: baseProduct.order,
  };
}

/**
 * Ürünü locale'e göre çevir
 * Non-TR locales için slug'ı slugEN ile değiştirir (SEO)
 */
function translateProductExtended(product: ProductExtended, locale: string): ProductExtended {
  if (locale === 'tr') return product; // Türkçe master data, çevirmeye gerek yok

  // Non-TR locales: slug'ı İngilizce'ye çevir (varsa)
  const localizedSlug = product.slugEN || product.slug;

  // Specs label'larını VE value'larını çevir
  const translatedSpecs = product.specs?.map(spec => {
    // Spec key'i bulmak için Türkçe label'dan key'e dönüştür
    const keyFromLabel = Object.entries(specLabelTranslations['tr']).find(
      ([, label]) => label === spec.label
    )?.[0];
    
    return {
      ...spec,
      label: keyFromLabel ? getSpecLabel(keyFromLabel, locale) : spec.label,
      value: getSpecValueTranslation(spec.value, locale), // VALUE çevirisi eklendi!
    };
  });

  const translation = getProductTranslation(product.id, locale);
  if (translation) {
    // Benefits çevirisi: icon'u orijinalden fallback al
    const translatedBenefits = translation.benefits
      ? translation.benefits.map((b, i) => ({
          title: b.title,
          description: b.description,
          icon: b.icon || (product.benefits?.[i]?.icon) || 'CheckCircle2',
        }))
      : product.benefits;

    // SEO çevirisi: title, description, keywords — Google indexleme için kritik
    const translatedSeo = translation.seo
      ? {
          ...product.seo,
          ...translation.seo,
        }
      : product.seo;

    return {
      ...product,
      slug: localizedSlug,
      name: translation.name,
      subtitle: translation.subtitle || product.subtitle,
      shortDescription: translation.description || translation.shortDescription || product.shortDescription,
      features: translation.features || product.features,
      applications: translation.applications
        ? translation.applications.map(app => ({ title: app, description: '' }))
        : product.applications,
      benefits: translatedBenefits,
      longDescription: translation.longDescription || product.longDescription,
      specs: translatedSpecs || product.specs,
      seo: translatedSeo,
      // Alt text'i de güncelle (image SEO için)
      images: {
        ...product.images,
        main: {
          ...product.images.main,
          alt: `${translation.name} - ${product.code}`,
        },
        thumbnail: {
          ...product.images.thumbnail,
          alt: translation.name,
        },
      },
    };
  }
  
  // Çeviri yoksa sadece specs'i çevir ve slug'ı güncelle
  return {
    ...product,
    slug: localizedSlug,
    specs: translatedSpecs || product.specs,
  };
}

/** Tüm aktif ürünleri getir */
export function getAllProductsExtended(locale: string = DEFAULT_LOCALE): ProductExtended[] {
  return PRODUCTS_EXTENDED.filter(p => p.isActive).map(p => translateProductExtended(mergeWithBaseProduct(p), locale));
}

/** 
 * Slug'a göre ürün getir 
 * Önce PRODUCTS_EXTENDED'da arar, bulamazsa base products'tan dönüştürür.
 * Hem TR slug hem de EN slug ile arama yapar (SEO dual-slug desteği).
 */
export function getProductBySlug(slug: string, locale: string = DEFAULT_LOCALE): ProductExtended | undefined {
  // Önce extended ürünlerde ara (hem slug hem slugEN ile)
  const extendedProduct = PRODUCTS_EXTENDED.find(p => 
    (p.slug === slug || p.slugEN === slug) && p.isActive
  );
  if (extendedProduct) {
    return translateProductExtended(mergeWithBaseProduct(extendedProduct), locale);
  }

  // Extended'da yoksa base product'tan dönüştür (hem slug hem slugEN ile)
  const allBaseProducts = getAllProducts();
  const baseProduct = allBaseProducts.find(p => 
    (p.slug === slug || p.slugEN === slug) && p.isActive
  );
  if (baseProduct) {
    const converted = convertBaseToExtended(baseProduct, locale);
    if (converted) {
      return translateProductExtended(converted, locale);
    }
  }

  return undefined;
}

/** ID'ye göre ürün getir (fallback ile) */
export function getProductById(id: string, locale: string = DEFAULT_LOCALE): ProductExtended | undefined {
  // Önce extended ürünlerde ara
  const extendedProduct = PRODUCTS_EXTENDED.find(p => p.id === id && p.isActive);
  if (extendedProduct) {
    return translateProductExtended(mergeWithBaseProduct(extendedProduct), locale);
  }

  // Extended'da yoksa base product'tan dönüştür
  const allBaseProducts = getAllProducts();
  const baseProduct = allBaseProducts.find(p => p.id === id && p.isActive);
  if (baseProduct) {
    const converted = convertBaseToExtended(baseProduct, locale);
    if (converted) {
      return translateProductExtended(converted, locale);
    }
  }

  return undefined;
}

/** Kategoriye göre ürünleri getir */
export function getProductsByCategory(categoryId: string, locale: string = DEFAULT_LOCALE): ProductExtended[] {
  return PRODUCTS_EXTENDED
    .filter(p => p.categoryId === categoryId && p.isActive)
    .map(p => translateProductExtended(p, locale));
}

/** İlgili ürünleri getir (ProductCardData formatında) */
export function getRelatedProducts(productId: string, locale: string = DEFAULT_LOCALE): ProductCardData[] {
  const product = getProductById(productId, locale);
  if (!product || !product.relatedProductIds) return [];

  return product.relatedProductIds
    .map(id => getProductById(id, locale))
    .filter((p): p is ProductExtended => p !== undefined)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      code: p.code,
      name: p.name,
      subtitle: p.subtitle,
      thumbnail: p.images.thumbnail.src,
      categorySlug: p.categoryId,
      categoryName: getCategoryName(p.categoryId, locale),
      origin: p.origin ? `${p.origin.city}, ${p.origin.country}` : undefined,
      isFeatured: p.isFeatured,
      isNew: p.isNew,
    }));
}

/** Öne çıkan ürünleri getir */
export function getFeaturedProductsExtended(locale: string = DEFAULT_LOCALE): ProductExtended[] {
  return PRODUCTS_EXTENDED
    .filter(p => p.isFeatured && p.isActive)
    .map(p => translateProductExtended(p, locale));
}

/** Kategori adını getir (locale aware) */
function getCategoryName(categoryId: string, locale: string = DEFAULT_LOCALE): string {
  const catTranslation = getCategoryTranslation(categoryId, locale);
  if (catTranslation) return catTranslation.name;

  const category = getCategoryById(categoryId);
  return category?.name || categoryId;
}

/** 
 * Tüm ürün slug'larını getir (static generation için)
 * Hem extended hem de base products'tan alır
 * Locale parametresi ile doğru slug döner:
 * - TR: Türkçe slug (master)
 * - Diğer: İngilizce slug (slugEN varsa)
 */
export function getAllProductSlugs(locale: string = DEFAULT_LOCALE): string[] {
  const allBaseProducts = getAllProducts();
  return allBaseProducts.filter(p => p.isActive).map(p => {
    if (locale !== 'tr' && p.slugEN) return p.slugEN;
    return p.slug;
  });
}

/**
 * Bir ürünün tüm locale slug'larını döner (hreflang ve redirect için)
 * Hem slug hem slugEN ile arama yapar
 * @returns { tr: string, en: string } — TR slug ve global (EN) slug
 */
export function getProductSlugPair(slug: string): { tr: string; en: string } {
  // Extended products'ta ara
  const ext = PRODUCTS_EXTENDED.find(p => p.slug === slug || p.slugEN === slug);
  if (ext?.slugEN) {
    return { tr: ext.slug, en: ext.slugEN };
  }

  // Base products'ta ara
  const base = getAllProducts().find(p => p.slug === slug || p.slugEN === slug);
  if (base?.slugEN) {
    return { tr: base.slug, en: base.slugEN };
  }

  // slugEN yoksa aynı slug her yerde
  return { tr: slug, en: slug };
}

/**
 * Ürünün istenen locale'de gerçek çevirisi var mı kontrol et
 * true = fallback içerik gösteriliyor → noindex yapılmalı (SEO)
 * TR için her zaman false döner (master data zaten Türkçe)
 */
export function isProductUsingFallback(slug: string, locale: string): boolean {
  if (locale === 'tr') return false;
  
  // Ürünü bul (raw, çevirmeden)
  const product = PRODUCTS_EXTENDED.find(p =>
    (p.slug === slug || p.slugEN === slug) && p.isActive
  );
  const productId = product?.id || getAllProducts().find(p =>
    (p.slug === slug || p.slugEN === slug) && p.isActive
  )?.id;
  
  if (!productId) return true; // Ürün bulunamadı
  
  // İstenen locale'de çeviri var mı?
  const translation = getProductTranslation(productId, locale);
  return !translation;
}

