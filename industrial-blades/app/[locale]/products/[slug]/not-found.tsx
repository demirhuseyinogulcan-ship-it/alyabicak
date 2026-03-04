/**
 * Product Not Found Page - i18n Supported
 * Ürün bulunamadığında gösterilen sayfa
 */

import Link from 'next/link';
import { Search, Home } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { isLocale } from '@/lib/i18n/config';
import { cookies } from 'next/headers';

export default async function ProductNotFound() {
  // Cookie'den locale oku
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = (localeCookie && isLocale(localeCookie)) 
    ? localeCookie 
    : 'tr' as const;
  
  const dict = await getDictionary(locale);
  const t = dict.productNotFound;

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center px-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-steel-100 mb-6">
          <Search className="w-8 h-8 text-steel-400" />
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-steel-900 mb-2">
          {t.title}
        </h1>
        
        {/* Description */}
        <p className="text-steel-600 mb-8 max-w-md mx-auto">
          {t.description}
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/${locale}/categories`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-steel-900 text-white font-medium rounded-lg hover:bg-steel-800 transition-colors"
          >
            <Search className="w-5 h-5" />
            {t.browseProducts}
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-steel-300 text-steel-700 font-medium rounded-lg hover:bg-steel-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            {t.backHome}
          </Link>
        </div>
        
        {/* Help */}
        <p className="mt-8 text-sm text-steel-500">
          {t.needHelp}{' '}
          <Link href={`/${locale}/contact`} className="text-primary-600 hover:underline">
            {t.contactUs}
          </Link>
        </p>
      </div>
    </div>
  );
}
