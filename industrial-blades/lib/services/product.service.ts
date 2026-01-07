/**
 * Ürün Servisi
 * Ürün işlemlerini yönetir
 * 
 * SOLID: Single Responsibility - Sadece ürün işlemleri
 * 
 * i18n: Tüm methodlar locale parametresi alarak çevrilmiş veri döner.
 * Çeviri dosyaları: lib/i18n/translations/products/
 */

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

// Default locale for backward compatibility
const DEFAULT_LOCALE = 'tr';

// =============================================================================
// ÜRÜN SERVİSİ
// =============================================================================

class ProductService {
  /**
   * Ürünü locale'e göre çevir
   */
  private translateProduct(product: Product, locale: string): Product {
    const translation = getProductTranslation(product.id, locale);
    if (translation) {
      return {
        ...product,
        name: translation.name,
        description: translation.description || product.description,
        features: translation.features || product.features,
        applications: translation.applications || product.applications,
      };
    }
    return product;
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
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    // Kategori ve alt kategori isimlerini de çevir
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = getSubcategoryTranslation(product.subcategoryId, locale);
    
    return {
      id: translatedProduct.id,
      slug: translatedProduct.slug,
      name: translatedProduct.name,
      code: translatedProduct.code,
      image: translatedProduct.image,
      categoryName: catTranslation?.name || category?.name || '',
      subcategoryName: subTranslation?.name || subcategory?.name || '',
      hasVariants: translatedProduct.variants.length > 1,
      variantCount: translatedProduct.variants.length,
      isFeatured: translatedProduct.isFeatured,
      inStock: translatedProduct.variants.some(v => v.inStock),
    };
  }

  /**
   * Ürünü detay görünümüne dönüştür
   */
  toDetailView(product: Product, locale: string = DEFAULT_LOCALE): ProductDetailView | undefined {
    const translatedProduct = this.translateProduct(product, locale);
    const category = getCategoryById(product.categoryId);
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    if (!category || !subcategory) return undefined;

    // Kategori ve alt kategori isimlerini de çevir
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = getSubcategoryTranslation(product.subcategoryId, locale);
    
    const translatedCategory = catTranslation 
      ? { ...category, name: catTranslation.name, description: catTranslation.description }
      : category;
    
    const translatedSubcategory = subTranslation
      ? { ...subcategory, name: subTranslation.name, description: subTranslation.description }
      : subcategory;

    // İlgili ürünleri getir (aynı alt kategoriden)
    const relatedProducts = getProductsBySubcategory(product.subcategoryId)
      .filter(p => p.id !== product.id)
      .slice(0, 4)
      .map(p => this.toCardView(p, locale));

    return {
      ...translatedProduct,
      category: translatedCategory,
      subcategory: translatedSubcategory,
      relatedProducts,
    };
  }

  /**
   * Öne çıkan ürünleri kart görünümü olarak getir
   */
  getFeaturedCards(locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return getFeaturedProducts().map(p => this.toCardView(p, locale));
  }

  /**
   * Kategorideki ürünleri kart görünümü olarak getir
   */
  getCategoryCards(categoryId: string, locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return getProductsByCategory(categoryId).map(p => this.toCardView(p, locale));
  }

  /**
   * Alt kategorideki ürünleri kart görünümü olarak getir
   */
  getSubcategoryCards(subcategoryId: string, locale: string = DEFAULT_LOCALE): ProductCardView[] {
    return getProductsBySubcategory(subcategoryId).map(p => this.toCardView(p, locale));
  }

  /**
   * Ürün breadcrumb'ını oluştur
   */
  getProductBreadcrumb(product: Product, locale: string = DEFAULT_LOCALE): Array<{ name: string; url: string }> {
    const translatedProduct = this.translateProduct(product, locale);
    const category = getCategoryById(product.categoryId);
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    // Çevirileri al
    const catTranslation = getCategoryTranslation(product.categoryId, locale);
    const subTranslation = getSubcategoryTranslation(product.subcategoryId, locale);
    
    const breadcrumb = [
      { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
      { name: locale === 'tr' ? 'Ürünler' : 'Products', url: '/urunler' },
    ];

    if (category) {
      breadcrumb.push({
        name: catTranslation?.name || category.name,
        url: `/kategoriler/${category.slug}`,
      });
    }

    if (subcategory && category) {
      breadcrumb.push({
        name: subTranslation?.name || subcategory.name,
        url: `/kategoriler/${category.slug}/${subcategory.slug}`,
      });
    }

    breadcrumb.push({
      name: translatedProduct.name,
      url: `/urunler/${product.slug}`,
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


