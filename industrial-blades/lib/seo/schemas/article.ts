// Article (TechArticle) Schema.org generator
import { BRAND_NAME, SCHEMA_LANGUAGE } from '../../i18n/locale-utils'
import {
  getDomainUrl,
  type SupportedLocale
} from '../../config/domains'

/**
 * Locale-aware TechArticle dependencies
 * Yeni dil eklendiÄŸinde buraya ekleyin â€” fallback EN'e dÃ¼ÅŸer
 */
const ARTICLE_DEPENDENCIES: Record<string, string> = {
  tr: 'EndÃ¼striyel Ã¼retim ve malzeme bilimi bilgisi',
  en: 'Industrial manufacturing and material science knowledge',
  ar: 'Ù…Ø¹Ø±ÙØ© Ø§Ù„ØªØµÙ†ÙŠØ¹ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ ÙˆØ¹Ù„ÙˆÙ… Ø§Ù„Ù…ÙˆØ§Ø¯',
  ru: 'Ğ—Ğ½Ğ°Ğ½Ğ¸Ñ Ğ² Ğ¾Ğ±Ğ»Ğ°ÑÑ‚Ğ¸ Ğ¿Ñ€Ğ¾Ğ¼Ñ‹ÑˆĞ»ĞµĞ½Ğ½Ğ¾Ğ³Ğ¾ Ğ¿Ñ€Ğ¾Ğ¸Ğ·Ğ²Ğ¾Ğ´ÑÑ‚Ğ²Ğ° Ğ¸ Ğ¼Ğ°Ñ‚ĞµÑ€Ğ¸Ğ°Ğ»Ğ¾Ğ²ĞµĞ´ĞµĞ½Ğ¸Ñ',
  fr: 'Connaissances en fabrication industrielle et science des matÃ©riaux',
}

/**
 * Article Schema Generator - Blog/BÃ¼lten yazÄ±larÄ± iÃ§in
 * TechArticle kullanÄ±lÄ±yor (endÃ¼striyel teknik iÃ§erik)
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
    dependencies: ARTICLE_DEPENDENCIES[locale] || ARTICLE_DEPENDENCIES.en,
  }
}
