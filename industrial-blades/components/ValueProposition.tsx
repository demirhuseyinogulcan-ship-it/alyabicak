/**
 * Value Proposition Section
 * "Neden Alya?" - Farkımızı ve değer önerimizi net şekilde anlatan section
 */

'use client'

import { TrendingUp, Clock, Shield, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import VideoBackground from './VideoBackground'

const valueProps = [
  {
    icon: TrendingUp,
    title: 'Daha Az Makine Duruşu',
    description: 'Kaliteli çelik = uzun bıçak ömrü = daha az değişim. Üretim hattınız kesintisiz çalışır.',
    highlight: 'Verimlilik',
  },
  {
    icon: Clock,
    title: 'Uzun Bıçak Ömrü',
    description: 'Yüksek kalite hammadde ve hassas üretim prosesi ile standart bıçaklardan çok daha uzun ömür.',
    highlight: 'Dayanıklılık',
  },
  {
    icon: Shield,
    title: 'FDA & USDA Uyumlu',
    description: 'Gıda, ilaç ve hijyen gerektiren tüm sektörlerde güvenle kullanım. Uluslararası sertifikalar.',
    highlight: 'Gıda Güvenliği',
  },
  {
    icon: Wrench,
    title: '30 Yıllık Sektör Deneyimi',
    description: 'Türkiye\'nin lider firmaları ile çalışıyoruz. Teknik danışmanlık ve satış sonrası destek.',
    highlight: 'Uzman Destek',
  },
]

// Video arka plan kullanmak için bu değeri true yapın, kapatmak için false
const USE_VIDEO_BACKGROUND = true

export default function ValueProposition() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Video Background - Progressive Loading */}
      {USE_VIDEO_BACKGROUND ? (
        <VideoBackground
          videoSrc="/videos/hero-bg.mp4"
          posterSrc="/images/hero-bg-poster.jpg"
          overlay={true}
          overlayOpacity={50}
        />
      ) : (
        /* Eski Background Pattern - video kapalıyken kullanılır */
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 ${USE_VIDEO_BACKGROUND ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'}`}>
            Neden Alya Bıçak?
          </span>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 ${USE_VIDEO_BACKGROUND ? 'text-white' : 'text-steel-900'}`}>
            Kaliteli Hammadde, <br className="hidden md:block" />
            <span className={USE_VIDEO_BACKGROUND ? 'text-primary-400' : 'text-primary-600'}>Uzun Vadede Tasarruf</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${USE_VIDEO_BACKGROUND ? 'text-white/90' : 'text-steel-600'}`}>
            Hammadde ve proses kalitesinde en yüksek seviyedeki çeliklerden üretilen endüstriyel kesiciler,<br className="hidden md:block" />
            makine duruşlarını azaltır ve üretim verimliliğinizi artırır.
          </p>
        </div>

        {/* Value Props Grid - KOMPAKT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.title}
              className="group relative bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-300 hover:border-primary-200 hover:shadow-sm"
            >
              {/* Highlight Badge - Küçültüldü */}
              <span className="absolute top-3 right-3 px-2 py-0.5 bg-primary-600 text-white text-xs font-medium rounded">
                {prop.highlight}
              </span>
              
              {/* Icon - Küçültüldü */}
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                <prop.icon className="w-5 h-5 text-primary-600" />
              </div>
              
              {/* Title - Küçültüldü */}
              <h3 className="text-base font-semibold text-steel-900 mb-1.5">
                {prop.title}
              </h3>
              
              {/* Description - Küçültüldü */}
              <p className="text-steel-600 text-xs leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <Link
            href="/danismanlik"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Ücretsiz Danışmanlık Alın
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

