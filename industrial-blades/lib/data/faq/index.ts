/**
 * FAQ Module - Scalable Multi-Language Architecture
 * 
 * This module provides a scalable FAQ system that supports unlimited languages.
 * Each language has its own JSON file in the locales/ directory.
 * 
 * To add a new language:
 * 1. Create a new JSON file in locales/ (e.g., ru.json for Russian)
 * 2. Add the locale to FAQLocale type in types.ts
 * 3. Add the locale to SUPPORTED_LOCALES below
 * 
 * No other code changes required!
 */

import type { FAQData, FAQItem, FAQCategory, FAQLocale } from './types'
export type { FAQData, FAQItem, FAQCategory, FAQLocale }
export { CATEGORY_ORDER, isValidCategory } from './types'

// Import locale data
// YENİ DİL EKLENDİĞİNDE: JSON dosyasını oluşturup buraya import ekleyin
import trData from './locales/tr.json'
import enData from './locales/en.json'
import arData from './locales/ar.json'
import ruData from './locales/ru.json'

// FAQ data map — tüm mevcut FAQ çevirileri
// Henüz FAQ çevirisi olmayan diller otomatik olarak İngilizce'ye düşer
const faqDataMap: Partial<Record<FAQLocale, FAQData>> = {
  tr: trData as FAQData,
  en: enData as FAQData,
  ar: arData as FAQData,
  ru: ruData as FAQData,
  // fr: Fransızca FAQ henüz oluşturulmadı → İngilizce fallback
}

// Hangi dillerde FAQ mevcut
export const SUPPORTED_LOCALES = Object.keys(faqDataMap) as FAQLocale[]

// Default fallback locale
const DEFAULT_LOCALE: FAQLocale = 'en'

/**
 * Get FAQ data for a specific locale
 * Falls back to English if locale not found
 */
export function getFAQData(locale: string): FAQData {
  const normalizedLocale = locale as FAQLocale
  return faqDataMap[normalizedLocale] ?? faqDataMap[DEFAULT_LOCALE]!
}

/**
 * Get all FAQ questions for a locale
 */
export function getFAQs(locale: string): FAQItem[] {
  return getFAQData(locale).questions
}

/**
 * Get category names for a locale
 */
export function getCategoryNames(locale: string): Record<FAQCategory, string> {
  return getFAQData(locale).categories
}

/**
 * Get FAQs filtered by category
 */
export function getFAQsByCategory(locale: string, category: FAQCategory): FAQItem[] {
  return getFAQs(locale).filter(faq => faq.category === category)
}

/**
 * Get FAQs grouped by category
 * Returns categories in the order defined by CATEGORY_ORDER
 */
export function getFAQsGroupedByCategory(locale: string): Record<FAQCategory, FAQItem[]> {
  const faqs = getFAQs(locale)
  const grouped = {} as Record<FAQCategory, FAQItem[]>
  
  faqs.forEach(faq => {
    if (!grouped[faq.category]) {
      grouped[faq.category] = []
    }
    grouped[faq.category].push(faq)
  })
  
  return grouped
}

/**
 * Get a single FAQ by ID
 */
export function getFAQById(locale: string, id: string): FAQItem | undefined {
  return getFAQs(locale).find(faq => faq.id === id)
}

/**
 * Check if a locale is supported
 */
export function isLocaleSupported(locale: string): locale is FAQLocale {
  return SUPPORTED_LOCALES.includes(locale as FAQLocale)
}

/**
 * Get all supported locales
 */
export function getSupportedLocales(): FAQLocale[] {
  return [...SUPPORTED_LOCALES]
}
