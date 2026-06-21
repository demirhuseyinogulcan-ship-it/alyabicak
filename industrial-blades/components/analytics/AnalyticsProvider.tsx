/**
 * Analytics Provider
 *
 * Central hub for all analytics integrations
 * Add this component once in the root layout
 *
 * Includes:
 * - Vercel Analytics (traffic, page views, referrers, countries)
 * - Vercel Speed Insights (Core Web Vitals: LCP, FID, CLS, TTFB, INP)
 * - Google Analytics 4 (traffic, demographics, conversions)
 * - Microsoft Clarity (session recordings, heatmaps, rage clicks)
 *
 * Vercel Dashboard'da görebilecekleriniz:
 * - Page Views & Unique Visitors
 * - Top Pages (en çok ziyaret edilen)
 * - Referrers (Google, sosyal medya, direkt)
 * - Countries & Devices
 * - Core Web Vitals (LCP, FID, CLS, TTFB, INP)
 * - Real Experience Score (0-100)
 *
 * All scripts load with afterInteractive strategy
 * so they don't block initial page render
 */

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from './GoogleAnalytics'
import MicrosoftClarity from './MicrosoftClarity'

export default function AnalyticsProvider() {
  return (
    <>
      {/* Vercel Analytics - Trafik, sayfa görüntüleme, ülkeler */}
      <Analytics />

      {/* Vercel Speed Insights - Core Web Vitals performans metrikleri */}
      <SpeedInsights />

      {/* Google Analytics 4 - Detaylı trafik analizi (GA_MEASUREMENT_ID gerekli) */}
      <GoogleAnalytics />

      {/* Microsoft Clarity - Heatmap, session recording, rage clicks */}
      <MicrosoftClarity />
    </>
  )
}
