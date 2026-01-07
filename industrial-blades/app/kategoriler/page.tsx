import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Categories Page - Permanent Redirect (308)
 * SEO: Eski /kategoriler URL'lerine gelen trafiği varsayılan locale'e yönlendirir
 */
export default function LegacyCategoriesPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/kategoriler`)
}

