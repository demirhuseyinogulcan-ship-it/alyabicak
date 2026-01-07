/**
 * Kategori Loading State
 */
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative h-[400px] bg-gradient-to-br from-steel-900 to-steel-800">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="h-4 bg-steel-700 rounded w-48 mb-6 animate-pulse" />
            <div className="h-12 bg-steel-700 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-steel-700 rounded w-full mb-4 animate-pulse" />
            <div className="h-4 bg-steel-700 rounded w-32 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Subcategories Skeleton */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="h-8 bg-steel-200 rounded w-48 mb-2 animate-pulse" />
            <div className="h-5 bg-steel-200 rounded w-64 animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-steel-200 rounded-lg" />
                  <div className="w-5 h-5 bg-steel-200 rounded" />
                </div>
                <div className="h-6 bg-steel-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-steel-200 rounded w-full mb-3" />
                <div className="h-4 bg-steel-200 rounded w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
