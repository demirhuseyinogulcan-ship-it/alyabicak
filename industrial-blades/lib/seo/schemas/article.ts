// Article (TechArticle) Schema.org generator
import { BRAND_NAME, SCHEMA_LANGUAGE } from '../../i18n/locale-utils'
import {
  getDomainUrl,
  type SupportedLocale
} from '../../config/domains'

/**
 * Article Schema Generator - Blog/Bülten yazıları için
 * TechArticle kullanılıyor (endüstriyel teknik içerik)
 */
export function generateArticleSchema(post: {
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  author: { name: string; title?: string };
  category: { name: string };
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  slug: string;
}, locale: SupportedLocale, localizedAuthorName?: string) {
  const domainUrl = getDomainUrl(locale)
  const articleUrl = `${domainUrl}/${locale}/newsletter/${post.slug}`
  const imageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${domainUrl}${post.coverImage}`

  const wordCount = post.content
    ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length
    : post.readingTime * 200

  const publisherName = BRAND_NAME[locale] || BRAND_NAME.en
  const authorName = localizedAuthorName || publisherName

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: authorName,
      url: domainUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${domainUrl}/images/logo.png`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: domainUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${domainUrl}/images/logo.png`,
        width: 200,
        height: 60,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: post.category.name,
    keywords: post.tags.join(', '),
    wordCount: wordCount,
    inLanguage: SCHEMA_LANGUAGE[locale] || locale,
    proficiencyLevel: 'Expert',
    dependencies: {
      tr: 'Endüstriyel üretim ve malzeme bilimi bilgisi',
      en: 'Industrial manufacturing and material science knowledge',
      ar: 'معرفة التصنيع الصناعي وعلوم المواد',
      ru: 'Знания в области промышленного производства и материаловедения',
      fr: 'Connaissances en fabrication industrielle et science des matériaux',
    }[locale] || 'Industrial manufacturing knowledge',
  }
}
