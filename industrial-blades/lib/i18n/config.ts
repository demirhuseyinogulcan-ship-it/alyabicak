/**
 * i18n Configuration
 * Çoklu dil desteği için konfigürasyon dosyası
 */

export const i18nConfig = {
  defaultLocale: 'tr',
  locales: ['tr', 'en', 'ar', 'ru', 'fr'] as const,
  localeNames: {
    tr: 'Türkçe',
    en: 'English',
    ar: 'العربية', // Arapça
    ru: 'Русский', // Rusça
    fr: 'Français', // Fransızca
  },
  localeFlags: {
    tr: '🇹🇷',
    en: '🇬🇧',
    ar: '🇪🇬', // Mısır bayrağı (veya 🇸🇦 Suudi Arabistan)
    ru: '🇷🇺', // Rusya bayrağı
    fr: '🇫🇷', // Fransa bayrağı
  },
  // Domain-based routing
  domains: {
    'alyabicak.com': 'tr',      // Türkçe domain
    'www.alyabicak.com': 'tr',
    'alyablade.com': 'en',      // Global domain (default: English)
    'www.alyablade.com': 'en',
  },
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

/**
 * Runtime type guard — string'in geçerli bir Locale olup olmadığını kontrol eder.
 * Kullanım: if (isLocale(value)) { // value artık Locale tipinde }
 */
export function isLocale(value: string): value is Locale {
  return (i18nConfig.locales as readonly string[]).includes(value);
}

/**
 * String → Locale dönüşümü (güvenli).
 * Geçersiz değer gelirse defaultLocale ('tr') döner.
 */
export function ensureLocale(value: string | undefined | null): Locale {
  if (value && isLocale(value)) return value;
  return i18nConfig.defaultLocale as Locale;
}

// Default URL paths — tüm diller için aynı (international SEO consistency)
// Belirli bir dil için farklı path gerekirse localePathOverrides'a ekleyin
const defaultPaths: Record<string, string> = {
  home: '',
  products: 'products',
  categories: 'categories',
  about: 'about',
  contact: 'contact',
  blog: 'newsletter',
  consulting: 'consulting',
  catalog: 'catalog',
  quality: 'quality-standards',
  privacy: 'privacy-policy',
  cookies: 'cookie-policy',
};

// Dile özel path override'ları (gerektiğinde ekleyin)
// Örnek: { tr: { blog: 'bulten' } } → Türkçe'de /tr/bulten kullanılır
const localePathOverrides: Partial<Record<Locale, Partial<Record<string, string>>>> = {
  // Şu an tüm diller aynı path'leri kullanıyor
};

// Programmatic locale paths — yeni dil eklendiğinde otomatik çalışır
export const localePaths: Record<Locale, Record<string, string>> = Object.fromEntries(
  i18nConfig.locales.map(locale => [
    locale,
    { ...defaultPaths, ...(localePathOverrides[locale] || {}) },
  ])
) as Record<Locale, Record<string, string>>;

// Reverse mapping for route resolution
export function getRouteKey(locale: Locale, path: string): string | undefined {
  const paths = localePaths[locale];
  return Object.entries(paths).find(([_, value]) => value === path)?.[0];
}

// Get localized path
export function getLocalizedPath(locale: Locale, routeKey: string): string {
  return localePaths[locale][routeKey] || routeKey;
}
