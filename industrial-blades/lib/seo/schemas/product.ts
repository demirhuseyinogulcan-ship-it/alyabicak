// Product Schema.org generators (basic + enhanced)
import { siteConfig } from '../../config'
import { type Locale } from '../../i18n/config'
import { BRAND_NAME, SCHEMA_LANGUAGE } from '../../i18n/locale-utils'
import {
  getDomainUrl,

} from '../../config/domains'

/**
 * Locale-aware schema property labels
 * Google Structured Data'da property isimleri locale'e gÃƒÂ¶re deÃ„Å¸iÃ…Å¸meli
 */
const SCHEMA_LABELS: Record<string, Record<string, string>> = {
  origin: {
    tr: 'MenÃ…Å¸ei', en: 'Origin', ar: 'Ã˜Â§Ã™â€Ã™â€¦Ã™â€ Ã˜Â´Ã˜Â£', ru: 'ÄÅ¸Ã‘â‚¬ÄÂ¾ÄÂ¸Ã‘ÂÃ‘â€¦ÄÂ¾ÄÂ¶ÄÂ´ÄÂµÄÂ½ÄÂ¸ÄÂµ', fr: 'Origine',
  },
  qualityStandard: {
    tr: 'Kalite StandardÃ„Â±', en: 'Quality Standard', ar: 'Ã™â€¦Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€Ã˜Â¬Ã™Ë†Ã˜Â¯Ã˜Â©', ru: 'ÄÂ¡Ã‘â€šÄÂ°ÄÂ½ÄÂ´ÄÂ°Ã‘â‚¬Ã‘â€š ÄÂºÄÂ°Ã‘â€¡ÄÂµÃ‘ÂÃ‘â€šÄÂ²ÄÂ°', fr: 'Norme de qualitÃƒÂ©',
  },
  countryName: {
    tr: 'Ã„Â°ngiltere', en: 'England', ar: 'Ã˜Â¥Ã™â€ Ã˜Â¬Ã™â€Ã˜ÂªÃ˜Â±Ã˜Â§', ru: 'ÄÂÄÂ½ÄÂ³ÄÂ»ÄÂ¸Ã‘Â', fr: 'Angleterre',
  },
}

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
 * Spec value'dan ÃƒÂ¶lÃƒÂ§ÃƒÂ¼ birimi bilgisi ÃƒÂ§Ã„Â±kar (GEO iÃƒÂ§in)
 */
function extractUnitInfo(value: string): { unitCode?: string; unitText?: string } {
  const v = value.toLowerCase()
  if (v.includes('hrc')) return { unitCode: 'HRC', unitText: 'Rockwell C' }
  if (v.includes('hv') || v.includes('vickers')) return { unitCode: 'HV', unitText: 'Vickers Hardness' }
  if (v.includes('hra')) return { unitCode: 'HRA', unitText: 'Rockwell A' }
  if (/\d+\.?\d*\s*mm\b/i.test(value)) return { unitCode: 'MMT', unitText: 'mm' }
  if (/\d+\.?\d*\s*g\b/i.test(value) && !v.includes('Ã‚Â°')) return { unitCode: 'GRM', unitText: 'g' }
  if (/\d+\.?\d*\s*kg\b/i.test(value)) return { unitCode: 'KGM', unitText: 'kg' }
  if (/\d+Ã‚Â°/.test(value)) return { unitCode: 'DD', unitText: 'degrees' }
  if (/\d+\s*Ã‚Â°?\s*C\b/.test(value) && v.includes('Ã‚Â°')) return { unitCode: 'CEL', unitText: 'Ã‚Â°C' }
  if (/%/.test(value)) return { unitCode: 'P1', unitText: 'percent' }
  if (/\d+\.?\d*\s*("|inch|inÃƒÂ§)/i.test(value)) return { unitCode: 'INH', unitText: 'inch' }
  return {}
}

/**
 * Map origin country names to ISO 3166-1 alpha-2 codes for Schema.org
 */
function getCountryCode(country?: string): string {
  if (!country) return 'GB'
  const map: Record<string, string> = {
    'England': 'GB', 'UK': 'GB', 'United Kingdom': 'GB', 'Great Britain': 'GB',
    'USA': 'US', 'United States': 'US', 'ABD': 'US',
    'Germany': 'DE', 'Almanya': 'DE',
    'Turkey': 'TR', 'TÃƒÂ¼rkiye': 'TR',
    'Japan': 'JP', 'Japonya': 'JP',
  }
  return map[country] || 'GB'
}

export function generateEnhancedProductSchema(product: ProductSchemaInput) {
  const domain = getDomainUrl(product.locale)
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
      name: product.origin?.brand || 'Sheffield Steel',
      address: {
        '@type': 'PostalAddress',
        addressLocality: product.origin?.city || 'Sheffield',
        addressCountry: getCountryCode(product.origin?.country),
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

    // Language signal Ã¢â‚¬â€ Google needs this to associate schema with correct locale
    inLanguage: SCHEMA_LANGUAGE[product.locale] || SCHEMA_LANGUAGE.en || product.locale,

    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: SCHEMA_LABELS.origin[product.locale] || SCHEMA_LABELS.origin.en,
        value: product.origin?.city
          ? `${product.origin.city}, ${product.origin.country || SCHEMA_LABELS.countryName[product.locale] || SCHEMA_LABELS.countryName.en}`
          : `Sheffield, ${SCHEMA_LABELS.countryName[product.locale] || SCHEMA_LABELS.countryName.en}`,
      },
      {
        '@type': 'PropertyValue',
        name: SCHEMA_LABELS.qualityStandard[product.locale] || SCHEMA_LABELS.qualityStandard.en,
        value: 'ISO 9001:2015',
      },
      ...specProperties,
    ],
  }
}
