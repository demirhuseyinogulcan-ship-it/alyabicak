'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, Zap, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import { useLocale } from '@/lib/i18n/client'

export default function SheffieldSection() {
  const { locale, dictionary: dict } = useLocale();
  const t = dict.sheffield;
  
  const features = [
    {
      icon: Award,
      title: t.features.sheffieldQuality,
      description: t.features.sheffieldQualityDesc
    },
    {
      icon: Zap,
      title: t.features.highPerformance,
      description: t.features.highPerformanceDesc
    },
    {
      icon: Shield,
      title: t.features.durability,
      description: t.features.durabilityDesc
    },
    {
      icon: Clock,
      title: t.features.fastDelivery,
      description: t.features.fastDeliveryDesc
    }
  ]

  const qualityStandards = [
    { name: t.standards.fda, desc: t.standards.fdaDesc },
    { name: t.standards.usda, desc: t.standards.usdaDesc },
    { name: t.standards.iso, desc: t.standards.isoDesc },
  ]

  return (
    <section className="py-16 lg:py-20 bg-steel-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              {t.title}
            </h2>
            
            <p className="text-base text-steel-300 leading-relaxed mb-8">
              {t.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-steel-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Standards */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-400" />
                {t.qualityTitle}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {qualityStandards.map((standard) => (
                  <div key={standard.name} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{standard.name}</div>
                      <div className="text-xs text-steel-400">{standard.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/quality-standards`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all hover:shadow-lg"
            >
              <span>{t.moreInfo}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pages/hakkimizda-bg.jpg"
                alt="Alya Kalite Standartları"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
