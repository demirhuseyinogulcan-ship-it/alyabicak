import { redirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'
import { getAllCategories } from '@/lib/data/categories'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

/**
 * Legacy Category Detail Page - Redirects to localized version
 */
export default async function LegacyCategoryPage({ params }: PageProps) {
  const { slug } = await params
  redirect(`/${i18nConfig.defaultLocale}/categories/${slug}`)
}
