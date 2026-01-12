/**
 * Google Analytics 4 Integration
 * 
 * Tracks: Page views, user demographics, device info, session duration
 * Strategy: afterInteractive - loads after page is interactive (no blocking)
 * 
 * Multi-domain setup:
 * - alyabicak.com (TR) → G-2BMPKZSXH7
 * - alyablade.com (EN/AR/RU) → G-S8NNTTMKS0
 */

'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_ID_TR = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_TR // alyabicak.com
const GA_ID_GLOBAL = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_GLOBAL // alyablade.com

export default function GoogleAnalytics() {
  const [measurementId, setMeasurementId] = useState<string | null>(null)

  useEffect(() => {
    // Determine which GA ID to use based on hostname
    const hostname = window.location.hostname
    
    if (hostname.includes('alyabicak.com')) {
      setMeasurementId(GA_ID_TR || null)
    } else {
      // alyablade.com or other (EN/AR/RU)
      setMeasurementId(GA_ID_GLOBAL || null)
    }
  }, [])

  // Don't render if no measurement ID configured
  if (!measurementId) {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
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
            page_path: window.location.pathname,
            send_page_view: true,
            // Enhanced measurement - automatic events
            enhanced_measurement: {
              scroll: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true
            }
          });
        `}
      </Script>
    </>
  )
}
