import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { getAllProducts, getProductCountBySubcategory } from '@/lib/data/products'
import { blogService } from '@/lib/data/blog'
import { i18nConfig, type Locale } from '@/lib/i18n/config'
import { getDomainUrl, getHreflangUrls, type SupportedLocale } from '@/lib/config/domains'

/**
 * Domain-aware sitemap
 * 
 * Google Best Practice: Her domain sadece kendi URL'lerini sitemap'e dahil etmeli.
 * - alyabicak.com/sitemap.xml → Sadece /tr/ URL'leri
 * - alyablade.com/sitemap.xml → Sadece /en/, /ar/, /ru/, /fr/ URL'leri
 * 
 * NOT: Ürünü olmayan alt kategoriler sitemap'e dahil edilmez (Soft 404 önleme)
 */

// Generate URL for a specific locale
function getLocalizedUrl(locale: Locale, path: string): string {
  return `${getDomainUrl(locale as SupportedLocale)}/${locale}${path}`
}

// Generate hreflang alternates for all locales
function getAlternates(path: string): Record<string, string> {
  return getHreflangUrls(path)
}

/**
 * Domain'e göre hangi locale'lerin sitemap'e dahil edileceğini belirle
 */
function getLocalesForDomain(host: string): Locale[] {
  const isTurkishDomain = host.includes('alyabicak.com')
  if (isTurkishDomain) {
    return ['tr'] as Locale[]
  }
  // Global domain: TR hariç tüm diller
  return i18nConfig.locales.filter(l => l !== 'tr') as Locale[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Domain-aware: Host header'dan hangi domain olduğunu belirle
  const headersList = await headers()
  const host = headersList.get('host') || headersList.get('x-forwarded-host') || 'alyablade.com'
  const locales = getLocalesForDomain(host)

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
    '/faq',
    '/privacy-policy',
    '/cookie-policy',
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
  // SADECE ürünü olan alt kategorileri dahil et - Soft 404 önleme
  const subcategoriesWithProducts = subcategories.filter(sub => getProductCountBySubcategory(sub.id) > 0)
  
  const subcategoryRoutes = locales.flatMap((locale) =>
    subcategoriesWithProducts.map((subcategory) => {
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

  // Ürün sayfaları (her dil için) — locale-aware slug desteği
  const products = getAllProducts()
  const productRoutes = locales.flatMap((locale) =>
    products.map((product) => {
      // Non-TR locale'lerde slugEN varsa onu kullan
      const localizedSlug = (locale !== 'tr' && product.slugEN) ? product.slugEN : product.slug
      const path = `/products/${localizedSlug}`
      
      // Hreflang: her locale için doğru slug
      const productHreflangs: Record<string, string> = {}
      for (const loc of locales) {
        const locSlug = (loc !== 'tr' && product.slugEN) ? product.slugEN : product.slug
        productHreflangs[loc] = getLocalizedUrl(loc, `/products/${locSlug}`)
      }
      productHreflangs['x-default'] = getLocalizedUrl('en' as Locale, `/products/${product.slugEN || product.slug}`)
      
      return {
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
        alternates: {
          languages: productHreflangs,
        },
      }
    })
  )

  // Blog yazıları (her dil için)
  const blogSlugs = blogService.getAllSlugs()
  const blogRoutes = locales.flatMap((locale) =>
    blogSlugs.map((slug) => {
      const path = `/newsletter/${slug}`
      return {
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: getAlternates(path),
        },
      }
    })
  )

  return [...routes, ...categoryRoutes, ...subcategoryRoutes, ...productRoutes, ...blogRoutes]
}
