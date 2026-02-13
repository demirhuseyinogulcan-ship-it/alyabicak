// SEO Metadata Generator — locale-aware title, OG, hreflang
import { Metadata } from 'next'
import { siteConfig } from '../config'
import { type Locale } from '../i18n/config'
import { BRAND_NAME } from '../i18n/locale-utils'
import {
  getDomainUrl,
  getHreflangUrls as getHreflangUrlsFromConfig,
  getCanonicalUrl as getCanonicalUrlFromConfig,
  getOGLocale,
  type SupportedLocale
} from '../config/domains'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  locale?: Locale
  path?: string
}

// Re-export from centralized config for backward compatibility
export { getDomainUrl, getHreflangUrls as generateHreflangUrls } from '../config/domains'

/**
 * Locale-aware SEO seed keywords
 * Her locale için ana keyword seti — generateMetadata tüm sayfalara bunları ekler
 */
export const SEO_SEED_KEYWORDS: Record<Locale, string[]> = {
  tr: ['alya bıçak', 'endüstriyel bıçak', 'sanayi jileti', 'kesici bıçak'],
  en: ['alya blade', 'industrial blade', 'industrial razor', 'cutting blade'],
  ar: ['شفرات صناعية', 'شفرات القطع', 'alya blade', 'سكاكين صناعية'],
  ru: ['промышленные лезвия', 'режущие лезвия', 'alya blade', 'промышленные ножи'],
  fr: ['lames industrielles', 'lames de coupe', 'alya blade', 'rasoirs industriels'],
}

// Internal helper
function getCanonicalUrl(locale: Locale, path: string = ''): string {
  return getCanonicalUrlFromConfig(locale as SupportedLocale, path)
}

/**
 * Locale-aware metadata generator
 * 
 * ZORUNLU: `locale` parametresi verilmelidir — tüm SEO sinyallerinin
 * dil tutarlılığı (title suffix, keywords, OG locale, siteName) buna bağlıdır.
 * 
 * ÖNERİLEN: `path` parametresi verilmelidir — hreflang alternates üretimi
 * ve cross-domain canonical URL oluşturmak için gereklidir.
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const locale = (config.locale || 'tr') as Locale
  const brandName = BRAND_NAME[locale] || BRAND_NAME.en

  // Title suffix — locale'e göre doğru marka adı
  const title = config.title.includes('Alya Bıçak') || config.title.includes('Alya Blade')
    ? config.title
    : `${config.title} | ${brandName}`

  // Keywords — locale'e göre seed keywords + sayfa bazlı keywords
  const seedKeywords = SEO_SEED_KEYWORDS[locale] || SEO_SEED_KEYWORDS.en
  const keywords = [
    ...seedKeywords,
    ...(config.keywords || [])
  ].join(', ')

  // OG locale
  const ogLocale = getOGLocale(locale as SupportedLocale)

  // Canonical URL
  const canonicalUrl = config.path
    ? getCanonicalUrl(locale, config.path)
    : config.url

  // Hreflang alternates
  const hreflangUrls = config.path ? getHreflangUrlsFromConfig(config.path) : {}

  // Domain-aware OG image URL
  const domainUrl = getDomainUrl(locale as SupportedLocale)

  return {
    // absolute: layout template'i (%s | Brand) devre dışı bırakır
    // genMeta zaten marka ekini kendisi ekliyor, double-brand olmasın
    title: { absolute: title },
    description: config.description,
    keywords,
    openGraph: {
      title,
      description: config.description,
      url: canonicalUrl,
      siteName: brandName,
      images: config.image ? [{ url: config.image }] : [{ url: `${domainUrl}/images/og-image.jpg` }],
      locale: ogLocale,
      type: config.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: config.description,
      images: config.image ? [config.image] : [`${domainUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(hreflangUrls).length > 0 ? hreflangUrls : undefined,
    },
  }
}
