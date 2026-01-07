/**
 * Error Boundary Component
 * Sayfa hatalarında gösterilen bileşen
 * 
 * Client Component olduğu için dictionary'yi prop olarak alamıyoruz.
 * Bu yüzden basit bir çözüm: cookie'den locale okuyup inline çeviri.
 */

'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui'
import { i18nConfig, type Locale } from '@/lib/i18n/config'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

// Inline translations for error page (client component limitation)
const errorTranslations = {
  tr: {
    title: 'Bir Şeyler Ters Gitti',
    description: 'Sayfayı yüklerken bir hata oluştu. Lütfen tekrar deneyin veya ana sayfaya dönün.',
    tryAgain: 'Tekrar Dene',
    backHome: 'Ana Sayfaya Dön',
  },
  en: {
    title: 'Something Went Wrong',
    description: 'An error occurred while loading the page. Please try again or return to the home page.',
    tryAgain: 'Try Again',
    backHome: 'Back to Home',
  },
  ar: {
    title: 'حدث خطأ ما',
    description: 'حدث خطأ أثناء تحميل الصفحة. يرجى المحاولة مرة أخرى أو العودة للصفحة الرئيسية.',
    tryAgain: 'حاول مرة أخرى',
    backHome: 'العودة للرئيسية',
  },
}

export default function Error({ error, reset }: ErrorProps) {
  const [locale, setLocale] = useState<Locale>(i18nConfig.defaultLocale)
  
  useEffect(() => {
    // Client-side'da cookie oku
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] as Locale | undefined
    
    if (cookieLocale && i18nConfig.locales.includes(cookieLocale)) {
      setLocale(cookieLocale)
    }
    
    // Hataları loglama servisi varsa buraya eklenebilir
    console.error('Page Error:', error)
  }, [error])

  const t = errorTranslations[locale]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl md:text-3xl font-bold text-steel-900 mb-4">
            {t.title}
          </h1>
          <p className="text-steel-600 mb-8">
            {t.description}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset} 
              size="lg" 
              icon={RefreshCw} 
              iconPosition="left"
            >
              {t.tryAgain}
            </Button>
            <Button 
              href={`/${locale}`}
              variant="outline" 
              size="lg" 
              icon={Home} 
              iconPosition="left"
            >
              {t.backHome}
            </Button>
          </div>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-sm font-mono text-red-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-500 mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

