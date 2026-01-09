/**
 * Product Translations - Export Aggregator
 */

import { productsTr, type ProductTranslation } from './tr';
import { productsEn } from './en';
import { productsAr } from './ar';
import { productsRu } from './ru';

export type { ProductTranslation };

export const productTranslations: Record<string, Record<string, ProductTranslation>> = {
  tr: productsTr,
  en: productsEn,
  ar: productsAr,
  ru: productsRu,
};

export { productsTr, productsEn, productsAr, productsRu };
