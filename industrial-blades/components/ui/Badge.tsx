/**
 * Badge Component
 * Etiketler, durumlar ve küçük bilgi gösterimleri için
 */

import { ReactNode } from 'react'

const variants = {
  default: 'bg-steel-100 text-steel-700',
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-steel-900 text-white',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  outline: 'border border-steel-300 text-steel-600 bg-transparent',
  'outline-primary': 'border border-primary-300 text-primary-600 bg-transparent',
} as const

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const

export interface BadgeProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  rounded?: 'sm' | 'md' | 'full'
  icon?: ReactNode
  className?: string
  children: ReactNode
}

const roundedStyles = {
  sm: 'rounded',
  md: 'rounded-md',
  full: 'rounded-full',
}

export default function Badge({
  variant = 'default',
  size = 'md',
  rounded = 'md',
  icon,
  className = '',
  children,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${roundedStyles[rounded]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

// Status Badge - Özel kullanım için
export interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending' | 'success' | 'error'
  children: ReactNode
}

const statusConfig = {
  active: { variant: 'success' as const, dot: 'bg-green-500' },
  inactive: { variant: 'default' as const, dot: 'bg-steel-400' },
  pending: { variant: 'warning' as const, dot: 'bg-yellow-500' },
  success: { variant: 'success' as const, dot: 'bg-green-500' },
  error: { variant: 'danger' as const, dot: 'bg-red-500' },
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <Badge
      variant={config.variant}
      icon={<span className={`w-2 h-2 rounded-full ${config.dot}`} />}
    >
      {children}
    </Badge>
  )
}

// Count Badge - Sayı gösterimi için
export interface CountBadgeProps {
  count: number
  max?: number
  variant?: keyof typeof variants
}

export function CountBadge({ count, max = 99, variant = 'primary' }: CountBadgeProps) {
  const displayCount = count > max ? `${max}+` : count.toString()

  return (
    <Badge variant={variant} size="sm" rounded="full">
      {displayCount}
    </Badge>
  )
}

