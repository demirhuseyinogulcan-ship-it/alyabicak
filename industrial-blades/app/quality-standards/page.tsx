import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Quality Page - Permanent Redirect (308)
 * SEO: Eski /quality-standards linklerinden gelen trafiği korur
 */
export default function LegacyQualityPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/quality-standards`)
}

