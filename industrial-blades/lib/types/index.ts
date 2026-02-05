/**
 * Alya Bıçak - Tip Tanımlamaları
 * Clean Architecture - Single Source of Truth for Types
 */

// Genişletilmiş ürün tipleri
export * from './product.types';

// =============================================================================
// TEMEL TİPLER
// =============================================================================

/** Benzersiz tanımlayıcı için base tip */
export interface BaseEntity {
  id: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/** SEO ve görüntüleme için ortak alanlar */
export interface DisplayInfo {
  name: string;
  description: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
}

// =============================================================================
// ÜRÜN TİPLERİ
// =============================================================================

/** Ürün varyantı - Farklı ölçü/boyutlar için */
export interface ProductVariant {
  id: string;
  sku: string;              // Stok kodu: "AJ-001-020"
  size?: string;            // "0.20mm", "0.25mm", "100x50mm"
  thickness?: string;       // "0.20mm"
  material?: string;        // "Paslanmaz Çelik", "Karbon Çelik"
  specs?: string[];         // Ek özellikler
  inStock: boolean;
  stockQuantity?: number;
}

/** Ürün teknik özellikleri */
export interface ProductSpecifications {
  material?: string;        // "Sheffield Çelik"
  hardness?: string;        // "HRC 58-62"
  coating?: string;         // "Titanyum kaplama"
  edgeAngle?: string;       // "22°"
  dimensions?: string;      // "100x20x0.65mm"
  weight?: string;          // "5g"
  packaging?: string;       // "100 adet/kutu"
}

/** Ana ürün */
export interface Product extends BaseEntity, DisplayInfo {
  code: string;             // Ürün kodu (görüntüleme için)
  categoryId: string;       // Ana kategori ID
  subcategoryId?: string;   // Alt kategori ID (opsiyonel - bazı ürünler doğrudan kategoride)
  brandId?: string;         // Marka ID (Durham Duplex, OLFA vb.)
  
  variants: ProductVariant[];
  specifications: ProductSpecifications;
  
  images?: string[];        // Ürün galeri görselleri (opsiyonel)
  features?: string[];      // Öne çıkan özellikler
  applications?: string[];  // Kullanım alanları
  certifications?: string[]; // ISO, FDA vb.
  availableSizes?: string[]; // Mevcut ölçüler (SEO için: 43x22x0.10mm, 43x22x0.15mm vb.)
  
  isFeatured: boolean;
  isActive: boolean;
  order?: number;
}

// =============================================================================
// KATEGORİ TİPLERİ
// =============================================================================

/** Alt kategori */
export interface SubCategory extends BaseEntity, DisplayInfo {
  parentId: string;         // Ana kategori ID
  icon?: string;            // Lucide icon name
  order: number;
  isActive: boolean;
  seoKeywords?: string[];   // SEO anahtar kelimeleri (opsiyonel)
}

/** Ana kategori */
export interface Category extends BaseEntity, DisplayInfo {
  icon?: string;            // Lucide icon name
  subcategoryIds: string[]; // Alt kategori ID'leri
  order: number;
  isFeatured: boolean;
  isActive: boolean;
}

// =============================================================================
// MARKA TİPLERİ
// =============================================================================

export interface Brand extends BaseEntity, DisplayInfo {
  logo: string;
  website?: string;
  country?: string;
  isPartner: boolean;       // Yetkili distribütör mü?
  partnerSince?: number;    // Yıl
}

// =============================================================================
// SERTİFİKASYON TİPLERİ
// =============================================================================

export interface Certification extends BaseEntity {
  name: string;
  logo?: string;
  description?: string;
  isVerified: boolean;
}

// =============================================================================
// HERO SLIDER TİPLERİ
// =============================================================================

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt?: string; // SEO için görsel açıklaması
  ctaText?: string;
  ctaLink?: string;
  order: number;
  isActive: boolean;
}

// =============================================================================
// VIEW MODELS (Görüntüleme için hesaplanmış tipler)
// =============================================================================

/** Alt kategori görünümü - productCount hesaplanmış */
export interface SubCategoryView extends SubCategory {
  productCount: number;
  products?: Product[];
}

/** Kategori görünümü - alt kategoriler ve ürün sayıları hesaplanmış */
export interface CategoryView extends Category {
  subcategories: SubCategoryView[];
  totalProductCount: number;
}

/** Ürün kartı görünümü - Listeleme için minimal veri */
export interface ProductCardView {
  id: string;
  slug: string;
  name: string;
  code: string;
  image?: string;
  images?: string[];        // Ürün galeri görselleri (opsiyonel)
  categoryName: string;
  subcategoryName: string;
  brandName?: string;
  hasVariants: boolean;
  variantCount: number;
  isFeatured: boolean;
  inStock: boolean;
}

/** Ürün detay görünümü - Tam veri */
export interface ProductDetailView extends Product {
  category: Category;
  subcategory?: SubCategory;  // Opsiyonel - bazı ürünler doğrudan kategoride
  brand?: Brand;
  relatedProducts: ProductCardView[];
}


