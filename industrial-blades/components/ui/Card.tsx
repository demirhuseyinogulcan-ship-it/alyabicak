/**
 * Card Component
 * Kategori, ürün ve içerik kartları için
 */

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Card variants
const cardVariants = {
  default: 'bg-white shadow-sm hover:shadow-xl',
  elevated: 'bg-white shadow-lg hover:shadow-2xl',
  outline: 'bg-white border border-steel-200 hover:border-primary-300 hover:shadow-lg',
  ghost: 'bg-steel-50 hover:bg-steel-100',
} as const

export interface CardProps {
  variant?: keyof typeof cardVariants
  href?: string
  className?: string
  children: ReactNode
  hover?: boolean
}

export function Card({
  variant = 'default',
  href,
  className = '',
  children,
  hover = true,
}: CardProps) {
  const baseStyles = `
    rounded-xl overflow-hidden
    transition-all duration-300
    ${cardVariants[variant]}
    ${hover ? 'hover:-translate-y-1' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  if (href) {
    return (
      <Link href={href} className={`group block ${baseStyles}`}>
        {children}
      </Link>
    )
  }

  return <div className={baseStyles}>{children}</div>
}

// Card Image
export interface CardImageProps {
  src?: string
  alt: string
  fallbackIcon?: ReactNode
  overlay?: boolean
  aspectRatio?: 'square' | 'video' | 'wide'
}

const aspectRatios = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[16/9]',
}

export function CardImage({
  src,
  alt,
  fallbackIcon,
  overlay = true,
  aspectRatio = 'video',
}: CardImageProps) {
  return (
    <div className={`relative ${aspectRatios[aspectRatio]} bg-gradient-to-br from-steel-200 to-steel-300 overflow-hidden`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : fallbackIcon ? (
        <div className="absolute inset-0 flex items-center justify-center">
          {fallbackIcon}
        </div>
      ) : null}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 via-transparent to-transparent" />
      )}
    </div>
  )
}

// Card Content
export interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

// Card Title
export interface CardTitleProps {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

export function CardTitle({ children, as: Tag = 'h3', className = '' }: CardTitleProps) {
  return (
    <Tag className={`text-xl font-bold text-steel-900 group-hover:text-primary-600 transition-colors ${className}`}>
      {children}
    </Tag>
  )
}

// Card Description
export interface CardDescriptionProps {
  children: ReactNode
  className?: string
  lines?: number
}

export function CardDescription({ children, className = '', lines = 2 }: CardDescriptionProps) {
  const lineClamp = lines === 1 ? 'line-clamp-1' : lines === 2 ? 'line-clamp-2' : 'line-clamp-3'
  return (
    <p className={`text-steel-600 ${lineClamp} ${className}`}>
      {children}
    </p>
  )
}

// Card Footer
export interface CardFooterProps {
  children: ReactNode
  className?: string
  border?: boolean
}

export function CardFooter({ children, className = '', border = true }: CardFooterProps) {
  return (
    <div className={`px-6 pb-6 ${border ? 'pt-4 border-t border-steel-100' : ''} ${className}`}>
      {children}
    </div>
  )
}

// Card Badge (for overlays)
export interface CardBadgeProps {
  children: ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

const badgePositions = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
}

const badgeVariants = {
  primary: 'bg-primary-600 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white',
}

export function CardBadge({
  children,
  position = 'top-right',
  variant = 'primary',
}: CardBadgeProps) {
  return (
    <span className={`absolute ${badgePositions[position]} ${badgeVariants[variant]} px-3 py-1 text-sm font-semibold rounded-full`}>
      {children}
    </span>
  )
}

export default Card

