import Link from 'next/link';
import { Search, ArrowLeft, Home } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center px-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-steel-100 mb-6">
          <Search className="w-8 h-8 text-steel-400" />
        </div>

        {/* Başlık */}
        <h1 className="text-2xl font-semibold text-steel-900 mb-2">
          Ürün Bulunamadı
        </h1>

        {/* Açıklama */}
        <p className="text-steel-600 mb-8 max-w-md mx-auto">
          Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
          Lütfen diğer ürünlerimize göz atın.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-steel-900 text-white font-medium rounded-lg hover:bg-steel-800 transition-colors"
          >
            <Search className="w-5 h-5" />
            Ürünlere Göz At
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-steel-300 text-steel-700 font-medium rounded-lg hover:bg-steel-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            Anasayfa
          </Link>
        </div>

        {/* Yardım */}
        <p className="mt-8 text-sm text-steel-500">
          Yardıma mı ihtiyacınız var?{' '}
          <Link href="/contact" className="text-primary-600 hover:underline">
            Bize ulaşın
          </Link>
        </p>
      </div>
    </div>
  );
}

