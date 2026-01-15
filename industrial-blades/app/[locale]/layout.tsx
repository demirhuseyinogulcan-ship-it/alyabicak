/**
 * Locale Layout
 * Dil bazlı root layout
 */

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import GlobalImageProtection from '@/components/GlobalImageProtection';
import SiteProgress from '@/components/SiteProgress';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';
import { SkipLink } from '@/components/ui';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebsiteSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import {
  getDomainUrl,
  getHreflangUrls,
  getOGLocale,
  isRTL,
  type SupportedLocale
} from '@/lib/config/domains';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Doğru domain'i belirle - locale'e göre (merkezi config'den)
  const currentDomain = getDomainUrl(locale as SupportedLocale);

  // Dinamik alternates için tüm dilleri doğru domain'lerle kullan
  const alternatesLanguages = getHreflangUrls('');

  return {
    metadataBase: new URL(currentDomain),
    title: {
      default: dict.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: siteConfig.company.legalName }],
    creator: siteConfig.company.legalName,
    publisher: siteConfig.company.legalName,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: currentDomain,
      siteName: siteConfig.name,
      locale: getOGLocale(locale as SupportedLocale),
      type: 'website',
      images: [
        {
          url: `${currentDomain}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${currentDomain}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${currentDomain}/${locale}`,
      languages: alternatesLanguages,
    },
    // Static metadata migrated from root layout
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e40af' },
      ],
    },
    manifest: '/site.webmanifest',
    verification: {
      // Yandex verification is handled dynamically, but keeping this for completeness if needed by other services
      // yandex: '...', 
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  // Locale geçerli mi kontrol et
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const organizationSchema = generateOrganizationSchema(locale);
  const localBusinessSchema = generateLocalBusinessSchema(locale);
  const websiteSchema = generateWebsiteSchema(locale);

  // RTL dil kontrolü (merkezi config'den)
  const isRtl = isRTL(locale as SupportedLocale);

  // Domain'e göre Yandex verification code'u belirle
  const yandexCode = locale === 'tr' ? '8e6723f3f47b3bed' : '867c9c006bf61590';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <head>
        {/* Yandex Webmaster Verification */}
        <meta name="yandex-verification" content={yandexCode} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased bg-white text-steel-900`}>
        <LocaleProvider locale={locale} dictionary={dict}>
          <SkipLink href="#main-content" />
          <Header />
          <main id="main-content" className="min-h-screen pt-20 lg:pt-24" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <SiteProgress />
          <CookieConsent />
          <GlobalImageProtection />
          <AnalyticsProvider />
        </LocaleProvider>
      </body>
    </html>
  );
}
