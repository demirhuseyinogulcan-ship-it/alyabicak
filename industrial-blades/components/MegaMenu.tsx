'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { CategoryView } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

interface MegaMenuProps {
  categories: CategoryView[]
  isOpen: boolean
  onClose: () => void
}

export default function MegaMenu({ categories, isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // İlk kategoriyi otomatik aktif yap
  useEffect(() => {
    if (isOpen && categories.length > 0) {
      setActiveCategory(categories[0].id)
    } else if (!isOpen) {
      setActiveCategory(null)
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

  const handleCategoryEnter = (categoryId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveCategory(categoryId)
  }

  const handleCategoryLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      // Aktif kategoriyi koru, null yapma
    }, 300)
  }

  const handleSubcategoryEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  // Aktif kategorinin verilerini al
  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full bg-white border-t border-steel-200 shadow-2xl z-50"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Ana Kategoriler - Sol taraf (daha dar) */}
              <div className="col-span-3 border-r border-steel-200 pr-4">
                <h3 className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">
                  Kategoriler
                </h3>
                <nav className="space-y-0.5">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      onMouseEnter={() => handleCategoryEnter(category.id)}
                      onMouseLeave={handleCategoryLeave}
                    >
                      <Link
                        href={`/kategoriler/${category.slug}`}
                        onClick={onClose}
                        className={`
                          flex items-center justify-between px-3 py-2.5 rounded-lg
                          transition-all duration-200 group
                          ${activeCategory === category.id
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
                          className={`w-4 h-4 transition-transform ${
                            activeCategory === category.id ? 'translate-x-1 text-primary-500' : 'text-steel-400'
                          }`}
                        />
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Alt Kategoriler - Sağ taraf */}
              <div
                className="col-span-9"
                onMouseEnter={handleSubcategoryEnter}
                onMouseLeave={handleCategoryLeave}
              >
                <AnimatePresence mode="wait">
                  {activeCategoryData && (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
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
                      <div className="grid grid-cols-3 gap-3">
                        {activeCategoryData.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.id}
                            href={`/kategoriler/${activeCategoryData.slug}/${subcategory.slug}`}
                            onClick={onClose}
                            className="group relative overflow-hidden rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 min-h-[100px]"
                          >
                            {/* Arka plan görseli */}
                            {subcategory.image && (
                              <div className="absolute inset-0 z-0">
                                <Image
                                  src={subcategory.image}
                                  alt={subcategory.name}
                                  fill
                                  className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                                  sizes="(max-width: 768px) 100vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/80" />
                              </div>
                            )}

                            {/* İçerik */}
                            <div className="relative z-10 p-3 h-full flex flex-col justify-between">
                              <div>
                                <h4 className="font-medium text-sm text-steel-900 group-hover:text-primary-600 transition-colors">
                                  {subcategory.name}
                                </h4>
                                {subcategory.description && (
                                  <p className="text-xs text-steel-500 line-clamp-2 mt-1">
                                    {subcategory.description}
                                  </p>
                                )}
                              </div>
                              <div className="mt-2 text-xs font-medium text-primary-600">
                                {subcategory.productCount} ürün
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Tümünü Gör */}
                      <div className="mt-4 pt-4 border-t border-steel-100">
                        <Link
                          href={`/kategoriler/${activeCategoryData.slug}`}
                          onClick={onClose}
                          className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Tüm {activeCategoryData.name} Ürünlerini Gör
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
