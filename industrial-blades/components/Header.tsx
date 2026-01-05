/**
 * Header Component
 * Ana header bileşeni - SOLID prensiplerine uygun
 * 
 * Single Responsibility: Sadece header layout yönetimi
 * Alt componentler: Logo, DesktopNav, MobileMenu, MegaMenu
 * 
 * Performance: Dynamic import ile code splitting uygulandı
 * - MegaMenu: Sadece hover'da yüklenir
 * - SearchModal: Sadece arama açıldığında yüklenir
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Menu, X, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { categoryService } from '@/lib/services'
import { mainNavigation, siteConfig } from '@/lib/config'
import { Logo, DesktopNav, MobileMenu } from '@/components/layout'
import { WhatsAppIcon } from '@/components/icons'

// Dynamic imports - Code splitting için
// Bu componentler sadece gerektiğinde yüklenir, ilk sayfa yüklemesini hızlandırır
const MegaMenu = dynamic(() => import('./MegaMenu'), {
  ssr: false, // Sunucuda render etmeye gerek yok, sadece client'ta
  loading: () => null, // Yüklenirken bir şey gösterme
})

const SearchModal = dynamic(
  () => import('./SearchModal').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
)

// useSearchModal hook'unu ayrı import et (dynamic import'a dahil değil)
import { useSearchModal } from './SearchModal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null)
  
  // Search Modal
  const { isOpen: isSearchOpen, openSearch, closeSearch } = useSearchModal()

  // Kategori verilerini servis üzerinden al
  const categories = categoryService.getAllCategoriesWithCounts()

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
    }, 200)
    setCloseTimer(timer)
  }, [])

  // Mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav 
            items={mainNavigation}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
          />

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* e-Katalog */}
            <a
              href="/katalog"
              className="flex items-center justify-center h-10 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              e-Katalog
            </a>
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Merhaba, alyabicak.com sitesinden yazıyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-10 px-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            
            {/* Arama */}
            <button
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-2 text-steel-500 bg-steel-100 hover:bg-steel-200 rounded-lg transition-colors group"
              aria-label="Arama"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm hidden xl:block">Ara...</span>
              <kbd className="hidden xl:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs text-steel-400 bg-white rounded border border-steel-200 group-hover:border-steel-300">
                <span className="text-[10px]">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
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
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={mainNavigation}
        categories={categories}
        onClose={closeMobileMenu}
      />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  )
}
