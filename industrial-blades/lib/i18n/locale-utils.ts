/**
 * Locale Utilities — Single Source of Truth for Locale-Specific Constants
 *
 * Bu dosya, dictionary'ye KOYMAMASI gereken sabit değerleri içerir:
 * - Marka adları (SEO tutarlılığı için değişmemeli)
 * - Tarih formatları (Intl API formatı)
 * - BCP 47 dil tag'leri
 * - Yandex verification kodu (domain bazlı)
 *
 * Dictionary'ye gitmesi gereken şeyler (kullanıcıya gösterilen çeviri metni):
 * - UI etiketleri, breadcrumb başlıkları, buton metinleri → dict.xxx
 *
 * YENİ DİL EKLENDİĞİNDE:
 * 1. Her Record'a yeni locale key'ini ekleyin
 * 2. TypeScript eksik key olursa HATA verir — güvenli
 */

import type { Locale } from './config';

/**
 * Marka adı — locale'e göre (SEO için tutarlı olmalı)
 * TR domain: Alya Bıçak | Global domain: Alya Blade
 */
export const BRAND_NAME: Record<Locale, string> = {
  tr: 'Alya Bıçak',
  en: 'Alya Blade',
  ar: 'Alya Blade',
  ru: 'Alya Blade',
  fr: 'Alya Blade',
};

/**
 * Intl.DateTimeFormat için locale tag
 */
export const DATE_LOCALE: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-GB',
  ar: 'ar-EG',
  ru: 'ru-RU',
  fr: 'fr-FR',
};

/**
 * Schema.org inLanguage alanı (BCP 47)
 */
export const SCHEMA_LANGUAGE: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-US',
  ar: 'ar-SA',
  ru: 'ru-RU',
  fr: 'fr-FR',
};

/**
 * Yandex Webmaster verification kodu (domain bazlı, locale bazlı değil)
 * alyabicak.com (TR) ve alyablade.com (Global) için ayrı kodlar
 */
export const YANDEX_VERIFICATION: Record<Locale, string> = {
  tr: '8e6723f3f47b3bed',
  en: '867c9c006bf61590',
  ar: '867c9c006bf61590',
  ru: '867c9c006bf61590',
  fr: '867c9c006bf61590',
};

/**
 * WhatsApp site adı (mesajlarda kullanılan domain)
 */
export const WHATSAPP_SITE: Record<Locale, string> = {
  tr: 'alyabicak.com',
  en: 'alyablade.com',
  ar: 'alyablade.com',
  ru: 'alyablade.com',
  fr: 'alyablade.com',
};

/**
 * Helper: Belirli locale için marka adını döndürür
 */
export function getBrandName(locale: string): string {
  return BRAND_NAME[locale as Locale] || BRAND_NAME.en;
}

/**
 * Helper: Belirli locale için Intl tarih formatı locale'ini döndürür
 */
export function getDateLocale(locale: string): string {
  return DATE_LOCALE[locale as Locale] || DATE_LOCALE.en;
}

/**
 * Helper: Belirli locale için Schema.org inLanguage döndürür
 */
export function getSchemaLanguage(locale: string): string {
  return SCHEMA_LANGUAGE[locale as Locale] || SCHEMA_LANGUAGE.en;
}

/**
 * Helper: Belirli locale için Yandex Webmaster verification kodu döndürür
 */
export function getYandexVerification(locale: string): string {
  return YANDEX_VERIFICATION[locale as Locale] || YANDEX_VERIFICATION.en;
}
