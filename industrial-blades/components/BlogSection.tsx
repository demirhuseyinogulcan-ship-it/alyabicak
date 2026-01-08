/**
 * Blog/Bülten Section Component
 * Ana sayfada son bültenleri gösterir
 */

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogService } from '@/lib/data/blog'
import { SectionHeader } from '@/components/ui'

export default function BlogSection() {
  const posts = blogService.getRecentPosts(3)

  // Henüz yazı yoksa gösterme
  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Bülten"
          subtitle="Endüstriyel kesiciler hakkında güncel haberler, rehberler ve teknik yazılar"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-steel-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Cover Image */}
              <Link href={`/newsletter/${post.slug}`} className="block relative h-48 overflow-hidden">
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
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} dk okuma
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/newsletter/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-steel-600 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/newsletter/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-steel-900 hover:bg-steel-800 text-white font-medium rounded-lg transition-colors"
          >
            Tüm Bültenleri Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

