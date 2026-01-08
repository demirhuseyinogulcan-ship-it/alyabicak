'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Package } from 'lucide-react';
import type { ProductCardData } from '@/lib/types/product.types';
import { useLocale } from '@/lib/i18n/client';

interface RelatedProductsProps {
  products: ProductCardData[];
  title?: string;
  maxItems?: number;
}

export function RelatedProducts({ 
  products, 
  title,
  maxItems = 4 
}: RelatedProductsProps) {
  const { locale, dictionary: t } = useLocale();
  const displayTitle = title || t.productDetail.relatedProducts;
  
  if (!products || products.length === 0) return null;
  
  const displayProducts = products.slice(0, maxItems);

  return (
    <section className="py-12 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h2 className="text-xl font-semibold text-steel-900 mb-8">
          {displayTitle}
        </h2>
        
        {/* Ürün Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              href={`/${locale}/products/${product.slug}`}
              className="group bg-white rounded-lg border border-steel-100 overflow-hidden hover:border-steel-200 hover:shadow-sm transition-all"
            >
              {/* Görsel - 16:9 aspect ratio, Lutz tarzı */}
              <div className="relative aspect-video bg-white overflow-hidden">
                {product.thumbnail ? (
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-steel-50 to-steel-100">
                    <Package className="w-10 h-10 text-steel-300 group-hover:text-primary-400 transition-colors" />
                  </div>
                )}
                
                {/* Yeni Badge */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary-600 text-white text-xs font-medium rounded z-10">
                    {t.productDetail.new}
                  </span>
                )}
              </div>
              
              {/* İçerik */}
              <div className="p-3">
                {/* Kategori */}
                <span className="text-xs text-steel-500">
                  {product.categoryName}
                </span>
                
                {/* Ürün Kodu */}
                <p className="mt-0.5 text-xs font-mono text-steel-400">
                  {product.code}
                </p>
                
                {/* Ürün Adı */}
                <h3 className="mt-1 text-sm font-medium text-steel-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Orijin */}
                {product.origin && (
                  <p className="mt-2 text-xs text-steel-400">
                    {product.origin}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        {/* Tümünü Gör */}
        {products.length > maxItems && (
          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/categories`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              {t.productDetail.viewAllProducts}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Kompakt versiyon (sidebar için)
export function RelatedProductsCompact({ 
  products, 
  title,
  maxItems = 3 
}: RelatedProductsProps) {
  const { locale, dictionary: t } = useLocale();
  const displayTitle = title || t.productDetail.relatedProducts;
  
  if (!products || products.length === 0) return null;
  
  const displayProducts = products.slice(0, maxItems);

  return (
    <div className="bg-white rounded-lg border border-steel-100 p-4">
      <h3 className="text-sm font-semibold text-steel-900 mb-4">
        {displayTitle}
      </h3>
      
      <div className="space-y-3">
        {displayProducts.map((product) => (
          <Link
            key={product.id}
            href={`/${locale}/products/${product.slug}`}
            className="flex gap-3 group"
          >
            {/* Thumbnail */}
            <div className="relative w-12 h-12 bg-steel-50 rounded flex-shrink-0">
              <Image
                src={product.thumbnail || '/images/products/placeholder-thumb.jpg'}
                alt={product.name}
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono text-steel-400">{product.code}</p>
              <p className="text-sm text-steel-700 truncate group-hover:text-primary-600 transition-colors">
                {product.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

