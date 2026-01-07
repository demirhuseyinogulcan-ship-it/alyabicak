/**
 * Global Site Protection
 * Tüm siteyi koruma altına alır (sağ tık, dev tools, kaynak kodu vb.)
 * Layout.tsx'e eklenerek çalışır
 * 
 * Koruma Özellikleri:
 * - Sağ tık engelleme (tüm sayfa) - sessiz, uyarı yok
 * - F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U engelleme
 * - Ctrl+S (sayfa kaydetme) engelleme
 * - Görsel sürükleme engelleme
 * - Metin seçimi kısıtlama (görseller üzerinde)
 */

'use client'

import { useEffect } from 'react'

export default function GlobalImageProtection() {
  useEffect(() => {
    // Tüm sayfa için sağ tık engelleme (sessiz - uyarı yok)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Sürükleme engelleme
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Klavye kısayolları engelleme
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 - DevTools
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+I - DevTools
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+J - Console
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+C - Inspect element
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+U - View source
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+S - Save page
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
    }

    // Event listener'ları ekle
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null // Bu component görsel render etmez, sadece koruma sağlar
}

