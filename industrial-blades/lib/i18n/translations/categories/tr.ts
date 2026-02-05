/**
 * Categories - Türkçe Çevirileri
 * 
 * Ana kategoriler ve alt kategorilerin Türkçe çevirileri.
 * ID'ler İngilizce, sadece name ve description çevrilir.
 */

// =============================================================================
// ANA KATEGORİLER
// =============================================================================

export const categoriesTr = {
  'industrial-blades': {
    name: 'Sanayi Jiletleri',
    description: 'Endüstriyel kullanım için profesyonel sanayi jiletleri ve kesici aletler',
  },
  'machine-knives': {
    name: 'Makina Bıçakları',
    description: 'Endüstriyel makinalar için özel üretim bıçaklar ve kesici sistemler',
  },
  'safety-knives': {
    name: 'İş Güvenliği & El Bıçakları',
    description: 'İş güvenliği standartlarına uygun profesyonel el bıçakları ve kesici aletler',
  },
};

// =============================================================================
// ALT KATEGORİLER
// =============================================================================

export const subcategoriesTr = {
  // =============================================================================
  // SANAYİ JİLETLERİ ALT KATEGORİLERİ
  // =============================================================================
  
  '3-hole-slitting': {
    name: '3 Delikli Dilme Jiletleri',
    description: 'Film, folyo, kağıt ve ambalaj kesimi için profesyonel 3 delikli dilme jiletleri. Yüksek karbon çelikten üretim, kaplama seçenekleri ile uzun ömürlü kesim performansı. Slitter rewinder makinelerinde BOPP, COPP, PE, PP film dilme işlemlerinde tercih edilen endüstri standardı.',
    seoKeywords: [
      // Ana terimler
      '3 delikli jilet', 'üç delikli jilet', 'sanayi jileti', 'dilme jileti', 'endüstriyel jilet',
      // Sektörel terimler - Film & Ambalaj
      'film kesim jileti', 'BOPP film jileti', 'COPP dilme jileti', 'PE film kesim', 'PP film jileti',
      'esnek ambalaj jileti', 'flexible packaging blade', 'ambalaj dilme jileti',
      // Sektörel terimler - Kağıt & Folyo
      'kağıt kesim jileti', 'folyo dilme jileti', 'alüminyum folyo jileti', 'kağıt ebatlama jileti',
      // Makine terimleri
      'slitter rewinder jileti', 'dilme makinesi jileti', 'ebatlama jileti', 'converting blade',
      // Teknik terimler - Malzeme
      'karbon çelik jilet', 'yüksek karbonlu jilet', 'SK5 jilet', 'C85 jilet', 'titanyum kaplamalı jilet',
      'seramik kaplamalı jilet', 'TiN kaplama jilet', 'paslanmaz jilet',
      // Ölçü bazlı
      '43x22 jilet', '60x22 jilet', '43mm jilet', '60mm jilet',
      // Ticari terimler
      '3 delikli jilet fiyatları', '3 delikli jilet üreticisi', 'sanayi jileti toptan', 'jilet tedarikçisi',
      // Anadolu/yerel terimler
      'kesici jilet', 'bıçak jileti', 'makine jileti', 'fabrika jileti'
    ],
  },
  
  'slotted-slitting': {
    name: 'Slotted Dilme Jiletleri',
    description: 'Merkezi yuvalı slotted dilme jiletleri. Slitter rewinder makinelerine hızlı montaj için tasarlanmış yüksek performanslı jiletler. BOPP, laminasyon, yapışkanlı bant ve esnek ambalaj sektöründe tercih edilen profesyonel kesim çözümü.',
    seoKeywords: [
      // Ana terimler
      'slotted jilet', 'slotted dilme jileti', 'yuvalı jilet', 'merkezi yuvalı jilet',
      // Sektörel - Yapışkanlı Bant
      'yapışkanlı bant jileti', 'koli bandı jileti', 'bant dilme jileti', 'tape slitting blade',
      'çift taraflı bant jileti', 'maskeleme bandı jileti', 'BOPP bant jileti',
      // Sektörel - Laminasyon
      'laminasyon jileti', 'lamination blade', 'kaplama jileti',
      // Sektörel - Etiket
      'etiket jileti', 'label jileti', 'sticker jileti', 'barkod etiket jileti',
      // Teknik - Kaplama
      'titanyum slotted', 'seramik slotted', 'TiN kaplama slotted', 'XCD kaplama',
      'elmas kaplama jilet', 'DLC kaplama', 'Endurium jilet',
      // Teknik - Malzeme
      'karbon çelik slotted', 'paslanmaz slotted', 'tungsten karbür jilet', 'HSS jilet',
      // Makine
      'slitter rewinder', 'dilme makinesi', 'ebatlama makinesi', 'converting makinesi',
      // Ölçü
      '43x22 slotted', '60x22 slotted',
      // Ticari
      'slotted jilet fiyat', 'slotted jilet üretici', 'slotted jilet tedarikçi'
    ],
  },
  
  'injector-slitting': {
    name: 'İnjektör Dilme Jiletleri',
    description: 'Hassas kesim için 38x8mm injektör tipi dilme jiletleri. Çift kanallı yuva tasarımı ile makinelere güvenli kavrama. Etiket, ince film, optik film ve hassas folyo kesiminde mikron düzeyinde hassasiyet sağlar.',
    seoKeywords: [
      // Ana terimler
      'injektör jilet', 'injektor jilet', 'enjektör jilet', '38x8 jilet', 'injector blade',
      // Boyut varyasyonları
      '38x8x0.25 jilet', '38x8x0.30 jilet', '38x8x0.64 jilet', '38mm jilet',
      // Sektörel - Etiket
      'etiket kesim jileti', 'label cutting blade', 'sticker jileti', 'barkod jileti',
      // Sektörel - Film
      'ince film jileti', 'optik film jileti', 'hassas film kesim', 'mikro kesim jileti',
      // Sektörel - Laboratuvar
      'laboratuvar jileti', 'hassas kesim jileti', 'mikron kesim',
      // Teknik - Kaplama
      'PTFE kaplama injektör', 'teflon kaplamalı', 'titanyum injektör', 'seramik injektör',
      'XCD kaplama injektör', 'tungsten injektör', 'zirkonya jilet',
      // Teknik - Malzeme
      'karbon çelik injektör', 'paslanmaz injektör', 'HSS injektör', 'Endurium injektör',
      // Teknik - Özellik
      '2 kanallı jilet', 'çift kanallı injektör', 'dual channel blade',
      // Ticari
      'injektör jilet fiyat', 'injektör jilet üretici', 'hassas jilet tedarikçi'
    ],
  },
  
  'single-edge': {
    name: 'Tek Kenarlı Jiletler',
    description: 'Güvenli kullanım için tek kesici kenarlı endüstriyel jiletler. Cam kazıma, etiket sökme, yüzey temizleme ve hassas kesim uygulamalarında tercih edilen profesyonel çözüm.',
    seoKeywords: [
      // Ana terimler
      'tek kenarlı jilet', 'single edge blade', 'tek taraflı jilet', 'güvenlik jileti',
      // Uygulama alanları
      'cam kazıma jileti', 'etiket sökme jileti', 'yüzey temizleme jileti', 'boya kazıma jileti',
      'sticker sökme', 'yapışkan temizleme', 'kalıntı kazıma',
      // Sektörel
      'otomotiv jileti', 'cam sanayi jileti', 'temizlik jileti', 'endüstriyel kazıyıcı',
      // Teknik
      'karbon çelik tek kenar', 'paslanmaz tek kenar', 'kaplamalı tek kenar',
      // Ölçü
      '40mm tek kenar', 'standart tek kenar', 'geniş tek kenar',
      // Ticari
      'tek kenarlı jilet fiyat', 'tek kenar jilet toptan'
    ],
  },
  
  'trapezoid-blades': {
    name: 'Trapez Bıçaklar',
    description: 'Çok amaçlı trapez kesim bıçakları. Maket bıçakları, güvenlik kesiciler ve profesyonel el aletlerinde kullanılan standart trapez form. Karton, halı, linoleum, PVC ve ambalaj kesiminde uzun ömürlü performans.',
    seoKeywords: [
      // Ana terimler
      'trapez bıçak', 'trapez jilet', 'utility blade', 'maket bıçağı ucu',
      // Uygulama
      'karton kesme bıçağı', 'halı kesme bıçağı', 'linoleum bıçağı', 'PVC kesim bıçağı',
      'ambalaj açma bıçağı', 'koli açma bıçağı', 'streç kesme',
      // Uyumluluk
      'Stanley bıçağı', 'maket bıçağı yedeği', 'falçata ucu', 'kesici uç',
      // Teknik
      'karbon çelik trapez', 'paslanmaz trapez', 'titanyum trapez', 'kaplamalı trapez',
      'çift uçlu trapez', 'kanca uçlu trapez',
      // Ticari
      'trapez bıçak fiyat', 'trapez bıçak toptan', 'trapez uç tedarikçi'
    ],
  },
  
  'hook-blades': {
    name: 'Kanca Bıçaklar',
    description: 'Özel uygulamalar için kanca uçlu bıçaklar. Halı, linoleum, çatı kaplama, izolasyon malzemesi ve shrink film kesiminde kullanılan ergonomik tasarım. Çekme hareketiyle güvenli kesim sağlar.',
    seoKeywords: [
      // Ana terimler
      'kanca bıçak', 'hook blade', 'çengel bıçak', 'kanca uçlu',
      // Uygulama
      'halı kesme bıçağı', 'linoleum bıçağı', 'çatı kaplama bıçağı', 'membran kesme',
      'izolasyon kesme', 'shrink kesme', 'streç kesme', 'naylon kesme',
      // Sektörel
      'inşaat bıçağı', 'zemin kaplama bıçağı', 'yalıtım bıçağı',
      // Teknik
      'karbon kanca', 'paslanmaz kanca', 'kaplamalı kanca',
      // Ticari
      'kanca bıçak fiyat', 'hook blade toptan'
    ],
  },
  
  'craft-blades': {
    name: 'Maket Bıçak Ucu | Falçata',
    description: 'Hassas kesim için profesyonel maket bıçak uçları ve falçata jiletleri. Grafik tasarım, model yapımı, hobi çalışmaları ve endüstriyel hassas kesim uygulamalarında tercih edilen keskin ve dayanıklı uçlar.',
    seoKeywords: [
      // Ana terimler
      'maket bıçak ucu', 'falçata', 'falçata jileti', 'craft blade', 'hobi jileti',
      // Uygulama
      'grafik tasarım bıçağı', 'model yapım bıçağı', 'hassas kesim', 'ince kesim',
      'kağıt kesme', 'karton kesme', 'stencil kesme', 'maske kesme',
      // Uyumluluk
      'X-Acto bıçağı', 'skalpel ucu', 'neşter ucu', 'hobi bıçağı ucu',
      // Tip
      '#11 bıçak', '#10 bıçak', 'sivri uç', 'eğimli uç', 'yuvarlak uç',
      // Teknik
      'karbon falçata', 'paslanmaz falçata', 'titanyum falçata',
      // Ticari
      'falçata fiyat', 'maket ucu toptan', 'falçata tedarikçi'
    ],
  },
  
  'hobby-blades': {
    name: 'Hobi Jiletleri',
    description: 'Hobi ve el işleri için çeşitli jilet tipleri. Model yapımı, scrapbook, origami, maket çalışmaları ve detaylı kesim işlerinde kullanılan profesyonel kalitede jiletler.',
    seoKeywords: [
      // Ana terimler
      'hobi jileti', 'hobi bıçağı', 'el işi jileti', 'craft razor',
      // Uygulama
      'model yapım jileti', 'scrapbook jileti', 'origami bıçağı', 'maket jileti',
      'detay kesim', 'ince iş jileti', 'hassas hobi',
      // Sektörel
      'mimari maket', 'prototip kesim', 'el sanatları',
      // Ticari
      'hobi jileti fiyat', 'hobi bıçağı seti'
    ],
  },
  
  'scalpel-blades': {
    name: 'Bisturi – Neşter',
    description: 'Tıbbi ve endüstriyel hassas kesim için bisturi ve neşter jiletleri. Cerrahi kalitede keskinlik, histoloji laboratuvarları, biyolojik numune hazırlama ve mikro kesim uygulamalarında kullanılır.',
    seoKeywords: [
      // Ana terimler
      'bisturi', 'neşter', 'scalpel', 'cerrahi bıçak', 'ameliyat bıçağı',
      // Tıbbi
      'cerrahi jilet', 'ameliyat jileti', 'steril bisturi', 'tek kullanımlık neşter',
      'patoloji jileti', 'otopsi bıçağı',
      // Laboratuvar
      'histoloji jileti', 'biyoloji jileti', 'laboratuvar kesici', 'numune hazırlama',
      'mikrotom alternatifi', 'doku kesim',
      // Endüstriyel
      'hassas kesim jileti', 'mikro kesim', 'ince kesim',
      // Uyumluluk
      '#10 bisturi', '#11 bisturi', '#15 bisturi', '#20 neşter', '#22 neşter',
      // Ticari
      'bisturi fiyat', 'neşter toptan', 'scalpel tedarikçi'
    ],
  },
  
  'chopped-fiber': {
    name: 'Kesik Elyaf Bıçakları',
    description: 'Elyaf kesimi için özel tasarlanmış endüstriyel bıçaklar. Cam elyaf, karbon fiber, aramid ve teknik elyafların chopper makinelerinde kesilmesi için yüksek aşınma dirençli bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'kesik elyaf bıçağı', 'chopped fiber blade', 'elyaf kesim bıçağı', 'fiber bıçağı',
      // Malzeme tipi
      'cam elyaf kesim', 'karbon fiber kesim', 'aramid kesim', 'kevlar kesim',
      'teknik elyaf bıçağı', 'kompozit kesim',
      // Makine
      'chopper bıçağı', 'elyaf kıyma bıçağı', 'fiber chopper',
      // Teknik
      'tungsten karbür elyaf', 'seramik elyaf bıçağı', 'aşınma dirençli',
      // Sektörel
      'otomotiv kompozit', 'havacılık elyaf', 'rüzgar türbini',
      // Ticari
      'elyaf bıçağı fiyat', 'chopper bıçağı tedarikçi'
    ],
  },
  
  'fiberglass': {
    name: 'Cam Elyaf Bıçakları',
    description: 'Cam elyaf kesimi için yüksek performanslı bıçaklar. Fiberglass üretiminde, yalıtım malzemesi kesiminde ve kompozit sanayinde kullanılan aşırı aşınmaya dayanıklı özel alaşım bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'cam elyaf bıçağı', 'fiberglass blade', 'cam lifi bıçağı', 'glass fiber knife',
      // Sektörel
      'yalıtım kesme bıçağı', 'izolasyon bıçağı', 'taş yünü bıçağı', 'cam yünü kesim',
      'kompozit bıçağı', 'GRP kesim', 'SMC kesim',
      // Uygulama
      'fiberglass dilme', 'elyaf ebatlama', 'mat kesim', 'roving kesim',
      // Teknik
      'tungsten karbür', 'seramik kaplama', 'yüksek sertlik', 'aşınma direnci',
      // Ticari
      'cam elyaf bıçağı fiyat', 'fiberglass kesici tedarikçi'
    ],
  },
  
  'circular-blades': {
    name: 'Dairesel Jiletler',
    description: 'Döner kesim için dairesel jiletler. Rotary cutter, kumaş kesim, kağıt ebatlama ve paketleme makinelerinde kullanılan çeşitli çaplarda yuvarlak jiletler.',
    seoKeywords: [
      // Ana terimler
      'dairesel jilet', 'yuvarlak jilet', 'circular blade', 'rotary blade',
      // Uygulama
      'kumaş kesim jileti', 'tekstil jileti', 'rotary cutter', 'döner kesici',
      'kağıt kesim', 'karton kesim', 'paketleme jileti',
      // Ölçü
      '28mm dairesel', '45mm dairesel', '60mm dairesel', 'büyük çap jilet',
      // Uyumluluk
      'OLFA rotary', 'Fiskars rotary', 'döner makas yedeği',
      // Teknik
      'keskin kenar', 'wave edge', 'dalgalı kenar', 'pinking blade',
      // Ticari
      'dairesel jilet fiyat', 'rotary blade toptan'
    ],
  },
  
  'pentagon-blades': {
    name: 'Beşgen Bıçaklar',
    description: 'Özel geometrili beşgen kesim bıçakları. Shrink film, streç film ve ambalaj makinelerinde kesme ve delme işlemleri için tasarlanmış 5 köşeli endüstriyel bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'beşgen bıçak', 'pentagon blade', '5 köşeli bıçak', 'beş kenarlı',
      // Uygulama
      'shrink kesme', 'streç kesme', 'film delme', 'ambalaj bıçağı',
      // Sektörel
      'paketleme bıçağı', 'koli bıçağı', 'ambalaj makinesi',
      // Ticari
      'beşgen bıçak fiyat'
    ],
  },
  
  'lamella-blades': {
    name: 'Lamel / Yaprak Bıçak',
    description: 'İnce ve hassas kesimler için lamel bıçaklar. Yaprak şeklinde ultra ince jiletler, özel kesim uygulamalarında ve hassas dilme işlemlerinde kullanılır.',
    seoKeywords: [
      // Ana terimler
      'lamel bıçak', 'yaprak bıçak', 'lamella blade', 'ince bıçak',
      // Uygulama
      'hassas dilme', 'ince kesim', 'mikro kesim', 'ultra ince jilet',
      // Teknik
      'esnek bıçak', 'flexible blade', 'yay çeliği',
      // Ticari
      'lamel bıçak fiyat', 'yaprak bıçak tedarikçi'
    ],
  },
  
  'microtome-blades': {
    name: 'Dokubilim / Mikrotom Jileti',
    description: 'Laboratuvar ve histoloji uygulamaları için mikrotom jiletleri. Doku kesitlerinin mikron kalınlığında hazırlanması için ultra keskin, optik düzlükte yüzeye sahip özel jiletler.',
    seoKeywords: [
      // Ana terimler
      'mikrotom jileti', 'microtome blade', 'histoloji jileti', 'doku kesim jileti',
      // Tıbbi/Laboratuvar
      'patoloji jileti', 'biyopsi jileti', 'doku kesiti', 'parafin kesim',
      'frozen section', 'kriyostat jileti', 'vibratom bıçağı',
      // Teknik
      'yüksek profil', 'düşük profil', 'disposable microtome',
      '35 derece', '80mm mikrotom', 'S35 jilet', 'R35 jilet',
      // Marka uyumu
      'Leica mikrotom', 'Thermo mikrotom', 'Sakura mikrotom',
      // Ticari
      'mikrotom jileti fiyat', 'histoloji jileti tedarikçi'
    ],
  },
  
  'microkeratome-blades': {
    name: 'Lasik / Mikrokeratom Jileti',
    description: 'Göz cerrahisi ve tıbbi uygulamalar için mikrokeratom jiletleri. LASIK operasyonlarında kornea flebinin oluşturulması için kullanılan ultra hassas, tek kullanımlık cerrahi jiletler.',
    seoKeywords: [
      // Ana terimler
      'mikrokeratom jileti', 'microkeratome blade', 'LASIK jileti', 'göz cerrahisi jileti',
      // Tıbbi
      'kornea jileti', 'refraktif cerrahi', 'flep kesim', 'oftalmik jilet',
      'göz ameliyatı bıçağı', 'keratom bıçağı',
      // Marka uyumu
      'Moria mikrokeratom', 'Hansatome jilet', 'Zyoptix jilet',
      // Teknik
      'tek kullanımlık', 'steril jilet', '130 mikron', '160 mikron',
      // Ticari
      'mikrokeratom fiyat', 'LASIK jilet tedarikçi'
    ],
  },
  
  'glass-scraper': {
    name: 'Cam Kazıyıcı',
    description: 'Cam yüzeylerde etiket ve kalıntı temizliği için kazıyıcı jiletler. Otomotiv, inşaat ve temizlik sektöründe boya, yapışkan, etiket ve film kalıntılarının sökülmesinde kullanılır.',
    seoKeywords: [
      // Ana terimler
      'cam kazıyıcı', 'glass scraper', 'kazıyıcı jilet', 'scraper blade',
      // Uygulama
      'etiket sökme', 'yapışkan temizleme', 'boya kazıma', 'film sökme',
      'cam temizleme', 'sticker kazıma', 'kalıntı temizleme',
      // Sektörel
      'otomotiv kazıyıcı', 'inşaat kazıyıcı', 'temizlik jileti',
      'vitrin temizleme', 'akvaryum kazıyıcı',
      // Ölçü
      '40mm kazıyıcı', '100mm kazıyıcı', 'geniş kazıyıcı',
      // Teknik
      'karbon çelik kazıyıcı', 'paslanmaz kazıyıcı', 'plastik kazıyıcı',
      // Ticari
      'cam kazıyıcı fiyat', 'scraper blade toptan'
    ],
  },
  
  'classic-blades': {
    name: 'Klasik Jilet',
    description: 'Geleneksel çift kenarlı klasik jiletler. Endüstriyel kullanımda ve özel uygulamalarda tercih edilen standart form faktörlü jiletler.',
    seoKeywords: [
      // Ana terimler
      'klasik jilet', 'çift kenarlı jilet', 'double edge blade', 'geleneksel jilet',
      // Endüstriyel
      'endüstriyel klasik jilet', 'sanayi jileti', 'fabrika jileti',
      // Teknik
      'karbon çelik', 'paslanmaz çelik', 'platinum kaplama',
      // Ticari
      'klasik jilet toptan', 'çift kenar fiyat'
    ],
  },
  
  'drywall-blades': {
    name: 'Alçı Levha (Kartonpiyer) Bıçakları',
    description: 'Alçıpan ve kartonpiyer kesimi için özel bıçaklar. İnşaat sektöründe alçı levha, suntalam ve benzeri malzemelerin hassas kesiminde kullanılır.',
    seoKeywords: [
      // Ana terimler
      'alçıpan bıçağı', 'kartonpiyer bıçağı', 'drywall blade', 'alçı levha kesici',
      // Malzeme
      'suntalam bıçağı', 'MDF kesim', 'panel bıçağı', 'levha kesici',
      // Sektörel
      'inşaat bıçağı', 'tadilat bıçağı', 'dekorasyon bıçağı',
      // Teknik
      'testere dişli', 'düz ağız', 'çift taraflı',
      // Ticari
      'alçıpan bıçağı fiyat', 'drywall blade toptan'
    ],
  },
  
  'arrow-blades': {
    name: 'OK Bıçaklar',
    description: 'Profesyonel OK bıçakları ve jiletler. Çeşitli endüstriyel uygulamalarda kullanılan ok formlu özel kesim bıçakları.',
    seoKeywords: [
      // Ana terimler
      'ok bıçak', 'arrow blade', 'ok jileti', 'ok kesici',
      // Uygulama
      'özel kesim', 'endüstriyel ok', 'profesyonel bıçak',
      // Ticari
      'ok bıçak fiyat'
    ],
  },

  // =============================================================================
  // MAKİNA BIÇAKLARI ALT KATEGORİLERİ
  // =============================================================================
  
  'advanced-processing': {
    name: 'İleri İşlem Bıçakları',
    description: 'Endüstriyel ileri işlem uygulamaları için profesyonel bıçaklar. Yüksek hassasiyet gerektiren özel üretim proseslerinde kullanılan kesici sistemler.',
    seoKeywords: [
      // Ana terimler
      'ileri işlem bıçağı', 'processing blade', 'özel üretim bıçak',
      // Sektörel
      'endüstriyel proses', 'üretim hattı bıçağı', 'fabrika bıçağı',
      // Teknik
      'hassas kesim', 'yüksek tolerans', 'özel alaşım',
      // Ticari
      'proses bıçağı fiyat'
    ],
  },
  
  'thermoform-vacuum': {
    name: 'Vakum Paketleme Bıçakları',
    description: 'Termoform ve vakum paketleme makinaları için profesyonel bıçaklar. Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac, Colimatic, Ilpra makinalarına uyumlu yıldız, üçgen, zımba, kontör ve lama bıçaklar. Gıda sanayi standartlarına uygun paslanmaz çelik.',
    seoKeywords: [
      // Ana terimler
      'vakum paketleme bıçağı', 'termoform bıçağı', 'thermoform blade', 'MAP bıçağı',
      // Marka uyumu
      'Multivac bıçağı', 'Tiromat bıçağı', 'Opack bıçağı', 'Betapak bıçağı',
      'GEA bıçağı', 'Alcan bıçağı', 'Ulma bıçağı', 'Variovac bıçağı',
      'Colimatic bıçağı', 'Ilpra bıçağı', 'Webomatic bıçağı',
      // Tip
      'yıldız bıçak', 'üçgen bıçak', 'zımba bıçak', 'kontör bıçağı',
      'lama bıçak', 'kesim bıçağı', 'delme zımbası',
      // Sektörel
      'gıda paketleme bıçağı', 'et paketleme', 'peynir paketleme', 'şarküteri bıçağı',
      // Teknik
      'paslanmaz çelik', 'gıda onaylı', 'FDA uyumlu', 'hijyenik bıçak',
      // Ticari
      'vakum bıçağı fiyat', 'termoform bıçak tedarikçi', 'Multivac yedek parça'
    ],
  },
  
  'circular-slitting': {
    name: 'Dairesel Dilme Bıçakları',
    description: 'Dairesel dilme makinaları için profesyonel bıçaklar. Alt-üst dilme sistemlerinde, slitter rewinder makinelerinde ve converting hatlarında kullanılan yuvarlak kesici bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'dairesel dilme bıçağı', 'circular slitting knife', 'yuvarlak dilme bıçağı',
      'alt üst bıçak', 'shear cut blade',
      // Sektörel
      'slitter rewinder bıçağı', 'converting bıçağı', 'bobinleme bıçağı',
      'kağıt dilme bıçağı', 'film dilme bıçağı', 'folyo dilme bıçağı',
      // Teknik
      'tungsten karbür dairesel', 'HSS dairesel', 'D2 çelik',
      'kesme açısı', 'bileme servisi',
      // Ölçü
      'çeşitli çaplar', 'özel ölçü', 'standart dilme',
      // Ticari
      'dairesel bıçak fiyat', 'dilme bıçağı tedarikçi'
    ],
  },
  
  'recycling-knives': {
    name: 'Geri Dönüşüm Bıçakları',
    description: 'Geri dönüşüm tesisleri için profesyonel bıçaklar. Plastik, kağıt, metal ve tekstil geri dönüşümünde kırıcı, granülatör ve shredder makinelerinde kullanılan dayanıklı kesici sistemler.',
    seoKeywords: [
      // Ana terimler
      'geri dönüşüm bıçağı', 'recycling blade', 'kırıcı bıçağı', 'granülatör bıçağı',
      // Makine tipi
      'shredder bıçağı', 'kıyıcı bıçağı', 'parçalayıcı bıçağı', 'öğütücü bıçağı',
      // Malzeme tipi
      'plastik kırıcı bıçağı', 'pet şişe kırıcı', 'film geri dönüşüm',
      'kağıt kırıcı', 'tekstil kırıcı', 'kauçuk kırıcı',
      // Teknik
      'yüksek aşınma direnci', 'darbe dayanımı', 'sertleştirilmiş çelik',
      'rotor bıçağı', 'sabit bıçak', 'hareketli bıçak',
      // Ticari
      'geri dönüşüm bıçağı fiyat', 'kırıcı bıçağı tedarikçi'
    ],
  },
  
  'corrugated-slitting': {
    name: 'Oluklu Mukavva Dilme Bıçakları',
    description: 'Mukavva ve karton dilme için özel bıçaklar. Oluklu mukavva üretim hatlarında, kutu fabrikalarında ve ambalaj sanayinde kullanılan kesici ve yarıcı bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'mukavva bıçağı', 'karton dilme bıçağı', 'corrugated blade', 'oluklu bıçak',
      // Makine
      'slotter bıçağı', 'slitter scorer', 'kesme yarma bıçağı',
      // Sektörel
      'kutu fabrikası bıçağı', 'ambalaj bıçağı', 'koli üretim',
      // Teknik
      'tungsten karbür', 'HSS', 'krom kaplama', 'bileme servisi',
      // Ticari
      'mukavva bıçağı fiyat', 'karton bıçağı tedarikçi'
    ],
  },
  
  'rotary-cutting': {
    name: 'Döner Kesim Bıçakları',
    description: 'Döner kesim makinaları için profesyonel bıçaklar. Yüksek hızlı rotary die cut, döner zımba ve sürekli kesim sistemlerinde kullanılan hassas üretim bıçakları.',
    seoKeywords: [
      // Ana terimler
      'döner kesim bıçağı', 'rotary die cut', 'döner bıçak', 'rotary knife',
      // Makine
      'die cutting bıçağı', 'zımba bıçağı', 'punch bıçağı', 'perforaj bıçağı',
      // Sektörel
      'etiket die cut', 'ambalaj die cut', 'karton die cut',
      // Teknik
      'esnek die', 'solid die', 'manyetik silindir', 'anvil',
      // Ticari
      'döner bıçak fiyat', 'die cut tedarikçi'
    ],
  },
  
  'serrated-knives': {
    name: 'Dişli Bıçaklar',
    description: 'Testere dişli kesim bıçakları. Ekmek, pasta, köpük, izolasyon ve benzeri malzemelerin dilimlemesinde kullanılan özel diş geometrisine sahip bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'dişli bıçak', 'testere bıçağı', 'serrated knife', 'tırtıklı bıçak',
      // Uygulama
      'ekmek bıçağı', 'pasta bıçağı', 'köpük kesme', 'sünger kesme',
      'izolasyon bıçağı', 'strafor kesme',
      // Sektörel
      'fırın bıçağı', 'gıda dilimleme', 'endüstriyel dilimleme',
      // Teknik
      'wave edge', 'scallop edge', 'diş geometrisi',
      // Ticari
      'dişli bıçak fiyat', 'serrated blade toptan'
    ],
  },
  
  'circular-crusher': {
    name: 'Dairesel Ezici Bıçaklar',
    description: 'Dairesel ezme ve kesme işlemleri için profesyonel bıçaklar. Crusher makinelerinde, kompaktörlerde ve presleme sistemlerinde kullanılan yüksek dayanımlı bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'ezici bıçak', 'crusher blade', 'kırıcı bıçağı', 'dairesel ezici',
      // Makine
      'kompaktör bıçağı', 'pres bıçağı', 'sıkıştırma bıçağı',
      // Teknik
      'yüksek dayanım', 'darbe direnci', 'aşınma direnci',
      // Ticari
      'crusher bıçağı fiyat'
    ],
  },
  
  'derinder-knives': {
    name: 'Et Açma (Derinder) Bıçakları',
    description: 'Profesyonel et işleme ve derinder bıçakları. Et sanayinde deri sıyırma, yağ alma ve porsiyonlama işlemlerinde kullanılan hijyenik paslanmaz bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'derinder bıçağı', 'et açma bıçağı', 'deri sıyırma bıçağı', 'skinning blade',
      // İşlem
      'yağ alma bıçağı', 'porsiyonlama bıçağı', 'trimming bıçağı', 'et işleme bıçağı',
      // Marka
      'Maja derinder', 'Townsend derinder', 'Grasselli bıçağı',
      // Sektörel
      'et fabrikası bıçağı', 'kesimhane bıçağı', 'mezbaha bıçağı',
      // Teknik
      'paslanmaz çelik', 'gıda onaylı', 'bileme servisi',
      // Ticari
      'derinder bıçağı fiyat', 'et bıçağı tedarikçi'
    ],
  },
  
  'logsaw-knives': {
    name: 'Log-Saw Bıçakları',
    description: 'Tuvalet kağıdı ve kağıt havlu için log-saw bıçakları. Kağıt converting tesislerinde rulo kesimi için kullanılan özel geometrili dairesel bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'log saw bıçağı', 'log kesim bıçağı', 'rulo kesim bıçağı', 'tissue bıçağı',
      // Sektörel
      'tuvalet kağıdı bıçağı', 'kağıt havlu bıçağı', 'peçete kesim',
      'tissue converting', 'kağıt bobini kesim',
      // Marka
      'Perini bıçağı', 'PCMC bıçağı', 'Gambini bıçağı',
      // Teknik
      'tungsten karbür', 'HSS', 'bileme servisi',
      // Ticari
      'log saw fiyat', 'tissue bıçağı tedarikçi'
    ],
  },
  
  'core-cutting': {
    name: 'Masura Kesim Bıçakları',
    description: 'Masura ve bobin kesimi için profesyonel bıçaklar. Kağıt, tekstil ve film bobinlerinin masurasını kesen özel tasarım bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'masura bıçağı', 'core cutting blade', 'bobin kesim bıçağı', 'tüp kesim',
      // Malzeme
      'karton masura', 'plastik masura', 'spiral masura',
      // Sektörel
      'kağıt fabrikası', 'tekstil fabrikası', 'film bobini',
      // Teknik
      'dairesel kesim', 'hassas kesim',
      // Ticari
      'masura bıçağı fiyat'
    ],
  },
  
  'case-sealer': {
    name: 'Kutu Kapama - Koli Bandı Bıçakları',
    description: 'Paketleme ve koli bantlama makinaları için kesici bıçaklar. Otomatik bantlama hatlarında bant kesimi için kullanılan keskin ve dayanıklı bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'koli bandı bıçağı', 'case sealer blade', 'bantlama bıçağı', 'tape cutter',
      // Makine
      'koli kapatma makinesi', 'otomatik bantlama', 'paketleme hattı',
      // Marka
      '3M bıçağı', 'Siat bıçağı', 'Belco bıçağı',
      // Teknik
      'keskin kenar', 'uzun ömür', 'hızlı kesim',
      // Ticari
      'bantlama bıçağı fiyat'
    ],
  },
  
  'zig-zag-knives': {
    name: 'Zig Zag Bıçaklar',
    description: 'Zig zag kesim deseni için özel bıçaklar. Kumaş, kağıt ve ambalaj malzemelerinde dekoratif kenar kesimi için kullanılan özel profilli bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'zig zag bıçak', 'zigzag kesici', 'pinking blade', 'dalgalı bıçak',
      // Uygulama
      'kumaş zig zag', 'kağıt kesim', 'dekoratif kenar', 'dikiş önleme',
      // Sektörel
      'tekstil bıçağı', 'kumaş makası', 'terzi makası',
      // Ticari
      'zig zag bıçak fiyat'
    ],
  },
  
  'band-knives': {
    name: 'Şerit Bıçaklar',
    description: 'Şerit testere ve kesim bıçakları. Köpük, sünger, deri, tekstil ve gıda sanayinde yüksek hassasiyetli dilme işlemleri için kullanılan sürekli bant bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'şerit bıçak', 'band knife', 'bant bıçağı', 'endless blade',
      // Sektörel
      'köpük kesme bıçağı', 'sünger dilme', 'deri kesim', 'tekstil dilme',
      'et dilme bıçağı', 'balık dilme', 'gıda şerit bıçak',
      // Teknik
      'kaynaklı şerit', 'paslanmaz şerit', 'karbon şerit', 'bi-metal',
      // Ölçü
      'çeşitli genişlik', 'özel ölçü', 'standart boy',
      // Ticari
      'şerit bıçak fiyat', 'band knife tedarikçi'
    ],
  },
  
  'tray-mold': {
    name: 'Tray (Kase) Kalıp Bıçakları',
    description: 'Tray ve kase kalıp kesimi için profesyonel bıçaklar. Gıda ambalajında kullanılan köpük tray, plastik kase ve termo kap üretiminde kesim bıçakları.',
    seoKeywords: [
      // Ana terimler
      'tray bıçağı', 'kase bıçağı', 'tray mold blade', 'kalıp bıçağı',
      // Sektörel
      'köpük tray', 'EPS kesim', 'plastik kase', 'gıda kabı',
      // Makine
      'termoform kalıp', 'vakum kalıp', 'basınç kalıp',
      // Ticari
      'tray bıçağı fiyat'
    ],
  },
  
  'sausage-peeling': {
    name: 'Sosis Sıyırma Bıçakları',
    description: 'Sosis üretim hatları için sıyırma bıçakları. Doğal ve yapay kılıf soyma işlemlerinde kullanılan özel tasarım bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'sosis sıyırma bıçağı', 'sausage peeling blade', 'kılıf soyma bıçağı',
      // İşlem
      'doğal kılıf soyma', 'yapay kılıf', 'selüloz kılıf', 'kolajen kılıf',
      // Marka
      'Townsend peeler', 'Marel peeler', 'Weber peeler',
      // Sektörel
      'et işleme', 'sosis fabrikası', 'şarküteri',
      // Ticari
      'sosis bıçağı fiyat'
    ],
  },
  
  'cnc-knives': {
    name: 'CNC Bıçakları',
    description: 'CNC makinaları için profesyonel kesici bıçaklar. Dijital kesim merkezlerinde kumaş, deri, kompozit ve ambalaj malzemelerinin otomatik kesimi için özel geometrili bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'CNC bıçağı', 'CNC kesici', 'digital cutter blade', 'otomasyon bıçağı',
      // Marka
      'Zünd bıçağı', 'Esko Kongsberg bıçağı', 'Lectra bıçağı', 'Gerber bıçağı',
      'Bullmer bıçağı', 'FK Group bıçağı', 'Atom bıçağı',
      // Malzeme
      'kumaş CNC', 'deri CNC', 'karbon fiber CNC', 'kompozit CNC',
      'mukavva CNC', 'köpük CNC',
      // Tip
      'oscillating blade', 'drag blade', 'tangential blade', 'kiss cut',
      // Ticari
      'CNC bıçağı fiyat', 'digital cutter tedarikçi'
    ],
  },
  
  'plotter-knives': {
    name: 'Plotter Bıçakları',
    description: 'Dijital kesim plotterları için profesyonel bıçaklar. Vinil kesim, folyo kesim, sticker üretim ve reklam sektöründe kullanılan hassas plotter uçları.',
    seoKeywords: [
      // Ana terimler
      'plotter bıçağı', 'plotter ucu', 'vinyl cutter blade', 'kesici plotter',
      // Marka
      'Roland plotter', 'Graphtec plotter', 'Mimaki plotter', 'Summa plotter',
      'Silhouette bıçağı', 'Cricut bıçağı',
      // Malzeme
      'vinil kesim', 'folyo kesim', 'sticker kesim', 'transfer film',
      'araç giydirme', 'tabela kesim',
      // Tip
      '45 derece', '60 derece', 'standart uç', 'hassas uç',
      // Ticari
      'plotter bıçağı fiyat', 'vinil kesici tedarikçi'
    ],
  },

  // =============================================================================
  // İŞ GÜVENLİĞİ & EL BIÇAKLARI ALT KATEGORİLERİ
  // =============================================================================
  
  'auto-retract': {
    name: 'Otomatik Geri Çekilebilir Bıçaklar',
    description: 'Kesim sonrası bıçak ucunun otomatik olarak geri çekildiği güvenlik bıçakları. İş kazalarını önleyen akıllı mekanizma ile depo, lojistik ve üretim tesislerinde güvenli kesim.',
    seoKeywords: [
      // Ana terimler
      'otomatik geri çekilebilir bıçak', 'auto retract knife', 'güvenlik bıçağı',
      'otomatik bıçak', 'self-retracting knife',
      // Sektörel
      'depo bıçağı', 'lojistik bıçağı', 'fabrika güvenlik', 'iş güvenliği bıçağı',
      // Marka
      'Martor bıçağı', 'Olfa güvenlik', 'Slice güvenlik', 'PHC bıçağı',
      // Uygulama
      'koli açma', 'streç kesme', 'ambalaj açma', 'bant kesme',
      // Ticari
      'güvenlik bıçağı fiyat', 'otomatik bıçak toptan'
    ],
  },
  
  'fixed-blade': {
    name: 'Sabit Uçlu Bıçaklar',
    description: 'Sabit bıçak uçlu profesyonel güvenlik kesiciler. Ağır hizmet uygulamalarında dayanıklı ve güvenli kesim için tasarlanmış ergonomik el bıçakları.',
    seoKeywords: [
      // Ana terimler
      'sabit uçlu bıçak', 'fixed blade knife', 'sabit bıçak', 'güvenlik kesici',
      // Uygulama
      'ağır hizmet bıçağı', 'heavy duty knife', 'endüstriyel el bıçağı',
      // Sektörel
      'depo kesici', 'fabrika bıçağı', 'üretim bıçağı',
      // Ticari
      'sabit bıçak fiyat'
    ],
  },
  
  'safety-cutters': {
    name: 'Güvenlik Bıçakları',
    description: 'İş güvenliği sertifikalı özel tasarım bıçaklar. Kesim derinliği kontrolü, korumalı bıçak ağzı ve ergonomik tasarım ile iş kazalarını minimize eden profesyonel kesiciler.',
    seoKeywords: [
      // Ana terimler
      'güvenlik bıçağı', 'safety cutter', 'iş güvenliği bıçağı', 'güvenli kesici',
      // Özellik
      'kesim derinliği kontrolü', 'korumalı bıçak', 'gizli bıçak', 'concealed blade',
      // Sertifika
      'TÜV onaylı', 'CE belgeli', 'iş güvenliği sertifikalı',
      // Sektörel
      'gıda güvenlik bıçağı', 'depo güvenlik', 'lojistik güvenlik',
      // Marka
      'Martor', 'Slice', 'Klever', 'PHC', 'Secumax',
      // Ticari
      'güvenlik bıçağı fiyat', 'safety cutter toptan', 'iş güvenliği kesici'
    ],
  },
  
  'utility-knives': {
    name: 'Maket Bıçakları',
    description: 'Profesyonel maket ve kesim bıçakları. Genel amaçlı kesim işlerinde kullanılan değiştirilebilir uçlu, ergonomik saplı utility bıçaklar.',
    seoKeywords: [
      // Ana terimler
      'maket bıçağı', 'utility knife', 'kesici bıçak', 'genel amaçlı bıçak',
      // Tip
      'kırılır uçlu maket', 'snap-off blade', 'değiştirilebilir uç',
      'retractable maket', 'ayarlı maket',
      // Uygulama
      'karton kesme', 'kağıt kesme', 'ambalaj açma', 'genel kesim',
      // Marka
      'Stanley maket', 'Olfa maket', 'Würth maket', 'Irwin maket',
      // Ölçü
      '9mm maket', '18mm maket', '25mm maket', 'geniş maket',
      // Ticari
      'maket bıçağı fiyat', 'utility knife toptan'
    ],
  },
  
  'deburring-hobby': {
    name: 'Çapak Alma & Hobi Bıçakları',
    description: 'Detaylı işler, çapak alma ve hobi uygulamaları için özel bıçaklar. Metal, plastik ve ahşap işlemede kenar düzeltme ve hassas kesim için ergonomik el aletleri.',
    seoKeywords: [
      // Ana terimler
      'çapak alma bıçağı', 'deburring tool', 'hobi bıçağı', 'detay bıçağı',
      // Uygulama
      'metal çapak', 'plastik çapak', 'kenar düzeltme', 'pürüz alma',
      'hassas kesim', 'model yapım',
      // Marka
      'Noga çapak', 'Shaviv çapak', 'X-Acto hobi',
      // Sektörel
      'makine atölyesi', 'model atölyesi', 'prototip',
      // Ticari
      'çapak alma fiyat', 'hobi bıçağı toptan'
    ],
  },
  
  'olfa-rotary': {
    name: 'OLFA Dairesel Bıçaklar',
    description: 'OLFA marka dairesel kesim bıçakları ve rotary cutter sistemleri. Kumaş, kağıt, deri ve çeşitli malzemelerin hassas kesiminde dünya standardı kalite.',
    seoKeywords: [
      // Ana terimler
      'OLFA rotary', 'OLFA dairesel', 'rotary cutter', 'döner kesici',
      // Model
      'OLFA RTY-2', 'OLFA RTY-3', '28mm rotary', '45mm rotary', '60mm rotary',
      // Uygulama
      'kumaş kesim', 'deri kesim', 'kağıt kesim', 'patchwork',
      'quilting', 'terzilik', 'dikiş',
      // Ticari
      'OLFA rotary fiyat', 'rotary cutter yedek uç'
    ],
  },
  
  'olfa-craft': {
    name: 'OLFA Falçata Bıçaklar',
    description: 'OLFA profesyonel falçata ve hassas kesim bıçakları serisi. Grafik tasarım, model yapımı ve detaylı kesim işlerinde tercih edilen orijinal Japon kalitesi.',
    seoKeywords: [
      // Ana terimler
      'OLFA falçata', 'OLFA craft knife', 'OLFA hassas kesim', 'OLFA hobi',
      // Model
      'OLFA AK-1', 'OLFA AK-4', 'OLFA CK-2', 'OLFA SVR-1',
      // Uygulama
      'grafik kesim', 'stencil kesim', 'model yapım', 'detay kesim',
      'maske kesim', 'kağıt sanatı',
      // Ticari
      'OLFA falçata fiyat', 'OLFA craft uç'
    ],
  },
  
  'olfa-safety': {
    name: 'OLFA İş Güvenliği Bıçakları',
    description: 'OLFA güvenlik sertifikalı profesyonel kesici ürünler. İş güvenliği standartlarına uygun, kazaları önleyen akıllı mekanizmalı OLFA güvenlik bıçakları.',
    seoKeywords: [
      // Ana terimler
      'OLFA güvenlik', 'OLFA safety knife', 'OLFA iş güvenliği',
      // Model
      'OLFA SK-4', 'OLFA SK-6', 'OLFA SK-9', 'OLFA SK-10', 'OLFA SK-16',
      // Özellik
      'otomatik geri çekilir', 'gizli bıçak', 'güvenli kesim',
      // Sektörel
      'depo güvenlik', 'lojistik bıçağı', 'fabrika güvenlik',
      // Ticari
      'OLFA güvenlik fiyat', 'OLFA safety toptan'
    ],
  },
  
  'blade-disposal': {
    name: 'Muhafaza & Atık Kutuları',
    description: 'Kesici alet atıklarının güvenli şekilde toplanması için muhafaza kutuları. Kullanılmış jilet, bıçak ucu ve kesici aletlerin güvenli bertarafı için iş güvenliği ekipmanları.',
    seoKeywords: [
      // Ana terimler
      'bıçak atık kutusu', 'blade disposal', 'jilet muhafaza', 'kesici atık',
      // Tip
      'jilet toplama kutusu', 'bıçak ucu kutusu', 'sharps container',
      'güvenli bertaraf', 'atık kutusu',
      // Sektörel
      'iş güvenliği ekipmanı', 'atölye ekipmanı', 'fabrika güvenlik',
      // Marka
      'OLFA DC-2', 'OLFA DC-3', 'Martor blade box',
      // Ticari
      'atık kutusu fiyat', 'jilet muhafaza toptan'
    ],
  },
};

// Type tanımları - seoKeywords opsiyonel
export interface CategoryTranslation {
  name: string;
  description: string;
}

export interface SubcategoryTranslation {
  name: string;
  description: string;
  seoKeywords?: string[];
}

export type CategoryTranslations = Record<string, CategoryTranslation>;
export type SubcategoryTranslations = Record<string, SubcategoryTranslation>;
