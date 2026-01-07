import { MetadataRoute } from 'next'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { getAllProducts } from '@/lib/data/products'
import { i18nConfig } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alyabicak.com'
  const locales = i18nConfig.locales

  // Ana sayfalar (her dil için)
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/danismanlik',
    '/kalite-standartlarimiz',
    '/kategoriler',
    '/bulten',
    '/katalog',
  ]

  // Her dil için static route'lar
  const routes = locales.flatMap((locale) => 
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}/${l}${route}`])
        ),
      },
    }))
  )

  // Kategori sayfaları (her dil için)
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  
  const categoryRoutes = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${baseUrl}/${locale}/kategoriler/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}/${l}/kategoriler/${category.slug}`])
        ),
      },
    }))
  )

  // Alt kategori sayfaları (her dil için)
  const subcategoryRoutes = locales.flatMap((locale) =>
    subcategories.map((subcategory) => {
      const parentCategory = categories.find(c => c.subcategoryIds.includes(subcategory.id))
      return {
        url: `${baseUrl}/${locale}/kategoriler/${parentCategory?.slug}/${subcategory.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}/kategoriler/${parentCategory?.slug}/${subcategory.slug}`])
          ),
        },
      }
    })
  )

  // Ürün sayfaları (her dil için)
  const products = getAllProducts()
  const productRoutes = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${baseUrl}/${locale}/urunler/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}/${l}/urunler/${product.slug}`])
        ),
      },
    }))
  )

  return [...routes, ...categoryRoutes, ...subcategoryRoutes, ...productRoutes]
}
