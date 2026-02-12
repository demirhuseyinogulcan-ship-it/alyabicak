/**
 * Blog/Bülten Section Component
 * Ana sayfada son bültenleri gösterir
 */

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogService } from '@/lib/data/blog'
import type { Locale } from '@/lib/i18n'
import { SectionHeader } from '@/components/ui'
import { getDateLocale } from '@/lib/i18n/locale-utils'

interface BlogSectionProps {
  locale?: string
  translations?: {
    title: string
    subtitle: string
    readMore: string
    viewAll: string
    readTime: string
  }
}

export default function BlogSection({ locale = 'tr', translations }: BlogSectionProps) {
  const posts = blogService.getRecentPosts(3, locale as Locale)

  // Fallback translations
  const t = translations || {
    title: 'Bülten',
    subtitle: 'Endüstriyel kesiciler hakkında güncel haberler, rehberler ve teknik yazılar',
    readMore: 'Devamını Oku',
    viewAll: 'Tüm Bültenleri Gör',
    readTime: 'dk okuma'
  }

  // Henüz yazı yoksa gösterme
  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-steel-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Cover Image */}
              <Link href={`/${locale}/newsletter/${post.slug}`} className="block relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {post.category.name}
                </span>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-steel-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString(getDateLocale(locale || 'en'), {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} {t.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/${locale}/newsletter/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-steel-600 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/${locale}/newsletter/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  {t.readMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/newsletter`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-steel-900 hover:bg-steel-800 text-white font-medium rounded-lg transition-colors"
          >
            {t.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

