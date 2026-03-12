// =============================================================================
// Simülatör Sayfası — [locale] Route Server Component
// =============================================================================

import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDomainUrl } from '@/lib/config/domains';
import SimulatorApp from '@/components/simulator/SimulatorApp';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const META: Record<string, { title: string; description: string }> = {
  tr: {
    title: 'Kesim Mühendisliği Simülatörü | Alya Bıçak',
    description:
      'Bıçak bileme açısı, kesme kuvveti, aşınma ve performans analizi simülatörü. Malzeme-bıçak uyumunu interaktif olarak test edin.',
  },
  en: {
    title: 'Cutting Engineering Simulator | Alya Blade',
    description:
      'Blade sharpening angle, cutting force, wear and performance analysis simulator. Test material-blade compatibility interactively.',
  },
  ar: {
    title: 'محاكي هندسة القطع | أليا بليد',
    description:
      'محاكي تحليل زاوية شحذ الشفرة وقوة القطع والتآكل والأداء. اختبر توافق المواد والشفرات بشكل تفاعلي.',
  },
  ru: {
    title: 'Симулятор инженерии резки | Alya Blade',
    description:
      'Симулятор анализа угла заточки лезвия, силы резания, износа и производительности.',
  },
  fr: {
    title: 'Simulateur d\'ingénierie de coupe | Alya Blade',
    description:
      'Simulateur d\'analyse de l\'angle d\'affûtage, de la force de coupe, de l\'usure et des performances.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.tr;
  const domainUrl = getDomainUrl(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'bıçak simülatörü',
      'bileme açısı hesaplama',
      'kesme kuvveti hesaplama',
      'endüstriyel bıçak analizi',
      'blade simulator',
      'cutting force calculator',
    ],
    // Soft launch: anasayfadan link yok, Google'da da görünmesin
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${domainUrl}/${locale}/simulator`,
    },
    alternates: {
      canonical: `${domainUrl}/${locale}/simulator`,
    },
  };
}

export default async function SimulatorPage({ params }: PageProps) {
  await params; // satisfy Next.js async requirement
  return <SimulatorApp />;
}
