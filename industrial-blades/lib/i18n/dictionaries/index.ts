/**
 * Dictionary Loader
 * Dil dosyalarını yükleyen fonksiyon
 *
 * Tüm dictionary yüklemeleri async (dynamic import) ile yapılır.
 * Bu sayede sadece o an ihtiyaç duyulan dilin verileri yüklenir.
 * 15+ dil eklendiğinde ~375 KB eager load önlenir.
 */

import { Locale } from '../config';

const dictionaries = {
  tr: () => import('./tr').then((module) => module.default),
  en: () => import('./en').then((module) => module.default),
  ar: () => import('./ar').then((module) => module.default),
  ru: () => import('./ru').then((module) => module.default),
  fr: () => import('./fr').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

// Type export için sadece tr kullan (build-time, runtime yükü yok)
import type trDict from './tr';
export type Dictionary = typeof trDict;
