/**
 * Mobile Menu Component
 * Mobil navigasyon menüsü - i18n destekli
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { NavItem } from '@/lib/config'
import { siteConfig, getWhatsAppUrl } from '@/lib/config'
import { CategoryView } from '@/lib/types'
import { Button } from '@/components/ui'
import type { Dictionary } from '@/lib/i18n'

export interface MobileMenuProps {
  isOpen: boolean
  items: NavItem[]
  categories: CategoryView[]
  onClose: () => void
  locale?: string
  dictionary?: Dictionary
}

export default function MobileMenu({ 
  isOpen, 
  items, 
  categories,
  onClose,
  locale = 'tr',
  dictionary,
}: MobileMenuProps) {
  const pathname = usePathname()

  // Anasayfada kategoriler bölümüne scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.hasMegaMenu && (pathname === `/${locale}` || pathname === '/')) {
      e.preventDefault()
      const kategorilerSection = document.getElementById('kategoriler')
      if (kategorilerSection) {
        kategorilerSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="lg:hidden mt-4 pb-4 border-t border-steel-100 pt-4 animate-slide-up bg-white">
      <nav className="space-y-2 px-4">
        {items.map((item) => (
          <div key={item.title}>
            <Link
              href={item.href}
              className={`
                block px-4 py-3 rounded-lg font-medium transition-colors
                ${pathname === item.href 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-steel-700 hover:bg-steel-50'
                }
              `}
              onClick={(e) => handleClick(e, item)}
            >
              {item.title}
            </Link>
            
            {/* Kategori alt menüsü */}
            {item.hasMegaMenu && (
              <div className="ml-4 mt-2 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/${locale}/kategoriler/${category.slug}`}
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
                  href={`/${locale}/kategoriler`}
                  className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
                  onClick={onClose}
                >
                  {dictionary?.nav?.viewAllCategories || (locale === 'tr' ? 'Tüm Kategorileri Gör →' : 'View All Categories →')}
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* İletişim Butonları */}
      <div className="mt-4 pt-4 border-t border-steel-100 space-y-2 px-4">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center gap-2 px-4 py-3 text-steel-700 hover:bg-steel-50 rounded-lg"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">{siteConfig.contact.phone}</span>
        </a>
        
        <Button
          href={getWhatsAppUrl(dictionary?.whatsapp?.defaultMessage || (locale === 'tr' ? 'Merhaba' : 'Hello'))}
          variant="whatsapp"
          fullWidth
        >
          {dictionary?.nav?.whatsappContact || (locale === 'tr' ? 'WhatsApp ile İletişim' : 'Contact via WhatsApp')}
        </Button>
      </div>
    </div>
  )
}

