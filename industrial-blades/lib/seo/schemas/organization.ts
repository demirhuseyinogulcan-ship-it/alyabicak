// Organization & LocalBusiness Schema.org generators
import { siteConfig } from '../../config'
import { i18nConfig, type Locale } from '../../i18n/config'
import {
  getDomainUrl,

} from '../../config/domains'

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

export function generateOrganizationSchema(locale?: Locale) {
  const availableLanguages = i18nConfig.locales.map(l => languageNameMap[l] || l)
  const domainUrl = locale ? getDomainUrl(locale) : siteConfig.url

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
      areaServed: ['TR', 'EU', 'ME', 'SA', 'AE', 'RU', 'FR', 'GB', 'DE', 'US', 'CN', 'JP', 'KR', 'IN'],
      availableLanguage: availableLanguages,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    parentOrganization: {
      '@type': 'Organization',
      name: 'Alya Tekstil San. ve Tic. Ltd. Ã…Âti.',
      url: 'https://www.alyatekstil.com',
      description: 'Tekstil sektÃƒÂ¶rÃƒÂ¼ne yÃƒÂ¶nelik Makine Yedek ParÃƒÂ§alarÃ„Â± ve EndÃƒÂ¼striyel Kesiciler ÃƒÂ¼reticisi',
    },
  }
}

export function generateLocalBusinessSchema(locale?: Locale) {
  const domainUrl = locale ? getDomainUrl(locale) : siteConfig.url

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
      latitude: 40.9971882,
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
