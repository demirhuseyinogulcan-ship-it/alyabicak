/**
 * FAQ Sayfası - Sıkça Sorulan Sorular
 * Google Featured Snippets için optimize edilmiş
 */
import { Metadata } from 'next'
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react'
import { PageHeader, Button } from '@/components/ui'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getFAQsGroupedByCategory, getCategoryNames, CATEGORY_ORDER, type FAQCategory } from '@/lib/data/faq'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { siteConfig, getWhatsAppUrl, getCanonicalUrl, getHreflangUrls } from '@/lib/config'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

// Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles: Record<Locale, string> = {
    tr: 'Sıkça Sorulan Sorular | Endüstriyel Bıçak SSS',
    en: 'FAQ | Industrial Blades Frequently Asked Questions',
    ar: 'الأسئلة الشائعة | الشفرات الصناعية',
    ru: 'ЧаВо | Промышленные лезвия - Часто задаваемые вопросы',
    fr: 'FAQ | Lames industrielles - Questions fréquemment posées',
  }
  
  const descriptions: Record<Locale, string> = {
    tr: 'Endüstriyel bıçaklar, Sheffield çeliği, trapez jiletler hakkında sıkça sorulan sorular ve cevapları. Bıçak seçimi, bakım, sipariş ve teslimat bilgileri.',
    en: 'Frequently asked questions about industrial blades, Sheffield steel, trapezoid blades. Blade selection, maintenance, order and delivery information.',
    ar: 'الأسئلة الشائعة حول الشفرات الصناعية، فولاذ شيفيلد، الشفرات شبه المنحرفة. معلومات اختيار الشفرات والصيانة والطلب والتسليم.',
    ru: 'Часто задаваемые вопросы о промышленных лезвиях, шеффилдской стали, трапециевидных лезвиях. Информация о выборе лезвий, обслуживании, заказе и доставке.',
    fr: 'Questions fréquemment posées sur les lames industrielles, l\'acier Sheffield, les lames trapézoïdales. Informations sur la sélection des lames, l\'entretien, la commande et la livraison.',
  }
  
  const keywordsMap: Record<Locale, string[]> = {
    tr: ['endüstriyel bıçak sss', 'sheffield bıçak nedir', 'trapez jilet kullanımı', 'bıçak seçimi'],
    en: ['industrial blade faq', 'sheffield blade', 'trapezoid blade uses', 'blade selection'],
    ar: ['أسئلة شائعة عن الشفرات الصناعية', 'فولاذ شيفيلد', 'استخدامات الشفرات', 'اختيار الشفرات'],
    ru: ['часто задаваемые вопросы о лезвиях', 'шеффилдская сталь', 'выбор лезвий', 'промышленные лезвия'],
    fr: ['faq lames industrielles', 'acier sheffield', 'utilisation lames trapézoïdales', 'sélection de lames'],
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: keywordsMap[locale],
    alternates: {
      canonical: getCanonicalUrl(locale, '/faq'),
      languages: getHreflangUrls('/faq'),
    },
  }
}

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  const faqsByCategory = getFAQsGroupedByCategory(locale)
  const categories = getCategoryNames(locale)
  
  // FAQ Schema için tüm soruları düz liste yap
  const allFaqs = Object.values(faqsByCategory).flat().map(faq => ({
    question: faq.question,
    answer: faq.answer,
  }))
  
  const faqSchema = generateFAQSchema(allFaqs)

  // BreadcrumbList Schema - Home → FAQ
  const faqTitles: Record<Locale, string> = {
    tr: 'Sıkça Sorulan Sorular',
    en: 'FAQ',
    ar: 'الأسئلة الشائعة',
    ru: 'ЧаВо',
    fr: 'FAQ',
  }
  const homeTitles: Record<Locale, string> = {
    tr: 'Ana Sayfa',
    en: 'Home',
    ar: 'الرئيسية',
    ru: 'Главная',
    fr: 'Accueil',
  }
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: homeTitles[locale], url: `/${locale}` },
      { name: faqTitles[locale] },
    ],
    locale as SupportedLocale
  )

  // Page content by locale
  const content = {
    tr: {
      badge: 'Yardım Merkezi',
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Endüstriyel bıçaklar hakkında merak edilen tüm sorular ve cevapları',
      needHelp: 'Sorunuzu bulamadınız mı?',
      needHelpDesc: 'Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.',
      whatsapp: 'WhatsApp ile Yazın',
      call: 'Bizi Arayın',
    },
    en: {
      badge: 'Help Center',
      title: 'Frequently Asked Questions',
      subtitle: 'All the questions and answers about industrial blades',
      needHelp: "Couldn't find your question?",
      needHelpDesc: 'Our expert team is happy to help you.',
      whatsapp: 'Chat on WhatsApp',
      call: 'Call Us',
    },
    ar: {
      badge: 'مركز المساعدة',
      title: 'الأسئلة الشائعة',
      subtitle: 'جميع الأسئلة والأجوبة حول الشفرات الصناعية',
      needHelp: 'لم تجد سؤالك؟',
      needHelpDesc: 'فريقنا المتخصص سعيد بمساعدتك.',
      whatsapp: 'تواصل عبر واتساب',
      call: 'اتصل بنا',
    },
    ru: {
      badge: 'Центр помощи',
      title: 'Часто задаваемые вопросы',
      subtitle: 'Все вопросы и ответы о промышленных лезвиях',
      needHelp: 'Не нашли свой вопрос?',
      needHelpDesc: 'Наша команда экспертов будет рада вам помочь.',
      whatsapp: 'Написать в WhatsApp',
      call: 'Позвоните нам',
    },
    fr: {
      badge: 'Centre d\'aide',
      title: 'Questions fréquemment posées',
      subtitle: 'Toutes les questions et réponses sur les lames industrielles',
      needHelp: 'Vous n\'avez pas trouvé votre question ?',
      needHelpDesc: 'Notre équipe d\'experts se fera un plaisir de vous aider.',
      whatsapp: 'Discuter sur WhatsApp',
      call: 'Appelez-nous',
    },
  }
  
  const t = content[locale]

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero */}
      <PageHeader
        title={t.title}
        description={t.subtitle}
      />
      
      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Badge */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
              <HelpCircle className="w-4 h-4" />
              {t.badge}
            </span>
          </div>
          
          {CATEGORY_ORDER.map((category) => {
            const faqs = faqsByCategory[category]
            if (!faqs || faqs.length === 0) return null
            
            return (
            <div key={category} className="mb-12">
              {/* Category Title */}
              <h2 className="text-2xl font-semibold text-steel-900 mb-6 pb-3 border-b border-steel-200">
                {categories[category]}
              </h2>
              
              {/* FAQ Items - Accordion Style */}
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details 
                    key={faq.id} 
                    className="group bg-steel-50 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-steel-100 transition-colors">
                      <h3 className="text-lg font-medium text-steel-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-steel-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-steel-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
            )
          })}
        </div>
      </section>
      
      {/* Need More Help CTA - Minimal */}
      <section className="py-10 bg-steel-50 border-t border-steel-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-steel-900 mb-1">
                  {t.needHelp}
                </h2>
                <p className="text-steel-600 text-sm">
                  {t.needHelpDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href={getWhatsAppUrl(locale)}
                target="_blank"
                variant="primary"
                size="md"
              >
                {t.whatsapp}
              </Button>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-steel-700 text-sm font-medium rounded-lg hover:bg-steel-100 transition-all"
              >
                <Phone className="w-4 h-4" />
                {t.call}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
