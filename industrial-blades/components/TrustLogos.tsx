/**
 * Trust Logos Section
 * Güvenilirlik göstergesi - Sertifikalar ve ülke dağılımı
 * 
 * Not: Müşteri logoları gizlilik nedeniyle gösterilmiyor
 * Bunun yerine sertifikalar ve ihracat bilgisi gösteriliyor
 */

'use client'

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Kalite Yönetimi' },
  { name: 'FDA', desc: 'Gıda Güvenliği' },
  { name: 'USDA', desc: 'ABD Onaylı' },
  { name: 'Made in Sheffield', desc: 'İngiltere' },
]

const stats = [
  { value: '35+', label: 'Ülkeye İhracat' },
  { value: '30', label: 'Yıllık Deneyim' },
  { value: '500+', label: 'Ürün Çeşidi' },
]

export default function TrustLogos() {
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
                  <span className="text-xs text-white/50 ml-1 hidden sm:inline">· {cert.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-steel-700" />

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

