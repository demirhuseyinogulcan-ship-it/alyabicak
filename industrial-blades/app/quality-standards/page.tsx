import { permanentRedirect } from 'next/navigation'
import { headers } from 'next/headers'

/**
 * Legacy Quality Page - Permanent Redirect (308)
 * Domain-aware: alyabicak.com → /tr, alyablade.com → /en
 */
export default async function LegacyQualityPage() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const locale = host.includes('alyabicak.com') ? 'tr' : 'en'
  permanentRedirect(`/${locale}/quality-standards`)
}

