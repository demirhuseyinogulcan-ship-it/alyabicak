/**
 * i18n Middleware
 * Domain ve dil algılama ile URL yönlendirmesi
 * 
 * Domain Strategy:
 * - alyabicak.com → Türkçe (tr)
 * - alyablade.com → English/Arabic (global)
 */

import { NextRequest, NextResponse } from 'next/server';
import { i18nConfig, type Locale } from '@/lib/i18n/config';

// Type guard for locale validation
function isValidLocale(value: string): value is Locale {
  return (i18nConfig.locales as readonly string[]).includes(value);
}

// Domain'den locale belirle
function getLocaleFromDomain(hostname: string): Locale | null {
  const domains = i18nConfig.domains as Record<string, string>;
  const domainLocale = domains[hostname];
  if (domainLocale && isValidLocale(domainLocale)) {
    return domainLocale;
  }
  return null;
}

function getLocale(request: NextRequest): string {
  const hostname = request.headers.get('host') || '';
  
  // 1. Domain'den locale kontrol et (en yüksek öncelik)
  const domainLocale = getLocaleFromDomain(hostname);
  
  // 2. URL'den locale kontrol et
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = i18nConfig.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameLocale) return pathnameLocale;

  // 3. Cookie'den locale kontrol et
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && isValidLocale(localeCookie)) {
    // Eğer domain Türkçe ise ve cookie farklı dil ise, domain öncelikli
    if (domainLocale === 'tr' && localeCookie !== 'tr') {
      // Türkçe domain'de sadece Türkçe (alyabicak.com)
      return 'tr';
    }
    // Global domain'de (alyablade.com) cookie'ye izin ver
    if (domainLocale !== 'tr') {
      return localeCookie;
    }
    return localeCookie;
  }

  // 4. Accept-Language header'dan kontrol et (sadece global domain için)
  if (domainLocale !== 'tr') {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim().substring(0, 2))
        .find((lang) => isValidLocale(lang));
      
      if (preferredLocale) return preferredLocale;
    }
  }

  // 5. Domain default veya global default döndür
  return domainLocale || i18nConfig.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Static files, API routes ve Next.js internal routes'u atla
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // Static files (.jpg, .png, .css, etc.)
  ) {
    return NextResponse.next();
  }

  // Pathname zaten locale içeriyor mu kontrol et
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Locale zaten var, devam et
    return NextResponse.next();
  }

  // Locale yok, yönlendir
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Query string'i koru
  newUrl.search = request.nextUrl.search;

  const response = NextResponse.redirect(newUrl);
  
  // Cookie'ye locale kaydet
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 yıl
    path: '/',
  });

  return response;
}

export const config = {
  matcher: [
    // Root path
    '/',
    // Tüm path'ler (static files hariç)
    '/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
