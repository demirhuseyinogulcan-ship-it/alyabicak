/**
 * Ürün Detay Sayfası - i18n Destekli
 */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts
} from '@/lib/data/products-extended';
import {
  ProductHero,
  ProductSpecs,
  WhyThisProduct,
  ProductApplications,
  RelatedProducts,
  ProductBreadcrumb,
} from '@/components/product';
import { ProductViewTracker } from '@/components/analytics';
import { siteConfig } from '@/lib/config/site.config';
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n';
import { getDomainUrl, getHreflangUrls, type SupportedLocale } from '@/lib/config/domains';

interface ProductPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

// Static generation için tüm slug'ları döndür
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  const params: { locale: string; slug: string }[] = [];

  i18nConfig.locales.forEach((locale) => {
    slugs.forEach((slug) => {
      params.push({ locale, slug });
    });
  });

  return params;
}

// Dinamik metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug, locale);
  const dict = await getDictionary(locale);

  if (!product) {
    return {
      title: `${dict.common.notFound} | ${locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'}`,
    };
  }

  const title = product.seo?.title || `${product.name} | ${product.code} | ${locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade'}`;
  const description = product.seo?.description || product.shortDescription;
  const keywords = product.seo?.keywords || product.tags;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteConfig.url}/${locale}/products/${slug}`,
      images: [
        {
          url: product.images.main.src,
          width: product.images.main.width || 800,
          height: product.images.main.height || 800,
          alt: product.images.main.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.images.main.src],
    },
    alternates: {
      // Canonical URL - locale'e göre doğru domain'e yönlendir (merkezi config)
      canonical: `${getDomainUrl(locale as SupportedLocale)}/${locale}/products/${slug}`,
      languages: getHreflangUrls(`/products/${slug}`),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug, locale);
  const dict = await getDictionary(locale);

  if (!product) {
    notFound();
  }

  // İlgili ürünleri getir (locale ile)
  const relatedProducts = getRelatedProducts(product.id, locale);

  // Breadcrumb items (locale-aware)
  const breadcrumbItems = [
    { label: dict.nav.categories, href: `/${locale}/categories` },
    { label: getCategoryDisplayName(product.categoryId, locale), href: `/${locale}/categories/${product.categoryId}` },
    { label: product.code },
  ];

  // JSON-LD Schema - Structured Product Data Schema (SPDS)
  // Bu yapı AI motorlarının (GPT, Claude, Gemini, Perplexity) ve Google'ın
  // ürün verilerini "doğrulanabilir veri" (Fact) olarak sınıflandırmasını sağlar.
  // 
  // Gemini GEO Stratejisi:
  // 1. Canonical Source: manufacturer (Durham Duplex) + seller (Alya) ayrımı
  // 2. Rare Tokens: unitCode ile ölçülebilir değerler, teknik jargon specs içinde
  // 3. Consistency: Schema ↔ HTML ↔ llms.txt aynı değerleri kullanır
  
  const domain = getDomainUrl(locale as SupportedLocale)
  const productUrl = `${domain}/${locale}/products/${slug}`

  // Teknik specs'ten PropertyValue dizisi oluştur (AI-optimized)
  const specProperties = (product.specs || []).map(spec => {
    // HRC, mm, g gibi ölçü birimlerini otomatik çıkar
    const unitInfo = extractUnitInfo(spec.value)
    return {
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
      ...(unitInfo.unitCode && { unitCode: unitInfo.unitCode }),
      ...(unitInfo.unitText && { unitText: unitInfo.unitText }),
    }
  })

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.shortDescription,
    sku: product.code,
    mpn: product.code,
    image: product.images.gallery && product.images.gallery.length > 0
      ? [product.images.main.src, ...product.images.gallery.map(img => img.src)]
      : product.images.main.src,

    // Marka: Ürünün orijinal markası
    brand: {
      '@type': 'Brand',
      name: product.origin?.brand || 'Alya Bıçak',
    },

    // Üretici: Fiziksel üretimi yapan kuruluş (Sheffield, England)
    manufacturer: {
      '@type': 'Organization',
      name: product.origin?.brand === 'Durham Duplex' ? 'Durham Duplex' : 'Sheffield Steel',
      '@id': 'https://alyablade.com/#manufacturer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: product.origin?.city || 'Sheffield',
        addressCountry: product.origin?.country === 'İngiltere' ? 'GB' : 'GB',
      },
    },

    // Satıcı / Yetkili Distribütör (Canonical Source olarak Alya Bıçak)
    offers: {
      '@type': 'Offer',
      url: productUrl,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        '@id': 'https://alyablade.com/#organization',
        name: siteConfig.company.legalName,
        url: domain,
        telephone: siteConfig.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'DES Sanayi Sitesi, 101. Sokak B4 Blok No: 2',
          addressLocality: 'Ümraniye',
          addressRegion: 'İstanbul',
          postalCode: '34776',
          addressCountry: 'TR',
        },
        // AI'a "bu organizasyon güvenilir bir kaynak" sinyali
        foundingDate: '1996',
        areaServed: ['TR', 'EU', 'SA', 'AE', 'RU', 'KZ', 'GE', 'BG', 'RO'],
        knowsAbout: [
          'Industrial Cutting Blades',
          'Sheffield Steel',
          'Machine Knives',
          'Slitting Blades',
          'Safety Knives',
          'Endüstriyel Bıçak',
          'Makina Bıçakları',
        ],
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: ['TR', 'DE', 'FR', 'IT', 'SA', 'AE', 'RU'],
        },
      },
    },

    // Ürün Kategorisi
    category: getCategoryDisplayName(product.categoryId, locale),

    // Teknik Özellikler → additionalProperty (AI Doğrulanabilir Veri / Rare Tokens)
    additionalProperty: [
      // Statik: Menşei & Kalite Standardı
      {
        '@type': 'PropertyValue',
        name: locale === 'tr' ? 'Menşei' : 'Origin',
        value: product.origin?.city
          ? `${product.origin.city}, ${product.origin.country}`
          : 'Sheffield, England',
      },
      {
        '@type': 'PropertyValue',
        name: locale === 'tr' ? 'Kalite Standardı' : 'Quality Standard',
        value: 'ISO 9001:2015',
      },
      {
        '@type': 'PropertyValue',
        name: locale === 'tr' ? 'Distribütör' : 'Authorized Distributor',
        value: siteConfig.company.legalName,
      },
      // Dinamik: Ürünün tüm specs verileri (unitCode ile zenginleştirilmiş)
      ...specProperties,
    ],

    // Malzeme bilgisi (varsa)
    ...(product.specs?.find(s => s.label.toLowerCase().includes('malzeme') || s.label.toLowerCase().includes('material')) && {
      material: product.specs.find(s => s.label.toLowerCase().includes('malzeme') || s.label.toLowerCase().includes('material'))?.value,
    }),

    // Varyantlar (mevcut ölçüler)
    ...(product.availableSizes && product.availableSizes.length > 0 && {
      hasVariant: product.availableSizes.map((size) => ({
        '@type': 'Product',
        name: `${product.name} - ${size}`,
        size: size,
        sku: `${product.code}-${size}`,
      })),
    }),

    // İlave SEO sinyalleri: AI'a bu sayfanın otoritatif kaynak olduğunu söyle
    isRelatedTo: {
      '@type': 'WebPage',
      url: `${domain}/llms.txt`,
      name: 'Alya Blade Machine-Readable Product Data',
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, locale);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Analytics - Track product view */}
      <ProductViewTracker
        productId={product.id}
        productName={product.name}
        category={product.categoryId}
        subcategory={product.subcategoryId}
      />

      {/* Breadcrumb */}
      <ProductBreadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <ProductHero product={product} />

      {/* Teknik Özellikler */}
      {product.specs && product.specs.length > 0 && (
        <ProductSpecs specs={product.specs} />
      )}

      {/* Neden Bu Ürün */}
      <WhyThisProduct benefits={product.benefits} />

      {/* Kullanım Alanları */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* Detaylı Açıklama (varsa) */}
      {product.longDescription && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold text-steel-900 mb-6">
              {dict.productPage.detailedInfo}
            </h2>
            <div
              className="prose prose-steel max-w-none"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
          </div>
        </section>
      )}

      {/* Uyumlu Yedek Parçalar (varsa) */}
      {product.compatibleParts && product.compatibleParts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold text-steel-900 mb-6">
              {dict.productPage.compatibleParts}
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.compatibleParts.map((part) => (
                <div
                  key={part.id}
                  className="px-4 py-2 bg-steel-50 border border-steel-100 rounded-lg"
                >
                  <span className="text-xs font-mono text-steel-500">{part.code}</span>
                  <span className="mx-2 text-steel-300">·</span>
                  <span className="text-sm text-steel-700">{part.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* İlgili Ürünler */}
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </>
  );
}

// Yardımcı fonksiyonlar
function getCategoryDisplayName(categoryId: string, locale: string): string {
  const names: Record<string, Record<string, string>> = {
    tr: {
      'safety-knives': 'İş Güvenliği El Bıçakları',
      'industrial-blades': 'Sanayi Jiletleri',
      'machine-knives': 'Makina Bıçakları',
    },
    en: {
      'safety-knives': 'Safety Work Knives',
      'industrial-blades': 'Industrial Blades',
      'machine-knives': 'Machine Blades',
    },
  };
  return names[locale]?.[categoryId] || categoryId;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function generateBreadcrumbSchema(items: BreadcrumbItem[], locale: string) {
  const homeLabel = locale === 'tr' ? 'Anasayfa' : 'Home';
  const domain = getDomainUrl(locale as SupportedLocale);

  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `${domain}/${locale}`,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      item: item.href ? `${domain}${item.href}` : undefined,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

/**
 * Spec value'dan ölçü birimi bilgisi çıkar
 * UN/CEFACT kodları kullanır (Schema.org unitCode standardı)
 * AI motorları bu kodları "doğrulanmış ölçü" olarak algılar
 */
function extractUnitInfo(value: string): { unitCode?: string; unitText?: string } {
  const v = value.toLowerCase()
  
  // HRC sertlik
  if (v.includes('hrc')) return { unitCode: 'HRC', unitText: 'Rockwell C' }
  // HV / Vickers sertlik
  if (v.includes('hv') || v.includes('vickers')) return { unitCode: 'HV', unitText: 'Vickers Hardness' }
  // HRA sertlik
  if (v.includes('hra')) return { unitCode: 'HRA', unitText: 'Rockwell A' }
  // Milimetre
  if (/\d+\.?\d*\s*mm\b/i.test(value)) return { unitCode: 'MMT', unitText: 'mm' }
  // Gram
  if (/\d+\.?\d*\s*g\b/i.test(value) && !v.includes('°')) return { unitCode: 'GRM', unitText: 'g' }
  // Kilogram
  if (/\d+\.?\d*\s*kg\b/i.test(value)) return { unitCode: 'KGM', unitText: 'kg' }
  // Derece (açı)
  if (/\d+°/.test(value)) return { unitCode: 'DD', unitText: 'degrees' }
  // Celsius
  if (/\d+\s*°?\s*C\b/.test(value) && v.includes('°')) return { unitCode: 'CEL', unitText: '°C' }
  // Yüzde
  if (/%/.test(value)) return { unitCode: 'P1', unitText: 'percent' }
  // İnç
  if (/\d+\.?\d*\s*("|inch|inç)/i.test(value)) return { unitCode: 'INH', unitText: 'inch' }
  
  return {}
}
