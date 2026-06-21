// =============================================================================
// useLandscapeLock — Mobil Landscape Kilit Hook'u
// =============================================================================
// Mobil cihazlarda Fullscreen + Orientation Lock API ile yatay mod zorlar.
// Desteklenmiyorsa (iOS Safari) sessizce başarısız olur — fallback CSS ile.
//
// Kullanım:
//   const { isLocked, isPortrait, lock, unlock } = useLandscapeLock();
//   await lock();   // Ayarlar açılırken
//   await unlock(); // Ayarlar kapanırken
// =============================================================================

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface LandscapeLockReturn {
  /** Orientation lock aktif mi */
  isLocked: boolean;
  /** Cihaz portrait modda mı */
  isPortrait: boolean;
  /** Landscape kilidi etkinleştir */
  lock: () => Promise<void>;
  /** Kilidi kaldır */
  unlock: () => Promise<void>;
}

export function useLandscapeLock(): LandscapeLockReturn {
  const [isLocked, setIsLocked] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const lockedRef = useRef(false);

  // Portrait/landscape durumunu takip et
  useEffect(() => {
    function checkOrientation() {
      if (typeof window === 'undefined') return;
      const mq = window.matchMedia('(orientation: portrait)');
      setIsPortrait(mq.matches);
    }

    checkOrientation();

    const mq = window.matchMedia('(orientation: portrait)');
    const handler = () => checkOrientation();
    mq.addEventListener('change', handler);

    return () => mq.removeEventListener('change', handler);
  }, []);

  // Fullscreen değişikliğini dinle
  useEffect(() => {
    function handleFullscreenChange() {
      if (!document.fullscreenElement && lockedRef.current) {
        // Kullanıcı ESC veya geri ile fullscreen'den çıktı
        lockedRef.current = false;
        setIsLocked(false);
        try {
          screen.orientation.unlock();
        } catch {
          // ignore
        }
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const lock = useCallback(async () => {
    // Mobil cihaz kontrolü — masaüstünde gereksiz
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    try {
      // 1. Fullscreen moduna geç (orientation lock için gerekli)
      const elem = document.documentElement;
      if (elem.requestFullscreen && !document.fullscreenElement) {
        await elem.requestFullscreen();
      }

      // 2. Landscape kilidi
      if ('orientation' in screen && 'lock' in screen.orientation) {
        await (screen.orientation.lock as (orientation: string) => Promise<void>)('landscape');
        lockedRef.current = true;
        setIsLocked(true);
      }
    } catch {
      // Desteklenmiyor (iOS Safari) veya kullanıcı reddetti — sessiz fallback
      // CSS `landscape:` variant ile UI yine de uyum sağlar
    }

    // Body scroll kilitle
    document.body.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(async () => {
    // Body scroll aç
    document.body.style.overflow = '';

    try {
      if (lockedRef.current) {
        screen.orientation.unlock();
        lockedRef.current = false;
        setIsLocked(false);
      }

      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // ignore
    }
  }, []);

  return { isLocked, isPortrait, lock, unlock };
}
