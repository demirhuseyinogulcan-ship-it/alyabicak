/**
 * Google Analytics 4 Integration
 * 
 * Tracks: Page views, user demographics, device info, session duration
 * Strategy: afterInteractive - loads after page is interactive (no blocking)
 * 
 * Multi-domain setup:
 * - alyabicak.com (TR) → NEXT_PUBLIC_GA_MEASUREMENT_ID_TR
 * - alyablade.com (EN/AR/RU/FR) → NEXT_PUBLIC_GA_MEASUREMENT_ID_GLOBAL
 * 
 * Enhanced Measurement (scroll, outbound clicks, site search, video, downloads)
 * is configured in GA4 Dashboard → Admin → Data Streams → Enhanced Measurement
 */

'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const GA_ID_TR = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_TR
const GA_ID_GLOBAL = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_GLOBAL

export default function GoogleAnalytics() {
  const [measurementId, setMeasurementId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const hostname = window.location.hostname
    
    if (hostname.includes('alyabicak.com')) {
      setMeasurementId(GA_ID_TR || null)
    } else if (hostname.includes('alyablade.com')) {
      setMeasurementId(GA_ID_GLOBAL || null)
    } else {
      // localhost / preview deployment — her iki ID'den birini kullan
      setMeasurementId(GA_ID_TR || GA_ID_GLOBAL || null)
    }
  }, [])

  // Sayfa değişikliklerinde page_view event'i tetikle (SPA navigasyonu)
  useEffect(() => {
    if (measurementId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [pathname, measurementId])

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
