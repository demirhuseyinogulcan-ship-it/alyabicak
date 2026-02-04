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
  },

  // =============================================================================
  // ENGLISH
  // =============================================================================
  en: {
    // Materials
    'Sheffield Çelik': 'Sheffield Steel',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'High Carbon Steel (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'AISI 420 Martensitic Stainless Steel',
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
  },

  // =============================================================================
  // ARABIC (العربية)
  // =============================================================================
  ar: {
    // Materials
    'Sheffield Çelik': 'فولاذ شيفيلد',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'فولاذ عالي الكربون (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'فولاذ مقاوم للصدأ مارتنسيتي AISI 420',
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
  },

  // =============================================================================
  // RUSSIAN (Русский)
  // =============================================================================
  ru: {
    // Materials
    'Sheffield Çelik': 'Шеффилдская сталь',
    'Yüksek Karbonlu Çelik (SK5 / C85)': 'Высокоуглеродистая сталь (SK5 / C85)',
    'AISI 420 Martensitik Paslanmaz Çelik': 'Мартенситная нержавеющая сталь AISI 420',
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
  },
};

/**
 * Spec değeri çevirisini getir
 * @param value - Orijinal Türkçe değer
 * @param locale - Hedef dil
 * @returns Çevrilmiş değer veya orijinal (fallback)
 */
export function getSpecValueTranslation(value: string, locale: string): string {
  const translations = specValueTranslations[locale];
  if (!translations) return value;
  return translations[value] || value;
}

export default specValueTranslations;
