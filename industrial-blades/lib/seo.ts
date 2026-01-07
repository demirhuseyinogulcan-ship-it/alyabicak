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

  return {
    title,
    description: config.description,
    keywords,
    openGraph: {
      title,
      description: config.description,
      url: config.url,
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
      canonical: config.url,
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

