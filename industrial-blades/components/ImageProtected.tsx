/**
 * Protected Image Component
 * Görselleri kopyalamaya/indirmeye karşı korur
 *
 * Koruma yöntemleri:
 * 1. Sağ tık engelleme
 * 2. Şeffaf overlay katmanı
 * 3. Drag & drop engelleme
 * 4. Pointer events engelleme
 */

'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface ImageProtectedProps extends Omit<ImageProps, 'onContextMenu' | 'onDragStart'> {
  /** Korumayı devre dışı bırak (geliştirme için) */
  disableProtection?: boolean
}

export default function ImageProtected({
  disableProtection = false,
  alt,
  className = '',
  ...props
}: ImageProtectedProps) {
  const [showWarning, setShowWarning] = useState(false)

  // Koruma devre dışıysa normal Image döndür
  if (disableProtection) {
    return <Image alt={alt} className={className} {...props} />
  }

  // Sağ tık engelleme
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowWarning(true)
    setTimeout(() => setShowWarning(false), 2000)
    return false
  }

  // Sürükleme engelleme
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div className="relative select-none">
      {/* Görsel */}
      <Image
        alt={alt}
        className={`pointer-events-none select-none ${className}`}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        draggable={false}
        {...props}
      />

      {/* Şeffaf koruma katmanı */}
      <div
        className="absolute inset-0 z-10"
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
        }}
      />

      {/* Uyarı mesajı */}
      {showWarning && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 animate-fade-in">
          <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm text-steel-700 font-medium">
              Bu görsel korumalıdır
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Sayfa genelinde sağ tık koruması için hook
 * Layout veya sayfa componentinde kullanılabilir
 */
export function useImageProtection() {
  if (typeof window === 'undefined') return

  // Sayfa genelinde sağ tık
  const handleContextMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      e.preventDefault()
    }
  }

  // Klavye kısayolları engelleme (Ctrl+S, Ctrl+U, F12)
  const handleKeyDown = (e: KeyboardEvent) => {
    // Ctrl+S (kaydet)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault()
    }
    // Ctrl+U (kaynak kodu)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault()
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('keydown', handleKeyDown)
  }
}

