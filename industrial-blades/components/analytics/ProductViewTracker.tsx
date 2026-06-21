/**
 * Product View Tracker Component
 *
 * Client-side component that tracks product page views
 * Fires GA4 event when product detail page loads
 */

'use client'

import { useEffect } from 'react'
import { trackProductView } from '@/lib/analytics'

interface ProductViewTrackerProps {
  productId: string
  productName: string
  category: string
  subcategory?: string
}

export default function ProductViewTracker({
  productId,
  productName,
  category,
  subcategory,
}: ProductViewTrackerProps) {
  useEffect(() => {
    // Track product view on mount
    trackProductView({
      id: productId,
      name: productName,
      category: category,
      subcategory: subcategory,
    })
  }, [productId, productName, category, subcategory])

  // This component doesn't render anything
  return null
}
