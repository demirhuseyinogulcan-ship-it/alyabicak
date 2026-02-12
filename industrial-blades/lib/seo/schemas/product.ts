// Product Schema.org generators (basic + enhanced)
import { siteConfig } from '../../config'
import { type Locale } from '../../i18n/config'
import { BRAND_NAME } from '../../i18n/locale-utils'
import {
  getDomainUrl,
  type SupportedLocale
} from '../../config/domains'

export function generateProductSchema(product: {
  name: string
  description: string
  image?: string
  category?: string
  brand?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand || siteConfig.name,
    },
    seller: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
    },
  }
}

export interface ProductSchemaInput {
  name: string
  description: string
  code: string
  image: string
  images?: string[]
  brand?: string
  category?: string
  material?: string
  weight?: string
  rating?: number
  ratingCount?: number
  inStock?: boolean
  locale: Locale
  slug: string
  specs?: Array<{ label: string; value: string }>
  origin?: {
    city?: string
    country?: string
    brand?: string
  }
}

/**
 * Spec value'dan ölçü birimi bilgisi çıkar (GEO için)
 */
function extractUnitInfo(value: string): { unitCode?: string; unitText?: string } {
  const v = value.toLowerCase()
  if (v.includes('hrc')) return { unitCode: 'HRC', unitText: 'Rockwell C' }
  if (v.includes('hv') || v.includes('vickers')) return { unitCode: 'HV', unitText: 'Vickers Hardness' }
  if (v.includes('hra')) return { unitCode: 'HRA', unitText: 'Rockwell A' }
  if (/\d+\.?\d*\s*mm\b/i.test(value)) return { unitCode: 'MMT', unitText: 'mm' }
  if (/\d+\.?\d*\s*g\b/i.test(value) && !v.includes('°')) return { unitCode: 'GRM', unitText: 'g' }
  if (/\d+\.?\d*\s*kg\b/i.test(value)) return { unitCode: 'KGM', unitText: 'kg' }
  if (/\d+°/.test(value)) return { unitCode: 'DD', unitText: 'degrees' }
  if (/\d+\s*°?\s*C\b/.test(value) && v.includes('°')) return { unitCode: 'CEL', unitText: '°C' }
  if (/%/.test(value)) return { unitCode: 'P1', unitText: 'percent' }
  if (/\d+\.?\d*\s*("|inch|inç)/i.test(value)) return { unitCode: 'INH', unitText: 'inch' }
  return {}
}

export function generateEnhancedProductSchema(product: ProductSchemaInput) {
  const domain = getDomainUrl(product.locale as SupportedLocale)
  const productUrl = `${domain}/${product.locale}/products/${product.slug}`

  const specProperties = (product.specs || []).map(spec => {
    const unitInfo = extractUnitInfo(spec.value)
    return {
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
      ...(unitInfo.unitCode && { unitCode: unitInfo.unitCode }),
      ...(unitInfo.unitText && { unitText: unitInfo.unitText }),
    }
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.description,
    sku: product.code,
    mpn: product.code,

    image: product.images && product.images.length > 0
      ? [product.image, ...product.images]
      : product.image,

    brand: {
      '@type': 'Brand',
      name: product.origin?.brand || product.brand || BRAND_NAME[product.locale] || BRAND_NAME.en,
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.origin?.brand === 'Durham Duplex' ? 'Durham Duplex' : 'Sheffield Steel',
      address: {
        '@type': 'PostalAddress',
        addressLocality: product.origin?.city || 'Sheffield',
        addressCountry: 'GB',
      },
    },

    ...(product.material && { material: product.material }),
    ...(product.weight && extractUnitInfo(product.weight).unitCode ? {
      weight: {
        '@type': 'QuantitativeValue',
        value: parseFloat(product.weight),
        unitCode: extractUnitInfo(product.weight).unitCode,
      }
    } : (product.weight && { weight: product.weight })),

    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        ratingCount: product.ratingCount || 1,
        bestRating: 5,
        worstRating: 1,
      },
    }),

    offers: {
      '@type': 'Offer',
      url: productUrl,
      availability: product.inStock !== false
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.company.legalName,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: ['TR', 'EU', 'ME', 'SA', 'AE'],
        },
      },
    },

    ...(product.category && { category: product.category }),

    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Menşei',
        value: product.origin?.city
          ? `${product.origin.city}, ${product.origin.country || 'Ingiltere'}`
          : 'Sheffield, İngiltere',
      },
      {
        '@type': 'PropertyValue',
        name: 'Kalite Standardı',
        value: 'ISO 9001:2015',
      },
      ...specProperties,
    ],
  }
}
