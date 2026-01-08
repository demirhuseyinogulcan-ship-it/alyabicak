import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Görsel optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün cache
  },
  
  // Vercel için standalone output
  output: 'standalone',
  
  // Performans optimizasyonları
  reactStrictMode: true,
  
  // ⚡ Experimental: PPR (Partial Prerendering) ve diğer optimizasyonlar
  experimental: {
    // Optimize package imports - tree shaking için
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Trailing slash (SEO için tutarlılık)
  trailingSlash: false,
  
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
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
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
