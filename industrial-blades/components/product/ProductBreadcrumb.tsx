'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLocale } from '@/lib/i18n/client';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
  const { locale, dictionary: dict } = useLocale();
  const homeLabel = dict.nav.home;

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 bg-steel-50 border-b border-steel-100"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-1 text-sm flex-wrap">
          {/* Home */}
          <li>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1 text-steel-500 hover:text-steel-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only">{homeLabel}</span>
            </Link>
          </li>

          {/* Separator */}
          <li aria-hidden="true">
            <ChevronRight className="w-4 h-4 text-steel-300" />
          </li>

          {/* Dynamic items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-steel-500 hover:text-steel-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? 'text-steel-900 font-medium truncate max-w-[200px]' : 'text-steel-500'}
                    aria-current={isLast ? 'page' : undefined}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-steel-300 flex-shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/**
 * JSON-LD Schema için yardımcı
 * NOT: Sayfalar genellikle @/lib/seo'deki generateBreadcrumbSchema'yı kullanır.
 * Bu fonksiyon client component'ler için gerektiğinde locale-aware URL üretir.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], locale: string, homeLabel: string = 'Home') {
  // Lazy import yerine doğrudan SSOT'tan domain al
  const { getDomainUrl } = require('@/lib/config/domains');
  const domain = getDomainUrl(locale);

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

