/**
 * Premium Search Modal
 * Ctrl+K / Cmd+K ile açılır
 * Instant search + görsel sonuçlar + klavye navigasyonu
 */

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X, ArrowRight, Clock, Package, Sparkles } from 'lucide-react'
import { productService } from '@/lib/services'
import { categoryService } from '@/lib/services'
import { ProductCardView } from '@/lib/types'
import { useLocale } from '@/lib/i18n/client'
import { trackSearch, trackProductClick } from '@/lib/analytics'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

// Son aramaları localStorage'dan al
const getRecentSearches = (): string[] => {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem('recentSearches')
  return stored ? JSON.parse(stored) : []
}

// Son aramayı kaydet
const saveRecentSearch = (query: string) => {
  if (typeof window === 'undefined' || !query.trim()) return
  const recent = getRecentSearches()
  const updated = [query, ...recent.filter(s => s !== query)].slice(0, 5)
  localStorage.setItem('recentSearches', JSON.stringify(updated))
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { locale, dictionary: t } = useLocale()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ProductCardView[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Recent searches yükle
  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [isOpen])

  // Modal açıldığında input'a focus
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Arama yap (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        setIsSearching(true)
        const searchResults = productService.search(query, locale)
        const cardViews = searchResults.map(p => productService.toCardView(p, locale))
        setResults(cardViews)
        setIsSearching(false)
        setSelectedIndex(0)
        
        // Track search query in analytics
        trackSearch(query.trim(), cardViews.length)
      } else {
        setResults([])
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [query])

  // Klavye navigasyonu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) {
          saveRecentSearch(query)
          window.location.href = `/${locale}/products/${results[selectedIndex].slug}`
        }
        break
    }
  }, [isOpen, results, selectedIndex, query, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
      selectedElement?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [selectedIndex, results.length])

  const handleRecentClick = (search: string) => {
    setQuery(search)
  }

  if (!isOpen) return null

  const modalContent = (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-steel-900/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-floating overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-steel-100">
          <Search className="w-5 h-5 text-steel-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchModal.placeholder}
            className="flex-1 text-lg text-steel-900 placeholder:text-steel-400 outline-none bg-transparent"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-steel-400 hover:text-steel-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-steel-400 bg-steel-100 rounded">
            ESC
          </kbd>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          
          {/* Yükleniyor */}
          {isSearching && (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Sonuçlar */}
          {!isSearching && results.length > 0 && (
            <div ref={resultsRef} className="py-2">
              <div className="px-4 py-2 text-xs font-medium text-steel-400 uppercase tracking-wider">
                {results.length} {t.searchModal.resultsFound}
              </div>
              {results.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/${locale}/products/${product.slug}`}
                  onClick={() => {
                    saveRecentSearch(query)
                    onClose()
                  }}
                  className={`flex items-center gap-4 px-4 py-3 transition-colors ${
                    index === selectedIndex 
                      ? 'bg-primary-50' 
                      : 'hover:bg-steel-50'
                  }`}
                >
                  {/* Ürün Görseli */}
                  <div className="relative w-16 h-16 bg-steel-100 rounded-lg overflow-hidden flex-shrink-0">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-steel-300" />
                      </div>
                    )}
                  </div>
                  
                  {/* Ürün Bilgisi */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full font-medium">
                        {product.categoryName}
                      </span>
                    </div>
                    <h4 className="font-semibold text-steel-900 truncate">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-steel-500">
                      <span>{product.code}</span>
                      {product.hasVariants && (
                        <span>• {product.variantCount} {t.searchModal.variants}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    index === selectedIndex ? 'text-primary-600' : 'text-steel-300'
                  }`} />
                </Link>
              ))}
            </div>
          )}

          {/* Sonuç yok */}
          {!isSearching && query.length >= 2 && results.length === 0 && (
            <div className="py-12 text-center">
              <Package className="w-12 h-12 text-steel-300 mx-auto mb-3" />
              <p className="text-steel-600 font-medium">{t.searchModal.noResults}</p>
              <p className="text-sm text-steel-400 mt-1">
                "{query}" {t.searchModal.noResultsFor}
              </p>
            </div>
          )}

          {/* Boş state - Son aramalar */}
          {!isSearching && query.length < 2 && (
            <div className="py-6">
              {/* Son Aramalar */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="px-4 py-2 text-xs font-medium text-steel-400 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    {t.searchModal.recentSearches}
                  </div>
                  <div className="flex flex-wrap gap-2 px-4">
                    {recentSearches.map((search, i) => (
                      <button
                        key={i}
                        onClick={() => handleRecentClick(search)}
                        className="px-3 py-1.5 text-sm text-steel-600 bg-steel-100 hover:bg-steel-200 rounded-full transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hızlı Erişim */}
              <div>
                <div className="px-4 py-2 text-xs font-medium text-steel-400 uppercase tracking-wider">
                  {t.searchModal.categories}
                </div>
                <div className="grid grid-cols-2 gap-2 px-4">
                  {categoryService.getAllCategoriesWithCounts(locale).map(cat => (
                    <Link
                      key={cat.id}
                      href={`/${locale}/categories/${cat.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-steel-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-steel-900 text-sm">{cat.name}</div>
                        <div className="text-xs text-steel-400">{cat.totalProductCount} {t.searchModal.products}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-steel-50 border-t border-steel-100 flex items-center justify-between text-xs text-steel-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-steel-200">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-steel-200">↓</kbd>
              {t.searchModal.navigateHint}
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-steel-200">↵</kbd>
              {t.searchModal.selectHint}
            </span>
          </div>
          <span className="hidden sm:block">{t.searchModal.searchTitle}</span>
        </div>
      </div>
    </div>
  )

  // Portal ile body'e render et
  if (typeof window === 'undefined') return null
  return createPortal(modalContent, document.body)
}

// Arama butonunu içeren hook
export function useSearchModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Ctrl+K / Cmd+K ile aç
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return {
    isOpen,
    openSearch: () => setIsOpen(true),
    closeSearch: () => setIsOpen(false),
  }
}

