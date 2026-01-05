/**
 * Sheffield Kalitesi Sayfası
 * Made in Sheffield markası ve kalite standartları hakkında bilgi
 */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Shield, Globe, Factory, CheckCircle } from 'lucide-react'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import VideoBackground from '@/components/VideoBackground'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Sheffield Kalitesi',
  description: 'Made in Sheffield markası ve İngiltere Sheffield çelik kalitesi hakkında bilgi. Dünya genelinde tanınan kalite standardı.',
  keywords: ['sheffield kalitesi', 'made in sheffield', 'sheffield çelik', 'ingiltere bıçak', 'kalite standardı'],
  url: 'https://www.alyabicak.com/sheffield-kalitesi',
})

const qualityPoints = [
  {
    icon: Award,
    title: 'Dünya Çapında Tanınan Marka',
    description: 'Made in Sheffield, 1800\'lerden bu yana dünya genelinde kalite ve güvenilirliğin simgesi olmuştur.',
  },
  {
    icon: Shield,
    title: 'Tescilli Kalite İşareti',
    description: 'UK Patent Office tarafından tescillenmiş, orijinallik ve kalite garantisi sunan resmi işaret.',
  },
  {
    icon: Factory,
    title: 'İleri Üretim Teknolojisi',
    description: 'Geleneksel ustalık ile modern üretim teknolojisinin mükemmel birleşimi.',
  },
  {
    icon: Globe,
    title: 'Global Kalite Standardı',
    description: 'Dünyanın önde gelen markaları tarafından tercih edilen, uluslararası alanda kabul görmüş kalite güvencesi.',
  },
]

export default function SheffieldKalitesiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative min-h-[85vh] flex items-center text-white overflow-hidden">
        {/* Video Background with Progressive Loading */}
        <VideoBackground
          videoSrc="/videos/hero-bg.mp4"
          posterSrc="/images/hero-bg-poster.jpg"
          overlay={true}
          overlayOpacity={70}
        />

        <div className="container mx-auto px-4 relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Made in Sheffield Logo */}
            <div className="inline-block mb-8">
              <img 
                src="/images/made-in-sheffield-logo.png" 
                alt="Made in Sheffield" 
                className="h-24 md:h-32 w-auto mx-auto"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              Quality Recognised Worldwide
            </h1>
            <p className="text-lg md:text-xl text-steel-200 max-w-3xl mx-auto mb-8">
              Made in Sheffield, dünya genelinde kalite ve güvenilirliğin simgesi olarak tanınan, 
              İngiltere Sheffield şehrinin üretim mirasını temsil eden prestijli bir markadır.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/kategoriler"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
              >
                Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://www.madeinsheffield.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                Made in Sheffield
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-2">
              Neden Sheffield?
            </h2>
            <p className="text-base text-steel-600 leading-relaxed max-w-2xl mx-auto">
              Sheffield, yüzyıllardır dünya çelik endüstrisinin kalbi olmuştur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div 
                key={point.title}
                className="group p-6 bg-steel-50 rounded-xl hover:bg-white hover:shadow-card transition-all duration-300 border border-steel-100"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <point.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-steel-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-steel-600 text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal ve uyumlu */}
      <section className="py-10 bg-steel-50 border-t border-steel-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-steel-900 mb-1">
                Sheffield Kalitesini Deneyimleyin
              </h2>
              <p className="text-steel-600 text-sm">
                Endüstriyel kesicilerde en yüksek kalite standardı için bizimle iletişime geçin.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-steel-900 text-white text-sm font-medium rounded-lg hover:bg-steel-800 transition-all"
              >
                İletişime Geçin
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kategoriler"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-steel-700 text-sm font-medium rounded-lg hover:bg-steel-100 transition-all"
              >
                Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

