/**
 * Image Sitemap Generator
 * 
 * Google Images SEO için özel sitemap
 * Tüm ürün görsellerini içerir
 * 
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 */

import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/data/products';
import { getAllCategories } from '@/lib/data/categories';
import { i18nConfig, type Locale } from '@/lib/i18n/config';
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains';

// Cache for generated sitemap (24 hours)
let cachedXml: string | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in ms

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

function generateImageEntries(): ImageEntry[] {
  const entries: ImageEntry[] = [];
  const products = getAllProducts();
  const categories = getAllCategories();

  // Her locale için ürün görselleri
  for (const locale of i18nConfig.locales) {
    const domain = getDomainUrl(locale as SupportedLocale);

    // Ürün görselleri
    for (const product of products) {
      if (!product.image) continue;

      const pageUrl = `${domain}/${locale}/products/${product.slug}`;
      const imageUrl = product.image.startsWith('http') 
        ? product.image 
        : `${domain}${product.image}`;

      entries.push({
        pageUrl,
        images: [
          {
            loc: imageUrl,
            title: `${product.name} - ${product.code}`,
            caption: product.description?.substring(0, 200),
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

      entries.push({
        pageUrl,
        images: [
          {
            loc: imageUrl,
            title: category.name,
            caption: category.description?.substring(0, 200),
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
  // Check cache
  const now = Date.now();
  if (cachedXml && (now - cacheTimestamp) < CACHE_DURATION) {
    return new NextResponse(cachedXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 hours
      },
    });
  }

  // Generate fresh sitemap
  const entries = generateImageEntries();
  const xml = generateImageSitemapXml(entries);

  // Update cache
  cachedXml = xml;
  cacheTimestamp = now;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 hours
    },
  });
}
