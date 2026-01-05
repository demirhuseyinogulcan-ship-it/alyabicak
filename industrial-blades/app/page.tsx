import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import SheffieldSection from '@/components/SheffieldSection'
import ConsultingSection from '@/components/ConsultingSection'
import BestSellers from '@/components/BestSellers'
import BlogSection from '@/components/BlogSection'
import ValueProposition from '@/components/ValueProposition'
import TrustLogos from '@/components/TrustLogos'
import { siteConfig } from '@/lib/config'

export default function HomePage() {
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
      {siteConfig.features.enableBlog && <BlogSection />}
      
      {/* Danışmanlık */}
      <ConsultingSection />
      
      {/* En Çok Satanlar */}
      <BestSellers />
    </>
  )
}
