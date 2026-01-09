/**
 * Language Switcher Component
 * Dil değiştirme butonu - Domain-aware
 * 
 * Domain Strategy:
 * - Türkçe (tr) → alyabicak.com
 * - English/Arabic → alyablade.com
 */

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { i18nConfig, type Locale } from '@/lib/i18n';

// Domain mappings
const DOMAIN_CONFIG = {
  tr: 'alyabicak.com',
  en: 'alyablade.com',
  ar: 'alyablade.com',
} as const;

export interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons'
}

export function LanguageSwitcher({ variant = 'dropdown' }: LanguageSwitcherProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // URL'den mevcut locale'i al
  const currentLocale = useMemo(() => {
    const segments = pathname.split('/');
    const localeFromPath = segments[1] as Locale;
    return i18nConfig.locales.includes(localeFromPath) ? localeFromPath : i18nConfig.defaultLocale;
  }, [pathname]);

  // Dışarı tıklandığında kapat
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
    // Mevcut path'ten locale'i çıkar ve yeni locale ile değiştir
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    // Cookie'yi güncelle
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    
    // Production'da domain değişikliği gerekiyor mu kontrol et
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
    const targetDomain = DOMAIN_CONFIG[newLocale];
    const isProduction = currentHost.includes('alyablade.com') || currentHost.includes('alyabicak.com');
    
    if (isProduction && !currentHost.includes(targetDomain.replace('www.', ''))) {
      // Farklı domain'e yönlendir
      const protocol = typeof window !== 'undefined' ? window.location.protocol : 'https:';
      window.location.href = `${protocol}//${targetDomain}${newPath}`;
    } else {
      // Aynı domain'de kal
      router.push(newPath);
    }
    
    setIsOpen(false);
  };

  // Mobil için yatay buton görünümü
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

  // Desktop için dropdown görünümü
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-steel-600 hover:text-primary-600 transition-colors rounded-md hover:bg-steel-50"
        aria-label="Dil seçin"
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
