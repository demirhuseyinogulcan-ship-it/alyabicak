import { permanentRedirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

/**
 * Legacy Blog Page - Permanent Redirect to localized version
 * 
 * SEO: 308 permanent redirect - arama motorları yeni URL'yi indeksler
 * Eski /newsletter linklerinden gelen trafiği korur
 */
export default function LegacyBlogPage() {
  permanentRedirect(`/${i18nConfig.defaultLocale}/newsletter`)
}

