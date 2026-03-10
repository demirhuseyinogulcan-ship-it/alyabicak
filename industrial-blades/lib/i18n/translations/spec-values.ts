/**
 * Spec Value Translations
 * 
 * Ürün teknik özelliklerinin değerlerini (VALUE) çevirir.
 * Label çevirileri products-extended.ts içindeki specLabelTranslations'da.
 * 
 * KULLANIM:
 * import { getSpecValueTranslation } from '@/lib/i18n/translations/spec-values';
 * const translatedValue = getSpecValueTranslation('Sheffield Çelik', 'en'); // "Sheffield Steel"
 */

export const specValueTranslations: Record<string, Record<string, string>> = {
  // =============================================================================
  // TÜRKÇE (MASTER - Kaynak Değerler)
  // =============================================================================
  tr: {
    // Malzemeler
    'Sheffield Çelik': 'Sheffield Çelik',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'Yüksek Karbonlu Çelik (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'AISI 420 Martensitik Paslanmaz Çelik',
    'AISI 420 Paslanmaz Çelik': 'AISI 420 Paslanmaz Çelik',
    'Silindirik Dairesel Bıçak': 'Silindirik Dairesel Bıçak',
    'Marel, Meyn, Baader, Stork': 'Marel, Meyn, Baader, Stork',
    'CE, Gıda Sınıfı Hijyen': 'CE, Gıda Sınıfı Hijyen',
    'HRC 50-54': 'HRC 50-54',
    'AISI 420 Paslanmaz Çelik + TiN Kaplama': 'AISI 420 Paslanmaz Çelik + TiN Kaplama',
    'AISI 420 Paslanmaz Çelik + PTFE Kaplama': 'AISI 420 Paslanmaz Çelik + PTFE Kaplama',
    'AISI 420 Paslanmaz Çelik + XCD Kaplama': 'AISI 420 Paslanmaz Çelik + XCD Kaplama',
    'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama': 'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama',
    'Yüksek Karbonlu Çelik + TiN Kaplama': 'Yüksek Karbonlu Çelik + TiN Kaplama',
    'Yüksek Karbonlu Çelik + Seramik Kaplama': 'Yüksek Karbonlu Çelik + Seramik Kaplama',
    'Yüksek Karbonlu Çelik + İleri Seramik Kaplama': 'Yüksek Karbonlu Çelik + İleri Seramik Kaplama',
    'Endurium HSS + İleri Seramik Kaplama': 'Endurium HSS + İleri Seramik Kaplama',
    'Tungsten Karbür (WC-Co)': 'Tungsten Karbür (WC-Co)',
    'Yekpare Tungsten Karbür (WC-Co)': 'Yekpare Tungsten Karbür (WC-Co)',
    'Yekpare Zirkonya Seramik (Y-TZP)': 'Yekpare Zirkonya Seramik (Y-TZP)',
    'Zirkonyum Oksit Bazlı Seramik (ZrO₂)': 'Zirkonyum Oksit Bazlı Seramik (ZrO₂)',
    'Paslanmaz Çelik (420HC) + TiN Kaplama': 'Paslanmaz Çelik (420HC) + TiN Kaplama',
    '440C Paslanmaz Çelik': '440C Paslanmaz Çelik',
    'D2 Çelik': 'D2 Çelik',
    'HSS (High Speed Steel - Yüksek Hız Çeliği)': 'HSS (High Speed Steel - Yüksek Hız Çeliği)',
    'Dayanıklı Plastik': 'Dayanıklı Plastik',
    'WC + %6-10 Kobalt bağlayıcı': 'WC + %6-10 Kobalt bağlayıcı',
    '%94 WC + %6 Co': '%94 WC + %6 Co',

    // Kaplamalar
    'TiN (Titanyum Nitrür)': 'TiN (Titanyum Nitrür)',
    'TiN (Titanyum Nitrür) - PVD': 'TiN (Titanyum Nitrür) - PVD',
    'PTFE (Politetrafloroetilen / Teflon)': 'PTFE (Politetrafloroetilen / Teflon)',
    'XCD (Xtreme Carbon Diamond) - DLC': 'XCD (Xtreme Carbon Diamond) - DLC',
    'İleri Seramik Kaplama (Titanyum Bazlı)': 'İleri Seramik Kaplama (Titanyum Bazlı)',
    'Çok Katmanlı İleri Seramik': 'Çok Katmanlı İleri Seramik',
    'PVD': 'PVD',
    'PVD (Fiziksel Buhar Biriktirme)': 'PVD (Fiziksel Buhar Biriktirme)',
    'Standart veya Titanyum Kaplama': 'Standart veya Titanyum Kaplama',

    // Isıl İşlem
    'Kontrollü Atmosfer + Temperleme': 'Kontrollü Atmosfer + Temperleme',
    'Vakum Isıl İşlem': 'Vakum Isıl İşlem',

    // Sertlik Değerleri
    'HRC 58-60': 'HRC 58-60',
    'HRC 58-62': 'HRC 58-62',
    'HRC 59-61': 'HRC 59-61',
    'HRC 54-56': 'HRC 54-56',
    'HRC 62-65': 'HRC 62-65',
    'HRC 64-66 (Substrat) / 3500 HV (Kaplama)': 'HRC 64-66 (Substrat) / 3500 HV (Kaplama)',
    'HRC 59-61 (Substrat) / 2300 HV (Kaplama)': 'HRC 59-61 (Substrat) / 2300 HV (Kaplama)',
    'HRC 59-61 (Substrat) / 3200 HV (Kaplama)': 'HRC 59-61 (Substrat) / 3200 HV (Kaplama)',
    'HRC 54-56 (Substrat)': 'HRC 54-56 (Substrat)',
    'HRC 54-56 (Substrat) / 2300 HV (Kaplama)': 'HRC 54-56 (Substrat) / 2300 HV (Kaplama)',
    'HRC 54-56 (Substrat) / 3200 HV (Kaplama)': 'HRC 54-56 (Substrat) / 3200 HV (Kaplama)',
    'HRC 54-56 (Substrat) / 5000 HV (Kaplama)': 'HRC 54-56 (Substrat) / 5000 HV (Kaplama)',
    'HRC 56-58 | Kaplama: 2300 HV': 'HRC 56-58 | Kaplama: 2300 HV',
    'Ana gövde: HRC 56-58 | Kaplama: 2300 HV': 'Ana gövde: HRC 56-58 | Kaplama: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 2300 HV': 'Ana gövde: HRC 59-61 | Kaplama: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV': 'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV',
    'HRA 92-94 (HRC 75+ eşdeğer)': 'HRA 92-94 (HRC 75+ eşdeğer)',
    'HRA 89-92 (≈HRC 72-76)': 'HRA 89-92 (≈HRC 72-76)',
    'HV 1200-1400': 'HV 1200-1400',
    '1200 HV': '1200 HV',

    // Açılar
    '20°': '20°',
    '22°': '22°',
    '25°': '25°',
    '30°': '30°',

    // Boyutlar
    '38 x 8 x 0.25 mm': '38 x 8 x 0.25 mm',
    '38 x 8 x 0.30 mm': '38 x 8 x 0.30 mm',
    '38 x 8 x 0.36 mm': '38 x 8 x 0.36 mm',
    '38 x 8 x 0.64 mm': '38 x 8 x 0.64 mm',
    '60mm x 22mm': '60mm x 22mm',
    '2x 30mm yarım jilet': '2x 30mm yarım jilet',
    'Geniş Format': 'Geniş Format',

    // Karbon Oranları
    '%0.85-1.00': '%0.85-1.00',
    '%12-14': '%12-14',
    '%12-14 Krom': '%12-14 Krom',
    '%40': '%40',
    '%50-60': '%50-60',

    // Sürtünme Katsayıları
    '<0.1': '<0.1',
    '~0.04': '~0.04',
    '~0.1 (çeliğin 1/5\'i)': '~0.1 (çeliğin 1/5\'i)',

    // Yoğunluk
    '6.05 g/cm³': '6.05 g/cm³',
    '14.5-15.0 g/cm³': '14.5-15.0 g/cm³',
    '14.8 g/cm³': '14.8 g/cm³',

    // Sıcaklık Direnci
    '600°C': '600°C',
    '800°C': '800°C',

    // Renkler
    'Altın Sarısı': 'Altın Sarısı',
    'Beyaz (Bembeyaz Seramik)': 'Beyaz (Bembeyaz Seramik)',
    'Koyu Gri / Siyah': 'Koyu Gri / Siyah',
    'Gri': 'Gri',

    // Kenar Tipleri
    'Düz Kesim Ağzı': 'Düz Kesim Ağzı',
    'Testere Dişli (Serrated)': 'Testere Dişli (Serrated)',
    'Yuvarlak Kenar': 'Yuvarlak Kenar',
    'Yuvarlak Kenar (Traş jileti formu)': 'Yuvarlak Kenar (Traş jileti formu)',

    // Şekiller
    'Dairesel (Circular)': 'Dairesel (Circular)',
    'Oval (Ellipse)': 'Oval (Ellipse)',
    'Yuvarlak (Round)': 'Yuvarlak (Round)',
    'Tam Yıldız (Full Star)': 'Tam Yıldız (Full Star)',
    'Yarım Yıldız (Half Star)': 'Yarım Yıldız (Half Star)',
    'Hava Delikli': 'Hava Delikli',
    'Lazer işlemeli': 'Lazer işlemeli',

    // Yuva Tipleri
    'Yuvasız': 'Yuvasız',
    '2 Kanallı Yuva (Güçlendirilmiş Kavrama)': '2 Kanallı Yuva (Güçlendirilmiş Kavrama)',
    'Ortadan bölünebilir çizik hattı': 'Ortadan bölünebilir çizik hattı',
    'Standart Kapasite': 'Standart Kapasite',

    // Performans
    'Çeliğe göre 10-50x': 'Çeliğe göre 10-50x',
    'Karbon çeliğe göre %25-30 daha güçlü': 'Karbon çeliğe göre %25-30 daha güçlü',
    'Yüksek': 'Yüksek',
    'Çok Yüksek': 'Çok Yüksek',
    'Düşük (ısı yalıtımı)': 'Düşük (ısı yalıtımı)',
    'Yok (İzolator)': 'Yok (İzolator)',
    'İnert (reaktif değil)': 'İnert (reaktif değil)',

    // Mikro Yapı
    'İnce tane (0.5-1.0 µm)': 'İnce tane (0.5-1.0 µm)',

    // Vakum Paketleme Değerleri
    'Sheffield Çelik (Yüksek Karbonlu)': 'Sheffield Çelik (Yüksek Karbonlu)',
    'D2 Takım Çeliği (DIN 1.2379)': 'D2 Takım Çeliği (DIN 1.2379)',
    'HSS M2 (DIN 1.3343)': 'HSS M2 (DIN 1.3343)',
    'AISI 440C Martensitik Paslanmaz': 'AISI 440C Martensitik Paslanmaz',
    'Standart veya TiN PVD (2300 HV)': 'Standart veya TiN PVD (2300 HV)',
    'Ra ≤0.4 µm (Gıda Sınıfı)': 'Ra ≤0.4 µm (Gıda Sınıfı)',
    'Ra ≤0.3 µm (Elektropolisaj)': 'Ra ≤0.3 µm (Elektropolisaj)',
    'Kontör/Profil Takipli Kesim': 'Kontör/Profil Takipli Kesim',
    '600°C (Kırmızı Sertlik)': '600°C (Kırmızı Sertlik)',
    'Düz Kesim (Straight Edge)': 'Düz Kesim (Straight Edge)',
    'Dinamik Dengelenmiş (3000+ RPM)': 'Dinamik Dengelenmiş (3000+ RPM)',
    'Yarım Yıldız (Half Star / Triangle)': 'Yarım Yıldız (Half Star / Triangle)',
    'Dairesel (Circular Rotary)': 'Dairesel (Circular Rotary)',
    'Mikro-Serrated (Testere Dişli)': 'Mikro-Serrated (Testere Dişli)',
    'Yuvarlak (Round) Hava Deliği': 'Yuvarlak (Round) Hava Deliği',
    'Oval (Elips) Hava Deliği': 'Oval (Elips) Hava Deliği',
    'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan': 'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan',
    '±0.02mm CNC hassasiyet': '±0.02mm CNC hassasiyet',
    'Kalın film, Al folyo, PET/PVC rigid': 'Kalın film, Al folyo, PET/PVC rigid',
    'Kontrollü atmosfer fırını': 'Kontrollü atmosfer fırını',
    '%17 Cr (Yüksek Korozyon Direnci)': '%17 Cr (Yüksek Korozyon Direnci)',

    // Tek Kenar Jilet (Single Edge) — B201 Serisi
    'Yüksek Karbonlu Çelik': 'Yüksek Karbonlu Çelik',
    'Paslanmaz Çelik (Stainless Steel)': 'Paslanmaz Çelik (Stainless Steel)',
    'Paslanmaz Çelik + PTFE': 'Paslanmaz Çelik + PTFE',
    'PTFE (Teflon®)': 'PTFE (Teflon®)',
    'HRC 55-58': 'HRC 55-58',
    '0.23mm (0.009")': '0.23mm (0.009")',
    '0.30mm (0.012") — Heavy Duty': '0.30mm (0.012") — Heavy Duty',
    '38×19mm': '38×19mm',
    '38×19mm / 38×17mm': '38×19mm / 38×17mm',
    '2-Facet': '2-Facet',
    '3-Facet': '3-Facet',
    '3-Facet (Ultra Keskin)': '3-Facet (Ultra Keskin)',
    'Alüminyum': 'Alüminyum',
    'Alüminyum / Metal Spine': 'Alüminyum / Metal Spine',
    'Kılıflı / Kılıfsız / 1000 Adet Bulk': 'Kılıflı / Kılıfsız / 1000 Adet Bulk',
    '%13+': '%13+',
    '%40-60': '%40-60',
    // Trapez bıçak spec değerleri
    'Yüksek Karbon Çelik (SK5)': 'Yüksek Karbon Çelik (SK5)',
    '0.63mm (standart) / 1.00mm (paslanmaz)': '0.63mm (standart) / 1.00mm (paslanmaz)',
    '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm': '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm',
    'Trapez (Utility)': 'Trapez (Utility)',
    '2 veya 3 çentik': '2 veya 3 çentik',
    '0-5 delik (konfigürasyona göre)': '0-5 delik (konfigürasyona göre)',
    'Çift taraflı / Tek taraflı bileme': 'Çift taraflı / Tek taraflı bileme',
    'Standart / TiN Kaplama': 'Standart / TiN Kaplama',
    '5, 10, 100 adet (dispenser / kutu)': '5, 10, 100 adet (dispenser / kutu)',
    '0.43mm': '0.43mm',
    '50×19 / 59×19 mm': '50×19 / 59×19 mm',
    '2 çentik': '2 çentik',
    'Deliksiz / 2×6.4mm delik': 'Deliksiz / 2×6.4mm delik',
    '5, 10, 100 adet': '5, 10, 100 adet',
    '1.0mm': '1.0mm',
    '82×25 mm': '82×25 mm',
    'Trapez (Geniş Gövde)': 'Trapez (Geniş Gövde)',
    '2 delik': '2 delik',
    'Tek taraftan tırtıklı kenar': 'Tek taraftan tırtıklı kenar',
    '0.63mm': '0.63mm',
    '61×12.5 mm': '61×12.5 mm',
    'Kompakt Trapez': 'Kompakt Trapez',
    '1 delik': '1 delik',
    '71×17 mm': '71×17 mm',
    'Trapez (Özel Boyut)': 'Trapez (Özel Boyut)',
    '1×6mm delik': '1×6mm delik',
    '27.6×9 mm': '27.6×9 mm',
    'Mikro Trapez': 'Mikro Trapez',
    '3×3.5mm delik': '3×3.5mm delik',
    'Trapez Uzun (L)': 'Trapez Uzun (L)',
    'Standart B207 serisi genişletilmiş': 'Standart B207 serisi genişletilmiş',
    'Trapez XXL (Ekstra Uzun)': 'Trapez XXL (Ekstra Uzun)',
    'B207 serisi ekstra genişletilmiş': 'B207 serisi ekstra genişletilmiş',
    'Karbon / Paslanmaz / TiN Kaplama': 'Karbon / Paslanmaz / TiN Kaplama',
    '0.43 / 0.63 / 1.00 mm': '0.43 / 0.63 / 1.00 mm',
    '100×19 mm (büyük boy) + özel boyutlar': '100×19 mm (büyük boy) + özel boyutlar',
    'Özel Tasarım Trapez': 'Özel Tasarım Trapez',
    'Müşteriye özel (1-5 çentik)': 'Müşteriye özel (1-5 çentik)',
    'Müşteriye özel delik konfigürasyonu': 'Müşteriye özel delik konfigürasyonu',

    // Craft Blade (Maket Bıçağı) spec değerleri
    'SK5 Yüksek Karbonlu Çelik': 'SK5 Yüksek Karbonlu Çelik',
    'Yekpare Seramik / Sheffield Çelik': 'Yekpare Seramik / Sheffield Çelik',
    'Standart / TiN (Titanyum Nitrür)': 'Standart / TiN (Titanyum Nitrür)',
    'Standart / Ekstra Keskin (Black Blade)': 'Standart / Ekstra Keskin (Black Blade)',
    'Testere dişi profili (serrated)': 'Testere dişi profili (serrated)',
    '55° (standart) / 30° (keskin açı)': '55° (standart) / 30° (keskin açı)',
    '60×18×0.50mm': '60×18×0.50mm',
    '80×9×0.40mm': '80×9×0.40mm',
    '89×12×0.50mm': '89×12×0.50mm',
    '92×8.2×0.43mm': '92×8.2×0.43mm',
    '100×18×0.50mm': '100×18×0.50mm',
    '106×25×0.50mm': '106×25×0.50mm',
    '127×25×0.70mm': '127×25×0.70mm',
    '83.3×12.5×0.45mm': '83.3×12.5×0.45mm',
    '5 adet/tüp': '5 adet/tüp',
    '10 adet/tüp': '10 adet/tüp',
    '3 adet/paket': '3 adet/paket',

    // 3D Jilet & Slit Bıçak boyutları
    '43x22mm': '43x22mm',
    '57x19mm': '57x19mm',
    '60x22mm': '60x22mm',
    '38x19mm': '38x19mm',
    '61×12.5×0.63mm': '61×12.5×0.63mm',
    '71×17×0.63mm': '71×17×0.63mm',
    '27.6×9×0.43mm': '27.6×9×0.43mm',
    '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm': '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm',
    '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm': '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm',
    '0.15mm, 0.20mm, 0.30mm': '0.15mm, 0.20mm, 0.30mm',
    '55°': '55°',

    // Tek Kenar Jilet ek değerleri
    'Yüksek Karbonlu Çelik (High Carbon Steel)': 'Yüksek Karbonlu Çelik (High Carbon Steel)',
    'Korozyona dayanıklı yüzey işlemi': 'Korozyona dayanıklı yüzey işlemi',
    'Kontrollü atmosfer sertleştirme': 'Kontrollü atmosfer sertleştirme',
    '38x19mm (kılıflı) / 38x17mm (kılıfsız)': '38x19mm (kılıflı) / 38x17mm (kılıfsız)',
    '%13+ Krom içeriği': '%13+ Krom içeriği',
    'Doğal paslanmaz — ek kaplama gerektirmez': 'Doğal paslanmaz — ek kaplama gerektirmez',
    'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)': 'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)',
    'PTFE (Polytetrafluoroethylene / Teflon®)': 'PTFE (Polytetrafluoroethylene / Teflon®)',
    '%40-60 sürtünme azaltma': '%40-60 sürtünme azaltma',
    '0.30mm (0.012")': '0.30mm (0.012")',

    // Hobi bıçakı spec değerleri
    '#11 Tipi': '#11 Tipi',
    '#12 Tipi': '#12 Tipi',
    '#13 Tipi': '#13 Tipi',
    '#14 Tipi': '#14 Tipi',
    '#25 Geniş Gövde': '#25 Geniş Gövde',
    'Eğimli Uç': 'Eğimli Uç',
    'Geniş Profil — Büyük': 'Geniş Profil — Büyük',
    'Kompakt Eğimli Uç — Küçük': 'Kompakt Eğimli Uç — Küçük',
    'Kanca Form': 'Kanca Form',
    'Düz Kenar (Chisel)': 'Düz Kenar (Chisel)',
    'Düz Kenar — Çoklu Boyut': 'Düz Kenar — Çoklu Boyut',
    'Eğimli Geniş Profil': 'Eğimli Geniş Profil',
    'Sivri Uç — Geniş Gövde': 'Sivri Uç — Geniş Gövde',
    'Kavisli Profil': 'Kavisli Profil',
    'Kompakt Geniş Profil': 'Kompakt Geniş Profil',
    'OLFA KB Uyumlu': 'OLFA KB Uyumlu',
    'Ultra İnce Kompakt': 'Ultra İnce Kompakt',
    'OLFA KB4-R Uyumlu': 'OLFA KB4-R Uyumlu',
    'Dar Dişli (Narrow Serrated)': 'Dar Dişli (Narrow Serrated)',
    'Geniş Dişli (Wide Serrated)': 'Geniş Dişli (Wide Serrated)',
    'OLFA AK Serisi': 'OLFA AK Serisi',
    'OLFA AK-4 Serisi': 'OLFA AK-4 Serisi',
    'OLFA KB4-S/5 uyumlu': 'OLFA KB4-S/5 uyumlu',
    'OLFA KB4-F/5 uyumlu': 'OLFA KB4-F/5 uyumlu',
    'Dişli Kenar': 'Dişli Kenar',
    'Çift taraflı': 'Çift taraflı',
    'Tek taraflı': 'Tek taraflı',
    '1 Çentik': '1 Çentik',
    '12\'li Tüp': '12\'li Tüp',
    'Standart': 'Standart',
    'Karbon Çelik': 'Karbon Çelik',
    'Karbon Çelik / TiN Kaplama': 'Karbon Çelik / TiN Kaplama',
    'Supaslit': 'Supaslit',
    // Scalpel / Bisturi blade values
    'Non-Steril': 'Non-Steril',
    '#3 Sap Uyumlu': '#3 Sap Uyumlu',
    '#4 Sap Uyumlu': '#4 Sap Uyumlu',
    '100 Adet/Kutu (20×5 Şerit)': '100 Adet/Kutu (20×5 Şerit)',
    'No.10 — Kavisli Kesim Kenarı': 'No.10 — Kavisli Kesim Kenarı',
    'No.10A — Düz Geniş Karınlı': 'No.10A — Düz Geniş Karınlı',
    'No.11 — Üçgen Sivri Uçlu': 'No.11 — Üçgen Sivri Uçlu',
    'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli': 'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli',
    'No.15 — No.10 Küçük Versiyon, Kavisli Kenar': 'No.15 — No.10 Küçük Versiyon, Kavisli Kenar',
    'No.20 — No.10 Büyük Versiyon, Kavisli Kenar': 'No.20 — No.10 Büyük Versiyon, Kavisli Kenar',
    'No.21 — Büyük Üçgen Profil': 'No.21 — Büyük Üçgen Profil',
    'No.22 — No.20 Büyük Versiyon, Kavisli Kenar': 'No.22 — No.20 Büyük Versiyon, Kavisli Kenar',
    'No.23 — Yaprak Şekilli, Uzun İnsizyon': 'No.23 — Yaprak Şekilli, Uzun İnsizyon',
    'No.24 — Geniş Düz Açılı Kenar': 'No.24 — Geniş Düz Açılı Kenar',
    'No.25 — Öne Bakan Düz Kenar': 'No.25 — Öne Bakan Düz Kenar',
    'No.26 — Üçgen Düz Kenar, Aşağı Açılı': 'No.26 — Üçgen Düz Kenar, Aşağı Açılı',
    'No.27 — Geniş Bıçak Profili': 'No.27 — Geniş Bıçak Profili',

    // Kesik Elyaf Bıçağı Malzemeleri
    'Paslanmaz Çelik': 'Paslanmaz Çelik',
    'Paslanmaz Çelik + TiN Kaplama': 'Paslanmaz Çelik + TiN Kaplama',
    'Yekpare Tungsten Karbür': 'Yekpare Tungsten Karbür',

    // Kesik Elyaf Bıçağı Uyumluluk
    'Mark IV Elyaf Kesim Makinesi': 'Mark IV Elyaf Kesim Makinesi',
    'Mark V Elyaf Kesim Makinesi': 'Mark V Elyaf Kesim Makinesi',
    'Herkül Elyaf Kesim Makinesi': 'Herkül Elyaf Kesim Makinesi',
    'Krupp Elyaf Kesim Makinesi': 'Krupp Elyaf Kesim Makinesi',

    // Kesik Elyaf Bıçağı Kenar Tipleri
    'Çentikli': 'Çentikli',
    'Düz (Çentiksiz)': 'Düz (Çentiksiz)',

    // B581 Cam Elyaf Bıçağı Değerleri
    'Tungsten Karbür Alaşımlı Çelik': 'Tungsten Karbür Alaşımlı Çelik',
    '30° Çift Taraflı': '30° Çift Taraflı',
    '25 adet / deste': '25 adet / deste',

    // B657 Dairesel Jilet Değerleri
    'Yüksek Karbonlu Çelik / Paslanmaz Çelik': 'Yüksek Karbonlu Çelik / Paslanmaz Çelik',
    '18mm / 28mm / 45mm / 60mm': '18mm / 28mm / 45mm / 60mm',
    '0.30mm – 0.35mm': '0.30mm – 0.35mm',
    'OLFA Rotary Cutter': 'OLFA Rotary Cutter',
    'Altıgen / 3 Çentik': 'Altıgen / 3 Çentik',

    // 2CS1 Beşgen Bıçak Değerleri
    'Yekpare Tungsten Karbür / Yekpare Seramik': 'Yekpare Tungsten Karbür / Yekpare Seramik',
    'HRC 90+ (Tungsten) / HV 1600+ (Seramik)': 'HRC 90+ (Tungsten) / HV 1600+ (Seramik)',
    '66/63/40 × 0.54 mm': '66/63/40 × 0.54 mm',
    '2 × 4 mm': '2 × 4 mm',
    'Beşgen (Pentagon)': 'Beşgen (Pentagon)',

    // B084.075 Lamel (Yaprak) Bıçak Değerleri
    'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür': 'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür',
    'HV 1200+ (Seramik) / HRC 90+ (Tungsten)': 'HV 1200+ (Seramik) / HRC 90+ (Tungsten)',
    '84/80 × 7.5 × 1.0 mm': '84/80 × 7.5 × 1.0 mm',
    'Lamel / Yaprak (Lamella / Leaf)': 'Lamel / Yaprak (Lamella / Leaf)',

    // B575 / B724 Mikrotom Jileti Değerleri
    'Paslanmaz Çelik + Kaplama': 'Paslanmaz Çelik + Kaplama',
    'Alçak Profil (Low Profile)': 'Alçak Profil (Low Profile)',
    'Yüksek Profil (High Profile)': 'Yüksek Profil (High Profile)',
    '3 Açılı Bileme (Triple Facet)': '3 Açılı Bileme (Triple Facet)',
    'PTFE / Platin-Krom Kaplama': 'PTFE / Platin-Krom Kaplama',
    'PTFE / Platin-Krom / Seramik Kaplama': 'PTFE / Platin-Krom / Seramik Kaplama',
    'Non-Steril / Endüstriyel Kalite': 'Non-Steril / Endüstriyel Kalite',
    'Leica, Thermo, Sakura, SLEE': 'Leica, Thermo, Sakura, SLEE',
    '50 Adet/Kutu': '50 Adet/Kutu',

    // B723 LASIK / Mikrokeratom Jileti Değerleri
    '2 Yuva (Double Slot)': '2 Yuva (Double Slot)',
    '1 Yuva (Single Slot)': '1 Yuva (Single Slot)',
    'Yağdan Arındırılmış (Oil-Free)': 'Yağdan Arındırılmış (Oil-Free)',
    'Bireysel Steril Paketleme': 'Bireysel Steril Paketleme',
    'Moria, Hansatome, Zyoptix': 'Moria, Hansatome, Zyoptix',
    'Amadeus, Carriazo-Barraquer, Schwind': 'Amadeus, Carriazo-Barraquer, Schwind',
    '5 Adet/Kutu (Bireysel Steril)': '5 Adet/Kutu (Bireysel Steril)',

    // B621 Cam Kazıyıcı Jilet Değerleri
    'Paslanmaz Çelik (Rostfrei)': 'Paslanmaz Çelik (Rostfrei)',
    '3 Delik': '3 Delik',
    'Laklı': 'Laklı',
    'Hassas Endüstriyel Bileme': 'Hassas Endüstriyel Bileme',
    '60mm / 80mm / 100mm / 150mm': '60mm / 80mm / 100mm / 150mm',

    // B204 Klasik Jilet (Endüstriyel) Değerleri
    '43×22×0.10mm (37mm Kesim Kenarı)': '43×22×0.10mm (37mm Kesim Kenarı)',
    '0.10mm': '0.10mm',
    'Tek Kenar (Single Edge)': 'Tek Kenar (Single Edge)',
    'Standart / PTFE Kaplamalı': 'Standart / PTFE Kaplamalı',
    'Yağlı / Yağsız': 'Yağlı / Yağsız',
    '250li Kutu / 2000li Çubuklu Kutu': '250li Kutu / 2000li Çubuklu Kutu',

    // B684/B685 Klasik Jilet (Medikal) Değerleri
    '38×19×0.10mm': '38×19×0.10mm',
    'Kaplamalı': 'Kaplamalı',
    '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)': '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)',

    // B207 XXL Alçı Levha Bıçağı Değerleri
    '170×19×0.80mm': '170×19×0.80mm',
    '0.80mm': '0.80mm',
    '2 Çentik + 4 Delik': '2 Çentik + 4 Delik',

    // OK Bıçak (Arrow Blade) Değerleri
    '30.4×25.0×0.50mm': '30.4×25.0×0.50mm',
    '0.50mm': '0.50mm',
    'Çift Taraflı Bileme (Double Edge)': 'Çift Taraflı Bileme (Double Edge)',
    '2 Açık Yuva (Slot) + 1 Delik': '2 Açık Yuva (Slot) + 1 Delik',
  },

  // =============================================================================
  // ENGLISH
  // =============================================================================
  en: {
    // Materials
    'Sheffield Çelik': 'Sheffield Steel',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'High Carbon Steel (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'AISI 420 Martensitic Stainless Steel',
    'AISI 420 Paslanmaz Çelik': 'AISI 420 Stainless Steel',
    'Silindirik Dairesel Bıçak': 'Cylindrical Circular Blade',
    'Marel, Meyn, Baader, Stork': 'Marel, Meyn, Baader, Stork',
    'CE, Gıda Sınıfı Hijyen': 'CE, Food-Grade Hygiene',
    'HRC 50-54': 'HRC 50-54',
    'AISI 420 Paslanmaz Çelik + TiN Kaplama': 'AISI 420 Stainless Steel + TiN Coating',
    'AISI 420 Paslanmaz Çelik + PTFE Kaplama': 'AISI 420 Stainless Steel + PTFE Coating',
    'AISI 420 Paslanmaz Çelik + XCD Kaplama': 'AISI 420 Stainless Steel + XCD Coating',
    'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama': 'AISI 420 Stainless Steel + Advanced Ceramic Coating',
    'Yüksek Karbonlu Çelik + TiN Kaplama': 'High Carbon Steel + TiN Coating',
    'Yüksek Karbonlu Çelik + Seramik Kaplama': 'High Carbon Steel + Ceramic Coating',
    'Yüksek Karbonlu Çelik + İleri Seramik Kaplama': 'High Carbon Steel + Advanced Ceramic Coating',
    'Endurium HSS + İleri Seramik Kaplama': 'Endurium HSS + Advanced Ceramic Coating',
    'Tungsten Karbür (WC-Co)': 'Tungsten Carbide (WC-Co)',
    'Yekpare Tungsten Karbür (WC-Co)': 'Solid Tungsten Carbide (WC-Co)',
    'Yekpare Zirkonya Seramik (Y-TZP)': 'Solid Zirconia Ceramic (Y-TZP)',
    'Zirkonyum Oksit Bazlı Seramik (ZrO₂)': 'Zirconium Oxide Based Ceramic (ZrO₂)',
    'Paslanmaz Çelik (420HC) + TiN Kaplama': 'Stainless Steel (420HC) + TiN Coating',
    '440C Paslanmaz Çelik': '440C Stainless Steel',
    'D2 Çelik': 'D2 Steel',
    'HSS (High Speed Steel - Yüksek Hız Çeliği)': 'HSS (High Speed Steel)',
    'Dayanıklı Plastik': 'Durable Plastic',
    'WC + %6-10 Kobalt bağlayıcı': 'WC + 6-10% Cobalt Binder',
    '%94 WC + %6 Co': '94% WC + 6% Co',

    // Coatings
    'TiN (Titanyum Nitrür)': 'TiN (Titanium Nitride)',
    'TiN (Titanyum Nitrür) - PVD': 'TiN (Titanium Nitride) - PVD',
    'PTFE (Politetrafloroetilen / Teflon)': 'PTFE (Polytetrafluoroethylene / Teflon)',
    'XCD (Xtreme Carbon Diamond) - DLC': 'XCD (Xtreme Carbon Diamond) - DLC',
    'İleri Seramik Kaplama (Titanyum Bazlı)': 'Advanced Ceramic Coating (Titanium Based)',
    'Çok Katmanlı İleri Seramik': 'Multi-Layer Advanced Ceramic',
    'PVD': 'PVD',
    'PVD (Fiziksel Buhar Biriktirme)': 'PVD (Physical Vapor Deposition)',
    'Standart veya Titanyum Kaplama': 'Standard or Titanium Coating',

    // Heat Treatment
    'Kontrollü Atmosfer + Temperleme': 'Controlled Atmosphere + Tempering',
    'Vakum Isıl İşlem': 'Vacuum Heat Treatment',

    // Hardness Values (keep as-is, international standard)
    'HRC 58-60': 'HRC 58-60',
    'HRC 58-62': 'HRC 58-62',
    'HRC 59-61': 'HRC 59-61',
    'HRC 54-56': 'HRC 54-56',
    'HRC 62-65': 'HRC 62-65',
    'HRC 64-66 (Substrat) / 3500 HV (Kaplama)': 'HRC 64-66 (Substrate) / 3500 HV (Coating)',
    'HRC 59-61 (Substrat) / 2300 HV (Kaplama)': 'HRC 59-61 (Substrate) / 2300 HV (Coating)',
    'HRC 59-61 (Substrat) / 3200 HV (Kaplama)': 'HRC 59-61 (Substrate) / 3200 HV (Coating)',
    'HRC 54-56 (Substrat)': 'HRC 54-56 (Substrate)',
    'HRC 54-56 (Substrat) / 2300 HV (Kaplama)': 'HRC 54-56 (Substrate) / 2300 HV (Coating)',
    'HRC 54-56 (Substrat) / 3200 HV (Kaplama)': 'HRC 54-56 (Substrate) / 3200 HV (Coating)',
    'HRC 54-56 (Substrat) / 5000 HV (Kaplama)': 'HRC 54-56 (Substrate) / 5000 HV (Coating)',
    'HRC 56-58 | Kaplama: 2300 HV': 'HRC 56-58 | Coating: 2300 HV',
    'Ana gövde: HRC 56-58 | Kaplama: 2300 HV': 'Body: HRC 56-58 | Coating: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 2300 HV': 'Body: HRC 59-61 | Coating: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV': 'Body: HRC 59-61 | Coating: 3200+ HV',
    'HRA 92-94 (HRC 75+ eşdeğer)': 'HRA 92-94 (HRC 75+ equivalent)',
    'HRA 89-92 (≈HRC 72-76)': 'HRA 89-92 (≈HRC 72-76)',
    'HV 1200-1400': 'HV 1200-1400',
    '1200 HV': '1200 HV',

    // Angles (international)
    '20°': '20°',
    '22°': '22°',
    '25°': '25°',
    '30°': '30°',

    // Dimensions (international)
    '38 x 8 x 0.25 mm': '38 x 8 x 0.25 mm',
    '38 x 8 x 0.30 mm': '38 x 8 x 0.30 mm',
    '38 x 8 x 0.36 mm': '38 x 8 x 0.36 mm',
    '38 x 8 x 0.64 mm': '38 x 8 x 0.64 mm',
    '60mm x 22mm': '60mm x 22mm',
    '2x 30mm yarım jilet': '2x 30mm half blade',
    'Geniş Format': 'Wide Format',

    // Carbon Content
    '%0.85-1.00': '0.85-1.00%',
    '%12-14': '12-14%',
    '%12-14 Krom': '12-14% Chromium',
    '%40': '40%',
    '%50-60': '50-60%',

    // Friction Coefficients
    '<0.1': '<0.1',
    '~0.04': '~0.04',
    '~0.1 (çeliğin 1/5\'i)': '~0.1 (1/5 of steel)',

    // Density (international)
    '6.05 g/cm³': '6.05 g/cm³',
    '14.5-15.0 g/cm³': '14.5-15.0 g/cm³',
    '14.8 g/cm³': '14.8 g/cm³',

    // Temperature Resistance (international)
    '600°C': '600°C',
    '800°C': '800°C',

    // Colors
    'Altın Sarısı': 'Golden',
    'Beyaz (Bembeyaz Seramik)': 'White (Pure White Ceramic)',
    'Koyu Gri / Siyah': 'Dark Gray / Black',
    'Gri': 'Gray',

    // Edge Types
    'Düz Kesim Ağzı': 'Straight Cutting Edge',
    'Testere Dişli (Serrated)': 'Serrated',
    'Yuvarlak Kenar': 'Round Edge',
    'Yuvarlak Kenar (Traş jileti formu)': 'Round Edge (Razor blade form)',

    // Shapes
    'Dairesel (Circular)': 'Circular',
    'Oval (Ellipse)': 'Elliptical',
    'Yuvarlak (Round)': 'Round',
    'Tam Yıldız (Full Star)': 'Full Star',
    'Yarım Yıldız (Half Star)': 'Half Star',
    'Hava Delikli': 'Ventilated',
    'Lazer işlemeli': 'Laser Processed',

    // Slot Types
    'Yuvasız': 'Slotless',
    '2 Kanallı Yuva (Güçlendirilmiş Kavrama)': '2 Channel Slot (Reinforced Grip)',
    'Ortadan bölünebilir çizik hattı': 'Center snap line',
    'Standart Kapasite': 'Standard Capacity',

    // Performance
    'Çeliğe göre 10-50x': '10-50x compared to steel',
    'Karbon çeliğe göre %25-30 daha güçlü': '25-30% stronger than carbon steel',
    'Yüksek': 'High',
    'Çok Yüksek': 'Very High',
    'Düşük (ısı yalıtımı)': 'Low (thermal insulation)',
    'Yok (İzolator)': 'None (Insulator)',
    'İnert (reaktif değil)': 'Inert (non-reactive)',

    // Microstructure
    'İnce tane (0.5-1.0 µm)': 'Fine grain (0.5-1.0 µm)',

    // Vacuum Packaging Values
    'Sheffield Çelik (Yüksek Karbonlu)': 'Sheffield High-Carbon Steel',
    'D2 Takım Çeliği (DIN 1.2379)': 'D2 Tool Steel (DIN 1.2379)',
    'HSS M2 (DIN 1.3343)': 'HSS M2 High-Speed Steel (DIN 1.3343)',
    'AISI 440C Martensitik Paslanmaz': 'AISI 440C Martensitic Stainless',
    'Standart veya TiN PVD (2300 HV)': 'Standard or TiN PVD (2300 HV)',
    'Ra ≤0.4 µm (Gıda Sınıfı)': 'Ra ≤0.4 µm (Food-Grade)',
    'Ra ≤0.3 µm (Elektropolisaj)': 'Ra ≤0.3 µm (Electropolished)',
    'Kontör/Profil Takipli Kesim': 'Contour/Profile-Tracking Cut',
    '600°C (Kırmızı Sertlik)': '600°C (Red Hardness)',
    'Düz Kesim (Straight Edge)': 'Straight Cut (Straight Edge)',
    'Dinamik Dengelenmiş (3000+ RPM)': 'Dynamically Balanced (3000+ RPM)',
    'Yarım Yıldız (Half Star / Triangle)': 'Half Star (Triangle)',
    'Dairesel (Circular Rotary)': 'Circular (Rotary)',
    'Mikro-Serrated (Testere Dişli)': 'Micro-Serrated (Saw-Tooth)',
    'Yuvarlak (Round) Hava Deliği': 'Round Air Hole',
    'Oval (Elips) Hava Deliği': 'Oval (Elliptical) Air Hole',
    'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan': '40% wider area compared to round',
    '±0.02mm CNC hassasiyet': '±0.02mm CNC Precision',
    'Kalın film, Al folyo, PET/PVC rigid': 'Thick film, Al foil, PET/PVC rigid',
    'Kontrollü atmosfer fırını': 'Controlled Atmosphere Furnace',
    '%17 Cr (Yüksek Korozyon Direnci)': '17% Cr (High Corrosion Resistance)',

    // Single Edge Blades — B201 Series
    'Yüksek Karbonlu Çelik': 'High Carbon Steel',
    'Paslanmaz Çelik (Stainless Steel)': 'Stainless Steel',
    'Paslanmaz Çelik + PTFE': 'Stainless Steel + PTFE',
    'PTFE (Teflon®)': 'PTFE (Teflon®)',
    'HRC 55-58': 'HRC 55-58',
    '0.23mm (0.009")': '0.23mm (0.009")',
    '0.30mm (0.012") — Heavy Duty': '0.30mm (0.012") — Heavy Duty',
    '38×19mm': '38×19mm',
    '38×19mm / 38×17mm': '38×19mm / 38×17mm',
    '2-Facet': '2-Facet',
    '3-Facet': '3-Facet',
    '3-Facet (Ultra Keskin)': '3-Facet (Ultra Sharp)',
    'Alüminyum': 'Aluminum',
    'Alüminyum / Metal Spine': 'Aluminum / Metal Spine',
    'Kılıflı / Kılıfsız / 1000 Adet Bulk': 'Cased / Uncased / 1000-Count Bulk',
    '%13+': '13%+',
    '%40-60': '40-60%',
    // Trapezoid blade spec values
    'Yüksek Karbon Çelik (SK5)': 'High Carbon Steel (SK5)',
    '0.63mm (standart) / 1.00mm (paslanmaz)': '0.63mm (standard) / 1.00mm (stainless)',
    '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm': '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm',
    'Trapez (Utility)': 'Trapezoid (Utility)',
    '2 veya 3 çentik': '2 or 3 notches',
    '0-5 delik (konfigürasyona göre)': '0-5 holes (by configuration)',
    'Çift taraflı / Tek taraflı bileme': 'Double-edge / Single-edge grind',
    'Standart / TiN Kaplama': 'Standard / TiN Coating',
    '5, 10, 100 adet (dispenser / kutu)': '5, 10, 100 pcs (dispenser / box)',
    '0.43mm': '0.43mm',
    '50×19 / 59×19 mm': '50×19 / 59×19 mm',
    '2 çentik': '2 notches',
    'Deliksiz / 2×6.4mm delik': 'No holes / 2×6.4mm holes',
    '5, 10, 100 adet': '5, 10, 100 pcs',
    '1.0mm': '1.0mm',
    '82×25 mm': '82×25 mm',
    'Trapez (Geniş Gövde)': 'Trapezoid (Wide Body)',
    '2 delik': '2 holes',
    'Tek taraftan tırtıklı kenar': 'Single-side serrated edge',
    '0.63mm': '0.63mm',
    '61×12.5 mm': '61×12.5 mm',
    'Kompakt Trapez': 'Compact Trapezoid',
    '1 delik': '1 hole',
    '71×17 mm': '71×17 mm',
    'Trapez (Özel Boyut)': 'Trapezoid (Special Size)',
    '1×6mm delik': '1×6mm hole',
    '27.6×9 mm': '27.6×9 mm',
    'Mikro Trapez': 'Micro Trapezoid',
    '3×3.5mm delik': '3×3.5mm holes',
    'Trapez Uzun (L)': 'Trapezoid Long (L)',
    'Standart B207 serisi genişletilmiş': 'Standard B207 series extended',
    'Trapez XXL (Ekstra Uzun)': 'Trapezoid XXL (Extra Long)',
    'B207 serisi ekstra genişletilmiş': 'B207 series extra extended',
    'Karbon / Paslanmaz / TiN Kaplama': 'Carbon / Stainless / TiN Coating',
    '0.43 / 0.63 / 1.00 mm': '0.43 / 0.63 / 1.00 mm',
    '100×19 mm (büyük boy) + özel boyutlar': '100×19 mm (large) + custom sizes',
    'Özel Tasarım Trapez': 'Custom Design Trapezoid',
    'Müşteriye özel (1-5 çentik)': 'Custom (1-5 notches)',
    'Müşteriye özel delik konfigürasyonu': 'Custom hole configuration',

    // Craft Blade spec values
    'SK5 Yüksek Karbonlu Çelik': 'SK5 High Carbon Steel',
    'Yekpare Seramik / Sheffield Çelik': 'Solid Ceramic / Sheffield Steel',
    'Standart / TiN (Titanyum Nitrür)': 'Standard / TiN (Titanium Nitride)',
    'Standart / Ekstra Keskin (Black Blade)': 'Standard / Extra Sharp (Black Blade)',
    'Testere dişi profili (serrated)': 'Serrated Edge Profile',
    '55° (standart) / 30° (keskin açı)': '55° (standard) / 30° (sharp angle)',
    '60×18×0.50mm': '60×18×0.50mm',
    '80×9×0.40mm': '80×9×0.40mm',
    '89×12×0.50mm': '89×12×0.50mm',
    '92×8.2×0.43mm': '92×8.2×0.43mm',
    '100×18×0.50mm': '100×18×0.50mm',
    '106×25×0.50mm': '106×25×0.50mm',
    '127×25×0.70mm': '127×25×0.70mm',
    '83.3×12.5×0.45mm': '83.3×12.5×0.45mm',
    '5 adet/tüp': '5 pcs/tube',
    '10 adet/tüp': '10 pcs/tube',
    '3 adet/paket': '3 pcs/pack',

    // 3D Blade & Slitter dimensions
    '43x22mm': '43x22mm',
    '57x19mm': '57x19mm',
    '60x22mm': '60x22mm',
    '38x19mm': '38x19mm',
    '61×12.5×0.63mm': '61×12.5×0.63mm',
    '71×17×0.63mm': '71×17×0.63mm',
    '27.6×9×0.43mm': '27.6×9×0.43mm',
    '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm': '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm',
    '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm': '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm',
    '0.15mm, 0.20mm, 0.30mm': '0.15mm, 0.20mm, 0.30mm',
    '55°': '55°',

    // Single Edge Blade additional values
    'Yüksek Karbonlu Çelik (High Carbon Steel)': 'High Carbon Steel',
    'Korozyona dayanıklı yüzey işlemi': 'Corrosion-Resistant Surface Treatment',
    'Kontrollü atmosfer sertleştirme': 'Controlled Atmosphere Hardening',
    '38x19mm (kılıflı) / 38x17mm (kılıfsız)': '38x19mm (cased) / 38x17mm (uncased)',
    '%13+ Krom içeriği': '13%+ Chromium Content',
    'Doğal paslanmaz — ek kaplama gerektirmez': 'Naturally Stainless — No Additional Coating Required',
    'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)': 'Stainless Steel + PTFE Coating',
    'PTFE (Polytetrafluoroethylene / Teflon®)': 'PTFE (Polytetrafluoroethylene / Teflon®)',
    '%40-60 sürtünme azaltma': '40-60% Friction Reduction',
    '0.30mm (0.012")': '0.30mm (0.012")',

    // Hobby blade spec values
    '#11 Tipi': '#11 Type',
    '#12 Tipi': '#12 Type',
    '#13 Tipi': '#13 Type',
    '#14 Tipi': '#14 Type',
    '#25 Geniş Gövde': '#25 Wide Body',
    'Eğimli Uç': 'Angled Tip',
    'Geniş Profil — Büyük': 'Wide Profile — Large',
    'Kompakt Eğimli Uç — Küçük': 'Compact Angled Tip — Small',
    'Kanca Form': 'Hook Profile',
    'Düz Kenar (Chisel)': 'Flat Edge (Chisel)',
    'Düz Kenar — Çoklu Boyut': 'Flat Edge — Multi-Size',
    'Eğimli Geniş Profil': 'Angled Wide Profile',
    'Sivri Uç — Geniş Gövde': 'Pointed Tip — Wide Body',
    'Kavisli Profil': 'Curved Profile',
    'Kompakt Geniş Profil': 'Compact Wide Profile',
    'OLFA KB Uyumlu': 'OLFA KB Compatible',
    'Ultra İnce Kompakt': 'Ultra Thin Compact',
    'OLFA KB4-R Uyumlu': 'OLFA KB4-R Compatible',
    'Dar Dişli (Narrow Serrated)': 'Narrow Serrated',
    'Geniş Dişli (Wide Serrated)': 'Wide Serrated',
    'OLFA AK Serisi': 'OLFA AK Series',
    'OLFA AK-4 Serisi': 'OLFA AK-4 Series',
    'OLFA KB4-S/5 uyumlu': 'OLFA KB4-S/5 Compatible',
    'OLFA KB4-F/5 uyumlu': 'OLFA KB4-F/5 Compatible',
    'Dişli Kenar': 'Serrated Edge',
    'Çift taraflı': 'Double-edged',
    'Tek taraflı': 'Single-edged',
    '1 Çentik': '1 Notch',
    '12\'li Tüp': 'Tube of 12',
    'Standart': 'Standard',
    'Karbon Çelik': 'Carbon Steel',
    'Karbon Çelik / TiN Kaplama': 'Carbon Steel / TiN Coating',
    'Supaslit': 'Supaslit',
    // Scalpel / Bisturi blade values
    'Non-Steril': 'Non-Sterile (Industrial Grade)',
    '#3 Sap Uyumlu': '#3 Handle Compatible (Bard-Parker)',
    '#4 Sap Uyumlu': '#4 Handle Compatible (Bard-Parker)',
    '100 Adet/Kutu (20×5 Şerit)': '100 pcs/box (20×5 strips)',
    'No.10 — Kavisli Kesim Kenarı': 'No.10 — Curved Cutting Edge',
    'No.10A — Düz Geniş Karınlı': 'No.10A — Flat Wide-Belly Profile',
    'No.11 — Üçgen Sivri Uçlu': 'No.11 — Triangular Pointed Tip',
    'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli': 'No.12 — Crescent/Hook Shape, Inside Edge Sharpened',
    'No.15 — No.10 Küçük Versiyon, Kavisli Kenar': 'No.15 — Smaller No.10 Version, Curved Edge',
    'No.20 — No.10 Büyük Versiyon, Kavisli Kenar': 'No.20 — Larger No.10 Version, Curved Edge',
    'No.21 — Büyük Üçgen Profil': 'No.21 — Large Triangular Profile',
    'No.22 — No.20 Büyük Versiyon, Kavisli Kenar': 'No.22 — Larger No.20 Version, Curved Edge',
    'No.23 — Yaprak Şekilli, Uzun İnsizyon': 'No.23 — Leaf-Shaped, Long Incision',
    'No.24 — Geniş Düz Açılı Kenar': 'No.24 — Wide Flat Angled Edge',
    'No.25 — Öne Bakan Düz Kenar': 'No.25 — Front-Facing Straight Edge',
    'No.26 — Üçgen Düz Kenar, Aşağı Açılı': 'No.26 — Triangular Straight, Sloped Back',
    'No.27 — Geniş Bıçak Profili': 'No.27 — Broadest Blade Profile',

    // Chopped Fiber Blade Materials
    'Paslanmaz Çelik': 'Stainless Steel',
    'Paslanmaz Çelik + TiN Kaplama': 'Stainless Steel + TiN Coating',
    'Yekpare Tungsten Karbür': 'Solid Tungsten Carbide',

    // Chopped Fiber Blade Compatibility
    'Mark IV Elyaf Kesim Makinesi': 'Mark IV Fiber Cutting Machine',
    'Mark V Elyaf Kesim Makinesi': 'Mark V Fiber Cutting Machine',
    'Herkül Elyaf Kesim Makinesi': 'Hercules Fiber Cutting Machine',
    'Krupp Elyaf Kesim Makinesi': 'Krupp Fiber Cutting Machine',

    // Chopped Fiber Blade Edge Types
    'Çentikli': 'Notched',
    'Düz (Çentiksiz)': 'Plain (No Notches)',

    // B581 Fiberglass Chopper Blade Values
    'Tungsten Karbür Alaşımlı Çelik': 'Tungsten Carbide Tipped Steel',
    '30° Çift Taraflı': '30° Double Bevel',
    '25 adet / deste': '25 pcs / bundle',

    // B657 Circular Rotary Blade Values
    'Yüksek Karbonlu Çelik / Paslanmaz Çelik': 'High Carbon Steel / Stainless Steel',
    '18mm / 28mm / 45mm / 60mm': '18mm / 28mm / 45mm / 60mm',
    '0.30mm – 0.35mm': '0.30mm – 0.35mm',
    'OLFA Rotary Cutter': 'OLFA Rotary Cutter',
    'Altıgen / 3 Çentik': 'Hex Hole / 3 Notches',

    // 2CS1 Pentagon Blade Values
    'Yekpare Tungsten Karbür / Yekpare Seramik': 'Solid Tungsten Carbide / Solid Ceramic',
    'HRC 90+ (Tungsten) / HV 1600+ (Seramik)': 'HRC 90+ (Tungsten) / HV 1600+ (Ceramic)',
    '66/63/40 × 0.54 mm': '66/63/40 × 0.54 mm',
    '2 × 4 mm': '2 × 4 mm',
    'Beşgen (Pentagon)': 'Pentagon',

    // B084.075 Lamella (Leaf) Blade Values
    'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür': 'Solid Ceramic (ZrO₂) / Solid Tungsten Carbide',
    'HV 1200+ (Seramik) / HRC 90+ (Tungsten)': 'HV 1200+ (Ceramic) / HRC 90+ (Tungsten)',
    '84/80 × 7.5 × 1.0 mm': '84/80 × 7.5 × 1.0 mm',
    'Lamel / Yaprak (Lamella / Leaf)': 'Lamella / Leaf',

    // B575 / B724 Microtome Blade Values
    'Paslanmaz Çelik + Kaplama': 'Stainless Steel + Coating',
    'Alçak Profil (Low Profile)': 'Low Profile',
    'Yüksek Profil (High Profile)': 'High Profile',
    '3 Açılı Bileme (Triple Facet)': 'Triple Facet Grind',
    'PTFE / Platin-Krom Kaplama': 'PTFE / Platinum-Chrome Coating',
    'PTFE / Platin-Krom / Seramik Kaplama': 'PTFE / Platinum-Chrome / Ceramic Coating',
    'Non-Steril / Endüstriyel Kalite': 'Non-Sterile / Industrial Grade',
    'Leica, Thermo, Sakura, SLEE': 'Leica, Thermo, Sakura, SLEE',
    '50 Adet/Kutu': '50 pcs/box',

    // B723 LASIK / Microkeratome Blade Values
    '2 Yuva (Double Slot)': '2-Slot (Double Slot)',
    '1 Yuva (Single Slot)': '1-Slot (Single Slot)',
    'Yağdan Arındırılmış (Oil-Free)': 'Oil-Free (Degreased)',
    'Bireysel Steril Paketleme': 'Individual Sterile Packaging',
    'Moria, Hansatome, Zyoptix': 'Moria, Hansatome, Zyoptix',
    'Amadeus, Carriazo-Barraquer, Schwind': 'Amadeus, Carriazo-Barraquer, Schwind',
    '5 Adet/Kutu (Bireysel Steril)': '5 pcs/box (Individual Sterile)',

    // B621 Glass Scraper Blade Values
    'Paslanmaz Çelik (Rostfrei)': 'Stainless Steel (Rostfrei)',
    '3 Delik': '3 Holes',
    'Laklı': 'Lacquered',
    'Hassas Endüstriyel Bileme': 'Precision Industrial Grind',
    '60mm / 80mm / 100mm / 150mm': '60mm / 80mm / 100mm / 150mm',

    // B204 Classic Blade (Industrial) Values
    '43×22×0.10mm (37mm Kesim Kenarı)': '43×22×0.10mm (37mm Cutting Edge)',
    '0.10mm': '0.10mm',
    'Tek Kenar (Single Edge)': 'Single Edge',
    'Standart / PTFE Kaplamalı': 'Standard / PTFE Coated',
    'Yağlı / Yağsız': 'Oiled / Oil-Free',
    '250li Kutu / 2000li Çubuklu Kutu': '250-pc Box / 2000-pc Stick Box',

    // B684/B685 Classic Blade (Medical) Values
    '38×19×0.10mm': '38×19×0.10mm',
    'Kaplamalı': 'Coated',
    '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)': '100 pcs/box (B684) — 250 pcs/box (B685)',

    // B207 XXL Drywall Blade Values
    '170×19×0.80mm': '170×19×0.80mm',
    '0.80mm': '0.80mm',
    '2 Çentik + 4 Delik': '2 Notches + 4 Holes',

    // OK Arrow Blade Values
    '30.4×25.0×0.50mm': '30.4×25.0×0.50mm',
    '0.50mm': '0.50mm',
    'Çift Taraflı Bileme (Double Edge)': 'Double Edge Grind',
    '2 Açık Yuva (Slot) + 1 Delik': '2 Open Slots + 1 Hole',
  },

  // =============================================================================
  // ARABIC (العربية)
  // =============================================================================
  ar: {
    // Materials
    'Sheffield Çelik': 'فولاذ شيفيلد',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'فولاذ عالي الكربون (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'فولاذ مقاوم للصدأ مارتنسيتي AISI 420',
    'AISI 420 Paslanmaz Çelik': 'فولاذ مقاوم للصدأ AISI 420',
    'Silindirik Dairesel Bıçak': 'سكين دائري أسطواني',
    'Marel, Meyn, Baader, Stork': 'Marel, Meyn, Baader, Stork',
    'CE, Gıda Sınıfı Hijyen': 'CE، نظافة غذائية',
    'HRC 50-54': 'HRC 50-54',
    'AISI 420 Paslanmaz Çelik + TiN Kaplama': 'فولاذ مقاوم للصدأ AISI 420 + طلاء TiN',
    'AISI 420 Paslanmaz Çelik + PTFE Kaplama': 'فولاذ مقاوم للصدأ AISI 420 + طلاء PTFE',
    'AISI 420 Paslanmaz Çelik + XCD Kaplama': 'فولاذ مقاوم للصدأ AISI 420 + طلاء XCD',
    'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama': 'فولاذ مقاوم للصدأ AISI 420 + طلاء سيراميك متقدم',
    'Yüksek Karbonlu Çelik + TiN Kaplama': 'فولاذ عالي الكربون + طلاء TiN',
    'Yüksek Karbonlu Çelik + Seramik Kaplama': 'فولاذ عالي الكربون + طلاء سيراميك',
    'Yüksek Karbonlu Çelik + İleri Seramik Kaplama': 'فولاذ عالي الكربون + طلاء سيراميك متقدم',
    'Endurium HSS + İleri Seramik Kaplama': 'Endurium HSS + طلاء سيراميك متقدم',
    'Tungsten Karbür (WC-Co)': 'كربيد التنغستن (WC-Co)',
    'Yekpare Tungsten Karbür (WC-Co)': 'كربيد التنغستن الصلب (WC-Co)',
    'Yekpare Zirkonya Seramik (Y-TZP)': 'سيراميك الزركونيا الصلب (Y-TZP)',
    'Zirkonyum Oksit Bazlı Seramik (ZrO₂)': 'سيراميك أكسيد الزركونيوم (ZrO₂)',
    'Paslanmaz Çelik (420HC) + TiN Kaplama': 'فولاذ مقاوم للصدأ (420HC) + طلاء TiN',
    '440C Paslanmaz Çelik': 'فولاذ مقاوم للصدأ 440C',
    'D2 Çelik': 'فولاذ D2',
    'HSS (High Speed Steel - Yüksek Hız Çeliği)': 'HSS (فولاذ عالي السرعة)',
    'Dayanıklı Plastik': 'بلاستيك متين',
    'WC + %6-10 Kobalt bağlayıcı': 'WC + رابط كوبالت 6-10%',
    '%94 WC + %6 Co': '94% WC + 6% Co',

    // Coatings
    'TiN (Titanyum Nitrür)': 'TiN (نيتريد التيتانيوم)',
    'TiN (Titanyum Nitrür) - PVD': 'TiN (نيتريد التيتانيوم) - PVD',
    'PTFE (Politetrafloroetilen / Teflon)': 'PTFE (تفلون)',
    'XCD (Xtreme Carbon Diamond) - DLC': 'XCD (كربون الماس المتطرف) - DLC',
    'İleri Seramik Kaplama (Titanyum Bazlı)': 'طلاء سيراميك متقدم (أساس التيتانيوم)',
    'Çok Katmanlı İleri Seramik': 'سيراميك متقدم متعدد الطبقات',
    'PVD': 'PVD',
    'PVD (Fiziksel Buhar Biriktirme)': 'PVD (ترسيب البخار الفيزيائي)',
    'Standart veya Titanyum Kaplama': 'طلاء قياسي أو تيتانيوم',

    // Heat Treatment
    'Kontrollü Atmosfer + Temperleme': 'جو محكوم + تلطيف',
    'Vakum Isıl İşlem': 'معالجة حرارية بالتفريغ',

    // Hardness Values
    'HRC 58-60': 'HRC 58-60',
    'HRC 58-62': 'HRC 58-62',
    'HRC 59-61': 'HRC 59-61',
    'HRC 54-56': 'HRC 54-56',
    'HRC 62-65': 'HRC 62-65',
    'HRC 64-66 (Substrat) / 3500 HV (Kaplama)': 'HRC 64-66 (الركيزة) / 3500 HV (الطلاء)',
    'HRC 59-61 (Substrat) / 2300 HV (Kaplama)': 'HRC 59-61 (الركيزة) / 2300 HV (الطلاء)',
    'HRC 59-61 (Substrat) / 3200 HV (Kaplama)': 'HRC 59-61 (الركيزة) / 3200 HV (الطلاء)',
    'HRC 54-56 (Substrat)': 'HRC 54-56 (الركيزة)',
    'HRC 54-56 (Substrat) / 2300 HV (Kaplama)': 'HRC 54-56 (الركيزة) / 2300 HV (الطلاء)',
    'HRC 54-56 (Substrat) / 3200 HV (Kaplama)': 'HRC 54-56 (الركيزة) / 3200 HV (الطلاء)',
    'HRC 54-56 (Substrat) / 5000 HV (Kaplama)': 'HRC 54-56 (الركيزة) / 5000 HV (الطلاء)',
    'HRC 56-58 | Kaplama: 2300 HV': 'HRC 56-58 | الطلاء: 2300 HV',
    'Ana gövde: HRC 56-58 | Kaplama: 2300 HV': 'الجسم: HRC 56-58 | الطلاء: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 2300 HV': 'الجسم: HRC 59-61 | الطلاء: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV': 'الجسم: HRC 59-61 | الطلاء: 3200+ HV',
    'HRA 92-94 (HRC 75+ eşdeğer)': 'HRA 92-94 (معادل HRC 75+)',
    'HRA 89-92 (≈HRC 72-76)': 'HRA 89-92 (≈HRC 72-76)',
    'HV 1200-1400': 'HV 1200-1400',
    '1200 HV': '1200 HV',

    // Angles
    '20°': '20°',
    '22°': '22°',
    '25°': '25°',
    '30°': '30°',

    // Dimensions
    '38 x 8 x 0.25 mm': '38 x 8 x 0.25 مم',
    '38 x 8 x 0.30 mm': '38 x 8 x 0.30 مم',
    '38 x 8 x 0.36 mm': '38 x 8 x 0.36 مم',
    '38 x 8 x 0.64 mm': '38 x 8 x 0.64 مم',
    '60mm x 22mm': '60 مم x 22 مم',
    '2x 30mm yarım jilet': '2x شفرة نصفية 30 مم',
    'Geniş Format': 'تنسيق عريض',

    // Carbon Content
    '%0.85-1.00': '0.85-1.00%',
    '%12-14': '12-14%',
    '%12-14 Krom': '12-14% كروم',
    '%40': '40%',
    '%50-60': '50-60%',

    // Friction Coefficients
    '<0.1': '<0.1',
    '~0.04': '~0.04',
    '~0.1 (çeliğin 1/5\'i)': '~0.1 (1/5 من الفولاذ)',

    // Density
    '6.05 g/cm³': '6.05 غ/سم³',
    '14.5-15.0 g/cm³': '14.5-15.0 غ/سم³',
    '14.8 g/cm³': '14.8 غ/سم³',

    // Temperature Resistance
    '600°C': '600°م',
    '800°C': '800°م',

    // Colors
    'Altın Sarısı': 'ذهبي',
    'Beyaz (Bembeyaz Seramik)': 'أبيض (سيراميك أبيض نقي)',
    'Koyu Gri / Siyah': 'رمادي داكن / أسود',
    'Gri': 'رمادي',

    // Edge Types
    'Düz Kesim Ağzı': 'حافة قطع مستقيمة',
    'Testere Dişli (Serrated)': 'مسنن',
    'Yuvarlak Kenar': 'حافة مستديرة',
    'Yuvarlak Kenar (Traş jileti formu)': 'حافة مستديرة (شكل شفرة الحلاقة)',

    // Shapes
    'Dairesel (Circular)': 'دائري',
    'Oval (Ellipse)': 'بيضاوي',
    'Yuvarlak (Round)': 'مستدير',
    'Tam Yıldız (Full Star)': 'نجمة كاملة',
    'Yarım Yıldız (Half Star)': 'نصف نجمة',
    'Hava Delikli': 'مثقب',
    'Lazer işlemeli': 'معالج بالليزر',

    // Slot Types
    'Yuvasız': 'بدون فتحة',
    '2 Kanallı Yuva (Güçlendirilmiş Kavrama)': 'فتحة ثنائية القناة (قبضة معززة)',
    'Ortadan bölünebilir çizik hattı': 'خط كسر مركزي',
    'Standart Kapasite': 'سعة قياسية',

    // Performance
    'Çeliğe göre 10-50x': '10-50 ضعف مقارنة بالفولاذ',
    'Karbon çeliğe göre %25-30 daha güçlü': 'أقوى بنسبة 25-30% من الفولاذ الكربوني',
    'Yüksek': 'عالي',
    'Çok Yüksek': 'عالي جداً',
    'Düşük (ısı yalıtımı)': 'منخفض (عزل حراري)',
    'Yok (İzolator)': 'لا يوجد (عازل)',
    'İnert (reaktif değil)': 'خامل (غير تفاعلي)',

    // Microstructure
    'İnce tane (0.5-1.0 µm)': 'حبيبات دقيقة (0.5-1.0 ميكرومتر)',

    // Vacuum Packaging Values
    'Sheffield Çelik (Yüksek Karbonlu)': 'فولاذ شيفيلد عالي الكربون',
    'D2 Takım Çeliği (DIN 1.2379)': 'فولاذ أدوات D2 (DIN 1.2379)',
    'HSS M2 (DIN 1.3343)': 'فولاذ عالي السرعة HSS M2 (DIN 1.3343)',
    'AISI 440C Martensitik Paslanmaz': 'فولاذ مقاوم للصدأ مارتنسيتي AISI 440C',
    'Standart veya TiN PVD (2300 HV)': 'قياسي أو طلاء TiN PVD (2300 HV)',
    'Ra ≤0.4 µm (Gıda Sınıfı)': 'Ra ≤0.4 µm (درجة غذائية)',
    'Ra ≤0.3 µm (Elektropolisaj)': 'Ra ≤0.3 µm (تلميع كهربائي)',
    'Kontör/Profil Takipli Kesim': 'قطع كونتور/متابعة الملف',
    '600°C (Kırmızı Sertlik)': '600°م (صلادة حمراء)',
    'Düz Kesim (Straight Edge)': 'قطع مستقيم (Straight Edge)',
    'Dinamik Dengelenmiş (3000+ RPM)': 'موازنة ديناميكية (3000+ د/د)',
    'Yarım Yıldız (Half Star / Triangle)': 'نصف نجمة (مثلث)',
    'Dairesel (Circular Rotary)': 'دائري (دوار)',
    'Mikro-Serrated (Testere Dişli)': 'مسنن دقيق (أسنان منشار)',
    'Yuvarlak (Round) Hava Deliği': 'ثقب هواء مستدير',
    'Oval (Elips) Hava Deliği': 'ثقب هواء بيضاوي',
    'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan': 'أوسع بنسبة 40% مقارنة بالمستدير',
    '±0.02mm CNC hassasiyet': '±0.02mm دقة CNC',
    'Kalın film, Al folyo, PET/PVC rigid': 'فيلم سميك، رقائق ألمنيوم، PET/PVC صلب',
    'Kontrollü atmosfer fırını': 'فرن أجواء متحكّمة',
    '%17 Cr (Yüksek Korozyon Direnci)': '17% كروم (مقاومة تآكل عالية)',

    // شفرات أحادية الحافة — سلسلة B201
    'Yüksek Karbonlu Çelik': 'فولاذ كربوني عالي',
    'Paslanmaz Çelik (Stainless Steel)': 'فولاذ مقاوم للصدأ',
    'Paslanmaz Çelik + PTFE': 'فولاذ مقاوم للصدأ + PTFE',
    'PTFE (Teflon®)': 'PTFE (تفلون®)',
    'HRC 55-58': 'HRC 55-58',
    '0.23mm (0.009")': '0.23مم (0.009")',
    '0.30mm (0.012") — Heavy Duty': '0.30مم (0.012") — خدمة شاقة',
    '38×19mm': '38×19مم',
    '38×19mm / 38×17mm': '38×19مم / 38×17مم',
    '2-Facet': '2-فاسيت',
    '3-Facet': '3-فاسيت',
    '3-Facet (Ultra Keskin)': '3-فاسيت (فائق الحدة)',
    'Alüminyum': 'ألومنيوم',
    'Alüminyum / Metal Spine': 'ألومنيوم / معدني',
    'Kılıflı / Kılıfsız / 1000 Adet Bulk': 'مغلف / بدون غلاف / 1000 قطعة',
    '%13+': '+13%',
    '%40-60': '40-60%',
    // قيم مواصفات الشفرات شبه المنحرفة
    'Yüksek Karbon Çelik (SK5)': 'فولاذ عالي الكربون (SK5)',
    '0.63mm (standart) / 1.00mm (paslanmaz)': '0.63 مم (قياسي) / 1.00 مم (ستانلس)',
    '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm': '50×19 / 53×19 / 58×19 / 60×19 / 100×19 مم',
    'Trapez (Utility)': 'شبه منحرف (متعدد الاستخدامات)',
    '2 veya 3 çentik': '2 أو 3 شقوق',
    '0-5 delik (konfigürasyona göre)': '0-5 ثقوب (حسب التكوين)',
    'Çift taraflı / Tek taraflı bileme': 'شحذ مزدوج / شحذ من جانب واحد',
    'Standart / TiN Kaplama': 'قياسي / طلاء TiN',
    '5, 10, 100 adet (dispenser / kutu)': '5، 10، 100 قطعة (موزع / علبة)',
    '0.43mm': '0.43 مم',
    '50×19 / 59×19 mm': '50×19 / 59×19 مم',
    '2 çentik': '2 شقوق',
    'Deliksiz / 2×6.4mm delik': 'بدون ثقوب / ثقوب 2×6.4 مم',
    '5, 10, 100 adet': '5، 10، 100 قطعة',
    '1.0mm': '1.0 مم',
    '82×25 mm': '82×25 مم',
    'Trapez (Geniş Gövde)': 'شبه منحرف (جسم عريض)',
    '2 delik': '2 ثقبان',
    'Tek taraftan tırtıklı kenar': 'حافة مسننة من جانب واحد',
    '0.63mm': '0.63 مم',
    '61×12.5 mm': '61×12.5 مم',
    'Kompakt Trapez': 'شبه منحرف مدمج',
    '1 delik': 'ثقب واحد',
    '71×17 mm': '71×17 مم',
    'Trapez (Özel Boyut)': 'شبه منحرف (حجم خاص)',
    '1×6mm delik': 'ثقب 1×6 مم',
    '27.6×9 mm': '27.6×9 مم',
    'Mikro Trapez': 'شبه منحرف مصغر',
    '3×3.5mm delik': 'ثقوب 3×3.5 مم',
    'Trapez Uzun (L)': 'شبه منحرف طويل (L)',
    'Standart B207 serisi genişletilmiş': 'سلسلة B207 القياسية الموسعة',
    'Trapez XXL (Ekstra Uzun)': 'شبه منحرف XXL (طويل جداً)',
    'B207 serisi ekstra genişletilmiş': 'سلسلة B207 موسعة إضافية',
    'Karbon / Paslanmaz / TiN Kaplama': 'كربوني / ستانلس / طلاء TiN',
    '0.43 / 0.63 / 1.00 mm': '0.43 / 0.63 / 1.00 مم',
    '100×19 mm (büyük boy) + özel boyutlar': '100×19 مم (حجم كبير) + أحجام مخصصة',
    'Özel Tasarım Trapez': 'شبه منحرف تصميم مخصص',
    'Müşteriye özel (1-5 çentik)': 'مخصص للعميل (1-5 شقوق)',
    'Müşteriye özel delik konfigürasyonu': 'تكوين ثقوب مخصص للعميل',

    // قيم مواصفات شفرات الحرف
    'SK5 Yüksek Karbonlu Çelik': 'فولاذ عالي الكربون SK5',
    'Yekpare Seramik / Sheffield Çelik': 'سيراميك صلب / فولاذ شيفيلد',
    'Standart / TiN (Titanyum Nitrür)': 'قياسي / TiN (نيتريد التيتانيوم)',
    'Standart / Ekstra Keskin (Black Blade)': 'قياسي / حاد للغاية (شفرة سوداء)',
    'Testere dişi profili (serrated)': 'ملف حافة مسننة',
    '55° (standart) / 30° (keskin açı)': '55° (قياسي) / 30° (زاوية حادة)',
    '60×18×0.50mm': '60×18×0.50 مم',
    '80×9×0.40mm': '80×9×0.40 مم',
    '89×12×0.50mm': '89×12×0.50 مم',
    '92×8.2×0.43mm': '92×8.2×0.43 مم',
    '100×18×0.50mm': '100×18×0.50 مم',
    '106×25×0.50mm': '106×25×0.50 مم',
    '127×25×0.70mm': '127×25×0.70 مم',
    '83.3×12.5×0.45mm': '83.3×12.5×0.45 مم',
    '5 adet/tüp': '5 قطع/أنبوب',
    '10 adet/tüp': '10 قطع/أنبوب',
    '3 adet/paket': '3 قطع/حزمة',

    // أبعاد شفرات ثلاثية الأبعاد والشفرات الشقّة
    '43x22mm': '43×22 مم',
    '57x19mm': '57×19 مم',
    '60x22mm': '60×22 مم',
    '38x19mm': '38×19 مم',
    '61×12.5×0.63mm': '61×12.5×0.63 مم',
    '71×17×0.63mm': '71×17×0.63 مم',
    '27.6×9×0.43mm': '27.6×9×0.43 مم',
    '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm': '0.10مم، 0.15مم، 0.20مم، 0.30مم، 0.40مم',
    '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm': '0.25مم، 0.36مم، 0.38مم، 0.43مم، 0.63مم',
    '0.15mm, 0.20mm, 0.30mm': '0.15مم، 0.20مم، 0.30مم',
    '55°': '55°',

    // قيم شفرات أحادية الحافة الإضافية
    'Yüksek Karbonlu Çelik (High Carbon Steel)': 'فولاذ عالي الكربون',
    'Korozyona dayanıklı yüzey işlemi': 'معالجة سطحية مقاومة للتآكل',
    'Kontrollü atmosfer sertleştirme': 'تصليب بالغلاف الجوي المتحكم',
    '38x19mm (kılıflı) / 38x17mm (kılıfsız)': '38×19مم (مغلف) / 38×17مم (بدون غلاف)',
    '%13+ Krom içeriği': '+13% كروم',
    'Doğal paslanmaz — ek kaplama gerektirmez': 'مقاوم للصدأ طبيعياً — لا يحتاج طلاء إضافي',
    'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)': 'فولاذ مقاوم للصدأ + طلاء PTFE',
    'PTFE (Polytetrafluoroethylene / Teflon®)': 'PTFE (تفلون®)',
    '%40-60 sürtünme azaltma': 'تقليل احتكاك 40-60%',
    '0.30mm (0.012")': '0.30مم (0.012")',
    // Scalpel / Bisturi blade values
    'Non-Steril': 'غير معقم (درجة صناعية)',
    '#3 Sap Uyumlu': 'متوافق مع مقبض #3 (بارد-باركر)',
    '#4 Sap Uyumlu': 'متوافق مع مقبض #4 (بارد-باركر)',
    '100 Adet/Kutu (20×5 Şerit)': '100 قطعة/علبة (20×5 شرائط)',
    'No.10 — Kavisli Kesim Kenarı': 'No.10 — حافة قطع منحنية',
    'No.10A — Düz Geniş Karınlı': 'No.10A — مسطح عريض البطن',
    'No.11 — Üçgen Sivri Uçlu': 'No.11 — مثلثي بطرف مدبب',
    'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli': 'No.12 — هلالي/خطافي بحافة داخلية مشحوذة',
    'No.15 — No.10 Küçük Versiyon, Kavisli Kenar': 'No.15 — نسخة أصغر من No.10، حافة منحنية',
    'No.20 — No.10 Büyük Versiyon, Kavisli Kenar': 'No.20 — نسخة أكبر من No.10، حافة منحنية',
    'No.21 — Büyük Üçgen Profil': 'No.21 — مثلثي كبير',
    'No.22 — No.20 Büyük Versiyon, Kavisli Kenar': 'No.22 — نسخة أكبر من No.20، حافة منحنية',
    'No.23 — Yaprak Şekilli, Uzun İnsizyon': 'No.23 — شكل ورقي، شقوق طويلة',
    'No.24 — Geniş Düz Açılı Kenar': 'No.24 — عريض مسطح بحافة مائلة',
    'No.25 — Öne Bakan Düz Kenar': 'No.25 — مستقيم أمامي',
    'No.26 — Üçgen Düz Kenar, Aşağı Açılı': 'No.26 — مثلثي مستقيم بظهر منحدر',
    'No.27 — Geniş Bıçak Profili': 'No.27 — أعرض شفرة في السلسلة',

    // مواد شفرات الألياف المقطعة
    'Paslanmaz Çelik': 'فولاذ مقاوم للصدأ',
    'Paslanmaz Çelik + TiN Kaplama': 'فولاذ مقاوم للصدأ + طلاء TiN',
    'Yekpare Tungsten Karbür': 'كربيد التنغستن الصلب',

    // توافق شفرات الألياف
    'Mark IV Elyaf Kesim Makinesi': 'آلة قطع الألياف مارك IV',
    'Mark V Elyaf Kesim Makinesi': 'آلة قطع الألياف مارك V',
    'Herkül Elyaf Kesim Makinesi': 'آلة قطع الألياف هركول',
    'Krupp Elyaf Kesim Makinesi': 'آلة قطع الألياف كروب',

    // أنواع حافة شفرات الألياف
    'Çentikli': 'مسننة',
    'Düz (Çentiksiz)': 'ملساء (بدون تسنين)',

    // قيم شفرة تقطيع الألياف الزجاجية B581
    'Tungsten Karbür Alaşımlı Çelik': 'فولاذ بسبيكة كربيد التنغستن',
    '30° Çift Taraflı': '30° شحذ مزدوج',
    '25 adet / deste': '25 قطعة / حزمة',

    // قيم شفرات B657 الدائرية الدوارة
    'Yüksek Karbonlu Çelik / Paslanmaz Çelik': 'فولاذ عالي الكربون / فولاذ مقاوم للصدأ',
    '18mm / 28mm / 45mm / 60mm': '18 مم / 28 مم / 45 مم / 60 مم',
    '0.30mm – 0.35mm': '0.30 مم – 0.35 مم',
    'OLFA Rotary Cutter': 'قاطع OLFA الدوار',
    'Altıgen / 3 Çentik': 'فتحة سداسية / 3 شقوق',

    // قيم شفرة 2CS1 الخماسية
    'Yekpare Tungsten Karbür / Yekpare Seramik': 'كربيد تنغستن صلب / سيراميك صلب',
    'HRC 90+ (Tungsten) / HV 1600+ (Seramik)': 'HRC 90+ (تنغستن) / HV 1600+ (سيراميك)',
    '66/63/40 × 0.54 mm': '66/63/40 × 0.54 مم',
    '2 × 4 mm': '2 × 4 مم',
    'Beşgen (Pentagon)': 'خماسي الأضلاع',

    // قيم شفرة B084.075 اللاميلا (الورقية)
    'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür': 'سيراميك صلب (ZrO₂) / كربيد تنغستن صلب',
    'HV 1200+ (Seramik) / HRC 90+ (Tungsten)': 'HV 1200+ (سيراميك) / HRC 90+ (تنغستن)',
    '84/80 × 7.5 × 1.0 mm': '84/80 × 7.5 × 1.0 مم',
    'Lamel / Yaprak (Lamella / Leaf)': 'لاميلا / ورقي',

    // قيم شفرات الميكروتوم B575 / B724
    'Paslanmaz Çelik + Kaplama': 'فولاذ مقاوم للصدأ + طلاء',
    'Alçak Profil (Low Profile)': 'ملف منخفض',
    'Yüksek Profil (High Profile)': 'ملف عالي',
    '3 Açılı Bileme (Triple Facet)': 'شحذ ثلاثي الأوجه',
    'PTFE / Platin-Krom Kaplama': 'طلاء PTFE / بلاتين-كروم',
    'PTFE / Platin-Krom / Seramik Kaplama': 'طلاء PTFE / بلاتين-كروم / سيراميك',
    'Non-Steril / Endüstriyel Kalite': 'غير معقم / درجة صناعية',
    'Leica, Thermo, Sakura, SLEE': 'Leica, Thermo, Sakura, SLEE',
    '50 Adet/Kutu': '50 قطعة/صندوق',

    // قيم شفرات الليزك / الميكروكيراتوم B723
    '2 Yuva (Double Slot)': '2 فتحة (مزدوجة)',
    '1 Yuva (Single Slot)': '1 فتحة (مفردة)',
    'Yağdan Arındırılmış (Oil-Free)': 'خالية من الزيوت (منزوعة الدهن)',
    'Bireysel Steril Paketleme': 'تعبئة معقمة فردية',
    'Moria, Hansatome, Zyoptix': 'Moria, Hansatome, Zyoptix',
    'Amadeus, Carriazo-Barraquer, Schwind': 'Amadeus, Carriazo-Barraquer, Schwind',
    '5 Adet/Kutu (Bireysel Steril)': '5 قطع/صندوق (معقمة فردياً)',

    // قيم شفرات كاشطة الزجاج B621
    'Paslanmaz Çelik (Rostfrei)': 'فولاذ مقاوم للصدأ (Rostfrei)',
    '3 Delik': '3 ثقوب',
    'Laklı': 'مطلية باللك',
    'Hassas Endüstriyel Bileme': 'شحذ صناعي دقيق',
    '60mm / 80mm / 100mm / 150mm': '60مم / 80مم / 100مم / 150مم',

    // قيم شفرة كلاسيكية B204 (صناعية)
    '43×22×0.10mm (37mm Kesim Kenarı)': '43×22×0.10مم (حافة قطع 37مم)',
    '0.10mm': '0.10مم',
    'Tek Kenar (Single Edge)': 'حافة واحدة',
    'Standart / PTFE Kaplamalı': 'قياسي / مطلي PTFE',
    'Yağlı / Yağsız': 'مزيّت / خالي من الزيت',
    '250li Kutu / 2000li Çubuklu Kutu': 'صندوق 250 قطعة / صندوق شرائح 2000 قطعة',

    // قيم شفرة كلاسيكية B684/B685 (طبية)
    '38×19×0.10mm': '38×19×0.10مم',
    'Kaplamalı': 'مطلية',
    '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)': '100 قطعة/صندوق (B684) — 250 قطعة/صندوق (B685)',

    // قيم شفرة ألواح الجبس B207 XXL
    '170×19×0.80mm': '170×19×0.80مم',
    '0.80mm': '0.80مم',
    '2 Çentik + 4 Delik': '2 شق + 4 ثقوب',

    // قيم شفرة السهم OK
    '30.4×25.0×0.50mm': '30.4×25.0×0.50مم',
    '0.50mm': '0.50مم',
    'Çift Taraflı Bileme (Double Edge)': 'شحذ مزدوج الحواف',
    '2 Açık Yuva (Slot) + 1 Delik': '2 فتحة مفتوحة + 1 ثقب',
  },

  // =============================================================================
  // FRENCH (Français)
  // =============================================================================
  fr: {
    // Materials
    'Sheffield Çelik': 'Acier Sheffield',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'Acier à Haute Teneur en Carbone (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'Acier Inoxydable Martensitique AISI 420',
    'AISI 420 Paslanmaz Çelik': 'Acier Inoxydable AISI 420',
    'Silindirik Dairesel Bıçak': 'Lame Circulaire Cylindrique',
    'Marel, Meyn, Baader, Stork': 'Marel, Meyn, Baader, Stork',
    'CE, Gıda Sınıfı Hijyen': 'CE, Hygiène Alimentaire',
    'HRC 50-54': 'HRC 50-54',
    'AISI 420 Paslanmaz Çelik + TiN Kaplama': 'Acier Inoxydable AISI 420 + Revêtement TiN',
    'AISI 420 Paslanmaz Çelik + PTFE Kaplama': 'Acier Inoxydable AISI 420 + Revêtement PTFE',
    'AISI 420 Paslanmaz Çelik + XCD Kaplama': 'Acier Inoxydable AISI 420 + Revêtement XCD',
    'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama': 'Acier Inoxydable AISI 420 + Revêtement Céramique Avancé',
    'Yüksek Karbonlu Çelik + TiN Kaplama': 'Acier à Haute Teneur en Carbone + Revêtement TiN',
    'Yüksek Karbonlu Çelik + Seramik Kaplama': 'Acier à Haute Teneur en Carbone + Revêtement Céramique',
    'Yüksek Karbonlu Çelik + İleri Seramik Kaplama': 'Acier à Haute Teneur en Carbone + Revêtement Céramique Avancé',
    'Endurium HSS + İleri Seramik Kaplama': 'Endurium HSS + Revêtement Céramique Avancé',
    'Tungsten Karbür (WC-Co)': 'Carbure de Tungstène (WC-Co)',
    'Yekpare Tungsten Karbür (WC-Co)': 'Carbure de Tungstène Massif (WC-Co)',
    'Yekpare Zirkonya Seramik (Y-TZP)': 'Céramique Zircone Massif (Y-TZP)',
    'Zirkonyum Oksit Bazlı Seramik (ZrO₂)': 'Céramique à Base d\'Oxyde de Zirconium (ZrO₂)',
    'Paslanmaz Çelik (420HC) + TiN Kaplama': 'Acier Inoxydable (420HC) + Revêtement TiN',
    '440C Paslanmaz Çelik': 'Acier Inoxydable 440C',
    'D2 Çelik': 'Acier D2',
    'HSS (High Speed Steel - Yüksek Hız Çeliği)': 'HSS (Acier Rapide)',
    'Dayanıklı Plastik': 'Plastique Durable',
    'WC + %6-10 Kobalt bağlayıcı': 'WC + Liant Cobalt 6-10%',
    '%94 WC + %6 Co': '94% WC + 6% Co',

    // Coatings
    'TiN (Titanyum Nitrür)': 'TiN (Nitrure de Titane)',
    'TiN (Titanyum Nitrür) - PVD': 'TiN (Nitrure de Titane) - PVD',
    'PTFE (Politetrafloroetilen / Teflon)': 'PTFE (Polytétrafluoroéthylène / Téflon)',
    'XCD (Xtreme Carbon Diamond) - DLC': 'XCD (Xtreme Carbon Diamond) - DLC',
    'İleri Seramik Kaplama (Titanyum Bazlı)': 'Revêtement Céramique Avancé (Base Titane)',
    'Çok Katmanlı İleri Seramik': 'Céramique Avancée Multicouche',
    'PVD': 'PVD',
    'PVD (Fiziksel Buhar Biriktirme)': 'PVD (Dépôt Physique en Phase Vapeur)',
    'Standart veya Titanyum Kaplama': 'Revêtement Standard ou Titane',

    // Heat Treatment
    'Kontrollü Atmosfer + Temperleme': 'Atmosphère Contrôlée + Revenu',
    'Vakum Isıl İşlem': 'Traitement Thermique Sous Vide',

    // Hardness Values
    'HRC 58-60': 'HRC 58-60',
    'HRC 58-62': 'HRC 58-62',
    'HRC 59-61': 'HRC 59-61',
    'HRC 54-56': 'HRC 54-56',
    'HRC 62-65': 'HRC 62-65',
    'HRC 64-66 (Substrat) / 3500 HV (Kaplama)': 'HRC 64-66 (Substrat) / 3500 HV (Revêtement)',
    'HRC 59-61 (Substrat) / 2300 HV (Kaplama)': 'HRC 59-61 (Substrat) / 2300 HV (Revêtement)',
    'HRC 59-61 (Substrat) / 3200 HV (Kaplama)': 'HRC 59-61 (Substrat) / 3200 HV (Revêtement)',
    'HRC 54-56 (Substrat)': 'HRC 54-56 (Substrat)',
    'HRC 54-56 (Substrat) / 2300 HV (Kaplama)': 'HRC 54-56 (Substrat) / 2300 HV (Revêtement)',
    'HRC 54-56 (Substrat) / 3200 HV (Kaplama)': 'HRC 54-56 (Substrat) / 3200 HV (Revêtement)',
    'HRC 54-56 (Substrat) / 5000 HV (Kaplama)': 'HRC 54-56 (Substrat) / 5000 HV (Revêtement)',
    'HRC 56-58 | Kaplama: 2300 HV': 'HRC 56-58 | Revêtement: 2300 HV',
    'Ana gövde: HRC 56-58 | Kaplama: 2300 HV': 'Corps: HRC 56-58 | Revêtement: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 2300 HV': 'Corps: HRC 59-61 | Revêtement: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV': 'Corps: HRC 59-61 | Revêtement: 3200+ HV',
    'HRA 92-94 (HRC 75+ eşdeğer)': 'HRA 92-94 (équivalent HRC 75+)',
    'HRA 89-92 (≈HRC 72-76)': 'HRA 89-92 (≈HRC 72-76)',
    'HV 1200-1400': 'HV 1200-1400',
    '1200 HV': '1200 HV',

    // Angles
    '20°': '20°',
    '22°': '22°',
    '25°': '25°',
    '30°': '30°',

    // Dimensions
    '38 x 8 x 0.25 mm': '38 x 8 x 0,25 mm',
    '38 x 8 x 0.30 mm': '38 x 8 x 0,30 mm',
    '38 x 8 x 0.36 mm': '38 x 8 x 0,36 mm',
    '38 x 8 x 0.64 mm': '38 x 8 x 0,64 mm',
    '60mm x 22mm': '60 mm x 22 mm',
    '2x 30mm yarım jilet': '2x lame demi 30 mm',
    'Geniş Format': 'Format Large',

    // Carbon Content
    '%0.85-1.00': '0,85-1,00%',
    '%12-14': '12-14%',
    '%12-14 Krom': '12-14% Chrome',
    '%40': '40%',
    '%50-60': '50-60%',

    // Friction Coefficients
    '<0.1': '<0,1',
    '~0.04': '~0,04',
    '~0.1 (çeliğin 1/5\'i)': '~0,1 (1/5 de l\'acier)',

    // Density
    '6.05 g/cm³': '6,05 g/cm³',
    '14.5-15.0 g/cm³': '14,5-15,0 g/cm³',
    '14.8 g/cm³': '14,8 g/cm³',

    // Temperature Resistance
    '600°C': '600°C',
    '800°C': '800°C',

    // Colors
    'Altın Sarısı': 'Doré',
    'Beyaz (Bembeyaz Seramik)': 'Blanc (Céramique Blanche Pure)',
    'Koyu Gri / Siyah': 'Gris Foncé / Noir',
    'Gri': 'Gris',

    // Edge Types
    'Düz Kesim Ağzı': 'Tranchant de Coupe Droit',
    'Testere Dişli (Serrated)': 'Dentelé',
    'Yuvarlak Kenar': 'Tranchant Arrondi',
    'Yuvarlak Kenar (Traş jileti formu)': 'Tranchant Arrondi (forme lame de rasoir)',

    // Shapes
    'Dairesel (Circular)': 'Circulaire',
    'Oval (Ellipse)': 'Elliptique',
    'Yuvarlak (Round)': 'Rond',
    'Tam Yıldız (Full Star)': 'Étoile Complète',
    'Yarım Yıldız (Half Star)': 'Demi-Étoile',
    'Hava Delikli': 'Perforé',
    'Lazer işlemeli': 'Traité au Laser',

    // Slot Types
    'Yuvasız': 'Sans Fente',
    '2 Kanallı Yuva (Güçlendirilmiş Kavrama)': 'Fente 2 Canaux (Prise Renforcée)',
    'Ortadan bölünebilir çizik hattı': 'Ligne de rupture centrale',
    'Standart Kapasite': 'Capacité Standard',

    // Performance
    'Çeliğe göre 10-50x': '10-50x par rapport à l\'acier',
    'Karbon çeliğe göre %25-30 daha güçlü': '25-30% plus résistant que l\'acier au carbone',
    'Yüksek': 'Élevé',
    'Çok Yüksek': 'Très Élevé',
    'Düşük (ısı yalıtımı)': 'Faible (isolation thermique)',
    'Yok (İzolator)': 'Aucune (Isolant)',
    'İnert (reaktif değil)': 'Inerte (non réactif)',

    // Microstructure
    'İnce tane (0.5-1.0 µm)': 'Grain fin (0,5-1,0 µm)',

    // Vacuum Packaging Values
    'Sheffield Çelik (Yüksek Karbonlu)': 'Acier Sheffield Haut Carbone',
    'D2 Takım Çeliği (DIN 1.2379)': 'Acier d\'outillage D2 (DIN 1.2379)',
    'HSS M2 (DIN 1.3343)': 'Acier rapide HSS M2 (DIN 1.3343)',
    'AISI 440C Martensitik Paslanmaz': 'Inox martensitique AISI 440C',
    'Standart veya TiN PVD (2300 HV)': 'Standard ou TiN PVD (2300 HV)',
    'Ra ≤0.4 µm (Gıda Sınıfı)': 'Ra ≤0,4 µm (Qualité alimentaire)',
    'Ra ≤0.3 µm (Elektropolisaj)': 'Ra ≤0,3 µm (Électropolissage)',
    'Kontör/Profil Takipli Kesim': 'Découpe contour/suivi de profil',
    '600°C (Kırmızı Sertlik)': '600°C (Dureté à rouge)',
    'Düz Kesim (Straight Edge)': 'Coupe droite',
    'Dinamik Dengelenmiş (3000+ RPM)': 'Équilibrage dynamique (3000+ tr/min)',
    'Yarım Yıldız (Half Star / Triangle)': 'Demi-étoile (Triangle)',
    'Dairesel (Circular Rotary)': 'Circulaire (Rotatif)',
    'Mikro-Serrated (Testere Dişli)': 'Micro-dentelé (Dent de scie)',
    'Yuvarlak (Round) Hava Deliği': 'Trou d\'aération rond',
    'Oval (Elips) Hava Deliği': 'Trou d\'aération ovale',
    'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan': '40% de surface en plus par rapport au rond',
    '±0.02mm CNC hassasiyet': '±0,02mm Précision CNC',
    'Kalın film, Al folyo, PET/PVC rigid': 'Film épais, feuille Al, PET/PVC rigide',
    'Kontrollü atmosfer fırını': 'Four à atmosphère contrôlée',
    '%17 Cr (Yüksek Korozyon Direnci)': '17% Cr (Haute résistance corrosion)',

    // Lames à tranchant simple — Série B201
    'Yüksek Karbonlu Çelik': 'Acier à haute teneur en carbone',
    'Paslanmaz Çelik (Stainless Steel)': 'Acier inoxydable',
    'Paslanmaz Çelik + PTFE': 'Acier inoxydable + PTFE',
    'PTFE (Teflon®)': 'PTFE (Téflon®)',
    'HRC 55-58': 'HRC 55-58',
    '0.23mm (0.009")': '0,23mm (0,009")',
    '0.30mm (0.012") — Heavy Duty': '0,30mm (0,012") — Usage intensif',
    '38×19mm': '38×19mm',
    '38×19mm / 38×17mm': '38×19mm / 38×17mm',
    '2-Facet': '2-Facettes',
    '3-Facet': '3-Facettes',
    '3-Facet (Ultra Keskin)': '3-Facettes (Ultra tranchant)',
    'Alüminyum': 'Aluminium',
    'Alüminyum / Metal Spine': 'Aluminium / Dos métallique',
    'Kılıflı / Kılıfsız / 1000 Adet Bulk': 'Avec étui / Sans étui / 1000 pièces en vrac',
    '%13+': '13%+',
    '%40-60': '40-60%',
    // Valeurs de spécification des lames trapézoïdales
    'Yüksek Karbon Çelik (SK5)': 'Acier Haut Carbone (SK5)',
    '0.63mm (standart) / 1.00mm (paslanmaz)': '0,63mm (standard) / 1,00mm (inox)',
    '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm': '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm',
    'Trapez (Utility)': 'Trapézoïdale (Utilitaire)',
    '2 veya 3 çentik': '2 ou 3 encoches',
    '0-5 delik (konfigürasyona göre)': '0-5 trous (selon configuration)',
    'Çift taraflı / Tek taraflı bileme': 'Double tranchant / Simple tranchant',
    'Standart / TiN Kaplama': 'Standard / Revêtement TiN',
    '5, 10, 100 adet (dispenser / kutu)': '5, 10, 100 pcs (distributeur / boîte)',
    '0.43mm': '0,43mm',
    '50×19 / 59×19 mm': '50×19 / 59×19 mm',
    '2 çentik': '2 encoches',
    'Deliksiz / 2×6.4mm delik': 'Sans trous / trous 2×6,4mm',
    '5, 10, 100 adet': '5, 10, 100 pcs',
    '1.0mm': '1,0mm',
    '82×25 mm': '82×25 mm',
    'Trapez (Geniş Gövde)': 'Trapézoïdale (Corps Large)',
    '2 delik': '2 trous',
    'Tek taraftan tırtıklı kenar': 'Bord dentelé unilatéral',
    '0.63mm': '0,63mm',
    '61×12.5 mm': '61×12,5 mm',
    'Kompakt Trapez': 'Trapézoïdale Compacte',
    '1 delik': '1 trou',
    '71×17 mm': '71×17 mm',
    'Trapez (Özel Boyut)': 'Trapézoïdale (Taille Spéciale)',
    '1×6mm delik': 'trou 1×6mm',
    '27.6×9 mm': '27,6×9 mm',
    'Mikro Trapez': 'Micro Trapézoïdale',
    '3×3.5mm delik': 'trous 3×3,5mm',
    'Trapez Uzun (L)': 'Trapézoïdale Longue (L)',
    'Standart B207 serisi genişletilmiş': 'Série B207 standard étendue',
    'Trapez XXL (Ekstra Uzun)': 'Trapézoïdale XXL (Extra Longue)',
    'B207 serisi ekstra genişletilmiş': 'Série B207 extra étendue',
    'Karbon / Paslanmaz / TiN Kaplama': 'Carbone / Inox / Revêtement TiN',
    '0.43 / 0.63 / 1.00 mm': '0,43 / 0,63 / 1,00 mm',
    '100×19 mm (büyük boy) + özel boyutlar': '100×19 mm (grand format) + tailles personnalisées',
    'Özel Tasarım Trapez': 'Trapézoïdale Design Personnalisé',
    'Müşteriye özel (1-5 çentik)': 'Personnalisé (1-5 encoches)',
    'Müşteriye özel delik konfigürasyonu': 'Configuration de trous personnalisée',

    // Valeurs de spécifications pour lames artisanales
    'SK5 Yüksek Karbonlu Çelik': 'Acier à Haute Teneur en Carbone SK5',
    'Yekpare Seramik / Sheffield Çelik': 'Céramique Massif / Acier Sheffield',
    'Standart / TiN (Titanyum Nitrür)': 'Standard / TiN (Nitrure de Titane)',
    'Standart / Ekstra Keskin (Black Blade)': 'Standard / Extra Tranchant (Lame Noire)',
    'Testere dişi profili (serrated)': 'Profil de Tranchant Dentelé',
    '55° (standart) / 30° (keskin açı)': '55° (standard) / 30° (angle aigu)',
    '60×18×0.50mm': '60×18×0,50 mm',
    '80×9×0.40mm': '80×9×0,40 mm',
    '89×12×0.50mm': '89×12×0,50 mm',
    '92×8.2×0.43mm': '92×8,2×0,43 mm',
    '100×18×0.50mm': '100×18×0,50 mm',
    '106×25×0.50mm': '106×25×0,50 mm',
    '127×25×0.70mm': '127×25×0,70 mm',
    '83.3×12.5×0.45mm': '83,3×12,5×0,45 mm',
    '5 adet/tüp': '5 pcs/tube',
    '10 adet/tüp': '10 pcs/tube',
    '3 adet/paket': '3 pcs/paquet',

    // Dimensions lames 3D et refendeuses
    '43x22mm': '43x22 mm',
    '57x19mm': '57x19 mm',
    '60x22mm': '60x22 mm',
    '38x19mm': '38x19 mm',
    '61×12.5×0.63mm': '61×12,5×0,63 mm',
    '71×17×0.63mm': '71×17×0,63 mm',
    '27.6×9×0.43mm': '27,6×9×0,43 mm',
    '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm': '0,10 mm, 0,15 mm, 0,20 mm, 0,30 mm, 0,40 mm',
    '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm': '0,25 mm, 0,36 mm, 0,38 mm, 0,43 mm, 0,63 mm',
    '0.15mm, 0.20mm, 0.30mm': '0,15 mm, 0,20 mm, 0,30 mm',
    '55°': '55°',

    // Valeurs supplémentaires lames à un tranchant
    'Yüksek Karbonlu Çelik (High Carbon Steel)': 'Acier à Haute Teneur en Carbone',
    'Korozyona dayanıklı yüzey işlemi': 'Traitement de Surface Résistant à la Corrosion',
    'Kontrollü atmosfer sertleştirme': 'Durcissement en Atmosphère Contrôlée',
    '38x19mm (kılıflı) / 38x17mm (kılıfsız)': '38x19 mm (avec étui) / 38x17 mm (sans étui)',
    '%13+ Krom içeriği': '13%+ Teneur en Chrome',
    'Doğal paslanmaz — ek kaplama gerektirmez': 'Naturellement Inoxydable — Aucun Revêtement Supplémentaire Nécessaire',
    'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)': 'Acier Inoxydable + Revêtement PTFE',
    'PTFE (Polytetrafluoroethylene / Teflon®)': 'PTFE (Polytétrafluoroéthylène / Téflon®)',
    '%40-60 sürtünme azaltma': 'Réduction du Frottement 40-60%',
    '0.30mm (0.012")': '0,30 mm (0,012")',

    // Valeurs spéc. lames de hobby
    '#11 Tipi': 'Type N°11',
    '#12 Tipi': 'Type N°12',
    '#13 Tipi': 'Type N°13',
    '#14 Tipi': 'Type N°14',
    '#25 Geniş Gövde': 'N°25 corps large',
    'Eğimli Uç': 'Pointe biseautée',
    'Geniş Profil — Büyük': 'Profil large — grand',
    'Kompakt Eğimli Uç — Küçük': 'Pointe biseautée compacte — petit',
    'Kanca Form': 'Profil crochet',
    'Düz Kenar (Chisel)': 'Tranchant plat (ciseau)',
    'Düz Kenar — Çoklu Boyut': 'Tranchant plat — multi-tailles',
    'Eğimli Geniş Profil': 'Profil large biseauté',
    'Sivri Uç — Geniş Gövde': 'Pointe aiguë — corps large',
    'Kavisli Profil': 'Profil courbe',
    'Kompakt Geniş Profil': 'Profil large compact',
    'OLFA KB Uyumlu': 'Compatible OLFA KB',
    'Ultra İnce Kompakt': 'Ultra-fin compact',
    'OLFA KB4-R Uyumlu': 'Compatible OLFA KB4-R',
    'Dar Dişli (Narrow Serrated)': 'Dentelé étroit',
    'Geniş Dişli (Wide Serrated)': 'Dentelé large',
    'OLFA AK Serisi': 'Série OLFA AK',
    'OLFA AK-4 Serisi': 'Série OLFA AK-4',
    'OLFA KB4-S/5 uyumlu': 'Compatible OLFA KB4-S/5',
    'OLFA KB4-F/5 uyumlu': 'Compatible OLFA KB4-F/5',
    'Dişli Kenar': 'Tranchant dentelé',
    'Çift taraflı': 'Double tranchant',
    'Tek taraflı': 'Simple tranchant',
    '1 Çentik': '1 encoche',
    '12\'li Tüp': 'Tube de 12',
    'Standart': 'Standard',
    'Karbon Çelik': 'Acier carbone',
    'Karbon Çelik / TiN Kaplama': 'Acier carbone / Revêtement TiN',
    'Supaslit': 'Supaslit',
    // Scalpel / Bistouri blade values
    'Non-Steril': 'Non stérile (usage industriel)',
    '#3 Sap Uyumlu': 'Compatible manche N°3 (Bard-Parker)',
    '#4 Sap Uyumlu': 'Compatible manche N°4 (Bard-Parker)',
    '100 Adet/Kutu (20×5 Şerit)': '100 pièces/boîte (20×5 bandes)',
    'No.10 — Kavisli Kesim Kenarı': 'N°10 — Tranchant courbe',
    'No.10A — Düz Geniş Karınlı': 'N°10A — Profil plat à ventre large',
    'No.11 — Üçgen Sivri Uçlu': 'N°11 — Triangulaire à pointe aigüe',
    'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli': 'N°12 — Croissant/Crochet, tranchant intérieur',
    'No.15 — No.10 Küçük Versiyon, Kavisli Kenar': 'N°15 — Version réduite du N°10, tranchant courbe',
    'No.20 — No.10 Büyük Versiyon, Kavisli Kenar': 'N°20 — Version agrandie du N°10, tranchant courbe',
    'No.21 — Büyük Üçgen Profil': 'N°21 — Grand profil triangulaire',
    'No.22 — No.20 Büyük Versiyon, Kavisli Kenar': 'N°22 — Version agrandie du N°20, tranchant courbe',
    'No.23 — Yaprak Şekilli, Uzun İnsizyon': 'N°23 — Forme de feuille, incision longue',
    'No.24 — Geniş Düz Açılı Kenar': 'N°24 — Large plat à tranchant biseauté',
    'No.25 — Öne Bakan Düz Kenar': 'N°25 — Tranchant droit frontal',
    'No.26 — Üçgen Düz Kenar, Aşağı Açılı': 'N°26 — Triangulaire droit, dos incliné',
    'No.27 — Geniş Bıçak Profili': 'N°27 — Profil de lame le plus large',

    // Matériaux des lames pour fibres coupées
    'Paslanmaz Çelik': 'Acier inoxydable',
    'Paslanmaz Çelik + TiN Kaplama': 'Acier inoxydable + Revêtement TiN',
    'Yekpare Tungsten Karbür': 'Carbure de tungstène monobloc',

    // Compatibilité des lames pour fibres
    'Mark IV Elyaf Kesim Makinesi': 'Machine de coupe de fibres Mark IV',
    'Mark V Elyaf Kesim Makinesi': 'Machine de coupe de fibres Mark V',
    'Herkül Elyaf Kesim Makinesi': 'Machine de coupe de fibres Hercule',
    'Krupp Elyaf Kesim Makinesi': 'Machine de coupe de fibres Krupp',

    // Types d'arêtes des lames pour fibres
    'Çentikli': 'Dentelée',
    'Düz (Çentiksiz)': 'Lisse (Sans denture)',

    // Valeurs B581 Lame Hachoir Fibre de Verre
    'Tungsten Karbür Alaşımlı Çelik': 'Acier à Pointe Carbure de Tungstène',
    '30° Çift Taraflı': '30° Double Biseau',
    '25 adet / deste': '25 pcs / lot',

    // Valeurs B657 Lames Circulaires Rotatives
    'Yüksek Karbonlu Çelik / Paslanmaz Çelik': 'Acier à Haute Teneur en Carbone / Acier Inoxydable',
    '18mm / 28mm / 45mm / 60mm': '18 mm / 28 mm / 45 mm / 60 mm',
    '0.30mm – 0.35mm': '0,30 mm – 0,35 mm',
    'OLFA Rotary Cutter': 'Cutter Rotatif OLFA',
    'Altıgen / 3 Çentik': 'Trou Hexagonal / 3 Encoches',

    // Valeurs 2CS1 Lame Pentagonale
    'Yekpare Tungsten Karbür / Yekpare Seramik': 'Carbure de Tungstène Monobloc / Céramique Monobloc',
    'HRC 90+ (Tungsten) / HV 1600+ (Seramik)': 'HRC 90+ (Tungstène) / HV 1600+ (Céramique)',
    '66/63/40 × 0.54 mm': '66/63/40 × 0,54 mm',
    '2 × 4 mm': '2 × 4 mm',
    'Beşgen (Pentagon)': 'Pentagonal',

    // Valeurs B084.075 Lame Lamelle (Feuille)
    'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür': 'Céramique Monobloc (ZrO₂) / Carbure de Tungstène Monobloc',
    'HV 1200+ (Seramik) / HRC 90+ (Tungsten)': 'HV 1200+ (Céramique) / HRC 90+ (Tungstène)',
    '84/80 × 7.5 × 1.0 mm': '84/80 × 7,5 × 1,0 mm',
    'Lamel / Yaprak (Lamella / Leaf)': 'Lamelle / Feuille',

    // Valeurs lames microtome B575 / B724
    'Paslanmaz Çelik + Kaplama': 'Acier inoxydable + Revêtement',
    'Alçak Profil (Low Profile)': 'Profil bas',
    'Yüksek Profil (High Profile)': 'Profil haut',
    '3 Açılı Bileme (Triple Facet)': 'Affûtage triple facette',
    'PTFE / Platin-Krom Kaplama': 'Revêtement PTFE / Platine-Chrome',
    'PTFE / Platin-Krom / Seramik Kaplama': 'Revêtement PTFE / Platine-Chrome / Céramique',
    'Non-Steril / Endüstriyel Kalite': 'Non stérile / Usage industriel',
    'Leica, Thermo, Sakura, SLEE': 'Leica, Thermo, Sakura, SLEE',
    '50 Adet/Kutu': '50 pcs/boîte',

    // Valeurs lames LASIK / Microkératome B723
    '2 Yuva (Double Slot)': '2 Encoches (Double Slot)',
    '1 Yuva (Single Slot)': '1 Encoche (Single Slot)',
    'Yağdan Arındırılmış (Oil-Free)': 'Dégraissée (Sans huile)',
    'Bireysel Steril Paketleme': 'Emballage stérile individuel',
    'Moria, Hansatome, Zyoptix': 'Moria, Hansatome, Zyoptix',
    'Amadeus, Carriazo-Barraquer, Schwind': 'Amadeus, Carriazo-Barraquer, Schwind',
    '5 Adet/Kutu (Bireysel Steril)': '5 pcs/boîte (Stérile individuel)',

    // Valeurs lames grattoir B621
    'Paslanmaz Çelik (Rostfrei)': 'Acier inoxydable (Rostfrei)',
    '3 Delik': '3 trous',
    'Laklı': 'Laquée',
    'Hassas Endüstriyel Bileme': 'Affûtage industriel de précision',
    '60mm / 80mm / 100mm / 150mm': '60mm / 80mm / 100mm / 150mm',

    // Valeurs lame classique B204 (industrielle)
    '43×22×0.10mm (37mm Kesim Kenarı)': '43×22×0.10mm (bord de coupe 37mm)',
    '0.10mm': '0,10mm',
    'Tek Kenar (Single Edge)': 'Simple tranchant',
    'Standart / PTFE Kaplamalı': 'Standard / Revêtement PTFE',
    'Yağlı / Yağsız': 'Huilée / Sans huile',
    '250li Kutu / 2000li Çubuklu Kutu': 'Boîte 250 pcs / Boîte bâton 2000 pcs',

    // Valeurs lame classique B684/B685 (médicale)
    '38×19×0.10mm': '38×19×0,10mm',
    'Kaplamalı': 'Revêtue',
    '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)': '100 pcs/boîte (B684) — 250 pcs/boîte (B685)',

    // Valeurs lame plaque de plâtre B207 XXL
    '170×19×0.80mm': '170×19×0,80mm',
    '0.80mm': '0,80mm',
    '2 Çentik + 4 Delik': '2 Encoches + 4 Trous',

    // Valeurs lame flèche OK
    '30.4×25.0×0.50mm': '30,4×25,0×0,50mm',
    '0.50mm': '0,50mm',
    'Çift Taraflı Bileme (Double Edge)': 'Affûtage Double Tranchant',
    '2 Açık Yuva (Slot) + 1 Delik': '2 Fentes Ouvertes + 1 Trou',
  },

  // =============================================================================
  // RUSSIAN (Русский)
  // =============================================================================
  ru: {
    // Materials
    'Sheffield Çelik': 'Шеффилдская сталь',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'Высокоуглеродистая сталь (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'Мартенситная нержавеющая сталь AISI 420',
    'AISI 420 Paslanmaz Çelik': 'Нержавеющая сталь AISI 420',
    'Silindirik Dairesel Bıçak': 'Цилиндрическое дисковое лезвие',
    'Marel, Meyn, Baader, Stork': 'Marel, Meyn, Baader, Stork',
    'CE, Gıda Sınıfı Hijyen': 'CE, Пищевая гигиена',
    'HRC 50-54': 'HRC 50-54',
    'AISI 420 Paslanmaz Çelik + TiN Kaplama': 'Нержавеющая сталь AISI 420 + покрытие TiN',
    'AISI 420 Paslanmaz Çelik + PTFE Kaplama': 'Нержавеющая сталь AISI 420 + покрытие PTFE',
    'AISI 420 Paslanmaz Çelik + XCD Kaplama': 'Нержавеющая сталь AISI 420 + покрытие XCD',
    'AISI 420 Paslanmaz Çelik + İleri Seramik Kaplama': 'Нержавеющая сталь AISI 420 + керамическое покрытие',
    'Yüksek Karbonlu Çelik + TiN Kaplama': 'Высокоуглеродистая сталь + покрытие TiN',
    'Yüksek Karbonlu Çelik + Seramik Kaplama': 'Высокоуглеродистая сталь + керамическое покрытие',
    'Yüksek Karbonlu Çelik + İleri Seramik Kaplama': 'Высокоуглеродистая сталь + усовершенствованное керамическое покрытие',
    'Endurium HSS + İleri Seramik Kaplama': 'Endurium HSS + усовершенствованное керамическое покрытие',
    'Tungsten Karbür (WC-Co)': 'Карбид вольфрама (WC-Co)',
    'Yekpare Tungsten Karbür (WC-Co)': 'Цельный карбид вольфрама (WC-Co)',
    'Yekpare Zirkonya Seramik (Y-TZP)': 'Цельная циркониевая керамика (Y-TZP)',
    'Zirkonyum Oksit Bazlı Seramik (ZrO₂)': 'Керамика на основе оксида циркония (ZrO₂)',
    'Paslanmaz Çelik (420HC) + TiN Kaplama': 'Нержавеющая сталь (420HC) + покрытие TiN',
    '440C Paslanmaz Çelik': 'Нержавеющая сталь 440C',
    'D2 Çelik': 'Сталь D2',
    'HSS (High Speed Steel - Yüksek Hız Çeliği)': 'HSS (Быстрорежущая сталь)',
    'Dayanıklı Plastik': 'Прочный пластик',
    'WC + %6-10 Kobalt bağlayıcı': 'WC + 6-10% кобальтовая связка',
    '%94 WC + %6 Co': '94% WC + 6% Co',

    // Coatings
    'TiN (Titanyum Nitrür)': 'TiN (нитрид титана)',
    'TiN (Titanyum Nitrür) - PVD': 'TiN (нитрид титана) - PVD',
    'PTFE (Politetrafloroetilen / Teflon)': 'PTFE (политетрафторэтилен / тефлон)',
    'XCD (Xtreme Carbon Diamond) - DLC': 'XCD (алмазоподобный углерод) - DLC',
    'İleri Seramik Kaplama (Titanyum Bazlı)': 'Керамическое покрытие (на основе титана)',
    'Çok Katmanlı İleri Seramik': 'Многослойная керамика',
    'PVD': 'PVD',
    'PVD (Fiziksel Buhar Biriktirme)': 'PVD (физическое осаждение из паровой фазы)',
    'Standart veya Titanyum Kaplama': 'Стандартное или титановое покрытие',

    // Heat Treatment
    'Kontrollü Atmosfer + Temperleme': 'Контролируемая атмосфера + отпуск',
    'Vakum Isıl İşlem': 'Вакуумная термообработка',

    // Hardness Values
    'HRC 58-60': 'HRC 58-60',
    'HRC 58-62': 'HRC 58-62',
    'HRC 59-61': 'HRC 59-61',
    'HRC 54-56': 'HRC 54-56',
    'HRC 62-65': 'HRC 62-65',
    'HRC 64-66 (Substrat) / 3500 HV (Kaplama)': 'HRC 64-66 (основа) / 3500 HV (покрытие)',
    'HRC 59-61 (Substrat) / 2300 HV (Kaplama)': 'HRC 59-61 (основа) / 2300 HV (покрытие)',
    'HRC 59-61 (Substrat) / 3200 HV (Kaplama)': 'HRC 59-61 (основа) / 3200 HV (покрытие)',
    'HRC 54-56 (Substrat)': 'HRC 54-56 (основа)',
    'HRC 54-56 (Substrat) / 2300 HV (Kaplama)': 'HRC 54-56 (основа) / 2300 HV (покрытие)',
    'HRC 54-56 (Substrat) / 3200 HV (Kaplama)': 'HRC 54-56 (основа) / 3200 HV (покрытие)',
    'HRC 54-56 (Substrat) / 5000 HV (Kaplama)': 'HRC 54-56 (основа) / 5000 HV (покрытие)',
    'HRC 56-58 | Kaplama: 2300 HV': 'HRC 56-58 | Покрытие: 2300 HV',
    'Ana gövde: HRC 56-58 | Kaplama: 2300 HV': 'Корпус: HRC 56-58 | Покрытие: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 2300 HV': 'Корпус: HRC 59-61 | Покрытие: 2300 HV',
    'Ana gövde: HRC 59-61 | Kaplama: 3200+ HV': 'Корпус: HRC 59-61 | Покрытие: 3200+ HV',
    'HRA 92-94 (HRC 75+ eşdeğer)': 'HRA 92-94 (эквивалент HRC 75+)',
    'HRA 89-92 (≈HRC 72-76)': 'HRA 89-92 (≈HRC 72-76)',
    'HV 1200-1400': 'HV 1200-1400',
    '1200 HV': '1200 HV',

    // Angles
    '20°': '20°',
    '22°': '22°',
    '25°': '25°',
    '30°': '30°',

    // Dimensions
    '38 x 8 x 0.25 mm': '38 x 8 x 0,25 мм',
    '38 x 8 x 0.30 mm': '38 x 8 x 0,30 мм',
    '38 x 8 x 0.36 mm': '38 x 8 x 0,36 мм',
    '38 x 8 x 0.64 mm': '38 x 8 x 0,64 мм',
    '60mm x 22mm': '60 мм x 22 мм',
    '2x 30mm yarım jilet': '2x полулезвие 30 мм',
    'Geniş Format': 'Широкий формат',

    // Carbon Content
    '%0.85-1.00': '0,85-1,00%',
    '%12-14': '12-14%',
    '%12-14 Krom': '12-14% хрома',
    '%40': '40%',
    '%50-60': '50-60%',

    // Friction Coefficients
    '<0.1': '<0,1',
    '~0.04': '~0,04',
    '~0.1 (çeliğin 1/5\'i)': '~0,1 (1/5 от стали)',

    // Density
    '6.05 g/cm³': '6,05 г/см³',
    '14.5-15.0 g/cm³': '14,5-15,0 г/см³',
    '14.8 g/cm³': '14,8 г/см³',

    // Temperature Resistance
    '600°C': '600°C',
    '800°C': '800°C',

    // Colors
    'Altın Sarısı': 'Золотистый',
    'Beyaz (Bembeyaz Seramik)': 'Белый (белоснежная керамика)',
    'Koyu Gri / Siyah': 'Тёмно-серый / Чёрный',
    'Gri': 'Серый',

    // Edge Types
    'Düz Kesim Ağzı': 'Прямая режущая кромка',
    'Testere Dişli (Serrated)': 'Зубчатая',
    'Yuvarlak Kenar': 'Закруглённая кромка',
    'Yuvarlak Kenar (Traş jileti formu)': 'Закруглённая кромка (форма бритвенного лезвия)',

    // Shapes
    'Dairesel (Circular)': 'Круглая',
    'Oval (Ellipse)': 'Овальная',
    'Yuvarlak (Round)': 'Круглая',
    'Tam Yıldız (Full Star)': 'Полная звезда',
    'Yarım Yıldız (Half Star)': 'Полузвезда',
    'Hava Delikli': 'С вентиляционными отверстиями',
    'Lazer işlemeli': 'Лазерная обработка',

    // Slot Types
    'Yuvasız': 'Без паза',
    '2 Kanallı Yuva (Güçlendirilmiş Kavrama)': 'Двухканальный паз (усиленный захват)',
    'Ortadan bölünebilir çizik hattı': 'Центральная линия разлома',
    'Standart Kapasite': 'Стандартная ёмкость',

    // Performance
    'Çeliğe göre 10-50x': 'В 10-50 раз больше стали',
    'Karbon çeliğe göre %25-30 daha güçlü': 'На 25-30% прочнее углеродистой стали',
    'Yüksek': 'Высокая',
    'Çok Yüksek': 'Очень высокая',
    'Düşük (ısı yalıtımı)': 'Низкая (теплоизоляция)',
    'Yok (İzolator)': 'Нет (изолятор)',
    'İnert (reaktif değil)': 'Инертный (нереактивный)',

    // Microstructure
    'İnce tane (0.5-1.0 µm)': 'Мелкое зерно (0,5-1,0 мкм)',

    // Vacuum Packaging Values
    'Sheffield Çelik (Yüksek Karbonlu)': 'Шеффилдская высокоуглеродистая сталь',
    'D2 Takım Çeliği (DIN 1.2379)': 'Инструментальная сталь D2 (DIN 1.2379)',
    'HSS M2 (DIN 1.3343)': 'Быстрорежущая сталь HSS M2 (DIN 1.3343)',
    'AISI 440C Martensitik Paslanmaz': 'Мартенситная нержавеющая AISI 440C',
    'Standart veya TiN PVD (2300 HV)': 'Стандарт или TiN PVD (2300 HV)',
    'Ra ≤0.4 µm (Gıda Sınıfı)': 'Ra ≤0,4 мкм (Пищевой класс)',
    'Ra ≤0.3 µm (Elektropolisaj)': 'Ra ≤0,3 мкм (Электрополировка)',
    'Kontör/Profil Takipli Kesim': 'Контурный/профильный рез',
    '600°C (Kırmızı Sertlik)': '600°C (Красностойкость)',
    'Düz Kesim (Straight Edge)': 'Прямой рез',
    'Dinamik Dengelenmiş (3000+ RPM)': 'Динамическая балансировка (3000+ об/мин)',
    'Yarım Yıldız (Half Star / Triangle)': 'Полузвезда (Треугольник)',
    'Dairesel (Circular Rotary)': 'Круглое (Роторное)',
    'Mikro-Serrated (Testere Dişli)': 'Микрозубчатый (Пильчатый)',
    'Yuvarlak (Round) Hava Deliği': 'Круглое воздушное отверстие',
    'Oval (Elips) Hava Deliği': 'Овальное воздушное отверстие',
    'Yuvarlak ile karşılaştırıldığında %40 daha geniş alan': 'На 40% больше площадь чем круглый',
    '±0.02mm CNC hassasiyet': '±0,02мм Точность ЧПУ',
    'Kalın film, Al folyo, PET/PVC rigid': 'Толстая плёнка, Ал-фольга, PET/PVC жёсткий',
    'Kontrollü atmosfer fırını': 'Печь с контролируемой атмосферой',
    '%17 Cr (Yüksek Korozyon Direnci)': '17% Cr (Высокая коррозионная стойкость)',

    // Односторонние лезвия — серия B201
    'Yüksek Karbonlu Çelik': 'Высокоуглеродистая сталь',
    'Paslanmaz Çelik (Stainless Steel)': 'Нержавеющая сталь',
    'Paslanmaz Çelik + PTFE': 'Нержавеющая сталь + PTFE',
    'PTFE (Teflon®)': 'PTFE (Тефлон®)',
    'HRC 55-58': 'HRC 55-58',
    '0.23mm (0.009")': '0,23мм (0,009")',
    '0.30mm (0.012") — Heavy Duty': '0,30мм (0,012") — Heavy Duty',
    '38×19mm': '38×19мм',
    '38×19mm / 38×17mm': '38×19мм / 38×17мм',
    '2-Facet': '2-Facet',
    '3-Facet': '3-Facet',
    '3-Facet (Ultra Keskin)': '3-Facet (Сверхострый)',
    'Alüminyum': 'Алюминиевый',
    'Alüminyum / Metal Spine': 'Алюминиевый / Металлический',
    'Kılıflı / Kılıfsız / 1000 Adet Bulk': 'В футляре / Без футляра / 1000 шт. опт',
    '%13+': '13%+',
    '%40-60': '40-60%',
    // Значения спецификаций трапециевидных лезвий
    'Yüksek Karbon Çelik (SK5)': 'Высокоуглеродистая сталь (SK5)',
    '0.63mm (standart) / 1.00mm (paslanmaz)': '0,63мм (стандарт) / 1,00мм (нерж.)',
    '50×19 / 53×19 / 58×19 / 60×19 / 100×19 mm': '50×19 / 53×19 / 58×19 / 60×19 / 100×19 мм',
    'Trapez (Utility)': 'Трапециевидная (Utility)',
    '2 veya 3 çentik': '2 или 3 насечки',
    '0-5 delik (konfigürasyona göre)': '0-5 отверстий (по конфигурации)',
    'Çift taraflı / Tek taraflı bileme': 'Двусторонняя / Односторонняя заточка',
    'Standart / TiN Kaplama': 'Стандарт / Покрытие TiN',
    '5, 10, 100 adet (dispenser / kutu)': '5, 10, 100 шт. (диспенсер / коробка)',
    '0.43mm': '0,43мм',
    '50×19 / 59×19 mm': '50×19 / 59×19 мм',
    '2 çentik': '2 насечки',
    'Deliksiz / 2×6.4mm delik': 'Без отверстий / 2×6,4мм отверстия',
    '5, 10, 100 adet': '5, 10, 100 шт.',
    '1.0mm': '1,0мм',
    '82×25 mm': '82×25 мм',
    'Trapez (Geniş Gövde)': 'Трапециевидная (Широкий корпус)',
    '2 delik': '2 отверстия',
    'Tek taraftan tırtıklı kenar': 'Односторонний зубчатый край',
    '0.63mm': '0,63мм',
    '61×12.5 mm': '61×12,5 мм',
    'Kompakt Trapez': 'Компактная трапециевидная',
    '1 delik': '1 отверстие',
    '71×17 mm': '71×17 мм',
    'Trapez (Özel Boyut)': 'Трапециевидная (Спец. размер)',
    '1×6mm delik': 'отверстие 1×6мм',
    '27.6×9 mm': '27,6×9 мм',
    'Mikro Trapez': 'Микро трапециевидная',
    '3×3.5mm delik': 'отверстия 3×3,5мм',
    'Trapez Uzun (L)': 'Трапециевидная длинная (L)',
    'Standart B207 serisi genişletilmiş': 'Стандартная серия B207 расширенная',
    'Trapez XXL (Ekstra Uzun)': 'Трапециевидная XXL (Сверхдлинная)',
    'B207 serisi ekstra genişletilmiş': 'Серия B207 экстра расширенная',
    'Karbon / Paslanmaz / TiN Kaplama': 'Углеродистая / Нерж. / Покрытие TiN',
    '0.43 / 0.63 / 1.00 mm': '0,43 / 0,63 / 1,00 мм',
    '100×19 mm (büyük boy) + özel boyutlar': '100×19 мм (большой) + спец. размеры',
    'Özel Tasarım Trapez': 'Трапец. индивидуального дизайна',
    'Müşteriye özel (1-5 çentik)': 'По заказу клиента (1-5 насечек)',
    'Müşteriye özel delik konfigürasyonu': 'Индивидуальная конфигурация отверстий',

    // Значения спецификаций для ремесленных лезвий
    'SK5 Yüksek Karbonlu Çelik': 'Высокоуглеродистая сталь SK5',
    'Yekpare Seramik / Sheffield Çelik': 'Монолитная керамика / Шеффилдская сталь',
    'Standart / TiN (Titanyum Nitrür)': 'Стандарт / TiN (нитрид титана)',
    'Standart / Ekstra Keskin (Black Blade)': 'Стандарт / Ультраострый (чёрное лезвие)',
    'Testere dişi profili (serrated)': 'Зубчатый профиль режущей кромки',
    '55° (standart) / 30° (keskin açı)': '55° (стандарт) / 30° (острый угол)',
    '60×18×0.50mm': '60×18×0,50 мм',
    '80×9×0.40mm': '80×9×0,40 мм',
    '89×12×0.50mm': '89×12×0,50 мм',
    '92×8.2×0.43mm': '92×8,2×0,43 мм',
    '100×18×0.50mm': '100×18×0,50 мм',
    '106×25×0.50mm': '106×25×0,50 мм',
    '127×25×0.70mm': '127×25×0,70 мм',
    '83.3×12.5×0.45mm': '83,3×12,5×0,45 мм',
    '5 adet/tüp': '5 шт/тюбик',
    '10 adet/tüp': '10 шт/тюбик',
    '3 adet/paket': '3 шт/пакет',

    // Размеры 3D-лезвий и слиттерных ножей
    '43x22mm': '43×22 мм',
    '57x19mm': '57×19 мм',
    '60x22mm': '60×22 мм',
    '38x19mm': '38×19 мм',
    '61×12.5×0.63mm': '61×12,5×0,63 мм',
    '71×17×0.63mm': '71×17×0,63 мм',
    '27.6×9×0.43mm': '27,6×9×0,43 мм',
    '0.10mm, 0.15mm, 0.20mm, 0.30mm, 0.40mm': '0,10мм, 0,15мм, 0,20мм, 0,30мм, 0,40мм',
    '0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm': '0,25мм, 0,36мм, 0,38мм, 0,43мм, 0,63мм',
    '0.15mm, 0.20mm, 0.30mm': '0,15мм, 0,20мм, 0,30мм',
    '55°': '55°',

    // Дополнительные значения односторонних лезвий
    'Yüksek Karbonlu Çelik (High Carbon Steel)': 'Высокоуглеродистая сталь',
    'Korozyona dayanıklı yüzey işlemi': 'Коррозионностойкая обработка поверхности',
    'Kontrollü atmosfer sertleştirme': 'Закалка в контролируемой атмосфере',
    '38x19mm (kılıflı) / 38x17mm (kılıfsız)': '38×19мм (в чехле) / 38×17мм (без чехла)',
    '%13+ Krom içeriği': '13%+ содержание хрома',
    'Doğal paslanmaz — ek kaplama gerektirmez': 'Естественно нержавеющая — доп. покрытие не требуется',
    'Paslanmaz Çelik + PTFE Kaplama (Stainless Steel + PTFE)': 'Нержавеющая сталь + покрытие PTFE',
    'PTFE (Polytetrafluoroethylene / Teflon®)': 'PTFE (политетрафторэтилен / Тефлон®)',
    '%40-60 sürtünme azaltma': 'Снижение трения 40-60%',
    '0.30mm (0.012")': '0,30мм (0,012")',

    // Значения спецификаций лезвий для хобби
    '#11 Tipi': 'Тип № 11',
    '#12 Tipi': 'Тип № 12',
    '#13 Tipi': 'Тип № 13',
    '#14 Tipi': 'Тип № 14',
    '#25 Geniş Gövde': '№ 25 широкий корпус',
    'Eğimli Uç': 'Скошенный кончик',
    'Geniş Profil — Büyük': 'Широкий профиль — большой',
    'Kompakt Eğimli Uç — Küçük': 'Компактный скошенный кончик — малый',
    'Kanca Form': 'Крючковый профиль',
    'Düz Kenar (Chisel)': 'Плоский край (стамеска)',
    'Düz Kenar — Çoklu Boyut': 'Плоский край — многоразмерный',
    'Eğimli Geniş Profil': 'Широкий скошенный профиль',
    'Sivri Uç — Geniş Gövde': 'Острый кончик — широкий корпус',
    'Kavisli Profil': 'Изогнутый профиль',
    'Kompakt Geniş Profil': 'Компактный широкий профиль',
    'OLFA KB Uyumlu': 'Совместимо с OLFA KB',
    'Ultra İnce Kompakt': 'Ультратонкий компактный',
    'OLFA KB4-R Uyumlu': 'Совместимо с OLFA KB4-R',
    'Dar Dişli (Narrow Serrated)': 'Узкие зубцы',
    'Geniş Dişli (Wide Serrated)': 'Широкие зубцы',
    'OLFA AK Serisi': 'Серия OLFA AK',
    'OLFA AK-4 Serisi': 'Серия OLFA AK-4',
    'OLFA KB4-S/5 uyumlu': 'Совместимо с OLFA KB4-S/5',
    'OLFA KB4-F/5 uyumlu': 'Совместимо с OLFA KB4-F/5',
    'Dişli Kenar': 'Зубчатый край',
    'Çift taraflı': 'Двусторонняя',
    'Tek taraflı': 'Односторонняя',
    '1 Çentik': '1 насечка',
    '12\'li Tüp': 'Туба 12 шт.',
    'Standart': 'Стандарт',
    'Karbon Çelik': 'Углеродистая сталь',
    'Karbon Çelik / TiN Kaplama': 'Углеродистая сталь / покрытие TiN',
    'Supaslit': 'Supaslit',
    // Scalpel / Скальпель blade values
    'Non-Steril': 'Нестерильное (промышленного класса)',
    '#3 Sap Uyumlu': 'Совместимо с рукояткой #3 (Бард-Паркер)',
    '#4 Sap Uyumlu': 'Совместимо с рукояткой #4 (Бард-Паркер)',
    '100 Adet/Kutu (20×5 Şerit)': '100 шт/коробка (20×5 полосок)',
    'No.10 — Kavisli Kesim Kenarı': 'No.10 — Изогнутая режущая кромка',
    'No.10A — Düz Geniş Karınlı': 'No.10A — Плоский широкий профиль',
    'No.11 — Üçgen Sivri Uçlu': 'No.11 — Треугольное с острым кончиком',
    'No.12 — Hilal/Kanca Şeklinde İç Kenar Bileli': 'No.12 — Серповидное/крючкообразное, внутренняя кромка',
    'No.15 — No.10 Küçük Versiyon, Kavisli Kenar': 'No.15 — Уменьшенная версия No.10, изогнутая кромка',
    'No.20 — No.10 Büyük Versiyon, Kavisli Kenar': 'No.20 — Увеличенная версия No.10, изогнутая кромка',
    'No.21 — Büyük Üçgen Profil': 'No.21 — Крупное треугольное',
    'No.22 — No.20 Büyük Versiyon, Kavisli Kenar': 'No.22 — Увеличенная версия No.20, изогнутая кромка',
    'No.23 — Yaprak Şekilli, Uzun İnsizyon': 'No.23 — Листообразное, длинные разрезы',
    'No.24 — Geniş Düz Açılı Kenar': 'No.24 — Широкое плоское со скошенной кромкой',
    'No.25 — Öne Bakan Düz Kenar': 'No.25 — Фронтальное прямое',
    'No.26 — Üçgen Düz Kenar, Aşağı Açılı': 'No.26 — Треугольное прямое, скошенная спинка',
    'No.27 — Geniş Bıçak Profili': 'No.27 — Самое широкое лезвие серии',

    // Материалы лезвий для рубленого волокна
    'Paslanmaz Çelik': 'Нержавеющая сталь',
    'Paslanmaz Çelik + TiN Kaplama': 'Нержавеющая сталь + TiN покрытие',
    'Yekpare Tungsten Karbür': 'Цельный карбид вольфрама',

    // Совместимость лезвий для волокна
    'Mark IV Elyaf Kesim Makinesi': 'Волокнорезательная машина Mark IV',
    'Mark V Elyaf Kesim Makinesi': 'Волокнорезательная машина Mark V',
    'Herkül Elyaf Kesim Makinesi': 'Волокнорезательная машина Геркулес',
    'Krupp Elyaf Kesim Makinesi': 'Волокнорезательная машина Крупп',

    // Типы кромки лезвий для волокна
    'Çentikli': 'Зубчатое',
    'Düz (Çentiksiz)': 'Гладкое (Без зубцов)',

    // Значения B581 Лезвие для рубки стекловолокна
    'Tungsten Karbür Alaşımlı Çelik': 'Сталь с напайкой из карбида вольфрама',
    '30° Çift Taraflı': '30° Двусторонняя заточка',
    '25 adet / deste': '25 шт / пачка',

    // Значения B657 Круговые дисковые лезвия
    'Yüksek Karbonlu Çelik / Paslanmaz Çelik': 'Высокоуглеродистая сталь / Нержавеющая сталь',
    '18mm / 28mm / 45mm / 60mm': '18 мм / 28 мм / 45 мм / 60 мм',
    '0.30mm – 0.35mm': '0,30 мм – 0,35 мм',
    'OLFA Rotary Cutter': 'Роторный резак OLFA',
    'Altıgen / 3 Çentik': 'Шестигранное отверстие / 3 паза',

    // Значения 2CS1 Пятиугольное лезвие
    'Yekpare Tungsten Karbür / Yekpare Seramik': 'Цельный карбид вольфрама / Цельная керамика',
    'HRC 90+ (Tungsten) / HV 1600+ (Seramik)': 'HRC 90+ (вольфрам) / HV 1600+ (керамика)',
    '66/63/40 × 0.54 mm': '66/63/40 × 0,54 мм',
    '2 × 4 mm': '2 × 4 мм',
    'Beşgen (Pentagon)': 'Пятиугольник',

    // Значения B084.075 Ламельное (листовое) лезвие
    'Yekpare Seramik (ZrO₂) / Yekpare Tungsten Karbür': 'Цельная керамика (ZrO₂) / Цельный карбид вольфрама',
    'HV 1200+ (Seramik) / HRC 90+ (Tungsten)': 'HV 1200+ (керамика) / HRC 90+ (вольфрам)',
    '84/80 × 7.5 × 1.0 mm': '84/80 × 7,5 × 1,0 мм',
    'Lamel / Yaprak (Lamella / Leaf)': 'Ламель / Лист',

    // Значения микротомных лезвий B575 / B724
    'Paslanmaz Çelik + Kaplama': 'Нержавеющая сталь + Покрытие',
    'Alçak Profil (Low Profile)': 'Низкий профиль',
    'Yüksek Profil (High Profile)': 'Высокий профиль',
    '3 Açılı Bileme (Triple Facet)': 'Трёхгранная заточка',
    'PTFE / Platin-Krom Kaplama': 'PTFE / Платина-хром покрытие',
    'PTFE / Platin-Krom / Seramik Kaplama': 'PTFE / Платина-хром / Керамическое покрытие',
    'Non-Steril / Endüstriyel Kalite': 'Нестерильное / Промышленного класса',
    'Leica, Thermo, Sakura, SLEE': 'Leica, Thermo, Sakura, SLEE',
    '50 Adet/Kutu': '50 шт/коробка',

    // Значения лезвий LASIK / Микрокератом B723
    '2 Yuva (Double Slot)': '2 Паза (Double Slot)',
    '1 Yuva (Single Slot)': '1 Паз (Single Slot)',
    'Yağdan Arındırılmış (Oil-Free)': 'Обезжиренное (Oil-Free)',
    'Bireysel Steril Paketleme': 'Индивидуальная стерильная упаковка',
    'Moria, Hansatome, Zyoptix': 'Moria, Hansatome, Zyoptix',
    'Amadeus, Carriazo-Barraquer, Schwind': 'Amadeus, Carriazo-Barraquer, Schwind',
    '5 Adet/Kutu (Bireysel Steril)': '5 шт/коробка (Индивидуально стерильные)',

    // Значения лезвий скребка B621
    'Paslanmaz Çelik (Rostfrei)': 'Нержавеющая сталь (Rostfrei)',
    '3 Delik': '3 отверстия',
    'Laklı': 'Лакированное',
    'Hassas Endüstriyel Bileme': 'Точная промышленная заточка',
    '60mm / 80mm / 100mm / 150mm': '60мм / 80мм / 100мм / 150мм',

    // Значения классического лезвия B204 (промышленное)
    '43×22×0.10mm (37mm Kesim Kenarı)': '43×22×0,10мм (режущая кромка 37мм)',
    '0.10mm': '0,10мм',
    'Tek Kenar (Single Edge)': 'Односторонний',
    'Standart / PTFE Kaplamalı': 'Стандартное / с PTFE покрытием',
    'Yağlı / Yağsız': 'С маслом / Без масла',
    '250li Kutu / 2000li Çubuklu Kutu': 'Коробка 250 шт / Коробка-стик 2000 шт',

    // Значения классического лезвия B684/B685 (медицинское)
    '38×19×0.10mm': '38×19×0,10мм',
    'Kaplamalı': 'С покрытием',
    '100 Adet/Kutu (B684) — 250 Adet/Kutu (B685)': '100 шт/кор. (B684) — 250 шт/кор. (B685)',

    // Значения лезвия для гипсокартона B207 XXL
    '170×19×0.80mm': '170×19×0,80мм',
    '0.80mm': '0,80мм',
    '2 Çentik + 4 Delik': '2 насечки + 4 отверстия',

    // Значения лезвия-стрелки OK
    '30.4×25.0×0.50mm': '30,4×25,0×0,50мм',
    '0.50mm': '0,50мм',
    'Çift Taraflı Bileme (Double Edge)': 'Двусторонняя заточка',
    '2 Açık Yuva (Slot) + 1 Delik': '2 открытых паза + 1 отверстие',
  },
};

/**
 * Spec değeri çevirisini getir
 * @param value - Orijinal Türkçe değer
 * @param locale - Hedef dil
 * @returns Çevrilmiş değer veya orijinal (fallback)
 */
export function getSpecValueTranslation(value: string, locale: string): string {
  if (locale === 'tr') return value;
  const translations = specValueTranslations[locale];
  if (!translations) return value;
  const translated = translations[value];
  if (!translated && process.env.NODE_ENV === 'development') {
    console.warn(`[i18n] Missing spec value translation: "${value}" for locale "${locale}"`);
  }
  return translated || value;
}

export default specValueTranslations;
