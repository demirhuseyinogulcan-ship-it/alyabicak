/**
 * Accessibility Components
 * Erişilebilirlik için yardımcı bileşenler
 */

import { ReactNode } from 'react'

// =============================================================================
// SKIP LINK
// =============================================================================

export interface SkipLinkProps {
  href?: string
  children?: ReactNode
}

/**
 * Skip to main content link
 * Klavye kullanıcıları için navigasyonu atlama
 */
export function SkipLink({
  href = '#main-content',
  children = 'Ana içeriğe geç'
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white
        focus:rounded-lg focus:shadow-lg focus:outline-none
        transition-all
      "
    >
      {children}
    </a>
  )
}

// =============================================================================
// VISUALLY HIDDEN
// =============================================================================

export interface VisuallyHiddenProps {
  children: ReactNode
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Screen reader only content
 * Ekranda görünmez ama screen reader tarafından okunur
 */
export function VisuallyHidden({ children, as: Tag = 'span' }: VisuallyHiddenProps) {
  return (
    <Tag className="sr-only">
      {children}
    </Tag>
  )
}

// =============================================================================
// LIVE REGION
// =============================================================================

export interface LiveRegionProps {
  children: ReactNode
  mode?: 'polite' | 'assertive'
  atomic?: boolean
}

/**
 * ARIA Live Region
 * Dinamik içerik değişikliklerini screen reader'a duyurur
 */
export function LiveRegion({
  children,
  mode = 'polite',
  atomic = true,
}: LiveRegionProps) {
  return (
    <div
      aria-live={mode}
      aria-atomic={atomic}
      className="sr-only"
    >
      {children}
    </div>
  )
}

// =============================================================================
// FOCUS TRAP (basit versiyon)
// =============================================================================

export interface FocusTrapProps {
  children: ReactNode
  active?: boolean
}

/**
 * Focus Trap
 * Modal ve dialog'larda focus'u içeride tutar
 */
export function FocusTrap({ children, active = true }: FocusTrapProps) {
  if (!active) return <>{children}</>

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {children}
    </div>
  )
}

// =============================================================================
// ICON BUTTON
// =============================================================================

export interface IconButtonA11yProps {
  label: string
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

/**
 * Accessible Icon Button
 * Sadece icon içeren butonlar için erişilebilir wrapper
 */
export function IconButton({
  label,
  children,
  onClick,
  className = '',
  disabled = false,
}: IconButtonA11yProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`
        inline-flex items-center justify-center
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  )
}

// =============================================================================
// LOADING ANNOUNCEMENT
// =============================================================================

export interface LoadingAnnouncementProps {
  isLoading: boolean
  loadingText?: string
  loadedText?: string
}

/**
 * Loading State Announcement
 * Yükleme durumunu screen reader'a duyurur
 */
export function LoadingAnnouncement({
  isLoading,
  loadingText = 'Yükleniyor...',
  loadedText = 'Yükleme tamamlandı.',
}: LoadingAnnouncementProps) {
  return (
    <LiveRegion mode="polite">
      {isLoading ? loadingText : loadedText}
    </LiveRegion>
  )
}

