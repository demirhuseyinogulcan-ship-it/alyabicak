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
import { Globe, ChevronDown, Check, X } from 'lucide-react';
import { i18nConfig, type Locale } from '@/lib/i18n';

// Domain mappings
const DOMAIN_CONFIG = {
  tr: 'alyabicak.com',
  en: 'alyablade.com',
  ar: 'alyablade.com',
  ru: 'alyablade.com',
} as const;

export interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons' | 'bottomsheet'
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

  // Mobil için Bottom Sheet görünümü (scalable - 20+ dil için)
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
                  {currentLocale === 'tr' ? 'Dil Seçin' : currentLocale === 'ar' ? 'اختر اللغة' : 'Select Language'}
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

  // Mobil için yatay buton görünümü (3 dil için)
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
