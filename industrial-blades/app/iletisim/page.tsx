import { generateMetadata } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, Printer, ExternalLink } from 'lucide-react'
import { siteConfig, getWhatsAppUrl, getPhoneUrl, getEmailUrl, getGoogleMapsUrl } from '@/lib/config'
import { WhatsAppIcon } from '@/components/icons'
import { PageHeader } from '@/components/ui'

export const metadata = generateMetadata({
  title: 'İletişim',
  description: 'Alya Bıçak ile iletişime geçin. Endüstriyel kesici bıçaklar hakkında sorularınız için bize ulaşın. Profesyonel danışmanlık ve destek.',
  keywords: ['iletişim', 'destek', 'müşteri hizmetleri', 'fiyat teklifi'],
  url: 'https://www.alyabicak.com/iletisim',
})

export default function ContactPage() {
  const { contact } = siteConfig

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="İletişime Geçin"
        description="Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız."
        backgroundImage="/images/pages/iletisim.jpg"
      />

      {/* Contact Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                Bize Yazın
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">Adres</h3>
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
                      Haritada Göster <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">Telefon</h3>
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
                    <h3 className="font-semibold text-steel-900 mb-2">Fax</h3>
                    <span className="text-steel-700">{contact.fax}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">E-posta</h3>
                    <a 
                      href={getEmailUrl('Bilgi Talebi')} 
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
                    <h3 className="font-semibold text-steel-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-steel-600">
                      Pazartesi - Cuma: {contact.workingHours.weekdays}<br />
                      Hafta Sonu: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-steel-900 mb-2">
                  Hızlı Destek İçin
                </h3>
                <p className="text-sm text-steel-600 mb-4">
                  WhatsApp üzerinden anında yanıt alın
                </p>
                <a
                  href={getWhatsAppUrl('Merhaba, Alya Bıçak hakkında bilgi almak istiyorum.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp ile İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Google Maps Embed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-steel-900 mb-8 text-center">
            Bizi Ziyaret Edin
          </h2>
          <div className="bg-steel-100 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps?q=Alya+Tekstil+San.Tic.Ltd.%C5%9Eti.+Dudullu+OSB+DES+Sanayi+Sitesi+101+Sokak+B4+Blok+%C3%9Cmraniye+%C4%B0stanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alya Tekstil San.Tic.Ltd.Şti. - Dudullu OSB Konum"
            />
          </div>
          <p className="text-center text-steel-500 mt-4 text-sm">
            Dudullu OSB, DES Sanayi Sitesi 101. Sokak B4 Blok, No:2 - Kolay ulaşım için{' '}
            <a 
              href="https://maps.app.goo.gl/YRMreTyTnF4mGg578"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Google Maps&apos;te açın
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
