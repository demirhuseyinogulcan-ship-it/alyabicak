/**
 * Skeleton Component
 * Loading states için placeholder bileşenleri
 */

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

const roundedStyles = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export default function Skeleton({ 
  className = '', 
  width,
  height,
  rounded = 'md',
}: SkeletonProps) {
  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={`
        animate-pulse bg-steel-200
        ${roundedStyles[rounded]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={style}
    />
  )
}

// Text Skeleton
export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          height={16} 
          className={i === lines - 1 ? 'w-3/4' : 'w-full'} 
        />
      ))}
    </div>
  )
}

// Card Skeleton
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm ${className}`}>
      <Skeleton className="aspect-video w-full" rounded="none" />
      <div className="p-6 space-y-4">
        <Skeleton height={24} className="w-3/4" />
        <SkeletonText lines={2} />
        <div className="flex gap-2">
          <Skeleton height={24} width={60} rounded="full" />
          <Skeleton height={24} width={80} rounded="full" />
        </div>
      </div>
    </div>
  )
}

// Product Card Skeleton
export function SkeletonProductCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm ${className}`}>
      <Skeleton className="aspect-video w-full" rounded="none" />
      <div className="p-4 space-y-3">
        <Skeleton height={12} className="w-1/3" />
        <Skeleton height={20} className="w-full" />
        <Skeleton height={16} className="w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton height={24} width={80} />
          <Skeleton height={36} width={100} rounded="lg" />
        </div>
      </div>
    </div>
  )
}

// Avatar Skeleton
export function SkeletonAvatar({ size = 40 }: { size?: number }) {
  return <Skeleton width={size} height={size} rounded="full" />
}

// Button Skeleton
export function SkeletonButton({ 
  size = 'md',
  fullWidth = false,
}: { 
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean 
}) {
  const heights = { sm: 32, md: 40, lg: 48 }
  const widths = { sm: 80, md: 120, lg: 160 }
  
  return (
    <Skeleton 
      height={heights[size]} 
      width={fullWidth ? '100%' : widths[size]} 
      rounded="lg" 
    />
  )
}

// Table Row Skeleton
export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
  return (
    <div className="flex gap-4 py-4 border-b border-steel-100">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton 
          key={i} 
          height={16} 
          className={`flex-1 ${i === 0 ? 'max-w-[200px]' : ''}`} 
        />
      ))}
    </div>
  )
}

// Grid Skeleton
export function SkeletonGrid({ 
  count = 6, 
  columns = 3,
  type = 'card',
}: { 
  count?: number
  columns?: number
  type?: 'card' | 'product'
}) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${colsClass} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        type === 'product' 
          ? <SkeletonProductCard key={i} />
          : <SkeletonCard key={i} />
      ))}
    </div>
  )
}

