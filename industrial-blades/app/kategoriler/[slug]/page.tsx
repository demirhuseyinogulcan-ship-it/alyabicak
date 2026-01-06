import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { categoryService } from '@/lib/services'
import { getAllCategories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)
  
  if (!category) {
    return {}
  }

  return generateSeoMetadata({
    title: category.name,
    description: `${category.description} - Alya Bıçak. ${category.name} kategorisinde ${category.totalProductCount} ürün.`,
    keywords: [category.name.toLowerCase(), 'alya bıçak', 'endüstriyel bıçak'],
    url: `https://www.alyabicak.com/kategoriler/${category.slug}`,
  })
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)

  if (!category) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.alyabicak.com' },
    { name: 'Kategoriler', url: 'https://www.alyabicak.com/kategoriler' },
    { name: category.name, url: `https://www.alyabicak.com/kategoriler/${category.slug}` },
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
              <span className="text-white">{category.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-steel-200 max-w-3xl">{category.description}</p>
            <div className="mt-4 text-steel-300">
              {category.subcategories.length} alt kategori • {category.totalProductCount} ürün
            </div>
          </div>
        </section>

        {/* Subcategories Grid */}
        <section className="py-20 bg-steel-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-steel-900 mb-2">
                Alt Kategoriler
              </h2>
              <p className="text-steel-600">
                {category.name} kategorisinde {category.subcategories.length} alt kategori bulunuyor
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/kategoriler/${category.slug}/${subcategory.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <Package className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  {subcategory.description && (
                    <p className="text-steel-600 text-sm mb-3 line-clamp-2">
                      {subcategory.description}
                    </p>
                  )}
                  <div className="text-sm text-primary-600 font-medium">
                    {subcategory.productCount} ürün
                  </div>
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
                  Size Özel Çözümler
                </h2>
                <p className="text-primary-100 text-sm">
                  Standart ürünler dışında özel tasarım ve üretim hizmeti sunuyoruz.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/danismanlik"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-steel-50 transition-all"
                >
                  Danışmanlık Alın
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white text-sm font-medium rounded-lg hover:bg-primary-800 transition-all"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
