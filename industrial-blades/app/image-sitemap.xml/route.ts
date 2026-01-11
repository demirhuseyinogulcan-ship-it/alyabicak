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

// Domain mapping
const DOMAIN_MAP: Record<Locale, string> = {
  tr: 'https://alyabicak.com',
  en: 'https://alyablade.com',
  ar: 'https://alyablade.com',
  ru: 'https://alyablade.com',
};

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
    const domain = DOMAIN_MAP[locale];

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
  const entries = generateImageEntries();
  const xml = generateImageSitemapXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 saat cache
    },
  });
}
