import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Görsel optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün cache
  },
  
  // Performans optimizasyonları
  reactStrictMode: true,
  
  // ⚡ Experimental: PPR (Partial Prerendering) ve diğer optimizasyonlar
  experimental: {
    // Optimize package imports - tree shaking için
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Trailing slash (SEO için tutarlılık)
  trailingSlash: false,
  
  // Source maps (production'da kapalı)
  productionBrowserSourceMaps: false,
  
  // Headers (Security & Performance)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // X-XSS-Protection kaldırıldı — modern tarayıcılarda deprecated,
            // bazı senaryolarda XSS'i kolaylaştırabilir. CSP ile değiştirildi.
            key: 'Content-Security-Policy',
            value: [
              // Varsayılan: sadece kendi origin'i
              "default-src 'self'",
              // Script'ler: kendi origin + inline (JSON-LD, GA4, Clarity) + external analytics
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://va.vercel-scripts.com https://unpkg.com",
              // Stiller: kendi origin + inline (Tailwind) + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fontlar: kendi origin + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com data:",
              // Görseller: kendi origin + data URI + Vercel blob + Google services
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.clarity.ms",
              // Bağlantılar (fetch/XHR): kendi origin + analytics + Formspree
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://va.vercel-scripts.com https://vitals.vercel-insights.com https://formspree.io",
              // Iframe'ler: Google Maps + PDF viewer
              "frame-src 'self' https://www.google.com https://maps.google.com",
              // Worker'lar: PDF.js worker
              "worker-src 'self' blob: https://unpkg.com",
              // Base URI: sadece kendi origin
              "base-uri 'self'",
              // Form action: kendi origin
              "form-action 'self'",
            ].join('; '),
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Content-Language headers — Bing/Yandex ranking sinyali
      {
        source: '/tr/:path*',
        headers: [{ key: 'Content-Language', value: 'tr' }],
      },
      {
        source: '/en/:path*',
        headers: [{ key: 'Content-Language', value: 'en' }],
      },
      {
        source: '/ar/:path*',
        headers: [{ key: 'Content-Language', value: 'ar' }],
      },
      {
        source: '/ru/:path*',
        headers: [{ key: 'Content-Language', value: 'ru' }],
      },
      {
        source: '/fr/:path*',
        headers: [{ key: 'Content-Language', value: 'fr' }],
      },
      {
        // Statik dosyalar için uzun cache
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects (eski URL'ler için)
  async redirects() {
    return [
      // Örnek: eski URL'leri yeni URL'lere yönlendir
      // {
      //   source: '/products',
      //   destination: '/categories',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
