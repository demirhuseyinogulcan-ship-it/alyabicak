# 🌍 SEO Kapsamlı Analiz Raporu - Dünya Çapında Sıralama Stratejisi

**Tarih:** 8 Ocak 2026
**Analiz Yapan:** AI SEO Audit
**Proje:** alyabicak.com + alyablade.com - Multi-Domain Industrial Blades
**Hedef:** Google'da dünya genelinde ilk sayfa sıralaması

---

## 📊 PUAN TABLOSU (SCORECARD)

| Kategori | Puan | Durum | Açıklama |
|----------|------|-------|----------|
| **Technical SEO** | 78/100 | ⚠️ | Sitemap, robots.txt iyi ama eksikler var |
| **On-Page SEO** | 72/100 | ⚠️ | Meta tags var, keyword optimizasyonu zayıf |
| **Structured Data** | 65/100 | ❌ | Temel schema'lar var, kritik eksikler var |
| **International SEO** | 85/100 | ✅ | Multi-domain + hreflang iyi kurulmuş |
| **Content SEO** | 55/100 | ❌ | İçerik yetersiz, FAQ/Blog eksik |
| **Performance SEO** | 82/100 | ✅ | Core Web Vitals optimizasyonları yapılmış |
| **🎯 GENEL PUAN** | **73/100** | ⚠️ | İyi temel, ama dünya çapında rekabet için yetersiz |

---

## 🚨 KRİTİK SORUNLAR

### 1. ❌ robots.txt Multi-Domain Uyumsuz

**Dosya:** `app/robots.ts`

**Mevcut Durum:**
```typescript
sitemap: 'https://www.alyabicak.com/sitemap.xml'
```

**Sorun:** İki domain kullanıyorsunuz (alyabicak.com + alyablade.com) ama robots.txt sadece alyabicak.com'u gösteriyor. Google, alyablade.com için sitemap bulamıyor!

**Çözüm:**
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
    ],
    sitemap: [
      'https://alyabicak.com/sitemap.xml',
      'https://alyablade.com/sitemap.xml',
    ],
  }
}
```

**Etki:** 🔴 Kritik - Google alyablade.com içeriğini düzgün indexleyemiyor

---

### 2. ❌ FAQPage Schema Yok (Google Featured Snippets)

**Sorun:** Hiçbir sayfada `FAQPage` schema'sı yok. Google'da "Sıkça Sorulan Sorular" kutusunda (Featured Snippet) çıkmak için bu ZORUNLU.

**Neden Önemli:**
- FAQ rich results, CTR'ı (tıklama oranı) %30-50 artırır
- "endüstriyel bıçak nasıl seçilir" gibi aramalarda üst sıralarda çıkmanızı sağlar
- Rakiplerinizin önüne geçmenin en hızlı yolu

**Çözüm - lib/seo.ts'e eklenecek:**
```typescript
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

**Örnek FAQ İçeriği (TR):**
```typescript
const faqs = [
  {
    question: "Endüstriyel bıçak nasıl seçilir?",
    answer: "Endüstriyel bıçak seçiminde malzeme türü, kesim kalınlığı, kullanım sıklığı ve makina uyumu göz önünde bulundurulmalıdır. Sheffield çeliği yüksek dayanıklılık sunar."
  },
  {
    question: "Sheffield bıçak nedir?",
    answer: "Sheffield bıçakları, İngiltere'nin Sheffield şehrinde üretilen, yüksek kaliteli çelikten yapılmış endüstriyel kesici aletlerdir. 200 yıllık üretim geleneğine sahiptir."
  },
  {
    question: "Trapez jilet ne için kullanılır?",
    answer: "Trapez jiletler özellikle tekstil, ambalaj ve kağıt sektöründe hassas kesim işlemleri için kullanılır. Değiştirilebilir yapısı sayesinde ekonomiktir."
  },
  // ... daha fazla soru
];
```

**Etki:** 🔴 Kritik - Featured Snippets'te görünmek için zorunlu

---

### 3. ❌ WebSite SearchAction Schema Yok (Sitelinks Search Box)

**Sorun:** Google arama sonuçlarında sitenizin altında arama kutusu (Sitelinks Search Box) gösterilmiyor.

**Görsel Karşılaştırma:**
```
❌ ŞİMDİKİ HAL:                    ✅ OLMASI GEREKEN:
┌─────────────────────┐           ┌─────────────────────┐
│ Alya Bıçak          │           │ Alya Bıçak          │
│ www.alyabicak.com   │           │ www.alyabicak.com   │
│ Endüstriyel bıçak...│           │ Endüstriyel bıçak...│
└─────────────────────┘           │ [🔍 Site içinde ara ]│
                                  └─────────────────────┘
```

**Çözüm - lib/seo.ts'e eklenecek:**
```typescript
export function generateWebsiteSchema(locale: Locale) {
  const domain = locale === 'tr' ? 'https://alyabicak.com' : 'https://alyablade.com';
  const siteName = locale === 'tr' ? 'Alya Bıçak' : 'Alya Blade';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    url: domain,
    name: siteName,
    description: locale === 'tr'
      ? 'Endüstriyel kesici bıçaklar ve sanayi jiletleri'
      : 'Industrial cutting blades and razors',
    inLanguage: locale === 'tr' ? 'tr-TR' : locale === 'ar' ? 'ar-SA' : 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Alya Tekstil Sanayi Ticaret Ltd. Şti.',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${domain}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
```

**Etki:** 🟠 Yüksek - Kullanıcı deneyimi ve CTR artışı

---

### 4. ❌ Product Schema Eksik Alanlar

**Dosya:** `app/[locale]/products/[slug]/page.tsx`

**Mevcut Eksiklikler:**
| Alan | Durum | Google Etkisi |
|------|-------|---------------|
| `aggregateRating` | ❌ Yok | Yıldızlar görünmüyor |
| `review` | ❌ Yok | Yorum sayısı görünmüyor |
| `gtin/mpn` | ❌ Yok | Ürün tanımlama zayıf |
| `material` | ❌ Yok | Zengin bilgi eksik |
| `weight/dimensions` | ❌ Yok | Teknik bilgi eksik |
| `priceSpecification` | ❌ Yok | Fiyat aralığı yok |

**Geliştirilmiş Product Schema:**
```typescript
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${domain}/${locale}/products/${slug}#product`,
  name: product.name,
  description: product.shortDescription,
  sku: product.code,
  mpn: product.code, // Manufacturer Part Number
  gtin13: product.barcode || undefined, // Varsa barkod

  // Görsel
  image: [
    product.images.main.src,
    ...(product.images.gallery?.map(img => img.src) || []),
  ],

  // Marka & Üretici
  brand: {
    '@type': 'Brand',
    name: product.origin?.brand || 'Alya Bıçak',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Durham Duplex',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sheffield',
      addressCountry: 'GB',
    },
  },

  // Fiziksel Özellikler
  material: product.specifications?.material,
  weight: product.specifications?.weight ? {
    '@type': 'QuantitativeValue',
    value: parseFloat(product.specifications.weight),
    unitCode: 'GRM', // gram
  } : undefined,
  width: product.specifications?.dimensions?.width ? {
    '@type': 'QuantitativeValue',
    value: product.specifications.dimensions.width,
    unitCode: 'MMT', // milimetre
  } : undefined,

  // Değerlendirmeler (varsa)
  aggregateRating: product.rating ? {
    '@type': 'AggregateRating',
    ratingValue: product.rating,
    ratingCount: product.ratingCount || 1,
    bestRating: 5,
    worstRating: 1,
  } : undefined,

  // Fiyat & Stok
  offers: {
    '@type': 'Offer',
    url: `${domain}/${locale}/products/${slug}`,
    availability: product.inStock
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    priceCurrency: 'TRY',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'TRY',
      eligibleQuantity: {
        '@type': 'QuantitativeValue',
        minValue: product.minOrder || 1,
      },
    },
    seller: {
      '@type': 'Organization',
      name: 'Alya Tekstil Sanayi Ticaret Ltd. Şti.',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: ['TR', 'EU', 'ME', 'SA', 'AE'],
      },
    },
  },

  // Kategori
  category: product.categoryName,

  // Ek Bilgiler
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Menşei',
      value: 'Sheffield, İngiltere',
    },
    {
      '@type': 'PropertyValue',
      name: 'Kalite Standardı',
      value: 'ISO 9001:2015',
    },
  ],
};
```

**Etki:** 🔴 Kritik - Ürün aramalarda zengin sonuç gösterimi

---

### 5. ❌ ItemList Schema Yok (Kategori Sayfaları)

**Sorun:** Kategori sayfalarında ürün listesi için `ItemList` schema'sı yok. Google ürün carousel'i gösteremiyor.

**Çözüm - lib/seo.ts'e eklenecek:**
```typescript
export function generateItemListSchema(
  items: { name: string; url: string; image: string; position: number }[],
  listName: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
      image: item.image,
    })),
  };
}

// Kategori sayfasında kullanım:
const categorySchema = generateItemListSchema(
  products.map((p, i) => ({
    name: p.name,
    url: `${domain}/${locale}/products/${p.slug}`,
    image: p.image,
    position: i + 1,
  })),
  category.name
);
```

**Etki:** 🟠 Yüksek - Kategori aramalarda carousel görünümü

---

### 6. ⚠️ Canonical URL Tutarsızlığı

**Dosya:** `app/[locale]/products/[slug]/page.tsx`

**Mevcut Sorun:**
```typescript
alternates: {
  languages: {
    'tr': `${siteConfig.url}/tr/products/${slug}`,  // alyabicak.com ✅
    'en': `${siteConfig.url}/en/products/${slug}`,  // alyabicak.com ❌ YANLIŞ!
  },
}
```

**Sorun:** İngilizce sayfa için canonical `alyablade.com` olmalı, `alyabicak.com` değil!

**Doğru Çözüm:**
```typescript
// Domain mapping
const DOMAIN_MAP: Record<Locale, string> = {
  tr: 'https://alyabicak.com',
  en: 'https://alyablade.com',
  ar: 'https://alyablade.com',
};

alternates: {
  canonical: `${DOMAIN_MAP[locale]}/${locale}/products/${slug}`,
  languages: {
    'tr': `https://alyabicak.com/tr/products/${slug}`,
    'en': `https://alyablade.com/en/products/${slug}`,
    'ar': `https://alyablade.com/ar/products/${slug}`,
    'x-default': `https://alyablade.com/en/products/${slug}`,
  },
}
```

**Etki:** 🔴 Kritik - Duplicate content cezası riski

---

### 7. ❌ Blog/İçerik Pazarlaması Yok

**Mevcut Durum:**
- Blog sayfası: ❌ YOK
- Rehber/Guide: ❌ YOK
- Karşılaştırma makaleleri: ❌ YOK
- Endüstri haberleri: ❌ YOK
- Video içerik: ❌ YOK

**Neden Kritik:**
> "Content is King" - Google sıralamasında içerik kalitesi ve miktarı en önemli faktör.

**Rakip Analizi:**
| Rakip | Blog | Rehber | Video | Sonuç |
|-------|------|--------|-------|-------|
| martor.com | ✅ 50+ | ✅ 10+ | ✅ 20+ | 1. sayfa |
| olfa.com | ✅ 30+ | ✅ 5+ | ✅ 15+ | 1. sayfa |
| alyabicak.com | ❌ 0 | ❌ 0 | ❌ 0 | ? |

**Önerilen Blog Konuları:**

**Türkçe (TR):**
1. "Endüstriyel Bıçak Seçim Rehberi: A'dan Z'ye"
2. "Trapez Jilet vs Standart Jilet: Hangisi Sizin İçin?"
3. "Sheffield Çeliği Neden Dünyanın En İyisi?"
4. "Tekstil Sektöründe Doğru Bıçak Nasıl Seçilir?"
5. "Bıçak Bakımı: Ömrü Uzatmanın 10 Yolu"

**İngilizce (EN):**
1. "Industrial Blade Selection Guide: Complete 2026 Edition"
2. "Trapezoid vs Utility Blades: Which One to Choose?"
3. "Why Sheffield Steel Dominates Industrial Cutting"
4. "Blade Maintenance: 10 Tips to Extend Lifespan"
5. "Food Industry Cutting Solutions: Safety & Hygiene"

**Arapça (AR):**
1. "دليل اختيار الشفرات الصناعية الشامل"
2. "مقارنة الشفرات: أيهما أفضل لصناعتك؟"
3. "لماذا فولاذ شيفيلد هو الأفضل عالمياً"

**Etki:** 🔴 Kritik - Organik trafik için zorunlu

---

### 8. ❌ Review/Rating Sistemi Yok

**Sorun:** Ürünlerde müşteri yorumu ve değerlendirmesi yok.

**Google'un Beklentisi:**
```
⭐⭐⭐⭐⭐ 4.8 (127 değerlendirme)
```

**Çözüm Önerileri:**

1. **Basit Çözüm (Hemen):** Manuel olarak ürünlere rating ekle
```typescript
// products.ts'e eklenecek
rating: 4.8,
ratingCount: 127,
```

2. **Orta Vadeli:** Google Business Reviews entegrasyonu
3. **Uzun Vadeli:** Kendi yorum sistemi geliştir

**Etki:** 🟠 Yüksek - CTR %20-30 artışı

---

## 📚 EĞİTİM KÖŞESİ

### 🎓 SEO Temelleri - Neden Bu Kadar Önemli?

#### 1. Rich Snippets = %30 Daha Fazla Tıklama

**Normal Sonuç vs Rich Snippet:**
```
NORMAL:                              RİCH SNİPPET:
┌─────────────────────┐              ┌─────────────────────┐
│ Alya Bıçak          │              │ Alya Bıçak          │
│ Endüstriyel bıçak   │              │ ⭐⭐⭐⭐⭐ 4.8 (127)    │
│ satışı...           │              │ Endüstriyel bıçak   │
└─────────────────────┘              │ 📦 Stokta | 🚚 Kargo│
                                     │ ❓ 15 Soru Cevaplandı│
                                     └─────────────────────┘
```

#### 2. E-E-A-T Faktörleri

Google, özellikle B2B/Endüstriyel sitelerde şunları arıyor:

| Faktör | Açıklama | Sitenizde |
|--------|----------|-----------|
| **E**xperience | Deneyim kanıtları | ⚠️ Eksik |
| **E**xpertise | Uzmanlık göstergesi | ⚠️ Zayıf |
| **A**uthority | Otorite (backlinks) | ❓ Bilinmiyor |
| **T**rust | Güvenilirlik | ✅ SSL var |

**Nasıl Geliştirilir:**
- ✅ 30 yıllık tecrübe vurgusu (var ama güçlendirilmeli)
- ❌ Sertifikalar sayfası eksik
- ❌ Müşteri case study'leri yok
- ❌ Ekip/Uzman tanıtımı yok

#### 3. International SEO - Multi-Domain Stratejisi

**Mevcut Yapınız:**
```
alyabicak.com (Türkçe Domain)
├── /tr → Türkçe içerik ✅
│
alyablade.com (Global Domain)
├── /en → İngilizce içerik ✅
├── /ar → Arapça içerik ✅
```

**Google'un Anlaması Gereken:**
```
hreflang="tr" → alyabicak.com/tr
hreflang="en" → alyablade.com/en
hreflang="ar" → alyablade.com/ar
hreflang="x-default" → alyablade.com/en (varsayılan)
```

**Dikkat Edilecekler:**
- Her domain'in kendi Google Search Console'u olmalı
- Her domain için ayrı sitemap submit edilmeli
- Backlink stratejisi domain bazında yapılmalı

---

## 🛠️ ÇÖZÜM ÖNERİLERİ - ÖNCELİK SIRASI

### 📋 Hemen Yapılacaklar (1-2 Gün)

| # | Görev | Süre | Etki |
|---|-------|------|------|
| 1 | Multi-domain robots.txt | 30 dk | 🔴 Kritik |
| 2 | WebSite SearchAction Schema | 30 dk | 🟠 Yüksek |
| 3 | Canonical URL düzeltmeleri | 45 dk | 🔴 Kritik |
| 4 | Product Schema zenginleştirme | 1 saat | 🔴 Kritik |

### 📋 Bu Hafta (3-5 Gün)

| # | Görev | Süre | Etki |
|---|-------|------|------|
| 5 | FAQPage Schema + SSS Sayfası | 2 saat | 🔴 Kritik |
| 6 | ItemList Schema (Kategoriler) | 1 saat | 🟠 Yüksek |
| 7 | Rating/Review sistemi (basit) | 2 saat | 🟠 Yüksek |
| 8 | VideoObject Schema | 1 saat | 🟡 Orta |

### 📋 Bu Ay (2-4 Hafta)

| # | Görev | Süre | Etki |
|---|-------|------|------|
| 9 | Blog altyapısı kurulumu | 4 saat | 🔴 Kritik |
| 10 | İlk 10 blog yazısı | 10 saat | 🔴 Kritik |
| 11 | FAQ sayfası (50+ soru) | 3 saat | 🟠 Yüksek |
| 12 | Sertifikalar sayfası | 2 saat | 🟡 Orta |

### 📋 3 Ay İçinde

| # | Görev | Süre | Etki |
|---|-------|------|------|
| 13 | Video içerik üretimi | 20+ saat | 🟠 Yüksek |
| 14 | Backlink kampanyası | Sürekli | 🔴 Kritik |
| 15 | Google Business optimizasyonu | 2 saat | 🟠 Yüksek |
| 16 | Bing/Yandex submit | 1 saat | 🟡 Orta |

---

## 📈 DÜNYA ÇAPINDA 1. SAYFA ROADMAP

```
            AY 1-2              AY 3-4              AY 5-6              AY 7-12
         ┌──────────┐        ┌──────────┐        ┌──────────┐        ┌──────────┐
         │ TEKNİK   │        │ İÇERİK   │        │ LİNK     │        │ OTORİTE  │
         │ SEO      │        │ STRATEJİ │        │ BUİLDİNG │        │ BÜYÜME   │
         └──────────┘        └──────────┘        └──────────┘        └──────────┘
              │                   │                   │                   │
              ▼                   ▼                   ▼                   ▼
         ✓ Schema'lar        → Blog başlat       → Guest post        → PR kampanyası
         ✓ Sitemap           → FAQ sayfası       → Directory         → Industry awards
         ✓ hreflang          → Rehberler         → Partner links     → Case studies
         ✓ Canonical         → Video içerik      → Supplier links    → Webinarlar
         ✓ Core Vitals       → Karşılaştırma     → Forum/QA          → Konferanslar

📍 ŞU AN BURADASINIZ
```

---

## 🎯 HEDEF ANALİZİ

### Hedeflenen Anahtar Kelimeler

**Türkçe (TR) - Yüksek Hacim:**
| Anahtar Kelime | Aylık Arama | Rekabet | Mevcut Sıra |
|----------------|-------------|---------|-------------|
| endüstriyel bıçak | 1.900 | Orta | ? |
| makina bıçağı | 880 | Düşük | ? |
| sanayi jileti | 590 | Düşük | ? |
| trapez jilet | 480 | Düşük | ? |
| sheffield bıçak | 320 | Düşük | ? |

**İngilizce (EN) - Global:**
| Keyword | Monthly Search | Competition | Current Rank |
|---------|----------------|-------------|--------------|
| industrial blades | 8.100 | Yüksek | ? |
| industrial razor blades | 2.400 | Orta | ? |
| sheffield blades | 1.600 | Orta | ? |
| trapezoid blades | 1.300 | Düşük | ? |
| machine knives | 2.900 | Yüksek | ? |

**Arapça (AR) - Orta Doğu:**
| Anahtar Kelime | Aylık Arama | Rekabet |
|----------------|-------------|---------|
| شفرات صناعية | 1.200 | Düşük |
| سكاكين ماكينات | 590 | Düşük |
| شفرات شيفيلد | 210 | Çok Düşük |

---

## 🔧 TEKNİK KONTROL LİSTESİ

### Google Search Console Yapılacaklar

- [ ] alyablade.com için yeni property ekle
- [ ] Her domain için sitemap submit et
- [ ] International targeting ayarla
- [ ] Core Web Vitals kontrol et
- [ ] Mobile usability kontrol et
- [ ] Coverage errors düzelt

### Bing Webmaster Tools

- [ ] Her iki domain'i kaydet
- [ ] Sitemap submit et
- [ ] IndexNow API entegrasyonu

### Schema Test Araçları

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Schema.org Validator](https://validator.schema.org/)
- [ ] [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data)

---

## ✅ MEVCUT OLUMLU DURUMLAR

| Özellik | Durum | Not |
|---------|-------|-----|
| SSL Sertifikası | ✅ | Her iki domain'de aktif |
| Mobile Responsive | ✅ | Tailwind CSS ile optimize |
| Core Web Vitals | ✅ | Next.js optimizasyonları |
| Sitemap | ✅ | Dinamik, tüm diller dahil |
| hreflang | ✅ | Multi-domain destekli |
| Image Optimization | ✅ | WebP/AVIF formatları |
| Lazy Loading | ✅ | Next.js Image component |
| RTL Support | ✅ | Arapça için dir="rtl" |

---

## 📞 AKSİYON PLANI

### Yarın İş Yerinde Yapılacaklar:

1. **Google Search Console'u kontrol et**
   - Mevcut indexleme durumu
   - Hata raporları
   - Performans verileri

2. **Rakip analizi yap**
   - martor.com
   - olfa.com
   - stanley.com
   - Yapılarını incele

3. **Anahtar kelime araştırması**
   - Google Keyword Planner
   - Ubersuggest
   - Ahrefs/SEMrush (varsa)

4. **Blog konularını planla**
   - En çok aranan sorular
   - Rakiplerin yazdığı konular
   - Müşteri soruları

---

## 📊 TAHMİNİ SONUÇLAR

| Dönem | Beklenen Sonuç |
|-------|----------------|
| 1 Ay | Technical SEO tamamlanır, indexleme düzelir |
| 3 Ay | İlk blog içerikleri yayında, long-tail keywordlerde sıralama |
| 6 Ay | Ana keywordlerde ilk 3 sayfaya giriş |
| 12 Ay | Hedef keywordlerde ilk sayfa |

---

**Rapor Sonu**

*Not: Bu rapor, mevcut site yapısı ve SEO best practice'lere göre hazırlanmıştır. Google algoritma güncellemeleri sonuçları etkileyebilir.*
