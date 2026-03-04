/**
 * Blade Engineer - Teknik Cizim Araci
 * /[locale]/tools/blade-engineer
 * 
 * GIZLI SAYFA: Navigation, sitemap, robots'a dahil DEGIL
 * Test icin dogrudan URL ile erisim: /tr/tools/blade-engineer
 */

import { getDictionary, type Locale } from '@/lib/i18n'
import BladeEngineer from '@/components/blade-engineer/BladeEngineer'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.bladeEngineer

  return {
    title: t?.pageTitle || 'Blade Engineer',
    description: t?.pageSubtitle || 'Technical drawing tool',
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function BladeEngineerPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.bladeEngineer

  return <BladeEngineer dict={t} locale={locale} />
}
