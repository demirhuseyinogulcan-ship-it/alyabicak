'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { ProductWatermark } from './ProductWatermark';
import { ImageMagnifier } from './ImageMagnifier';
import type { ProductExtended } from '@/lib/types/product.types';
import { siteConfig, getWhatsAppUrl } from '@/lib/config/site.config';
import { useLocale } from '@/lib/i18n/client';

interface ProductHeroProps {
  product: ProductExtended;
}

export function ProductHero({ product }: ProductHeroProps) {
  const { locale, dictionary: t } = useLocale();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Tüm görselleri birleştir (ana görsel + galeri)
  const allImages = [product.images.main, ...product.images.gallery];
  const activeImage = allImages[activeImageIndex] || product.images.main;
  
  // WhatsApp mesajı - çeviri destekli
  const whatsappMessage = t.productDetail.whatsappMessage
    .replace('{{code}}', product.code)
    .replace('{{name}}', product.name);
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Sol: Görsel Galerisi */}
          <div className="space-y-4 relative">
            {/* Ana Görsel + Magnifier */}
            <div className="relative aspect-video bg-white rounded-xl border border-steel-200 overflow-visible group shadow-sm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <ImageMagnifier
                  src={activeImage.src}
                  alt={activeImage.alt}
                  zoomLevel={2.5}
                  lensSize={140}
                />
                {/* Watermark — normal view only, magnifier panel has no watermark */}
                <ProductWatermark />
              </div>
              
              {/* Galeri Navigasyon Okları - Her Zaman Görünür */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex(prev => 
                      prev === 0 ? allImages.length - 1 : prev - 1
                    )}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-primary-50 border border-steel-200 hover:border-primary-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    aria-label={t.productDetail.prevImage}
                  >
                    <ChevronLeft className="w-6 h-6 text-steel-600 hover:text-primary-600" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex(prev => 
                      prev === allImages.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-primary-50 border border-steel-200 hover:border-primary-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    aria-label={t.productDetail.nextImage}
                  >
                    <ChevronRight className="w-6 h-6 text-steel-600 hover:text-primary-600" />
                  </button>
                </>
              )}
              
              {/* Görsel Sayacı */}
              {allImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-steel-900/70 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {activeImageIndex + 1} / {allImages.length}
                </div>
              )}
              
              {/* Yeni Ürün Badge */}
              {product.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary-600 text-white text-xs font-semibold rounded-md shadow-md">
                  {t.productDetail.new}
                </span>
              )}
            </div>
            
            {/* Thumbnail Galerisi - Geliştirilmiş */}
            {allImages.length > 1 && (
              <div className="flex gap-2 justify-center flex-wrap">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`
                      relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-200
                      ${activeImageIndex === index 
                        ? 'border-primary-500 ring-2 ring-primary-500/30 shadow-md scale-105' 
                        : 'border-steel-200 hover:border-primary-300 hover:shadow-sm'
                      }
                    `}
                    aria-label={`Görsel ${index + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-2 bg-white"
                      sizes="80px"
                    />
                    {/* Aktif gösterge */}
                    {activeImageIndex === index && (
                      <div className="absolute inset-0 bg-primary-500/10" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Sağ: Ürün Bilgileri */}
          <div className="flex flex-col">
            {/* Ürün Kodu */}
            <span className="text-sm font-mono text-steel-500 tracking-wide">
              {product.code}
            </span>
            
            {/* Ürün Adı */}
            <h1 className="mt-2 text-2xl lg:text-3xl font-semibold text-steel-900 tracking-tight">
              {product.name}
            </h1>
            
            {/* Subtitle */}
            {product.subtitle && (
              <p className="mt-1 text-lg text-steel-600">
                {product.subtitle}
              </p>
            )}
            
            {/* Stok Durumu Badge */}
            {product.inStock !== undefined && (
              <div className="mt-4 inline-flex items-center gap-2 self-start px-3 py-1.5 bg-steel-50 border border-steel-200 rounded-sm">
                <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-xs font-medium text-steel-700">
                  {product.inStock ? t.productDetail.inStock : t.productDetail.askStock}
                </span>
              </div>
            )}
            
            {/* Kısa Açıklama */}
            <p className="mt-6 text-steel-600 leading-relaxed">
              {product.shortDescription}
            </p>
            
            {/* Öne Çıkan Özellikler (varsa) */}
            {product.features && product.features.length > 0 && (
              <ul className="mt-4 space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-steel-600">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Mevcut Ölçüler (varsa) */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="mt-6 p-4 bg-steel-50 border border-steel-200 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-steel-700">
                    📐 {t.productDetail.availableSizes || 'Mevcut Ölçüler'}:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium text-steel-700 bg-white border border-steel-300 rounded-md hover:border-primary-400 hover:text-primary-700 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA Butonları */}
            <div className="mt-8 space-y-3">
              {/* Birincil CTA - Teklif İste */}
              <a
                href={`mailto:${siteConfig.contact.email}?cc=${encodeURIComponent('satis3@alyatekstil.com')}&subject=${encodeURIComponent(t.productDetail.emailSubject.replace('{{code}}', product.code).replace('{{name}}', product.name))}&body=${encodeURIComponent(t.productDetail.emailBody.replace(/{{code}}/g, product.code).replace(/{{name}}/g, product.name))}`}
                className="group flex items-center gap-4 w-full p-4 border-2 border-steel-900 rounded-lg hover:bg-steel-900 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-steel-900 group-hover:bg-white rounded-lg transition-colors flex-shrink-0">
                  <FileText className="w-5 h-5 text-white group-hover:text-steel-900 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-steel-900 group-hover:text-white transition-colors">
                    {t.productDetail.requestQuote}
                  </span>
                  <span className="block text-xs text-steel-500 group-hover:text-steel-300 transition-colors">
                    {product.code} · {t.productDetail.bulkOrderInfo}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-steel-400 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>

              {/* İkincil CTA - WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full p-4 border border-steel-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-lg flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-steel-800 group-hover:text-green-700 transition-colors">
                    {t.productDetail.whatsappChat}
                  </span>
                  <span className="block text-xs text-steel-500">
                    {t.productDetail.bulkOrderInfo}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-steel-300 group-hover:text-green-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

