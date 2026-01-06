import { generateMetadata } from '@/lib/seo'
import { categoryService } from '@/lib/services'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Ürün Kategorileri',
  description: 'Alya Bıçak ürün kategorileri. Sanayi jiletleri, makina bıçakları, iş güvenliği bıçakları ve daha fazlası.',
  keywords: ['kategoriler', 'ürünler', 'sanayi jiletleri', 'makina bıçakları'],
  url: 'https://www.alyabicak.com/kategoriler',
})

export default function CategoriesPage() {
  const categories = categoryService.getAllCategoriesWithCounts()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ürün Kategorilerimiz
            </h1>
            <p className="text-xl text-steel-200">
              Her sektör için özel olarak tasarlanmış, yüksek kaliteli endüstriyel kesici bıçaklar
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/kategoriler/${category.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Category Image */}
                <div className="relative h-64 bg-gradient-to-br from-steel-200 to-steel-300">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="w-24 h-24 text-steel-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 via-steel-900/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-steel-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Subcategories Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.id}
                        className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded"
                      >
                        {sub.name}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded">
                        +{category.subcategories.length - 3} daha
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-steel-200">
                    <span className="text-sm text-steel-600">
                      {category.subcategories.length} alt kategori • {category.totalProductCount} ürün
                    </span>
                    <ArrowRight className="w-5 h-5 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal ve uyumlu */}
      <section className="py-10 bg-steel-50 border-t border-steel-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-steel-900 mb-1">
                Aradığınızı Bulamadınız mı?
              </h2>
              <p className="text-steel-600 text-sm">
                Özel üretim ve tasarım hizmetlerimizle ihtiyacınıza özel çözümler sunuyoruz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/danismanlik"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all"
              >
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

