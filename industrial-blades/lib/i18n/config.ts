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

// URL path mapping for each locale
// Note: All locales now use the same English paths for international SEO consistency
export const localePaths: Record<Locale, Record<string, string>> = {
  tr: {
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
  },
  en: {
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
  },
  ar: {
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
  },
  ru: {
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
  },
  fr: {
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
  },
};

// Reverse mapping for route resolution
export function getRouteKey(locale: Locale, path: string): string | undefined {
  const paths = localePaths[locale];
  return Object.entries(paths).find(([_, value]) => value === path)?.[0];
}

// Get localized path
export function getLocalizedPath(locale: Locale, routeKey: string): string {
  return localePaths[locale][routeKey] || routeKey;
}
