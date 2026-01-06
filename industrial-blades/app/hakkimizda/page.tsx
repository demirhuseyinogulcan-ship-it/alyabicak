import { generateMetadata } from '@/lib/seo'
import Image from 'next/image'
import { Award, Users, CheckCircle, Globe, Factory, Truck } from 'lucide-react'
import { Button, Badge, PageHeader } from '@/components/ui'
import { getWhatsAppUrl } from '@/lib/config'

export const metadata = generateMetadata({
  title: 'Hakkımızda',
  description: 'Alya Bıçak - 28 yılı aşkın süredir endüstriyel kesiciler tedarik ediyoruz. Tekstil makinesi üretimi ve 35 ülkeye ihracat. Sheffield kalitesi ile profesyonel çözümler.',
  keywords: ['hakkımızda', 'alya tekstil', 'endüstriyel kesici', 'sheffield', 'ihracat', 'tekstil makinesi'],
  url: 'https://www.alyabicak.com/hakkimizda',
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Hakkımızda"
        description="28 yılı aşkın deneyim, 35 ülkeye ihracat, dünya standartlarında kalite"
        backgroundImage="/images/pages/hakkimizda-header.jpg"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" size="md" rounded="full" className="mb-6">
                28+ Yıllık Deneyim
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-5">
                Endüstrinin Güvenilir Tedarikçisi
              </h2>
              
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  <strong className="text-steel-900">Alya</strong> olarak 28 yılı aşkın süredir 
                  endüstriyel kesiciler tedarik ediyoruz. Endüstrinin hemen hemen her sektörüne 
                  lider firmalarla işbirliğimizi sürdürüyoruz.
                </p>
                <p>
                  Sadece bıçak değil, İstanbul&apos;daki fabrikamızda <strong className="text-steel-900">tekstil 
                  sektörüne yönelik makine yedek parçası üretimi</strong> gerçekleştiriyor ve 
                  <strong className="text-steel-900"> 35 farklı ülkeye ihracatını</strong> yapıyoruz.
                </p>
                <p>
                  Sheffield, İngiltere&apos;nin kalp merkezinde 1910&apos;dan bu yana dünya 
                  standartlarında endüstriyel bıçak üretimi yapan Durham 
                  Duplex&apos;in yetkili distribütörüyüz.
                </p>
              </div>

              {/* Ana Site Linki - ZARİF */}
              <div className="mt-6 pt-6 border-t border-steel-200">
                <p className="text-sm text-steel-500 mb-2">
                  Tekstil makineleri ve yedek parçalar:
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
                alt="Alya Bıçak - Hakkımızda"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar - Müşteri Odaklı Değerler */}
      <section className="py-10 bg-steel-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">96</span>
              </div>
              <div>
                <div className="font-medium">Kuruluş</div>
                <div className="text-steel-400 text-xs">1996, İstanbul</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">35 Ülke</div>
                <div className="text-steel-400 text-xs">İhracat</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">Aynı Gün</div>
                <div className="text-steel-400 text-xs">Kargo</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">5000+</div>
                <div className="text-steel-400 text-xs">Müşteri</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">500+</div>
                <div className="text-steel-400 text-xs">Ürün</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-3">
              Neden Alya?
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              Sektörde fark yaratan değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-steel-900 mb-2">Sheffield Kalitesi</h3>
              <p className="text-steel-600">
                Durham Duplex yetkili distribütörü olarak dünya standartlarında ürünler
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-steel-900 mb-2">Yerli Üretim</h3>
              <p className="text-steel-600">
                İstanbul fabrikamızda tekstil makinesi yedek parçası üretimi
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-steel-900 mb-2">Global Erişim</h3>
              <p className="text-steel-600">
                35 farklı ülkeye ihracat ve dünya çapında müşteri ağı
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-steel-900 mb-2">Uzman Ekip</h3>
              <p className="text-steel-600">
                28 yıllık tecrübeyle profesyonel danışmanlık ve destek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-steel-900 mb-3">
                Hizmetlerimiz
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Endüstriyel Kesiciler',
                  desc: 'Sanayi jiletleri, makina bıçakları ve iş güvenliği bıçakları',
                },
                {
                  title: 'Tekstil Makinesi Yedek Parçaları',
                  desc: 'İstanbul fabrikamızda üretim, dünya çapında teslimat',
                },
                {
                  title: 'Özel Üretim',
                  desc: 'İhtiyacınıza özel tasarım ve üretim çözümleri',
                },
                {
                  title: 'Profesyonel Danışmanlık',
                  desc: 'Doğru ürün seçimi için uzman teknik destek',
                },
                {
                  title: 'Hızlı Teslimat',
                  desc: 'Stoktan anında gönderim, global lojistik ağı',
                },
                {
                  title: 'Satış Sonrası Destek',
                  desc: 'Teknik destek ve müşteri hizmetleri',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-steel-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-steel-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Sheffield style minimal */}
      <section className="py-10 bg-steel-900 border-t border-steel-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                Bizimle Çalışmak İster misiniz?
              </h2>
              <p className="text-steel-400 text-sm">
                28 yıllık deneyimimizle size en uygun çözümü sunmaya hazırız.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/iletisim" size="md">
                İletişime Geçin
              </Button>
              <Button href={getWhatsAppUrl('Merhaba, Alya Bıçak hakkında bilgi almak istiyorum.')} variant="whatsapp" size="md">
                WhatsApp ile Ulaşın
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
