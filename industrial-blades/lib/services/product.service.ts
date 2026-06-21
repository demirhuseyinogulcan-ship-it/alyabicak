/**
 * Ürün Servisi
 * Ürün işlemlerini yönetir
 *
 * SOLID: Single Responsibility - Sadece ürün işlemleri
 *
 * i18n: Tüm methodlar locale parametresi alarak çevrilmiş veri döner.
 * Çeviri dosyaları: lib/i18n/translations/products/
 *
 * PERFORMANCE:
 * - LRU Cache: Çevrilmiş ürünler cache'lenir (max 1000 entry, 10 dk TTL)
 * - Fallback: Çeviri yoksa İngilizce, o da yoksa Türkçe gösterilir
 */

import { LRUCache } from 'lru-cache';
import { Product, ProductCardView, ProductDetailView } from '../types';
import {
  PRODUCTS,
  getAllProducts,
  getFeaturedProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getProductsBySubcategory,
  searchProducts,
  getInStockProducts,
} from '../data/products';
import { getCategoryById, getSubcategoryById } from '../data/categories';
import {
  getProductTranslation,
  getCategoryTranslation,
  getSubcategoryTranslation,
} from '../i18n/translations';
import { getDictionary } from '../i18n/dictionaries';
import type { Locale } from '../i18n/config';

// Default locale for backward compatibility
const DEFAULT_LOCALE = 'tr';

// Fallback zinciri: Çeviri yoksa hangi dile düşülecek?
// Global default: İngilizce (uluslararası standart)
// NOT: Türkçe için fallback YOK - ana veri (JSON) zaten Türkçe
const FALLBACK_CHAIN: Record<string, string[]> = {
  'tr': [],               // Türkçe → Fallback yok (JSON ana veri zaten Türkçe)
  'en': ['tr'],           // İngilizce → Türkçe (TR ana kaynak)
  'ar': ['en', 'tr'],     // Arapça → İngilizce → Türkçe
  'ru': ['en', 'tr'],     // Rusça → İngilizce → Türkçe
  'kk': ['ru', 'en', 'tr'], // Kazakça → Rusça → İngilizce → Türkçe
  'hi': ['en', 'tr'],     // Hintçe → İngilizce → Türkçe
  'zh': ['en', 'tr'],     // Çince → İngilizce → Türkçe
  'de': ['en', 'tr'],     // Almanca → İngilizce → Türkçe
  'fr': ['en', 'tr'],     // Fransızca → İngilizce → Türkçe
  'es': ['en', 'tr'],     // İspanyolca → İngilizce → Türkçe
  'default': ['en', 'tr'], // Diğer tüm diller → İngilizce → Türkçe
};

// LRU Cache yapılandırması
// 20+ dil senaryosu için optimize edilmiş
const CACHE_CONFIG = {
  max: 1000,              // Maksimum 1000 entry (500 ürün × 2 aktif dil)
  ttl: 1000 * 60 * 10,    // 10 dakika TTL (Time To Live)
};

// =============================================================================
// ÜRÜN SERVİSİ
// =============================================================================

class ProductService {
  // LRU Cache: Çevrilmiş ürünleri cache'le
  // Key format: "productId-locale"
  private translationCache = new LRUCache<string, Product>(CACHE_CONFIG);

  /**
   * Fallback zincirini kullanarak çeviri al
   * Çeviri yoksa sırasıyla fallback dilleri dener
   */
  private getTranslationWithFallback(productId: string, locale: string) {
    // 1. İstenen dili dene
    let translation = getProductTranslation(productId, locale);
    if (translation) return { translation, usedLocale: locale };

    // 2. Fallback zincirini dene
    const chain = FALLBACK_CHAIN[locale] || FALLBACK_CHAIN.default;
    for (const fallbackLocale of chain) {
      translation = getProductTranslation(productId, fallbackLocale);
      if (translation) return { translation, usedLocale: fallbackLocale };
    }

    // 3. Hiçbiri yoksa null döndür (orijinal veri kullanılacak)
    return { translation: null, usedLocale: locale };
  }

  /**
   * Ürünü locale'e göre çevir (LRU Cache + Fallback destekli)
   */
  private translateProduct(product: Product, locale: string): Product {
    // Cache'te var mı kontrol et
    const cacheKey = `${product.id}-${locale}`;
    const cached = this.translationCache.get(cacheKey);
    if (cached) return cached;

    // Fallback ile çeviri al
    const { translation } = this.getTranslationWithFallback(product.id, locale);

    // Slug lokalizasyonu: TR dışı locale'ler için slugEN varsa kullan
    const localizedSlug = (locale !== 'tr' && product.slugEN) ? product.slugEN : product.slug;

    let translatedProduct: Product;
    if (translation) {
      translatedProduct = {
        ...product,
        slug: localizedSlug,
        name: translation.name,
        description: translation.description || product.description,
        features: translation.features || product.features,
        applications: translation.applications || product.applications,
      };
    } else {
      translatedProduct = { ...product, slug: localizedSlug };
    }

    // Cache'e kaydet
    this.translationCache.set(cacheKey, translatedProduct);
    return translatedProduct;
  }

  /**
   * Ürünün istenen locale'de gerçek çevirisi var mı kontrol et
   * true dönerse: sayfa noindex yapılmalı (fallback içerik gösteriliyor)
   * TR her zaman false döner (master data zaten Türkçe)
   */
  isUsingFallback(productId: string, locale: string): boolean {
    if (locale === 'tr') return false;
    const { usedLocale } = this.getTranslationWithFallback(productId, locale);
    return usedLocale !== locale;
  }

  /**
   * Tüm ürünleri döndür
   */
  getAll(locale: string = DEFAULT_LOCALE): Product[] {
    return getAllProducts().map(p => this.translateProduct(p, locale));
  }

  /**
   * Öne çıkan ürünleri döndür
   */
  getFeatured(locale: string = DEFAULT_LOCALE): Product[] {
    return getFeaturedProducts().map(p => this.translateProduct(p, locale));
  }

  /**
   * ID'ye göre ürün getir
   */
  getById(id: string, locale: string = DEFAULT_LOCALE): Product | undefined {
    const product = getProductById(id);
    return product ? this.translateProduct(product, locale) : undefined;
  }

  /**
   * Slug'a göre ürün getir
   */
  getBySlug(slug: string, locale: string = DEFAULT_LOCALE): Product | undefined {
    const product = getProductBySlug(slug);
    return product ? this.translateProduct(product, locale) : undefined;
  }

  /**
   * Kategoriye göre ürünleri getir
   */
  getByCategory(categoryId: string, locale: string = DEFAULT_LOCALE): Product[] {
    return getProductsByCategory(categoryId).map(p => this.translateProduct(p, locale));
  }

  /**
   * Alt kategoriye göre ürünleri getir
   */
  getBySubcategory(subcategoryId: string, locale: string = DEFAULT_LOCALE): Product[] {
    return getProductsBySubcategory(subcategoryId).map(p => this.translateProduct(p, locale));
  }

  /**
   * Ürün arama
   */
  search(query: string, locale: string = DEFAULT_LOCALE): Product[] {
    return searchProducts(query).map(p => this.translateProduct(p, locale));
  }

  /**
   * Stokta olan ürünleri getir
   */
  getInStock(locale: string = DEFAULT_LOCALE): Product[] {
    return getInStockProducts().map(p => this.translateProduct(p, locale));
  }

  /**
   * Ürünü kart görünümüne dönüştür (listeleme için)
   */
  toCardView(product: Product, locale: string = DEFAULT_LOCALE): ProductCardView {
    const translatedProduct = this.translateProduct(product, locale);
    const category = getCategoryById(product.categoryId);
    const subcategory = product.subcategoryId ? getSubcategoryById(product.subcategoryId) : undefined;

    // Kategori ve alt kategori isimlerini de çevir
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = product.subcategoryId ? getSubcategoryTranslation(product.subcategoryId, locale) : undefined;

    return {
      id: translatedProduct.id,
      slug: translatedProduct.slug,
      name: translatedProduct.name,
      code: translatedProduct.code,
      image: translatedProduct.image,
      images: (translatedProduct as Product & { images?: string[] }).images,
      categoryName: catTranslation?.name || category?.name || '',
      subcategoryName: subTranslation?.name || subcategory?.name || '',
      hasVariants: translatedProduct.variants.length > 1,
      variantCount: translatedProduct.variants.length,
      isFeatured: translatedProduct.isFeatured,
      inStock: translatedProduct.variants.some(v => v.inStock),
    };
  }

  /**
   * Batch işlem: Birden fazla ürünü tek seferde kart görünümüne dönüştür
   * N+1 problemini önler - kategori çevirilerini bir kez alır
   *
   * @performance Tek tek toCardView() çağırmak yerine bunu kullan
   */
  toCardViewBatch(products: Product[], locale: string = DEFAULT_LOCALE): ProductCardView[] {
    if (products.length === 0) return [];

    // Tüm benzersiz kategori ve alt kategori ID'lerini topla
    const categoryIds = new Set(products.map(p => p.categoryId));
    const subcategoryIds = new Set(products.filter(p => p.subcategoryId).map(p => p.subcategoryId!));

    // Kategori çevirilerini bir kez al (N+1 önleme)
    const categoryCache = new Map<string, { name: string; description: string } | undefined>();
    const subcategoryCache = new Map<string, { name: string; description: string } | undefined>();

    categoryIds.forEach(id => {
      categoryCache.set(id, getCategoryTranslation(id, locale));
    });

    subcategoryIds.forEach(id => {
      subcategoryCache.set(id, getSubcategoryTranslation(id, locale));
    });

    // Şimdi batch dönüşüm yap
    return products.map(product => {
      const translatedProduct = this.translateProduct(product, locale);
      const category = getCategoryById(product.categoryId);
      const subcategory = product.subcategoryId ? getSubcategoryById(product.subcategoryId) : undefined;

      const catTranslation = categoryCache.get(product.categoryId);
      const subTranslation = product.subcategoryId ? subcategoryCache.get(product.subcategoryId) : undefined;

      return {
        id: translatedProduct.id,
        slug: translatedProduct.slug,
        name: translatedProduct.name,
        code: translatedProduct.code,
        image: translatedProduct.image,
        images: (translatedProduct as Product & { images?: string[] }).images,
        categoryName: catTranslation?.name || category?.name || '',
        subcategoryName: subTranslation?.name || subcategory?.name || '',
        hasVariants: translatedProduct.variants.length > 1,
        variantCount: translatedProduct.variants.length,
        isFeatured: translatedProduct.isFeatured,
        inStock: translatedProduct.variants.some(v => v.inStock),
      };
    });
  }

  /**
   * Ürünü detay görünümüne dönüştür
   * @performance relatedProducts için batch işlem kullanır (N+1 önleme)
   */
  toDetailView(product: Product, locale: string = DEFAULT_LOCALE): ProductDetailView | undefined {
    const translatedProduct = this.translateProduct(product, locale);
    const category = getCategoryById(product.categoryId);
    const subcategory = product.subcategoryId ? getSubcategoryById(product.subcategoryId) : undefined;

    // Kategori zorunlu, subcategory opsiyonel
    if (!category) return undefined;

    // Kategori ve alt kategori isimlerini de çevir
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = product.subcategoryId ? getSubcategoryTranslation(product.subcategoryId, locale) : undefined;

    const translatedCategory = catTranslation
      ? { ...category, name: catTranslation.name, description: catTranslation.description }
      : category;

    const translatedSubcategory = subcategory && subTranslation
      ? { ...subcategory, name: subTranslation.name, description: subTranslation.description }
      : subcategory;

    // İlgili ürünleri getir (aynı alt kategoriden veya ana kategoriden)
    // N+1 FIX: Önce filtrele ve slice, sonra BATCH çeviri yap
    const relatedProductsRaw = product.subcategoryId
      ? getProductsBySubcategory(product.subcategoryId)
          .filter(p => p.id !== product.id)
          .slice(0, 4)
      : getProductsByCategory(product.categoryId)
          .filter(p => p.id !== product.id)
          .slice(0, 4);

    // Batch işlem ile çevir (N+1 önleme)
    const relatedProducts = this.toCardViewBatch(relatedProductsRaw, locale);

    return {
      ...translatedProduct,
      category: translatedCategory,
      subcategory: translatedSubcategory,
      relatedProducts,
    };
  }

  /**
   * Öne çıkan ürünleri kart görünümü olarak getir
   * @performance Batch işlem kullanır
   */
  getFeaturedCards(locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return this.toCardViewBatch(getFeaturedProducts(), locale);
  }

  /**
   * Kategorideki ürünleri kart görünümü olarak getir
   * @performance Batch işlem kullanır
   */
  getCategoryCards(categoryId: string, locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return this.toCardViewBatch(getProductsByCategory(categoryId), locale);
  }

  /**
   * Alt kategorideki ürünleri kart görünümü olarak getir
   * @performance Batch işlem kullanır
   */
  getSubcategoryCards(subcategoryId: string, locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return this.toCardViewBatch(getProductsBySubcategory(subcategoryId), locale);
  }

  /**
   * Ürün breadcrumb'ını oluştur (i18n dictionary destekli)
   * URL'ler locale prefix içerir: /{locale}/products/...
   */
  async getProductBreadcrumb(product: Product, locale: string = DEFAULT_LOCALE): Promise<Array<{ name: string; url: string }>> {
    const translatedProduct = this.translateProduct(product, locale);
    const category = getCategoryById(product.categoryId);
    const subcategory = product.subcategoryId ? getSubcategoryById(product.subcategoryId) : undefined;

    // Dictionary'den UI çevirilerini al
    const dict = await getDictionary(locale as Locale);

    // Kategori/alt kategori çevirilerini al
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = product.subcategoryId ? getSubcategoryTranslation(product.subcategoryId, locale) : undefined;

    // Locale prefix (tr için boş, diğerleri için /{locale})
    const localePrefix = `/${locale}`;

    const breadcrumb = [
      { name: dict.breadcrumb.home, url: localePrefix || '/' },
      { name: dict.nav.products, url: `${localePrefix}/products` },
    ];

    if (category) {
      breadcrumb.push({
        name: catTranslation?.name || category.name,
        url: `${localePrefix}/categories/${category.slug}`,
      });
    }

    if (subcategory && category) {
      breadcrumb.push({
        name: subTranslation?.name || subcategory.name,
        url: `${localePrefix}/categories/${category.slug}/${subcategory.slug}`,
      });
    }

    breadcrumb.push({
      name: translatedProduct.name,
      url: `${localePrefix}/products/${product.slug}`,
    });

    return breadcrumb;
  }

  /**
   * Filtreleme ve sıralama
   */
  filter(options: {
    categoryId?: string;
    subcategoryId?: string;
    inStock?: boolean;
    featured?: boolean;
    search?: string;
    sortBy?: 'name' | 'order';
    sortOrder?: 'asc' | 'desc';
    locale?: string;
  }): Product[] {
    const locale = options.locale || DEFAULT_LOCALE;
    let products = getAllProducts();

    if (options.categoryId) {
      products = products.filter(p => p.categoryId === options.categoryId);
    }

    if (options.subcategoryId) {
      products = products.filter(p => p.subcategoryId === options.subcategoryId);
    }

    if (options.inStock === true) {
      products = products.filter(p => p.variants.some(v => v.inStock));
    }

    if (options.featured === true) {
      products = products.filter(p => p.isFeatured);
    }

    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.code.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
      );
    }

    // Sıralama
    const sortBy = options.sortBy || 'order';
    const sortOrder = options.sortOrder || 'asc';

    products.sort((a, b) => {
      let comparison = 0;

      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name, 'tr');
      } else {
        comparison = (a.order || 0) - (b.order || 0);
      }

      return sortOrder === 'desc' ? -comparison : comparison;
    });

    // Çeviri uygula
    return products.map(p => this.translateProduct(p, locale));
  }
}

// Singleton instance
export const productService = new ProductService();

// Default export
export default productService;


