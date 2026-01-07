/**
 * i18n Middleware
 * Dil algılama ve URL yönlendirmesi
 */

import { NextRequest, NextResponse } from 'next/server';
import { i18nConfig } from '@/lib/i18n/config';

function getLocale(request: NextRequest): string {
  // 1. URL'den locale kontrol et
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = i18nConfig.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameLocale) return pathnameLocale;

  // 2. Cookie'den locale kontrol et
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && i18nConfig.locales.includes(localeCookie as any)) {
    return localeCookie;
  }

  // 3. Accept-Language header'dan kontrol et
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2))
      .find((lang) => i18nConfig.locales.includes(lang as any));
    
    if (preferredLocale) return preferredLocale;
  }

  // 4. Default locale döndür
  return i18nConfig.defaultLocale;
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
