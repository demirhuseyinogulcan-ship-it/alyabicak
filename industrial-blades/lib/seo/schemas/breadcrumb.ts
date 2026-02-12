// Breadcrumb Schema.org generator
import {
  getDomainUrl,
  type SupportedLocale
} from '../../config/domains'

/**
 * Breadcrumb Schema Generator - Dinamik breadcrumb için
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
  locale?: SupportedLocale
) {
  const domainUrl = locale ? getDomainUrl(locale) : ''

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && {
        item: item.url.startsWith('http') ? item.url : `${domainUrl}${item.url}`
      }),
    })),
  }
}
