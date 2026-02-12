/**
 * İletişim Sayfası - i18n Destekli
 */
import { generateMetadata as genMeta } from '@/lib/seo'
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
    },
  }

  // Defensive fallback: desteklenmeyen locale gelirse en → tr zinciri
  const l = labels[locale] || labels['en'] || labels['tr']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={dict.contact.title}
        description={dict.contact.subtitle}
        backgroundImage="/images/pages/iletisim.jpg"
      />

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
