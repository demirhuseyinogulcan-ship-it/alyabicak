// SEO Metadata Generator Ã¢â‚¬â€ locale-aware title, OG, hreflang
import { Metadata } from 'next'
import { siteConfig } from '../config'
import { type Locale, ensureLocale } from '../i18n/config'
import { BRAND_NAME } from '../i18n/locale-utils'
import {
  getDomainUrl,
  getHreflangUrls as getHreflangUrlsFromConfig,
  getCanonicalUrl as getCanonicalUrlFromConfig,
  getOGLocale,

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
 * Her locale iÃƒÂ§in ana keyword seti Ã¢â‚¬â€ generateMetadata tÃƒÂ¼m sayfalara bunlarÃ„Â± ekler
 */
export const SEO_SEED_KEYWORDS: Record<Locale, string[]> = {
  tr: ['alya bÃ„Â±ÃƒÂ§ak', 'endÃƒÂ¼striyel bÃ„Â±ÃƒÂ§ak', 'sanayi jileti', 'kesici bÃ„Â±ÃƒÂ§ak'],
  en: ['alya blade', 'industrial blade', 'industrial razor', 'cutting blade'],
  ar: ['Ã˜Â´Ã™ÂÃ˜Â±Ã˜Â§Ã˜Âª Ã˜ÂµÃ™â€ Ã˜Â§Ã˜Â¹Ã™Å Ã˜Â©', 'Ã˜Â´Ã™ÂÃ˜Â±Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€Ã™â€šÃ˜Â·Ã˜Â¹', 'alya blade', 'Ã˜Â³Ã™Æ’Ã˜Â§Ã™Æ’Ã™Å Ã™â€  Ã˜ÂµÃ™â€ Ã˜Â§Ã˜Â¹Ã™Å Ã˜Â©'],
  ru: ['ÄÂ¿Ã‘â‚¬ÄÂ¾ÄÂ¼Ã‘â€¹Ã‘Ë†ÄÂ»ÄÂµÄÂ½ÄÂ½Ã‘â€¹ÄÂµ ÄÂ»ÄÂµÄÂ·ÄÂ²ÄÂ¸Ã‘Â', 'Ã‘â‚¬ÄÂµÄÂ¶Ã‘Æ’Ã‘â€°ÄÂ¸ÄÂµ ÄÂ»ÄÂµÄÂ·ÄÂ²ÄÂ¸Ã‘Â', 'alya blade', 'ÄÂ¿Ã‘â‚¬ÄÂ¾ÄÂ¼Ã‘â€¹Ã‘Ë†ÄÂ»ÄÂµÄÂ½ÄÂ½Ã‘â€¹ÄÂµ ÄÂ½ÄÂ¾ÄÂ¶ÄÂ¸'],
  fr: ['lames industrielles', 'lames de coupe', 'alya blade', 'rasoirs industriels'],
}

// Internal helper
function getCanonicalUrl(locale: Locale, path: string = ''): string {
  return getCanonicalUrlFromConfig(locale, path)
}

/**
 * Locale-aware metadata generator
 *
 * ZORUNLU: `locale` parametresi verilmelidir Ã¢â‚¬â€ tÃƒÂ¼m SEO sinyallerinin
 * dil tutarlÃ„Â±lÃ„Â±Ã„Å¸Ã„Â± (title suffix, keywords, OG locale, siteName) buna baÃ„Å¸lÃ„Â±dÃ„Â±r.
 *
 * Ãƒâ€“NERÃ„Â°LEN: `path` parametresi verilmelidir Ã¢â‚¬â€ hreflang alternates ÃƒÂ¼retimi
 * ve cross-domain canonical URL oluÃ…Å¸turmak iÃƒÂ§in gereklidir.
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const locale = ensureLocale(config.locale)
  const brandName = BRAND_NAME[locale] || BRAND_NAME.en

  // Title suffix Ã¢â‚¬â€ locale'e gÃƒÂ¶re doÃ„Å¸ru marka adÃ„Â±
  const title = config.title.includes('Alya BÃ„Â±ÃƒÂ§ak') || config.title.includes('Alya Blade')
    ? config.title
    : `${config.title} | ${brandName}`

  // Keywords Ã¢â‚¬â€ locale'e gÃƒÂ¶re seed keywords + sayfa bazlÃ„Â± keywords
  const seedKeywords = SEO_SEED_KEYWORDS[locale] || SEO_SEED_KEYWORDS.en
  const keywords = [
    ...seedKeywords,
    ...(config.keywords || [])
  ].join(', ')

  // OG locale
  const ogLocale = getOGLocale(locale)

  // Canonical URL
  const canonicalUrl = config.path
    ? getCanonicalUrl(locale, config.path)
    : config.url

  // Hreflang alternates
  const hreflangUrls = config.path ? getHreflangUrlsFromConfig(config.path) : {}

  // Domain-aware OG image URL
  const domainUrl = getDomainUrl(locale)

  return {
    // absolute: layout template'i (%s | Brand) devre dÃ„Â±Ã…Å¸Ã„Â± bÃ„Â±rakÃ„Â±r
    // genMeta zaten marka ekini kendisi ekliyor, double-brand olmasÃ„Â±n
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
