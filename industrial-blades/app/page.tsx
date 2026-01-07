import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Root Page - Permanent Redirect to default locale (308)
 * Ana sayfa varsayılan dile (Türkçe) yönlendirir.
 */
export default function RootPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}`)
}
