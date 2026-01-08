export default function ProductLoading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="py-4 bg-steel-50 border-b border-steel-100">
        <div className="container mx-auto px-4">
          <div className="flex gap-2">
            <div className="h-4 w-20 bg-steel-200 rounded" />
            <div className="h-4 w-4 bg-steel-200 rounded" />
            <div className="h-4 w-32 bg-steel-200 rounded" />
            <div className="h-4 w-4 bg-steel-200 rounded" />
            <div className="h-4 w-24 bg-steel-200 rounded" />
          </div>
        </div>
      </div>
      
      {/* Hero Section Skeleton */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Sol: Görsel */}
            <div className="space-y-4">
              <div className="aspect-square bg-steel-100 rounded-lg" />
              <div className="flex gap-3 justify-center">
                <div className="w-16 h-16 bg-steel-100 rounded" />
                <div className="w-16 h-16 bg-steel-100 rounded" />
                <div className="w-16 h-16 bg-steel-100 rounded" />
              </div>
            </div>
            
            {/* Sağ: Bilgiler */}
            <div className="space-y-4">
              <div className="h-4 w-24 bg-steel-200 rounded" />
              <div className="h-8 w-3/4 bg-steel-200 rounded" />
              <div className="h-5 w-1/2 bg-steel-200 rounded" />
              <div className="h-6 w-32 bg-steel-100 rounded mt-4" />
              <div className="space-y-2 mt-6">
                <div className="h-4 w-full bg-steel-100 rounded" />
                <div className="h-4 w-5/6 bg-steel-100 rounded" />
                <div className="h-4 w-4/5 bg-steel-100 rounded" />
              </div>
              <div className="flex gap-3 mt-8">
                <div className="h-12 w-32 bg-steel-200 rounded-lg" />
                <div className="h-12 w-40 bg-green-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specs Skeleton */}
      <section className="py-12 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="h-6 w-40 bg-steel-200 rounded mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-steel-100">
                <div className="h-4 w-4 bg-steel-100 rounded mx-auto mb-2" />
                <div className="h-3 w-16 bg-steel-100 rounded mx-auto mb-1" />
                <div className="h-4 w-20 bg-steel-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

