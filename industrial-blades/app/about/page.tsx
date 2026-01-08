import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy About Page - Permanent Redirect (308)
 * SEO: Eski /about linklerinden gelen trafiği korur
 */
export default function LegacyAboutPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/about`)
}
