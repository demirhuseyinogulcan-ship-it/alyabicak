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
import { getProductBySlug as getBaseProductBySlug, getAllProducts } from './products';
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
  },
};

/** Spec label çevirisi getir */
function getSpecLabel(key: string, locale: string): string {
  const labels = specLabelTranslations[locale] || specLabelTranslations['tr'];
  return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// =============================================================================
// ÖRNEK ÜRÜNLER (Placeholder görsellerle)
// =============================================================================

export const PRODUCTS_EXTENDED: ProductExtended[] = [
  // --- İŞ GÜVENLİĞİ EL BIÇAKLARI ---
  {
    id: 'h006-001-x01',
    slug: 'h006-001-x01-retro-light-knife',
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
    slug: 'h008-001-a03-auto-retract',
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
    slug: 'slotted-dilme-jileti-endurium-hss-seramik-kaplama',
    code: 'SLT-END-CER',
    name: 'Slotted Dilme Jileti - Endurium HSS + Seramik Kaplama',
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
      { label: 'Boyutlar', value: '57x19mm', icon: 'Ruler', highlight: true },
      { label: 'Mevcut Kalınlıklar', value: '0.25 / 0.36 / 0.38 / 0.43 / 0.63mm', icon: 'Ruler' },
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
];

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

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
 */
function translateProductExtended(product: ProductExtended, locale: string): ProductExtended {
  if (locale === 'tr') return product; // Türkçe master data, çevirmeye gerek yok

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
    return {
      ...product,
      name: translation.name,
      shortDescription: translation.description || product.shortDescription,
      features: translation.features || product.features,
      applications: translation.applications
        ? translation.applications.map(app => ({ title: app, description: '' }))
        : product.applications,
      specs: translatedSpecs || product.specs,
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
  
  // Çeviri yoksa sadece specs'i çevir
  return {
    ...product,
    specs: translatedSpecs || product.specs,
  };
}

/** Tüm aktif ürünleri getir */
export function getAllProductsExtended(locale: string = DEFAULT_LOCALE): ProductExtended[] {
  return PRODUCTS_EXTENDED.filter(p => p.isActive).map(p => translateProductExtended(p, locale));
}

/** 
 * Slug'a göre ürün getir 
 * Önce PRODUCTS_EXTENDED'da arar, bulamazsa base products'tan dönüştürür
 */
export function getProductBySlug(slug: string, locale: string = DEFAULT_LOCALE): ProductExtended | undefined {
  // Önce extended ürünlerde ara
  const extendedProduct = PRODUCTS_EXTENDED.find(p => p.slug === slug && p.isActive);
  if (extendedProduct) {
    return translateProductExtended(extendedProduct, locale);
  }

  // Extended'da yoksa base product'tan dönüştür
  const baseProduct = getBaseProductBySlug(slug);
  if (baseProduct && baseProduct.isActive) {
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
    return translateProductExtended(extendedProduct, locale);
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
 */
export function getAllProductSlugs(): string[] {
  const allBaseProducts = getAllProducts();
  return allBaseProducts.filter(p => p.isActive).map(p => p.slug);
}

