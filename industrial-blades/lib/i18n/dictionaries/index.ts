/**
 * Dictionary Loader
 * Dil dosyalarını yükleyen fonksiyon
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

// Sync version for client components
import tr from './tr';
import en from './en';
import ar from './ar';
import ru from './ru';
import fr from './fr';

const dictionariesSync = { tr, en, ar, ru, fr };

export const getDictionarySync = (locale: Locale) => {
  return dictionariesSync[locale];
};

export type Dictionary = typeof tr;
