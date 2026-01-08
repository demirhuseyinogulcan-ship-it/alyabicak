import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Contact Page - Permanent Redirect (308)
 * SEO: Eski /contact linklerinden gelen trafiği korur
 */
export default function LegacyContactPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/contact`)
}
