/**
 * Blog Yazı Detay Sayfası
 * SEO-optimized Article page with Schema.org markup
 */
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react'
import { blogService } from '@/lib/data/blog'
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n'
import { getDomainUrl, getHreflangUrls, getOGLocale, type SupportedLocale } from '@/lib/config/domains'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

// Static params generation
export async function generateStaticParams() {
  const slugs = blogService.getAllSlugs()

  return i18nConfig.locales.flatMap(locale =>
    slugs.map(slug => ({
      locale,
      slug,
    }))
  )
}

// Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = blogService.getPostBySlug(slug, locale)
  const dict = await getDictionary(locale)

  if (!post) {
    return {
      title: dict.common.notFound,
    }
  }

  const canonicalUrl = `${getDomainUrl(locale as SupportedLocale)}/${locale}/newsletter/${slug}`
  const ogImage = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${getDomainUrl(locale as SupportedLocale)}${post.coverImage}`

  return {
    title: post.seo?.title || `${post.title} | ${dict.blog.title}`,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    authors: [{ name: dict.blog.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonicalUrl,
      locale: getOGLocale(locale as SupportedLocale),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      section: post.category.name,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: getHreflangUrls(`/newsletter/${slug}`),
    },
  }
}

import SteelUsageChart from '@/components/charts/SteelUsageChart'
import BladeComparisonChart from '@/components/charts/BladeComparisonChart'
import BladeCostChart from '@/components/charts/BladeCostChart'

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params
  const post = blogService.getPostBySlug(slug, locale)
  const dict = await getDictionary(locale)

  if (!post) {
    notFound()
  }

  // Related posts (same category, excluding current)
  const relatedPosts = blogService
    .getPostsByCategory(post.category.slug, locale)
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  // Breadcrumb items
  const breadcrumbItems = [
    { name: dict.nav.home, url: `/${locale}` },
    { name: dict.blog.title, url: `/${locale}/newsletter` },
    { name: dict.blog.categories[post.category.dictionaryKey], url: `/${locale}/newsletter/kategori/${post.category.slug}` },
    { name: post.title },
  ]

  // Schema.org Article
  const articleSchema = generateArticleSchema(post, locale as SupportedLocale, dict.blog.author.name)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, locale as SupportedLocale)
  const faqSchema = post.faq && post.faq.length > 0 ? generateFAQSchema(post.faq) : null

  // Format date based on locale
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const localeMap: Record<Locale, string> = {
      tr: 'tr-TR',
      en: 'en-US',
      ar: 'ar-EG',
      ru: 'ru-RU',
      fr: 'fr-FR', // Fransa Fransızcası (Kuzey Afrika'da da geçerli)
    }
    return date.toLocaleDateString(localeMap[locale], options)
  }

  const content = post.content || '<p class="text-steel-500 italic">İçerik yakında eklenecek...</p>'
  const hasChart = content.includes('<!-- STEEL_CHART_PLACEHOLDER -->')
  const hasBladeComparison = content.includes('<!-- BLADE_COMPARISON_CHART -->')
  const hasBladeCost = content.includes('<!-- BLADE_COST_CHART -->')
  const hasAnyChart = hasChart || hasBladeComparison || hasBladeCost

  // Build content parts with chart injections
  const renderContentWithCharts = () => {
    if (!hasAnyChart) {
      return (
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    }

    // Split content by all chart placeholders and render sequentially
    const placeholders = [
      { key: '<!-- STEEL_CHART_PLACEHOLDER -->', component: <SteelUsageChart translations={dict.steelChart} /> },
      { key: '<!-- BLADE_COMPARISON_CHART -->', component: <BladeComparisonChart translations={dict.bladeComparison} /> },
      { key: '<!-- BLADE_COST_CHART -->', component: <BladeCostChart translations={dict.bladeCost} /> },
    ]

    // Process all placeholders in sequence
    type ContentPart = { type: 'html'; html: string } | { type: 'chart'; component: React.ReactNode }
    let segments: ContentPart[] = [{ type: 'html' as const, html: content }]

    for (const ph of placeholders) {
      const newSegments: ContentPart[] = []
      for (const seg of segments) {
        if (seg.type === 'chart') {
          newSegments.push(seg)
          continue
        }
        const splits = seg.html.split(ph.key)
        for (let i = 0; i < splits.length; i++) {
          if (i > 0) {
            newSegments.push({ type: 'chart', component: ph.component })
          }
          if (splits[i]) {
            newSegments.push({ type: 'html', html: splits[i] })
          }
        }
      }
      segments = newSegments
    }

    return (
      <div className="prose-article">
        {segments.map((seg, i) =>
          seg.type === 'chart' ? (
            <div key={i} className="my-12 not-prose">{seg.component}</div>
          ) : (
            <div key={i} dangerouslySetInnerHTML={{ __html: seg.html }} />
          )
        )}
      </div>
    )
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen bg-steel-50">
        {/* Hero Section */}
        <header className="relative h-[50vh] min-h-[400px] max-h-[600px] bg-steel-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/50 to-transparent" />

          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-steel-300 flex-wrap">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4" />}
                    {item.url ? (
                      <Link href={item.url} className="hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-steel-400 line-clamp-1">{item.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Category Badge */}
            <Link
              href={`/${locale}/newsletter/kategori/${post.category.slug}`}
              className="inline-block px-4 py-1.5 bg-primary-600 text-white text-sm font-medium rounded-full mb-4 w-fit hover:bg-primary-700 transition-colors"
            >
              {dict.blog.categories[post.category.dictionaryKey]}
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-steel-300">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                  {dict.blog.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{dict.blog.author.name}</p>
                  <p className="text-sm text-steel-400">{dict.blog.author.title}</p>
                </div>
              </div>

              <span className="hidden md:block w-px h-8 bg-steel-600" />

              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>

              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} {dict.blog.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content — min-w-0: CSS Grid min-width:auto bypass, mobilde taşma engeli */}
            <main className="lg:col-span-8 min-w-0 overflow-hidden">
              {/* Back Link */}
              <Link
                href={`/${locale}/newsletter`}
                className="inline-flex items-center gap-2 text-steel-600 hover:text-primary-600 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {dict.blog.title}
              </Link>

              {/* Excerpt */}
              <p className="text-xl text-steel-600 leading-relaxed mb-10 font-normal">
                {post.excerpt}
              </p>

              {/* Article Content with Chart Injection */}
              {renderContentWithCharts()}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-steel-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-5 h-5 text-steel-400" />
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/${locale}/newsletter/etiket/${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-steel-100 text-steel-600 text-sm rounded-full hover:bg-steel-200 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-steel-600 font-medium flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  {dict.blog.share}
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${getDomainUrl(locale as SupportedLocale)}/${locale}/newsletter/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-steel-100 hover:bg-[#1DA1F2] hover:text-white text-steel-600 rounded-full transition-colors"
                    aria-label={dict.blog.shareOnTwitter}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${getDomainUrl(locale as SupportedLocale)}/${locale}/newsletter/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-steel-100 hover:bg-[#0A66C2] hover:text-white text-steel-600 rounded-full transition-colors"
                    aria-label={dict.blog.shareOnLinkedIn}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${getDomainUrl(locale as SupportedLocale)}/${locale}/newsletter/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-steel-100 hover:bg-[#25D366] hover:text-white text-steel-600 rounded-full transition-colors"
                    aria-label={dict.blog.shareOnWhatsApp}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 min-w-0">
              <div className="sticky top-24 space-y-8">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-steel-900 mb-4">
                      {dict.blog.relatedPosts}
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/${locale}/newsletter/${relatedPost.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedPost.coverImage}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-steel-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-steel-500 mt-1">
                                {relatedPost.readingTime} {dict.blog.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-steel-900 mb-4">
                    {dict.nav.categories}
                  </h3>
                  <div className="space-y-2">
                    {blogService.getAllPosts(locale).reduce((categories, p) => {
                      const existing = categories.find(c => c.id === p.category.id)
                      if (existing) {
                        existing.count++
                      } else {
                        categories.push({ ...p.category, count: 1 })
                      }
                      return categories
                    }, [] as Array<{ id: string; name: string; slug: string; dictionaryKey: 'technicalArticles' | 'productGuides' | 'sectorNews' | 'fairsEvents' | 'companyNews'; count: number }>).map((category) => (
                      <Link
                        key={category.id}
                        href={`/${locale}/newsletter/kategori/${category.slug}`}
                        className="flex items-center justify-between py-2 text-steel-600 hover:text-primary-600 transition-colors"
                      >
                        <span>{dict.blog.categories[category.dictionaryKey]}</span>
                        <span className="text-sm text-steel-400">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">
                    {dict.blog.sidebarCtaTitle}
                  </h3>
                  <p className="text-primary-100 text-sm mb-4">
                    {dict.blog.sidebarCtaText}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                  >
                    {dict.blog.sidebarCtaButton}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
