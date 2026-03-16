'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ProductWatermark } from './ProductWatermark';
import type { ProductImage } from '@/lib/types/product.types';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const activeImage = images[activeIndex] || images[0];
  
  const goToNext = useCallback(() => {
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);
  
  const goToPrev = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'Escape') setIsLightboxOpen(false);
  }, [goToNext, goToPrev]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="space-y-4" onKeyDown={handleKeyDown} tabIndex={0}>
        {/* Ana Görsel */}
        <div 
          className="relative aspect-video bg-white rounded-lg border border-steel-100 overflow-hidden cursor-zoom-in group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt || productName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <ProductWatermark />
          
          {/* Zoom Icon */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <ZoomIn className="w-5 h-5 text-steel-600" />
          </div>
          
          {/* Navigasyon Okları */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="w-5 h-5 text-steel-700" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="w-5 h-5 text-steel-700" />
              </button>
            </>
          )}
        </div>
        
        {/* Thumbnail'ler */}
        {images.length > 1 && (
          <div className="flex gap-3 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative w-16 h-16 rounded-md border-2 overflow-hidden transition-all
                  ${activeIndex === index 
                    ? 'border-primary-500 ring-2 ring-primary-500/20' 
                    : 'border-steel-200 hover:border-steel-300'
                  }
                `}
                aria-label={`Görsel ${index + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `${productName} - Görsel ${index + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
        
        {/* Görsel sayısı */}
        {images.length > 1 && (
          <p className="text-center text-xs text-steel-400">
            {activeIndex + 1} / {images.length}
          </p>
        )}
      </div>
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Kapat butonu */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Kapat"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Görsel */}
          <div 
            className="relative w-full max-w-5xl aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt || productName}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          
          {/* Navigasyon */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
          
          {/* Thumbnail bar */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}
                  className={`
                    w-2 h-2 rounded-full transition-all
                    ${activeIndex === index ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'}
                  `}
                  aria-label={`Görsel ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

