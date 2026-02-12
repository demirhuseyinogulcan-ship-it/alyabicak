// WebSite & ItemList Schema.org generators
import { siteConfig } from '../../config'
import { type Locale } from '../../i18n/config'
import { BRAND_NAME, SCHEMA_LANGUAGE } from '../../i18n/locale-utils'
import {
  getDomainUrl,
  type SupportedLocale
} from '../../config/domains'

/**
 * WebSite Schema with SearchAction
 * Google Sitelinks Search Box için gerekli
 */
export function generateWebsiteSchema(locale: Locale) {
  const domain = getDomainUrl(locale as SupportedLocale)
  const siteName = BRAND_NAME[locale] || BRAND_NAME.en
  const inLanguage = SCHEMA_LANGUAGE[locale] || SCHEMA_LANGUAGE.en

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    url: domain,
    name: siteName,
    description: locale === 'tr'
      ? 'Endüstriyel kesici bıçaklar ve sanayi jiletleri'
      : locale === 'ar'
        ? 'شفرات القطع الصناعية والشفرات'
        : locale === 'ru'
          ? 'Промышленные режущие лезвия и ножи'
          : locale === 'fr'
            ? 'Lames de coupe industrielles et rasoirs'
            : 'Industrial cutting blades and razors',
    inLanguage,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
    },
  }
}

/**
 * ItemList Schema Generator
 * Kategori sayfaları için - Google ürün carousel
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
