import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Domain-aware: Her domain sadece kendi sitemap'ini referans etmeli
  const headersList = await headers()
  const host = headersList.get('host') || headersList.get('x-forwarded-host') || 'alyablade.com'
  const isTurkishDomain = host.includes('alyabicak.com')

  const currentDomain = isTurkishDomain ? 'https://alyabicak.com' : 'https://alyablade.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/tools/'],
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
    // Domain-aware sitemaps — her domain sadece kendi sitemap'ini gösterir
    sitemap: [
      `${currentDomain}/sitemap.xml`,
      `${currentDomain}/image-sitemap.xml`,
    ],
  }
}

