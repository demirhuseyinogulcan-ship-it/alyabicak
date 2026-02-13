import { permanentRedirect } from 'next/navigation'
import { headers } from 'next/headers'

/**
 * Legacy Privacy Policy Page - Permanent Redirect (308)
 * Domain-aware: alyabicak.com → /tr, alyablade.com → /en
 */
export default async function LegacyKVKKPage() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const locale = host.includes('alyabicak.com') ? 'tr' : 'en'
  permanentRedirect(`/${locale}/privacy-policy`)
}

