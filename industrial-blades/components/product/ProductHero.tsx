'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
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
  
  // Orijin badge metni
  const originText = product.origin 
    ? `${product.origin.city || ''} ${product.origin.city ? '·' : ''} ${product.origin.country || ''}`.trim()
    : 'Sheffield · England';

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Sol: Görsel Galerisi */}
          <div className="space-y-4">
            {/* Ana Görsel */}
            <div className="relative aspect-square bg-white rounded-xl border border-steel-200 overflow-hidden group shadow-sm">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
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
            
            {/* Orijin Badge - Yıldız yerine */}
            <div className="mt-4 inline-flex items-center gap-2 self-start">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-steel-50 border border-steel-200 rounded-sm">
                <span className="text-xs font-medium text-steel-700">Sheffield Steel</span>
                <span className="w-px h-3 bg-steel-300" />
                <span className="text-xs text-steel-500">{originText}</span>
              </div>
              
              {/* Sertifikalar */}
              {product.certifications && product.certifications.length > 0 && (
                <div className="flex gap-1">
                  {product.certifications.slice(0, 2).map((cert) => (
                    <span 
                      key={cert}
                      className="px-2 py-1 text-xs font-medium text-steel-600 bg-steel-100 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
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
            
            {/* CTA Butonları */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(t.productDetail.emailSubject.replace('{{code}}', product.code).replace('{{name}}', product.name))}&body=${encodeURIComponent(t.productDetail.emailBody.replace(/{{code}}/g, product.code).replace(/{{name}}/g, product.name))}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-steel-900 text-white font-medium rounded-lg hover:bg-steel-800 transition-colors"
              >
                <FileText className="w-5 h-5" />
                {t.productDetail.requestQuote}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {t.productDetail.whatsappChat}
              </a>
            </div>
            
            {/* Alt Bilgi */}
            <p className="mt-4 text-sm text-steel-500">
              {t.productDetail.bulkOrderInfo}
            </p>
            
            {/* Stok Durumu */}
            {product.inStock !== undefined && (
              <div className="mt-6 pt-6 border-t border-steel-100">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-steel-600">
                    {product.inStock ? t.productDetail.inStock : t.productDetail.askStock}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

