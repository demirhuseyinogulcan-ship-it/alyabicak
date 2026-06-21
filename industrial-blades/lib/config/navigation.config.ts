/**
 * Navigation Configuration
 * Merkezi navigasyon yapılandırması - i18n destekli
 */

export interface NavItem {
  titleKey: string // Dictionary key
  title?: string // Fallback or computed title
  href: string
  hasMegaMenu?: boolean
  isExternal?: boolean
  icon?: string
}

// Navigation items with dictionary keys
export const mainNavigation: NavItem[] = [
  {
    titleKey: 'nav.industrialCutters',
    href: '/#kategoriler',
    hasMegaMenu: true,
  },
  {
    titleKey: 'nav.qualityStandards',
    href: '/quality-standards',
  },
  {
    titleKey: 'nav.blog',
    href: '/newsletter',
  },
  {
    titleKey: 'nav.consulting',
    href: '/consulting',
  },
  {
    titleKey: 'nav.about',
    href: '/about',
  },
  {
    titleKey: 'nav.contact',
    href: '/contact',
  },
]

// Helper to get localized navigation
export function getLocalizedNavigation(locale: string): NavItem[] {
  return mainNavigation.map(item => ({
    ...item,
    href: item.href.startsWith('/#')
      ? `/${locale}${item.href}`
      : `/${locale}${item.href}`,
  }))
}

export const footerNavigation = {
  quickLinks: [
    { titleKey: 'nav.about', href: '/about' },
    { titleKey: 'nav.industrialCutters', href: '/categories' },
    { titleKey: 'nav.blog', href: '/newsletter' },
    { titleKey: 'nav.consulting', href: '/consulting' },
    { titleKey: 'nav.contact', href: '/contact' },
  ],
  legal: [
    { titleKey: 'footer.privacy', href: '/privacy-policy' },
    { titleKey: 'footer.cookies', href: '/cookie-policy' },
    { titleKey: 'nav.faq', href: '/faq' },
  ],
}

// Get localized footer navigation
export function getLocalizedFooterNavigation(locale: string) {
  return {
    quickLinks: footerNavigation.quickLinks.map(item => ({
      ...item,
      href: `/${locale}${item.href}`,
    })),
    legal: footerNavigation.legal.map(item => ({
      ...item,
      href: `/${locale}${item.href}`,
    })),
  }
}

