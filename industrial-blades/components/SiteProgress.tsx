/**
 * Site Progress Indicator
 * Sol alt köşede minimal tamamlanma göstergesi
 */
'use client'

import { useState, useEffect } from 'react'
import { useLocale } from '@/components/providers/LocaleProvider'

const SITE_PROGRESS = 92 // Yüzde olarak tamamlanma oranı

// Çeviriler
const translations = {
  tr: {
    label: 'Geliştiriliyor',
    title: 'Site geliştirme aşamasında'
  },
  en: {
    label: 'In Development',
    title: 'Site is under development'
  },
  ar: {
    label: 'قيد التطوير',
    title: 'الموقع قيد التطوير'
  },
  ru: {
    label: 'В разработке',
    title: 'Сайт находится в разработке'
  }
}

export default function SiteProgress() {
  const { locale } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const t = translations[locale as keyof typeof translations] || translations.en

  useEffect(() => {
    // Sayfa yüklendikten sonra göster
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Progress animasyonu
    const progressTimer = setTimeout(() => {
      setProgress(SITE_PROGRESS)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(progressTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-4 left-4 z-40 opacity-60 hover:opacity-100 transition-opacity duration-300"
      title={t.title}
    >
      <div className="flex flex-col items-start gap-1 bg-steel-900/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
        {/* Label */}
        <span className="text-[9px] font-medium text-steel-400 uppercase tracking-wider">
          {t.label}
        </span>
        
        <div className="flex items-center gap-2">
          {/* Progress Bar */}
          <div className="w-16 h-1.5 bg-steel-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Percentage Text */}
          <span className="text-[10px] font-medium text-steel-300 tabular-nums">
            %{progress}
          </span>
        </div>
      </div>
    </div>
  )
}
