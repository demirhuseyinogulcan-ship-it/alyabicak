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

// OpenGraph locale mapping - yeni dil eklerken buraya da ekle
const ogLocaleMap: Record<Locale, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  ar: 'ar_EG', // Mısır Arapçası (Modern Standart Arapça)
};

// RTL (Sağdan Sola) diller - Arapça, İbranice vb.
const rtlLocales: Locale[] = ['ar'];

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// Domain mapping - Multi-domain SEO için
const DOMAIN_MAP: Record<Locale, string> = {
  tr: 'https://alyabicak.com',
  en: 'https://alyablade.com',
  ar: 'https://alyablade.com',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  // Doğru domain'i belirle - locale'e göre
  const currentDomain = DOMAIN_MAP[locale];
  
  // Dinamik alternates için tüm dilleri doğru domain'lerle kullan
  const alternatesLanguages: Record<string, string> = {};
  i18nConfig.locales.forEach((loc) => {
    alternatesLanguages[loc] = `${DOMAIN_MAP[loc as Locale]}/${loc}`;
  });
  alternatesLanguages['x-default'] = `${DOMAIN_MAP.en}/en`; // English as default
  
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
      locale: ogLocaleMap[locale] || locale,
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
  const localBusinessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebsiteSchema(locale);
  
  // RTL dil kontrolü
  const isRtl = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <head>
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
