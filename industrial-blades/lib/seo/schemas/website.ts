// WebSite & ItemList Schema.org generators
import { siteConfig } from '../../config'
import { type Locale } from '../../i18n/config'
import { BRAND_NAME, SCHEMA_LANGUAGE } from '../../i18n/locale-utils'
import {
  getDomainUrl,

} from '../../config/domains'

/**
 * Locale-aware website descriptions
 * Yeni dil eklendiÃ„Å¸inde buraya ekleyin Ã¢â‚¬â€ fallback EN'e dÃƒÂ¼Ã…Å¸er
 */
const WEBSITE_DESCRIPTIONS: Record<string, string> = {
  tr: 'EndÃƒÂ¼striyel kesici bÃ„Â±ÃƒÂ§aklar ve sanayi jiletleri',
  en: 'Industrial cutting blades and razors',
  ar: 'Ã˜Â´Ã™ÂÃ˜Â±Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€Ã™â€šÃ˜Â·Ã˜Â¹ Ã˜Â§Ã™â€Ã˜ÂµÃ™â€ Ã˜Â§Ã˜Â¹Ã™Å Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€Ã˜Â´Ã™ÂÃ˜Â±Ã˜Â§Ã˜Âª',
  ru: 'ÄÅ¸Ã‘â‚¬ÄÂ¾ÄÂ¼Ã‘â€¹Ã‘Ë†ÄÂ»ÄÂµÄÂ½ÄÂ½Ã‘â€¹ÄÂµ Ã‘â‚¬ÄÂµÄÂ¶Ã‘Æ’Ã‘â€°ÄÂ¸ÄÂµ ÄÂ»ÄÂµÄÂ·ÄÂ²ÄÂ¸Ã‘Â ÄÂ¸ ÄÂ½ÄÂ¾ÄÂ¶ÄÂ¸',
  fr: 'Lames de coupe industrielles et rasoirs',
}

/**
 * WebSite Schema with SearchAction
 * Google Sitelinks Search Box iÃƒÂ§in gerekli
 */
export function generateWebsiteSchema(locale: Locale) {
  const domain = getDomainUrl(locale)
  const siteName = BRAND_NAME[locale] || BRAND_NAME.en
  const inLanguage = SCHEMA_LANGUAGE[locale] || SCHEMA_LANGUAGE.en

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    url: domain,
    name: siteName,
    description: WEBSITE_DESCRIPTIONS[locale] || WEBSITE_DESCRIPTIONS.en,
    inLanguage,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
    },
    // Google Sitelinks Search Box Ã¢â‚¬â€ enables search from SERP
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${domain}/${locale}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * ItemList Schema Generator
 * Kategori sayfalarÃ„Â± iÃƒÂ§in - Google ÃƒÂ¼rÃƒÂ¼n carousel
 */
export function generateItemListSchema(
  items: { name: string; url: string; image: string; position: number }[],
  listName: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
      image: item.image,
    })),
  }
}
