/**
 * Analytics Event Tracking Library
 * 
 * Centralized event tracking for Google Analytics 4
 * Use these functions throughout the app to track user actions
 * 
 * Events tracked:
 * - Product views and clicks
 * - Category navigation
 * - Search queries
 * - Contact form submissions
 * - Catalog downloads
 * - Language changes
 * - CTA button clicks
 */

// Type-safe gtag function
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

/**
 * Base event tracking function
 * Safely calls gtag if it exists
 */
function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// ============================================
// PRODUCT EVENTS
// ============================================

/**
 * Track when user views a product detail page
 */
export function trackProductView(product: {
  id: string
  name: string
  category: string
  subcategory?: string
}) {
  trackEvent('view_item', {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    item_category2: product.subcategory,
  })
}

/**
 * Track when user clicks on a product card
 */
export function trackProductClick(product: {
  id: string
  name: string
  category: string
  position?: number
}) {
  trackEvent('select_item', {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    index: product.position,
  })
}

// ============================================
// CATEGORY EVENTS
// ============================================

/**
 * Track when user views a category page
 */
export function trackCategoryView(category: {
  id: string
  name: string
  productCount?: number
}) {
  trackEvent('view_item_list', {
    item_list_id: category.id,
    item_list_name: category.name,
    items_count: category.productCount,
  })
}

// ============================================
// SEARCH EVENTS
// ============================================

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount?: number) {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  })
}

// ============================================
// CONTACT & LEAD EVENTS
// ============================================

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(formData: {
  subject?: string
  hasCompany?: boolean
  locale?: string
}) {
  trackEvent('generate_lead', {
    currency: 'TRY',
    value: 1, // Lead value for conversion tracking
    lead_source: 'contact_form',
    subject: formData.subject,
    has_company: formData.hasCompany,
    locale: formData.locale,
  })
}

/**
 * Track consultation/danismanlik form submission
 */
export function trackConsultationRequest(data: {
  industry?: string
  locale?: string
}) {
  trackEvent('generate_lead', {
    currency: 'TRY',
    value: 5, // Higher value - more qualified lead
    lead_source: 'consultation_form',
    industry: data.industry,
    locale: data.locale,
  })
}

// ============================================
// CATALOG & DOWNLOAD EVENTS
// ============================================

/**
 * Track catalog page view
 */
export function trackCatalogView(locale?: string) {
  trackEvent('view_catalog', {
    locale: locale,
  })
}

/**
 * Track catalog/PDF download
 */
export function trackCatalogDownload(catalogName: string) {
  trackEvent('file_download', {
    file_name: catalogName,
    file_extension: 'pdf',
    content_type: 'catalog',
  })
}

// ============================================
// NAVIGATION & UX EVENTS
// ============================================

/**
 * Track language change
 */
export function trackLanguageChange(fromLocale: string, toLocale: string) {
  trackEvent('language_change', {
    from_language: fromLocale,
    to_language: toLocale,
  })
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  })
}

/**
 * Track newsletter subscription
 */
export function trackNewsletterSubscribe(locale?: string) {
  trackEvent('newsletter_subscribe', {
    locale: locale,
  })
}

/**
 * Track phone number click (call intent)
 */
export function trackPhoneClick() {
  trackEvent('click_to_call', {
    phone_location: 'header', // or footer, contact page
  })
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', {
    source: source,
  })
}

/**
 * Track email click
 */
export function trackEmailClick(source: string) {
  trackEvent('email_click', {
    source: source,
  })
}

// ============================================
// PAGE TIMING EVENTS
// ============================================

/**
 * Track how long user stays on a page
 * Call this when user leaves the page
 */
export function trackTimeOnPage(pagePath: string, timeInSeconds: number) {
  trackEvent('page_engagement', {
    page_path: pagePath,
    engagement_time_sec: timeInSeconds,
  })
}

// ============================================
// SCROLL DEPTH EVENTS
// ============================================

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(depth: 25 | 50 | 75 | 90 | 100) {
  trackEvent('scroll_depth', {
    percent_scrolled: depth,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}
