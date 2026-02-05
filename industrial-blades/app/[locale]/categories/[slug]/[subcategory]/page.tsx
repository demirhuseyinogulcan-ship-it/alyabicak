/**
 * Alt Kategori Detay Sayfası - i18n Destekli
 */
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { categoryService, productService } from '@/lib/services'
import { getAllCategories, getAllSubcategories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Filter } from 'lucide-react'
import { PageHeader } from '@/components/ui'
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n'
import { siteConfig } from '@/lib/config'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{
    locale: Locale
    slug: string
    subcategory: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  
  const params: { locale: string; slug: string; subcategory: string }[] = []
  
  i18nConfig.locales.forEach((locale) => {
    categories.forEach(category => {
      subcategories
        .filter(sub => sub.parentId === category.id)
        .forEach(sub => {
          params.push({
            locale,
            slug: category.slug,
            subcategory: sub.slug,
          })
        })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug, subcategory: subcategorySlug } = await params
  const category = categoryService.getCategoryViewBySlug(slug, locale)
  const subcategory = categoryService.getSubcategoryViewBySlug(subcategorySlug, locale)
  const dict = await getDictionary(locale)
  
  if (!category || !subcategory) {
    return {}
  }

  // Ürün sayısını kontrol et - boş kategorilerde noindex uygula (Soft 404 önleme)
  const products = productService.getSubcategoryCards(subcategory.id, locale)
  const hasProducts = products.length > 0

  // SEO keywords - önce subcategory'nin kendi seoKeywords'leri, sonra genel
  const baseKeywords = [subcategory.name.toLowerCase(), category.name.toLowerCase()]
  const seoKeywords = (subcategory as { seoKeywords?: string[] }).seoKeywords || []
  const allKeywords = [...seoKeywords, ...baseKeywords, 'alya bıçak', 'alya blade']

  const metadata = generateSeoMetadata({
    title: `${subcategory.name} | ${category.name}`,
    description: `${subcategory.description} - ${locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'}. ${subcategory.productCount} ${dict.common.products}.`,
    keywords: allKeywords,
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories/${category.slug}/${subcategory.slug}`,
  })

  // Ürünü olmayan alt kategorileri noindex yap - Google Soft 404 hatalarını önle
  if (!hasProducts) {
    return {
      ...metadata,
      robots: {
        index: false,
        follow: true, // Linkler hala takip edilsin (diğer kategorilere)
      },
    }
  }

  return metadata
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { locale, slug, subcategory: subcategorySlug } = await params
  const category = categoryService.getCategoryViewBySlug(slug, locale)
  const subcategory = categoryService.getSubcategoryViewBySlug(subcategorySlug, locale)
  const dict = await getDictionary(locale)

  if (!category || !subcategory) {
    notFound()
  }

  // Bu alt kategorideki ürünleri getir (çevrilmiş olarak)
  const products = productService.getSubcategoryCards(subcategory.id, locale)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}` },
    { name: dict.nav.categories, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories` },
    { name: category.name, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories/${category.slug}` },
    { name: subcategory.name, url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/categories/${category.slug}/${subcategory.slug}` },
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
          title={subcategory.name}
          description={subcategory.description}
          backgroundImage={subcategory.image || category.image}
          centered={false}
          stats={`${products.length} ${dict.common.products}`}
          breadcrumb={
            <nav className="text-sm text-steel-300">
              <Link href={`/${locale}`} className="hover:text-white">{dict.nav.home}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${locale}/categories`} className="hover:text-white">{dict.nav.categories}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${locale}/categories/${category.slug}`} className="hover:text-white">{category.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{subcategory.name}</span>
            </nav>
          }
        />

        {/* Products Section */}
        <section className="py-20 bg-steel-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-steel-900 mb-2">
                  {dict.products.title}
                </h2>
                <p className="text-steel-600">
                {products.length} {dict.categoryPage.productsFound}
              </p>
              </div>
              
              {/* Filter Button */}
              <button className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-steel-200 rounded-lg text-steel-700 hover:bg-steel-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>{dict.common.filter}</span>
              </button>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/${locale}/products/${product.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-video bg-white overflow-hidden">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-steel-50 to-steel-100">
                          <Package className="w-12 h-12 text-steel-300 group-hover:text-primary-400 transition-colors" />
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                          {dict.common.outOfStock}
                        </div>
                      )}
                      {/* Galeri göstergesi - birden fazla görsel varsa */}
                      {product.images && product.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          {product.images.slice(0, 4).map((_, idx) => (
                            <span 
                              key={idx} 
                              className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-primary-500' : 'bg-white/70'}`}
                            />
                          ))}
                          {product.images.length > 4 && (
                            <span className="text-[10px] text-white/90 font-medium">+{product.images.length - 4}</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="text-xs text-primary-600 font-medium mb-1">
                        {product.code}
                      </div>
                      <h3 className="font-semibold text-steel-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      {product.hasVariants && (
                        <div className="text-sm text-steel-500">
                          {product.variantCount} {dict.categoryPage.variant}
                        </div>
                      )}
                      <div className="mt-3 pt-3 border-t border-steel-100 flex items-center justify-between">
                        <span className="text-sm text-steel-500">{dict.common.viewDetails}</span>
                        <ArrowRight className="w-4 h-4 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <Package className="w-16 h-16 text-steel-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-steel-900 mb-2">
                  {dict.categoryPage.noProductsYet}
                </h3>
                <p className="text-steel-600 mb-6">
                  {dict.categoryPage.noProductsDesc}
                </p>
                <Link
                  href={`/${locale}/categories/${category.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span>{dict.categoryPage.browseOther}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-steel-900 mb-8">
              {dict.categoryPage.otherSubcategories.replace('{{category}}', category.name)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.subcategories
                .filter(sub => sub.id !== subcategory.id)
                .slice(0, 4)
                .map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/${locale}/categories/${category.slug}/${sub.slug}`}
                    className="group p-4 bg-steel-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <h3 className="font-semibold text-steel-900 group-hover:text-primary-600 transition-colors mb-1">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-steel-500">
                      {sub.productCount} {dict.common.products}
                    </p>
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
                  {dict.categoryPage.cantFindTitle}
                </h2>
                <p className="text-primary-100 text-sm">
                  {dict.categoryPage.cantFindDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/consulting`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-steel-50 transition-all"
                >
                  {dict.consulting.cta}
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all"
                >
                  {dict.common.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
