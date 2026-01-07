import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Cookie Policy Page - Permanent Redirect (308)
 * SEO: Eski /cerez-politikasi linklerinden gelen trafiği korur
 */
export default function LegacyCookiePolicyPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/cerez-politikasi`)
}

