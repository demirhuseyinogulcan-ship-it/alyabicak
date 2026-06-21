/**
 * 🌐 Domain Configuration - Single Source of Truth (SSOT)
 *
 * Bu dosya tüm domain yapılandırmasının TEK KAYNAĞI'dır.
 * Yeni dil veya domain eklerken SADECE bu dosyayı güncelleyin.
 *
 * ═══════════════════════════════════════════════════════════
 * 📝 YENİ DİL EKLEME REHBERİ (10 Adım):
 * ═══════════════════════════════════════════════════════════
 *
 * ADIM 1 — Config (3 dosya):
 *   ├─ lib/config/domains.ts        → LOCALE_DOMAINS + OG_LOCALE_MAP objesine yeni dili ekle
 *   ├─ lib/config/site.config.ts    → domains objesine yeni dili ekle (tutarlılık)
 *   └─ lib/i18n/config.ts           → locales, localeNames, localeFlags'e ekle
 *
 * ADIM 2 — UI Çevirileri (2 dosya):
 *   ├─ lib/i18n/dictionaries/xx.ts  → en.ts'i kopyala, tüm 468 key'i çevir
 *   └─ lib/i18n/dictionaries/index.ts → import + dictionaries objesine ekle
 *
 * ADIM 3 — Veri Çevirileri (6 dosya):
 *   ├─ lib/i18n/translations/products/xx.ts     → Ürün adları, açıklamaları, SEO
 *   ├─ lib/i18n/translations/products/index.ts  → import + productTranslations'a ekle
 *   ├─ lib/i18n/translations/categories/xx.ts   → Kategori adları, açıklamaları
 *   ├─ lib/i18n/translations/categories/index.ts→ import + categoryTranslations'a ekle
 *   ├─ lib/i18n/translations/hero-slides/xx.ts  → Ana sayfa slider çevirileri
 *   └─ lib/i18n/translations/hero-slides/index.ts → import ekle
 *
 * ADIM 4 — Locale Sabitleri (1 dosya):
 *   └─ lib/i18n/locale-utils.ts → BRAND_NAME, DATE_LOCALE, SCHEMA_LANGUAGE,
 *                                  YANDEX_VERIFICATION, WHATSAPP_SITE'a ekle
 *
 * ADIM 5 — Sayfa İçerikleri (6 dosya) — ⚠️ KRİTİK: ATLANIRSA 500 HATASI
 *   ├─ app/[locale]/about/page.tsx           → content objesine yeni dili ekle
 *   ├─ app/[locale]/contact/page.tsx         → labels objesine yeni dili ekle
 *   ├─ app/[locale]/consulting/page.tsx      → content objesine yeni dili ekle
 *   ├─ app/[locale]/quality-standards/page.tsx → content + titles + descriptions'a ekle
 *   ├─ app/[locale]/privacy-policy/page.tsx  → content + titles + descriptions'a ekle
 *   └─ app/[locale]/cookie-policy/page.tsx   → content + titles + descriptions'a ekle
 *
 * ADIM 6 — SEO Schema (3 dosya):
 *   ├─ lib/seo/schemas/product.ts    → SCHEMA_LABELS Record'larına yeni dili ekle
 *   ├─ lib/seo/schemas/website.ts    → WEBSITE_DESCRIPTIONS Record'a yeni dili ekle
 *   └─ lib/seo/schemas/article.ts    → ARTICLE_DEPENDENCIES Record'a yeni dili ekle
 *
 * ADIM 7 — SEO Metadata (1 dosya):
 *   └─ lib/seo/metadata.ts → SEO_SEED_KEYWORDS Record'a yeni dili ekle
 *
 * ADIM 8 — FAQ (1 dosya):
 *   └─ lib/data/faq/locales/xx.json  → tr.json'u kopyala ve çevir
 *
 * ADIM 9 — Doğrulama:
 *   ├─ npm run build           → TypeScript eksik key HATASI verirse düzelt
 *   └─ npm run check-i18n     → Çeviri coverage raporunu kontrol et
 *
 * ADIM 10 — Product page breadcrumb (1 dosya):
 *   └─ app/[locale]/products/[slug]/page.tsx → getCategoryDisplayName fonksiyonuna ekle
 *
 * TOPLAM: ~22 dosya dokunulmalı (TypeScript eksik key'leri yakalayacaktır)
 * ═══════════════════════════════════════════════════════════
 *
 * @example Almanca eklemek için:
 * ```typescript
 * // 1. Bu dosyada:
 * de: {
 *   url: 'https://alyablade.com',
 *   host: 'alyablade.com',
 *   primary: false,
 * },
 *
 * // 2. lib/i18n/config.ts'de:
 * locales: ['tr', 'en', 'ar', 'ru', 'fr', 'de'] as const,
 * localeNames: { ..., de: 'Deutsch' },
 * localeFlags: { ..., de: '🇩🇪' },
 *
 * // 3. lib/i18n/dictionaries/de.ts + index.ts oluştur
 * // 4. lib/i18n/translations/products/de.ts + index.ts
 * // 5. lib/i18n/translations/categories/de.ts + index.ts
 * // 6. lib/i18n/translations/hero-slides/de.ts + index.ts
 * // 7. lib/i18n/locale-utils.ts → Record'lara 'de' ekle
 * ```
 */

// Locale tipini i18n config'den al — tek kaynak (SSOT)
import type { Locale } from '../i18n/config';
export type SupportedLocale = Locale;

/**
 * Domain yapılandırma interface'i
 */
export interface DomainConfig {
  /** Full URL with protocol (https://alyablade.com) */
  url: string;
  /** Domain without protocol (alyablade.com) */
  host: string;
  /** Is this the primary/default domain for SEO? */
  primary: boolean;
}

/**
 * 🎯 LOCALE → DOMAIN MAPPING
 *
 * Her locale için hangi domain kullanılacağını belirler.
 *
 * Strateji:
 * - Türkçe → alyabicak.com (Türkiye pazarı)
 * - Diğer tüm diller → alyablade.com (Global pazar)
 */
export const LOCALE_DOMAINS: Record<SupportedLocale, DomainConfig> = {
  tr: {
    url: 'https://alyabicak.com',
    host: 'alyabicak.com',
    primary: true,
  },
  en: {
    url: 'https://alyablade.com',
    host: 'alyablade.com',
    primary: true,
  },
  ar: {
    url: 'https://alyablade.com',
    host: 'alyablade.com',
    primary: false,
  },
  ru: {
    url: 'https://alyablade.com',
    host: 'alyablade.com',
    primary: false,
  },
  fr: {
    url: 'https://alyablade.com',
    host: 'alyablade.com',
    primary: false,
  },
  // ═══════════════════════════════════════════════════════════
  // 🆕 YENİ DİL EKLEMEK İÇİN BURAYA EKLE:
  // ═══════════════════════════════════════════════════════════
  // de: {
  //   url: 'https://alyablade.com',
  //   host: 'alyablade.com',
  //   primary: false,
  // },
  // es: {
  //   url: 'https://alyablade.com',
  //   host: 'alyablade.com',
  //   primary: false,
  // },
  // zh: {
  //   url: 'https://alyablade.com',  // veya özel Çin domain'i
  //   host: 'alyablade.com',
  //   primary: false,
  // },
};

/**
 * 🔄 DOMAIN → LOCALE REVERSE MAPPING
 *
 * Gelen request'in domain'ine göre varsayılan locale'i belirler.
 * Middleware ve server-side routing için kullanılır.
 */
export const DOMAIN_LOCALES: Record<string, SupportedLocale> = {
  'alyabicak.com': 'tr',
  'www.alyabicak.com': 'tr',
  'alyablade.com': 'en',
  'www.alyablade.com': 'en',
  // Localhost için development
  'localhost': 'tr',
};

/**
 * OpenGraph locale formatları
 * Facebook/LinkedIn için gerekli
 */
export const OG_LOCALE_MAP: Record<SupportedLocale, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  ar: 'ar_EG',
  ru: 'ru_RU',
  fr: 'fr_FR', // Fransa (Kuzey Afrika için de fr_MA, fr_DZ vb. kullanılabilir)
  // Yeni dil eklerken:
  // de: 'de_DE',
  // es: 'es_ES',
  // zh: 'zh_CN',
  // ja: 'ja_JP',
};

/**
 * RTL (Right-to-Left) diller
 * CSS direction ve text-align için kullanılır
 */
export const RTL_LOCALES: SupportedLocale[] = ['ar'];

// ═══════════════════════════════════════════════════════════
// 🛠️ HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

/**
 * Locale için domain URL'ini döndürür (protocol dahil)
 * @example getDomainUrl('tr') → 'https://alyabicak.com'
 */
export function getDomainUrl(locale: SupportedLocale): string {
  return LOCALE_DOMAINS[locale]?.url || LOCALE_DOMAINS.en.url;
}

/**
 * Locale için domain host'unu döndürür (protocol hariç)
 * @example getDomainHost('tr') → 'alyabicak.com'
 */
export function getDomainHost(locale: SupportedLocale): string {
  return LOCALE_DOMAINS[locale]?.host || LOCALE_DOMAINS.en.host;
}

/**
 * Canonical URL oluşturur
 * @example getCanonicalUrl('tr', '/products/b101') → 'https://alyabicak.com/tr/products/b101'
 */
export function getCanonicalUrl(locale: SupportedLocale, path: string = ''): string {
  const domain = getDomainUrl(locale);
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  return `${domain}/${locale}${cleanPath}`;
}

/**
 * Tüm diller için hreflang URL'leri oluşturur
 * SEO için kritik - Google'a tüm dil versiyonlarını bildirir
 *
 * @example getHreflangUrls('/products/b101')
 * {
 *   'tr': 'https://alyabicak.com/tr/products/b101',
 *   'en': 'https://alyablade.com/en/products/b101',
 *   'ar': 'https://alyablade.com/ar/products/b101',
 *   'ru': 'https://alyablade.com/ru/products/b101',
 *   'x-default': 'https://alyablade.com/en/products/b101'
 * }
 */
export function getHreflangUrls(path: string = ''): Record<string, string> {
  const hreflangs: Record<string, string> = {};
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';

  for (const [locale, config] of Object.entries(LOCALE_DOMAINS)) {
    hreflangs[locale] = `${config.url}/${locale}${cleanPath}`;
  }

  // x-default: Dil belirtilmediğinde hangi versiyona yönlendirilmeli
  // Best practice: En geniş kitleye hitap eden dil (genellikle İngilizce)
  hreflangs['x-default'] = `${LOCALE_DOMAINS.en.url}/en${cleanPath}`;

  return hreflangs;
}

/**
 * Belirli bir locale için alternates metadata objesi oluşturur
 * Next.js Metadata API için uyumlu format
 */
export function getAlternatesMetadata(locale: SupportedLocale, path: string = '') {
  return {
    canonical: getCanonicalUrl(locale, path),
    languages: getHreflangUrls(path),
  };
}

/**
 * Domain'den locale'i belirler
 * @example getLocaleFromDomain('alyabicak.com') → 'tr'
 */
export function getLocaleFromDomain(domain: string): SupportedLocale {
  const cleanDomain = domain.replace(/^www\./, '').toLowerCase();
  return DOMAIN_LOCALES[cleanDomain] || DOMAIN_LOCALES[domain] || 'en';
}

/**
 * Locale'in RTL olup olmadığını kontrol eder
 */
export function isRTL(locale: SupportedLocale): boolean {
  return RTL_LOCALES.includes(locale);
}

/**
 * OpenGraph locale formatını döndürür
 */
export function getOGLocale(locale: SupportedLocale): string {
  return OG_LOCALE_MAP[locale] || 'en_US';
}

/**
 * Tüm desteklenen locale'leri döndürür
 */
export function getAllLocales(): SupportedLocale[] {
  return Object.keys(LOCALE_DOMAINS) as SupportedLocale[];
}

/**
 * Tüm domain URL'lerini döndürür (sitemap için)
 */
export function getAllDomainUrls(): string[] {
  const urls = new Set<string>();
  for (const config of Object.values(LOCALE_DOMAINS)) {
    urls.add(config.url);
  }
  return Array.from(urls);
}
