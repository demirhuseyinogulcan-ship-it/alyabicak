import { generateEnhancedProductSchema } from '@/lib/seo';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
  getProductSlugPair,
} from '@/lib/data/products-extended';
import {
  ProductHero,
  ProductSpecs,
  WhyThisProduct,
  ProductApplications,
  RelatedProducts,
} from '@/components/product';
import { ProductViewTracker } from '@/components/analytics';
import { siteConfig } from '@/lib/config/site.config';
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n';
import { getBrandName } from '@/lib/i18n/locale-utils';
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains';
import { getCategoryById } from '@/lib/data/categories';

interface ProductPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

// Static generation için tüm slug'ları döndür (locale-aware)
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  i18nConfig.locales.forEach((locale) => {
    const slugs = getAllProductSlugs(locale);
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
      title: `${dict.common.notFound} | ${getBrandName(locale)}`,
    };
  }

  const title = product.seo?.title || `${product.name} | ${product.code} | ${getBrandName(locale)}`;
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
      url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/products/${slug}`,
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
      // Canonical URL - locale'e göre doğru domain ve slug'a yönlendir
      canonical: `${getDomainUrl(locale as SupportedLocale)}/${locale}/products/${product.slug}`,
      // Hreflang: her locale için doğru slug kullanılır (TR=Türkçe, diğerleri=İngilizce)
      languages: (() => {
        const slugPair = getProductSlugPair(slug);
        const hreflangs: Record<string, string> = {};
        for (const loc of i18nConfig.locales) {
          const locSlug = loc === 'tr' ? slugPair.tr : slugPair.en;
          hreflangs[loc] = `${getDomainUrl(loc as SupportedLocale)}/${loc}/products/${locSlug}`;
        }
        hreflangs['x-default'] = `${getDomainUrl('en' as SupportedLocale)}/en/products/${slugPair.en}`;
        return hreflangs;
      })(),
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
  const homeLabel = dict.nav.home;
  const category = getCategoryById(product.categoryId);
  const categorySlug = category?.slug || product.categoryId;
  const breadcrumbItems = [
    { label: dict.nav.categories, href: `/${locale}/categories` },
    { label: getCategoryDisplayName(product.categoryId, locale), href: `/${locale}/categories/${categorySlug}` },
    { label: product.name },
  ];

  // JSON-LD Schema - Structured Product Data Schema (SPDS)
  // Bu yapı AI motorlarının (GPT, Claude, Gemini, Perplexity) ve Google'ın
  // ürün verilerini "doğrulanabilir veri" (Fact) olarak sınıflandırmasını sağlar.
  // 
  // Gemini GEO Stratejisi:
  // 1. Canonical Source: manufacturer (Durham Duplex) + seller (Alya) ayrımı
  // 2. Rare Tokens: unitCode ile ölçülebilir değerler, teknik jargon specs içinde
  // 3. Consistency: Schema ↔ HTML ↔ llms.txt aynı değerleri kullanır

  const productSchema = generateEnhancedProductSchema({
    name: product.name,
    description: product.shortDescription,
    code: product.code,
    image: product.images.main.src,
    images: product.images.gallery?.map(img => img.src) || [],
    brand: product.origin?.brand,
    category: getCategoryDisplayName(product.categoryId, locale),
    material: product.specs?.find(s => s.label.toLowerCase().includes('malzeme') || s.label.toLowerCase().includes('material'))?.value,
    // weight: product.weight, // Data doesn't seem to have weight property directly exposed, assuming specs handle it or adding if exists
    inStock: product.inStock,
    locale: locale as Locale,
    slug: slug,
    specs: product.specs,
    origin: product.origin,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, locale, dict.breadcrumb?.home);

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

      {/* Breadcrumb - Server rendered for reliability */}
      <nav aria-label="Breadcrumb" className="py-3 bg-steel-50 border-b border-steel-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap">
            <li>
              <Link href={`/${locale}`} className="flex items-center gap-1 text-steel-500 hover:text-primary-600 transition-colors">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">{homeLabel}</span>
              </Link>
            </li>
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              return (
                <li key={index} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-steel-300 flex-shrink-0" aria-hidden="true" />
                  {item.href && !isLast ? (
                    <Link href={item.href} className="text-steel-500 hover:text-primary-600 transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-steel-800 font-medium truncate max-w-[250px] sm:max-w-none' : 'text-steel-500'} aria-current={isLast ? 'page' : undefined} title={item.label}>
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

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
    ar: {
      'safety-knives': 'سكاكين السلامة',
      'industrial-blades': 'شفرات صناعية',
      'machine-knives': 'سكاكين الآلات',
    },
    ru: {
      'safety-knives': 'Ножи безопасности',
      'industrial-blades': 'Промышленные лезвия',
      'machine-knives': 'Машинные ножи',
    },
    fr: {
      'safety-knives': 'Couteaux de Sécurité',
      'industrial-blades': 'Lames Industrielles',
      'machine-knives': 'Couteaux de Machines',
    },
  };
  return names[locale]?.[categoryId] || names['tr']?.[categoryId] || categoryId;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function generateBreadcrumbSchema(items: BreadcrumbItem[], locale: string, homeLabel: string = 'Home') {
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


