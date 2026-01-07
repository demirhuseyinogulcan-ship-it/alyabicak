/**
 * Search Tracker Component
 * 
 * Tracks search queries when users search for products
 */

'use client'

import { useEffect } from 'react'
import { trackSearch } from '@/lib/analytics'

interface SearchTrackerProps {
  query: string
  resultsCount: number
}

export default function SearchTracker({ query, resultsCount }: SearchTrackerProps) {
  useEffect(() => {
    if (query && query.length >= 2) {
      // Debounce: only track if query has meaningful length
      const timer = setTimeout(() => {
        trackSearch(query, resultsCount)
      }, 500) // Wait 500ms after typing stops
      
      return () => clearTimeout(timer)
    }
  }, [query, resultsCount])

  return null
}
