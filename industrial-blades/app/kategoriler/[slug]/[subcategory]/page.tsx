import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { categoryService, productService } from '@/lib/services'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Filter } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
    subcategory: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  
  const params: { slug: string; subcategory: string }[] = []
  
  categories.forEach(category => {
    subcategories
      .filter(sub => sub.parentId === category.id)
      .forEach(sub => {
        params.push({
          slug: category.slug,
          subcategory: sub.slug,
        })
      })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, subcategory: subcategorySlug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)
  const subcategory = categoryService.getSubcategoryViewBySlug(subcategorySlug)
  
  if (!category || !subcategory) {
    return {}
  }

  return generateSeoMetadata({
    title: `${subcategory.name} | ${category.name}`,
    description: `${subcategory.description} - Alya Bıçak. ${subcategory.name} kategorisinde ${subcategory.productCount} ürün.`,
    keywords: [subcategory.name.toLowerCase(), category.name.toLowerCase(), 'alya bıçak'],
    url: `https://www.alyabicak.com/kategoriler/${category.slug}/${subcategory.slug}`,
  })
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { slug, subcategory: subcategorySlug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)
  const subcategory = categoryService.getSubcategoryViewBySlug(subcategorySlug)

  if (!category || !subcategory) {
    notFound()
  }

  // Bu alt kategorideki ürünleri getir
  const products = productService.getSubcategoryCards(subcategory.id)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.alyabicak.com' },
    { name: 'Kategoriler', url: 'https://www.alyabicak.com/kategoriler' },
    { name: category.name, url: `https://www.alyabicak.com/kategoriler/${category.slug}` },
    { name: subcategory.name, url: `https://www.alyabicak.com/kategoriler/${category.slug}/${subcategory.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-steel-300 mb-4">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/kategoriler" className="hover:text-white">Kategoriler</Link>
              <span className="mx-2">/</span>
              <Link href={`/kategoriler/${category.slug}`} className="hover:text-white">{category.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{subcategory.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{subcategory.name}</h1>
            {subcategory.description && (
              <p className="text-xl text-steel-200 max-w-3xl">{subcategory.description}</p>
            )}
            <div className="mt-4 text-steel-300">
              {products.length} ürün
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-steel-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-steel-900 mb-2">
                  Ürünler
                </h2>
                <p className="text-steel-600">
                  {products.length} ürün bulundu
                </p>
              </div>
              
              {/* Filter Button (placeholder for future) */}
              <button className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-steel-200 rounded-lg text-steel-700 hover:bg-steel-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtrele</span>
              </button>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/urunler/${product.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {/* Image - 16:9 aspect ratio, Lutz tarzı */}
                    <div className="relative aspect-video bg-white overflow-hidden">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-steel-50 to-steel-100">
                          <Package className="w-12 h-12 text-steel-300 group-hover:text-primary-400 transition-colors" />
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                          Stokta Yok
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="text-xs text-primary-600 font-medium mb-1">
                        {product.code}
                      </div>
                      <h3 className="font-semibold text-steel-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      {product.hasVariants && (
                        <div className="text-sm text-steel-500">
                          {product.variantCount} varyant
                        </div>
                      )}
                      <div className="mt-3 pt-3 border-t border-steel-100 flex items-center justify-between">
                        <span className="text-sm text-steel-500">Detayları Gör</span>
                        <ArrowRight className="w-4 h-4 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <Package className="w-16 h-16 text-steel-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-steel-900 mb-2">
                  Henüz ürün eklenmedi
                </h3>
                <p className="text-steel-600 mb-6">
                  Bu kategoride henüz ürün bulunmuyor. Yakında eklenecek!
                </p>
                <Link
                  href={`/kategoriler/${category.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span>Diğer Kategorilere Göz At</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-steel-900 mb-8">
              Diğer {category.name} Alt Kategorileri
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.subcategories
                .filter(sub => sub.id !== subcategory.id)
                .slice(0, 4)
                .map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/kategoriler/${category.slug}/${sub.slug}`}
                    className="group p-4 bg-steel-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <h3 className="font-semibold text-steel-900 group-hover:text-primary-600 transition-colors mb-1">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-steel-500">
                      {sub.productCount} ürün
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Minimal ve uyumlu */}
        <section className="py-10 bg-primary-600 border-t border-primary-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  Aradığınızı bulamadınız mı?
                </h2>
                <p className="text-primary-100 text-sm">
                  Özel üretim ve tasarım hizmetlerimizle ihtiyacınıza özel çözümler sunuyoruz.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/danismanlik"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-steel-50 transition-all"
                >
                  Ücretsiz Danışmanlık Alın
                </Link>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all"
                >
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


