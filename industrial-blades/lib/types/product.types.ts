/**
 * Alya Bıçak - Ürün Tip Tanımlamaları (Genişletilmiş)
 * Profesyonel ürün detay sayfası için optimize edilmiş
 */

// =============================================================================
// GÖRSEL TİPLERİ
// =============================================================================

/** Ürün görseli */
export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Ürün görsel koleksiyonu */
export interface ProductImages {
  main: ProductImage;           // Ana görsel (1920x1080, 16:9)
  mainLarge?: ProductImage;     // Zoom için büyük görsel (1920x1080)
  gallery: ProductImage[];      // Galeri görselleri (3-4 adet, 16:9)
  thumbnail: ProductImage;      // Liste için küçük görsel (640x360, 16:9)
}

// =============================================================================
// TEKNİK ÖZELLİK TİPLERİ
// =============================================================================

/** Teknik özellik satırı */
export interface ProductSpec {
  label: string;                // "Malzeme"
  value: string;                // "Sheffield Çelik"
  icon?: string;                // Lucide icon adı
  highlight?: boolean;          // Vurgulanacak mı?
}

/** Ürün ölçü/özellik tablosu veri yapısı */
export interface SpecTableColumn {
  key: string;                  // "outerDiameter"
  label: string;                // "Dış Çap"
  unit?: string;                // "mm"
}

export interface SpecTableColumnGroup {
  label: string;                // "Ölçüler" | "Bileme" | "Çelik"
  span: number;                 // colspan
}

export interface SpecTableData {
  title?: string;               // Özel başlık (opsiyonel)
  columns: SpecTableColumn[];   // Sütun tanımları
  columnGroups?: SpecTableColumnGroup[]; // Üst başlık grupları
  rows: (string | number | boolean)[][]; // Veri satırları
  note?: string | false;        // Alt not (false = gösterme)
}

// =============================================================================
// KULLANIM ALANI TİPLERİ
// =============================================================================

/** Kullanım alanı */
export interface ProductApplication {
  title: string;                // "Depo & Lojistik"
  description?: string;         // Opsiyonel açıklama
  icon?: string;                // Lucide icon adı
}

// =============================================================================
// "NEDEN BU ÜRÜN" TİPLERİ
// =============================================================================

/** Risk azaltıcı satış argümanı */
export interface ProductBenefit {
  title: string;                // "Uzun Ömür"
  description: string;          // "Daha az bıçak değişimi..."
  icon?: string;
}

// =============================================================================
// GENİŞLETİLMİŞ ÜRÜN TİPİ
// =============================================================================

/** Profesyonel ürün detay sayfası için genişletilmiş ürün tipi */
export interface ProductExtended {
  // Temel Bilgiler
  id: string;
  slug: string;
  slugEN?: string;              // English slug for non-TR locales (SEO)
  code: string;                 // "H006 001 X01"
  name: string;                 // "RETRO LIGHT KNIFE"
  subtitle?: string;            // "Döküm Metal El Bıçağı"

  // Kategorizasyon
  categoryId: string;
  subcategoryId?: string;
  tags?: string[];              // ["iş güvenliği", "döküm metal"]

  // Açıklamalar
  shortDescription: string;     // Kısa açıklama (liste/hero için)
  longDescription?: string;     // Detaylı açıklama (HTML destekli)

  // Görseller (Yeni yapı)
  images: ProductImages;

  // Teknik Özellikler (Yeni yapı)
  specs: ProductSpec[];

  // Orijin & Kalite Göstergeleri
  origin?: {
    brand?: string;             // "Durham Duplex"
    country?: string;           // "England"
    city?: string;              // "Sheffield"
  };

  // Kullanım Alanları
  applications?: ProductApplication[];

  // Neden Bu Ürün (Risk azaltıcı)
  benefits?: ProductBenefit[];

  // Özellikler listesi
  features?: string[];          // ["Ergonomik tasarım", "Uzun ömürlü"]

  // Mevcut Ölçüler (Farklı varyantlar için esnek yapı)
  availableSizes?: string[];    // ["43x22x0.10mm", "43x22x0.15mm", ...]

  // Teknik Ölçü Tablosu (profil karşılaştırma için)
  specTable?: SpecTableData;

  // Sertifikalar
  certifications?: string[];    // ["CE", "ISO 9001"]

  // İlgili Ürünler
  relatedProductIds?: string[];

  // Uyumlu Yedek Parçalar
  compatibleParts?: {
    id: string;
    name: string;
    code: string;
  }[];

  // SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };

  // Durum
  isActive: boolean;
  isFeatured: boolean;
  isNew?: boolean;
  order?: number;

  // Stok (basit)
  inStock?: boolean;
}

// =============================================================================
// ÜRÜN KART GÖRÜNÜMÜ (Liste için)
// =============================================================================

export interface ProductCardData {
  id: string;
  slug: string;
  code: string;
  name: string;
  subtitle?: string;
  thumbnail: string;
  categorySlug: string;
  categoryName: string;
  origin?: string;              // "Sheffield, England"
  isFeatured: boolean;
  isNew?: boolean;
}

// =============================================================================
// DEFAULT PLACEHOLDER
// =============================================================================

export const PLACEHOLDER_IMAGE: ProductImage = {
  src: '/images/products/placeholder.jpg',
  alt: 'Ürün görseli hazırlanıyor',
  width: 1920,
  height: 1080,
};

export const PLACEHOLDER_IMAGES: ProductImages = {
  main: PLACEHOLDER_IMAGE,
  gallery: [],
  thumbnail: {
    src: '/images/products/placeholder-thumb.jpg',
    alt: 'Ürün görseli hazırlanıyor',
    width: 640,
    height: 360,
  },
};

