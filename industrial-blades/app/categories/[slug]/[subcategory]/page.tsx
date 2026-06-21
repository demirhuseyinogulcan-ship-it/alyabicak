import { redirect } from 'next/navigation'
import { i18nConfig } from '@/lib/i18n/config'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'

interface PageProps {
  params: Promise<{
    slug: string
    subcategory: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()

  const params: { slug: string; subcategory: string }[] = []

  categories.forEach(category => {
    subcategories
      .filter(sub => sub.parentId === category.id)
      .forEach(sub => {
        params.push({
          slug: category.slug,
          subcategory: sub.slug,
        })
      })
  })

  return params
}

/**
 * Legacy Subcategory Page - Redirects to localized version
 */
export default async function LegacySubcategoryPage({ params }: PageProps) {
  const { slug, subcategory } = await params
  redirect(`/${i18nConfig.defaultLocale}/categories/${slug}/${subcategory}`)
}


