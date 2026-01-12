/**
 * Hakkımızda Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta } from '@/lib/seo'
import Image from 'next/image'
import { Award, Users, CheckCircle, Globe, Factory, Truck, MessageCircle, Shield, Package, Wrench, Zap, HeadphonesIcon, Star } from 'lucide-react'
import { Button, Badge, PageHeader } from '@/components/ui'
import { getWhatsAppUrl } from '@/lib/config'
import { getDictionary, type Locale } from '@/lib/i18n'
import Link from 'next/link'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return genMeta({
    title: dict.about.title,
    description: dict.about.subtitle,
    keywords: ['hakkımızda', 'alya tekstil', 'endüstriyel kesici', 'sheffield', 'ihracat'],
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/about`,
  })
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  // Content data (could be moved to a CMS or separate file)
  const content = {
    tr: {
      badge: '30 Yıllık Deneyim',
      storyTitle: 'Endüstrinin Güvenilir Tedarikçisi',
      storyParagraphs: [
        '<strong class="text-steel-900">Alya</strong> olarak 30 yıldır endüstriyel kesiciler tedarik ediyoruz. Endüstrinin hemen hemen her sektörüne lider firmalarla işbirliğimizi sürdürüyoruz.',
        'Sadece bıçak değil, İstanbul\'daki fabrikamızda <strong class="text-steel-900">tekstil sektörüne yönelik makine yedek parçası üretimi</strong> gerçekleştiriyor ve <strong class="text-steel-900"> 35 farklı ülkeye ihracatını</strong> yapıyoruz.',
        'Sheffield, İngiltere\'nin kalp merkezinde 1910\'dan bu yana dünya standartlarında endüstriyel bıçak üretimi yapan Durham Duplex\'in yetkili distribütörüyüz.',
      ],
      textileLinkLabel: 'Tekstil makineleri ve yedek parçalar:',
      values: [
        { title: 'Kalite', desc: 'En yüksek standartlarda üretim ve tedarik' },
        { title: 'Güvenilirlik', desc: '30 yıllık deneyim ve 5000+ mutlu müşteri' },
        { title: 'Hız', desc: 'Aynı gün kargo ve hızlı teslimat' },
        { title: 'Destek', desc: 'Uzman ekibimizle her zaman yanınızdayız' },
      ],
      // Neden Alya
      whyAlyaTitle: 'Neden Alya?',
      whyAlyaDesc: 'Sektörde fark yaratan değerlerimiz',
      whyAlyaItems: [
        { title: 'Sheffield Kalitesi', desc: 'Durham Duplex yetkili distribütörü olarak dünya standartlarında ürünler' },
        { title: 'Yerli Üretim', desc: 'İstanbul fabrikamızda tekstil makinesi yedek parçası üretimi' },
        { title: 'Global Erişim', desc: '35 farklı ülkeye ihracat ve dünya çapında müşteri ağı' },
        { title: 'Uzman Ekip', desc: '30 yıllık tecrübeyle profesyonel danışmanlık ve destek' },
      ],
      // Hizmetlerimiz
      servicesTitle: 'Hizmetlerimiz',
      services: [
        { title: 'Endüstriyel Kesiciler', desc: 'Sanayi jiletleri, makina bıçakları ve iş güvenliği bıçakları' },
        { title: 'Tekstil Makinesi Yedek Parçaları', desc: 'İstanbul fabrikamızda üretim, dünya çapında teslimat' },
        { title: 'Özel Üretim', desc: 'İhtiyacınıza özel tasarım ve üretim çözümleri' },
        { title: 'Profesyonel Danışmanlık', desc: 'Doğru ürün seçimi için uzman teknik destek' },
        { title: 'Hızlı Teslimat', desc: 'Stoktan anında gönderim, global lojistik ağı' },
        { title: 'Satış Sonrası Destek', desc: 'Teknik destek ve müşteri hizmetleri' },
      ],
      // CTA
      ctaTitle: 'Bizimle Çalışmak İster misiniz?',
      ctaDesc: '30 yıllık deneyimimizle size en uygun çözümü sunmaya hazırız.',
      ctaButton: 'WhatsApp ile Ulaşın',
      ctaContact: 'İletişime Geçin',
    },
    en: {
      badge: '30 Years of Experience',
      storyTitle: 'Trusted Supplier of the Industry',
      storyParagraphs: [
        '<strong class="text-steel-900">Alya</strong> has been supplying industrial cutters for 30 years. We continue our partnership with leading companies in almost every sector of the industry.',
        'Not only blades, but at our factory in Istanbul, we <strong class="text-steel-900">manufacture machine spare parts for the textile sector</strong> and <strong class="text-steel-900">export to 35 different countries</strong>.',
        'We are the authorized distributor of Durham Duplex, which has been manufacturing world-class industrial blades in Sheffield, the heart of England, since 1910.',
      ],
      textileLinkLabel: 'Textile machinery and spare parts:',
      values: [
        { title: 'Quality', desc: 'Manufacturing and supply at the highest standards' },
        { title: 'Reliability', desc: '30 years of experience and 5000+ happy customers' },
        { title: 'Speed', desc: 'Same day shipping and fast delivery' },
        { title: 'Support', desc: 'We are always with you with our expert team' },
      ],
      // Why Alya
      whyAlyaTitle: 'Why Alya?',
      whyAlyaDesc: 'Our values that make a difference in the industry',
      whyAlyaItems: [
        { title: 'Sheffield Quality', desc: 'World-class products as authorized distributor of Durham Duplex' },
        { title: 'Local Production', desc: 'Textile machine spare parts manufacturing at our Istanbul factory' },
        { title: 'Global Reach', desc: 'Export to 35 countries and worldwide customer network' },
        { title: 'Expert Team', desc: 'Professional consulting and support with 30 years of experience' },
      ],
      // Services
      servicesTitle: 'Our Services',
      services: [
        { title: 'Industrial Cutters', desc: 'Industrial blades, machine blades and safety knives' },
        { title: 'Textile Machine Spare Parts', desc: 'Production at our Istanbul factory, worldwide delivery' },
        { title: 'Custom Production', desc: 'Custom design and production solutions for your needs' },
        { title: 'Professional Consulting', desc: 'Expert technical support for the right product selection' },
        { title: 'Fast Delivery', desc: 'Immediate shipment from stock, global logistics network' },
        { title: 'After-Sales Support', desc: 'Technical support and customer service' },
      ],
      // CTA
      ctaTitle: 'Want to Work With Us?',
      ctaDesc: 'We are ready to offer you the most suitable solution with 30 years of experience.',
      ctaButton: 'Contact via WhatsApp',
      ctaContact: 'Contact Us',
    },
    ar: {
      badge: '30 عامًا من الخبرة',
      storyTitle: 'المورد الموثوق للصناعة',
      storyParagraphs: [
        '<strong class="text-steel-900">أليا</strong> تورد أدوات القطع الصناعية منذ 30 عامًا. نواصل شراكتنا مع الشركات الرائدة في جميع قطاعات الصناعة تقريبًا.',
        'ليس فقط الشفرات، ولكن في مصنعنا في إسطنبول، <strong class="text-steel-900">نصنع قطع غيار الآلات لقطاع النسيج</strong> و<strong class="text-steel-900">نصدر إلى 35 دولة مختلفة</strong>.',
        'نحن الموزع المعتمد لشركة Durham Duplex، التي تصنع شفرات صناعية عالمية المستوى في شيفيلد، قلب إنجلترا، منذ عام 1910.',
      ],
      textileLinkLabel: 'آلات النسيج وقطع الغيار:',
      values: [
        { title: 'الجودة', desc: 'التصنيع والتوريد بأعلى المعايير' },
        { title: 'الموثوقية', desc: '30 عامًا من الخبرة وأكثر من 5000 عميل سعيد' },
        { title: 'السرعة', desc: 'شحن في نفس اليوم وتوصيل سريع' },
        { title: 'الدعم', desc: 'نحن دائمًا معكم بفريقنا المتخصص' },
      ],
      // لماذا أليا
      whyAlyaTitle: 'لماذا أليا؟',
      whyAlyaDesc: 'قيمنا التي تحدث فرقًا في الصناعة',
      whyAlyaItems: [
        { title: 'جودة شيفيلد', desc: 'منتجات عالمية المستوى كموزع معتمد لـ Durham Duplex' },
        { title: 'الإنتاج المحلي', desc: 'تصنيع قطع غيار آلات النسيج في مصنعنا بإسطنبول' },
        { title: 'الانتشار العالمي', desc: 'التصدير إلى 35 دولة وشبكة عملاء عالمية' },
        { title: 'فريق متخصص', desc: 'استشارات ودعم احترافي بخبرة 30 عامًا' },
      ],
      // خدماتنا
      servicesTitle: 'خدماتنا',
      services: [
        { title: 'أدوات القطع الصناعية', desc: 'شفرات صناعية وشفرات آلات وسكاكين السلامة' },
        { title: 'قطع غيار آلات النسيج', desc: 'الإنتاج في مصنعنا بإسطنبول، التوصيل عالميًا' },
        { title: 'الإنتاج المخصص', desc: 'حلول التصميم والإنتاج المخصصة لاحتياجاتكم' },
        { title: 'الاستشارات المهنية', desc: 'دعم فني متخصص لاختيار المنتج المناسب' },
        { title: 'التوصيل السريع', desc: 'شحن فوري من المخزون، شبكة لوجستية عالمية' },
        { title: 'دعم ما بعد البيع', desc: 'الدعم الفني وخدمة العملاء' },
      ],
      // CTA
      ctaTitle: 'هل تريد العمل معنا؟',
      ctaDesc: 'نحن مستعدون لتقديم الحل الأنسب لكم بخبرة 30 عامًا.',
      ctaButton: 'تواصل عبر واتساب',
      ctaContact: 'اتصل بنا',
    },
    ru: {
      badge: '30 лет опыта',
      storyTitle: 'Надёжный поставщик для промышленности',
      storyParagraphs: [
        '<strong class="text-steel-900">Alya</strong> поставляет промышленные резаки уже 30 лет. Мы продолжаем сотрудничество с ведущими компаниями практически во всех секторах промышленности.',
        'Не только лезвия, но и на нашем заводе в Стамбуле мы <strong class="text-steel-900">производим запасные части для текстильной отрасли</strong> и <strong class="text-steel-900">экспортируем в 35 стран</strong>.',
        'Мы являемся авторизованным дистрибьютором Durham Duplex, которая производит промышленные лезвия мирового класса в Шеффилде, сердце Англии, с 1910 года.',
      ],
      textileLinkLabel: 'Текстильные машины и запчасти:',
      values: [
        { title: 'Качество', desc: 'Производство и поставка по высочайшим стандартам' },
        { title: 'Надёжность', desc: '30 лет опыта и более 5000 довольных клиентов' },
        { title: 'Скорость', desc: 'Доставка в тот же день и быстрая отправка' },
        { title: 'Поддержка', desc: 'Наша команда экспертов всегда с вами' },
      ],
      // Почему Alya
      whyAlyaTitle: 'Почему Alya?',
      whyAlyaDesc: 'Наши ценности, которые делают разницу в отрасли',
      whyAlyaItems: [
        { title: 'Качество Шеффилда', desc: 'Продукция мирового класса как авторизованный дистрибьютор Durham Duplex' },
        { title: 'Местное производство', desc: 'Производство запчастей для текстильных машин на нашем заводе в Стамбуле' },
        { title: 'Глобальный охват', desc: 'Экспорт в 35 стран и всемирная сеть клиентов' },
        { title: 'Команда экспертов', desc: 'Профессиональное консультирование и поддержка с 30-летним опытом' },
      ],
      // Услуги
      servicesTitle: 'Наши услуги',
      services: [
        { title: 'Промышленные резаки', desc: 'Промышленные лезвия, машинные ножи и ножи безопасности' },
        { title: 'Запчасти для текстильных машин', desc: 'Производство на нашем заводе в Стамбуле, доставка по всему миру' },
        { title: 'Индивидуальное производство', desc: 'Решения по проектированию и производству под ваши нужды' },
        { title: 'Профессиональный консалтинг', desc: 'Экспертная техническая поддержка для правильного выбора продукции' },
        { title: 'Быстрая доставка', desc: 'Немедленная отправка со склада, глобальная логистическая сеть' },
        { title: 'Послепродажная поддержка', desc: 'Техническая поддержка и обслуживание клиентов' },
      ],
      // CTA
      ctaTitle: 'Хотите работать с нами?',
      ctaDesc: 'Мы готовы предложить вам наиболее подходящее решение с 30-летним опытом.',
      ctaButton: 'Связаться через WhatsApp',
      ctaContact: 'Свяжитесь с нами',
    },
  }

  const c = content[locale]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={dict.about.title}
        description={dict.about.subtitle}
        backgroundImage="/images/pages/hakkimizda-header.jpg"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" size="md" rounded="full" className="mb-6">
                {c.badge}
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-5">
                {c.storyTitle}
              </h2>
              
              <div className="space-y-4 text-steel-600 leading-relaxed">
                {c.storyParagraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              {/* Ana Site Linki */}
              <div className="mt-6 pt-6 border-t border-steel-200">
                <p className="text-sm text-steel-500 mb-2">
                  {c.textileLinkLabel}
                </p>
                <a
                  href="https://www.alyatekstil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  www.alyatekstil.com
                </a>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pages/hakkimizda-bg.jpg"
                alt={locale === 'tr' ? 'Alya Bıçak - Hakkımızda' : 'Alya Blade - About Us'}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-10 bg-steel-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">96</span>
              </div>
              <div>
                <div className="font-medium">{dict.about.credentialsBar.founded}</div>
                <div className="text-steel-400 text-xs">1996, İstanbul</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">{dict.about.credentialsBar.countries}</div>
                <div className="text-steel-400 text-xs">{dict.about.credentialsBar.export}</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">{dict.about.credentialsBar.sameDay}</div>
                <div className="text-steel-400 text-xs">{dict.about.credentialsBar.shipping}</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">5000+</div>
                <div className="text-steel-400 text-xs">{dict.about.credentialsBar.customers}</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">500+</div>
                <div className="text-steel-400 text-xs">{dict.about.credentialsBar.products}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-10 text-center">
            {dict.about.ourValues}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.values.map((value, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-steel-900 mb-2">{value.title}</h3>
                <p className="text-steel-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Alya Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-4">
              {c.whyAlyaTitle}
            </h2>
            <p className="text-steel-600 max-w-2xl mx-auto">
              {c.whyAlyaDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.whyAlyaItems.map((item, i) => {
              const icons = [Shield, Factory, Globe, Users]
              const Icon = icons[i]
              return (
                <div key={i} className="p-6 bg-steel-50 rounded-xl border border-steel-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-steel-900 mb-2">{item.title}</h3>
                  <p className="text-steel-600 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-4">
              {c.servicesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((service, i) => {
              const icons = [Wrench, Factory, Star, HeadphonesIcon, Zap, Package]
              const Icon = icons[i]
              return (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-steel-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-steel-900 mb-2">{service.title}</h3>
                  <p className="text-steel-600 text-sm">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal ve uyumlu */}
      <section className="py-10 bg-steel-50 border-t border-steel-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-steel-900 mb-1">
                {c.ctaTitle}
              </h2>
              <p className="text-steel-600 text-sm">
                {c.ctaDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(locale === 'tr' ? 'Merhaba, Alya Bıçak hakkında bilgi almak istiyorum.' : 'Hello, I would like to get information about Alya Blade.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {c.ctaButton}
              </a>
              <Link
                href={`/${locale}/categories`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-steel-700 text-sm font-medium rounded-lg hover:bg-steel-100 transition-all"
              >
                {locale === 'tr' ? 'Ürünleri İncele' : 'Browse Products'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
