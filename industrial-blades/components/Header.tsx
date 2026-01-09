/**
 * Header Component
 * Ana header bileşeni - SOLID prensiplerine uygun + i18n destekli
 * 
 * Single Responsibility: Sadece header layout yönetimi
 * Alt componentler: Logo, DesktopNav, MobileMenu, MegaMenu
 * 
 * Performance: Dynamic import ile code splitting uygulandı
 * - MegaMenu: Sadece hover'da yüklenir
 * - SearchModal: Sadece arama açıldığında yüklenir
 */

'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Menu, X, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { categoryService } from '@/lib/services'
import { mainNavigation, siteConfig } from '@/lib/config'
import { Logo, DesktopNav, MobileMenu } from '@/components/layout'
import { WhatsAppIcon } from '@/components/icons'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useLocale, useTranslation } from '@/components/providers/LocaleProvider'

// Dynamic imports - Code splitting için
const MegaMenu = dynamic(() => import('./MegaMenu'), {
  ssr: false,
  loading: () => null,
})

const SearchModal = dynamic(
  () => import('./SearchModal').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
)

import { useSearchModal } from './SearchModal'

// Helper function to get nested dictionary value
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let value: unknown = obj
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return path // Return the key as fallback
    }
  }
  return typeof value === 'string' ? value : path
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null)
  
  // i18n
  const { locale } = useLocale()
  const dict = useTranslation()
  
  // Search Modal
  const { isOpen: isSearchOpen, openSearch, closeSearch } = useSearchModal()

  // Kategori verilerini servis üzerinden al (artık çevrilmiş olarak gelir)
  const categories = categoryService.getAllCategoriesWithCounts(locale)
  
  // Localized navigation items
  const localizedNavItems = useMemo(() => {
    return mainNavigation.map(item => ({
      ...item,
      title: getNestedValue(dict as Record<string, unknown>, item.titleKey),
      href: item.href.startsWith('/#') 
        ? `/${locale}${item.href}` 
        : `/${locale}${item.href}`,
    }))
  }, [locale, dict])

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mega menu handlers
  const handleMenuOpen = useCallback(() => {
    if (closeTimer) clearTimeout(closeTimer)
    setIsMegaMenuOpen(true)
  }, [closeTimer])

  const handleMenuClose = useCallback(() => {
    const timer = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 100)
    setCloseTimer(timer)
  }, [])

  // Mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  // Localized WhatsApp message
  const whatsappMessage = locale === 'tr' 
    ? 'Merhaba, alyabicak.com sitesinden yazıyorum.' 
    : 'Hello, I am writing from alyabicak.com.'

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-[background-color,box-shadow,padding] duration-200 ease-out
        ${isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo locale={locale} />

          {/* Desktop Navigation */}
          <DesktopNav 
            items={localizedNavItems}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
            isMegaMenuOpen={isMegaMenuOpen}
          />

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            {/* e-Katalog */}
            <a
              href={`/${locale}/catalog`}
              className="flex items-center justify-center h-9 px-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {dict.nav.catalog}
            </a>
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 h-9 px-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            
            {/* Arama */}
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 h-9 px-2.5 text-steel-500 bg-steel-100 hover:bg-steel-200 rounded-lg transition-colors group"
              aria-label={dict.nav.search}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm hidden 2xl:block">{dict.nav.search}...</span>
              <kbd className="hidden 2xl:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs text-steel-400 bg-white rounded border border-steel-200 group-hover:border-steel-300">
                ⌘K
              </kbd>
            </button>
            
            {/* Dil Seçici - Sadece Desktop */}
            <div className="hidden lg:flex">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? dict.common.close : dict.common.open}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
      >
        <MegaMenu 
          categories={categories}
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
          locale={locale}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={localizedNavItems}
        categories={categories}
        onClose={closeMobileMenu}
        locale={locale}
        dictionary={dict}
      />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  )
}
