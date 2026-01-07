import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Quality Page - Permanent Redirect (308)
 * SEO: Eski /kalite-standartlarimiz linklerinden gelen trafiği korur
 */
export default function LegacyQualityPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/kalite-standartlarimiz`)
}

