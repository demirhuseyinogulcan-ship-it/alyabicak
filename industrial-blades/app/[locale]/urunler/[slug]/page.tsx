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
import { siteConfig } from '@/lib/config/site.config';
import { i18nConfig, getDictionary, type Locale } from '@/lib/i18n';

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
      url: `${siteConfig.url}/${locale}/urunler/${slug}`,
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
      canonical: `${siteConfig.url}/${locale}/urunler/${slug}`,
      languages: {
        'tr': `${siteConfig.url}/tr/urunler/${slug}`,
        'en': `${siteConfig.url}/en/urunler/${slug}`,
      },
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
    { label: dict.nav.categories, href: `/${locale}/kategoriler` },
    { label: getCategoryDisplayName(product.categoryId, locale), href: `/${locale}/kategoriler/${product.categoryId}` },
    { label: product.code },
  ];
  
  // JSON-LD Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    sku: product.code,
    image: product.images.main.src,
    brand: {
      '@type': 'Brand',
      name: product.origin?.brand || 'Alya Bıçak',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Durham Duplex',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sheffield',
        addressCountry: 'GB',
      },
    },
    offers: {
      '@type': 'Offer',
      availability: product.inStock 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.company.legalName,
      },
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
      'is-guvenligi-el-bicaklari': 'İş Güvenliği El Bıçakları',
      'sanayi-jiletleri': 'Sanayi Jiletleri',
      'makina-bicaklari': 'Makina Bıçakları',
    },
    en: {
      'is-guvenligi-el-bicaklari': 'Safety Work Knives',
      'sanayi-jiletleri': 'Industrial Blades',
      'makina-bicaklari': 'Machine Blades',
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
  
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `https://alyabicak.com/${locale}`,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      item: item.href ? `https://alyabicak.com${item.href}` : undefined,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}
