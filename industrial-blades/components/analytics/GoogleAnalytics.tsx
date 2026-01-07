/**
 * Google Analytics 4 Integration
 * 
 * Tracks: Page views, user demographics, device info, session duration
 * Strategy: afterInteractive - loads after page is interactive (no blocking)
 * 
 * Setup: Replace GA_MEASUREMENT_ID in .env.local
 */

'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  // Don't render if no measurement ID configured
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
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
