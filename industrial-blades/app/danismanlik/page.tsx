import { generateMetadata } from '@/lib/seo'
import Link from 'next/link'
import { MessageCircle, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Button, PageHeader } from '@/components/ui'

export const metadata = generateMetadata({
  title: 'Danışmanlık Hizmetleri',
  description: 'Alya Bıçak profesyonel danışmanlık hizmetleri. Doğru bıçak seçimi için uzman desteği. Malzeme analizi, bıçak önerisi ve optimizasyon.',
  keywords: ['danışmanlık', 'uzman destek', 'bıçak seçimi', 'malzeme analizi', 'teknik destek'],
  url: 'https://www.alyabicak.com/danismanlik',
})

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Profesyonel Danışmanlık"
        description="Doğru bıçak seçimi için uzman desteği. Her malzeme için en uygun kesim çözümü."
        backgroundImage="/images/pages/danismanlik-header.jpg"
      />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-3">
                Danışmanlık Sürecimiz
              </h2>
              <p className="text-lg text-steel-600">
                Size en uygun bıçak çözümünü bulmak için izlediğimiz adımlar
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Malzeme Analizi
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Kesim yapacağınız malzemenin özelliklerini analiz ediyoruz. 
                    Plastik, metal, kağıt, gıda, tekstil... Her malzeme farklı 
                    kesim teknikleri gerektirir.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Malzeme tipi ve kalınlığı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Kesim hızı ve hassasiyet gereksinimleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Üretim hacmi ve süreklilik</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Bıçak Önerisi
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Analiz sonuçlarına göre size en uygun bıçak modelini öneriyoruz. 
                    Sheffield kalitesinde, performans ve dayanıklılık açısından 
                    optimize edilmiş çözümler.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Bıçak tipi ve boyut önerisi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Çelik kalitesi ve sertlik değeri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Özel tasarım gereksinimleri</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Test ve Optimizasyon
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Önerilen bıçağı test ediyor ve kesim performansını optimize ediyoruz. 
                    Gerekirse özel üretim yaparak mükemmel sonuç elde ediyoruz.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Kesim performans testi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Bıçak ömrü ve bakım önerileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Sürekli destek ve takip</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-3">
              Danışmanlık Hizmetlerimiz
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Malzeme Analizi',
                desc: 'Kesim yapacağınız malzemenin detaylı analizi',
              },
              {
                title: 'Bıçak Seçimi',
                desc: 'Size en uygun bıçak modelinin belirlenmesi',
              },
              {
                title: 'Teknik Destek',
                desc: 'Çelik kalitesi, sertlik ve malzeme konusunda rehberlik',
              },
              {
                title: 'Performans Optimizasyonu',
                desc: 'Kesim kalitesi ve verimliliğin artırılması',
              },
              {
                title: 'Özel Üretim',
                desc: 'Standart ürünler dışında özel tasarım',
              },
              {
                title: 'Satış Sonrası Destek',
                desc: 'Ürün kullanımı ve teknik sorular için destek',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-2">{service.title}</h3>
                <p className="text-steel-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sheffield style minimal */}
      <section className="py-10 bg-primary-600 border-t border-primary-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                Ücretsiz Danışmanlık Alın
              </h2>
              <p className="text-primary-100 text-sm">
                Hangi malzeme için hangi bıçak? Uzmanlarımız size yol gösteriyor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/iletisim" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-steel-50 transition-all"
              >
                İletişim Formu
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/905551234567?text=Merhaba, kesim danışmanlığı almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all"
              >
                <Phone className="w-4 h-4" />
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

