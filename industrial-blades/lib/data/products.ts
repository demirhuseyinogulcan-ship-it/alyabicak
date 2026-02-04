/**
 * Alya Bıçak - Ürün Verileri
 * Single Source of Truth for Products
 * 
 * Yeni ürün eklemek için:
 * 1. PRODUCTS dizisine yeni ürün objesi ekle
 * 2. categoryId ve subcategoryId'nin doğru olduğundan emin ol
 * 
 * Scraped ürünler scraped-products.json dosyasından otomatik olarak yüklenir.
 * 
 * NOT: Bu dosya hem Server hem Client Component'lerden erişilebilir.
 * JSON verisi Next.js tarafından otomatik olarak optimize edilir.
 */

import { Product } from '../types';
import scrapedProductsData from './scraped-products.json';

// =============================================================================
// MANUEL ÜRÜNLER (El ile eklenen ürünler)
// =============================================================================

const MANUAL_PRODUCTS: Product[] = [
  // --- İŞ GÜVENLİĞİ & EL BIÇAKLARI ---
  {
    id: 'h006-001-x01',
    slug: 'h006-001-x01-retro-light-knife',
    code: 'H006 001 X01',
    name: 'RETRO LIGHT KNIFE – Döküm Metal El Bıçağı',
    description: 'RETRO LIGHT KNIFE – Döküm Metal El Bıçağı. İş güvenliği standartlarına uygun, dayanıklı döküm metal gövdeli el bıçağı.',
    categoryId: 'safety-knives',
    subcategoryId: 'fixed-blade',
    image: '/images/products/H006-001-X01.jpg',
    variants: [
      {
        id: 'h006-001-x01-standard',
        sku: 'H006-001-X01',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Döküm metal gövde', 'Ergonomik tasarım', 'Uzun ömürlü'],
    applications: ['Genel kesim işleri', 'Ambalaj açma', 'Karton kesimi'],
    isFeatured: false,
    isActive: true,
    order: 1,
  },
  {
    id: 'h008-001-a03',
    slug: 'h008-001-a03-auto-retract',
    code: 'H008 001 A03',
    name: 'AUTO RETRACT – Otomatik Geri Çekilebilir',
    description: 'AUTO RETRACT – Otomatik Geri Çekilebilir bıçak. Maksimum güvenlik için otomatik geri çekilme mekanizması.',
    categoryId: 'safety-knives',
    subcategoryId: 'auto-retract',
    image: '/images/products/H008-001-A03.jpg',
    variants: [
      {
        id: 'h008-001-a03-standard',
        sku: 'H008-001-A03',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Otomatik geri çekilme', 'Güvenlik kilidi', 'Ergonomik kavrama'],
    applications: ['Depo işleri', 'Lojistik', 'Üretim hatları'],
    certifications: ['CE', 'ISO 9001'],
    isFeatured: true,
    isActive: true,
    order: 2,
  },
  {
    id: 'p1-a',
    slug: 'p1-a-capak-alma-hobi',
    code: 'P1-A',
    name: 'Çapak Alma / Hobi El Bıçağı – Alyan Vidalı',
    description: 'Alyan vidalı çapak alma / hobi el bıçağı. Hassas işler için ideal.',
    categoryId: 'safety-knives',
    subcategoryId: 'deburring-hobby',
    image: '/images/products/P1-A.jpg',
    variants: [
      {
        id: 'p1-a-standard',
        sku: 'P1-A',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Alyan vidalı', 'Hassas kesim', 'Değiştirilebilir uç'],
    applications: ['Çapak alma', 'Hobi işleri', 'Model yapımı'],
    isFeatured: false,
    isActive: true,
    order: 3,
  },

  // --- SLOTTED JİLETLER ---
  {
    id: 'slotted-jilet-020',
    slug: 'slotted-dilme-jileti-020mm',
    code: 'SLT-020',
    name: 'Slotted Dilme Jileti 0.20mm',
    description: 'Slotted dilme jileti, yüksek performanslı kesim için tasarlanmış.',
    categoryId: 'industrial-blades',
    subcategoryId: 'slotted-slitting',
    image: '/images/products/slotted-jilet.jpg',
    variants: [
      {
        id: 'slt-020-standard',
        sku: 'SLT-020',
        thickness: '0.20mm',
        inStock: true,
      },
      {
        id: 'slt-025-standard',
        sku: 'SLT-025',
        thickness: '0.25mm',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 60-62',
    },
    features: ['Slotted tasarım', 'Kolay montaj', 'Yüksek performans'],
    applications: ['Endüstriyel dilme', 'Hassas kesim'],
    isFeatured: false,
    isActive: true,
    order: 2,
  },
  {
    id: 'trapez-bicak-standart',
    slug: 'trapez-bicak-standart',
    code: 'TRP-STD',
    name: 'Trapez Bıçak - Standart',
    description: 'Standart trapez bıçak, çok amaçlı kullanım için ideal.',
    categoryId: 'industrial-blades',
    subcategoryId: 'trapezoid-blades',
    image: '/images/products/trapez-bicak.jpg',
    variants: [
      {
        id: 'trp-std-standard',
        sku: 'TRP-STD',
        inStock: true,
      },
      {
        id: 'trp-hd-standard',
        sku: 'TRP-HD',
        material: 'Heavy Duty',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-60',
      dimensions: '61mm x 19mm',
    },
    features: ['Evrensel uyum', 'Çift taraflı kesim', 'Ekonomik'],
    applications: ['Halı kesimi', 'Karton kesimi', 'Genel kullanım'],
    isFeatured: false,
    isActive: true,
    order: 3,
  },

  // --- MAKİNA BIÇAKLARI ---
  {
    id: 'doner-bicak-100mm',
    slug: 'doner-bicak-100mm',
    code: 'DNR-100',
    name: 'Döner Bıçağı 100mm',
    description: 'Profesyonel kebap döner bıçağı, 100mm çap.',
    categoryId: 'machine-knives',
    subcategoryId: 'rotary-cutting',
    image: '/images/products/doner-bicak.jpg',
    variants: [
      {
        id: 'dnr-100-standard',
        sku: 'DNR-100',
        size: '100mm',
        inStock: true,
      },
      {
        id: 'dnr-120-standard',
        sku: 'DNR-120',
        size: '120mm',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Paslanmaz Çelik',
      hardness: 'HRC 56-58',
    },
    features: ['Paslanmaz', 'Keskin kenar', 'Kolay temizlik'],
    applications: ['Döner kesimi', 'Et kesimi'],
    certifications: ['FDA', 'USDA'],
    isFeatured: true,
    isActive: true,
    order: 1,
  },
  {
    id: 'vakum-paketleme-bicak',
    slug: 'vakum-paketleme-bicagi',
    code: 'VPB-001',
    name: 'Vakum Paketleme Bıçağı',
    description: 'Vakum paketleme makineleri için özel tasarlanmış bıçak.',
    categoryId: 'machine-knives',
    subcategoryId: 'thermoform-vacuum',
    image: '/images/products/vakum-paketleme.jpg',
    variants: [
      {
        id: 'vpb-001-standard',
        sku: 'VPB-001',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-60',
    },
    features: ['Özel profil', 'Uzun ömür', 'Temiz kesim'],
    applications: ['Vakum paketleme', 'Gıda ambalajı'],
    isFeatured: false,
    isActive: true,
    order: 2,
  },
];

// Scraped ürün tipi (JSON dosyasından gelen veri yapısı)
interface ScrapedProduct {
  id: string;
  slug: string;
  code: string;
  name: string;
  description: string;
  categoryId: string;
  subcategoryId?: string;
  image?: string;
  variants: Product['variants'];
  specifications: Product['specifications'];
  features?: string[];
  applications?: string[];
  isFeatured: boolean;
  isActive: boolean;
  order: number;
}

// Scraped ürünleri Product tipine dönüştür ve ekle
const scrapedProducts: Product[] = (scrapedProductsData as ScrapedProduct[]).map((p) => ({
  id: p.id,
  slug: p.slug,
  code: p.code,
  name: p.name,
  description: p.description,
  categoryId: p.categoryId,
  subcategoryId: p.subcategoryId || undefined,
  image: p.image,
  images: (p as { images?: string[] }).images,  // Galeri görselleri
  variants: p.variants,
  specifications: p.specifications,
  features: p.features,
  applications: p.applications,
  availableSizes: (p as { availableSizes?: string[] }).availableSizes,  // Mevcut ölçüler
  isFeatured: p.isFeatured,
  isActive: p.isActive,
  order: p.order,
}));

// Tüm ürünleri birleştir (manuel + scraped)
export const PRODUCTS: Product[] = [...MANUAL_PRODUCTS, ...scrapedProducts];

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/** Tüm aktif ürünleri döndür */
export function getAllProducts(): Product[] {
  return PRODUCTS.filter(p => p.isActive);
}

/** Öne çıkan ürünleri döndür */
export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isActive && p.isFeatured);
}

/** ID'ye göre ürün getir */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

/** Slug'a göre ürün getir */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

/** Kategoriye göre ürünleri getir */
export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter(p => p.isActive && p.categoryId === categoryId);
}

/** Alt kategoriye göre ürünleri getir */
export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return PRODUCTS.filter(p => p.isActive && p.subcategoryId === subcategoryId);
}

/** Kategorideki ürün sayısını getir */
export function getProductCountByCategory(categoryId: string): number {
  return PRODUCTS.filter(p => p.isActive && p.categoryId === categoryId).length;
}

/** Alt kategorideki ürün sayısını getir */
export function getProductCountBySubcategory(subcategoryId: string): number {
  return PRODUCTS.filter(p => p.isActive && p.subcategoryId === subcategoryId).length;
}

/** Arama yap - Kelime bazlı akıllı arama */
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];
  
  // Kelime sınırı regex'i oluştur (Türkçe karakterler dahil)
  // "ok" araması "çok" içinde eşleşmemeli ama "OK Bıçak" içinde eşleşmeli
  const wordBoundaryRegex = new RegExp(`(^|[\\s\\-\\_\\/\\(\\)])${escapeRegex(searchTerm)}($|[\\s\\-\\_\\/\\(\\)])`, 'i');
  const containsRegex = new RegExp(escapeRegex(searchTerm), 'i');
  
  // Skorlama: tam kelime eşleşmesi > kod eşleşmesi > isim içinde > açıklama içinde
  const results = PRODUCTS
    .filter(p => p.isActive)
    .map(p => {
      let score = 0;
      const nameLower = p.name.toLowerCase();
      const codeLower = p.code.toLowerCase();
      const descLower = p.description.toLowerCase();
      
      // Kod tam eşleşme (en yüksek öncelik)
      if (codeLower === searchTerm || codeLower.replace(/[\s\-]/g, '') === searchTerm.replace(/[\s\-]/g, '')) {
        score += 100;
      }
      // Kod içinde kelime olarak geçiyor
      else if (wordBoundaryRegex.test(p.code)) {
        score += 80;
      }
      // Kod içinde herhangi bir yerde geçiyor
      else if (containsRegex.test(p.code)) {
        score += 60;
      }
      
      // İsim tam kelime eşleşmesi
      if (wordBoundaryRegex.test(p.name)) {
        score += 50;
      }
      // İsim içinde geçiyor
      else if (containsRegex.test(p.name)) {
        score += 30;
      }
      
      // Açıklama tam kelime eşleşmesi
      if (wordBoundaryRegex.test(p.description)) {
        score += 20;
      }
      // Açıklama içinde geçiyor (en düşük öncelik)
      else if (containsRegex.test(p.description)) {
        score += 5;
      }
      
      return { product: p, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => r.product);
  
  return results;
}

/** Regex özel karakterlerini escape et */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Stokta olan ürünleri getir */
export function getInStockProducts(): Product[] {
  return PRODUCTS.filter(p => 
    p.isActive && p.variants.some(v => v.inStock)
  );
}

/** Toplam ürün sayısı */
export function getTotalProductCount(): number {
  return PRODUCTS.filter(p => p.isActive).length;
}


