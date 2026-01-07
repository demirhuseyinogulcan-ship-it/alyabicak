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
    href: '/kalite-standartlarimiz',
  },
  {
    titleKey: 'nav.blog',
    href: '/bulten',
  },
  {
    titleKey: 'nav.consulting',
    href: '/danismanlik',
  },
  {
    titleKey: 'nav.about',
    href: '/hakkimizda',
  },
  {
    titleKey: 'nav.contact',
    href: '/iletisim',
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
    { titleKey: 'nav.about', href: '/hakkimizda' },
    { titleKey: 'nav.industrialCutters', href: '/kategoriler' },
    { titleKey: 'nav.blog', href: '/bulten' },
    { titleKey: 'nav.consulting', href: '/danismanlik' },
    { titleKey: 'nav.contact', href: '/iletisim' },
  ],
  legal: [
    { titleKey: 'footer.privacy', href: '/kvkk' },
    { titleKey: 'footer.cookies', href: '/cerez-politikasi' },
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

