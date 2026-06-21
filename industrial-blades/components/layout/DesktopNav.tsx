/**
 * Desktop Navigation Component
 * Masaüstü navigasyon menüsü
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { NavItem } from '@/lib/config'

export interface DesktopNavProps {
  items: NavItem[]
  onMenuOpen?: () => void
  onMenuClose?: () => void
  isMegaMenuOpen?: boolean
}

export default function DesktopNav({
  items,
  onMenuOpen,
  onMenuClose,
  isMegaMenuOpen = false,
}: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
      {items.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => item.hasMegaMenu && onMenuOpen?.()}
          onMouseLeave={() => item.hasMegaMenu && onMenuClose?.()}
        >
          <Link
            href={item.href}
            prefetch={true}
            className={`
              flex items-center gap-0.5 px-2 xl:px-3 py-1.5 text-[13px] xl:text-sm font-medium transition-colors duration-150 rounded-lg whitespace-nowrap
              ${item.hasMegaMenu && isMegaMenuOpen
                ? 'text-primary-600 bg-primary-50'
                : pathname === item.href
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-steel-700 hover:text-primary-600 hover:bg-steel-50'
              }
            `}
          >
            {item.title}
            {item.hasMegaMenu && (
              <ChevronDown className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            )}
          </Link>
        </div>
      ))}
    </nav>
  )
}

