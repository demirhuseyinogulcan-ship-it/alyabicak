// SEO ve Metadata yardımcı fonksiyonları
import { Metadata } from 'next'
import { siteConfig } from './config'
import { i18nConfig, type Locale } from './i18n/config'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  locale?: Locale
  path?: string // URL path for hreflang generation
}

// Domain configuration for multi-domain i18n
const DOMAIN_CONFIG: Record<Locale, string> = {
  tr: 'https://alyabicak.com',
  en: 'https://alyablade.com',
  ar: 'https://alyablade.com',
  ru: 'https://alyablade.com',
}

// Locale to OpenGraph locale mapping
const ogLocaleMap: Record<string, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  ru: 'ru_RU',
  ar: 'ar_SA',
  zh: 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
}

// Locale to language name mapping
const languageNameMap: Record<string, string> = {
  tr: 'Turkish',
  en: 'English',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
  it: 'Italian',
  ru: 'Russian',
  ar: 'Arabic',
  zh: 'Chinese',
  ja: 'Japanese',
  ko: 'Korean',
}

// Generate hreflang URLs for all locales
export function generateHreflangUrls(path: string = ''): Record<string, string> {
  const hreflangs: Record<string, string> = {}
  
  for (const locale of i18nConfig.locales) {
    const domain = DOMAIN_CONFIG[locale]
    hreflangs[locale] = `${domain}/${locale}${path}`
  }
  
  // x-default should point to English version
  hreflangs['x-default'] = `${DOMAIN_CONFIG.en}/en${path}`
  
  return hreflangs
}

// Get canonical URL based on locale
export function getCanonicalUrl(locale: Locale, path: string = ''): string {
  const domain = DOMAIN_CONFIG[locale]
  return `${domain}/${locale}${path}`
}

export function generateMetadata(config: SEOConfig): Metadata {
  const title = config.title.includes('Alya Bıçak') || config.title.includes('Alya Blade')
    ? config.title 
    : `${config.title} | Alya Bıçak`
  
  const keywords = [
    'alya bıçak',
    'alya bıçakları',
    'endüstriyel bıçak',
    'kesici bıçak',
    ...(config.keywords || [])
  ].join(', ')

  const ogLocale = config.locale ? ogLocaleMap[config.locale] || 'tr_TR' : 'tr_TR'
  
  // Generate canonical URL based on locale and domain
  const canonicalUrl = config.locale && config.path 
    ? getCanonicalUrl(config.locale, config.path)
    : config.url
  
  // Generate hreflang alternates
  const hreflangUrls = config.path ? generateHreflangUrls(config.path) : {}

  return {
    title,
    description: config.description,
    keywords,
    openGraph: {
      title,
      description: config.description,
      url: canonicalUrl,
      siteName: 'Alya Bıçak',
      images: config.image ? [{ url: config.image }] : [{ url: `${siteConfig.url}/images/og-image.jpg` }],
      locale: ogLocale,
      type: config.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: config.description,
      images: config.image ? [config.image] : [`${siteConfig.url}/images/og-image.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(hreflangUrls).length > 0 ? hreflangUrls : undefined,
    },
  }
}

// Structured Data (Schema.org) için JSON-LD - Çok dilli destek
export function generateOrganizationSchema(locale?: Locale) {
  // Mevcut aktif dillerin isimlerini al
  const availableLanguages = i18nConfig.locales.map(l => languageNameMap[l] || l)
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.full,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phoneRaw,
      contactType: 'customer service',
      areaServed: ['TR', 'EU', 'ME'], // Turkey, Europe, Middle East
      availableLanguage: availableLanguages,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  }
}

// LocalBusiness Schema - Yerel SEO için
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.company.legalName,
    image: `${siteConfig.url}/images/logo.png`,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.line1 + ', ' + siteConfig.contact.address.line2,
      addressLocality: siteConfig.contact.address.district,
      addressRegion: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082, // İstanbul koordinatları - gerçek koordinatlar eklenebilir
      longitude: 29.0044,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  }
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
    manufacturer: {
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

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * FAQPage Schema Generator
 * Google Featured Snippets için zorunlu
 * CTR'ı %30-50 artırır
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * WebSite Schema with SearchAction
 * Google Sitelinks Search Box için gerekli
 */
export function generateWebsiteSchema(locale: Locale) {
  const domain = DOMAIN_CONFIG[locale]
  const siteName = locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'
  const inLanguage = locale === 'tr' ? 'tr-TR' : locale === 'ar' ? 'ar-SA' : 'en-US'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    url: domain,
    name: siteName,
    description: locale === 'tr' 
      ? 'Endüstriyel kesici bıçaklar ve sanayi jiletleri' 
      : 'Industrial cutting blades and razors',
    inLanguage,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${domain}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
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

/**
 * Gelişmiş Product Schema
 * aggregateRating, material, weight, dimensions desteği
 */
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
}

export function generateEnhancedProductSchema(product: ProductSchemaInput) {
  const domain = DOMAIN_CONFIG[product.locale]
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${domain}/${product.locale}/products/${product.slug}#product`,
    name: product.name,
    description: product.description,
    sku: product.code,
    mpn: product.code,
    
    // Görseller
    image: product.images && product.images.length > 0 
      ? [product.image, ...product.images]
      : product.image,
    
    // Marka & Üretici
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Alya Bıçak',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Durham Duplex',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sheffield',
        addressCountry: 'GB',
      },
    },
    
    // Fiziksel Özellikler
    ...(product.material && { material: product.material }),
    ...(product.weight && {
      weight: {
        '@type': 'QuantitativeValue',
        value: parseFloat(product.weight),
        unitCode: 'GRM',
      },
    }),
    
    // Değerlendirmeler
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        ratingCount: product.ratingCount || 1,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    
    // Fiyat & Stok
    offers: {
      '@type': 'Offer',
      url: `${domain}/${product.locale}/products/${product.slug}`,
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
    
    // Kategori
    ...(product.category && { category: product.category }),
    
    // Ek Bilgiler
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Menşei',
        value: 'Sheffield, İngiltere',
      },
      {
        '@type': 'PropertyValue', 
        name: 'Kalite Standardı',
        value: 'ISO 9001:2015',
      },
    ],
  }
}

/**
 * SpeakableSpecification Schema Generator
 * Google Assistant ve sesli asistanlar için
 * Hangi içeriğin sesli okunabileceğini belirtir
 * 
 * @see https://schema.org/SpeakableSpecification
 */
export function generateSpeakableSchema(config: {
  url: string;
  name: string;
  description: string;
  cssSelectors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.name,
    url: config.url,
    description: config.description,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: config.cssSelectors || [
        'h1',
        '.hero-description',
        'article p:first-of-type',
        '.product-description',
        '.category-description',
      ],
    },
  }
}

