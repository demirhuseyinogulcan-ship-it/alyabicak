/**
 * Analytics Provider
 * 
 * Central hub for all analytics integrations
 * Add this component once in the root layout
 * 
 * Includes:
 * - Google Analytics 4 (traffic, demographics, conversions)
 * - Microsoft Clarity (session recordings, heatmaps)
 * 
 * All scripts load with afterInteractive strategy
 * so they don't block initial page render
 */

import GoogleAnalytics from './GoogleAnalytics'
import MicrosoftClarity from './MicrosoftClarity'

export default function AnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
    </>
  )
}
