import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Catalog Page - Permanent Redirect (308)
 * SEO: Eski /katalog linklerinden gelen trafiği korur
 */
export default function LegacyCatalogPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/katalog`)
}
