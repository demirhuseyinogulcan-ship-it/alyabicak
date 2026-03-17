'use client'

/**
 * MegaMenu Component - Performance Optimized
 * 
 * Optimizasyonlar:
 * 1. Framer Motion kaldırıldı → Saf CSS transitions (GPU-accelerated)
 * 2. prefetch={false} ile gereksiz network requestleri engellendi
 * 3. will-change ile browser'a hint verildi
 * 4. transition-all → transition-colors/transform (spesifik)
 * 5. Hover timeout 300ms → 100ms (daha responsive)
 * 6. Memoized components ile re-render optimizasyonu
 */

import { useState, useRef, useEffect, useCallback, memo } from 'react'
import { ChevronRight } from 'lucide-react'
import { CategoryView } from '@/lib/types'
import Link from 'next/link'
import { useLocale } from '@/lib/i18n/client'
import type { Dictionary } from '@/lib/i18n'

interface MegaMenuProps {
  categories: CategoryView[]
  isOpen: boolean
  onClose: () => void
  locale?: string
}

// Subcategory Card - Memoized for performance
const SubcategoryCard = memo(function SubcategoryCard({
  subcategory,
  categorySlug,
  onClose,
  locale = 'tr',
  dictionary,
}: {
  subcategory: CategoryView['subcategories'][0]
  categorySlug: string
  onClose: () => void
  locale?: string
  dictionary?: Dictionary
}) {
  return (
    <Link
      href={`/${locale}/categories/${categorySlug}/${subcategory.slug}`}
      prefetch={false} // ⚡ Critical: Prevent mass prefetching
      onClick={onClose}
      className="group relative overflow-hidden rounded-lg border border-steel-200 
                 hover:border-primary-300 hover:shadow-md 
                 transition-[border-color,box-shadow] duration-200"
    >
      {/* İçerik */}
      <div className="relative z-10 p-2.5 h-full flex flex-col justify-between min-h-[70px]">
        <div>
          <h4 className="font-medium text-xs text-steel-900 group-hover:text-primary-600 
                         transition-colors duration-150 line-clamp-2">
            {subcategory.name}
          </h4>
        </div>
        <div className="mt-1 text-[10px] font-medium text-primary-600">
          {subcategory.productCount} {dictionary?.common?.products || 'products'}
        </div>
      </div>
    </Link>
  )
})

// Category Item - Memoized
const CategoryItem = memo(function CategoryItem({
  category,
  isActive,
  onEnter,
  onLeave,
  onClose,
  locale = 'tr',
}: {
  category: CategoryView
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  onClose: () => void
  locale?: string
}) {
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={`/${locale}/categories/${category.slug}`}
        prefetch={false}
        onClick={onClose}
        className={`
          flex items-center justify-between px-3 py-2.5 rounded-lg
          transition-colors duration-150 group
          ${isActive
            ? 'bg-primary-50 text-primary-600'
            : 'hover:bg-steel-50 text-steel-700'
          }
        `}
      >
        <div className="flex-1">
          <span className="font-medium text-sm">{category.name}</span>
          <span className="text-xs text-steel-400 ml-1.5">
            ({category.totalProductCount})
          </span>
        </div>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-150 ${
            isActive ? 'translate-x-1 text-primary-500' : 'text-steel-400'
          }`}
        />
      </Link>
    </div>
  )
})

export default function MegaMenu({ categories, isOpen, onClose }: MegaMenuProps) {
  const { locale, dictionary } = useLocale()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Mount/unmount animation handling
  useEffect(() => {
    if (isOpen) {
      // Immediate show
      setIsVisible(true)
      if (categories.length > 0) {
        setActiveCategory(categories[0].id)
      }
    } else {
      // Delay unmount for exit animation
      const timer = setTimeout(() => {
        setIsVisible(false)
        setActiveCategory(null)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isOpen, categories])

  // ESC tuşu ile kapat
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleCategoryEnter = useCallback((categoryId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveCategory(categoryId)
  }, [])

  const handleCategoryLeave = useCallback(() => {
    // Reduced timeout for snappier feel
    hoverTimeoutRef.current = setTimeout(() => {
      // Keep active category, don't null it
    }, 100)
  }, [])

  const handleSubcategoryEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }, [])

  // Aktif kategorinin verilerini al
  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  // Don't render if not visible
  if (!isVisible) return null

  return (
    <div
      ref={menuRef}
      className={`
        absolute left-0 right-0 top-full bg-white border-t border-steel-200 shadow-2xl z-50
        transition-[opacity,transform] duration-150 ease-out
        will-change-[opacity,transform]
        ${isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
        }
      `}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Ana Kategoriler - Sol taraf */}
          <div className="col-span-3 border-r border-steel-200 pr-4">
            <h3 className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">
              {dictionary?.nav?.categories || 'Categories'}
            </h3>
            <nav className="space-y-0.5">
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onEnter={() => handleCategoryEnter(category.id)}
                  onLeave={handleCategoryLeave}
                  onClose={onClose}
                  locale={locale}
                />
              ))}
            </nav>
          </div>

          {/* Alt Kategoriler - Sağ taraf */}
          <div
            className="col-span-9"
            onMouseEnter={handleSubcategoryEnter}
            onMouseLeave={handleCategoryLeave}
          >
            {activeCategoryData && (
              <div
                key={activeCategory}
                className="animate-fade-in"
                style={{ animationDuration: '100ms' }}
              >
                {/* Kategori Başlığı */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-steel-900 mb-1">
                    {activeCategoryData.name}
                  </h3>
                  {activeCategoryData.description && (
                    <p className="text-sm text-steel-600 line-clamp-1">
                      {activeCategoryData.description}
                    </p>
                  )}
                </div>

                {/* Alt Kategori Kartları */}
                <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                  <div className="grid grid-cols-4 gap-2">
                    {activeCategoryData.subcategories.map((subcategory) => (
                      <SubcategoryCard
                        key={subcategory.id}
                        subcategory={subcategory}
                        categorySlug={activeCategoryData.slug}
                        onClose={onClose}
                        locale={locale}
                        dictionary={dictionary}
                      />
                    ))}
                  </div>
                </div>

                {/* Tümünü Gör */}
                <div className="mt-4 pt-4 border-t border-steel-100">
                  <Link
                    href={`/${locale}/categories/${activeCategoryData.slug}`}
                    prefetch={false}
                    onClick={onClose}
                    className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-150"
                  >
                    {dictionary?.nav?.viewAllProducts?.replace('{{category}}', activeCategoryData.name) || `View All ${activeCategoryData.name} Products`}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
