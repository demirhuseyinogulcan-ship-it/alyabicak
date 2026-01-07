import { redirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function LegacyProductPage({ params }: PageProps) {
  const { slug } = await params
  redirect(`/${i18nConfig.defaultLocale}/urunler/${slug}`)
}

