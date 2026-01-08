/**
 * Kategori Detay Loading State
 */

import { Skeleton, SkeletonCard } from '@/components/ui'

export default function CategoryLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex gap-2 mb-4">
            <Skeleton height={20} width={80} className="bg-white/10" />
            <Skeleton height={20} width={20} className="bg-white/10" />
            <Skeleton height={20} width={100} className="bg-white/10" />
          </div>
          
          <Skeleton height={48} width={300} className="bg-white/10 mb-4" />
          <Skeleton height={24} className="bg-white/10 max-w-xl" />
          
          <div className="mt-4">
            <Skeleton height={20} width={200} className="bg-white/10" />
          </div>
        </div>
      </section>

      {/* Subcategories Skeleton */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Skeleton height={32} width={200} className="mb-2" />
            <Skeleton height={20} width={300} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <Skeleton width={48} height={48} rounded="lg" />
                  <Skeleton width={20} height={20} />
                </div>
                <Skeleton height={24} className="mb-2" />
                <Skeleton height={16} className="mb-3" />
                <Skeleton height={16} width={80} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

