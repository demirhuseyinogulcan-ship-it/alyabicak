/**
 * Etiket Filtreleme Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { blogService } from '@/lib/data/blog'
import { PageHeader } from '@/components/ui'
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n'
import { getDateLocale } from '@/lib/i18n/locale-utils'
import { getDomainUrl } from '@/lib/config/domains'

interface PageProps {
    params: Promise<{ locale: Locale; slug: string }>
}

// Static params generation
export async function generateStaticParams() {
    const tags = blogService.getAllTags('tr')

    return i18nConfig.locales.flatMap(locale =>
        tags.map(tag => ({
            locale,
            slug: tag, // Note: Gerçek uygulamada slugify etmek gerekebilir
        }))
    )
}

export async function generateMetadata({ params }: PageProps) {
    const { locale, slug } = await params
    const dict = await getDictionary(locale)
    const decodedTag = decodeURIComponent(slug)

    return genMeta({
        title: `#${decodedTag} - ${dict.blog.title}`,
        description: `${decodedTag} ${dict.blog.subtitle}`,
        locale,
        path: `/newsletter/etiket/${slug}`,
        url: `${getDomainUrl(locale)}/${locale}/newsletter/etiket/${slug}`,
    })
}

export default async function TagPage({ params }: PageProps) {
    const { locale, slug } = await params
    const dict = await getDictionary(locale)
    const decodedTag = decodeURIComponent(slug)

    const posts = blogService.getPostsByTag(decodedTag, locale)

    return (
        <div className="min-h-screen bg-steel-50">
            {/* Hero */}
            <PageHeader
                title={`#${decodedTag}`}
                description={`${posts.length} ${dict.blog.latestPosts}`}
                backgroundImage="/images/pages/bulten.jpg"
            />

            {/* Breadcrumb / Back Link */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href={`/${locale}/newsletter`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                    &larr; {dict.common.backToHome}
                </Link>
            </div>

            {/* Posts Grid */}
            <section className="pb-12">
                <div className="container mx-auto px-4">
                    {posts.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-xl">
                            <p className="text-steel-500 text-lg mb-4">
                                {dict.blog.noPostsYet}
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                                >
                                    <Link href={`/${locale}/newsletter/${post.slug}`} className="block relative h-48 overflow-hidden">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                                            {post.category.name}
                                        </span>
                                    </Link>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-steel-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.publishedAt).toLocaleDateString(getDateLocale(locale), {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readingTime} {dict.blog.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            <Link href={`/${locale}/newsletter/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-steel-600 text-sm line-clamp-2 mb-4">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            href={`/${locale}/newsletter/${post.slug}`}
                                            className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                                        >
                                            {dict.blog.readMore}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>

                                        {/* Tags Preview */}
                                        <div className="mt-4 pt-4 border-t border-steel-100 flex gap-2 overflow-hidden">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs text-steel-400 bg-steel-50 px-2 py-1 rounded">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
