/**
 * İletişim Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, Printer, ExternalLink } from 'lucide-react'
import { siteConfig, getWhatsAppUrl, getPhoneUrl, getEmailUrl, getGoogleMapsUrl } from '@/lib/config'
import { WhatsAppIcon } from '@/components/icons'
import { PageHeader } from '@/components/ui'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return genMeta({
    title: dict.contact.title,
    description: dict.contact.subtitle,
    locale,
    path: '/contact',
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/contact`,
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const { contact } = siteConfig

  const labels = {
    tr: {
      writeUs: 'Bize Yazın',
      contactInfo: 'İletişim Bilgileri',
      address: 'Adres',
      phone: 'Telefon',
      fax: 'Fax',
      email: 'E-posta',
      workingHours: 'Çalışma Saatleri',
      workingDays: 'Pazartesi - Cuma',
      weekend: 'Hafta Sonu: Kapalı',
      showOnMap: 'Haritada Göster',
      quickSupport: 'Hızlı Destek İçin',
      whatsappText: 'WhatsApp üzerinden anında yanıt alın',
      whatsappButton: 'WhatsApp ile İletişime Geç',
      mapTitle: 'Konumumuz',
      mapSubtitle: 'Dudullu Organize Sanayi Bölgesi, Ümraniye / İstanbul',
      openInMaps: 'Google Maps\'te Aç',
      getDirections: 'Yol Tarifi Al',
    },
    en: {
      writeUs: 'Write to Us',
      contactInfo: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
      workingHours: 'Working Hours',
      workingDays: 'Monday - Friday',
      weekend: 'Weekend: Closed',
      showOnMap: 'Show on Map',
      quickSupport: 'For Quick Support',
      whatsappText: 'Get instant response via WhatsApp',
      whatsappButton: 'Contact via WhatsApp',
      mapTitle: 'Our Location',
      mapSubtitle: 'Dudullu Organized Industrial Zone, Ümraniye / Istanbul, Turkey',
      openInMaps: 'Open in Google Maps',
      getDirections: 'Get Directions',
    },
    ar: {
      writeUs: 'راسلنا',
      contactInfo: 'معلومات الاتصال',
      address: 'العنوان',
      phone: 'الهاتف',
      fax: 'الفاكس',
      email: 'البريد الإلكتروني',
      workingHours: 'ساعات العمل',
      workingDays: 'الإثنين - الجمعة',
      weekend: 'عطلة نهاية الأسبوع: مغلق',
      showOnMap: 'عرض على الخريطة',
      quickSupport: 'للدعم السريع',
      whatsappText: 'احصل على رد فوري عبر واتساب',
      whatsappButton: 'تواصل عبر واتساب',
      mapTitle: 'موقعنا',
      mapSubtitle: 'منطقة دودولو الصناعية المنظمة، أومرانية / إسطنبول، تركيا',
      openInMaps: 'افتح في خرائط جوجل',
      getDirections: 'احصل على الاتجاهات',
    },
    ru: {
      writeUs: 'Напишите нам',
      contactInfo: 'Контактная информация',
      address: 'Адрес',
      phone: 'Телефон',
      fax: 'Факс',
      email: 'Эл. почта',
      workingHours: 'Часы работы',
      workingDays: 'Понедельник - Пятница',
      weekend: 'Выходные: Закрыто',
      showOnMap: 'Показать на карте',
      quickSupport: 'Для быстрой поддержки',
      whatsappText: 'Получите мгновенный ответ через WhatsApp',
      whatsappButton: 'Связаться через WhatsApp',
      mapTitle: 'Наше местоположение',
      mapSubtitle: 'Организованная промышленная зона Дудуллу, Умрание / Стамбул, Турция',
      openInMaps: 'Открыть в Google Картах',
      getDirections: 'Проложить маршрут',
    },
    fr: {
      writeUs: 'Écrivez-nous',
      contactInfo: 'Informations de contact',
      address: 'Adresse',
      phone: 'Téléphone',
      fax: 'Fax',
      email: 'E-mail',
      workingHours: 'Heures d\'ouverture',
      workingDays: 'Lundi - Vendredi',
      weekend: 'Week-end : Fermé',
      showOnMap: 'Afficher sur la carte',
      quickSupport: 'Pour une assistance rapide',
      whatsappText: 'Obtenez une réponse instantanée via WhatsApp',
      whatsappButton: 'Contacter via WhatsApp',
      mapTitle: 'Notre Emplacement',
      mapSubtitle: 'Zone Industrielle Organisée de Dudullu, Ümraniye / Istanbul, Turquie',
      openInMaps: 'Ouvrir dans Google Maps',
      getDirections: 'Obtenir l\'itinéraire',
    },
  }

  // Defensive fallback: desteklenmeyen locale gelirse en → tr zinciri
  const l = labels[locale] || labels['en'] || labels['tr']

  // Schema.org Breadcrumb
  const breadcrumbItems = [
    { name: dict.nav.home, url: `/${locale}` },
    { name: dict.contact.title },
  ]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, locale as SupportedLocale)

  // Schema.org LocalBusiness — Contact sayfası SEO güçlendirme
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${getDomainUrl(locale as SupportedLocale)}/#organization`,
    name: locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade',
    legalName: 'Alya Tekstil Sanayi Ticaret Ltd. Şti.',
    description: dict.contact.subtitle,
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/contact`,
    telephone: siteConfig.contact.phoneRaw,
    faxNumber: siteConfig.contact.fax,
    email: siteConfig.contact.email,
    image: `${getDomainUrl(locale as SupportedLocale)}/images/logo-512.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.district,
      addressRegion: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9971882,
      longitude: 29.1862235,
    },
    hasMap: 'https://maps.app.goo.gl/YRMreTyTnF4mGg578',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    foundingDate: '1996',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
  }

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Section */}
      <PageHeader
        title={dict.contact.title}
        description={dict.contact.subtitle}
        backgroundImage="/images/pages/iletisim.jpg"
      />

      {/* ── Google Maps Embed ─────────────────────────────── */}
      <section id="location" className="bg-white">
        <div className="container mx-auto px-4 pt-12 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-steel-900">
                {l.mapTitle}
              </h2>
              <p className="text-sm text-steel-500 mt-1">
                {l.mapSubtitle}
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://maps.app.goo.gl/YRMreTyTnF4mGg578"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-steel-900 hover:bg-steel-800 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {l.openInMaps}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.google.com/maps/dir//Dudullu+Organize+Sanayi+B%C3%B6lgesi,+DES+Sanayi+Sitesi,+101.+Sokak+B4+Blok+No:+2,+34776+%C3%9Cmraniye%2F%C4%B0stanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-steel-200 hover:border-steel-300 text-steel-700 text-sm font-medium rounded-lg transition-colors"
              >
                {l.getDirections}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[350px] sm:h-[420px] lg:h-[480px]">
          <iframe
            src="https://www.google.com/maps?q=40.9971882,29.1862235&z=16&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={l.mapTitle}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                {l.writeUs}
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                {l.contactInfo}
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">{l.address}</h3>
                    <p className="text-steel-600">
                      {contact.address.line1}<br />
                      {contact.address.line2}<br />
                      {contact.address.postalCode} {contact.address.district}-{contact.address.city}/{contact.address.country}
                    </p>
                    <a 
                      href={getGoogleMapsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-primary-600 hover:text-primary-700"
                    >
                      {l.showOnMap} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">{l.phone}</h3>
                    <a 
                      href={getPhoneUrl()} 
                      className="text-primary-600 hover:text-primary-700 font-medium block"
                    >
                      {contact.phone}
                    </a>
                    <span className="text-sm text-steel-500">({contact.phoneLines})</span>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Printer className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">{l.fax}</h3>
                    <span className="text-steel-700">{contact.fax}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">{l.email}</h3>
                    <a 
                      href={getEmailUrl(dict.contact?.emailSubjectGeneral || 'Information Request')} 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">{l.workingHours}</h3>
                    <p className="text-steel-600">
                      {l.workingDays}: {contact.workingHours.weekdays}<br />
                      {l.weekend}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-steel-900 mb-2">
                  {l.quickSupport}
                </h3>
                <p className="text-sm text-steel-600 mb-4">
                  {l.whatsappText}
                </p>
                <a
                  href={getWhatsAppUrl(dict.whatsapp?.contactMessage || 'Hello, I would like to get information about Alya Blade.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {l.whatsappButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
