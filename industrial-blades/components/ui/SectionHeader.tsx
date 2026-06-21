/**
 * SectionHeader Component
 * Sayfa bölüm başlıkları için standart bileşen
 */

import { ReactNode } from 'react'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  action?: ReactNode
  className?: string
}

const alignStyles = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
}

const titleSizes = {
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
}

const subtitleSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-base',
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  badge,
  align = 'center',
  size = 'md',
  action,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-12 ${alignStyles[align]} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}

      <h2 className={`font-medium text-steel-900 mb-4 ${titleSizes[size]}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-steel-600 leading-relaxed ${subtitleSizes[size]} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {description && (
        <p className={`text-steel-600 leading-relaxed ${subtitleSizes[size]} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  )
}

// Page Header - Sayfa başlıkları için (Hero alanı)
// STANDART: py-16, text-3xl md:text-4xl font-medium, text-base description
export interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: ReactNode
  backgroundImage?: string
  overlay?: boolean
  centered?: boolean
  stats?: string
  children?: ReactNode
}

export function PageHeader({
  title,
  description,
  breadcrumb,
  backgroundImage,
  overlay = true,
  centered = true,
  stats,
  children,
}: PageHeaderProps) {
  return (
    <section
      className="relative text-white py-16 overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Background gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-steel-900 to-steel-800" />
      )}

      {/* Overlay */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        {breadcrumb && (
          <div className="mb-4">
            {breadcrumb}
          </div>
        )}

        <div className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
          <h1 className={`${centered ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'} font-bold mb-3`}>
            {title}
          </h1>

          {description && (
            <p className={`text-base ${centered ? 'text-steel-300' : 'text-xl text-steel-200'} leading-relaxed`}>
              {description}
            </p>
          )}

          {stats && (
            <div className="mt-4 text-steel-300">
              {stats}
            </div>
          )}

          {children && (
            <div className="mt-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

