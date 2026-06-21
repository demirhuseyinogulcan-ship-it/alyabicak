/**
 * Button Component
 * Tüm butonlar için merkezi bileşen
 *
 * Variants: primary, secondary, outline, ghost, danger
 * Sizes: sm, md, lg
 */

import { forwardRef, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

// Variant stilleri
const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-steel-900 hover:bg-steel-800 text-white shadow-lg hover:shadow-xl',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  ghost: 'text-steel-700 hover:bg-steel-100 hover:text-steel-900',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  whatsapp: 'bg-green-500 hover:bg-green-600 text-white',
} as const

// Size stilleri
const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-base gap-2',
} as const

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  href?: string
  target?: string
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      target,
      icon: Icon,
      iconPosition = 'right',
      isLoading = false,
      fullWidth = false,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-lg
      transition-all duration-200
      hover:shadow-lg active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      ${variants[variant]}
      ${sizes[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ')

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {Icon && iconPosition === 'left' && !isLoading && (
          <Icon className="w-5 h-5" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && !isLoading && (
          <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        )}
      </>
    )

    // Link olarak render
    if (href && !disabled) {
      const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

      if (isExternal) {
        return (
          <a
            href={href}
            target={target || '_blank'}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={`group ${baseStyles}`}
          >
            {content}
          </a>
        )
      }

      return (
        <Link href={href} className={`group ${baseStyles}`}>
          {content}
        </Link>
      )
    }

    // Button olarak render
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`group ${baseStyles}`}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

