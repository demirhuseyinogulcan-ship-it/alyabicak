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
import { categoriesRu, subcategoriesRu } from './ru';
import { categoriesFr, subcategoriesFr } from './fr';

export const categoryTranslations: Record<string, CategoryTranslations> = {
  tr: categoriesTr,
  en: categoriesEn,
  ar: categoriesAr,
  ru: categoriesRu,
  fr: categoriesFr,
};

export const subcategoryTranslations: Record<string, SubcategoryTranslations> = {
  tr: subcategoriesTr,
  en: subcategoriesEn,
  ar: subcategoriesAr,
  ru: subcategoriesRu,
  fr: subcategoriesFr,
};

export type { CategoryTranslations, SubcategoryTranslations };
