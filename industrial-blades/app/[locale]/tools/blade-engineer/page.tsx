/**
 * Blade Configurator - Bicak Sartname Araci
 * /[locale]/tools/blade-engineer
 * 
 * GIZLI SAYFA: Navigation, sitemap, robots'a dahil DEGIL
 * Test icin dogrudan URL ile erisim: /tr/tools/blade-engineer
 */

import { getDictionary, type Locale } from '@/lib/i18n'
import BladeConfigurator from '@/components/blade-configurator/BladeConfigurator'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.bladeConfigurator

  return {
    title: t?.pageTitle || 'Blade Configurator',
    description: t?.pageSubtitle || 'Blade specification tool',
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function BladeConfiguratorPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.bladeConfigurator

  return <BladeConfigurator dict={t} locale={locale} />
}
