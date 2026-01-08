/**
 * Cookie Consent Banner
 * KVKK ve GDPR uyumlu çerez onay bileşeni
 * Sade, minimal ve göz yormayan tasarım
 * i18n destekli
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { useLocale } from '@/lib/i18n/client'

type CookiePreferences = {
  necessary: boolean // Her zaman true
  analytics: boolean
  functional: boolean
}

const COOKIE_CONSENT_KEY = 'cookie-consent'
const COOKIE_PREFERENCES_KEY = 'cookie-preferences'

export default function CookieConsent() {
  const { locale, dictionary } = useLocale()
  const t = dictionary.cookieConsent
  
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
  })

  useEffect(() => {
    // siteConfig'de kapalıysa gösterme
    if (!siteConfig.features.enableCookieConsent) return
    
    // Daha önce onay verilmiş mi kontrol et
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Kısa bir gecikme ile göster (sayfa yüklendikten sonra)
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
    setIsVisible(false)

    // Analytics aktifse, GA başlat (ileride eklenecek)
    if (prefs.analytics) {
      // initializeAnalytics()
    }
  }

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
    })
  }

  const handleAcceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
  }

  if (!isVisible) return null

  // Cookie policy link - standardized English path for all locales
  const cookiePolicyPath = '/cookie-policy'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-steel-200">
        {/* Ana Banner */}
        {!showDetails && (
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-steel-700 leading-relaxed">
                  {t.description}{' '}
                  <Link 
                    href={`/${locale}${cookiePolicyPath}`}
                    className="text-primary-600 hover:underline"
                  >
                    {t.policyLink}
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 text-sm text-steel-600 hover:text-steel-800 border border-steel-300 rounded-lg hover:bg-steel-50 transition-colors"
                >
                  {t.settings}
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 py-2 text-sm text-steel-700 bg-steel-100 hover:bg-steel-200 rounded-lg transition-colors"
                >
                  {t.acceptNecessary}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  {t.acceptAll}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detaylı Ayarlar */}
        {showDetails && (
          <div className="p-4 md:p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-steel-900 mb-2">
                {t.preferencesTitle}
              </h3>
              <p className="text-sm text-steel-600">
                {t.preferencesDescription}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {/* Zorunlu Çerezler */}
              <div className="flex items-start justify-between p-3 bg-steel-50 rounded-lg">
                <div className="flex-1 pr-4">
                  <h4 className="text-sm font-medium text-steel-900">
                    {t.necessary.title}
                  </h4>
                  <p className="text-xs text-steel-600 mt-1">
                    {t.necessary.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-steel-500">{t.alwaysActive}</span>
                </div>
              </div>

              {/* Analitik Çerezler */}
              <div className="flex items-start justify-between p-3 bg-steel-50 rounded-lg">
                <div className="flex-1 pr-4">
                  <h4 className="text-sm font-medium text-steel-900">
                    {t.analytics.title}
                  </h4>
                  <p className="text-xs text-steel-600 mt-1">
                    {t.analytics.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-steel-300 peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600" />
                </label>
              </div>

              {/* İşlevsel Çerezler */}
              <div className="flex items-start justify-between p-3 bg-steel-50 rounded-lg">
                <div className="flex-1 pr-4">
                  <h4 className="text-sm font-medium text-steel-900">
                    {t.functional.title}
                  </h4>
                  <p className="text-xs text-steel-600 mt-1">
                    {t.functional.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        functional: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-steel-300 peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600" />
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-sm text-steel-600 hover:text-steel-800 border border-steel-300 rounded-lg hover:bg-steel-50 transition-colors"
              >
                {t.back}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                {t.savePreferences}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

