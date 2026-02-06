/**
 * Kalite Standartlarımız Sayfası
 * Alya kalite standartları ve Sheffield çelik kalitesi hakkında bilgi
 */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Shield, Globe, Factory } from 'lucide-react'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import VideoBackground from '@/components/VideoBackground'
import { i18nConfig, Locale } from '@/lib/i18n/config'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    tr: 'Kalite Standartlarımız',
    en: 'Our Quality Standards',
    ar: 'معايير الجودة لدينا',
    ru: 'Наши стандарты качества',
    fr: 'Nos Normes de Qualité',
  }
  const descriptions = {
    tr: 'Alya kalite standartları ve endüstriyel kesicilerde dünya çapında tanınan kalite güvencesi.',
    en: 'Alya quality standards and globally recognized quality assurance in industrial cutters.',
    ar: 'معايير جودة أليا وضمان الجودة المعترف به عالميًا في أدوات القطع الصناعية.',
    ru: 'Стандарты качества Alya и всемирно признанная гарантия качества промышленных резаков.',
    fr: 'Normes de qualité Alya et assurance qualité mondialement reconnue dans les outils de coupe industriels.',
  }

  return generateSeoMetadata({
    title: titles[locale],
    description: descriptions[locale],
    keywords: ['kalite standartları', 'alya kalitesi', 'sheffield çelik', 'endüstriyel bıçak kalitesi'],
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/quality-standards`,
  })
}

// İçerik objeleri - dil bazlı
const content = {
  tr: {
    heroTitle: 'Kalite Standartlarımız',
    heroDescription: 'Dünya genelinde tanınan kalite standartlarıyla, endüstriyel kesici çözümlerimizi dünya geneline sunuyoruz.',
    exploreProducts: 'Ürünleri İncele',
    madeInSheffield: 'Made in Sheffield',
    whySheffield: 'Neden Sheffield?',
    whySheffieldDesc: 'Sheffield, yüzyıllardır dünya çelik endüstrisinin kalbi olmuştur.',
    ctaTitle: 'Sheffield Kalitesini Deneyimleyin',
    ctaDescription: 'Endüstriyel kesicilerde en yüksek kalite standardı için bizimle iletişime geçin.',
    contactUs: 'İletişime Geçin',
    qualityPoints: [
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
    ],
  },
  en: {
    heroTitle: 'Our Quality Standards',
    heroDescription: 'We deliver industrial cutting solutions worldwide with globally recognized quality standards.',
    exploreProducts: 'Explore Products',
    madeInSheffield: 'Made in Sheffield',
    whySheffield: 'Why Sheffield?',
    whySheffieldDesc: 'Sheffield has been the heart of the global steel industry for centuries.',
    ctaTitle: 'Experience Sheffield Quality',
    ctaDescription: 'Contact us for the highest quality standards in industrial cutters.',
    contactUs: 'Contact Us',
    qualityPoints: [
      {
        icon: Award,
        title: 'Globally Recognized Brand',
        description: 'Made in Sheffield has been a symbol of quality and reliability worldwide since the 1800s.',
      },
      {
        icon: Shield,
        title: 'Registered Quality Mark',
        description: 'Official mark registered with the UK Patent Office, offering authenticity and quality guarantee.',
      },
      {
        icon: Factory,
        title: 'Advanced Manufacturing Technology',
        description: 'Perfect combination of traditional craftsmanship and modern manufacturing technology.',
      },
      {
        icon: Globe,
        title: 'Global Quality Standard',
        description: 'Internationally recognized quality assurance preferred by world-leading brands.',
      },
    ],
  },
  ar: {
    heroTitle: 'معايير الجودة لدينا',
    heroDescription: 'نقدم حلول القطع الصناعية في جميع أنحاء العالم بمعايير جودة معترف بها عالميًا.',
    exploreProducts: 'استكشف المنتجات',
    madeInSheffield: 'صنع في شيفيلد',
    whySheffield: 'لماذا شيفيلد؟',
    whySheffieldDesc: 'كانت شيفيلد قلب صناعة الصلب العالمية لعدة قرون.',
    ctaTitle: 'اختبر جودة شيفيلد',
    ctaDescription: 'تواصل معنا للحصول على أعلى معايير الجودة في أدوات القطع الصناعية.',
    contactUs: 'تواصل معنا',
    qualityPoints: [
      {
        icon: Award,
        title: 'علامة تجارية معترف بها عالميًا',
        description: 'صنع في شيفيلد كان رمزًا للجودة والموثوقية في جميع أنحاء العالم منذ القرن التاسع عشر.',
      },
      {
        icon: Shield,
        title: 'علامة جودة مسجلة',
        description: 'علامة رسمية مسجلة لدى مكتب براءات الاختراع البريطاني، تقدم ضمان الأصالة والجودة.',
      },
      {
        icon: Factory,
        title: 'تكنولوجيا تصنيع متقدمة',
        description: 'مزيج مثالي من الحرفية التقليدية وتكنولوجيا التصنيع الحديثة.',
      },
      {
        icon: Globe,
        title: 'معيار جودة عالمي',
        description: 'ضمان جودة معترف به دوليًا ومفضل من قبل العلامات التجارية الرائدة عالميًا.',
      },
    ],
  },
  ru: {
    heroTitle: 'Наши стандарты качества',
    heroDescription: 'Мы поставляем промышленные режущие решения по всему миру с глобально признанными стандартами качества.',
    exploreProducts: 'Посмотреть продукцию',
    madeInSheffield: 'Сделано в Шеффилде',
    whySheffield: 'Почему Шеффилд?',
    whySheffieldDesc: 'Шеффилд был сердцем мировой сталелитейной промышленности на протяжении веков.',
    ctaTitle: 'Испытайте качество Шеффилда',
    ctaDescription: 'Свяжитесь с нами для получения высочайших стандартов качества в промышленных резаках.',
    contactUs: 'Свяжитесь с нами',
    qualityPoints: [
      {
        icon: Award,
        title: 'Всемирно признанный бренд',
        description: 'Сделано в Шеффилде — символ качества и надёжности во всём мире с 1800-х годов.',
      },
      {
        icon: Shield,
        title: 'Зарегистрированный знак качества',
        description: 'Официальный знак, зарегистрированный в Патентном ведомстве Великобритании, гарантирующий подлинность и качество.',
      },
      {
        icon: Factory,
        title: 'Передовые производственные технологии',
        description: 'Идеальное сочетание традиционного мастерства и современных производственных технологий.',
      },
      {
        icon: Globe,
        title: 'Глобальный стандарт качества',
        description: 'Международно признанная гарантия качества, предпочитаемая ведущими мировыми брендами.',
      },
    ],
  },
  fr: {
    heroTitle: 'Nos normes de qualité',
    heroDescription: 'Nous fournissons des solutions de coupe industrielle dans le monde entier avec des normes de qualité mondialement reconnues.',
    exploreProducts: 'Explorer les produits',
    madeInSheffield: 'Fabriqué à Sheffield',
    whySheffield: 'Pourquoi Sheffield ?',
    whySheffieldDesc: 'Sheffield est le cœur de l\'industrie sidérurgique mondiale depuis des siècles.',
    ctaTitle: 'Découvrez la qualité Sheffield',
    ctaDescription: 'Contactez-nous pour les normes de qualité les plus élevées dans les outils de coupe industriels.',
    contactUs: 'Contactez-nous',
    qualityPoints: [
      {
        icon: Award,
        title: 'Marque mondialement reconnue',
        description: 'Fabriqué à Sheffield est un symbole de qualité et de fiabilité dans le monde entier depuis les années 1800.',
      },
      {
        icon: Shield,
        title: 'Marque de qualité enregistrée',
        description: 'Marque officielle enregistrée auprès de l\'Office britannique des brevets, offrant une garantie d\'authenticité et de qualité.',
      },
      {
        icon: Factory,
        title: 'Technologie de fabrication avancée',
        description: 'Combinaison parfaite de savoir-faire traditionnel et de technologie de fabrication moderne.',
      },
      {
        icon: Globe,
        title: 'Norme de qualité mondiale',
        description: 'Assurance qualité internationalement reconnue, privilégiée par les marques mondiales de premier plan.',
      },
    ],
  },
};

export default async function KaliteStandartlariPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale] || content.tr

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
              <Image
                src="/images/made-in-sheffield-logo.png"
                alt="Made in Sheffield"
                width={200}
                height={128}
                className="h-24 md:h-32 w-auto mx-auto"
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-steel-200 max-w-3xl mx-auto mb-8">
              {t.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/${locale}/categories`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
              >
                {t.exploreProducts}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://www.madeinsheffield.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                {t.madeInSheffield}
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
              {t.whySheffield}
            </h2>
            <p className="text-base text-steel-600 leading-relaxed max-w-2xl mx-auto">
              {t.whySheffieldDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.qualityPoints.map((point, index) => (
              <div
                key={index}
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
                {t.ctaTitle}
              </h2>
              <p className="text-steel-600 text-sm">
                {t.ctaDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-steel-900 text-white text-sm font-medium rounded-lg hover:bg-steel-800 transition-all"
              >
                {t.contactUs}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/categories`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-steel-700 text-sm font-medium rounded-lg hover:bg-steel-100 transition-all"
              >
                {t.exploreProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
