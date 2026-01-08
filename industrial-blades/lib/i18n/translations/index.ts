/**
 * Data Translations - Central Export
 * 
 * Bu dosya tüm veri çevirilerini merkezi olarak yönetir.
 * UI çevirileri (dictionaries) ile veri çevirileri (translations) ayrıdır.
 * 
 * YENİ DİL EKLEMEK İÇİN:
 * 1. hero-slides/ klasörüne yeni dosya ekleyin (örn: zh.ts)
 * 2. categories/ klasörüne yeni dosya ekleyin (örn: zh.ts)
 * 3. products/ klasörüne yeni dosya ekleyin (örn: zh.ts)
 * 4. Her klasörün index.ts dosyasına import ekleyin
 * 5. lib/i18n/config.ts dosyasına yeni locale ekleyin
 * 
 * KULLANIM:
 * import { getHeroSlideTranslation, getCategoryTranslation, getProductTranslation } from '@/lib/i18n/translations';
 * 
 * const slide = getHeroSlideTranslation('slide-1', 'en');
 * const category = getCategoryTranslation('industrial-blades', 'en');
 * const product = getProductTranslation('b101', 'en');
 */

import { heroSlidesTranslations, type HeroSlideTranslations } from './hero-slides';
import { categoryTranslations, subcategoryTranslations, type CategoryTranslations, type SubcategoryTranslations } from './categories';
import { productTranslations, type ProductTranslation } from './products';

// =============================================================================
// HERO SLIDES
// =============================================================================

export function getHeroSlideTranslation(
  slideId: string, 
  locale: string
): { title: string; subtitle: string; description: string; ctaText: string } | undefined {
  const translations = heroSlidesTranslations[locale] || heroSlidesTranslations['tr'];
  return translations[slideId as keyof typeof translations];
}

export function getAllHeroSlidesTranslations(locale: string): HeroSlideTranslations {
  return heroSlidesTranslations[locale] || heroSlidesTranslations['tr'];
}

// =============================================================================
// CATEGORIES
// =============================================================================

export function getCategoryTranslation(
  categoryId: string, 
  locale: string
): { name: string; description: string } | undefined {
  const translations = categoryTranslations[locale] || categoryTranslations['tr'];
  return translations[categoryId as keyof typeof translations];
}

export function getSubcategoryTranslation(
  subcategoryId: string, 
  locale: string
): { name: string; description: string } | undefined {
  const translations = subcategoryTranslations[locale] || subcategoryTranslations['tr'];
  return translations[subcategoryId as keyof typeof translations];
}

export function getAllCategoryTranslations(locale: string): CategoryTranslations {
  return categoryTranslations[locale] || categoryTranslations['tr'];
}

export function getAllSubcategoryTranslations(locale: string): SubcategoryTranslations {
  return subcategoryTranslations[locale] || subcategoryTranslations['tr'];
}

// =============================================================================
// PRODUCTS
// =============================================================================

export function getProductTranslation(
  productId: string,
  locale: string
): ProductTranslation | undefined {
  const translations = productTranslations[locale];
  if (!translations) return undefined;
  return translations[productId];
}

export function getAllProductTranslations(locale: string): Record<string, ProductTranslation> {
  return productTranslations[locale] || {};
}

// =============================================================================
// UTILITY - Batch Translation
// =============================================================================

/**
 * Birden fazla kategoriyi aynı anda çevir
 * Performance için batch işlem
 */
export function translateCategories<T extends { id: string; name: string; description: string }>(
  items: T[],
  locale: string
): T[] {
  const translations = categoryTranslations[locale] || categoryTranslations['tr'];
  
  return items.map(item => {
    const translation = translations[item.id as keyof typeof translations];
    if (translation) {
      return {
        ...item,
        name: translation.name,
        description: translation.description,
      };
    }
    return item;
  });
}

/**
 * Birden fazla alt kategoriyi aynı anda çevir
 */
export function translateSubcategories<T extends { id: string; name: string; description: string }>(
  items: T[],
  locale: string
): T[] {
  const translations = subcategoryTranslations[locale] || subcategoryTranslations['tr'];
  
  return items.map(item => {
    const translation = translations[item.id as keyof typeof translations];
    if (translation) {
      return {
        ...item,
        name: translation.name,
        description: translation.description,
      };
    }
    return item;
  });
}

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type { HeroSlideTranslations, CategoryTranslations, SubcategoryTranslations, ProductTranslation };

// Re-export raw data for direct access if needed
export { heroSlidesTranslations, categoryTranslations, subcategoryTranslations, productTranslations };
