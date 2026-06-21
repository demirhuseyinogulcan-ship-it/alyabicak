import { permanentRedirect } from 'next/navigation'
import { headers } from 'next/headers'

/**
 * Legacy Blog Page - Permanent Redirect (308)
 * Domain-aware: alyabicak.com → /tr, alyablade.com → /en
 */
export default async function LegacyBlogPage() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const locale = host.includes('alyabicak.com') ? 'tr' : 'en'
  permanentRedirect(`/${locale}/newsletter`)
}

