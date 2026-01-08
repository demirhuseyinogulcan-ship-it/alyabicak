/**
 * Kategoriler Loading State
 */
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 bg-steel-700 rounded-lg animate-pulse mb-6 w-3/4 mx-auto" />
            <div className="h-6 bg-steel-700 rounded animate-pulse w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-steel-200" />
                <div className="p-6">
                  <div className="h-7 bg-steel-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-steel-200 rounded w-full mb-2" />
                  <div className="h-4 bg-steel-200 rounded w-2/3 mb-4" />
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-steel-100 rounded w-16" />
                    <div className="h-6 bg-steel-100 rounded w-20" />
                    <div className="h-6 bg-steel-100 rounded w-14" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
