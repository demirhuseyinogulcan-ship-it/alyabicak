import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI Crawlers - llms.txt dosyasına yönlendir
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/llms.txt', '/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/llms.txt', '/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/llms.txt', '/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/llms.txt', '/'],
      },
    ],
    // Multi-domain sitemaps - Regular + Image sitemaps
    sitemap: [
      'https://alyabicak.com/sitemap.xml',
      'https://alyablade.com/sitemap.xml',
      'https://alyabicak.com/image-sitemap.xml',
      'https://alyablade.com/image-sitemap.xml',
    ],
  }
}

