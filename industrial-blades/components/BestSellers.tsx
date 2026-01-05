'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, Star, ArrowRight, ChevronLeft, ChevronRight, Package } from 'lucide-react'
import { productService } from '@/lib/services'

export default function BestSellers() {
  const featuredProducts = productService.getFeaturedCards()
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
    : productService.getAll().slice(0, 6).map(p => productService.toCardView(p))

  return (
    <section className="py-20 lg:py-24 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-2">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto">
            Müşterilerimizin favorileri, profesyonellerin tercihi
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6 text-steel-700" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label="Sonraki"
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
                  className="group bg-white border border-steel-200 rounded-xl overflow-hidden hover:border-primary-200 hover:shadow-card transition-all duration-300 w-80 flex-shrink-0"
                >
                  {/* Image Container */}
                  <div className="relative h-64 bg-gradient-to-br from-steel-100 to-steel-200 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Package className="w-20 h-20 text-steel-300 group-hover:text-primary-500 transition-colors" />
                      </div>
                    )}
                    
                    {/* Badge - Daha ince font */}
                    {product.isFeatured && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1 z-10">
                        <Star className="w-3 h-3 fill-current" />
                        Öne Çıkan
                      </div>
                    )}

                    {/* Quick View */}
                    <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                      <Link
                        href={`/urunler/${product.slug}`}
                        className="px-6 py-3 bg-white hover:bg-primary-600 hover:text-white text-steel-900 rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        Ürünü İncele
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="text-xs text-primary-600 font-semibold mb-2 uppercase tracking-wide">
                      {product.categoryName}
                    </div>

                    {/* Code */}
                    <div className="text-xs text-steel-400 mb-1">
                      {product.code}
                    </div>

                    {/* Title - Font ağırlığı azaltıldı */}
                    <Link href={`/urunler/${product.slug}`}>
                      <h3 className="text-base font-semibold text-steel-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Variants */}
                    {product.hasVariants && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-steel-600">
                        <span>{product.variantCount} farklı seçenek</span>
                      </div>
                    )}

                    {/* Stock Status */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? 'Stokta Var' : 'Stokta Yok'}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Detayları Gör
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
            href="/kategoriler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-steel-900 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Tüm Ürün Kategorilerini Görüntüle
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
