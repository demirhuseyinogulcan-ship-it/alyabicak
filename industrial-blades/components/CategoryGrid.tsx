'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categoryService } from '@/lib/services'
import { SectionHeader, Badge } from '@/components/ui'
import { useLocale } from '@/lib/i18n/client'

export default function CategoryGrid() {
  const { locale, dictionary: dict } = useLocale()
  const t = dict.categoryGrid

  // Kategorileri servis üzerinden al (artık çevrilmiş olarak gelir)
  const categories = categoryService.getAllCategoriesWithCounts(locale)

  return (
    <section id="kategoriler" className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={t.title}
          description={t.subtitle}
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/${locale}/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white border border-steel-200 hover:border-primary-300 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image - GPU accelerated */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform backface-hidden"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-steel-200 to-steel-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/50 to-steel-900/10" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-steel-200 text-sm font-light mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Subcategories Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.subcategories.slice(0, 2).map((sub) => (
                    <span
                      key={sub.id}
                      className="text-xs px-2 py-1 bg-white/15 backdrop-blur-sm text-white rounded-full"
                    >
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-white/15 backdrop-blur-sm text-white rounded-full">
                      +{category.subcategories.length - 2} {t.more}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70 font-light">
                    {category.totalProductCount} {t.products}
                  </span>
                  <div className="flex items-center text-white group-hover:text-primary-300 transition-colors">
                    <span className="text-sm font-semibold mr-2">{t.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
