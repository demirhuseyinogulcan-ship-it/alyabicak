/**
 * Product Translations - Export Aggregator
 */

import { productsTr, type ProductTranslation } from './tr';
import { productsEn } from './en';
import { productsAr } from './ar';

export type { ProductTranslation };

export const productTranslations: Record<string, Record<string, ProductTranslation>> = {
  tr: productsTr,
  en: productsEn,
  ar: productsAr,
};

export { productsTr, productsEn, productsAr };
