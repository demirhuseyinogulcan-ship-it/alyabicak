'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { getActiveSlides } from '@/lib/data/hero-slides'
import { siteConfig, getWhatsAppUrl } from '@/lib/config'
import { WhatsAppIcon, CheckIcon } from '@/components/icons'
import { useLocale } from '@/lib/i18n/client'
import { getHeroSlideTranslation } from '@/lib/i18n/translations'

export default function HeroSlider() {
  const { locale, dictionary: dict } = useLocale();
  const heroSlides = getActiveSlides()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section 
      className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-steel-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
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
              alt={slide.title}
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
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all shadow-elevated hover:shadow-floating"
                    >
                      <span>{slide.ctaText || dict.consulting.cta}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* WhatsApp */}
                    <a
                      href={getWhatsAppUrl(dict.heroSlider.whatsappMessage.replace('{{title}}', slide.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all shadow-elevated hover:shadow-floating"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Features */}
                  <div 
                    className={`mt-12 flex flex-wrap gap-6 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '800ms' : '0ms' 
                    }}
                  >
                    {[dict.heroFeatures.sheffieldQuality, dict.heroFeatures.customProduction, dict.heroFeatures.fastDelivery].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-white/80">
                        <CheckIcon className="w-6 h-6" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        aria-label={dict.heroFeatures.prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
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
