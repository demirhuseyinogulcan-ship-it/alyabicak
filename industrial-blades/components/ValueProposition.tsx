/**
 * Value Proposition Section
 * "Neden Alya?" - Farkımızı ve değer önerimizi net şekilde anlatan section
 */

'use client'

import { TrendingUp, Clock, Shield, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import VideoBackground from './VideoBackground'
import { useLocale } from '@/lib/i18n/client'

// Video arka plan kullanmak için bu değeri true yapın, kapatmak için false
const USE_VIDEO_BACKGROUND = true

export default function ValueProposition() {
  const { locale, dictionary: dict } = useLocale();
  const t = dict.valueProposition;

  const valueProps = [
    {
      icon: TrendingUp,
      title: t.props.lessDowntime,
      description: t.props.lessDowntimeDesc,
      highlight: t.props.lessDowntimeHighlight,
    },
    {
      icon: Clock,
      title: t.props.longLife,
      description: t.props.longLifeDesc,
      highlight: t.props.longLifeHighlight,
    },
    {
      icon: Shield,
      title: t.props.fdaCompliant,
      description: t.props.fdaCompliantDesc,
      highlight: t.props.fdaCompliantHighlight,
    },
    {
      icon: Wrench,
      title: t.props.experience,
      description: t.props.experienceDesc,
      highlight: t.props.experienceHighlight,
    },
  ]
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
          <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${USE_VIDEO_BACKGROUND ? 'text-white' : 'text-steel-900'}`}>
            {t.title} <br className="hidden md:block" />
            <span className={USE_VIDEO_BACKGROUND ? 'text-primary-400' : 'text-primary-600'}>{t.titleHighlight}</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto leading-relaxed ${USE_VIDEO_BACKGROUND ? 'text-white/90' : 'text-steel-600'}`}>
            {t.description}
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
            href={`/${locale}/consulting`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all hover:shadow-lg"
          >
            {dict.consulting.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

