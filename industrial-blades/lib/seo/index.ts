/**
 * SEO Module - Export Aggregator
 *
 * Tüm SEO araçlarını tek noktadan export eder.
 * Modüller: metadata, schemas/*, indexnow
 */

// Metadata generator & types
export { generateMetadata, SEO_SEED_KEYWORDS, generateHreflangUrls, getDomainUrl } from './metadata'
export type { SEOConfig } from './metadata'

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
} from './schemas'
export type { ProductSchemaInput } from './schemas'

// IndexNow API (Bing/Yandex instant indexing)
export * from './indexnow'
