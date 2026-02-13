/**
 * Image Sitemap Generator
 * 
 * Google Images SEO için özel sitemap
 * Tüm ürün görsellerini içerir
 * 
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 */

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getAllProducts } from '@/lib/data/products';
import { getAllCategories } from '@/lib/data/categories';
import { blogService } from '@/lib/data/blog';
import { i18nConfig, type Locale } from '@/lib/i18n/config';
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains';
import { getProductTranslation, getCategoryTranslation } from '@/lib/i18n/translations';

// Per-domain cache for generated sitemap (24 hours)
const sitemapCache = new Map<string, { xml: string; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in ms

/**
 * Domain'e göre hangi locale'lerin image sitemap'e dahil edileceğini belirle
 * alyabicak.com → sadece TR, alyablade.com → EN/AR/RU/FR
 */
function getLocalesForDomain(host: string): Locale[] {
  const isTurkishDomain = host.includes('alyabicak.com')
  if (isTurkishDomain) return ['tr'] as Locale[]
  return i18nConfig.locales.filter(l => l !== 'tr') as Locale[]
}

interface ImageEntry {
  pageUrl: string;
  images: {
    loc: string;
    title?: string;
    caption?: string;
    geoLocation?: string;
    license?: string;
  }[];
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateImageEntries(filteredLocales: Locale[]): ImageEntry[] {
  const entries: ImageEntry[] = [];
  const products = getAllProducts();
  const categories = getAllCategories();

  // Domain'e özel locale'ler için ürün görselleri
  for (const locale of filteredLocales) {
    const domain = getDomainUrl(locale as SupportedLocale);

    // Ürün görselleri
    for (const product of products) {
      if (!product.image) continue;

      // Locale-aware slug: non-TR'de slugEN varsa onu kullan
      const localizedSlug = (locale !== 'tr' && product.slugEN) ? product.slugEN : product.slug;
      const pageUrl = `${domain}/${locale}/products/${localizedSlug}`;
      const imageUrl = product.image.startsWith('http') 
        ? product.image 
        : `${domain}${product.image}`;

      // Locale-aware title & caption — SEO için çeviri varsa kullan
      const translation = getProductTranslation(product.id, locale);
      const localizedName = translation?.name || product.name;
      const localizedDesc = translation?.description || product.description;

      entries.push({
        pageUrl,
        images: [
          {
            loc: imageUrl,
            title: `${localizedName} - ${product.code}`,
            caption: localizedDesc?.substring(0, 200),
            geoLocation: 'Istanbul, Turkey',
          },
        ],
      });
    }

    // Kategori görselleri
    for (const category of categories) {
      if (!category.image) continue;

      const pageUrl = `${domain}/${locale}/categories/${category.slug}`;
      const imageUrl = category.image.startsWith('http')
        ? category.image
        : `${domain}${category.image}`;

      // Locale-aware category title & caption
      const catTranslation = getCategoryTranslation(category.id, locale);
      const localizedCatName = catTranslation?.name || category.name;
      const localizedCatDesc = catTranslation?.description || category.description;

      entries.push({
        pageUrl,
        images: [
          {
            loc: imageUrl,
            title: localizedCatName,
            caption: localizedCatDesc?.substring(0, 200),
            geoLocation: 'Istanbul, Turkey',
          },
        ],
      });
    }

    // Blog yazı görselleri
    const blogPosts = blogService.getAllPosts(locale as Locale);
    for (const post of blogPosts) {
      if (!post.coverImage) continue;

      const pageUrl = `${domain}/${locale}/newsletter/${post.slug}`;
      const imageUrl = post.coverImage.startsWith('http')
        ? post.coverImage
        : `${domain}${post.coverImage}`;

      entries.push({
        pageUrl,
        images: [
          {
            loc: imageUrl,
            title: post.title,
            caption: post.excerpt?.substring(0, 200),
            geoLocation: 'Istanbul, Turkey',
          },
        ],
      });
    }
  }

  return entries;
}

function generateImageSitemapXml(entries: ImageEntry[]): string {
  const urlElements = entries.map(entry => {
    const imageElements = entry.images.map(img => `
      <image:image>
        <image:loc>${escapeXml(img.loc)}</image:loc>
        ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
        ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
        ${img.geoLocation ? `<image:geo_location>${escapeXml(img.geoLocation)}</image:geo_location>` : ''}
      </image:image>`).join('');

    return `
  <url>
    <loc>${escapeXml(entry.pageUrl)}</loc>${imageElements}
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>`;
}

export async function GET() {
  // Domain-aware: Host header'dan hangi domain olduğunu belirle
  const headersList = await headers();
  const host = headersList.get('host') || headersList.get('x-forwarded-host') || 'alyablade.com';
  const locales = getLocalesForDomain(host);
  const cacheKey = host.includes('alyabicak.com') ? 'tr' : 'global';

  // Check per-domain cache
  const now = Date.now();
  const cached = sitemapCache.get(cacheKey);
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return new NextResponse(cached.xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 hours
      },
    });
  }

  // Generate fresh domain-filtered sitemap
  const entries = generateImageEntries(locales);
  const xml = generateImageSitemapXml(entries);

  // Update per-domain cache
  sitemapCache.set(cacheKey, { xml, timestamp: now });

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 hours
    },
  });
}
