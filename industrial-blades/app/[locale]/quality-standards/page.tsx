/**
 * Kalite Standartlarımız Sayfası
 * Alya kalite standartları ve Sheffield çelik kalitesi hakkında bilgi
 */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import VideoBackground from '@/components/VideoBackground'
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
    heroTitle: 'Kalite Standartlarımız',
    heroDescription: 'Dünya genelinde tanınan kalite standartlarıyla, endüstriyel kesici çözümlerimizi dünya geneline sunuyoruz.',
    exploreProducts: 'Ürünleri İncele',
    madeInSheffield: 'Made in Sheffield',
    sheffieldTitle: 'Sheffield Kalite Mirası',
    sheffieldParagraph: 'Sheffield, yüzyıllardır dünya çelik endüstrisinin kalbi olmuştur. "Made in Sheffield" markası, 1800\'lerden bu yana dünya genelinde kalite ve güvenilirliğin simgesidir. UK Patent Office tarafından tescillenmiş bu resmi işaret, orijinallik ve kalite garantisi sunar. Geleneksel ustalık ile modern üretim teknolojisinin mükemmel birleşimi sayesinde, dünyanın önde gelen markaları tarafından tercih edilen uluslararası alanda kabul görmüş bir kalite güvencesi sağlar.',
    valueTitle: 'Kaliteli Hammadde, Uzun Vadede Tasarruf',
    valueDescription: 'Hammadde ve proses kalitesinde en yüksek seviyedeki çeliklerden üretilen endüstriyel kesiciler, makine duruşlarını azaltır ve üretim verimliliğinizi artırır.',
    valuePoints: [
      { highlight: 'Verimlilik', title: 'Daha Az Makine Duruşu', description: 'Kaliteli çelik = uzun bıçak ömrü = daha az değişim. Üretim hattınız kesintisiz çalışır.' },
      { highlight: 'Dayanıklılık', title: 'Uzun Bıçak Ömrü', description: 'Yüksek kalite hammadde ve hassas üretim prosesi ile standart bıçaklardan çok daha uzun ömür.' },
      { highlight: 'Gıda Güvenliği', title: 'FDA & USDA Uyumlu', description: 'Gıda, ilaç ve hijyen gerektiren tüm sektörlerde güvenle kullanım. Uluslararası sertifikalar.' },
      { highlight: 'Uzman Destek', title: '30 Yıllık Sektör Deneyimi', description: 'Türkiye\'nin lider firmaları ile çalışıyoruz. Teknik danışmanlık ve satış sonrası destek.' },
    ],
  },
  en: {
    heroTitle: 'Our Quality Standards',
    heroDescription: 'We deliver industrial cutting solutions worldwide with globally recognized quality standards.',
    exploreProducts: 'Explore Products',
    madeInSheffield: 'Made in Sheffield',
    sheffieldTitle: 'Sheffield Quality Heritage',
    sheffieldParagraph: 'Sheffield has been the heart of the global steel industry for centuries. The "Made in Sheffield" brand has been a symbol of quality and reliability worldwide since the 1800s. This official mark, registered with the UK Patent Office, offers authenticity and quality guarantee. Through the perfect combination of traditional craftsmanship and modern manufacturing technology, it provides internationally recognized quality assurance preferred by world-leading brands.',
    valueTitle: 'Quality Raw Materials, Long-Term Savings',
    valueDescription: 'Industrial cutters manufactured from the highest quality steels reduce machine downtime and increase your production efficiency.',
    valuePoints: [
      { highlight: 'Efficiency', title: 'Less Machine Downtime', description: 'Quality steel = longer blade life = fewer changes. Your production line runs without interruption.' },
      { highlight: 'Durability', title: 'Extended Blade Life', description: 'Much longer life than standard blades with high quality raw materials and precision manufacturing processes.' },
      { highlight: 'Food Safety', title: 'FDA & USDA Compliant', description: 'Safe use in all sectors requiring food, pharmaceutical and hygiene standards. International certifications.' },
      { highlight: 'Expert Support', title: '30 Years of Industry Experience', description: 'We work with Turkey\'s leading companies. Technical consulting and after-sales support.' },
    ],
  },
  ar: {
    heroTitle: 'معايير الجودة لدينا',
    heroDescription: 'نقدم حلول القطع الصناعية في جميع أنحاء العالم بمعايير جودة معترف بها عالميًا.',
    exploreProducts: 'استكشف المنتجات',
    madeInSheffield: 'صنع في شيفيلد',
    sheffieldTitle: 'تراث جودة شيفيلد',
    sheffieldParagraph: 'كانت شيفيلد قلب صناعة الصلب العالمية لعدة قرون. علامة "صنع في شيفيلد" كانت رمزًا للجودة والموثوقية في جميع أنحاء العالم منذ القرن التاسع عشر. هذه العلامة الرسمية المسجلة لدى مكتب براءات الاختراع البريطاني تقدم ضمان الأصالة والجودة. من خلال المزيج المثالي من الحرفية التقليدية وتكنولوجيا التصنيع الحديثة، توفر ضمان جودة معترف به دوليًا ومفضل من قبل العلامات التجارية الرائدة عالميًا.',
    valueTitle: 'مواد خام عالية الجودة، توفير طويل الأمد',
    valueDescription: 'أدوات القطع الصناعية المصنوعة من أعلى أنواع الفولاذ جودة تقلل من توقف الآلات وتزيد من كفاءة إنتاجك.',
    valuePoints: [
      { highlight: 'الكفاءة', title: 'توقف أقل للآلات', description: 'فولاذ عالي الجودة = عمر أطول للشفرة = تغييرات أقل. خط إنتاجك يعمل بدون انقطاع.' },
      { highlight: 'المتانة', title: 'عمر شفرة أطول', description: 'عمر أطول بكثير من الشفرات القياسية بفضل المواد الخام عالية الجودة وعمليات التصنيع الدقيقة.' },
      { highlight: 'سلامة الغذاء', title: 'متوافق مع FDA و USDA', description: 'استخدام آمن في جميع القطاعات التي تتطلب معايير الغذاء والأدوية والنظافة. شهادات دولية.' },
      { highlight: 'دعم الخبراء', title: '30 عامًا من الخبرة', description: 'نعمل مع الشركات الرائدة في تركيا. استشارات فنية ودعم ما بعد البيع.' },
    ],
  },
  ru: {
    heroTitle: 'Наши стандарты качества',
    heroDescription: 'Мы поставляем промышленные режущие решения по всему миру с глобально признанными стандартами качества.',
    exploreProducts: 'Посмотреть продукцию',
    madeInSheffield: 'Сделано в Шеффилде',
    sheffieldTitle: 'Наследие качества Шеффилда',
    sheffieldParagraph: 'Шеффилд был сердцем мировой сталелитейной промышленности на протяжении веков. Бренд "Сделано в Шеффилде" является символом качества и надёжности во всём мире с 1800-х годов. Этот официальный знак, зарегистрированный в Патентном ведомстве Великобритании, гарантирует подлинность и качество. Благодаря идеальному сочетанию традиционного мастерства и современных производственных технологий обеспечивается международно признанная гарантия качества.',
    valueTitle: 'Качественное сырьё, долгосрочная экономия',
    valueDescription: 'Промышленные резаки из стали высочайшего качества сокращают простои оборудования и повышают эффективность производства.',
    valuePoints: [
      { highlight: 'Эффективность', title: 'Меньше простоев', description: 'Качественная сталь = долгий срок службы = меньше замен. Ваша линия работает без перебоев.' },
      { highlight: 'Долговечность', title: 'Длительный срок службы', description: 'Гораздо более длительный срок службы благодаря качественному сырью и точным процессам.' },
      { highlight: 'Пищевая безопасность', title: 'Соответствие FDA и USDA', description: 'Безопасное использование в пищевой, фармацевтической промышленности. Международные сертификаты.' },
      { highlight: 'Экспертная поддержка', title: '30 лет опыта', description: 'Работаем с ведущими компаниями Турции. Техническая консультация и послепродажная поддержка.' },
    ],
  },
  fr: {
    heroTitle: 'Nos normes de qualité',
    heroDescription: 'Nous fournissons des solutions de coupe industrielle dans le monde entier avec des normes de qualité mondialement reconnues.',
    exploreProducts: 'Explorer les produits',
    madeInSheffield: 'Fabriqué à Sheffield',
    sheffieldTitle: 'L\'héritage de qualité Sheffield',
    sheffieldParagraph: 'Sheffield est le cœur de l\'industrie sidérurgique mondiale depuis des siècles. La marque "Fabriqué à Sheffield" est un symbole de qualité et de fiabilité dans le monde entier depuis les années 1800. Cette marque officielle, enregistrée auprès de l\'Office britannique des brevets, offre une garantie d\'authenticité et de qualité. Grâce à la combinaison parfaite du savoir-faire traditionnel et de la technologie de fabrication moderne, elle fournit une assurance qualité internationalement reconnue.',
    valueTitle: 'Matières premières de qualité, économies à long terme',
    valueDescription: 'Les outils de coupe industriels fabriqués à partir des aciers de la plus haute qualité réduisent les temps d\'arrêt des machines et augmentent l\'efficacité de votre production.',
    valuePoints: [
      { highlight: 'Efficacité', title: 'Moins d\'arrêts machine', description: 'Acier de qualité = durée de vie plus longue = moins de changements. Votre ligne de production fonctionne sans interruption.' },
      { highlight: 'Durabilité', title: 'Durée de vie prolongée', description: 'Durée de vie beaucoup plus longue grâce aux matières premières de qualité et aux processus de fabrication précis.' },
      { highlight: 'Sécurité alimentaire', title: 'Conforme FDA & USDA', description: 'Utilisation sûre dans tous les secteurs nécessitant des normes alimentaires et d\'hygiène. Certifications internationales.' },
      { highlight: 'Support expert', title: '30 ans d\'expérience', description: 'Nous travaillons avec les entreprises leaders de Turquie. Conseil technique et support après-vente.' },
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
        <VideoBackground
          videoSrc="/videos/hero-bg.mp4"
          posterSrc="/images/hero-bg-poster.jpg"
          overlay={true}
          overlayOpacity={70}
        />

        <div className="container mx-auto px-4 relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg tracking-wide transition-all"
              >
                {t.exploreProducts}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.madeinsheffield.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg tracking-wide transition-all border border-white/20"
              >
                {t.madeInSheffield}
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield Heritage - Paragraph */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-6">
              {t.sheffieldTitle}
            </h2>
            <p className="text-base text-steel-600 leading-relaxed">
              {t.sheffieldParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-steel-900 mb-2">
              {t.valueTitle}
            </h2>
            <p className="text-base text-steel-600 leading-relaxed max-w-2xl mx-auto">
              {t.valueDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.valuePoints.map((point, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl hover:shadow-card transition-all duration-300 border border-steel-100"
              >
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {point.highlight}
                </span>
                <h3 className="text-lg font-bold text-steel-900 mt-2 mb-2">
                  {point.title}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
