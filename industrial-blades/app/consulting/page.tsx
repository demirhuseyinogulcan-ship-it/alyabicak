import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Consulting Page - Permanent Redirect (308)
 * SEO: Eski /consulting linklerinden gelen trafiği korur
 */
export default function LegacyConsultingPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/consulting`)
}

