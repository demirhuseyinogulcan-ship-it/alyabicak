'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { getActiveSlides } from '@/lib/data/hero-slides'
import { useLocale } from '@/lib/i18n/client'
import { getHeroSlideTranslation } from '@/lib/i18n/translations'

export default function HeroSlider() {
  const { locale, dictionary: dict } = useLocale();
  const heroSlides = getActiveSlides()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Touch/Swipe state
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const containerRef = useRef<HTMLElement>(null)

  // Slide verilerini locale'e göre çevir
  const translatedSlides = heroSlides.map(slide => {
    const translation = getHeroSlideTranslation(slide.id, locale);
    if (translation) {
      return {
        ...slide,
        title: translation.title,
        subtitle: translation.subtitle,
        description: translation.description,
        ctaText: translation.ctaText,
        imageAlt: (translation as { imageAlt?: string }).imageAlt,
      };
    }
    return slide;
  });

  // useCallback ile fonksiyonları memo'la - gereksiz re-render'ları önler
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % translatedSlides.length)
  }, [translatedSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + translatedSlides.length) % translatedSlides.length)
  }, [translatedSlides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Touch handlers for swipe gesture
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth
    
    // Edge detection: kenardan 50px içinde swipe'ı yoksay (browser gesture çakışmasını önler)
    const edgeThreshold = 50
    if (touch.clientX < edgeThreshold || touch.clientX > containerWidth - edgeThreshold) {
      touchStartX.current = null
      return
    }
    
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    setIsAutoPlaying(false)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      setIsAutoPlaying(true)
      return
    }
    
    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current
    
    // Minimum swipe distance: 50px, ve yatay hareket dikey hareketten fazla olmalı
    const minSwipeDistance = 50
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        prevSlide() // Sağa kaydır = önceki
      } else {
        nextSlide() // Sola kaydır = sonraki
      }
    }
    
    touchStartX.current = null
    touchStartY.current = null
    setIsAutoPlaying(true)
  }, [nextSlide, prevSlide])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-steel-900 touch-pan-y"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {translatedSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.imageAlt || slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-steel-900/90 via-steel-900/60 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p 
                      className={`text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider mb-4 transition-all duration-700 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: index === currentSlide ? '100ms' : '0ms' 
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Title - FISILDER */}
                  <h1 
                    className={`text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '200ms' : '0ms',
                      fontFamily: 'var(--font-montserrat)'
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Description - FISILDER */}
                  <p 
                    className={`text-base md:text-lg lg:text-xl text-steel-100 mb-8 leading-relaxed transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '400ms' : '0ms' 
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div 
                    className={`flex flex-wrap gap-4 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '600ms' : '0ms' 
                    }}
                  >
                    {/* Primary CTA */}
                    <Link
                      href={slide.ctaLink || `/${locale}/categories`}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg tracking-wide transition-colors duration-200"
                    >
                      <span>{slide.ctaText || dict.consulting.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on md+ */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        aria-label={dict.heroFeatures.prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        aria-label={dict.heroFeatures.nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {translatedSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/70'
            } h-3 rounded-full`}
            aria-label={`${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / translatedSlides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  )
}
