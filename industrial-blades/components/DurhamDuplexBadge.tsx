'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/i18n/client'

export default function DurhamDuplexBadge() {
  const { locale, dictionary: dict } = useLocale();
  const t = dict.durhamDuplex;

  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Durham Duplex Logo */}
            <div className="mb-8">
              <Image 
                src="/images/brand/durham-duplex-logo.png" 
                alt="Durham Duplex Logo" 
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            
            <p className="text-xl text-gray-600 mb-6 font-medium">
              {t.tagline}
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              <span className="font-bold text-gray-900">{t.intro}</span> {t.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ISO</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.certifications.isoTitle}</h3>
                  <p className="text-sm text-gray-600">{t.certifications.isoDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FDA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.certifications.fdaTitle}</h3>
                  <p className="text-sm text-gray-600">{t.certifications.fdaDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">USDA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.certifications.usdaTitle}</h3>
                  <p className="text-sm text-gray-600">{t.certifications.usdaDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UK</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.certifications.ukTitle}</h3>
                  <p className="text-sm text-gray-600">{t.certifications.ukDesc}</p>
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/durham-duplex`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/brand/durham-duplex-bicaklari.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 to-transparent">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">115+</div>
                    <div className="text-sm text-gray-300">{t.stats.experience}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-gray-300">{t.stats.products}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">UK</div>
                    <div className="text-sm text-gray-300">{t.stats.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
