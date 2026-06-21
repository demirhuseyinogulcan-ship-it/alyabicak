/**
 * Breadcrumb Component
 * Sayfa navigasyonu için
 */

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  showHome?: boolean
  separator?: 'chevron' | 'slash'
  className?: string
  variant?: 'default' | 'light'
  homeLabel?: string
}

export default function Breadcrumb({
  items,
  showHome = true,
  separator = 'chevron',
  className = '',
  variant = 'default',
  homeLabel = 'Home',
}: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: homeLabel, href: '/' }, ...items]
    : items

  const textColor = variant === 'light'
    ? 'text-white/70 hover:text-white'
    : 'text-steel-500 hover:text-steel-900'

  const activeColor = variant === 'light'
    ? 'text-white'
    : 'text-steel-900'

  const separatorColor = variant === 'light'
    ? 'text-white/50'
    : 'text-steel-400'

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1 text-sm ${className}`}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1
        const isFirst = index === 0

        return (
          <div key={index} className="flex items-center gap-1">
            {/* Separator */}
            {index > 0 && (
              separator === 'chevron' ? (
                <ChevronRight className={`w-4 h-4 ${separatorColor}`} />
              ) : (
                <span className={separatorColor}>/</span>
              )
            )}

            {/* Item */}
            {isLast || !item.href ? (
              <span className={`font-medium ${activeColor}`}>
                {isFirst && showHome ? (
                  <span className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">{item.label}</span>
                  </span>
                ) : (
                  item.label
                )}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${textColor}`}
              >
                {isFirst && showHome ? (
                  <span className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">{item.label}</span>
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

// Schema.org BreadcrumbList için JSON-LD oluşturucu
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string, homeLabel: string = 'Home') {
  const allItems = [{ label: homeLabel, href: '/' }, ...items]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  }
}

