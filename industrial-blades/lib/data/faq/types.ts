/**
 * FAQ Type Definitions
 *
 * Centralized types for FAQ system.
 * All locale JSON files must conform to FAQData schema.
 */

// Supported FAQ categories
export type FAQCategory =
  | 'arizagiderme'  // Troubleshooting & Performance
  | 'celik'         // Steel Types & Technical Info
  | 'kaplama'       // Coating & Surface Treatments
  | 'teknik'        // Technical Specifications
  | 'ozelUretim'    // Custom Manufacturing
  | 'siparis'       // Order & Delivery
  | 'genel'         // General Information

// Single FAQ item structure
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: FAQCategory
}

// Complete FAQ data structure for a locale
export interface FAQData {
  locale: string
  categories: Record<FAQCategory, string>
  questions: FAQItem[]
}

// Supported FAQ locales — i18n config'den türetilir
import type { Locale } from '@/lib/i18n/config';
export type FAQLocale = Locale;

// Type guard for category validation
export function isValidCategory(category: string): category is FAQCategory {
  const validCategories: FAQCategory[] = [
    'arizagiderme', 'celik', 'kaplama', 'teknik', 'ozelUretim', 'siparis', 'genel'
  ]
  return validCategories.includes(category as FAQCategory)
}

// Category order for consistent display
export const CATEGORY_ORDER: FAQCategory[] = [
  'arizagiderme',
  'celik',
  'kaplama',
  'teknik',
  'ozelUretim',
  'siparis',
  'genel'
]
