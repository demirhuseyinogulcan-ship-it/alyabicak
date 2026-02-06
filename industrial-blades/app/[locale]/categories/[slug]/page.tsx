/**
 * Kategori Detay Sayfası - i18n Destekli
 */
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { categoryService } from '@/lib/services'
import { getAllCategories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'
import { PageHeader } from '@/components/ui'
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n'
import { getDomainUrl, getHreflangUrls, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{
    locale: Locale
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const params: { locale: string; slug: string }[] = []
  
  i18nConfig.locales.forEach((locale) => {
    categories.forEach((category) => {
      params.push({
        locale,
        slug: category.slug,
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug, locale)
  const dict = await getDictionary(locale)
  
  if (!category) {
    return {}
  }

  const domainUrl = getDomainUrl(locale as SupportedLocale)
  const pagePath = `/categories/${category.slug}`
  const brandSuffix = locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'

  return {
    ...generateSeoMetadata({
      title: `${category.name} | ${category.totalProductCount} ${dict.common.products} | ${brandSuffix}`,
      description: `${category.description} ${category.subcategories.length} ${dict.common.subcategories}, ${category.totalProductCount} ${dict.common.products}. ${locale === 'tr' ? 'Sheffield kalitesi, Türkiye distribütörü.' : 'Sheffield steel quality. Authorized distributor.'}`,
      keywords: [category.name.toLowerCase(), 'alya bıçak', 'endüstriyel bıçak', 'alya blade'],
      url: `${domainUrl}/${locale}${pagePath}`,
      locale,
      path: pagePath,
    }),
    alternates: {
      canonical: `${domainUrl}/${locale}${pagePath}`,
      languages: getHreflangUrls(pagePath),
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { locale, slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug, locale)
  const dict = await getDictionary(locale)

  if (!category) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}` },
    { name: dict.nav.categories, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories` },
    { name: category.name, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories/${category.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <PageHeader
          title={category.name}
          description={category.description}
          backgroundImage={category.image}
          centered={false}
          stats={`${category.subcategories.length} ${dict.common.subcategories} • ${category.totalProductCount} ${dict.common.products}`}
          breadcrumb={
            <nav className="text-sm text-steel-300">
              <Link href={`/${locale}`} className="hover:text-white">{dict.nav.home}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${locale}/categories`} className="hover:text-white">{dict.nav.categories}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{category.name}</span>
            </nav>
          }
        />

        {/* Subcategories Grid */}
        <section className="py-20 bg-steel-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-steel-900 mb-2">
                {dict.categories.subcategories}
              </h2>
              <p className="text-steel-600">
                {category.name} {dict.categoryPage.inCategory} {category.subcategories.length} {dict.common.subcategories} {dict.categoryPage.subcategoriesExist}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/${locale}/categories/${category.slug}/${subcategory.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <Package className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  {subcategory.description && (
                    <p className="text-steel-600 text-sm mb-3 line-clamp-2">
                      {subcategory.description}
                    </p>
                  )}
                  <div className="text-sm text-primary-600 font-medium">
                    {subcategory.productCount} {dict.common.products}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-primary-600 border-t border-primary-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {dict.categoryPage.customSolutions}
                </h2>
                <p className="text-primary-100 text-sm">
                  {dict.categoryPage.customSolutionsDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/consulting`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-steel-50 transition-all"
                >
                  {dict.consulting.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white text-sm font-medium rounded-lg hover:bg-primary-800 transition-all"
                >
                  {dict.common.contact}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
