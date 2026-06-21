import { generateEnhancedProductSchema, generateBreadcrumbSchema } from '@/lib/seo';

import { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
  getProductSlugPair,
  isProductUsingFallback,
  getCategoryName,
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
import { getDomainUrl, getOGLocale } from '@/lib/config/domains';
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

  // Fallback içerik kullanılıyorsa noindex yap (Google'da yanlış dilde içerik indexlenmesini önle)
  const isFallback = isProductUsingFallback(slug, locale);

  return {
    title,
    description,
    keywords,
    ...(isFallback && {
      robots: {
        index: false,
        follow: true, // Linkler hala takip edilsin
      },
    }),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${getDomainUrl(locale)}/${locale}/products/${slug}`,
      locale: getOGLocale(locale),
      siteName: getBrandName(locale),
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
      canonical: `${getDomainUrl(locale)}/${locale}/products/${product.slug}`,
      // Hreflang: her locale için doğru slug kullanılır (TR=Türkçe, diğerleri=İngilizce)
      languages: (() => {
        const slugPair = getProductSlugPair(slug);
        const hreflangs: Record<string, string> = {};
        for (const loc of i18nConfig.locales) {
          const locSlug = loc === 'tr' ? slugPair.tr : slugPair.en;
          hreflangs[loc] = `${getDomainUrl(loc)}/${loc}/products/${locSlug}`;
        }
        hreflangs['x-default'] = `${getDomainUrl('en')}/en/products/${slugPair.en}`;
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

  // SEO 301 Redirect: Non-TR locale'de Türkçe slug kullanılmışsa İngilizce slug'a yönlendir
  if (locale !== 'tr' && product.slug !== slug) {
    permanentRedirect(`/${locale}/products/${product.slug}`);
  }

  // İlgili ürünleri getir (locale ile)
  const relatedProducts = getRelatedProducts(product.id, locale);

  // Breadcrumb items (locale-aware)
  const category = getCategoryById(product.categoryId);
  const categorySlug = category?.slug || product.categoryId;
  const breadcrumbItems = [
    { name: dict.nav.home, url: `/${locale}` },
    { name: dict.nav.categories, url: `/${locale}/categories` },
    { name: getCategoryName(product.categoryId, locale), url: `/${locale}/categories/${categorySlug}` },
    { name: product.name },
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
    category: getCategoryName(product.categoryId, locale),
    material: product.specs?.find(s => s.label.toLowerCase().includes('malzeme') || s.label.toLowerCase().includes('material'))?.value,
    // weight: product.weight, // Data doesn't seem to have weight property directly exposed, assuming specs handle it or adding if exists
    inStock: product.inStock,
    locale: locale as Locale,
    slug: slug,
    specs: product.specs,
    origin: product.origin,
  });

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

      {/* Breadcrumb - Server rendered for reliability */}
      <nav aria-label="Breadcrumb" className="py-3 bg-steel-50 border-b border-steel-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const isFirst = index === 0;
              return (
                <li key={index} className="flex items-center gap-1.5">
                  {!isFirst && <ChevronRight className="w-3.5 h-3.5 text-steel-300 flex-shrink-0" aria-hidden="true" />}
                  {item.url && !isLast ? (
                    <Link href={item.url} className={`text-steel-500 hover:text-primary-600 transition-colors ${isFirst ? 'flex items-center gap-1' : ''}`}>
                      {isFirst && <Home className="w-4 h-4" />}
                      {isFirst ? <span className="hidden sm:inline">{item.name}</span> : item.name}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-steel-800 font-medium truncate max-w-[250px] sm:max-w-none' : 'text-steel-500'} aria-current={isLast ? 'page' : undefined} title={item.name}>
                      {item.name}
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
