/**
 * SEO & Schema.org - Barrel Export
 *
 * MODÜLER YAPI (Faz 5):
 * Bu dosya artık sadece re-export yapar. Gerçek implementasyonlar:
 *   - ./seo/metadata.ts         generateMetadata, SEOConfig, SEO_SEED_KEYWORDS
 *   - ./seo/schemas/organization.ts  generateOrganizationSchema, generateLocalBusinessSchema
 *   - ./seo/schemas/product.ts       generateProductSchema, generateEnhancedProductSchema
 *   - ./seo/schemas/website.ts       generateWebsiteSchema, generateItemListSchema
 *   - ./seo/schemas/article.ts       generateArticleSchema
 *   - ./seo/schemas/faq.ts           generateFAQSchema
 *   - ./seo/schemas/breadcrumb.ts    generateBreadcrumbSchema
 *   - ./seo/schemas/speakable.ts     generateSpeakableSchema
 *   - ./seo/indexnow.ts              IndexNow API
 *
 * Tüm mevcut import'lar (from '@/lib/seo') değişmeden çalışır.
 */

// Metadata generator & types
export { generateMetadata, SEO_SEED_KEYWORDS } from './seo/metadata'
export type { SEOConfig } from './seo/metadata'

// Re-exports from centralized domain config (backward compat)
export { getDomainUrl, generateHreflangUrls } from './seo/metadata'

// Schema.org generators
export {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateProductSchema,
  generateEnhancedProductSchema,
  generateWebsiteSchema,
  generateItemListSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from './seo/schemas'
export type { ProductSchemaInput } from './seo/schemas'
