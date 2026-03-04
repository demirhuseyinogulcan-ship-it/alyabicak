/**
 * Katalog Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta } from '@/lib/seo'
import { Download, Eye, Home, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getDomainUrl } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return genMeta({
    title: dict.catalog.title,
    description: dict.catalog.subtitle,
    locale,
    path: '/catalog',
    url: `${getDomainUrl(locale)}/${locale}/catalog`,
  })
}

import { CATALOGS } from '@/lib/data/catalogs'

export default async function CatalogPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const catalogs = CATALOGS[locale]

  // Dict-based labels (i18n Batch 1 migration)
  const l = {
    view: dict.catalog.view,
    download: dict.catalog.download,
    heroTitle: dict.catalog.heroTitle,
    heroDesc: dict.catalog.heroDesc,
  }

  // Catalog Schema (CreativeWork / Publication)
  // "PDF Hack" stratejisi için kritik: Google'a bu PDF'lerin resmi yayın olduğunu bildirir.
  const catalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: l.heroTitle,
    description: l.heroDesc,
    numberOfItems: catalogs.length,
    itemListElement: catalogs.map((catalog, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: catalog.title,
        description: catalog.description,
        url: `${getDomainUrl(locale)}${catalog.pdfUrl}`,
        image: `${getDomainUrl(locale)}${catalog.previewImage}`,
        encodingFormat: 'application/pdf',
        fileFormat: 'application/pdf',
        publisher: {
          '@type': 'Organization',
          name: locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade',
          logo: {
            '@type': 'ImageObject',
            url: `${getDomainUrl(locale)}/images/logo-512.png`
          }
        },
        inLanguage: locale
      }
    }))
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.nav?.home || 'Home',
        item: `${getDomainUrl(locale)}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: l.heroTitle,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="py-3 bg-steel-50 border-b border-steel-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap">
            <li>
              <Link href={`/${locale}`} className="flex items-center gap-1 text-steel-500 hover:text-primary-600 transition-colors">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">{dict.nav.home}</span>
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-steel-300 flex-shrink-0" aria-hidden="true" />
              <span className="text-steel-800 font-medium" aria-current="page">{l.heroTitle}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Minimal Hero */}
      <section className="py-12 bg-steel-50 border-b border-steel-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold text-steel-900 mb-2">
              {l.heroTitle}
            </h1>
            <p className="text-steel-600">
              {l.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogs.map((catalog) => (
              <div
                key={catalog.id}
                className="group bg-white border border-steel-200 rounded-lg overflow-hidden hover:border-primary-200 hover:shadow-sm transition-all"
              >
                {/* PDF Preview Image — clickable */}
                <Link
                  href={`/${locale}/view/${catalog.id}`}
                  className="block relative aspect-[3/4] bg-steel-100 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={catalog.previewImage}
                    alt={catalog.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/40 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-steel-900 mb-1">
                    {catalog.title}
                  </h3>
                  <p className="text-xs text-steel-500 mb-3">
                    {catalog.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/${locale}/view/${catalog.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-steel-900 hover:bg-steel-800 text-white text-xs font-medium rounded transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {l.view}
                    </Link>
                    <a
                      href={catalog.pdfUrl}
                      download
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-steel-200 hover:border-steel-300 text-steel-700 text-xs font-medium rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {l.download}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  )
}
