# 📚 SEO & Analytics Kurulum Rehberi - Sıfırdan Öğrenenler İçin

Bu rehber, IndexNow, Google Analytics, Search Console, ve Structured Data kurulumunu adım adım anlatıyor.

---

## 📊 BÖLÜM 1: Google Analytics + Search Console Entegrasyonu

### 1️⃣ Google Search Console'a Erişim

**Google Search Console nedir?**
- Google'ın size sitesi hakkında bilgi veren araç
- Arama sorguları, tıklama oranları, indexing durumu
- SEO için kritik!

**Adım 1: Search Console'a Git**
```
https://search.google.com/search-console/
```

**Adım 2: Domain Ekle**
- "Mülk Ekle" (Add Property) butonuna tıkla
- İki seçenek var:
  1. **Domain Property** (Önerilen!)
     - Adresi yaz: alyabicak.com
     - Hepsi otomatik takip edilir

  2. **URL Prefix Property**
     - https://alyabicak.com gibi tam URL

✅ **Recommendation:** Domain Property seç (alyabicak.com)

**Adım 3: Domain Doğrulama**
```
Seçenekler:
1. DNS Record (Önerilen - permanent)
2. HTML File Upload
3. HTML Tag
4. Google Analytics
5. Google Tag Manager
```

**DNS Record ile Doğrulama (En iyi):**
```
1. Search Console'dan TXT record'u kopyala:
   google-site-verification=xxxxxxxxxxxxx

2. Domain sağlayıcına git (Godaddy, Namecheap, vb)
3. DNS settings açılır
4. TXT record ekle:
   Host: @ (or root)
   Value: google-site-verification=xxxxxxxxxxxxx
   TTL: 3600

5. 24-48 saatte geçerli olur
6. Search Console'da "Doğrula" butonuna tıkla
```

**Adım 4: Sitemap Ekle**
```
Search Console menüsü:
Dizin > Sitemap'ler

Ekle:
- https://alyabicak.com/sitemap.xml
- https://alyabicak.com/image-sitemap.xml
```

**Adım 5: Google Analytics ile Bağla**
```
Search Console menüsü:
Ayarlar > Search Console Özellikleri

GA property ile bağla:
- https://search.google.com/search-console/
- "Bağlı hesaplar" bölümü
- Google Analytics'i seç
- alyabicak.com property'sini seç
```

---

## 📱 BÖLÜM 2: .env.local Dosyasına IndexNow API Key Ekleme

### IndexNow API Key Nereden Alınır?

**Adım 1: IndexNow'a Git**
```
https://www.indexnow.org/request
```

**Adım 2: Domain'i Gir**
```
Domain: alyabicak.com
Email: info@alyatekstil.com
```

**Adım 3: Doğrulama Yöntemi Seç**
```
3 seçenek:
1. HTML File - TXT dosya koy (KOLAY!)
2. Meta Tag - HTML'e tag ekle
3. DNS Record - DNS'e kaydı ekle
```

**HTML File Yöntemi (Önerilen):**
```
1. IndexNow sana bir dosya adı verir:
   Example: IXac0JOeAyp1qwWBndERxYfFZNu6PTV3.txt

2. Dosyayı indir ve public/ klasörüne koy:
   public/IXac0JOeAyp1qwWBndERxYfFZNu6PTV3.txt
   ✅ Bu dosya zaten var!

3. Dosya içeriği:
   IXac0JOeAyp1qwWBndERxYfFZNu6PTV3

4. URL'nin accessible olduğunu test et:
   https://alyabicak.com/IXac0JOeAyp1qwWBndERxYfFZNu6PTV3.txt
   (404 hatası gelmemeli)

5. IndexNow'da "Doğrula" butonuna tıkla
```

**Adım 4: API Key'i Al**
```
Doğrulama başarılı oldu mu?
↓
"Başarıyla doğrulandı!" mesajı
↓
API Key'i kopyala:
c0987e8d3fae4c0e8f8e8c0e8f8e8c0e (örnek)
```

**Adım 5: .env.local'e Ekle**

📁 **Dosya:** `.env.local`

```bash
# ===== IndexNow API Configuration =====
# Bing/Yandex'e anlık URL submission için

# API Key'i buraya yapıştır:
INDEXNOW_API_KEY=c0987e8d3fae4c0e8f8e8c0e8f8e8c0e

# Webhook Secret'ı (güvenlik için):
# Rassal bir string oluştur (min 32 char)
INDEXNOW_WEBHOOK_SECRET=your-super-secret-secure-random-string-min-32-characters

# Örnek güvenli secret:
# INDEXNOW_WEBHOOK_SECRET=a7f3k9m2p1q4w8e6r5t2y1u3i4o5p6q7z8
```

**❓ API Key vs Webhook Secret Farkı Nedir?**

| Parametr | Kullanım | Gizli mi? |
|----------|----------|----------|
| INDEXNOW_API_KEY | Bing/Yandex'e gönderilir | Evet (sırra alın) |
| INDEXNOW_WEBHOOK_SECRET | API endpoint'ine erişim | Evet (çok gizli!) |

**❌ Dikkat:**
- Bu değerleri GitHub'a commit ETME
- `.env.local` dosyası `.gitignore`'da olmalı
- Production'da farklı values kullan

---

## 🔐 BÖLÜM 3: INDEXNOW_WEBHOOK_SECRET Nasıl Seçilir?

**Webhook Secret Nedir?**
- API'nize erişim için password gibi birşey
- Spammer'ların spam göndermesini engelle
- Güçlü ve rastgele olmalı

**Secure Secret Nasıl Oluşturur?**

### Yöntem 1: Online Generator (Kolay)
```
https://www.uuidgenerator.net/
↓
Bir UUID kopyala:
a7f3k9m2-p1q4-w8e6-r5t2-y1u3i4o5p6q7
↓
.env.local'e ekle:
INDEXNOW_WEBHOOK_SECRET=a7f3k9m2p1q4w8e6r5t2y1u3i4o5p6q7
```

### Yöntem 2: PowerShell (Windows)
```powershell
# Terminal aç ve çalıştır:
[System.Convert]::ToBase64String([System.Guid]::NewGuid().ToByteArray())

# Çıktı örneği:
# XyTh8hR7q2K9mL0vZ5D=

# Bunu kopyala:
INDEXNOW_WEBHOOK_SECRET=XyTh8hR7q2K9mL0vZ5D
```

### Yöntem 3: Bash/Mac/Linux
```bash
# Terminal aç ve çalıştır:
openssl rand -base64 32

# Çıktı örneği:
# a7f3k9m2p1q4w8e6r5t2y1u3i4o5p6q7z8x9c

INDEXNOW_WEBHOOK_SECRET=a7f3k9m2p1q4w8e6r5t2y1u3i4o5p6q7z8x9c
```

**✅ Güvenli Secret Özellikleri:**
- Min 32 karakter
- Rastgele (pattern yok)
- Harfler + sayılar + özel karakterler
- Kolay tahmin edilemez

---

## 🌍 BÖLÜM 4: Bing'de IndexNow Verification

### Adım 1: Bing Webmaster Tools'a Erişim

```
https://www.bing.com/webmasters/
```

**Adım 2: Hesaba Gir**
- Microsoft hesabı ile login
- Google hesabın varsa kullan

**Adım 3: Domain Ekle**
```
"Siteyi Ekle" butonuna tıkla
↓
alyabicak.com yazıp Enter
```

**Adım 4: Doğrulama**
```
Seçenekler:
1. XML Sitemap (Bing auto-detects)
2. XML File Upload
3. HTML File Upload
4. HTML Meta Tag
5. CNAME Record
```

✅ **En kolay:** Bing genelde otomatik algılıyor!

Eğer manuel yapman lazımsa:
```
1. HTML file download et:
   bingwebmaster_XXXXX.html

2. Dosyayı public/ klasörüne koy

3. Bing'de doğrula → "Doğrulandı!" mesajı
```

**Adım 5: IndexNow Aktif Et**
```
Bing Webmaster Tools menüsü:
↓
"Sitemi Crawl Et" (Crawl My Site)
↓
"IndexNow" seçeneği
↓
"Etkinleştir" butonuna tıkla
```

**Adım 6: IndexNow Doğrulama**
```
IndexNow bölümü:
↓
"Doğrulama Dosyası Gerekli" mesajı
↓
Dosya indir: IXac0JOeAyp1qwWBndERxYfFZNu6PTV3.txt
↓
public/ klasörüne koy (zaten var!)
↓
"Doğrula" butonuna tıkla
```

✅ **Başarı:** "IndexNow Aktif" yeşil yazısı görülür

---

## 🇷🇺 BÖLÜM 5: Yandex'de IndexNow Verification

### Adım 1: Yandex Webmaster Tools'a Erişim

```
https://webmaster.yandex.com/
```

**Adım 2: Hesap Oluştur/Giriş**
- Yandex hesabı gerekli (mail@yandex.com)
- Yoksa: https://yandex.com/

**Adım 3: Site Ekle**
```
"Siteyi Ekle" (Add Site)
↓
alyabicak.com yazıp Enter
↓
Yandex ID'ni sakla (sonra lazım olur)
```

**Adım 4: Doğrulama (DNS Yöntemi)**
```
3 seçenek:
1. DNS Record (Önerilen - permanent)
2. HTML File
3. HTML Meta Tag
```

**DNS Record Yöntemi:**
```
1. Yandex'ten TXT record'u kopyala:
   Yandex-Verification: XXXXXXXXXXXXX

2. Domain provider'a git (Godaddy, Namecheap, vb)

3. DNS Settings açılır

4. TXT Record ekle:
   Host: @ (root)
   Value: Yandex-Verification: XXXXXXXXXXXXX
   TTL: 3600

5. 24-48 saatte aktif olur

6. Yandex'de "Doğrula" butonuna tıkla
```

**Adım 5: Sitemap Ekle**
```
Yandex Webmaster Tools:
↓
"Sitemap'ler" (Sitemaps)
↓
"Sitemap Ekle"
↓
https://alyabicak.com/sitemap.xml
https://alyabicak.com/image-sitemap.xml
```

**Adım 6: IndexNow Doğrulama**
```
Yandex Webmaster Tools:
↓
"Site Ayarları" → "IndexNow"
↓
Yandex ID'ni gir (Adım 3'te aldığın)
↓
TXT Verification dosyasını indir
↓
public/ klasörüne koy
↓
"Doğrula" butonuna tıkla
```

✅ **Başarı:** Yandex siteyi index etmeye başlar

---

## 🔍 BÖLÜM 6: Google Search Console'da Image Sitemap Test

### Adım 1: Google Search Console Aç

```
https://search.google.com/search-console/
alyabicak.com property'sini seç
```

**Adım 2: Image Sitemap Ekle**
```
Sol menü:
↓
"Dizin" (Indexing)
↓
"Sitemap'ler" (Sitemaps)
↓
"Yeni Sitemap Ekle"
```

**Adım 3: Image Sitemap URL'sini Gir**
```
https://alyabicak.com/image-sitemap.xml
↓
"Gönder" (Submit)
```

**Adım 4: Test Et**
```
"Özellikleri Test Et" (Test) butonuna tıkla
↓
Sitemap preview açılır
↓
Tüm görseller listesi görüntülenir
```

**Adım 5: Sonuçları Kontrol Et**

```
Başarılı = Yeşil ✅
- Sitemap gönderildi
- Görsel sayısı: 400+
- Status: "İşlendi"

Hata = Kırmızı ❌
Eğer hata varsa:
- XML syntax check et
- Image URL'leri kontrol et
- Public klasöründe görüntüler var mı?
```

**Adım 6: Google Images'te Kontrolü**

```
1. Google resim aramasını aç:
   https://images.google.com/

2. Site arama:
   site:alyabicak.com

3. Sonuçlar:
   Ürün fotoğraflarını görmeli

4. Hemen görünmeyebilir (2-4 haftaya kadar)
```

---

## 🏷️ BÖLÜM 7: Product Structured Data (JSON-LD) Ekleme

### JSON-LD Nedir?

**Nedir?**
- Arama motorlarına ürün hakkında bilgi veren kod
- Google, Bing, Yandex tarafından okunur
- Rich Snippets oluşturur (yıldızlar, fiyat, vb)

**Avantajı:**
```
Öncesi Google:
"B101 - Slotted Slitting Blade"
(Düz text, sıkıcı)

Sonrası Google:
B101 - Slotted Slitting Blade
⭐⭐⭐⭐⭐ (4.5 rating)
$99.99 - In stock
(Renkli, bilgilendirici!)
```

### Adım 1: Next.js'de JSON-LD Ekle

**Dosya Yolu:** `app/[locale]/products/[slug]/page.tsx`

**Örnek Kod:**
```typescript
// Sayfanın başında ekle:
import { JsonLd } from '@/components/JsonLd'; // oluşturacağız

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "brand": {
            "@type": "Brand",
            "name": "Alya Blade"
          },
          "offers": {
            "@type": "Offer",
            "price": product.price || "Request Quote",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://alyablade.com/products/${product.slug}`
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "120"
          }
        }}
      />

      {/* Sayfanın geri kalanı */}
    </>
  );
}
```

### Adım 2: JsonLd Component Oluştur

**Dosya Yolu:** `components/JsonLd.tsx`

```typescript
import Head from 'next/head';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Adım 3: Test Sonuçları

```
Google Rich Result Tester:
https://search.google.com/test/rich-results

1. Ürün sayfası URL'sini gir
2. Teste tıkla
3. Sonuçlar:
   ✅ Valid Product schema
   ✅ Offers detected
   ✅ Image recognized
```

### Adım 4: Product Sayfasında Görüntülü Kontrol

```html
<!-- Oluşturulan HTML kodu -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "B101 - Slotted Slitting Blade",
  "image": "https://alyablade.com/images/b101.jpg",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD"
  }
}
</script>
```

---

## 🖼️ BÖLÜM 8: Open Graph Images Optimization

### Open Graph Nedir?

**Nedir?**
- Facebook, Twitter, LinkedIn'de paylaşıldığında gösterilen image
- Paylaşılan linkin başında görünen resim

**Örnek:**
```
Siteyi Twitter'da paylaş:
↓
Otomatik büyük resimleri kart şeklinde göster
↓
Başlık, açıklama + image
↓
Daha çok tıklama!
```

### Adım 1: OG Meta Tags Ekle

**Dosya:** `app/[locale]/layout.tsx`

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const domain = getDomain(params.locale);

  return {
    // Standart meta tags
    title: "Alya Blade | Industrial Cutting Solutions",
    description: "...",

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      type: 'website',
      url: `${domain}/en/products/b101`,
      title: "B101 - Slotted Slitting Blade",
      description: "Industrial cutting blade with precision slitting...",

      // ✨ OG Image (ÖNEMLI!)
      images: [
        {
          url: `${domain}/images/og/b101.jpg`,
          width: 1200,  // Facebook optimal: 1200x630
          height: 630,
          alt: "B101 Product Image",
          type: "image/jpeg"
        }
      ],

      // Locale support
      locale: params.locale,
      siteName: "Alya Blade"
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: "B101 - Slotted Slitting Blade",
      description: "Industrial cutting blade...",
      images: [`${domain}/images/og/b101.jpg`],
      creator: "@alyablade"
    }
  };
}
```

### Adım 2: OG Image Dosyaları Hazırla

**Ideal Boyutlar:**
```
Facebook:  1200 x 630 pixels
Twitter:   1200 x 675 pixels
LinkedIn:  1200 x 627 pixels
Pinterest: 1000 x 1500 pixels

→ Hepsine uyan: 1200 x 630 px
```

**Dosya Yolu:**
```
public/
├── images/
│   └── og/
│       ├── b101.jpg       (ürün 1)
│       ├── b102.jpg       (ürün 2)
│       ├── categories.jpg (kategori)
│       └── home.jpg       (ana sayfa)
```

**Tasarım Önerileri:**
```
Her OG image'da:
1. Ürün/kategori fotoğrafı (sağ taraf)
2. Ürün adı (sol taraf, 48pt bold)
3. Slogan: "Industrial Cutting Solutions"
4. Logo (sol alt köşe)
5. Rating (⭐⭐⭐⭐⭐)
6. Fiyat (eğer varsa)
```

### Adım 3: Test Et

```
Facebook Sharing Debugger:
https://developers.facebook.com/tools/debug/sharing/

1. Ürün URL'sini gir
2. Preview'ı gör
3. Image doğru mu kontrol et
4. Başlık ve açıklama doğru mu?

Twitter Card Validator:
https://cards-dev.twitter.com/validator

1. Ürün URL'sini gir
2. Twitter card'ı kontrol et
```

---

## 📈 BÖLÜM 9: Analytics Monitoring Kurulumu

### Adım 1: Google Analytics Setup

**Zaten var mı kontrol et:**
```
1. Analytics.google.com aç
2. alyabicak.com özelliğini seç
3. Varsa devam et, yoksa ekle
```

**Yeni Property Oluştur:**
```
Analytics > Admin > Properties > Create
↓
Property Name: "Alya Blade - alyabicak.com"
↓
Reporting Timezone: Istanbul (UTC+3)
↓
Create
↓
Measurement ID al (G-XXXXXXXXXX)
```

### Adım 2: Next.js'ye GA Ekle

**Dosya:** `components/analytics/GoogleAnalytics.tsx`

```typescript
'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}
```

**Dosya:** `app/layout.tsx`

```typescript
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export default function RootLayout({ children }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics measurementId={measurementId} />
      </body>
    </html>
  );
}
```

### Adım 3: Environment Variable Ekle

**Dosya:** `.env.local`

```bash
# Google Analytics Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# ⚠️ NEXT_PUBLIC_ başlayan variables tarayıcıda görünür
# Hassas veriler buraya koymayın!
```

### Adım 4: Analytics Dashboard Kurulumu

**Sayfaları Takip Etmek İçin Custom Events:**

```typescript
// Ürün görüntülenme:
gtag('event', 'view_item', {
  items: [{
    id: 'b101',
    name: 'B101 - Slotted Slitting Blade',
    category: 'Industrial Blades'
  }]
});

// WhatsApp tıklaması:
gtag('event', 'click', {
  link_text: 'Contact on WhatsApp',
  link_url: 'https://wa.me/905350504613'
});

// Search yapıldı:
gtag('event', 'search', {
  search_term: 'slitting blade'
});
```

### Adım 5: Google Analytics Dashboard Özelleştir

**Analitik Rapor Oluştur:**
```
Analytics > Reports > Create > Blank Report
↓
Dimensions (Y-ekseni):
- Page title
- Source/Medium

Metrics (X-ekseni):
- Sessions
- Users
- Bounce Rate
- Conversion Rate

Filtreler:
- Country: Turkey
- Device: Mobile/Desktop
- Campaign: Direct

Tarih Aralığı: Son 30 gün
```

**Dashboard Widget'ları:**

1. **Real-time Users**
   ```
   Şu anda sitenizde kaç kişi var?
   ```

2. **Top Pages**
   ```
   En çok ziyaret edilen sayfalar
   - /products/b101
   - /categories/industrial-blades
   - /contact
   ```

3. **Traffic Sources**
   ```
   Trafik nereden geliyor?
   - Direct: Doğrudan yazıp girme
   - Organic: Google, Bing, Yandex
   - Social: Facebook, LinkedIn
   - Referral: Başka sitelerden
   ```

4. **Device Breakdown**
   ```
   Mobile vs Desktop
   - Mobile: % kaçı?
   - Desktop: % kaçı?
   - Tablet: % kaçı?
   ```

5. **Conversion Funnel**
   ```
   Ana Sayfa → Kategori → Ürün → İletişim
   Her aşamada kaç kişi düşüyor?
   ```

### Adım 6: Google Search Console Analytics Bağlantısı

**Zaten yaptıysan OK, yoksa şöyle yap:**

```
Google Analytics:
↓
Admin > Search Console bağlantısı
↓
Search Console property seç:
"alyabicak.com" property'sini seç
↓
Rapor > Search Console seçeneği
↓
Arama sorgularını, tıklamaları, impressions'ı gör
```

**Bu sayede şunu görebilirsin:**
```
- Hangi arama sorguları trafik getiriyor?
  (örn: "endüstriyel lezbiyen" → 145 tıkla)

- Ortalama ranking position
  (Google'daki sırası)

- Click-through rate (CTR)
  (Arama sonuçlarında tıklanma %)

- Impressions
  (Google'da görüntülenme sayısı)
```

---

## 📋 BÖLÜM 10: Tüm Kurulumların Kontrol Listesi

### ✅ Phase 1: Foundation (Bu Hafta)

- [ ] Google Search Console aç ve domain ekle
- [ ] Google Analytics property oluştur
- [ ] IndexNow API key al
- [ ] .env.local dosyasını güncelle:
  ```
  INDEXNOW_API_KEY=xxxxx
  INDEXNOW_WEBHOOK_SECRET=xxxxx
  NEXT_PUBLIC_GA_ID=G-xxxxx
  ```

### ✅ Phase 2: Verification (Haftaya)

- [ ] Google Search Console'da sitemap ekle
- [ ] Bing Webmaster Tools'ta domain doğrula
- [ ] Yandex Webmaster Tools'ta domain doğrula
- [ ] IndexNow Bing'de doğrula
- [ ] IndexNow Yandex'de doğrula

### ✅ Phase 3: Optimization (2. Hafta)

- [ ] Google Search Console'da image sitemap test et
- [ ] JSON-LD Product schema ekle
- [ ] Open Graph images hazırla
- [ ] GA custom events kur
- [ ] GA Search Console bağlantısını yap

### ✅ Phase 4: Monitoring (3. Hafta)

- [ ] GA Dashboard widgets'larını kurmasını bitir
- [ ] Search Console performans raporunu kontrol et
- [ ] Yandex impression'larını kontrol et
- [ ] Image Search traffic'ini kontrol et
- [ ] Conversion rates'i takip et

---

## 🚀 BONUS: Hızlı Başlangıç (Quick Start)

Eğer kolay bir şekilde başlamak istersen:

### 5 Dakikalık Setup:
```bash
# 1. API Key al (indexnow.org)
# 2. .env.local'e ekle:
INDEXNOW_API_KEY=your_key_here
INDEXNOW_WEBHOOK_SECRET=super_secret_here
NEXT_PUBLIC_GA_ID=G-your_ga_id

# 3. Build et ve deploy et:
npm run build
npm run deploy

# 4. Google Search Console > Sitemap ekle:
# https://alyabicak.com/sitemap.xml
# https://alyabicak.com/image-sitemap.xml

# 5. IndexNow'da doğrula:
# https://www.indexnow.org/request
```

### 1 Saatlik Setup:
```bash
# + Bing doğrulama
# + Yandex doğrulama
# + GA property kurulumu
# + Search Console bağlantısı
```

### 1 Günlük Setup:
```bash
# + Product JSON-LD
# + Open Graph images
# + GA custom events
# + Analytics dashboard
```

---

## 📞 Nereden Yardım Alırım?

### Google Analytics Sorunları:
```
https://support.google.com/analytics
https://www.youtube.com/c/GoogleAnalytics
```

### IndexNow Sorunları:
```
https://www.indexnow.org/documentation
https://www.indexnow.org/faq
```

### Schema.org (JSON-LD):
```
https://schema.org/
https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data
```

### Search Engine Optimization:
```
https://developers.google.com/search
https://help.yandex.com/webmaster/
https://www.bing.com/webmaster/
```

---

## 🎯 Sonuç

Bu rehber adım adım:
1. ✅ Google Analytics & Search Console
2. ✅ IndexNow API setup
3. ✅ Bing/Yandex verification
4. ✅ Image Sitemap testing
5. ✅ Structured Data (JSON-LD)
6. ✅ Open Graph optimization
7. ✅ Analytics monitoring

**Hepsi tamamlandıktan sonra:**
- Google, Bing, Yandex sitemizde sıkça gezinecek
- Yeni ürünler 1 dakika içinde index olacak
- Kullanıcılar daha iyi arama sonuçları görecek
- Analytics'te trafik kaynakları açıkça görünecek
- AI araçları doğru bilgiler bulacak

**Başarı Göstergesi (4-6 hafta sonra):**
- Google Search Console > Performans > 50%+ artış
- Analytics > Traffic > Bing/Yandex sekmesinde trafik
- Search Console > Image search > Görüntü gösterilimi
- Google Search Results > Rich snippets görülür

---

**Hazırlayan:** GitHub Copilot
**Tarih:** 2026-01-12
**Seviye:** Başlangıç (Sıfırdan öğrenenler)
**Ortalama Tamamlama Süresi:** 1-2 hafta
