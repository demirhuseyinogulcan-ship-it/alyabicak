/**
 * Categories Translations Index
 * 
 * Yeni dil eklemek için:
 * 1. Bu klasöre yeni dosya ekleyin (örn: hi.ts - Hindistanca)
 * 2. Aşağıdaki objelere import edin
 */

import { categoriesTr, subcategoriesTr, type CategoryTranslations, type SubcategoryTranslations } from './tr';
import { categoriesEn, subcategoriesEn } from './en';
import { categoriesAr, subcategoriesAr } from './ar';

export const categoryTranslations: Record<string, CategoryTranslations> = {
  tr: categoriesTr,
  en: categoriesEn,
  ar: categoriesAr,
};

export const subcategoryTranslations: Record<string, SubcategoryTranslations> = {
  tr: subcategoriesTr,
  en: subcategoriesEn,
  ar: subcategoriesAr,
};

export type { CategoryTranslations, SubcategoryTranslations };
