/**
 * Alya Bıçak - Category Data
 * Single Source of Truth for Categories
 *
 * All slugs are in English for international SEO compatibility.
 * Display names are localized via i18n dictionaries.
 */

import { Category, SubCategory } from '../types';

// =============================================================================
// SUBCATEGORIES
// =============================================================================

export const SUBCATEGORIES: Record<string, SubCategory> = {
  // --- INDUSTRIAL BLADES SUBCATEGORIES ---
  '3-hole-slitting': {
    id: '3-hole-slitting',
    slug: '3-hole-slitting-blades',
    name: '3 Delikli Dilme Jiletleri',
    description: 'Endüstri standardı 3 delikli jiletler',
    image: '/images/3-delikli-jilet-3-hole-industrial-blade.jpg',
    parentId: 'industrial-blades',
    order: 1,
    isActive: true,
  },
  'slotted-slitting': {
    id: 'slotted-slitting',
    slug: 'slotted-slitting-blades',
    name: 'Slotted Dilme Jiletleri',
    description: 'Yüksek performanslı slotted jiletler',
    parentId: 'industrial-blades',
    order: 2,
    isActive: true,
  },
  'injector-slitting': {
    id: 'injector-slitting',
    slug: 'injector-slitting-blades',
    name: 'İnjektör Dilme Jiletleri',
    description: 'Hassas kesim için injektör jiletler',
    parentId: 'industrial-blades',
    order: 3,
    isActive: true,
  },
  'single-edge': {
    id: 'single-edge',
    slug: 'single-edge-blades',
    name: 'Tek Kenarlı Jiletler',
    description: 'Güvenli kullanım için tek kenarlı jiletler',
    parentId: 'industrial-blades',
    order: 4,
    isActive: true,
  },
  'trapezoid-blades': {
    id: 'trapezoid-blades',
    slug: 'trapezoid-blades',
    name: 'Trapez Bıçaklar',
    description: 'Çok amaçlı trapez kesim bıçakları',
    parentId: 'industrial-blades',
    order: 5,
    isActive: true,
  },
  'hook-blades': {
    id: 'hook-blades',
    slug: 'hook-blades',
    name: 'Kanca Bıçaklar',
    description: 'Özel uygulamalar için kanca bıçaklar',
    parentId: 'industrial-blades',
    order: 6,
    isActive: true,
  },
  'craft-blades': {
    id: 'craft-blades',
    slug: 'craft-blades',
    name: 'Maket Bıçak Ucu | Falçata',
    description: 'Hassas kesim için maket uçları',
    parentId: 'industrial-blades',
    order: 7,
    isActive: true,
  },
  'hobby-blades': {
    id: 'hobby-blades',
    slug: 'hobby-blades',
    name: 'Hobi Jiletleri',
    description: 'Hobi ve el işleri için jiletler',
    parentId: 'industrial-blades',
    order: 8,
    isActive: true,
  },
  'scalpel-blades': {
    id: 'scalpel-blades',
    slug: 'scalpel-blades',
    name: 'Bisturi – Neşter',
    description: 'Tıbbi ve endüstriyel hassas kesim için bisturi ve neşter jiletleri',
    parentId: 'industrial-blades',
    order: 9,
    isActive: true,
  },
  'chopped-fiber': {
    id: 'chopped-fiber',
    slug: 'chopped-fiber-blades',
    name: 'Kesik Elyaf Bıçakları',
    description: 'Elyaf kesimi için özel tasarlanmış bıçaklar',
    parentId: 'industrial-blades',
    order: 10,
    isActive: true,
  },
  'fiberglass': {
    id: 'fiberglass',
    slug: 'fiberglass-blades',
    name: 'Cam Elyaf Bıçakları',
    description: 'Cam elyaf kesimi için yüksek performanslı bıçaklar',
    parentId: 'industrial-blades',
    order: 11,
    isActive: true,
  },
  'circular-blades': {
    id: 'circular-blades',
    slug: 'circular-blades',
    name: 'Dairesel Jiletler',
    description: 'Döner kesim için dairesel jiletler',
    parentId: 'industrial-blades',
    order: 12,
    isActive: true,
  },
  'pentagon-blades': {
    id: 'pentagon-blades',
    slug: 'pentagon-blades',
    name: 'Beşgen Bıçaklar',
    description: 'Özel geometrili beşgen kesim bıçakları',
    parentId: 'industrial-blades',
    order: 13,
    isActive: true,
  },
  'lamella-blades': {
    id: 'lamella-blades',
    slug: 'lamella-blades',
    name: 'Lamel / Yaprak Bıçak',
    description: 'İnce ve hassas kesimler için lamel bıçaklar',
    parentId: 'industrial-blades',
    order: 14,
    isActive: true,
  },
  'microtome-blades': {
    id: 'microtome-blades',
    slug: 'microtome-blades',
    name: 'Dokubilim / Mikrotom Jileti',
    description: 'Laboratuvar ve histoloji uygulamaları için mikrotom jiletleri',
    parentId: 'industrial-blades',
    order: 15,
    isActive: true,
  },
  'microkeratome-blades': {
    id: 'microkeratome-blades',
    slug: 'microkeratome-blades',
    name: 'Lasik / Mikrokeratom Jileti',
    description: 'Göz cerrahisi ve tıbbi uygulamalar için mikrokeratom jiletleri',
    parentId: 'industrial-blades',
    order: 16,
    isActive: true,
  },
  'glass-scraper': {
    id: 'glass-scraper',
    slug: 'glass-scraper-blades',
    name: 'Cam Kazıyıcı',
    description: 'Cam yüzeylerde etiket ve kalıntı temizliği için kazıyıcılar',
    parentId: 'industrial-blades',
    order: 17,
    isActive: true,
  },
  'classic-blades': {
    id: 'classic-blades',
    slug: 'classic-blades',
    name: 'Klasik Jilet',
    description: 'Geleneksel çift kenarlı klasik jiletler',
    parentId: 'industrial-blades',
    order: 18,
    isActive: true,
  },
  'drywall-blades': {
    id: 'drywall-blades',
    slug: 'drywall-blades',
    name: 'Alçı Levha (Kartonpiyer) Bıçakları',
    description: 'Alçıpan ve kartonpiyer kesimi için özel bıçaklar',
    parentId: 'industrial-blades',
    order: 19,
    isActive: true,
  },
  'arrow-blades': {
    id: 'arrow-blades',
    slug: 'arrow-blades',
    name: 'OK Bıçaklar',
    description: 'Profesyonel ok bıçakları ve jiletler',
    parentId: 'industrial-blades',
    order: 20,
    isActive: true,
  },

  // --- MACHINE KNIVES SUBCATEGORIES ---
  'advanced-processing': {
    id: 'advanced-processing',
    slug: 'advanced-processing-knives',
    name: 'İleri İşlem Bıçakları',
    description: 'Endüstriyel ileri işlem uygulamaları için bıçaklar',
    parentId: 'machine-knives',
    order: 1,
    isActive: true,
  },
  'thermoform-vacuum': {
    id: 'thermoform-vacuum',
    slug: 'thermoform-vacuum-knives',
    name: 'Termoform Vakum Bıçakları',
    description: 'Termoform ve vakum paketleme makinaları için profesyonel bıçaklar. Multivac, Opack, Betapak, GEA, Alcan, Ulma, Variovac makinalarına uyumlu.',
    parentId: 'machine-knives',
    order: 2,
    isActive: true,
    seoKeywords: [
      'vakum paketleme bıçağı',
      'termoform bıçak',
      'yıldız bıçak',
      'üçgen bıçak',
      'zımba bıçak',
      'multivac bıçak',
      'opack bıçak',
      'betapak bıçak',
      'gea bıçak',
      'alcan bıçak',
      'ulma bıçak',
      'variovac bıçak',
      'vacuum packaging blade',
      'thermoform knife',
      'star blade',
      'punch blade',
      'triangle blade',
      'contour blade',
      'lama blade',
      'gıda ambalaj bıçağı',
      'food packaging blade'
    ],
  },
  'circular-slitting': {
    id: 'circular-slitting',
    slug: 'circular-slitting-knives',
    name: 'Dairesel Dilme Bıçakları',
    description: 'Dairesel dilme makinaları için bıçaklar',
    parentId: 'machine-knives',
    order: 3,
    isActive: true,
  },
  'recycling-knives': {
    id: 'recycling-knives',
    slug: 'recycling-knives',
    name: 'Geri Dönüşüm Bıçakları',
    description: 'Geri dönüşüm işlemleri için bıçaklar',
    parentId: 'machine-knives',
    order: 4,
    isActive: true,
  },
  'corrugated-slitting': {
    id: 'corrugated-slitting',
    slug: 'corrugated-slitting-knives',
    name: 'Oluklu Mukavva Dilme Bıçakları',
    description: 'Mukavva ve karton dilme için özel bıçaklar',
    parentId: 'machine-knives',
    order: 5,
    isActive: true,
  },
  'rotary-cutting': {
    id: 'rotary-cutting',
    slug: 'rotary-cutting-knives',
    name: 'Döner Kesim Bıçakları',
    description: 'Döner kesim makinaları için bıçaklar',
    parentId: 'machine-knives',
    order: 6,
    isActive: true,
  },
  'serrated-knives': {
    id: 'serrated-knives',
    slug: 'serrated-knives',
    name: 'Dişli Bıçaklar',
    description: 'Testere dişli kesim bıçakları',
    parentId: 'machine-knives',
    order: 7,
    isActive: true,
  },
  'circular-crusher': {
    id: 'circular-crusher',
    slug: 'circular-crusher-knives',
    name: 'Dairesel Ezici Bıçaklar',
    description: 'Dairesel ezme ve kesme işlemleri için',
    parentId: 'machine-knives',
    order: 8,
    isActive: true,
  },
  'derinder-knives': {
    id: 'derinder-knives',
    slug: 'derinder-knives',
    name: 'Et Açma (Derinder) Bıçakları',
    description: 'Profesyonel et işleme ve derinder bıçakları',
    parentId: 'machine-knives',
    order: 9,
    isActive: true,
  },
  'logsaw-knives': {
    id: 'logsaw-knives',
    slug: 'logsaw-knives',
    name: 'Log-Saw Bıçakları',
    description: 'Tuvalet kağıdı ve kağıt havlu için log-saw bıçakları',
    parentId: 'machine-knives',
    order: 10,
    isActive: true,
  },
  'core-cutting': {
    id: 'core-cutting',
    slug: 'core-cutting-knives',
    name: 'Masura Kesim Bıçakları',
    description: 'Masura ve bobin kesimi için bıçaklar',
    parentId: 'machine-knives',
    order: 11,
    isActive: true,
  },
  'case-sealer': {
    id: 'case-sealer',
    slug: 'case-sealer-knives',
    name: 'Kutu Kapama - Koli Bandı Bıçakları',
    description: 'Paketleme ve koli bantlama makinaları için',
    parentId: 'machine-knives',
    order: 12,
    isActive: true,
  },
  'zig-zag-knives': {
    id: 'zig-zag-knives',
    slug: 'zig-zag-knives',
    name: 'Zig Zag Bıçaklar',
    description: 'Zig zag kesim deseni için özel bıçaklar',
    parentId: 'machine-knives',
    order: 13,
    isActive: true,
  },
  'band-knives': {
    id: 'band-knives',
    slug: 'band-knives',
    name: 'Şerit Bıçaklar',
    description: 'Şerit testere ve kesim bıçakları',
    parentId: 'machine-knives',
    order: 14,
    isActive: true,
  },
  'tray-mold': {
    id: 'tray-mold',
    slug: 'tray-mold-knives',
    name: 'Tray (Kase) Kalıp Bıçakları',
    description: 'Tray ve kase kalıp kesimi için bıçaklar',
    parentId: 'machine-knives',
    order: 15,
    isActive: true,
  },
  'sausage-peeling': {
    id: 'sausage-peeling',
    slug: 'sausage-peeling-knives',
    name: 'Sosis Sıyırma Bıçakları',
    description: 'Sosis üretim hatları için sıyırma bıçakları',
    parentId: 'machine-knives',
    order: 16,
    isActive: true,
  },
  'cnc-knives': {
    id: 'cnc-knives',
    slug: 'cnc-knives',
    name: 'CNC Bıçakları',
    description: 'CNC makinaları için kesici bıçaklar',
    parentId: 'machine-knives',
    order: 17,
    isActive: true,
  },
  'plotter-knives': {
    id: 'plotter-knives',
    slug: 'plotter-knives',
    name: 'Plotter Bıçakları',
    description: 'Plotter ve kesim makinaları için bıçaklar',
    parentId: 'machine-knives',
    order: 18,
    isActive: true,
  },

  // --- SAFETY KNIVES SUBCATEGORIES ---
  'auto-retract': {
    id: 'auto-retract',
    slug: 'auto-retract-knives',
    name: 'Otomatik Geri Çekilebilir',
    description: 'Güvenlik kilidi ile geri çekilebilir',
    parentId: 'safety-knives',
    order: 1,
    isActive: true,
  },
  'fixed-blade': {
    id: 'fixed-blade',
    slug: 'fixed-blade-knives',
    name: 'Sabit Uçlu Bıçaklar',
    description: 'Profesyonel sabit uç bıçaklar',
    parentId: 'safety-knives',
    order: 2,
    isActive: true,
  },
  'safety-cutters': {
    id: 'safety-cutters',
    slug: 'safety-cutters',
    name: 'Güvenlik Bıçakları',
    description: 'Yüksek güvenlik standartlı bıçaklar',
    parentId: 'safety-knives',
    order: 3,
    isActive: true,
  },
  'utility-knives': {
    id: 'utility-knives',
    slug: 'utility-knives',
    name: 'Maket Bıçakları',
    description: 'Hassas kesim için maket bıçaklar',
    parentId: 'safety-knives',
    order: 4,
    isActive: true,
  },
  'deburring-hobby': {
    id: 'deburring-hobby',
    slug: 'deburring-hobby-knives',
    name: 'Çapak Alma & Hobi Bıçakları',
    description: 'Detaylı işler için özel bıçaklar',
    parentId: 'safety-knives',
    order: 5,
    isActive: true,
  },
  'olfa-rotary': {
    id: 'olfa-rotary',
    slug: 'olfa-rotary-cutters',
    name: 'OLFA Dairesel Bıçaklar',
    description: 'OLFA marka dairesel kesim bıçakları',
    parentId: 'safety-knives',
    order: 6,
    isActive: true,
  },
  'olfa-craft': {
    id: 'olfa-craft',
    slug: 'olfa-craft-knives',
    name: 'OLFA Falçata Bıçaklar',
    description: 'OLFA profesyonel falçata serisi',
    parentId: 'safety-knives',
    order: 7,
    isActive: true,
  },
  'olfa-safety': {
    id: 'olfa-safety',
    slug: 'olfa-safety-knives',
    name: 'OLFA İş Güvenliği Bıçakları',
    description: 'OLFA güvenlik sertifikalı ürünler',
    parentId: 'safety-knives',
    order: 8,
    isActive: true,
  },
  'blade-disposal': {
    id: 'blade-disposal',
    slug: 'blade-disposal-containers',
    name: 'Muhafaza & Atık Kutuları',
    description: 'Kesici alet atıklarının güvenli şekilde toplanması için muhafaza kutuları. İş güvenliği denetimleri için uygundur.',
    parentId: 'safety-knives',
    order: 9,
    isActive: true,
  },
};

// =============================================================================
// MAIN CATEGORIES
// =============================================================================

export const CATEGORIES: Record<string, Category> = {
  'industrial-blades': {
    id: 'industrial-blades',
    slug: 'industrial-blades',
    name: 'Sanayi Jiletleri',
    description: 'Endüstriyel kullanım için profesyonel sanayi jiletleri ve kesici aletler',
    image: '/images/3-delikli-jilet-3-hole-industrial-blade.jpg',
    subcategoryIds: [
      '3-hole-slitting',
      'slotted-slitting',
      'injector-slitting',
      'single-edge',
      'trapezoid-blades',
      'hook-blades',
      'craft-blades',
      'hobby-blades',
      'scalpel-blades',
      'chopped-fiber',
      'fiberglass',
      'circular-blades',
      'pentagon-blades',
      'lamella-blades',
      'microtome-blades',
      'microkeratome-blades',
      'glass-scraper',
      'classic-blades',
      'drywall-blades',
      'arrow-blades',
    ],
    order: 1,
    isFeatured: true,
    isActive: true,
  },
  'machine-knives': {
    id: 'machine-knives',
    slug: 'machine-knives',
    name: 'Makina Bıçakları',
    description: 'Endüstriyel makinalar için özel üretim bıçaklar ve kesici sistemler',
    image: '/images/categories/makina-bicaklari.jpg',
    subcategoryIds: [
      'advanced-processing',
      'thermoform-vacuum',
      'circular-slitting',
      'recycling-knives',
      'corrugated-slitting',
      'rotary-cutting',
      'serrated-knives',
      'circular-crusher',
      'derinder-knives',
      'logsaw-knives',
      'core-cutting',
      'case-sealer',
      'zig-zag-knives',
      'band-knives',
      'tray-mold',
      'sausage-peeling',
      'cnc-knives',
      'plotter-knives',
    ],
    order: 2,
    isFeatured: true,
    isActive: true,
  },
  'safety-knives': {
    id: 'safety-knives',
    slug: 'safety-knives',
    name: 'İş Güvenliği & El Bıçakları',
    description: 'İş güvenliği standartlarına uygun profesyonel el bıçakları ve kesici aletler',
    image: '/images/categories/is-guvenligi-el-bicaklari.jpg',
    subcategoryIds: [
      'auto-retract',
      'fixed-blade',
      'safety-cutters',
      'utility-knives',
      'deburring-hobby',
      'olfa-rotary',
      'olfa-craft',
      'olfa-safety',
      'blade-disposal',
    ],
    order: 3,
    isFeatured: true,
    isActive: true,
  },
};

// =============================================================================
// SLUG MAPPING (Old Turkish → New English)
// For backward compatibility and redirects
// =============================================================================

export const CATEGORY_SLUG_REDIRECTS: Record<string, string> = {
  // Main categories
  'sanayi-jiletleri': 'industrial-blades',
  'makina-bicaklari': 'machine-knives',
  'is-guvenligi-el-bicaklari': 'safety-knives',
};

export const SUBCATEGORY_SLUG_REDIRECTS: Record<string, string> = {
  // Industrial blades
  '3-delikli-dilme-jiletleri': '3-hole-slitting-blades',
  'slotted-dilme-jiletleri': 'slotted-slitting-blades',
  'injektor-dilme-jiletleri': 'injector-slitting-blades',
  'tek-kenarli-jiletler': 'single-edge-blades',
  'trapez-bicaklar': 'trapezoid-blades',
  'kanca-bicaklar': 'hook-blades',
  'maket-bicak-falcata': 'craft-blades',
  'hobi-jiletleri': 'hobby-blades',
  'bisturi-nester': 'scalpel-blades',
  'kesik-elyaf-bicaklari': 'chopped-fiber-blades',
  'cam-elyaf-bicaklari': 'fiberglass-blades',
  'dairesel-jiletler': 'circular-blades',
  'besgen-bicaklar': 'pentagon-blades',
  'lamel-yaprak-bicak': 'lamella-blades',
  'dokubilim-mikrotom-jilet': 'microtome-blades',
  'lasik-mikrokeratom-jilet': 'microkeratome-blades',
  'cam-kaziyici': 'glass-scraper-blades',
  'klasik-jilet': 'classic-blades',
  'alci-levha-kartonpiyer-bicaklari': 'drywall-blades',
  'ok-bicaklar': 'arrow-blades',
  // Machine knives
  'ileri-islem-bicaklari': 'advanced-processing-knives',
  'termoform-vakum-bicaklari': 'thermoform-vacuum-knives',
  'dairesel-dilme-bicaklari': 'circular-slitting-knives',
  'geri-donusum-bicaklari': 'recycling-knives',
  'oluklu-mukavva-dilme-bicaklari': 'corrugated-slitting-knives',
  'doner-kesim-bicaklari': 'rotary-cutting-knives',
  'disli-bicaklar': 'serrated-knives',
  'dairesel-ezici-bicaklar': 'circular-crusher-knives',
  'et-acma-derinder-bicaklari': 'derinder-knives',
  'logsaw-bicaklari': 'logsaw-knives',
  'masura-kesim-bicaklari': 'core-cutting-knives',
  'kutu-kapama-koli-bandi-bicaklari': 'case-sealer-knives',
  'zig-zag-bicaklar': 'zig-zag-knives',
  'serit-bicaklar': 'band-knives',
  'tray-kase-kalip-bicaklari': 'tray-mold-knives',
  'sosis-siyirma-bicaklari': 'sausage-peeling-knives',
  'cnc-bicaklari': 'cnc-knives',
  'plotter-bicaklari': 'plotter-knives',
  // Safety knives
  'otomatik-geri-cekilebilir': 'auto-retract-knives',
  'sabit-uclu-bicaklar': 'fixed-blade-knives',
  'guvenlik-bicaklari': 'safety-cutters',
  'maket-bicaklari': 'utility-knives',
  'capak-alma-hobi': 'deburring-hobby-knives',
  'olfa-dairesel': 'olfa-rotary-cutters',
  'olfa-falcata': 'olfa-craft-knives',
  'olfa-is-guvenligi': 'olfa-safety-knives',
  'muhafaza-atik-kutulari': 'blade-disposal-containers',
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/** Get all active categories (sorted) */
export function getAllCategories(): Category[] {
  return Object.values(CATEGORIES)
    .filter(cat => cat.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Get all active subcategories (sorted) */
export function getAllSubcategories(): SubCategory[] {
  return Object.values(SUBCATEGORIES)
    .filter(sub => sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Get category by ID */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES[id];
}

/** Get category by slug (supports old Turkish slugs via redirect map) */
export function getCategoryBySlug(slug: string): Category | undefined {
  // First try direct lookup
  const direct = Object.values(CATEGORIES).find(cat => cat.slug === slug);
  if (direct) return direct;

  // Try redirect map for old Turkish slugs
  const newSlug = CATEGORY_SLUG_REDIRECTS[slug];
  if (newSlug) {
    return Object.values(CATEGORIES).find(cat => cat.slug === newSlug);
  }

  return undefined;
}

/** Get subcategory by ID */
export function getSubcategoryById(id: string): SubCategory | undefined {
  return SUBCATEGORIES[id];
}

/** Get subcategory by slug (supports old Turkish slugs via redirect map) */
export function getSubcategoryBySlug(slug: string): SubCategory | undefined {
  // First try direct lookup
  const direct = Object.values(SUBCATEGORIES).find(sub => sub.slug === slug);
  if (direct) return direct;

  // Try redirect map for old Turkish slugs
  const newSlug = SUBCATEGORY_SLUG_REDIRECTS[slug];
  if (newSlug) {
    return Object.values(SUBCATEGORIES).find(sub => sub.slug === newSlug);
  }

  return undefined;
}

/** Get subcategories for a category (sorted) */
export function getSubcategoriesByCategory(categoryId: string): SubCategory[] {
  const category = CATEGORIES[categoryId];
  if (!category) return [];

  return category.subcategoryIds
    .map(id => SUBCATEGORIES[id])
    .filter((sub): sub is SubCategory => sub !== undefined && sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Get parent category for a subcategory */
export function getParentCategory(subcategoryId: string): Category | undefined {
  const subcategory = SUBCATEGORIES[subcategoryId];
  if (!subcategory) return undefined;
  return CATEGORIES[subcategory.parentId];
}

/** Check if slug needs redirect (old Turkish → new English) */
export function getRedirectSlug(slug: string, type: 'category' | 'subcategory'): string | null {
  if (type === 'category') {
    return CATEGORY_SLUG_REDIRECTS[slug] || null;
  }
  return SUBCATEGORY_SLUG_REDIRECTS[slug] || null;
}
