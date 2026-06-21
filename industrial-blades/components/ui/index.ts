/**
 * UI Components - Merkezi Export
 *
 * Kullanım:
 * import { Button, Card, Badge } from '@/components/ui'
 */

// Button
export { default as Button } from './Button'
export type { ButtonProps } from './Button'

// Card
export {
  default as Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardBadge,
} from './Card'
export type {
  CardProps,
  CardImageProps,
  CardContentProps,
  CardTitleProps,
  CardDescriptionProps,
  CardFooterProps,
  CardBadgeProps,
} from './Card'

// Badge
export { default as Badge, StatusBadge, CountBadge } from './Badge'
export type { BadgeProps, StatusBadgeProps, CountBadgeProps } from './Badge'

// Skeleton
export {
  default as Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonProductCard,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonTableRow,
  SkeletonGrid,
} from './Skeleton'

// Section Header
export { default as SectionHeader, PageHeader } from './SectionHeader'
export type { SectionHeaderProps, PageHeaderProps } from './SectionHeader'

// Breadcrumb
export { default as Breadcrumb, generateBreadcrumbSchema } from './Breadcrumb'
export type { BreadcrumbProps, BreadcrumbItem } from './Breadcrumb'

// Accessibility
export {
  SkipLink,
  VisuallyHidden,
  LiveRegion,
  FocusTrap,
  IconButton,
  LoadingAnnouncement,
} from './A11y'
export type {
  SkipLinkProps,
  VisuallyHiddenProps,
  LiveRegionProps,
  FocusTrapProps,
  IconButtonA11yProps,
  LoadingAnnouncementProps,
} from './A11y'

