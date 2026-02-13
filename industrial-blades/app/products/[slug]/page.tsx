import { permanentRedirect } from 'next/navigation'
import { headers } from 'next/headers'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function LegacyProductPage({ params }: PageProps) {
  const { slug } = await params
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const locale = host.includes('alyabicak.com') ? 'tr' : 'en'
  permanentRedirect(`/${locale}/products/${slug}`)
}

