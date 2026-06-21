/**
 * Danışmanlık Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { MessageCircle, CheckCircle, ArrowRight, Phone, FileText, Settings, Wrench, Zap, Package, HeadphonesIcon } from 'lucide-react'
import { Button, PageHeader } from '@/components/ui'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getWhatsAppUrl, siteConfig } from '@/lib/config'
import { getDomainUrl } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return genMeta({
    title: dict.consulting.title,
    description: dict.consulting.subtitle,
    locale,
    path: '/consulting',
    url: `${getDomainUrl(locale)}/${locale}/consulting`,
  })
}

export default async function ConsultingPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const content = {
    tr: {
      heroTitle: 'Profesyonel Danışmanlık',
      heroDesc: 'Doğru bıçak seçimi için uzman desteği. Her malzeme için en uygun kesim çözümü.',
      processTitle: 'Danışmanlık Sürecimiz',
      processDesc: 'Size en uygun bıçak çözümünü bulmak için izlediğimiz adımlar',
      steps: [
        {
          title: 'Malzeme Analizi',
          desc: 'Kesim yapacağınız malzemenin özelliklerini analiz ediyoruz. Plastik, metal, kağıt, gıda, tekstil... Her malzeme farklı kesim teknikleri gerektirir.',
          items: ['Malzeme tipi ve kalınlığı', 'Kesim hızı ve hassasiyet gereksinimleri', 'Üretim hacmi ve süreklilik'],
        },
        {
          title: 'Bıçak Önerisi',
          desc: 'Analiz sonuçlarına göre size en uygun bıçak modelini öneriyoruz. Yüksek kalite standartlarında, performans ve dayanıklılık açısından optimize edilmiş çözümler.',
          items: ['Bıçak tipi ve boyut önerisi', 'Çelik kalitesi ve sertlik değeri', 'Özel tasarım gereksinimleri'],
        },
        {
          title: 'Test & Optimizasyon',
          desc: 'İsterseniz ürünleri test etmeniz için numune gönderiyoruz. Geri bildirimlerinize göre optimizasyon yapıyoruz.',
          items: ['Numune ürün gönderimi', 'Performans değerlendirmesi', 'İyileştirme önerileri'],
        },
      ],
      ctaTitle: 'Hemen Danışmanlık Alın',
      ctaDesc: 'Ücretsiz danışmanlık hizmetimizden yararlanın. Uzman ekibimiz size en uygun çözümü sunmak için hazır.',
      ctaWhatsApp: 'WhatsApp ile Yazın',
      ctaPhone: 'Hemen Arayın',
      // Hizmetler Grid
      servicesTitle: 'Danışmanlık Hizmetlerimiz',
      services: [
        { icon: 'FileText', title: 'Malzeme Analizi', desc: 'Kesim yapacağınız malzemenin detaylı analizi' },
        { icon: 'Settings', title: 'Bıçak Seçimi', desc: 'Size en uygun bıçak modelinin belirlenmesi' },
        { icon: 'Wrench', title: 'Teknik Destek', desc: 'Çelik kalitesi, sertlik ve malzeme konusunda rehberlik' },
        { icon: 'Zap', title: 'Performans Optimizasyonu', desc: 'Kesim kalitesi ve verimliliğin artırılması' },
        { icon: 'Package', title: 'Özel Üretim', desc: 'Standart ürünler dışında özel tasarım' },
        { icon: 'HeadphonesIcon', title: 'Satış Sonrası Destek', desc: 'Ürün kullanımı ve teknik sorular için destek' },
      ],
      // Bottom CTA
      bottomCtaTitle: 'Ücretsiz Danışmanlık Alın',
      bottomCtaDesc: 'Hangi malzeme için hangi bıçak? Uzmanlarımız size yol gösteriyor.',
      bottomCtaForm: 'İletişim Formu',
      bottomCtaWhatsApp: 'WhatsApp ile İletişim',
    },
    en: {
      heroTitle: 'Professional Consulting',
      heroDesc: 'Expert support for the right blade selection. The optimal cutting solution for every material.',
      processTitle: 'Our Consulting Process',
      processDesc: 'Steps we follow to find the most suitable blade solution for you',
      steps: [
        {
          title: 'Material Analysis',
          desc: 'We analyze the properties of the material you will cut. Plastic, metal, paper, food, textile... Each material requires different cutting techniques.',
          items: ['Material type and thickness', 'Cutting speed and precision requirements', 'Production volume and continuity'],
        },
        {
          title: 'Blade Recommendation',
          desc: 'Based on the analysis results, we recommend the most suitable blade model for you. Sheffield quality, optimized solutions in terms of performance and durability.',
          items: ['Blade type and size recommendation', 'Steel quality and hardness value', 'Custom design requirements'],
        },
        {
          title: 'Test & Optimization',
          desc: 'If you wish, we send sample products for you to test. We optimize based on your feedback.',
          items: ['Sample product delivery', 'Performance evaluation', 'Improvement suggestions'],
        },
      ],
      ctaTitle: 'Get Consulting Now',
      ctaDesc: 'Take advantage of our free consulting service. Our expert team is ready to offer you the most suitable solution.',
      ctaWhatsApp: 'Write via WhatsApp',
      ctaPhone: 'Call Now',
      // Services Grid
      servicesTitle: 'Our Consulting Services',
      services: [
        { icon: 'FileText', title: 'Material Analysis', desc: 'Detailed analysis of the material you will cut' },
        { icon: 'Settings', title: 'Blade Selection', desc: 'Determining the most suitable blade model for you' },
        { icon: 'Wrench', title: 'Technical Support', desc: 'Guidance on steel quality, hardness and material' },
        { icon: 'Zap', title: 'Performance Optimization', desc: 'Improving cutting quality and efficiency' },
        { icon: 'Package', title: 'Custom Production', desc: 'Custom design beyond standard products' },
        { icon: 'HeadphonesIcon', title: 'After-Sales Support', desc: 'Support for product usage and technical questions' },
      ],
      // Bottom CTA
      bottomCtaTitle: 'Get Free Consulting',
      bottomCtaDesc: 'Which blade for which material? Our experts guide you.',
      bottomCtaForm: 'Contact Form',
      bottomCtaWhatsApp: 'Contact via WhatsApp',
    },
    ar: {
      heroTitle: 'الاستشارات المهنية',
      heroDesc: 'دعم متخصص لاختيار الشفرة المناسبة. الحل الأمثل للقطع لكل مادة.',
      processTitle: 'عملية الاستشارة لدينا',
      processDesc: 'الخطوات التي نتبعها لإيجاد حل الشفرة الأنسب لكم',
      steps: [
        {
          title: 'تحليل المواد',
          desc: 'نقوم بتحليل خصائص المادة التي ستقومون بقطعها. البلاستيك، المعدن، الورق، الغذاء، النسيج... كل مادة تتطلب تقنيات قطع مختلفة.',
          items: ['نوع المادة وسمكها', 'متطلبات سرعة القطع والدقة', 'حجم الإنتاج والاستمرارية'],
        },
        {
          title: 'توصية الشفرة',
          desc: 'بناءً على نتائج التحليل، نوصي بنموذج الشفرة الأنسب لكم. جودة شيفيلد، حلول محسنة من حيث الأداء والمتانة.',
          items: ['توصية نوع وحجم الشفرة', 'جودة الفولاذ وقيمة الصلابة', 'متطلبات التصميم المخصص'],
        },
        {
          title: 'الاختبار والتحسين',
          desc: 'إذا رغبتم، نرسل عينات من المنتجات لاختبارها. نقوم بالتحسين بناءً على ملاحظاتكم.',
          items: ['إرسال عينة المنتج', 'تقييم الأداء', 'اقتراحات التحسين'],
        },
      ],
      ctaTitle: 'احصل على استشارة الآن',
      ctaDesc: 'استفد من خدمة الاستشارة المجانية. فريقنا المتخصص جاهز لتقديم الحل الأنسب لكم.',
      ctaWhatsApp: 'راسلنا عبر واتساب',
      ctaPhone: 'اتصل الآن',
      // شبكة الخدمات
      servicesTitle: 'خدماتنا الاستشارية',
      services: [
        { icon: 'FileText', title: 'تحليل المواد', desc: 'تحليل مفصل للمادة التي ستقطعونها' },
        { icon: 'Settings', title: 'اختيار الشفرة', desc: 'تحديد نموذج الشفرة الأنسب لكم' },
        { icon: 'Wrench', title: 'الدعم الفني', desc: 'إرشادات حول جودة الفولاذ والصلابة والمواد' },
        { icon: 'Zap', title: 'تحسين الأداء', desc: 'تحسين جودة القطع والكفاءة' },
        { icon: 'Package', title: 'الإنتاج المخصص', desc: 'تصميم مخصص يتجاوز المنتجات القياسية' },
        { icon: 'HeadphonesIcon', title: 'دعم ما بعد البيع', desc: 'دعم لاستخدام المنتج والأسئلة الفنية' },
      ],
      // Bottom CTA
      bottomCtaTitle: 'احصل على استشارة مجانية',
      bottomCtaDesc: 'أي شفرة لأي مادة؟ خبراؤنا يرشدونكم.',
      bottomCtaForm: 'نموذج الاتصال',
      bottomCtaWhatsApp: 'تواصل عبر واتساب',
    },
    ru: {
      heroTitle: 'Профессиональный консалтинг',
      heroDesc: 'Экспертная поддержка для правильного выбора лезвия. Оптимальное решение для резки любого материала.',
      processTitle: 'Наш процесс консультирования',
      processDesc: 'Шаги, которые мы выполняем, чтобы найти наиболее подходящее решение для вас',
      steps: [
        {
          title: 'Анализ материала',
          desc: 'Мы анализируем свойства материала, который вы будете резать. Пластик, металл, бумага, продукты питания, текстиль... Каждый материал требует разных техник резки.',
          items: ['Тип и толщина материала', 'Требования к скорости и точности резки', 'Объём производства и непрерывность'],
        },
        {
          title: 'Рекомендация по лезвиям',
          desc: 'На основе результатов анализа мы рекомендуем наиболее подходящую модель лезвия. Качество Шеффилда, оптимизированные решения по производительности и долговечности.',
          items: ['Рекомендация по типу и размеру лезвия', 'Качество стали и значение твёрдости', 'Требования к индивидуальному дизайну'],
        },
        {
          title: 'Тестирование и оптимизация',
          desc: 'По вашему желанию мы отправляем образцы продукции для тестирования. Оптимизируем на основе ваших отзывов.',
          items: ['Отправка образца продукции', 'Оценка производительности', 'Предложения по улучшению'],
        },
      ],
      ctaTitle: 'Получите консультацию сейчас',
      ctaDesc: 'Воспользуйтесь нашей бесплатной консультационной услугой. Наша команда экспертов готова предложить вам наиболее подходящее решение.',
      ctaWhatsApp: 'Написать в WhatsApp',
      ctaPhone: 'Позвонить сейчас',
      // Services Grid
      servicesTitle: 'Наши консультационные услуги',
      services: [
        { icon: 'FileText', title: 'Анализ материала', desc: 'Детальный анализ материала, который вы будете резать' },
        { icon: 'Settings', title: 'Выбор лезвия', desc: 'Определение наиболее подходящей модели лезвия для вас' },
        { icon: 'Wrench', title: 'Техническая поддержка', desc: 'Консультации по качеству стали, твёрдости и материалам' },
        { icon: 'Zap', title: 'Оптимизация производительности', desc: 'Улучшение качества резки и эффективности' },
        { icon: 'Package', title: 'Индивидуальное производство', desc: 'Индивидуальный дизайн помимо стандартных продуктов' },
        { icon: 'HeadphonesIcon', title: 'Послепродажная поддержка', desc: 'Поддержка по использованию продукции и техническим вопросам' },
      ],
      // Bottom CTA
      bottomCtaTitle: 'Получите бесплатную консультацию',
      bottomCtaDesc: 'Какое лезвие для какого материала? Наши эксперты вам помогут.',
      bottomCtaForm: 'Форма связи',
      bottomCtaWhatsApp: 'Связаться через WhatsApp',
    },
    fr: {
      heroTitle: 'Conseil professionnel',
      heroDesc: 'Support expert pour le bon choix de lame. La solution de coupe optimale pour chaque matériau.',
      processTitle: 'Notre processus de conseil',
      processDesc: 'Les étapes que nous suivons pour trouver la solution de lame la plus adaptée pour vous',
      steps: [
        {
          title: 'Analyse du matériau',
          desc: 'Nous analysons les propriétés du matériau que vous allez couper. Plastique, métal, papier, alimentaire, textile... Chaque matériau nécessite des techniques de coupe différentes.',
          items: ['Type et épaisseur du matériau', 'Exigences de vitesse et de précision de coupe', 'Volume de production et continuité'],
        },
        {
          title: 'Recommandation de lame',
          desc: 'Sur la base des résultats d\'analyse, nous recommandons le modèle de lame le plus adapté pour vous. Qualité Sheffield, solutions optimisées en termes de performance et de durabilité.',
          items: ['Recommandation de type et taille de lame', 'Qualité d\'acier et valeur de dureté', 'Exigences de conception personnalisée'],
        },
        {
          title: 'Test et optimisation',
          desc: 'Si vous le souhaitez, nous envoyons des échantillons de produits à tester. Nous optimisons en fonction de vos retours.',
          items: ['Envoi d\'échantillon de produit', 'Évaluation des performances', 'Suggestions d\'amélioration'],
        },
      ],
      ctaTitle: 'Obtenez un conseil maintenant',
      ctaDesc: 'Profitez de notre service de conseil gratuit. Notre équipe d\'experts est prête à vous offrir la solution la plus adaptée.',
      ctaWhatsApp: 'Écrire via WhatsApp',
      ctaPhone: 'Appeler maintenant',
      // Services Grid
      servicesTitle: 'Nos services de conseil',
      services: [
        { icon: 'FileText', title: 'Analyse du matériau', desc: 'Analyse détaillée du matériau que vous allez couper' },
        { icon: 'Settings', title: 'Sélection de lame', desc: 'Détermination du modèle de lame le plus adapté pour vous' },
        { icon: 'Wrench', title: 'Support technique', desc: 'Conseils sur la qualité d\'acier, la dureté et les matériaux' },
        { icon: 'Zap', title: 'Optimisation des performances', desc: 'Amélioration de la qualité de coupe et de l\'efficacité' },
        { icon: 'Package', title: 'Production sur mesure', desc: 'Conception personnalisée au-delà des produits standards' },
        { icon: 'HeadphonesIcon', title: 'Support après-vente', desc: 'Support pour l\'utilisation du produit et questions techniques' },
      ],
      // Bottom CTA
      bottomCtaTitle: 'Obtenez un conseil gratuit',
      bottomCtaDesc: 'Quelle lame pour quel matériau ? Nos experts vous guident.',
      bottomCtaForm: 'Formulaire de contact',
      bottomCtaWhatsApp: 'Contacter via WhatsApp',
    },
  }

  // Defensive fallback: desteklenmeyen locale gelirse en → tr zinciri
  const c = content[locale] || content['en'] || content['tr']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={c.heroTitle}
        description={c.heroDesc}
        backgroundImage="/images/pages/danismanlik-header.jpg"
      />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-3">
                {c.processTitle}
              </h2>
              <p className="text-lg text-steel-600">
                {c.processDesc}
              </p>
            </div>

            <div className="space-y-8">
              {c.steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-steel-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-steel-600 mb-4">
                      {step.desc}
                    </p>
                    <ul className="space-y-2 text-steel-600">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-steel-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-10 text-center">
            {c.servicesTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.services.map((service, index) => {
              const IconComponent = {
                FileText,
                Settings,
                Wrench,
                Zap,
                Package,
                HeadphonesIcon,
              }[service.icon] || MessageCircle;

              return (
                <div key={index} className="p-6 bg-white rounded-xl border border-steel-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-steel-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-steel-600 text-sm">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - Dark */}
      <section className="py-10 bg-steel-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {c.bottomCtaTitle}
              </h2>
              <p className="text-steel-400 text-sm">
                {c.bottomCtaDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-600 text-white text-sm font-medium rounded-lg hover:bg-steel-800 transition-all"
              >
                {c.bottomCtaForm}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl(dict.whatsapp?.consultingMessage || 'Hello, I would like to get consulting.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {c.bottomCtaWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
