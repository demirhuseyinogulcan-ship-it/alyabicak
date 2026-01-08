/**
 * Logo Component
 * Site logosu - Header ve Footer'da kullanılır
 * 
 * Anasayfadayken tıklanırsa sayfayı en üste scroll eder
 */

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export interface LogoProps {
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  locale?: string
  className?: string
}

const sizes = {
  sm: { width: 80, height: 26 },
  md: { width: 120, height: 38 },
  lg: { width: 160, height: 50 },
}

export default function Logo({ 
  variant = 'default', 
  size = 'md',
  href,
  locale = 'tr',
  className = '',
}: LogoProps) {
  const { width, height } = sizes[size]
  const logoSrc = variant === 'white' ? '/images/logo-white.svg' : '/images/logo.png'
  const logoHref = href || `/${locale}`
  const pathname = usePathname()
  
  // Anasayfada mıyız kontrol et (/, /tr, /en, /ar gibi)
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === logoHref

  const handleClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const logoImage = (
    <Image
      src={logoSrc}
      alt="Alya Bıçak Logo"
      width={width}
      height={height}
      className={`w-auto h-auto ${className}`}
      priority
    />
  )

  return (
    <Link href={logoHref} className="flex-shrink-0" onClick={handleClick}>
      {logoImage}
    </Link>
  )
}

