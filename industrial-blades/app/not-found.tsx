/**
 * 404 Not Found Page
 * Global 404 - cookies'den locale okuyarak çok dilli destek
 * 
 * Not: Bu sayfa Server Component olduğu için cookies() kullanıyoruz.
 * Next.js App Router'da not-found.tsx özel bir dosya olduğundan
 * [locale] klasörüne taşınamaz, bu yüzden burada cookie okuyoruz.
 */

import Link from 'next/link'
import { cookies } from 'next/headers'
import { Home, Search } from 'lucide-react'
import { Button } from '@/components/ui'
import { i18nConfig, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export default async function NotFound() {
  // Cookie'den locale oku, yoksa default kullan
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  const locale = (localeCookie && i18nConfig.locales.includes(localeCookie as Locale)) 
    ? localeCookie as Locale 
    : i18nConfig.defaultLocale
  
  const dict = await getDictionary(locale)
  const t = dict.notFoundPage
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <span className="text-[180px] md:text-[240px] font-bold text-steel-100 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            {t.subtitle}
          </h1>
          <p className="text-lg text-steel-600 mb-8 max-w-md mx-auto">
            {t.description}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${locale}`} size="lg" icon={Home} iconPosition="left">
              {t.backHome}
            </Button>
            <Button href={`/${locale}/kategoriler`} variant="outline" size="lg">
              {t.browseProducts}
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-steel-200">
            <p className="text-sm text-steel-500 mb-4">{t.popularPages}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`/${locale}/kategoriler/sanayi-jiletleri`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t.industrialBlades}
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href={`/${locale}/kategoriler/makina-bicaklari`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t.machineKnives}
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href={`/${locale}/danismanlik`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t.consulting}
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href={`/${locale}/iletisim`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

