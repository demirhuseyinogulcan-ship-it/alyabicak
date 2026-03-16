/**
 * Kalite Standartlarımız Sayfası
 * Alya kalite standartları hakkında bilgi
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import Image from 'next/image'
import { i18nConfig, Locale } from '@/lib/i18n/config'
import { getDomainUrl } from '@/lib/config/domains'

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
    title: titles[locale] || titles['en'] || titles['tr'],
    description: descriptions[locale] || descriptions['en'] || descriptions['tr'],
    locale,
    path: '/quality-standards',
    url: `${getDomainUrl(locale)}/${locale}/quality-standards`,
  })
}

// İçerik objeleri - dil bazlı
const content = {
  tr: {
    heroTitle: 'Kaliteli Hammadde,',
    heroTitleAccent: 'Uzun Vadede Tasarruf',
    heroDescription: 'Hammadde ve proses kalitesinde en yüksek seviyedeki çeliklerden üretilen endüstriyel kesiciler, makine duruşlarını azaltır ve üretim verimliliğinizi artırır.',
    exploreProducts: 'Ürünleri İncele',
    valuePoints: [
      { highlight: 'Verimlilik', title: 'Daha Az Makine Duruşu', description: 'Uzun bıçak ömrü = daha az değişim. Üretim hattınız kesintisiz çalışır.' },
      { highlight: 'Dayanıklılık', title: 'Uzun Bıçak Ömrü', description: 'Hassas üretim prosesi ile standart bıçaklardan çok daha uzun ömür.' },
      { highlight: 'Gıda Güvenliği', title: 'FDA & USDA Uyumlu', description: 'Gıda, ilaç ve hijyen gerektiren tüm sektörlerde güvenle kullanım.' },
      { highlight: 'Uzman Destek', title: '30 Yıllık Deneyim', description: 'Türkiye\'nin lider firmaları ile çalışıyoruz. Teknik danışmanlık ve satış sonrası destek.' },
    ],
  },
  en: {
    heroTitle: 'Quality Raw Materials,',
    heroTitleAccent: 'Long-Term Savings',
    heroDescription: 'Industrial cutters manufactured from the highest quality steels reduce machine downtime and increase your production efficiency.',
    exploreProducts: 'Explore Products',
    valuePoints: [
      { highlight: 'Efficiency', title: 'Less Machine Downtime', description: 'Longer blade life = fewer changes. Your production line runs without interruption.' },
      { highlight: 'Durability', title: 'Extended Blade Life', description: 'Much longer life than standard blades with precision manufacturing processes.' },
      { highlight: 'Food Safety', title: 'FDA & USDA Compliant', description: 'Safe use in all sectors requiring food, pharmaceutical and hygiene standards.' },
      { highlight: 'Expert Support', title: '30 Years of Experience', description: 'We work with Turkey\'s leading companies. Technical consulting and after-sales support.' },
    ],
  },
  ar: {
    heroTitle: 'مواد خام عالية الجودة،',
    heroTitleAccent: 'توفير طويل الأمد',
    heroDescription: 'أدوات القطع الصناعية المصنوعة من أعلى أنواع الفولاذ جودة تقلل من توقف الآلات وتزيد من كفاءة إنتاجك.',
    exploreProducts: 'استكشف المنتجات',
    valuePoints: [
      { highlight: 'الكفاءة', title: 'توقف أقل للآلات', description: 'عمر أطول للشفرة = تغييرات أقل. خط إنتاجك يعمل بدون انقطاع.' },
      { highlight: 'المتانة', title: 'عمر شفرة أطول', description: 'عمر أطول بكثير من الشفرات القياسية بفضل عمليات التصنيع الدقيقة.' },
      { highlight: 'سلامة الغذاء', title: 'متوافق مع FDA و USDA', description: 'استخدام آمن في جميع القطاعات التي تتطلب معايير الغذاء والنظافة.' },
      { highlight: 'دعم الخبراء', title: '30 عامًا من الخبرة', description: 'نعمل مع الشركات الرائدة في تركيا. استشارات فنية ودعم ما بعد البيع.' },
    ],
  },
  ru: {
    heroTitle: 'Качественное сырьё,',
    heroTitleAccent: 'Долгосрочная экономия',
    heroDescription: 'Промышленные резаки из стали высочайшего качества сокращают простои оборудования и повышают эффективность производства.',
    exploreProducts: 'Посмотреть продукцию',
    valuePoints: [
      { highlight: 'Эффективность', title: 'Меньше простоев', description: 'Долгий срок службы = меньше замен. Ваша линия работает без перебоев.' },
      { highlight: 'Долговечность', title: 'Длительный срок службы', description: 'Гораздо более длительный срок службы благодаря точным процессам.' },
      { highlight: 'Пищевая безопасность', title: 'Соответствие FDA и USDA', description: 'Безопасное использование в пищевой, фармацевтической промышленности.' },
      { highlight: 'Экспертная поддержка', title: '30 лет опыта', description: 'Работаем с ведущими компаниями Турции. Техническая консультация.' },
    ],
  },
  fr: {
    heroTitle: 'Matières premières de qualité,',
    heroTitleAccent: 'Économies à long terme',
    heroDescription: 'Les outils de coupe industriels fabriqués à partir des aciers de la plus haute qualité réduisent les temps d\'arrêt des machines et augmentent l\'efficacité de votre production.',
    exploreProducts: 'Explorer les produits',
    valuePoints: [
      { highlight: 'Efficacité', title: 'Moins d\'arrêts machine', description: 'Durée de vie plus longue = moins de changements. Votre ligne fonctionne sans interruption.' },
      { highlight: 'Durabilité', title: 'Durée de vie prolongée', description: 'Durée de vie beaucoup plus longue grâce aux processus de fabrication précis.' },
      { highlight: 'Sécurité alimentaire', title: 'Conforme FDA & USDA', description: 'Utilisation sûre dans tous les secteurs nécessitant des normes alimentaires.' },
      { highlight: 'Support expert', title: '30 ans d\'expérience', description: 'Nous travaillons avec les entreprises leaders de Turquie. Conseil technique.' },
    ],
  },
};

export default async function KaliteStandartlariPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale] || content.tr

  return (
    <div className="min-h-screen">
      {/* Full-page hero with DEKUBE tungsten image */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <Image
          src="/images/quality-hero-tungsten.jpg"
          alt="Durham Duplex endüstriyel tungsten karbür bıçak — siyah arka planda profesyonel ürün fotoğrafı"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 relative z-10 py-28 lg:py-36">
          {/* Asymmetric layout — title left, cards right-staggered */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Title block on glass */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="backdrop-blur-xl bg-white/[0.07] border border-white/[0.12] rounded-2xl p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight mb-2 text-white">
                  {t.heroTitle}
                </h1>
                <span className="block text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight text-primary-400 mb-6">
                  {t.heroTitleAccent}
                </span>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  {t.heroDescription}
                </p>
                <Link
                  href={`/${locale}/categories`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg tracking-wide transition-all"
                >
                  {t.exploreProducts}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Staggered glass cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {t.valuePoints.map((point, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/[0.06] border border-white/[0.10] rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.12] hover:border-white/[0.20]"
                >
                  <span className="inline-block text-[11px] font-semibold text-primary-400 uppercase tracking-[0.15em] mb-3">
                    {point.highlight}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
