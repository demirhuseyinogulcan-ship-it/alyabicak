// SEO ve Metadata yardımcı fonksiyonları
import { Metadata } from 'next'
import { siteConfig } from './config'
import { i18nConfig, type Locale } from './i18n/config'
import {
  getDomainUrl,
  getHreflangUrls as getHreflangUrlsFromConfig,
  getCanonicalUrl as getCanonicalUrlFromConfig,
  getOGLocale,
  type SupportedLocale
} from './config/domains'

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

// Re-export from centralized config for backward compatibility
// Note: getCanonicalUrl is available from '@/lib/config/domains'
export { getDomainUrl, getHreflangUrls as generateHreflangUrls } from './config/domains'

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

// Note: getCanonicalUrl is now available from '@/lib/config/domains'
// This wrapper is kept for internal use only (not exported)
function getCanonicalUrl(locale: Locale, path: string = ''): string {
  return getCanonicalUrlFromConfig(locale as SupportedLocale, path)
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

  const ogLocale = config.locale ? getOGLocale(config.locale as SupportedLocale) : 'tr_TR'

  // Generate canonical URL based on locale and domain
  const canonicalUrl = config.locale && config.path
    ? getCanonicalUrl(config.locale, config.path)
    : config.url

  // Generate hreflang alternates
  const hreflangUrls = config.path ? getHreflangUrlsFromConfig(config.path) : {}

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

  // Locale'e göre doğru domain URL'i al
  const domainUrl = locale ? getDomainUrl(locale as SupportedLocale) : siteConfig.url

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.legalName,
    alternateName: siteConfig.name,
    url: domainUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${domainUrl}/images/logo-512.png`,
      width: 512,
      height: 512,
    },
    // Ana sayfa görseli - Google Rich Results için
    image: [
      `${domainUrl}/images/endustriyel-bicak-ureticisi-industrial-blade-manufacturer.jpg`,
      `${domainUrl}/images/logo-512.png`,
    ],
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
    // Parent Organization - Ana şirket ilişkisi (SEO için önemli)
    parentOrganization: {
      '@type': 'Organization',
      name: 'Alya Tekstil San. ve Tic. Ltd. Şti.',
      url: 'https://www.alyatekstil.com',
      description: 'Tekstil sektörüne yönelik Makine Yedek Parçaları ve Endüstriyel Kesiciler üreticisi',
    },
  }
}

// LocalBusiness Schema - Yerel SEO için
export function generateLocalBusinessSchema(locale?: Locale) {
  // Locale'e göre doğru domain URL'i al
  const domainUrl = locale ? getDomainUrl(locale as SupportedLocale) : siteConfig.url

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${domainUrl}/#localbusiness`,
    name: siteConfig.company.legalName,
    image: [
      `${domainUrl}/images/endustriyel-bicak-ureticisi-industrial-blade-manufacturer.jpg`,
      `${domainUrl}/images/logo-512.png`,
    ],
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    url: domainUrl,
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
      latitude: 40.9971882, // Dudullu OSB - Alya Tekstil gerçek konum
      longitude: 29.1862235,
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

// NOT: generateBreadcrumbSchema daha kapsamlı versiyon aşağıda tanımlı (line ~514)

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
  const domain = getDomainUrl(locale as SupportedLocale)
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
  const domain = getDomainUrl(product.locale as SupportedLocale)

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

/**
 * Article Schema Generator - Blog/Bülten yazıları için
 * TechArticle kullanılıyor (endüstriyel teknik içerik)
 * 
 * @see https://schema.org/TechArticle
 */
export function generateArticleSchema(post: {
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  author: { name: string; title?: string };
  category: { name: string };
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  slug: string;
}, locale: SupportedLocale, localizedAuthorName?: string) {
  const domainUrl = getDomainUrl(locale)
  const articleUrl = `${domainUrl}/${locale}/newsletter/${post.slug}`
  const imageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${domainUrl}${post.coverImage}`

  // Kelime sayısını hesapla
  const wordCount = post.content
    ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length
    : post.readingTime * 200 // Ortalama 200 kelime/dakika

  // Locale bazlı publisher name
  const publisherName = locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'
  const authorName = localizedAuthorName || publisherName

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: authorName,
      url: domainUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${domainUrl}/images/logo.png`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: domainUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${domainUrl}/images/logo.png`,
        width: 200,
        height: 60,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: post.category.name,
    keywords: post.tags.join(', '),
    wordCount: wordCount,
    inLanguage: locale,
    // TechArticle specific
    proficiencyLevel: 'Beginner', // Genel okuyucu için uygun
    dependencies: 'Endüstriyel üretim bilgisi',
  }
}

/**
 * Breadcrumb Schema Generator - Dinamik breadcrumb için
 * 
 * @see https://schema.org/BreadcrumbList
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

