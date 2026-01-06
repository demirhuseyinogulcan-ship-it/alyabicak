/**
 * Alya Bıçak - Kategori Verileri
 * Single Source of Truth for Categories
 * 
 * Yeni kategori eklemek için:
 * 1. CATEGORIES objesine yeni kategori ekle
 * 2. SUBCATEGORIES objesine alt kategorileri ekle
 * 3. Kategori'nin subcategoryIds'ine alt kategori ID'lerini ekle
 */

import { Category, SubCategory } from '../types';

// =============================================================================
// ALT KATEGORİLER
// =============================================================================

export const SUBCATEGORIES: Record<string, SubCategory> = {
  // --- SANAYİ JİLETLERİ ALT KATEGORİLERİ ---
  '3-delikli-dilme': {
    id: '3-delikli-dilme',
    slug: '3-delikli-dilme-jiletleri',
    name: '3 Delikli Dilme Jiletleri',
    description: 'Endüstri standardı 3 delikli jiletler',
    image: '/images/products/3-delikli-jilet.jpg',
    parentId: 'sanayi-jiletleri',
    order: 1,
    isActive: true,
  },
  'slotted-dilme': {
    id: 'slotted-dilme',
    slug: 'slotted-dilme-jiletleri',
    name: 'Slotted Dilme Jiletleri',
    description: 'Yüksek performanslı slotted jiletler',
    parentId: 'sanayi-jiletleri',
    order: 2,
    isActive: true,
  },
  'injektor-dilme': {
    id: 'injektor-dilme',
    slug: 'injektor-dilme-jiletleri',
    name: 'İnjektör Dilme Jiletleri',
    description: 'Hassas kesim için injektör jiletler',
    parentId: 'sanayi-jiletleri',
    order: 3,
    isActive: true,
  },
  'tek-kenarli': {
    id: 'tek-kenarli',
    slug: 'tek-kenarli-jiletler',
    name: 'Tek Kenarlı Jiletler',
    description: 'Güvenli kullanım için tek kenarlı jiletler',
    parentId: 'sanayi-jiletleri',
    order: 4,
    isActive: true,
  },
  'trapez-bicaklar': {
    id: 'trapez-bicaklar',
    slug: 'trapez-bicaklar',
    name: 'Trapez Bıçaklar',
    description: 'Çok amaçlı trapez kesim bıçakları',
    parentId: 'sanayi-jiletleri',
    order: 5,
    isActive: true,
  },
  'kanca-bicaklar': {
    id: 'kanca-bicaklar',
    slug: 'kanca-bicaklar',
    name: 'Kanca Bıçaklar',
    description: 'Özel uygulamalar için kanca bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 6,
    isActive: true,
  },
  'falcata-bicaklar': {
    id: 'falcata-bicaklar',
    slug: 'maket-bicak-falcata',
    name: 'Maket Bıçak Ucu | Falçata',
    description: 'Hassas kesim için maket uçları',
    parentId: 'sanayi-jiletleri',
    order: 7,
    isActive: true,
  },
  'hobi-jiletleri': {
    id: 'hobi-jiletleri',
    slug: 'hobi-jiletleri',
    name: 'Hobi Jiletleri',
    description: 'Hobi ve el işleri için jiletler',
    parentId: 'sanayi-jiletleri',
    order: 8,
    isActive: true,
  },
  'bisturi-nester': {
    id: 'bisturi-nester',
    slug: 'bisturi-nester',
    name: 'Bisturi – Neşter',
    description: 'Tıbbi ve endüstriyel hassas kesim için bisturi ve neşter jiletleri',
    parentId: 'sanayi-jiletleri',
    order: 9,
    isActive: true,
  },
  'kesik-elyaf': {
    id: 'kesik-elyaf',
    slug: 'kesik-elyaf-bicaklari',
    name: 'Kesik Elyaf Bıçakları',
    description: 'Elyaf kesimi için özel tasarlanmış bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 10,
    isActive: true,
  },
  'cam-elyaf': {
    id: 'cam-elyaf',
    slug: 'cam-elyaf-bicaklari',
    name: 'Cam Elyaf Bıçakları',
    description: 'Cam elyaf kesimi için yüksek performanslı bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 11,
    isActive: true,
  },
  'dairesel-jiletler': {
    id: 'dairesel-jiletler',
    slug: 'dairesel-jiletler',
    name: 'Dairesel Jiletler',
    description: 'Döner kesim için dairesel jiletler',
    parentId: 'sanayi-jiletleri',
    order: 12,
    isActive: true,
  },
  'besgen-bicaklar': {
    id: 'besgen-bicaklar',
    slug: 'besgen-bicaklar',
    name: 'Beşgen Bıçaklar',
    description: 'Özel geometrili beşgen kesim bıçakları',
    parentId: 'sanayi-jiletleri',
    order: 13,
    isActive: true,
  },
  'lamel-yaprak': {
    id: 'lamel-yaprak',
    slug: 'lamel-yaprak-bicak',
    name: 'Lamel / Yaprak Bıçak',
    description: 'İnce ve hassas kesimler için lamel bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 14,
    isActive: true,
  },
  'mikrotom-jilet': {
    id: 'mikrotom-jilet',
    slug: 'dokubilim-mikrotom-jilet',
    name: 'Dokubilim / Mikrotom Jileti',
    description: 'Laboratuvar ve histoloji uygulamaları için mikrotom jiletleri',
    parentId: 'sanayi-jiletleri',
    order: 15,
    isActive: true,
  },
  'lasik-mikrokeratom': {
    id: 'lasik-mikrokeratom',
    slug: 'lasik-mikrokeratom-jilet',
    name: 'Lasik / Mikrokeratom Jileti',
    description: 'Göz cerrahisi ve tıbbi uygulamalar için mikrokeratom jiletleri',
    parentId: 'sanayi-jiletleri',
    order: 16,
    isActive: true,
  },
  'cam-kaziyici': {
    id: 'cam-kaziyici',
    slug: 'cam-kaziyici',
    name: 'Cam Kazıyıcı',
    description: 'Cam yüzeylerde etiket ve kalıntı temizliği için kazıyıcılar',
    parentId: 'sanayi-jiletleri',
    order: 17,
    isActive: true,
  },
  'klasik-jilet': {
    id: 'klasik-jilet',
    slug: 'klasik-jilet',
    name: 'Klasik Jilet',
    description: 'Geleneksel çift kenarlı klasik jiletler',
    parentId: 'sanayi-jiletleri',
    order: 18,
    isActive: true,
  },
  'alci-levha': {
    id: 'alci-levha',
    slug: 'alci-levha-kartonpiyer-bicaklari',
    name: 'Alçı Levha (Kartonpiyer) Bıçakları',
    description: 'Alçıpan ve kartonpiyer kesimi için özel bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 19,
    isActive: true,
  },
  'ok-bicaklar': {
    id: 'ok-bicaklar',
    slug: 'ok-bicaklar',
    name: 'OK Bıçaklar',
    description: 'Profesyonel ok bıçakları ve jiletler',
    parentId: 'sanayi-jiletleri',
    order: 20,
    isActive: true,
  },

  // --- MAKİNA BIÇAKLARI ALT KATEGORİLERİ ---
  'ileri-islem': {
    id: 'ileri-islem',
    slug: 'ileri-islem-bicaklari',
    name: 'İleri İşlem Bıçakları',
    description: 'Endüstriyel ileri işlem uygulamaları için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 1,
    isActive: true,
  },
  'termoform-vakum': {
    id: 'termoform-vakum',
    slug: 'termoform-vakum-bicaklari',
    name: 'Termoform Vakum Bıçakları',
    description: 'Termoform ve vakum paketleme makinaları için',
    parentId: 'makina-bicaklari',
    order: 2,
    isActive: true,
  },
  'dairesel-dilme': {
    id: 'dairesel-dilme',
    slug: 'dairesel-dilme-bicaklari',
    name: 'Dairesel Dilme Bıçakları',
    description: 'Dairesel dilme makinaları için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 3,
    isActive: true,
  },
  'geri-donusum': {
    id: 'geri-donusum',
    slug: 'geri-donusum-bicaklari',
    name: 'Geri Dönüşüm Bıçakları',
    description: 'Geri dönüşüm işlemleri için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 4,
    isActive: true,
  },
  'oluklu-mukavva': {
    id: 'oluklu-mukavva',
    slug: 'oluklu-mukavva-dilme-bicaklari',
    name: 'Oluklu Mukavva Dilme Bıçakları',
    description: 'Mukavva ve karton dilme için özel bıçaklar',
    parentId: 'makina-bicaklari',
    order: 5,
    isActive: true,
  },
  'doner-kesim': {
    id: 'doner-kesim',
    slug: 'doner-kesim-bicaklari',
    name: 'Döner Kesim Bıçakları',
    description: 'Döner kesim makinaları için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 6,
    isActive: true,
  },
  'disli-bicaklar': {
    id: 'disli-bicaklar',
    slug: 'disli-bicaklar',
    name: 'Dişli Bıçaklar',
    description: 'Testere dişli kesim bıçakları',
    parentId: 'makina-bicaklari',
    order: 7,
    isActive: true,
  },
  'dairesel-ezici': {
    id: 'dairesel-ezici',
    slug: 'dairesel-ezici-bicaklar',
    name: 'Dairesel Ezici Bıçaklar',
    description: 'Dairesel ezme ve kesme işlemleri için',
    parentId: 'makina-bicaklari',
    order: 8,
    isActive: true,
  },
  'et-acma': {
    id: 'et-acma',
    slug: 'et-acma-derinder-bicaklari',
    name: 'Et Açma (Derinder) Bıçakları',
    description: 'Profesyonel et işleme ve derinder bıçakları',
    parentId: 'makina-bicaklari',
    order: 9,
    isActive: true,
  },
  'logsaw-kagit': {
    id: 'logsaw-kagit',
    slug: 'logsaw-bicaklari',
    name: 'Log-Saw Bıçakları',
    description: 'Tuvalet kağıdı ve kağıt havlu için log-saw bıçakları',
    parentId: 'makina-bicaklari',
    order: 10,
    isActive: true,
  },
  'masura-kesim': {
    id: 'masura-kesim',
    slug: 'masura-kesim-bicaklari',
    name: 'Masura Kesim Bıçakları',
    description: 'Masura ve bobin kesimi için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 11,
    isActive: true,
  },
  'kutu-kapama': {
    id: 'kutu-kapama',
    slug: 'kutu-kapama-koli-bandi-bicaklari',
    name: 'Kutu Kapama - Koli Bandı Bıçakları',
    description: 'Paketleme ve koli bantlama makinaları için',
    parentId: 'makina-bicaklari',
    order: 12,
    isActive: true,
  },
  'zig-zag': {
    id: 'zig-zag',
    slug: 'zig-zag-bicaklar',
    name: 'Zig Zag Bıçaklar',
    description: 'Zig zag kesim deseni için özel bıçaklar',
    parentId: 'makina-bicaklari',
    order: 13,
    isActive: true,
  },
  'serit-bicaklar': {
    id: 'serit-bicaklar',
    slug: 'serit-bicaklar',
    name: 'Şerit Bıçaklar',
    description: 'Şerit testere ve kesim bıçakları',
    parentId: 'makina-bicaklari',
    order: 14,
    isActive: true,
  },
  'tray-kalip': {
    id: 'tray-kalip',
    slug: 'tray-kase-kalip-bicaklari',
    name: 'Tray (Kase) Kalıp Bıçakları',
    description: 'Tray ve kase kalıp kesimi için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 15,
    isActive: true,
  },
  'sosis-siyirma': {
    id: 'sosis-siyirma',
    slug: 'sosis-siyirma-bicaklari',
    name: 'Sosis Sıyırma Bıçakları',
    description: 'Sosis üretim hatları için sıyırma bıçakları',
    parentId: 'makina-bicaklari',
    order: 16,
    isActive: true,
  },
  'cnc-bicaklari': {
    id: 'cnc-bicaklari',
    slug: 'cnc-bicaklari',
    name: 'CNC Bıçakları',
    description: 'CNC makinaları için kesici bıçaklar',
    parentId: 'makina-bicaklari',
    order: 17,
    isActive: true,
  },
  'plotter-bicaklari': {
    id: 'plotter-bicaklari',
    slug: 'plotter-bicaklari',
    name: 'Plotter Bıçakları',
    description: 'Plotter ve kesim makinaları için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 18,
    isActive: true,
  },

  // --- İŞ GÜVENLİĞİ & EL BIÇAKLARI ALT KATEGORİLERİ ---
  'oto-geri-cekilebilir': {
    id: 'oto-geri-cekilebilir',
    slug: 'otomatik-geri-cekilebilir',
    name: 'Otomatik Geri Çekilebilir',
    description: 'Güvenlik kilidi ile geri çekilebilir',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 1,
    isActive: true,
  },
  'sabit-uclu': {
    id: 'sabit-uclu',
    slug: 'sabit-uclu-bicaklar',
    name: 'Sabit Uçlu Bıçaklar',
    description: 'Profesyonel sabit uç bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 2,
    isActive: true,
  },
  'guvenlik-bicaklari': {
    id: 'guvenlik-bicaklari',
    slug: 'guvenlik-bicaklari',
    name: 'Güvenlik Bıçakları',
    description: 'Yüksek güvenlik standartlı bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 3,
    isActive: true,
  },
  'maket-bicaklari': {
    id: 'maket-bicaklari',
    slug: 'maket-bicaklari',
    name: 'Maket Bıçakları',
    description: 'Hassas kesim için maket bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 4,
    isActive: true,
  },
  'capak-alma-hobi': {
    id: 'capak-alma-hobi',
    slug: 'capak-alma-hobi',
    name: 'Çapak Alma & Hobi Bıçakları',
    description: 'Detaylı işler için özel bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 5,
    isActive: true,
  },
  'olfa-dairesel': {
    id: 'olfa-dairesel',
    slug: 'olfa-dairesel',
    name: 'OLFA Dairesel Bıçaklar',
    description: 'OLFA marka dairesel kesim bıçakları',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 6,
    isActive: true,
  },
  'olfa-falcata': {
    id: 'olfa-falcata',
    slug: 'olfa-falcata',
    name: 'OLFA Falçata Bıçaklar',
    description: 'OLFA profesyonel falçata serisi',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 7,
    isActive: true,
  },
  'olfa-is-guvenligi': {
    id: 'olfa-is-guvenligi',
    slug: 'olfa-is-guvenligi',
    name: 'OLFA İş Güvenliği Bıçakları',
    description: 'OLFA güvenlik sertifikalı ürünler',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 8,
    isActive: true,
  },
};

// =============================================================================
// ANA KATEGORİLER
// =============================================================================

export const CATEGORIES: Record<string, Category> = {
  'sanayi-jiletleri': {
    id: 'sanayi-jiletleri',
    slug: 'sanayi-jiletleri',
    name: 'Sanayi Jiletleri',
    description: 'Endüstriyel kullanım için profesyonel sanayi jiletleri ve kesici aletler',
    image: '/images/categories/sanayi-jiletleri.jpg',
    subcategoryIds: [
      '3-delikli-dilme',
      'slotted-dilme',
      'injektor-dilme',
      'tek-kenarli',
      'trapez-bicaklar',
      'kanca-bicaklar',
      'falcata-bicaklar',
      'hobi-jiletleri',
      'bisturi-nester',
      'kesik-elyaf',
      'cam-elyaf',
      'dairesel-jiletler',
      'besgen-bicaklar',
      'lamel-yaprak',
      'mikrotom-jilet',
      'lasik-mikrokeratom',
      'cam-kaziyici',
      'klasik-jilet',
      'alci-levha',
      'ok-bicaklar',
    ],
    order: 1,
    isFeatured: true,
    isActive: true,
  },
  'makina-bicaklari': {
    id: 'makina-bicaklari',
    slug: 'makina-bicaklari',
    name: 'Makina Bıçakları',
    description: 'Endüstriyel makinalar için özel üretim bıçaklar ve kesici sistemler',
    image: '/images/categories/makina-bicaklari.jpg',
    subcategoryIds: [
      'ileri-islem',
      'termoform-vakum',
      'dairesel-dilme',
      'geri-donusum',
      'oluklu-mukavva',
      'doner-kesim',
      'disli-bicaklar',
      'dairesel-ezici',
      'et-acma',
      'logsaw-kagit',
      'masura-kesim',
      'kutu-kapama',
      'zig-zag',
      'serit-bicaklar',
      'tray-kalip',
      'sosis-siyirma',
      'cnc-bicaklari',
      'plotter-bicaklari',
    ],
    order: 2,
    isFeatured: true,
    isActive: true,
  },
  'is-guvenligi-el-bicaklari': {
    id: 'is-guvenligi-el-bicaklari',
    slug: 'is-guvenligi-el-bicaklari',
    name: 'İş Güvenliği & El Bıçakları',
    description: 'İş güvenliği standartlarına uygun profesyonel el bıçakları ve kesici aletler',
    image: '/images/categories/is-guvenligi-el-bicaklari.jpg',
    subcategoryIds: [
      'oto-geri-cekilebilir',
      'sabit-uclu',
      'guvenlik-bicaklari',
      'maket-bicaklari',
      'capak-alma-hobi',
      'olfa-dairesel',
      'olfa-falcata',
      'olfa-is-guvenligi',
    ],
    order: 3,
    isFeatured: true,
    isActive: true,
  },
};

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/** Tüm aktif kategorileri döndür (sıralı) */
export function getAllCategories(): Category[] {
  return Object.values(CATEGORIES)
    .filter(cat => cat.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Tüm aktif alt kategorileri döndür (sıralı) */
export function getAllSubcategories(): SubCategory[] {
  return Object.values(SUBCATEGORIES)
    .filter(sub => sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Kategori ID'ye göre kategori getir */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES[id];
}

/** Kategori slug'a göre kategori getir */
export function getCategoryBySlug(slug: string): Category | undefined {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug);
}

/** Alt kategori ID'ye göre alt kategori getir */
export function getSubcategoryById(id: string): SubCategory | undefined {
  return SUBCATEGORIES[id];
}

/** Alt kategori slug'a göre alt kategori getir */
export function getSubcategoryBySlug(slug: string): SubCategory | undefined {
  return Object.values(SUBCATEGORIES).find(sub => sub.slug === slug);
}

/** Kategoriye ait alt kategorileri getir (sıralı) */
export function getSubcategoriesByCategory(categoryId: string): SubCategory[] {
  const category = CATEGORIES[categoryId];
  if (!category) return [];
  
  return category.subcategoryIds
    .map(id => SUBCATEGORIES[id])
    .filter((sub): sub is SubCategory => sub !== undefined && sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Alt kategorinin ana kategorisini getir */
export function getParentCategory(subcategoryId: string): Category | undefined {
  const subcategory = SUBCATEGORIES[subcategoryId];
  if (!subcategory) return undefined;
  return CATEGORIES[subcategory.parentId];
}

