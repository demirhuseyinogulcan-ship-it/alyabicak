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
    grindProfile: 'Bileme Profili',
    back: 'Kılıf',
    packaging: 'Ambalaj',
    notches: 'Çentik Sayısı',
    holes: 'Delik',
    form: 'Form',
    availableVariants: 'Mevcut Varyantlar',
    bladeProfile: 'Bıçak Profili',
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
    grindProfile: 'Grind Profile',
    back: 'Back',
    packaging: 'Packaging',
    notches: 'Notches',
    holes: 'Holes',
    form: 'Form',
    availableVariants: 'Available Variants',
    bladeProfile: 'Blade Profile',
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
    grindProfile: 'ملف الشحذ',
    back: 'الغلاف',
    packaging: 'التعبئة',
    notches: 'عدد الشقوق',
    holes: 'الثقوب',
    form: 'الشكل',
    availableVariants: 'المتغيرات المتوفرة',
    bladeProfile: 'ملف الشفرة',
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
    grindProfile: 'Профиль заточки',
    back: 'Футляр',
    packaging: 'Упаковка',
    notches: 'Насечки',
    holes: 'Отверстия',
    form: 'Форма',
    availableVariants: 'Доступные варианты',
    bladeProfile: 'Профиль лезвия',
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
    grindProfile: 'Profil d\'affûtage',
    back: 'Étui',
    packaging: 'Emballage',
    notches: 'Encoches',
    holes: 'Trous',
    form: 'Forme',
    availableVariants: 'Variantes disponibles',
    bladeProfile: 'Profil de lame',
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

  // =============================================================================
  // TEK KENARLI JİLETLER (Single Edge Blades) — B201 Serisi
  // =============================================================================

  {
    id: 'single-edge-carbon-2f',
    slug: 'tek-kenar-jilet-karbon-celik-023mm-2-facet',
    slugEN: 'single-edge-blade-carbon-steel-023mm-2-facet',
    code: 'B201 102 A01',
    name: 'Tek Kenar Jilet — Karbon Çelik 0.23mm 2-Facet',
    subtitle: 'Standart Tip — Alüminyum Kılıf — Çentikli',

    categoryId: 'industrial-blades',
    subcategoryId: 'single-edge',
    tags: ['tek kenar jilet', 'single edge blade', 'karbon çelik', '2-facet', 'cam kazıma', 'scraper blade', 'B201'],

    shortDescription: 'Yüksek karbonlu çelikten üretilmiş standart tip tek kenar jilet. 0.23mm (0.009") kalınlık, 2-facet bileme ile dayanıklılık ve keskinlik dengesi. Cam kazıma, etiket sökme ve genel endüstriyel yüzey hazırlama uygulamalarında güvenilir performans.',

    longDescription: `
      <p>B201 102 A01 Tek Kenar Jilet, endüstriyel kazıma ve kesim uygulamaları için tasarlanmış standart tip tek kenarlı jiletdir. Yüksek karbonlu çelikten üretilmiş olup, kontrollü atmosfer sertleştirme prosesi ile HRC 58-62 sertlik değerine ulaşır.</p>

      <h3>2-Facet Bileme Profili</h3>
      <p>2-facet (çift yüzeyli) bileme profili, <strong>dayanıklılık ve keskinlik arasında optimum denge</strong> sağlar. Bu profil özellikle genel amaçlı kazıma, yüzey temizleme ve kesim işlerinde tercih edilir. 3-facet'e kıyasla daha uzun kenar ömrü sunar; sert yüzeylerde bile güvenilir performans gösterir.</p>

      <h3>Kullanım Alanları</h3>
      <ul>
        <li><strong>Cam endüstrisi:</strong> Cam yüzey kazıma, etiket/stiker sökme, cam temizleme</li>
        <li><strong>Otomotiv:</strong> Lastik çapak alma, conta kazıma, cam filmi sökme</li>
        <li><strong>İnşaat:</strong> Boya/macun kazıma, yüzey hazırlama</li>
        <li><strong>Matbaa/Ambalaj:</strong> Mürekkep kazıma, rulo temizleme</li>
      </ul>

      <h3>Teknik Detaylar</h3>
      <p>Alüminyum kılıf tasarımı güvenli taşıma ve depolama sağlar. Çentikli kenar profili, standart kazıyıcı aparatlarla (scraper) uyumlu montaj imkânı verir. Korozyona dayanıklı yüzey işlemi uygulanmıştır.</p>
    `,

    images: {
      main: {
        src: '/images/products/single-edge-carbon-2f.jpg',
        alt: 'Tek Kenar Jilet Karbon Çelik 0.23mm 2-Facet B201',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/single-edge-carbon-2f.jpg',
        alt: 'Tek Kenar Jilet Karbon Çelik 2-Facet',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Kalınlık', value: '0.23mm (0.009")', icon: 'Ruler' },
      { label: 'Boyutlar', value: '38×19mm', icon: 'Maximize' },
      { label: 'Bileme Profili', value: '2-Facet', icon: 'Gauge' },
      { label: 'Kılıf', value: 'Alüminyum', icon: 'Box' },
    ],

    origin: {
      brand: 'AccuTec',
      country: 'USA',
      city: 'Verona, Virginia',
    },

    applications: [
      { title: 'Cam Kazıma & Temizleme', icon: 'Sparkles', description: 'Cam yüzey kazıma, etiket sökme, cam temizleme' },
      { title: 'Otomotiv', icon: 'Car', description: 'Lastik çapak alma, conta kazıma, cam filmi sökme' },
      { title: 'İnşaat & Boya', icon: 'Paintbrush', description: 'Boya/macun kazıma, yüzey hazırlama' },
      { title: 'Matbaa & Ambalaj', icon: 'Printer', description: 'Mürekkep kazıma, rulo temizleme' },
    ],

    benefits: [
      { title: 'Dayanıklılık–Keskinlik Dengesi', description: '2-facet bileme profili ile sert yüzeylerde uzun kenar ömrü ve güvenilir kesim kalitesi', icon: 'Shield' },
      { title: 'Güvenli Saklama', description: 'Alüminyum kılıf tasarımı ile taşıma ve depolamada kenar koruması', icon: 'Box' },
      { title: 'Standart Uyumluluk', description: 'Çentikli kenar profili ile standart kazıyıcı aparatlarına anında montaj', icon: 'Settings' },
    ],

    features: [
      'Yüksek karbonlu çelik — üstün sertlik ve kesim ömrü',
      '2-facet bileme — dayanıklılık ve keskinlik dengesi',
      'Alüminyum kılıf — güvenli taşıma ve depolama',
      'Çentikli tasarım — kazıyıcı aparatlara kolay montaj',
      'Korozyona dayanıklı yüzey işlemi',
      '38×19mm endüstri standardı ölçü',
    ],

    certifications: ['CE'],

    availableSizes: ['38×19×0.23mm'],

    relatedProductIds: ['single-edge-carbon-3f', 'single-edge-carbon-030', 'single-edge-stainless-ptfe'],

    seo: {
      title: 'Tek Kenar Jilet Karbon Çelik 0.23mm 2-Facet B201 | Alya Bıçak',
      description: 'Yüksek karbonlu çelik tek kenar jilet. 0.23mm, HRC 58-62, 2-facet bileme, alüminyum kılıflı. Cam kazıma, etiket sökme, otomotiv çapak alma. Türkiye distribütörü.',
      keywords: ['tek kenar jilet', 'single edge blade', 'cam kazıma jileti', 'scraper blade', 'B201', 'karbon çelik jilet', '0.23mm jilet', '2-facet jilet', 'cam temizleme jileti', 'etiket sökme jileti'],
    },

    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 108,
  },

  {
    id: 'single-edge-carbon-3f',
    slug: 'tek-kenar-jilet-karbon-celik-023mm-3-facet',
    slugEN: 'single-edge-blade-carbon-steel-023mm-3-facet',
    code: 'B201 131 A01',
    name: 'Tek Kenar Jilet — Karbon Çelik 0.23mm 3-Facet',
    subtitle: 'Hassas Kesim — Kılıflı/Kılıfsız Seçenekler',

    categoryId: 'industrial-blades',
    subcategoryId: 'single-edge',
    tags: ['tek kenar jilet', 'single edge blade', '3-facet', 'hassas kesim', 'cam temizleme', 'precision blade', 'B201'],

    shortDescription: 'Yüksek karbonlu çelikten üretilmiş 3-facet hassas bileme tek kenar jilet. 0.23mm (0.009") kalınlık ile ultra keskin kenar. Cam temizleme, hassas kazıma ve ince malzeme kesiminde üstün performans. Kılıflı, kılıfsız ve bulk (1000 adet) seçenekleri.',

    longDescription: `
      <p>B201 131 A01 serisi, <strong>3-facet (üç yüzeyli) hassas bileme</strong> profili ile ultra keskin kenar sunar. Standart 2-facet'e kıyasla daha ince ve daha keskin kenar geometrisi, hassas kazıma ve temiz kesim gerektiren uygulamalarda tercih sebebidir.</p>

      <h3>3-Facet Bileme Avantajı</h3>
      <p>Üçüncü bileme yüzeyi kenar açısını daraltarak <strong>cerrahi düzeyde keskinlik</strong> sağlar. Bu profil özellikle cam yüzey temizleme, ince film kesimi ve hassas etiket sökme işlerinde fark yaratır. Gelişmiş Armor Edge teknolojisi sayesinde ince kenar profiline rağmen güçlü yapı korunur.</p>

      <h3>Varyant Seçenekleri</h3>
      <ul>
        <li><strong>B201 131 A01:</strong> 38×19mm, alüminyum kılıflı, çentikli</li>
        <li><strong>B201 131P A01:</strong> 38×19mm, alüminyum kılıflı, çentikli (Premium)</li>
        <li><strong>B201 002 A01:</strong> 38×17mm, kılıfsız, çentikli — 1000'li bulk ambalaj</li>
      </ul>

      <h3>Kullanım Alanları</h3>
      <ul>
        <li><strong>Cam endüstrisi:</strong> Hassas cam temizleme, ince etiket/stiker sökme</li>
        <li><strong>Otomotiv detay:</strong> İnce çapak alma, hassas yüzey temizleme</li>
        <li><strong>Laboratuvar:</strong> Numune kesimi, slide hazırlama</li>
        <li><strong>Matbaa:</strong> İnce film ve folyo kesimi</li>
      </ul>
    `,

    images: {
      main: {
        src: '/images/products/single-edge-carbon-3f.jpg',
        alt: 'Tek Kenar Jilet Karbon Çelik 0.23mm 3-Facet',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/single-edge-carbon-3f.jpg',
        alt: 'Tek Kenar Jilet Karbon Çelik 3-Facet',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Kalınlık', value: '0.23mm (0.009")', icon: 'Ruler' },
      { label: 'Boyutlar', value: '38×19mm / 38×17mm', icon: 'Maximize' },
      { label: 'Bileme Profili', value: '3-Facet (Ultra Keskin)', icon: 'Gauge', highlight: true },
      { label: 'Ambalaj', value: 'Kılıflı / Kılıfsız / 1000 Adet Bulk', icon: 'Package' },
    ],

    origin: {
      brand: 'AccuTec',
      country: 'USA',
      city: 'Verona, Virginia',
    },

    applications: [
      { title: 'Hassas Cam Temizleme', icon: 'Sparkles', description: 'İnce cam yüzey temizleme, stiker sökme' },
      { title: 'Otomotiv Detay', icon: 'Car', description: 'İnce çapak alma, hassas yüzey temizleme' },
      { title: 'Laboratuvar & Temiz Oda', icon: 'FlaskConical', description: 'Numune kesimi, hassas uygulamalar' },
      { title: 'İnce Film Kesimi', icon: 'Film', description: 'Plastik film, folyo, ince malzeme kesimi' },
    ],

    benefits: [
      { title: 'Ultra Keskin 3-Facet Kenar', description: 'Üç yüzeyli bileme profili ile cerrahi düzeyde keskinlik — hassas uygulamalarda fark yaratır', icon: 'Target' },
      { title: 'Esnek Ambalaj Seçenekleri', description: 'Kılıflı (tekli), kılıfsız veya 1000\'li bulk — işletme ihtiyacına göre seçim', icon: 'Package' },
      { title: 'Tutarlı Kesim Kalitesi', description: 'Kontrollü atmosfer sertleştirme ile her jilet aynı performansı garantiler', icon: 'CheckCircle' },
    ],

    features: [
      '3-facet hassas bileme — ultra keskin kenar',
      'Kılıflı ve kılıfsız seçenekler',
      'Çentikli tasarım — güvenli montaj',
      '1000\'li bulk ambalaj seçeneği (B201 002 A01)',
      'Yüksek karbonlu çelik — tutarlı kesim kalitesi',
      '38×19mm / 38×17mm standart ölçüler',
    ],

    certifications: ['CE'],

    availableSizes: ['38×19×0.23mm', '38×17×0.23mm'],

    relatedProductIds: ['single-edge-carbon-2f', 'single-edge-stainless', 'single-edge-stainless-ptfe'],

    seo: {
      title: 'Tek Kenar Jilet 3-Facet Karbon Çelik 0.23mm B201 | Alya Bıçak',
      description: '3-facet ultra keskin tek kenar jilet. 0.23mm karbon çelik, HRC 58-62. Hassas cam temizleme, etiket sökme, ince film kesimi. Kılıflı/kılıfsız/1000\'li.',
      keywords: ['tek kenar jilet 3 facet', 'single edge blade 3 facet', 'hassas cam jileti', 'precision single edge', 'B201 131', 'ultra keskin jilet', 'cam temizleme jileti', 'kılıfsız jilet 1000li', 'bulk single edge blade', 'laboratory blade'],
    },

    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 109,
  },

  {
    id: 'single-edge-stainless',
    slug: 'tek-kenar-jilet-paslanmaz-celik-023mm',
    slugEN: 'single-edge-blade-stainless-steel-023mm',
    code: 'B201 801 A01',
    name: 'Tek Kenar Jilet — Paslanmaz Çelik 0.23mm',
    subtitle: 'Korozyona Dayanıklı — 3-Facet Hassas Bileme',

    categoryId: 'industrial-blades',
    subcategoryId: 'single-edge',
    tags: ['paslanmaz çelik', 'stainless steel', 'tek kenar jilet', 'korozyona dayanıklı', 'gıda', 'ilaç', 'temiz oda'],

    shortDescription: 'Paslanmaz çelikten üretilmiş korozyona dayanıklı tek kenar jilet. %13+ krom içeriği ile pas ve oksidasyona karşı tam koruma. Gıda işleme, ilaç üretimi, temiz oda ve denizcilik sektörlerinde tercih edilir.',

    longDescription: `
      <p>B201 801 A01, <strong>paslanmaz çelikten</strong> üretilmiş özel tek kenar jiletdir. %13+ krom içeriği sayesinde nem, su ve kimyasal maruziyetin yoğun olduğu ortamlarda korozyona karşı tam dayanıklılık sağlar.</p>

      <h3>Neden Paslanmaz Çelik?</h3>
      <p>Standart karbon çelik jiletler nemli ortamlarda hızla paslanır ve kontaminasyon riski oluşturur. Paslanmaz çelik versiyonu:</p>
      <ul>
        <li><strong>Pas ve oksidasyona karşı</strong> tam korunma</li>
        <li><strong>Gıda güvenliğine uygun</strong> — kontaminasyon riski yok</li>
        <li><strong>Kimyasal dayanıklılık</strong> — temizlik solüsyonlarına dirençli</li>
        <li><strong>Uzun raf ömrü</strong> — nemli depolarda bile bozulmaz</li>
      </ul>

      <h3>Kullanım Alanları</h3>
      <ul>
        <li><strong>Gıda işleme:</strong> Et, süt, içecek tesislerinde kazıma ve temizleme</li>
        <li><strong>İlaç ve kozmetik:</strong> Temiz üretim hatlarında yüzey hazırlama</li>
        <li><strong>Denizcilik:</strong> Tuzlu su ortamında cam ve yüzey temizleme</li>
        <li><strong>Temiz oda:</strong> Kontaminasyon riski olmayan hassas kazıma</li>
      </ul>
    `,

    images: {
      main: {
        src: '/images/products/single-edge-stainless.jpg',
        alt: 'Tek Kenar Jilet Paslanmaz Çelik 0.23mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/single-edge-stainless.jpg',
        alt: 'Tek Kenar Jilet Paslanmaz Çelik',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Paslanmaz Çelik (Stainless Steel)', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 55-58', icon: 'Shield' },
      { label: 'Kalınlık', value: '0.23mm (0.009")', icon: 'Ruler' },
      { label: 'Boyutlar', value: '38×19mm', icon: 'Maximize' },
      { label: 'Bileme Profili', value: '3-Facet', icon: 'Gauge' },
      { label: 'Krom İçeriği', value: '%13+', icon: 'Droplets', highlight: true },
    ],

    origin: {
      brand: 'AccuTec',
      country: 'USA',
      city: 'Verona, Virginia',
    },

    applications: [
      { title: 'Gıda İşleme', icon: 'UtensilsCrossed', description: 'Et, süt, içecek tesislerinde kazıma' },
      { title: 'İlaç & Kozmetik', icon: 'Pill', description: 'Temiz üretim hatlarında yüzey hazırlama' },
      { title: 'Denizcilik', icon: 'Anchor', description: 'Tuzlu su ortamında yüzey temizleme' },
      { title: 'Temiz Oda', icon: 'FlaskConical', description: 'Kontaminasyon riski olmayan kazıma' },
    ],

    benefits: [
      { title: 'Tam Korozyon Koruması', description: '%13+ krom içeriği ile nem, tuz ve kimyasallara karşı korunma — pas riski sıfır', icon: 'Droplets' },
      { title: 'Gıda Güvenliği', description: 'Paslanmaz yapı ile gıda kontaminasyon riski ortadan kalkar — FDA/HACCP uyumlu ortamlar', icon: 'ShieldCheck' },
      { title: 'Uzun Raf Ömrü', description: 'Nemli depo koşullarında bile bozulmaz — stok yönetimi kolaylığı', icon: 'Clock' },
    ],

    features: [
      'Paslanmaz çelik — korozyona tam dayanıklılık',
      '%13+ krom içeriği — pas ve oksidasyona karşı koruma',
      '3-facet hassas bileme — temiz kesim',
      'Alüminyum kılıf — güvenli saklama',
      'Nem ve kimyasala dayanıklı',
      'Gıda ve ilaç sektörüne uygun',
    ],

    certifications: ['CE'],

    availableSizes: ['38×19×0.23mm'],

    relatedProductIds: ['single-edge-stainless-ptfe', 'single-edge-carbon-3f', 'single-edge-carbon-2f'],

    seo: {
      title: 'Tek Kenar Jilet Paslanmaz Çelik 0.23mm B201 | Alya Bıçak',
      description: 'Paslanmaz çelik tek kenar jilet. %13+ krom, HRC 55-58, 3-facet. Gıda işleme, ilaç, temiz oda, denizcilik. Korozyona tam dayanıklı.',
      keywords: ['paslanmaz jilet', 'stainless steel single edge', 'gıda güvenliği jileti', 'korozyona dayanıklı jilet', 'B201 801', 'temiz oda jileti', 'denizcilik jileti', 'ilaç sektörü jilet', 'paslanmaz tek kenar', 'food safe blade'],
    },

    isActive: true,
    isFeatured: false,
    isNew: true,
    inStock: true,
    order: 110,
  },

  {
    id: 'single-edge-stainless-ptfe',
    slug: 'tek-kenar-jilet-paslanmaz-ptfe-kaplama-023mm',
    slugEN: 'single-edge-blade-stainless-steel-ptfe-coated-023mm',
    code: 'B201 901 A01',
    name: 'Tek Kenar Jilet — Paslanmaz Çelik + PTFE Kaplama 0.23mm',
    subtitle: 'PTFE (Teflon) Kaplama — Yapışma Önleyici',

    categoryId: 'industrial-blades',
    subcategoryId: 'single-edge',
    tags: ['PTFE', 'Teflon', 'yapışma önleyici', 'paslanmaz', 'tek kenar jilet', 'non-stick blade', 'B201'],

    shortDescription: 'Paslanmaz çelik üzerine PTFE (Teflon) kaplama tek kenar jilet. 0.23mm, 3-facet bileme. PTFE kaplama sürtünmeyi %40-60 azaltır, yapışkan malzeme birikimini engeller. Yapışkan etiket sökme, bant kazıma ve cam filmi çıkarmada en iyi performans.',

    longDescription: `
      <p>B201 901 A01, <strong>paslanmaz çelik alt yapı üzerine PTFE (Polytetrafluoroethylene / Teflon®) kaplama</strong> uygulanmış premium tek kenar jiletdir. Yapışkan malzeme ile temas eden tüm uygulamalarda üstün performans sağlar.</p>

      <h3>PTFE Kaplama Avantajları</h3>
      <ul>
        <li><strong>%40-60 sürtünme azaltma:</strong> Jilet yüzeyinde yapışkan birikmez</li>
        <li><strong>Yapışma önleyici (non-stick):</strong> Yapışkan kalıntı transferi minimize edilir</li>
        <li><strong>Uzun kullanım ömrü:</strong> Kaplama kaynaklı düşük sürtünme, kenar aşınmasını yavaşlatır</li>
        <li><strong>Temiz kesim:</strong> Yapışkan artıyı engellediği için her kesim ilk kesim kadar temiz</li>
      </ul>

      <h3>Varyant Seçenekleri</h3>
      <ul>
        <li><strong>B201 901 A01:</strong> Çentikli — standart kazıyıcı aparatlarla uyumlu</li>
        <li><strong>B201 901 A01-K:</strong> Çizik — alternatif montaj profili</li>
      </ul>

      <h3>Kullanım Alanları</h3>
      <ul>
        <li><strong>Yapışkan etiket sökme:</strong> Cam, metal, plastik yüzeylerden etiket ve stiker çıkarma</li>
        <li><strong>Cam filmi çıkarma:</strong> Otomotiv ve bina camlarından film sökme</li>
        <li><strong>Matbaa:</strong> Mürekkep ve yapışkan kazıma — silindir temizleme</li>
        <li><strong>Ambalaj:</strong> Yapışkan bant artığı temizleme</li>
      </ul>
    `,

    images: {
      main: {
        src: '/images/products/single-edge-stainless-ptfe.jpg',
        alt: 'Tek Kenar Jilet Paslanmaz Çelik PTFE Kaplama 0.23mm',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/single-edge-stainless-ptfe.jpg',
        alt: 'Tek Kenar Jilet PTFE Kaplama',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Paslanmaz Çelik + PTFE', icon: 'Layers', highlight: true },
      { label: 'Kaplama', value: 'PTFE (Teflon®)', icon: 'Shield', highlight: true },
      { label: 'Sertlik', value: 'HRC 55-58', icon: 'Gauge' },
      { label: 'Kalınlık', value: '0.23mm (0.009")', icon: 'Ruler' },
      { label: 'Boyutlar', value: '38×19mm', icon: 'Maximize' },
      { label: 'Sürtünme Azaltma', value: '%40-60', icon: 'Zap' },
    ],

    origin: {
      brand: 'AccuTec',
      country: 'USA',
      city: 'Verona, Virginia',
    },

    applications: [
      { title: 'Yapışkan Etiket Sökme', icon: 'Tag', description: 'Cam, metal, plastik yüzeylerden etiket çıkarma' },
      { title: 'Cam Filmi Çıkarma', icon: 'Layers', description: 'Otomotiv ve bina camlarından film sökme' },
      { title: 'Matbaa & Baskı', icon: 'Printer', description: 'Mürekkep/yapışkan kazıma, silindir temizleme' },
      { title: 'Ambalaj Temizleme', icon: 'Package', description: 'Yapışkan bant artığı temizleme' },
    ],

    benefits: [
      { title: '%40-60 Düşük Sürtünme', description: 'PTFE kaplama ile yapışkan malzeme birikimi engellenir — her kesim ilk kesim kadar temiz', icon: 'Zap' },
      { title: 'Çift Koruma', description: 'Paslanmaz çelik + PTFE kaplama = korozyon + yapışma sorununa çift çözüm', icon: 'ShieldCheck' },
      { title: 'Çentikli & Çizik Seçenek', description: 'İki farklı montaj profili ile geniş aparat uyumluluğu', icon: 'Settings' },
    ],

    features: [
      'PTFE (Teflon) kaplama — yapışmayı önler',
      '%40-60 sürtünme azaltma — yapışkan malzemelerde üstün performans',
      'Paslanmaz çelik alt yapı — korozyona tam dayanıklılık',
      '3-facet hassas bileme — temiz ve kontrollü kesim',
      'Çentikli ve çizik varyantları mevcut',
      'Yapışkan birikim problemi yaşanan ortamlar için ideal',
    ],

    certifications: ['CE'],

    availableSizes: ['38×19×0.23mm'],

    relatedProductIds: ['single-edge-stainless', 'single-edge-carbon-3f', 'single-edge-carbon-030'],

    seo: {
      title: 'Tek Kenar Jilet PTFE Kaplama Paslanmaz 0.23mm | Alya Bıçak',
      description: 'PTFE Teflon kaplama paslanmaz tek kenar jilet. %40-60 sürtünme azaltma. Yapışkan etiket sökme, cam filmi çıkarma, bant kazıma. Non-stick blade.',
      keywords: ['PTFE kaplama jilet', 'teflon kaplama jilet', 'yapışkan sökme jileti', 'non-stick blade', 'B201 901', 'cam filmi jileti', 'paslanmaz PTFE', 'anti-stick scraper blade', 'yapışma önleyici jilet', 'PTFE coated single edge'],
    },

    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 111,
  },

  {
    id: 'single-edge-carbon-030',
    slug: 'tek-kenar-jilet-karbon-celik-030mm-heavy-duty',
    slugEN: 'single-edge-blade-carbon-steel-030mm-heavy-duty',
    code: 'B201 501 A01',
    name: 'Tek Kenar Jilet — Karbon Çelik 0.30mm Heavy Duty',
    subtitle: 'Kalın Profil — Ağır Hizmet — Alüminyum/Metal Kılıf',

    categoryId: 'industrial-blades',
    subcategoryId: 'single-edge',
    tags: ['heavy duty', 'kalın jilet', '0.30mm', '0.012 inch', 'ağır hizmet', 'metal kılıf', 'tek kenar jilet', 'B201'],

    shortDescription: 'Kalın profilli (0.30mm / 0.012") heavy duty tek kenar jilet. Standart 0.23mm jiletlerin yetersiz kaldığı ağır hizmet uygulamalarında — sert boya kazıma, kalın yapışkan sökme, beton ve metal yüzey hazırlama işlerinde üstün dayanıklılık.',

    longDescription: `
      <p>B201 501/504 serisi, standart 0.23mm jiletlere kıyasla <strong>%30 daha kalın profil</strong> ile ağır hizmet (heavy duty) uygulamalarına yöneliktir. 0.30mm (0.012") kalınlık, sert yüzeylerde bükülme riskini minimize eder ve daha agresif kazıma imkânı sunar.</p>

      <h3>0.30mm Kalın Profil Avantajı</h3>
      <ul>
        <li><strong>%30 daha kalın:</strong> Standart jiletle kıyaslandığında belirgin rigidite artışı</li>
        <li><strong>Bükülme direnci:</strong> Sert yüzeylerde jilet eğilmez — kontrollü kazıma</li>
        <li><strong>Daha uzun kenar ömrü:</strong> Kalın profil daha fazla bileme payı sağlar</li>
        <li><strong>Agresif kazıma:</strong> İnatçı boya, yapışkan ve kalıntıların sökülmesinde etkin</li>
      </ul>

      <h3>Kılıf Seçenekleri</h3>
      <ul>
        <li><strong>B201 501 A01:</strong> Alüminyum kılıf — hafif ve ekonomik</li>
        <li><strong>B201 504 A01:</strong> Metal spine kılıf — ekstra rijitlik ve dayanıklılık</li>
      </ul>

      <h3>Kullanım Alanları</h3>
      <ul>
        <li><strong>İnşaat:</strong> Sert boya/vernik kazıma, macun sıyırma, zemin hazırlama</li>
        <li><strong>Metal sanayi:</strong> Metal yüzey temizleme, çapak alma, kaynak artığı kazıma</li>
        <li><strong>Otomotiv:</strong> Conta/sızdırmazlık kazıma, ağır yapışkan sökme</li>
        <li><strong>Bakım-Onarım:</strong> İnatçı kalıntı temizleme, yüzey renovasyonu</li>
      </ul>
    `,

    images: {
      main: {
        src: '/images/products/single-edge-carbon-030.jpg',
        alt: 'Tek Kenar Jilet Karbon Çelik 0.30mm Heavy Duty',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/single-edge-carbon-030.jpg',
        alt: 'Tek Kenar Jilet Heavy Duty 0.30mm',
        width: 400,
        height: 400,
      },
    },

    specs: [
      { label: 'Malzeme', value: 'Yüksek Karbonlu Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Kalınlık', value: '0.30mm (0.012") — Heavy Duty', icon: 'Ruler', highlight: true },
      { label: 'Boyutlar', value: '38×19mm', icon: 'Maximize' },
      { label: 'Bileme Profili', value: '2-Facet', icon: 'Gauge' },
      { label: 'Kılıf', value: 'Alüminyum / Metal Spine', icon: 'Box' },
    ],

    origin: {
      brand: 'AccuTec',
      country: 'USA',
      city: 'Verona, Virginia',
    },

    applications: [
      { title: 'Sert Boya & Vernik Kazıma', icon: 'Paintbrush', description: 'İnatçı boya, vernik, epoksi kazıma' },
      { title: 'Metal Yüzey Hazırlama', icon: 'Wrench', description: 'Kaynak artığı, çapak, pas kazıma' },
      { title: 'Otomotiv Bakım', icon: 'Car', description: 'Conta/sızdırmazlık kazıma, ağır yapışkan sökme' },
      { title: 'İnşaat & Renovasyon', icon: 'HardHat', description: 'Zemin/duvar yüzey hazırlama, macun sıyırma' },
    ],

    benefits: [
      { title: '%30 Daha Kalın Profil', description: '0.30mm kalınlık ile standart jiletin yetersiz kaldığı ağır hizmet uygulamalarında bükülme riski sıfır', icon: 'Shield' },
      { title: 'İki Kılıf Seçeneği', description: 'Alüminyum (hafif) veya metal spine (ekstra rijit) kılıf — uygulama ihtiyacına göre tercih', icon: 'Box' },
      { title: 'Uzun Kenar Ömrü', description: 'Kalın profil daha fazla aşınma payı sağlar — jilet değişim sıklığı azalır', icon: 'Clock' },
    ],

    features: [
      '0.30mm kalın profil — standart jiletlere göre %30 daha dayanıklı',
      'Heavy duty — ağır hizmet uygulamaları için',
      '2-facet bileme — maksimum dayanıklılık',
      'Alüminyum ve metal spine kılıf seçenekleri',
      'Yüksek karbonlu çelik — sert yüzeylerde uzun ömür',
      'Çentikli — kazıyıcı aparatlara standart uyum',
    ],

    certifications: ['CE'],

    availableSizes: ['38×19×0.30mm'],

    relatedProductIds: ['single-edge-carbon-2f', 'single-edge-carbon-3f', 'single-edge-stainless-ptfe'],

    seo: {
      title: 'Tek Kenar Jilet 0.30mm Heavy Duty Karbon Çelik | Alya Bıçak',
      description: 'Heavy duty kalın profil tek kenar jilet. 0.30mm (0.012"), HRC 58-62, 2-facet. Sert boya kazıma, metal yüzey hazırlama, conta sökme. Alüminyum/metal kılıf.',
      keywords: ['heavy duty jilet', 'kalın tek kenar jilet', '0.30mm jilet', '0.012 inch blade', 'heavy duty single edge', 'B201 501', 'metal spine blade', 'sert boya kazıma', 'ağır hizmet jilet', 'boya kazıma jileti'],
    },

    isActive: true,
    isFeatured: false,
    isNew: true,
    inStock: true,
    order: 112,
  },

  // =============================================================================
  // TRAPEZ BIÇAKLAR (Trapezoid Blades)
  // =============================================================================

  // ─── B207 — TRAPEZ KALIN (Heavy Duty, 0.63mm) ─────────────────────────────
  {
    id: 'b207',
    slug: 'b207-trapez-kalin',
    slugEN: 'b207-heavy-duty-trapezoid-blade',
    code: 'B207',
    name: 'TRAPEZ – KALIN',
    subtitle: 'Heavy Duty Trapez Bıçak 0.63mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['trapez bıçak', 'kalın trapez', 'utility blade', 'maket bıçağı ucu', 'heavy duty'],

    shortDescription: 'Profesyonel kullanım için 0.63mm kalınlığında heavy duty trapez bıçak. Karbon çelik, paslanmaz ve TiN kaplamalı seçenekler. 2-3 çentik, delik konfigürasyonları.',

    longDescription: `<p>B207 serisi kalın trapez bıçaklar, endüstriyel kullanım için tasarlanmış 0.63mm (standart) ve 1.00mm (paslanmaz) kalınlıklarda profesyonel kesim bıçaklarıdır.</p>
<p>Yüksek karbon çelikten imal edilen bıçaklar, Sheffield kalitesinde üretilmektedir. 50mm ile 100mm arası farklı uzunluk seçenekleri, 2 veya 3 çentik konfigürasyonu ve çeşitli delik düzenleri ile geniş bir kullanım yelpazesi sunar.</p>
<p><strong>Malzeme seçenekleri:</strong> Karbon çelik (standart), paslanmaz çelik (korozyona dayanıklı), TiN kaplamalı (uzun ömür). İş güvenliği için yuvarlatılmış uç ve tek taraflı bileme alternatifleri mevcuttur.</p>
<p>Maket bıçakları, güvenlik kesiciler, zemin döşeme aletleri ve profesyonel el aletlerinde yedek uç olarak kullanılır. Karton, halı, linoleum, PVC, ambalaj filmi, deri ve tekstil kesiminde üstün performans sağlar.</p>`,

    images: {
      main: { src: '/images/products/b207-trapez-kalin.jpg', alt: 'B207 Trapez Bıçak Kalın 0.63mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/b207-trapez-kalin.jpg', alt: 'B207 Trapez Kalın - Genel Görünüm', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/b207-trapez-kalin.jpg', alt: 'B207 Trapez Kalın', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik (SK5)', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.63mm (standart) / 1.00mm (paslanmaz)', icon: 'Ruler' },
      { label: 'dimensions', value: '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm', icon: 'Maximize' },
      { label: 'form', value: 'Trapez (Utility)', icon: 'Triangle' },
      { label: 'notches', value: '2 veya 3 çentik', icon: 'Minus' },
      { label: 'holes', value: '0-5 delik (konfigürasyona göre)', icon: 'Circle' },
      { label: 'edge', value: 'Çift taraflı / Tek taraflı bileme', icon: 'Zap' },
      { label: 'coating', value: 'Standart / TiN Kaplama', icon: 'Sparkles' },
      { label: 'packaging', value: '5, 10, 100 adet (dispenser / kutu)', icon: 'Package' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Depo & Lojistik', icon: 'Warehouse', description: 'Koli açma, ambalaj kesimi, streç film kesme' },
      { title: 'Zemin Döşeme', icon: 'Layers', description: 'Halı, linoleum, PVC zemin kesimi' },
      { title: 'İnşaat & Tadilat', icon: 'HardHat', description: 'Alçıpan, izolasyon malzemesi, boru yalıtımı kesimi' },
      { title: 'Ambalaj Sektörü', icon: 'Package', description: 'Streç film, shrink, bant ve ambalaj malzemesi kesimi' },
      { title: 'Deri & Tekstil', icon: 'Scissors', description: 'Deri, kumaş, branda ve sentetik malzeme kesimi' },
      { title: 'Otomotiv', icon: 'Car', description: 'Conta, lastik fitil ve döşeme malzemesi kesimi' },
    ],

    benefits: [
      { title: 'Heavy Duty Dayanım', description: '0.63mm kalın profil, ağır hizmet uygulamalarında bükülme ve kırılmaya karşı üstün direnç sağlar.', icon: 'Shield' },
      { title: '10 Farklı Varyant', description: 'Farklı boyut, çentik, delik ve kaplama seçenekleri ile her uygulamaya özel çözüm.', icon: 'Settings' },
      { title: 'Sheffield Kalitesi', description: 'İngiltere Sheffield\'de HRC 58-62 sertliğinde ısıl işlem görmüş yüksek karbon çelik.', icon: 'Award' },
      { title: 'Uzun Ömür', description: 'TiN (Titanyum Nitrür) kaplamalı versiyon ile standart karbona göre 3 kat daha uzun kesim ömrü.', icon: 'Clock' },
    ],

    features: [
      'Yüksek karbon çelik (SK5) gövde',
      '0.63mm standart / 1.00mm paslanmaz kalınlık',
      '50-100mm arası 5 farklı uzunluk',
      'TiN (Titanyum Nitrür) kaplama seçeneği',
      'Paslanmaz çelik alternatifi',
      'İş güvenliği için yuvarlatılmış uç seçeneği',
      'Tek taraflı bileme seçeneği',
      '2 veya 3 çentik konfigürasyonu',
      '0-5 delik düzeni alternatifleri',
      'Standart trapez forma uyumlu',
    ],

    availableSizes: [
      '60×19×0.63mm — 2 Çentik, 4 Delik',
      '60×19×0.63mm — 2 Çentik, 4 Delik, TiN Kaplama',
      '53×19×0.63mm — 3 Çentik, 5 Delik',
      '51×19×0.63mm — 3 Çentik, 5 Delik, TiN Kaplama',
      '60×19×0.63mm — 2 Çentik (deliksiz)',
      '60×19×1.00mm — 2 Çentik, Paslanmaz',
      '58×19×0.63mm — 3 Çentik, 3 Delik',
      '60×19×0.63mm — 2 Çentik, 1 Delik',
      '60×19×0.63mm — 2 Çentik, Tek Taraftan Bileme',
      '53×19×0.63mm — 3 Çentik, 5 Delik, Yuvarlatılmış Uç',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b206', 'b082', 'b207-2', 'b207-3', 'trapez'],

    compatibleParts: [
      { id: 'h006-001-x01', name: 'RETRO LIGHT KNIFE', code: 'H006 001 X01' },
    ],

    seo: {
      title: 'B207 Trapez Bıçak Kalın 0.63mm | Heavy Duty Utility Blade | Alya Bıçak',
      description: 'B207 heavy duty trapez bıçak, 0.63mm kalınlık, Sheffield çelik. 10 varyant: karbon, paslanmaz, TiN kaplamalı. 50-100mm boyut. Depo, zemin döşeme, inşaat, ambalaj kesimi. Türkiye distribütörü.',
      keywords: ['trapez bıçak', 'B207', 'heavy duty trapez', 'kalın trapez jilet', 'utility blade', 'maket bıçağı ucu', '0.63mm trapez', 'TiN kaplama trapez', 'paslanmaz trapez', 'sheffield trapez bıçak', 'trapez bıçak toptan', 'endüstriyel trapez bıçak'],
    },

    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 200,
  },

  // ─── B206 — TRAPEZ İNCE (Thin, 0.43mm) ────────────────────────────────────
  {
    id: 'b206',
    slug: 'b206-trapez-bicak-jilet-ince',
    slugEN: 'b206-thin-trapezoid-blade',
    code: 'B206',
    name: 'TRAPEZ BIÇAK / JİLET – İNCE',
    subtitle: 'İnce Trapez Jilet 0.43mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['trapez jilet', 'ince trapez', 'thin utility blade', 'trapez 0.43mm'],

    shortDescription: 'Hassas kesim için 0.43mm ince trapez bıçak/jilet. Hafif malzeme kesiminde üstün performans. Karbon çelik, tek taraflı bileme ve delikli alternatifleri.',

    longDescription: `<p>B206 serisi ince trapez bıçaklar, 0.43mm kalınlıkta hassas kesim gerektiren uygulamalar için tasarlanmıştır.</p>
<p>Yüksek karbon içerikli çelikten imal edilen bu ince profil bıçaklar, özellikle kağıt, ince film, ambalaj malzemesi, duvar kağıdı ve hafif plastik kesimlerinde tercih edilir.</p>
<p>Farklı delik ve çentik konfigürasyonları ile çeşitli el aletlerine uyumludur. Tek taraflı bileme seçeneği, cam ve hassas yüzey kazıma işlemleri için idealdir.</p>
<p><strong>Trapez bıçaklar</strong> tek başına makinelerde kesim için kullanılabileceği gibi, el bıçaklarında yedek uç olarak da kullanılmaktadır.</p>`,

    images: {
      main: { src: '/images/products/b206-trapez-bicak-jilet-ince.jpg', alt: 'B206 Trapez Bıçak İnce 0.43mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/b206-trapez-bicak-jilet-ince.jpg', alt: 'B206 İnce Trapez - Genel Görünüm', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/b206-trapez-bicak-jilet-ince.jpg', alt: 'B206 İnce Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.43mm', icon: 'Ruler' },
      { label: 'dimensions', value: '50×19 / 59×19 mm', icon: 'Maximize' },
      { label: 'form', value: 'Trapez (Utility)', icon: 'Triangle' },
      { label: 'notches', value: '2 çentik', icon: 'Minus' },
      { label: 'holes', value: 'Deliksiz / 2×6.4mm delik', icon: 'Circle' },
      { label: 'edge', value: 'Çift taraflı / Tek taraflı bileme', icon: 'Zap' },
      { label: 'packaging', value: '5, 10, 100 adet', icon: 'Package' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Kağıt & Ambalaj', icon: 'FileText', description: 'Kağıt, karton, ince ambalaj filmi kesimi' },
      { title: 'Duvar Kağıdı', icon: 'Layers', description: 'Duvar kağıdı ve dekoratif film hassas kesimi' },
      { title: 'Ofis & Depo', icon: 'Building', description: 'Koli açma, bant kesme, hafif ambalaj işlemleri' },
      { title: 'Cam & Yüzey Kazıma', icon: 'Sparkles', description: 'Tek taraflı bileme ile etiket ve yapışkan sökme' },
    ],

    benefits: [
      { title: 'Hassas Kesim', description: '0.43mm ince profil, malzemeye minimum baskı ile temiz kesim sağlar.', icon: 'Target' },
      { title: 'Hafif & Esnek', description: 'İnce yapı sayesinde bükülgen malzemelerde yırtma yapmadan keser.', icon: 'Feather' },
      { title: 'Ekonomik Kullanım', description: 'Hafif kesim uygulamalarında heavy duty bıçaklara göre daha uzun ömür.', icon: 'TrendingDown' },
    ],

    features: [
      'Yüksek karbon çelik',
      '0.43mm ince profil',
      '50mm ve 59mm uzunluk seçenekleri',
      '2 çentik standart konfigürasyon',
      'Tek taraflı bileme seçeneği',
      '2×6.4mm delikli varyant',
      'Standart trapez forma uyumlu',
    ],

    availableSizes: [
      '50×19×0.43mm — Karbon, 2 Çentik',
      '50×19×0.43mm — 2 Çentik, Tek Taraftan Bileme',
      '59×19×0.43mm — 2×6.4mm Delik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b207', 'b082', 'trapez'],

    compatibleParts: [
      { id: 'h006-001-x01', name: 'RETRO LIGHT KNIFE', code: 'H006 001 X01' },
    ],

    seo: {
      title: 'B206 İnce Trapez Bıçak 0.43mm | Thin Utility Blade | Alya Bıçak',
      description: 'B206 ince trapez bıçak/jilet. 0.43mm, Sheffield karbon çelik, HRC 58-62. Kağıt, ambalaj, duvar kağıdı, cam kazıma. Tek taraflı bileme. Türkiye distribütörü.',
      keywords: ['ince trapez bıçak', 'B206', 'thin trapezoid blade', '0.43mm trapez', 'trapez jilet ince', 'utility blade thin', 'maket bıçağı jilet', 'kağıt kesim bıçağı', 'trapez jilet toptan'],
    },

    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 201,
  },

  // ─── B082 — TRAPEZ TIRTIKLI KENAR (Serrated) ──────────────────────────────
  {
    id: 'b082',
    slug: 'b082-trapez-tirtikli-kenar',
    slugEN: 'b082-serrated-trapezoid-blade',
    code: 'B082',
    name: 'TRAPEZ – TIRTIKLI KENAR',
    subtitle: 'Tırtıklı Kenarlı Trapez Bıçak',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['tırtıklı trapez', 'serrated utility blade', 'tırtıklı kenar', 'hook blade'],

    shortDescription: 'Tırtıklı kenar tasarımlı trapez bıçak. 82×25×1.0mm büyük boy, lif ve halat kesimi için üstün kavrama. Tek taraftan tırtıklı kenar.',

    longDescription: `<p>B082 tırtıklı kenarlı trapez bıçak, özellikle lifli, elyaflı ve kaygan malzemelerin kesilmesi için tasarlanmış özel bir üründür.</p>
<p>82×25mm geniş gövde ve 1.0mm kalınlık ile son derece dayanıklı bir yapıya sahiptir. Tek taraftan tırtıklı kenar tasarımı, malzemenin bıçak üzerinde kaymasını önler ve ilk temastan itibaren temiz kesim sağlar.</p>
<p>Halat, ip, sicim, sentetik elyaf, cam elyaf, karbon elyaf, Kevlar ve benzeri güç gerektiren malzemelerde tercih edilir.</p>`,

    images: {
      main: { src: '/images/products/b082-trapez-tirtikli-kenar.jpg', alt: 'B082 Trapez Tırtıklı Kenar Bıçak', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/b082-trapez-tirtikli-kenar.jpg', alt: 'B082 Tırtıklı Trapez - Genel Görünüm', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/b082-trapez-tirtikli-kenar.jpg', alt: 'B082 Tırtıklı Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '1.0mm', icon: 'Ruler' },
      { label: 'dimensions', value: '82×25 mm', icon: 'Maximize' },
      { label: 'form', value: 'Trapez (Geniş Gövde)', icon: 'Triangle' },
      { label: 'holes', value: '2 delik', icon: 'Circle' },
      { label: 'edgeType', value: 'Tek taraftan tırtıklı kenar', icon: 'Zap', highlight: true },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Halat & İp Kesimi', icon: 'Link', description: 'Naylon halat, sicim, çelik halat kılıfı kesimi' },
      { title: 'Elyaf Kompozit', icon: 'Layers', description: 'Cam elyaf, karbon elyaf, Kevlar kesimi' },
      { title: 'Tekstil & Sentetik', icon: 'Scissors', description: 'Kalın kumaş, branda, sentetik malzeme' },
      { title: 'Tarım & Bahçe', icon: 'Leaf', description: 'Bağcılık ipleri, sera örtüsü, tarım filmi kesimi' },
    ],

    benefits: [
      { title: 'Kayma Önleyici', description: 'Tırtıklı kenar, kaygan malzemelerde bile ilk temastan itibaren kavrama sağlar.', icon: 'Grip' },
      { title: 'Ekstra Kalın', description: '1.0mm kalınlık, ağır hizmet lifli malzemelerde bükülme direnci sağlar.', icon: 'Shield' },
      { title: 'Geniş Gövde', description: '82×25mm boyut, güçlü kavrama ve kontrollü kesim alanı sunar.', icon: 'Maximize' },
    ],

    features: [
      'Tek taraftan tırtıklı kenar',
      '82×25×1.0mm geniş ve kalın gövde',
      '2 montaj deliği',
      'Lifli malzemelerde üstün performans',
      'Sheffield kalitesinde karbon çelik',
    ],

    availableSizes: [
      '82×25×1.0mm — 2 Delik, Tek Taraftan Tırtıklı Kenar',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b207', 'b206', 'trapez'],

    seo: {
      title: 'B082 Tırtıklı Kenar Trapez Bıçak | Serrated Utility Blade | Alya Bıçak',
      description: 'B082 tırtıklı kenarlı trapez bıçak. 82×25×1.0mm, Sheffield çelik. Halat, elyaf, Kevlar kesimi. Tek taraftan tırtıklı kenar. Türkiye distribütörü.',
      keywords: ['tırtıklı trapez bıçak', 'B082', 'serrated trapezoid', 'tırtıklı kenar', 'halat kesim bıçağı', 'elyaf kesim bıçağı', 'serrated utility blade', 'hook blade'],
    },

    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 202,
  },

  // ─── B213 — TRAPEZ KOMPAKTMini (61×12.5mm) ────────────────────────────────
  {
    id: 'b213',
    slug: 'b213-trapez-kompakt',
    slugEN: 'b213-compact-trapezoid-blade',
    code: 'B213',
    name: 'TRAPEZ – KOMPAKT',
    subtitle: 'Kompakt Trapez Bıçak 61×12.5mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['kompakt trapez', 'mini trapez', 'compact utility blade', '61mm trapez'],

    shortDescription: 'Kompakt boyutlu özel trapez bıçak. 61×12.5×0.63mm, 1 delik. Dar alanlar ve hassas uygulamalar için küçük form faktörlü trapez.',

    longDescription: `<p>B213 kompakt trapez bıçak, standart trapez formunun küçültülmüş bir versiyonudur. 61×12.5mm boyutları ile dar alanlarda kullanıma uygundur.</p>
<p>0.63mm standart kalınlık ve 1 delikli montaj tasarımı ile özel el aletleri ve kompakt kesicilerde yedek uç olarak kullanılır. Elektronik bileşen kesimi, ince kablo soyma ve detay işlerinde tercih edilen özel bir trapez formudur.</p>`,

    images: {
      main: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B213 Kompakt Trapez Bıçak 61×12.5mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B213 Kompakt Trapez', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B213 Kompakt Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.63mm', icon: 'Ruler' },
      { label: 'dimensions', value: '61×12.5 mm', icon: 'Maximize' },
      { label: 'form', value: 'Kompakt Trapez', icon: 'Triangle' },
      { label: 'holes', value: '1 delik', icon: 'Circle' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Dar Alan Kesimi', icon: 'Minimize', description: 'Dar ve ulaşılması zor alanlarda hassas kesim' },
      { title: 'Elektronik', icon: 'Cpu', description: 'Kablo, bant ve ince bileşen kesimi' },
      { title: 'Detay İşçiliği', icon: 'Target', description: 'Model yapımı, maket ve hassas el işleri' },
    ],

    benefits: [
      { title: 'Kompakt Form', description: '61×12.5mm küçük boyut, dar alanlarda rahat manevra.', icon: 'Minimize' },
      { title: 'Hassas Kesim', description: 'Küçük trapez form ile kontrollü, detaylı kesim.', icon: 'Target' },
    ],

    features: [
      '61×12.5×0.63mm kompakt boyut',
      '1 delikli montaj tasarımı',
      'Özel aletlere uyumlu',
      'Sheffield kalitesinde karbon çelik',
    ],

    availableSizes: [
      '61×12.5×0.63mm — 1 Delik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b214', 'b218', 'b207', 'trapez'],

    seo: {
      title: 'B213 Kompakt Trapez Bıçak 61×12.5mm | Compact Utility Blade | Alya Bıçak',
      description: 'B213 kompakt trapez bıçak, 61×12.5×0.63mm. Dar alanlar, elektronik, detay kesim. Sheffield çelik. Türkiye distribütörü.',
      keywords: ['kompakt trapez', 'B213', 'compact trapezoid', 'mini utility blade', '61mm trapez', 'küçük trapez bıçak'],
    },

    isActive: true,
    isFeatured: false,
    isNew: true,
    inStock: true,
    order: 203,
  },

  // ─── B218 — TRAPEZ ORTA ÖZEL (71×17mm) ────────────────────────────────────
  {
    id: 'b218',
    slug: 'b218-trapez-orta-ozel',
    slugEN: 'b218-medium-special-trapezoid-blade',
    code: 'B218',
    name: 'TRAPEZ – ORTA ÖZEL',
    subtitle: 'Özel Boyut Trapez Bıçak 71×17mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['özel trapez', 'orta boy trapez', 'medium utility blade', '71mm trapez'],

    shortDescription: 'Özel boyutlu orta trapez bıçak. 71×17×0.63mm, 1×6mm delik. Standart dışı aletler ve özel uygulamalar için ara boy trapez.',

    longDescription: `<p>B218 orta özel trapez bıçak, standart 19mm genişlik yerine 17mm genişliğe sahip bir ara boy üründür. 71mm uzunluk ile standart trapezlerden daha uzun bir kesim hattı sunar.</p>
<p>1×6mm delikli tasarımı, özel tutucular ve endüstriyel makinelerde kullanıma uygundur. Belirli marka el bıçakları ve otomasyon sistemlerindeki kesici ünitelere yedek uç olarak tercih edilir.</p>`,

    images: {
      main: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B218 Orta Özel Trapez Bıçak 71×17mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B218 Orta Özel Trapez', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B218 Orta Özel Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.63mm', icon: 'Ruler' },
      { label: 'dimensions', value: '71×17 mm', icon: 'Maximize' },
      { label: 'form', value: 'Trapez (Özel Boyut)', icon: 'Triangle' },
      { label: 'holes', value: '1×6mm delik', icon: 'Circle' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Endüstriyel Makineler', icon: 'Settings', description: 'Özel kesici ünitelere yedek bıçak' },
      { title: 'Otomasyon Sistemleri', icon: 'Cpu', description: 'Otomatik kesim hatlarında yedek uç' },
      { title: 'Özel El Aletleri', icon: 'Wrench', description: 'Non-standart boyut gerektiren aletlere yedek' },
    ],

    benefits: [
      { title: 'Uzun Kesim Hattı', description: '71mm uzunluk, standart 60mm trapeze göre %18 daha geniş kesim alanı.', icon: 'ArrowRight' },
      { title: 'Özel Uyumluluk', description: '17mm genişlik, belirli marka aletlere mükemmel uyum.', icon: 'Check' },
    ],

    features: [
      '71×17×0.63mm özel boyut',
      '1×6mm delikli montaj',
      'Uzun kesim hattı',
      '17mm dar genişlik',
      'Sheffield kalitesinde karbon çelik',
    ],

    availableSizes: [
      '71×17×0.63mm — 1×6mm Delik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b213', 'b214', 'b207', 'trapez'],

    seo: {
      title: 'B218 Özel Trapez Bıçak 71×17mm | Medium Special Blade | Alya Bıçak',
      description: 'B218 özel boyut trapez bıçak, 71×17×0.63mm, 1×6mm delik. Endüstriyel makine, otomasyon sistemi yedek ucu. Sheffield çelik. Türkiye distribütörü.',
      keywords: ['özel trapez bıçak', 'B218', '71mm trapez', 'medium trapezoid blade', 'özel boyut utility blade', 'makine trapez bıçağı'],
    },

    isActive: true,
    isFeatured: false,
    isNew: true,
    inStock: true,
    order: 204,
  },

  // ─── B214 — MİKRO TRAPEZ (27.6×9mm) ───────────────────────────────────────
  {
    id: 'b214',
    slug: 'b214-mikro-trapez',
    slugEN: 'b214-micro-trapezoid-blade',
    code: 'B214',
    name: 'TRAPEZ – MİKRO',
    subtitle: 'Mikro Trapez Bıçak 27.6×9mm',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['mikro trapez', 'mini trapez', 'micro utility blade', 'precision blade'],

    shortDescription: 'Ultra kompakt mikro trapez bıçak. 27.6×9×0.43mm, 3×3.5mm delik. Hassas ve minyatür uygulamalar için en küçük trapez form.',

    longDescription: `<p>B214 mikro trapez bıçak, trapez ailesi içindeki en küçük boyutlu üründür. 27.6×9mm boyutu ile minyatür el aletleri, hassas kesim cihazları ve özel endüstriyel uygulamalar için tasarlanmıştır.</p>
<p>0.43mm kalınlık ve 3×3.5mm üçlü delik konfigürasyonu ile özel tutucu sistemlerine monte edilir. Elektronik montaj, tıbbi cihaz imalatı, model yapımı ve mikro kesim gerektiren laboratuvar işlemlerinde kullanılır.</p>`,

    images: {
      main: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B214 Mikro Trapez Bıçak 27.6×9mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B214 Mikro Trapez', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'B214 Mikro Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.43mm', icon: 'Ruler' },
      { label: 'dimensions', value: '27.6×9 mm', icon: 'Maximize' },
      { label: 'form', value: 'Mikro Trapez', icon: 'Triangle' },
      { label: 'holes', value: '3×3.5mm delik', icon: 'Circle' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Elektronik Montaj', icon: 'Cpu', description: 'Elektronik bileşen, kablo ve PCB kesimi' },
      { title: 'Model & Maket', icon: 'Box', description: 'Model yapımı, maket ve hobi kesim işleri' },
      { title: 'Laboratuvar', icon: 'FlaskConical', description: 'Numune hazırlama ve hassas malzeme kesimi' },
      { title: 'Tıbbi Cihaz', icon: 'Heart', description: 'Tıbbi malzeme ve bileşen imalatı' },
    ],

    benefits: [
      { title: 'Ultra Kompakt', description: '27.6×9mm: en küçük trapez bıçak, minyatür aletlere mükemmel uyum.', icon: 'Minimize' },
      { title: 'Hassas Kontrol', description: 'Küçük boyut ve ince profil ile mikron düzeyinde kesim kontrolü.', icon: 'Target' },
    ],

    features: [
      '27.6×9×0.43mm ultra kompakt boyut',
      '3×3.5mm üçlü delik konfigürasyonu',
      '0.43mm ince profil',
      'Minyatür tutuculara uyumlu',
      'Sheffield kalitesinde karbon çelik',
    ],

    availableSizes: [
      '27.6×9×0.43mm — 3×3.5mm Delik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b213', 'b218', 'b206', 'trapez'],

    seo: {
      title: 'B214 Mikro Trapez Bıçak 27.6×9mm | Micro Utility Blade | Alya Bıçak',
      description: 'B214 mikro trapez bıçak, 27.6×9×0.43mm, 3×3.5mm delik. Elektronik, model, laboratuvar, tıbbi cihaz kesimi. Sheffield çelik. Türkiye distribütörü.',
      keywords: ['mikro trapez', 'B214', 'micro trapezoid blade', 'mini utility blade', '27mm trapez', 'hassas trapez bıçak', 'minyatür kesim bıçağı'],
    },

    isActive: true,
    isFeatured: false,
    isNew: true,
    inStock: true,
    order: 205,
  },

  // ─── B207-L — TRAPEZ UZUN (Long) ──────────────────────────────────────────
  {
    id: 'b207-2',
    slug: 'b207-l-2',
    slugEN: 'b207-l-long-trapezoid-blade',
    code: 'B207 L',
    name: 'TRAPEZ – L (UZUN)',
    subtitle: 'Uzun Trapez Bıçak',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['uzun trapez', 'long utility blade', 'L trapez', 'geniş kesim'],

    shortDescription: 'B207 serisinin uzun versiyonu. Standart trapezden daha geniş kesim alanı. Büyük boy malzeme ve geniş yüzey kesimlerinde tercih edilir.',

    longDescription: `<p>B207 L (Long) trapez bıçak, standart B207 serisinin uzatılmış versiyonudur. Daha geniş bir kesim hattı sunarak tek seferde daha fazla malzeme kesilmesini sağlar.</p>
<p>Özellikle büyük boy karton kutu açma, geniş ambalaj filmlerinin kesilmesi, büyük yüzey halılarının döşenmesi ve endüstriyel paketleme işlemlerinde standart boyuta göre daha verimli çalışma sağlar.</p>`,

    images: {
      main: { src: '/images/products/b207-l.jpg', alt: 'B207 L Uzun Trapez Bıçak', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/b207-l.jpg', alt: 'B207 L Uzun Trapez', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/b207-l.jpg', alt: 'B207 L Uzun', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.63mm', icon: 'Ruler' },
      { label: 'form', value: 'Trapez Uzun (L)', icon: 'Triangle' },
      { label: 'bladeProfile', value: 'Standart B207 serisi genişletilmiş', icon: 'ArrowRight' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Büyük Boy Kesim', icon: 'Maximize', description: 'Büyük karton, geniş ambalaj filmi' },
      { title: 'Zemin Döşeme', icon: 'Layers', description: 'Geniş halı ve linoleum ruloları' },
      { title: 'İnşaat', icon: 'HardHat', description: 'Büyük izolasyon panelleri, alçıpan' },
    ],

    benefits: [
      { title: 'Geniş Kesim Alanı', description: 'Standart B207\'ye göre daha uzun bıçak uzunluğu ile tek seferde daha fazla malzeme keser.', icon: 'Maximize' },
      { title: 'Aynı Kalite', description: 'B207 serisinin tüm kalite standartları: Sheffield çelik, HRC 58-62.', icon: 'Award' },
    ],

    features: [
      'B207 serisinin uzun versiyonu',
      '0.63mm kalın profil',
      'Geniş kesim hattı',
      'Sheffield kalitesinde karbon çelik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b207', 'b207-3', 'b206'],

    seo: {
      title: 'B207 L Uzun Trapez Bıçak | Long Utility Blade | Alya Bıçak',
      description: 'B207 L uzun trapez bıçak. Standart B207\'nin uzatılmış versiyonu, geniş kesim hattı. Sheffield çelik, HRC 58-62. Türkiye distribütörü.',
      keywords: ['uzun trapez bıçak', 'B207 L', 'long trapezoid blade', 'büyük utility blade', 'geniş kesim trapez'],
    },

    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 206,
  },

  // ─── B207-XXL — TRAPEZ XXL (Extra Long) ───────────────────────────────────
  {
    id: 'b207-3',
    slug: 'b207-xxl-uzun-3',
    slugEN: 'b207-xxl-extra-long-trapezoid-blade',
    code: 'B207 XXL',
    name: 'TRAPEZ – XXL (UZUN)',
    subtitle: 'Ekstra Uzun Trapez Bıçak',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['xxl trapez', 'extra long utility blade', 'XXL trapez', 'ekstra uzun'],

    shortDescription: 'B207 serisinin ekstra uzun (XXL) versiyonu. En geniş kesim alanı sunan trapez bıçak. Endüstriyel ölçekli kesim uygulamaları için.',

    longDescription: `<p>B207 XXL ekstra uzun trapez bıçak, trapez ailesinin en büyük boyutlu standart ürünüdür. Endüstriyel ölçekli kesim uygulamalarında maksimum verimlilik sağlamak için tasarlanmıştır.</p>
<p>100×19mm boyutlu trapezlerle birlikte en uzun kesim hattına sahip ürünler arasındadır. Büyük atölyelerde, fabrikalarda ve endüstriyel tesislerde sürekli yoğun kullanım için uygundur.</p>`,

    images: {
      main: { src: '/images/products/b207-xxl-uzun.jpg', alt: 'B207 XXL Ekstra Uzun Trapez Bıçak', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/b207-xxl-uzun.jpg', alt: 'B207 XXL Ekstra Uzun Trapez', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/b207-xxl-uzun.jpg', alt: 'B207 XXL', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Yüksek Karbon Çelik', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.63mm', icon: 'Ruler' },
      { label: 'form', value: 'Trapez XXL (Ekstra Uzun)', icon: 'Triangle' },
      { label: 'bladeProfile', value: 'B207 serisi ekstra genişletilmiş', icon: 'ArrowRight' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Endüstriyel Kesim', icon: 'Factory', description: 'Fabrika ve atölye ölçeğinde ağır malzeme kesimi' },
      { title: 'Büyük Ambalaj', icon: 'Package', description: 'Büyük boy palet shrink, endüstriyel ambalaj' },
      { title: 'İnşaat Projesi', icon: 'HardHat', description: 'Büyük yalıtım panelleri, membran kesimi' },
    ],

    benefits: [
      { title: 'Maksimum Kesim', description: 'Trapez ailesindeki en geniş kesim hattı: tek seferde maksimum verimlilik.', icon: 'Maximize' },
      { title: 'Endüstriyel Dayanım', description: '0.63mm kalınlık + uzun gövde: ağır hizmet uygulamalarında güvenilir.', icon: 'Shield' },
    ],

    features: [
      'B207 serisinin ekstra uzun (XXL) versiyonu',
      '0.63mm kalın profil',
      'En geniş kesim hattı',
      'Endüstriyel seviye dayanıklılık',
      'Sheffield kalitesinde karbon çelik',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b207', 'b207-2', 'b206'],

    seo: {
      title: 'B207 XXL Ekstra Uzun Trapez Bıçak | Extra Long Utility Blade | Alya Bıçak',
      description: 'B207 XXL ekstra uzun trapez bıçak. En geniş kesim hattı, endüstriyel ağır hizmet. Sheffield çelik, HRC 58-62. Türkiye distribütörü.',
      keywords: ['xxl trapez bıçak', 'B207 XXL', 'extra long trapezoid', 'ekstra uzun utility blade', 'endüstriyel trapez'],
    },

    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 207,
  },

  // ─── TRAPEZ ÖZEL TASARIM (100×19mm, genel custom) ──────────────────────────
  {
    id: 'trapez',
    slug: 'trapez-ozel-tasarim',
    slugEN: 'custom-design-trapezoid-blade',
    code: 'TRAPEZ',
    name: 'TRAPEZ – ÖZEL TASARIM',
    subtitle: 'Özel Tasarım & Büyük Boy Trapez Bıçak',

    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    tags: ['özel tasarım trapez', 'custom trapez', 'büyük boy trapez', '100mm trapez'],

    shortDescription: 'Standart dışı boyut ve konfigürasyonlarda özel tasarım trapez bıçaklar. 100×19mm büyük boy dahil. Müşteriye özel çentik, delik ve malzeme seçenekleri.',

    longDescription: `<p>Alya Blade olarak standart trapez formlarının ötesinde, müşteriye özel trapez bıçak çözümleri sunmaktayız. Özel boyut, çentik sayısı, delik düzeni, malzeme ve kaplama kombinasyonlarını talebe göre üretebiliyoruz.</p>
<p>100×19mm büyük boy trapez bıçak, standart ürün gamımızdaki en uzun trapez formudur. 3 çentik ve 1 delik konfigürasyonu ile endüstriyel makine ve otomasyon sistemlerinde kullanılır.</p>
<p><strong>Özel sipariş sürecimiz:</strong> İhtiyacınıza uygun boyut, malzeme, kalınlık, çentik/delik konfigürasyonu ve kaplama seçenekleri ile müşteriye özel trapez bıçak üretimi yapılmaktadır. Minimum sipariş adedi için bizimle iletişime geçin.</p>`,

    images: {
      main: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'Özel Tasarım Trapez Bıçak 100×19mm', width: 800, height: 800 },
      gallery: [
        { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'Trapez Özel Tasarım', width: 800, height: 800 },
      ],
      thumbnail: { src: '/images/products/trapez-ozel-tasarim.jpg', alt: 'Özel Trapez', width: 400, height: 400 },
    },

    specs: [
      { label: 'material', value: 'Karbon / Paslanmaz / TiN Kaplama', icon: 'Layers', highlight: true },
      { label: 'hardness', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'thickness', value: '0.43 / 0.63 / 1.00 mm', icon: 'Ruler' },
      { label: 'dimensions', value: '100×19 mm (büyük boy) + özel boyutlar', icon: 'Maximize' },
      { label: 'form', value: 'Özel Tasarım Trapez', icon: 'Triangle' },
      { label: 'notches', value: 'Müşteriye özel (1-5 çentik)', icon: 'Minus' },
      { label: 'holes', value: 'Müşteriye özel delik konfigürasyonu', icon: 'Circle' },
    ],

    origin: { brand: 'Durham Duplex', country: 'England', city: 'Sheffield' },

    applications: [
      { title: 'Özel Makineler', icon: 'Settings', description: 'Standart dışı kesici ünitelere özel bıçak' },
      { title: 'Otomasyon Hatları', icon: 'Cpu', description: 'Otomatik kesim sistemlerine özel üretim' },
      { title: 'Endüstriyel Proje', icon: 'Factory', description: 'Proje bazlı büyük boy kesim çözümleri' },
      { title: 'OEM Üretim', icon: 'Box', description: 'Alet üreticilerine yedek parça tedariki' },
    ],

    benefits: [
      { title: 'Tam Özelleştirme', description: 'Boyut, malzeme, kaplama, çentik ve delik: tamamen ihtiyaca özel.', icon: 'Settings' },
      { title: '100mm Boy', description: 'Standart gamımızdaki en uzun trapez: 100×19mm büyük boy seçeneği.', icon: 'Maximize' },
      { title: 'Sheffield Üretim', description: 'Tüm özel siparişler aynı Sheffield kalite standartlarında.', icon: 'Award' },
    ],

    features: [
      '100×19×0.63mm büyük boy standart ürün',
      'Müşteriye özel boyut üretimi',
      'Karbon, paslanmaz, TiN kaplama seçenekleri',
      'Özel çentik ve delik konfigürasyonları',
      'OEM ve proje bazlı üretim',
      'Sheffield kalite standartları',
    ],

    availableSizes: [
      '100×19×0.63mm — 3 Çentik, 1 Delik (standart büyük boy)',
      'Özel boyutlar — Talebe göre üretim',
    ],

    certifications: ['CE'],

    relatedProductIds: ['b207', 'b206', 'b082', 'b213', 'b218', 'b214'],

    seo: {
      title: 'Özel Tasarım Trapez Bıçak 100×19mm | Custom Utility Blade | Alya Bıçak',
      description: 'Özel tasarım trapez bıçaklar. 100×19mm büyük boy + müşteriye özel boyut, malzeme, kaplama. Sheffield çelik, HRC 58-62. OEM tedarik. Türkiye distribütörü.',
      keywords: ['özel trapez bıçak', 'custom trapezoid blade', '100mm trapez', 'büyük boy utility blade', 'OEM trapez bıçak', 'özel üretim trapez', 'trapez bıçak üretici'],
    },

    isActive: true,
    isFeatured: false,
    isNew: false,
    inStock: true,
    order: 208,
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
    // slugEN: Extended'da tanımlanmışsa onu kullan, yoksa base'den al
    slugEN: extendedProduct.slugEN || baseProduct.slugEN || undefined,
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
      availableSizes: translation.availableSizes || product.availableSizes,
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

