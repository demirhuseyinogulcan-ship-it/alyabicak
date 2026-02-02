/**
 * Kategori Servisi
 * Kategori ve alt kategori işlemlerini yönetir
 * 
 * SOLID: Single Responsibility - Sadece kategori işlemleri
 * 
 * i18n: Tüm methodlar locale parametresi alarak çevrilmiş veri döner.
 * Çeviri dosyaları: lib/i18n/translations/categories/
 */

import { Category, SubCategory, CategoryView, SubCategoryView } from '../types';
import { 
  CATEGORIES, 
  SUBCATEGORIES, 
  getAllCategories,
  getAllSubcategories,
  getCategoryById,
  getCategoryBySlug,
  getSubcategoryById,
  getSubcategoryBySlug,
  getSubcategoriesByCategory,
  getParentCategory,
} from '../data/categories';
import { getProductCountByCategory, getProductCountBySubcategory, getProductsBySubcategory } from '../data/products';
import { 
  getCategoryTranslation, 
  getSubcategoryTranslation 
} from '../i18n/translations';

// Default locale for backward compatibility
const DEFAULT_LOCALE = 'tr';

// =============================================================================
// KATEGORİ SERVİSİ
// =============================================================================

class CategoryService {
  /**
   * Kategoriyi locale'e göre çevir
   */
  private translateCategory(category: Category, locale: string): Category {
    const translation = getCategoryTranslation(category.id, locale);
    if (translation) {
      return {
        ...category,
        name: translation.name,
        description: translation.description,
      };
    }
    return category;
  }

  /**
   * Alt kategoriyi locale'e göre çevir
   */
  private translateSubcategory(subcategory: SubCategory, locale: string): SubCategory & { seoKeywords?: string[] } {
    const translation = getSubcategoryTranslation(subcategory.id, locale);
    if (translation) {
      return {
        ...subcategory,
        name: translation.name,
        description: translation.description,
        seoKeywords: translation.seoKeywords,
      };
    }
    return subcategory;
  }

  /**
   * Tüm kategorileri view modeli olarak döndür
   * Ürün sayıları hesaplanmış ve çeviriler uygulanmış olarak gelir
   * @param locale - Dil kodu ('tr' | 'en')
   */
  getAllCategoriesWithCounts(locale: string = DEFAULT_LOCALE): CategoryView[] {
    const categories = getAllCategories();
    
    return categories.map(category => this.getCategoryView(category, locale));
  }

  /**
   * Kategori view modelini oluştur
   */
  getCategoryView(category: Category, locale: string = DEFAULT_LOCALE): CategoryView {
    const translatedCategory = this.translateCategory(category, locale);
    const subcategories = this.getSubcategoryViewsByCategory(category.id, locale);
    const totalProductCount = subcategories.reduce((sum, sub) => sum + sub.productCount, 0);
    
    return {
      ...translatedCategory,
      subcategories,
      totalProductCount,
    };
  }

  /**
   * Kategoriye ait alt kategorileri view modeli olarak döndür
   */
  getSubcategoryViewsByCategory(categoryId: string, locale: string = DEFAULT_LOCALE): SubCategoryView[] {
    const subcategories = getSubcategoriesByCategory(categoryId);
    
    return subcategories.map(sub => {
      const translatedSub = this.translateSubcategory(sub, locale);
      return {
        ...translatedSub,
        productCount: getProductCountBySubcategory(sub.id),
      };
    });
  }

  /**
   * Slug'a göre kategori view modeli döndür
   */
  getCategoryViewBySlug(slug: string, locale: string = DEFAULT_LOCALE): CategoryView | undefined {
    const category = getCategoryBySlug(slug);
    if (!category) return undefined;
    
    return this.getCategoryView(category, locale);
  }

  /**
   * Slug'a göre alt kategori view modeli döndür
   */
  getSubcategoryViewBySlug(slug: string, locale: string = DEFAULT_LOCALE): SubCategoryView | undefined {
    const subcategory = getSubcategoryBySlug(slug);
    if (!subcategory) return undefined;
    
    const translatedSub = this.translateSubcategory(subcategory, locale);
    return {
      ...translatedSub,
      productCount: getProductCountBySubcategory(subcategory.id),
      products: getProductsBySubcategory(subcategory.id),
    };
  }

  /**
   * Mega menü için kategori verisi döndür
   * Legacy format ile uyumlu
   */
  getMegaMenuCategories(locale: string = DEFAULT_LOCALE): CategoryView[] {
    return this.getAllCategoriesWithCounts(locale);
  }

  /**
   * Breadcrumb için kategori yolunu döndür
   */
  getCategoryBreadcrumb(categorySlug: string, subcategorySlug?: string, locale: string = DEFAULT_LOCALE): Array<{ name: string; slug: string; url: string }> {
    const breadcrumb: Array<{ name: string; slug: string; url: string }> = [
      { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', slug: '', url: '/' },
      { name: locale === 'tr' ? 'Kategoriler' : 'Categories', slug: 'kategoriler', url: '/categories' },
    ];

    const category = getCategoryBySlug(categorySlug);
    if (category) {
      const translatedCategory = this.translateCategory(category, locale);
      breadcrumb.push({
        name: translatedCategory.name,
        slug: category.slug,
        url: `/categories/${category.slug}`,
      });

      if (subcategorySlug) {
        const subcategory = getSubcategoryBySlug(subcategorySlug);
        if (subcategory) {
          const translatedSub = this.translateSubcategory(subcategory, locale);
          breadcrumb.push({
            name: translatedSub.name,
            slug: subcategory.slug,
            url: `/categories/${category.slug}/${subcategory.slug}`,
          });
        }
      }
    }

    return breadcrumb;
  }

  /**
   * Kategori ID'ye göre doğrudan erişim
   */
  getById(id: string): Category | undefined {
    return getCategoryById(id);
  }

  /**
   * Alt kategori ID'ye göre doğrudan erişim
   */
  getSubcategoryById(id: string): SubCategory | undefined {
    return getSubcategoryById(id);
  }

  /**
   * Alt kategorinin ana kategorisini getir
   */
  getParentCategory(subcategoryId: string): Category | undefined {
    return getParentCategory(subcategoryId);
  }
}

// Singleton instance
export const categoryService = new CategoryService();

// Default export
export default categoryService;


