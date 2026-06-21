/**
 * Home Page - Localized
 */

import { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import ConsultingSection from '@/components/ConsultingSection';
import BestSellers from '@/components/BestSellers';
import TrustLogos from '@/components/TrustLogos';
import { getDictionary, type Locale } from '@/lib/i18n';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getDomainUrl } from '@/lib/config/domains';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return genMeta({
    title: dict.meta.title,
    description: dict.meta.description,
    locale,
    path: '',
    url: `${getDomainUrl(locale)}/${locale}`,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <>
      <HeroSlider />

      {/* Trust Logos - Müşteri/Sertifika Logoları */}
      <TrustLogos />

      {/* Kategoriler */}
      <CategoryGrid />

      {/* Danışmanlık */}
      <ConsultingSection />

      {/* En Çok Satanlar */}
      <BestSellers />
    </>
  );
}
