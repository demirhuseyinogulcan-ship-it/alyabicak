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
    <nav className="hidden lg:flex items-center gap-[clamp(0.25rem,0.5vw,0.625rem)]">
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
              flex items-center gap-1 px-[clamp(0.625rem,1vw,1rem)] py-2 text-[clamp(0.8125rem,0.9vw,0.875rem)] font-medium transition-colors duration-150 rounded-lg
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

