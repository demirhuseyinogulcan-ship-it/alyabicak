/**
 * Language Switcher Component
 * Dil deÃ„Å¸iÃ…Å¸tirme butonu - Domain-aware
 *
 * Domain Strategy:
 * - TÃƒÂ¼rkÃƒÂ§e (tr) Ã¢â€ â€™ alyabicak.com
 * - English/Arabic Ã¢â€ â€™ alyablade.com
 */

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Globe, ChevronDown, Check, X } from 'lucide-react';
import { i18nConfig, isLocale, type Locale } from '@/lib/i18n';
import { getDomainHost } from '@/lib/config/domains';
import { useTranslation } from '@/components/providers/LocaleProvider';

export interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons' | 'bottomsheet'
}

export function LanguageSwitcher({ variant = 'dropdown' }: LanguageSwitcherProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dict = useTranslation();

  // URL'den mevcut locale'i al
  const currentLocale = useMemo(() => {
    const segments = pathname.split('/');
    const segment = segments[1];
    return isLocale(segment) ? segment : i18nConfig.defaultLocale;
  }, [pathname]);

  // DÃ„Â±Ã…Å¸arÃ„Â± tÃ„Â±klandÃ„Â±Ã„Å¸Ã„Â±nda kapat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // =========================================================================
    // HREFLANG-AWARE LOCALE SWITCH
    // Next.js Metadata API tarafÃ„Â±ndan ÃƒÂ¼retilen <link rel="alternate"> tag'larÃ„Â±nÃ„Â±
    // DOM'dan okuyarak doÃ„Å¸ru locale URL'ini belirler.
    // Bu sayede ÃƒÂ¼rÃƒÂ¼n sayfalarÃ„Â±nda slug ÃƒÂ§evirisi otomatik ÃƒÂ§alÃ„Â±Ã…Å¸Ã„Â±r:
    //   /tr/products/vakum-paketleme-bicagi Ã¢â€ â€™ /en/products/vacuum-packaging-knife
    // =========================================================================
    let newPath: string;

    // 1. DOM'daki hreflang metadata'sÃ„Â±ndan doÃ„Å¸ru URL'i oku
    const alternateLink = typeof document !== 'undefined'
      ? document.querySelector(`link[rel="alternate"][hreflang="${newLocale}"]`)
      : null;

    if (alternateLink) {
      try {
        const alternateUrl = new URL(alternateLink.getAttribute('href')!);
        newPath = alternateUrl.pathname;
      } catch {
        // URL parse hatasÃ„Â± Ã¢â‚¬â€ fallback'e dÃƒÂ¼Ã…Å¸
        const segments = pathname.split('/');
        segments[1] = newLocale;
        newPath = segments.join('/');
      }
    } else {
      // 2. Fallback: basit locale prefix deÃ„Å¸iÃ…Å¸ikliÃ„Å¸i
      const segments = pathname.split('/');
      segments[1] = newLocale;
      newPath = segments.join('/');
    }

    // Cookie'yi gÃƒÂ¼ncelle
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

    // Production'da domain deÃ„Å¸iÃ…Å¸ikliÃ„Å¸i gerekiyor mu kontrol et
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
    const targetDomain = getDomainHost(newLocale);
    const isProduction = currentHost.includes('alyablade.com') || currentHost.includes('alyabicak.com');

    if (isProduction && !currentHost.includes(targetDomain.replace('www.', ''))) {
      // FarklÃ„Â± domain'e yÃƒÂ¶nlendir
      const protocol = typeof window !== 'undefined' ? window.location.protocol : 'https:';
      window.location.href = `${protocol}//${targetDomain}${newPath}`;
    } else {
      // AynÃ„Â± domain'de kal
      router.push(newPath);
    }

    setIsOpen(false);
  };

  // Mobil iÃƒÂ§in Bottom Sheet gÃƒÂ¶rÃƒÂ¼nÃƒÂ¼mÃƒÂ¼ (scalable - 20+ dil iÃƒÂ§in)
  if (variant === 'bottomsheet') {
    return (
      <>
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 bg-steel-100 hover:bg-steel-200 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{i18nConfig.localeFlags[currentLocale]}</span>
            <span className="font-medium text-steel-700">{i18nConfig.localeNames[currentLocale]}</span>
          </div>
          <ChevronDown className="w-5 h-5 text-steel-500" />
        </button>

        {/* Bottom Sheet Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/50 animate-fade-in"
            onClick={() => setIsOpen(false)}
          >
            {/* Bottom Sheet Container */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl animate-slide-up max-h-[70vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-steel-200">
                <h3 className="text-lg font-semibold text-steel-800">
                  {dict.nav?.selectLanguage || 'Select Language'}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-steel-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-steel-500" />
                </button>
              </div>

              {/* Language List - Scrollable */}
              <div className="overflow-y-auto flex-1 py-2">
                {i18nConfig.locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className={`
                      w-full flex items-center gap-4 px-4 py-4 transition-colors
                      ${currentLocale === locale
                        ? 'bg-primary-50'
                        : 'hover:bg-steel-50'
                      }
                    `}
                  >
                    <span className="text-2xl">{i18nConfig.localeFlags[locale]}</span>
                    <span className={`flex-1 text-left text-base ${currentLocale === locale ? 'font-semibold text-primary-700' : 'text-steel-700'}`}>
                      {i18nConfig.localeNames[locale]}
                    </span>
                    {currentLocale === locale && (
                      <Check className="w-5 h-5 text-primary-600" />
                    )}
                  </button>
                ))}
              </div>

              {/* Safe area for mobile */}
              <div className="h-6 bg-white" />
            </div>
          </div>
        )}
      </>
    );
  }

  // Mobil iÃƒÂ§in yatay buton gÃƒÂ¶rÃƒÂ¼nÃƒÂ¼mÃƒÂ¼ (3 dil iÃƒÂ§in)
  if (variant === 'buttons') {
    return (
      <div className="flex gap-2">
        {i18nConfig.locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors
              ${currentLocale === locale
                ? 'bg-primary-600 text-white'
                : 'bg-steel-100 text-steel-700 hover:bg-steel-200'
              }
            `}
          >
            <span className="text-lg">{i18nConfig.localeFlags[locale]}</span>
            <span className="text-sm font-semibold">{i18nConfig.localeNames[locale]}</span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop iÃƒÂ§in dropdown gÃƒÂ¶rÃƒÂ¼nÃƒÂ¼mÃƒÂ¼
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-steel-600 hover:text-primary-600 transition-colors rounded-md hover:bg-steel-50"
        aria-label="Dil seÃƒÂ§in"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase text-xs font-semibold">{currentLocale}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-steel-200 py-1 z-50">
          {i18nConfig.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                ${currentLocale === locale
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-steel-700 hover:bg-steel-50'
                }
              `}
            >
              <span className="text-lg">{i18nConfig.localeFlags[locale]}</span>
              <span className="flex-1 text-left">{i18nConfig.localeNames[locale]}</span>
              {currentLocale === locale && (
                <Check className="w-4 h-4 text-primary-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
