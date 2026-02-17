'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, Star, ArrowRight, ChevronLeft, ChevronRight, Package } from 'lucide-react'
import { productService } from '@/lib/services'
import { useLocale } from '@/lib/i18n/client'

export default function BestSellers() {
  const { locale, dictionary: dict } = useLocale()
  const t = dict.bestSellers
  
  // Ürünleri locale ile al (artık çevrilmiş olarak gelir)
  const featuredProducts = productService.getFeaturedCards(locale)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Eğer öne çıkan ürün yoksa, tüm ürünlerden ilk 6'sını göster
  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts 
    : productService.getAll(locale).slice(0, 6).map(p => productService.toCardView(p, locale))

  return (
    <section className="py-20 lg:py-24 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-4">
            {t.title}
          </h2>
          <p className="text-base text-steel-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label={dict.common.previous}
          >
            <ChevronLeft className="w-6 h-6 text-steel-700" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label={dict.common.next}
          >
            <ChevronRight className="w-6 h-6 text-steel-700" />
          </button>

          {/* Products Slider */}
          <div 
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-steel-200 rounded-xl overflow-hidden hover:border-primary-200 hover:shadow-card transition-all duration-300 w-80 flex-shrink-0 flex flex-col"
                >
                  {/* Image Container - 4:3 aspect ratio */}
                  <div className="relative aspect-[4/3] bg-white overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="320px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-steel-50 to-steel-100">
                        <Package className="w-16 h-16 text-steel-300 group-hover:text-primary-400 transition-colors" />
                      </div>
                    )}
                    
                    {/* Quick View */}
                    <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                      <Link
                        href={`/${locale}/products/${product.slug}`}
                        className="px-6 py-3 bg-white hover:bg-primary-600 hover:text-white text-steel-900 rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        {t.viewProduct}
                      </Link>
                    </div>
                  </div>

                  {/* Content — flex-1 ile esner, buton her zaman en altta */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category */}
                    <div className="text-xs text-primary-600 font-semibold mb-2 uppercase tracking-wide line-clamp-1">
                      {product.categoryName}
                    </div>

                    {/* Code */}
                    <div className="text-xs text-steel-400 mb-1">
                      {product.code}
                    </div>

                    {/* Title — sabit 2 satır */}
                    <Link href={`/${locale}/products/${product.slug}`}>
                      <h3 className="text-base font-semibold text-steel-900 mb-3 line-clamp-2 min-h-[3rem] group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Variants — sabit yükseklik (olsun olmasın) */}
                    <div className="h-6 mb-2">
                      {product.hasVariants && (
                        <div className="flex items-center gap-2 text-sm text-steel-600">
                          <span>{product.variantCount} {t.variantOptions}</span>
                        </div>
                      )}
                    </div>

                    {/* Spacer — kalan boşluğu doldurur */}
                    <div className="flex-1" />

                    {/* Stock Status */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? t.inStock : t.outOfStock}
                      </span>
                    </div>

                    {/* CTA Button — her zaman en altta */}
                    <Link
                      href={`/${locale}/products/${product.slug}`}
                      className="w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {t.viewDetails}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/categories`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-steel-900 hover:bg-steel-800 text-white font-medium rounded-lg transition-all hover:shadow-lg"
          >
            {t.viewAllCategories}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
