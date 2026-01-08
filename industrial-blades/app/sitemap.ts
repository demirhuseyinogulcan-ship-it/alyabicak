import { MetadataRoute } from 'next'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { getAllProducts } from '@/lib/data/products'
import { i18nConfig, type Locale } from '@/lib/i18n/config'

/**
 * Multi-domain sitemap configuration
 * - alyabicak.com → Turkish content
 * - alyablade.com → English & Arabic content
 */

// Domain configuration for each locale
const DOMAIN_CONFIG: Record<Locale, string> = {
  tr: 'https://alyabicak.com',
  en: 'https://alyablade.com',
  ar: 'https://alyablade.com',
}

// Generate URL for a specific locale
function getLocalizedUrl(locale: Locale, path: string): string {
  return `${DOMAIN_CONFIG[locale]}/${locale}${path}`
}

// Generate hreflang alternates for all locales
function getAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    i18nConfig.locales.map(locale => [locale, getLocalizedUrl(locale, path)])
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = i18nConfig.locales

  // Ana sayfalar (her dil için)
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/consulting',
    '/quality-standards',
    '/categories',
    '/newsletter',
    '/catalog',
  ]

  // Her dil için static route'lar
  const routes = locales.flatMap((locale) => 
    staticRoutes.map((route) => ({
      url: getLocalizedUrl(locale, route),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: getAlternates(route),
      },
    }))
  )

  // Kategori sayfaları (her dil için)
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  
  const categoryRoutes = locales.flatMap((locale) =>
    categories.map((category) => {
      const path = `/categories/${category.slug}`
      return {
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
        alternates: {
          languages: getAlternates(path),
        },
      }
    })
  )

  // Alt kategori sayfaları (her dil için)
  const subcategoryRoutes = locales.flatMap((locale) =>
    subcategories.map((subcategory) => {
      const parentCategory = categories.find(c => c.subcategoryIds.includes(subcategory.id))
      const path = `/categories/${parentCategory?.slug}/${subcategory.slug}`
      return {
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
        alternates: {
          languages: getAlternates(path),
        },
      }
    })
  )

  // Ürün sayfaları (her dil için)
  const products = getAllProducts()
  const productRoutes = locales.flatMap((locale) =>
    products.map((product) => {
      const path = `/products/${product.slug}`
      return {
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
        alternates: {
          languages: getAlternates(path),
        },
      }
    })
  )

  return [...routes, ...categoryRoutes, ...subcategoryRoutes, ...productRoutes]
}
