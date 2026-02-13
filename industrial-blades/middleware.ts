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

// =============================================================================
// SLUG REDIRECT MAP: Eski Türkçe slug → Yeni İngilizce slug
// Google'da indexlenmiş eski URL'ler 301 ile yeni URL'e yönlenir
// Sadece non-TR locales için aktif (TR'de Türkçe slug doğrudur)
// =============================================================================
const SLUG_REDIRECTS: Record<string, string> = {
  // İş Güvenliği El Bıçakları
  'h006-001-x01-retro-light-knife-dokum-metal-el-bicagi': 'h006-001-x01-retro-light-knife-cast-metal-safety-knife',
  'h008-001-a03-auto-retract-otomatik-geri-cekilebilir': 'h008-001-a03-auto-retract-safety-knife',
  // Sanayi Jiletleri - 3 Delikli
  '3-delikli-dilme-jileti-020mm': '3-hole-slitting-blade-020mm',
  // Slotted Dilme Jiletleri
  'slotted-dilme-jileti-karbon-celik': 'slotted-slitting-blade-carbon-steel',
  'slotted-dilme-jileti-karbon-celik-titanyum-kaplama': 'slotted-slitting-blade-carbon-steel-titanium-coated',
  'slotted-dilme-jileti-karbon-celik-seramik-kaplama': 'slotted-slitting-blade-carbon-steel-ceramic-coated',
  'slotted-dilme-jileti-paslanmaz-celik': 'slotted-slitting-blade-stainless-steel',
  'slotted-dilme-jileti-paslanmaz-celik-titanyum-kaplama': 'slotted-slitting-blade-stainless-steel-titanium-coated',
  'slotted-dilme-jileti-paslanmaz-celik-xcd-kaplama': 'slotted-slitting-blade-stainless-steel-xcd-coated',
  'slotted-dilme-jileti-endurium-celik-seramik-kaplama': 'slotted-slitting-blade-endurium-steel-ceramic-coated',
  'slotted-dilme-jileti-yekpare-tungsten-karbur': 'slotted-slitting-blade-solid-tungsten-carbide',
  'slotted-dilme-jileti-yekpare-seramik-zirkonya': 'slotted-slitting-blade-solid-ceramic-zirconia',
  // Vakum Paketleme Bıçakları
  'vakum-paketleme-bicagi': 'vacuum-packaging-knife',
  'kontr-biai-termoform-vakum-paketleme-bicagi': 'contour-blade-thermoform-vacuum-packaging',
  'yarim-yildiz-zimbalar': 'half-star-punches-vacuum-packaging',
  'tam-yildiz-zimbalar': 'full-star-punches-vacuum-packaging',
  'dz-biaklar-lama-bicaklar': 'straight-blades-vacuum-packaging',
  'dairesel-bicaklar-vakum-paketleme': 'circular-blades-vacuum-packaging',
  'yuvarlak-hava-zimbasi-vakum-paketleme': 'round-air-punch-vacuum-packaging',
  'oval-hava-zimbasi-vakum-paketleme': 'oval-air-punch-vacuum-packaging',
  'disli-bicaklar-vakum-paketleme': 'serrated-blades-vacuum-packaging',
  // Base Products
  'p1-a-capak-alma-hobi': 'p1-a-deburring-hobby-knife',
  'trapez-bicak-standart': 'trapezoid-blade-standard',
  'doner-bicak-100mm': 'rotary-blade-100mm',
};

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
    // === CROSS-DOMAIN GUARD: Locale yanlış domain'deyse 301 redirect ===
    // TR sadece alyabicak.com'da, diğerleri sadece alyablade.com'da yaşamalı
    const hostname = request.headers.get('host') || '';
    const urlLocale = pathname.match(/^\/([a-z]{2})(?:\/|$)/)?.[1];
    const isTurkishDomain = hostname.includes('alyabicak.com');

    if (urlLocale) {
      const localeBelongsOnTR = urlLocale === 'tr';
      if (isTurkishDomain && !localeBelongsOnTR) {
        // alyabicak.com/en/... → 301 → alyablade.com/en/...
        const targetUrl = new URL(`https://alyablade.com${pathname}`, request.url);
        targetUrl.search = request.nextUrl.search;
        return NextResponse.redirect(targetUrl, 301);
      }
      if (!isTurkishDomain && localeBelongsOnTR) {
        // alyablade.com/tr/... → 301 → alyabicak.com/tr/...
        const targetUrl = new URL(`https://alyabicak.com${pathname}`, request.url);
        targetUrl.search = request.nextUrl.search;
        return NextResponse.redirect(targetUrl, 301);
      }
    }

    // === SLUG REDIRECT: Non-TR locale'de Türkçe slug varsa İngilizce'ye 301 redirect ===
    const localeMatch = pathname.match(/^\/([a-z]{2})\//);
    if (localeMatch && localeMatch[1] !== 'tr') {
      const productSlugMatch = pathname.match(/^\/[a-z]{2}\/products\/([^/]+)$/);
      if (productSlugMatch) {
        const oldSlug = productSlugMatch[1];
        const newSlug = SLUG_REDIRECTS[oldSlug];
        if (newSlug) {
          const newUrl = new URL(pathname.replace(oldSlug, newSlug), request.url);
          newUrl.search = request.nextUrl.search;
          return NextResponse.redirect(newUrl, 301);
        }
      }
    }
    // Locale zaten var ve doğru domain'de, devam et
    return NextResponse.next();
  }

  // Locale yok, yönlendir
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Query string'i koru
  newUrl.search = request.nextUrl.search;

  const response = NextResponse.redirect(newUrl);
  
  // Cookie'ye locale kaydet (secure + sameSite ile)
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 yıl
    path: '/',
    secure: true,
    sameSite: 'lax' as const,
    httpOnly: false, // Client-side erişim gerekli (dil seçici)
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
