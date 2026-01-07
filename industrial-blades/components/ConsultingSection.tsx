'use client'

import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Button, Badge } from '@/components/ui'
import { getWhatsAppUrl } from '@/lib/config'
import { useLocale } from '@/lib/i18n/client'

export default function ConsultingSection() {
  const { locale, dictionary: dict } = useLocale()
  const t = dict.consultingSection
  
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pages/profesyonel-destek.jpg"
                alt={t.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-steel-900">{t.freeConsulting}</div>
                  <div className="text-sm text-steel-600">{t.support247}</div>
                </div>
              </div>
              <p className="text-sm text-steel-600">
                {t.helpText}
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="primary" size="md" rounded="full" className="mb-6">
              {t.badge}
            </Badge>
            
            <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-4">
              {t.title}
            </h2>
            
            <p className="text-base text-steel-600 leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-steel-900 mb-1">{t.steps.step1Title}</h3>
                  <p className="text-sm text-steel-600">{t.steps.step1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-steel-900 mb-1">{t.steps.step2Title}</h3>
                  <p className="text-sm text-steel-600">{t.steps.step2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-steel-900 mb-1">{t.steps.step3Title}</h3>
                  <p className="text-sm text-steel-600">{t.steps.step3Desc}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                href={`/${locale}/danismanlik`}
                size="lg" 
                icon={ArrowRight}
              >
                {t.cta}
              </Button>

              <Button
                href={getWhatsAppUrl(dict.whatsapp.consultingMessage)}
                variant="whatsapp"
                size="lg"
              >
                {t.whatsappCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
