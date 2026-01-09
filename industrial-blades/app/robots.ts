import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    // Multi-domain sitemap - Google her iki domain'i de indexleyebilir
    sitemap: [
      'https://alyabicak.com/sitemap.xml',
      'https://alyablade.com/sitemap.xml',
    ],
  }
}

