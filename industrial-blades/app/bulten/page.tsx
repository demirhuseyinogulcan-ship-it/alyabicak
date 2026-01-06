import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogService } from '@/lib/data/blog'
import { BLOG_CATEGORIES } from '@/lib/types/blog'
import { PageHeader } from '@/components/ui'

export const metadata = genMeta({
  title: 'Bülten',
  description: 'Endüstriyel kesiciler hakkında güncel haberler, ürün rehberleri, teknik yazılar ve sektör haberleri. Alya Bıçak blog.',
  keywords: ['endüstriyel bıçak blog', 'bıçak rehberi', 'sektör haberleri', 'teknik yazılar'],
  url: 'https://www.alyabicak.com/bulten',
})

export default function BlogPage() {
  const posts = blogService.getAllPosts()
  const featuredPosts = blogService.getFeaturedPosts(2)

  return (
    <div className="min-h-screen bg-steel-50">
      {/* Hero */}
      <PageHeader
        title="Bülten"
        description="Endüstriyel kesiciler hakkında güncel haberler, rehberler ve teknik yazılar"
        backgroundImage="/images/pages/bulten.jpg"
      />

      {/* Categories */}
      <section className="py-8 bg-white border-b border-steel-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/bulten"
              className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full"
            >
              Tümü
            </Link>
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/bulten/kategori/${category.slug}`}
                className="px-4 py-2 bg-steel-100 hover:bg-steel-200 text-steel-700 text-sm font-medium rounded-full transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-medium text-steel-900 mb-8">Öne Çıkanlar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group relative bg-steel-900 rounded-xl overflow-hidden h-80"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full mb-3 w-fit">
                      {post.category.name}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                      <Link href={`/bulten/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-steel-300 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-steel-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime} dk
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-medium text-steel-900 mb-8">Tüm Yazılar</h2>
          
          {posts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <p className="text-steel-500 text-lg mb-4">
                Henüz yayınlanmış yazı bulunmuyor.
              </p>
              <p className="text-steel-400">
                Yakında endüstriyel kesiciler hakkında faydalı içerikler paylaşacağız.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <Link href={`/bulten/${post.slug}`} className="block relative h-48 overflow-hidden">
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
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime} dk
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <Link href={`/bulten/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-steel-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/bulten/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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

