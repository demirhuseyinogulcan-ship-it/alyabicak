/**
 * Home Page - Localized
 */

import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import SheffieldSection from '@/components/SheffieldSection';
import ConsultingSection from '@/components/ConsultingSection';
import BestSellers from '@/components/BestSellers';
import BlogSection from '@/components/BlogSection';
import ValueProposition from '@/components/ValueProposition';
import TrustLogos from '@/components/TrustLogos';
import { siteConfig } from '@/lib/config';
import { getDictionary, type Locale } from '@/lib/i18n';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSlider />
      
      {/* Trust Logos - Müşteri/Sertifika Logoları */}
      <TrustLogos />
      
      {/* Value Proposition - Neden Alya? */}
      <ValueProposition />
      
      {/* Kategoriler */}
      <CategoryGrid />
      
      {/* Sheffield Kalitesi */}
      <SheffieldSection />
      
      {/* Blog/Bülten - Sadece aktifse göster */}
      {siteConfig.features.enableBlog && (
        <BlogSection 
          locale={locale}
          translations={{
            title: dict.blog.title,
            subtitle: dict.blog.subtitle,
            readMore: dict.blog.readMore,
            viewAll: dict.blog.viewAll,
            readTime: dict.blog.readTime,
          }}
          categoryLabels={dict.blog.categories}
        />
      )}
      
      {/* Danışmanlık */}
      <ConsultingSection />
      
      {/* En Çok Satanlar */}
      <BestSellers />
    </>
  );
}
