/**
 * Trust Logos Section
 * Güvenilirlik göstergesi - Sertifikalar ve ülke dağılımı
 * 
 * Not: Müşteri logoları gizlilik nedeniyle gösterilmiyor
 * Bunun yerine sertifikalar ve ihracat bilgisi gösteriliyor
 */

'use client'

import { useLocale } from '@/lib/i18n/client'

export default function TrustLogos() {
  const { dictionary: t } = useLocale()
  
  const certifications = [
    { name: t.trustLogos.certifications.iso.name, desc: t.trustLogos.certifications.iso.desc },
    { name: t.trustLogos.certifications.fda.name, desc: t.trustLogos.certifications.fda.desc },
    { name: t.trustLogos.certifications.usda.name, desc: t.trustLogos.certifications.usda.desc },
  ]

  const stats = [
    { value: t.trustLogos.stats.exportCountries.value, label: t.trustLogos.stats.exportCountries.label },
    { value: t.trustLogos.stats.yearsExperience.value, label: t.trustLogos.stats.yearsExperience.label },
    { value: t.trustLogos.stats.productVariety.value, label: t.trustLogos.stats.productVariety.label },
  ]

  return (
    <section className="py-6 bg-steel-900 border-y border-steel-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <div>
                  <span className="font-semibold text-sm">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            {stats.map((stat, i) => (
              <div 
                key={stat.label}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

