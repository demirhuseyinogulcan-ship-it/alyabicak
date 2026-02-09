/**
 * Mobile Menu Component
 * Mobil navigasyon menüsü - i18n destekli
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Search, ChevronDown } from 'lucide-react'
import { NavItem } from '@/lib/config'
import { siteConfig, getWhatsAppUrl } from '@/lib/config'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { CategoryView } from '@/lib/types'
import { Button } from '@/components/ui'
import type { Dictionary } from '@/lib/i18n'

export interface MobileMenuProps {
  isOpen: boolean
  items: NavItem[]
  categories: CategoryView[]
  onClose: () => void
  onSearchClick?: () => void
  locale?: string
  dictionary?: Dictionary
}

export default function MobileMenu({ 
  isOpen, 
  items, 
  categories,
  onClose,
  onSearchClick,
  locale = 'tr',
  dictionary,
}: MobileMenuProps) {
  const pathname = usePathname()
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="lg:hidden mt-4 pb-4 border-t border-steel-100 pt-4 animate-slide-up bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
      {/* Arama Butonu - En Üstte */}
      <div className="mb-3 px-4">
        <button
          onClick={() => {
            onSearchClick?.()
            onClose()
          }}
          className="w-full flex items-center gap-3 px-4 py-3 bg-steel-100 hover:bg-steel-200 rounded-lg transition-colors"
        >
          <Search className="w-5 h-5 text-steel-500" />
          <span className="text-steel-500">
            {dictionary?.nav?.searchPlaceholder || dictionary?.nav?.search || 'Search products...'}
          </span>
        </button>
      </div>

      {/* Dil Seçici */}
      <div className="mb-4 px-4">
        <div className="mb-2">
          <span className="text-sm font-medium text-steel-600">
            {dictionary?.nav?.selectLanguage || 'Select Language'}
          </span>
        </div>
        <LanguageSwitcher variant="bottomsheet" />
      </div>

      <nav className="space-y-1 px-4">
        {items.map((item) => (
          <div key={item.title}>
            {item.hasMegaMenu ? (
              // Kategoriler - Collapse edilebilir
              <>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors
                    ${isCategoriesOpen ? 'text-primary-600 bg-primary-50' : 'text-steel-700 hover:bg-steel-50'}
                  `}
                >
                  <span>{item.title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Kategori alt menüsü - Collapse */}
                {isCategoriesOpen && (
                  <div className="ml-4 mt-1 space-y-1 animate-slide-up">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/${locale}/categories/${category.slug}`}
                        className="block px-4 py-2 text-sm text-steel-600 hover:text-primary-600 hover:bg-steel-50 rounded-lg"
                        onClick={onClose}
                      >
                        {category.name}
                        <span className="text-xs text-steel-400 ml-1">
                          ({category.totalProductCount})
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={`/${locale}/categories`}
                      className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
                      onClick={onClose}
                    >
                      {dictionary?.nav?.viewAllCategories || 'View All Categories →'}
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`
                  block px-4 py-3 rounded-lg font-medium transition-colors
                  ${pathname === item.href 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-steel-700 hover:bg-steel-50'
                  }
                `}
                onClick={onClose}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* İletişim Butonları */}
      <div className="mt-4 pt-4 border-t border-steel-100 space-y-2 px-4">
        {/* e-Katalog CTA */}
        <Link
          href={`/${locale}/catalog`}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          onClick={onClose}
        >
          {dictionary?.nav?.catalog || 'e-Catalog'}
        </Link>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center gap-2 px-4 py-3 text-steel-700 hover:bg-steel-50 rounded-lg"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">{siteConfig.contact.phone}</span>
        </a>
        
        <Button
          href={getWhatsAppUrl(dictionary?.whatsapp?.defaultMessage || 'Hello')}
          variant="whatsapp"
          fullWidth
        >
          {dictionary?.nav?.whatsappContact || 'Contact via WhatsApp'}
        </Button>
      </div>
    </div>
  )
}

