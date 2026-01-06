import { MetadataRoute } from 'next'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { getAllProducts } from '@/lib/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alyabicak.com' // Gerçek domain ile değiştirilecek

  // Ana sayfalar
  const routes = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/danismanlik',
    '/kalite-standartlarimiz',
    '/urunler',
    '/kategoriler',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Kategori sayfaları
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/kategoriler/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Alt kategori sayfaları
  const subcategoryRoutes = subcategories.map((subcategory) => {
    const parentCategory = categories.find(c => c.subcategoryIds.includes(subcategory.id))
    return {
      url: `${baseUrl}/kategoriler/${parentCategory?.slug}/${subcategory.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  })

  // Ürün sayfaları
  const products = getAllProducts()
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...routes, ...categoryRoutes, ...subcategoryRoutes, ...productRoutes]
}
