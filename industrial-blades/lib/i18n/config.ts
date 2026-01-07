/**
 * i18n Configuration
 * Çoklu dil desteği için konfigürasyon dosyası
 */

export const i18nConfig = {
  defaultLocale: 'tr',
  locales: ['tr', 'en', 'ar'] as const,
  localeNames: {
    tr: 'Türkçe',
    en: 'English',
    ar: 'العربية', // Arapça
  },
  localeFlags: {
    tr: '🇹🇷',
    en: '🇬🇧',
    ar: '🇪🇬', // Mısır bayrağı (veya 🇸🇦 Suudi Arabistan)
  },
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

// URL path mapping for each locale
export const localePaths: Record<Locale, Record<string, string>> = {
  tr: {
    home: '',
    products: 'urunler',
    categories: 'kategoriler',
    about: 'hakkimizda',
    contact: 'iletisim',
    blog: 'bulten',
    consulting: 'danismanlik',
    catalog: 'katalog',
    quality: 'kalite-standartlarimiz',
    privacy: 'kvkk',
    cookies: 'cerez-politikasi',
  },
  en: {
    home: '',
    products: 'products',
    categories: 'categories',
    about: 'about',
    contact: 'contact',
    blog: 'blog',
    consulting: 'consulting',
    catalog: 'catalog',
    quality: 'quality-standards',
    privacy: 'privacy-policy',
    cookies: 'cookie-policy',
  },
  ar: {
    home: '',
    products: 'منتجات', // muntajat
    categories: 'فئات', // fi'at
    about: 'من-نحن', // man-nahnu
    contact: 'اتصل-بنا', // ittisal-bina
    blog: 'أخبار', // akhbar
    consulting: 'استشارات', // istisharat
    catalog: 'كتالوج', // kataluj
    quality: 'معايير-الجودة', // ma'ayir-aljawda
    privacy: 'سياسة-الخصوصية', // siyasat-alkhususiya
    cookies: 'سياسة-ملفات-تعريف-الارتباط', // siyasat-cookies
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
