# Alya Bıçak - Geliştirme Notları

## Mimari Yapı

Proje SOLID prensiplerine uygun, temiz mimari ile tasarlanmıştır.

### Klasör Yapısı

```
lib/
├── types/
│   └── index.ts          # Tüm TypeScript tip tanımları
├── data/
│   ├── index.ts          # Merkezi veri export
│   ├── categories.ts     # Kategori verileri (SINGLE SOURCE OF TRUTH)
│   ├── products.ts       # Ürün verileri (SINGLE SOURCE OF TRUTH)
│   └── hero-slides.ts    # Hero slider verileri
├── services/
│   ├── index.ts          # Servis export
│   ├── category.service.ts  # Kategori işlemleri
│   └── product.service.ts   # Ürün işlemleri
├── seo.ts                # SEO yardımcı fonksiyonları
└── index.ts              # Merkezi kütüphane export
```

### SOLID Prensipleri

1. **Single Responsibility**: Her dosya/sınıf tek bir sorumluluğa sahip
   - `categories.ts`: Sadece kategori verileri
   - `category.service.ts`: Sadece kategori işlemleri

2. **Open/Closed**: Yeni veri eklemek için mevcut kod değişmez
   - Yeni kategori: `CATEGORIES` objesine ekle
   - Yeni ürün: `PRODUCTS` dizisine ekle

3. **Liskov Substitution**: Tipler uyumlu
   - `CategoryView` extends `Category`
   - `SubCategoryView` extends `SubCategory`

4. **Interface Segregation**: Küçük, spesifik tipler
   - `ProductCardView`: Listeleme için minimal veri
   - `ProductDetailView`: Detay sayfası için tam veri

5. **Dependency Inversion**: Servisler veri katmanına bağımlı
   - Bileşenler servisleri kullanır
   - Servisler veri katmanını kullanır

## Yeni Kategori Ekleme

```typescript
// lib/data/categories.ts

// 1. Alt kategori ekle
export const SUBCATEGORIES: Record<string, SubCategory> = {
  // ... mevcut alt kategoriler
  'yeni-alt-kategori': {
    id: 'yeni-alt-kategori',
    slug: 'yeni-alt-kategori',
    name: 'Yeni Alt Kategori',
    description: 'Açıklama',
    parentId: 'ana-kategori-id',
    order: 1,
    isActive: true,
  },
};

// 2. Ana kategorinin subcategoryIds'ine ekle
export const CATEGORIES: Record<string, Category> = {
  'ana-kategori-id': {
    // ... mevcut alanlar
    subcategoryIds: [
      // ... mevcut alt kategoriler
      'yeni-alt-kategori',
    ],
  },
};
```

## Yeni Ürün Ekleme

```typescript
// lib/data/products.ts

export const PRODUCTS: Product[] = [
  // ... mevcut ürünler
  {
    id: 'yeni-urun-id',
    slug: 'yeni-urun-slug',
    code: 'YU-001',
    name: 'Yeni Ürün Adı',
    description: 'Ürün açıklaması',
    categoryId: 'kategori-id',      // CATEGORIES'deki ID
    subcategoryId: 'alt-kategori-id', // SUBCATEGORIES'deki ID
    image: '/images/products/yeni-urun.jpg',
    variants: [
      {
        id: 'yu-001-standard',
        sku: 'YU-001',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Özellik 1', 'Özellik 2'],
    applications: ['Uygulama 1', 'Uygulama 2'],
    isFeatured: false,
    isActive: true,
    order: 1,
  },
];
```

## Servis Kullanımı

```typescript
// Bileşenlerde
import { categoryService, productService } from '@/lib/services';

// Kategorileri al (ürün sayıları hesaplanmış)
const categories = categoryService.getAllCategoriesWithCounts();

// Öne çıkan ürünleri al
const featuredProducts = productService.getFeaturedCards();

// Kategoriye göre ürünleri al
const categoryProducts = productService.getCategoryCards('industrial-blades');

// Arama yap
const searchResults = productService.search('trapez');
```

## Tamamlanan Özellikler ✅

- [x] Temiz mimari yapısı (SOLID)
- [x] Tip güvenliği (TypeScript)
- [x] Kategori yönetimi
- [x] Ürün yönetimi
- [x] SEO optimizasyonu
- [x] Mega menü (kategori sayıları dinamik)
- [x] Kategori sayfaları
- [x] Alt kategori sayfaları
- [x] İletişim formu
- [x] Hakkımızda sayfası
- [x] Danışmanlık sayfası

## Yapılacaklar 🚧

- [ ] Ürün detay sayfası (`/products/[slug]`)
- [ ] Ürün listeleme sayfası (`/products`)
- [ ] Sheffield Kalitesi sayfası
- [ ] Blog/İçerik sayfaları
- [ ] Görsel optimizasyonu
- [ ] Backend entegrasyonu (form gönderimi)
- [ ] Google Analytics
- [ ] Google Search Console

---

## 🌐 DOMAIN & URL LOKALİZASYON STRATEJİSİ

### Planlanan Domain Yapısı

| Domain | Hedef Kitle | Diller |
|--------|-------------|--------|
| `alyabicak.com` | Türkiye | Türkçe (varsayılan) |
| `alyablade.com` | Global | İngilizce, Arapça, diğer diller |

### Mevcut Durum (Ocak 2026)
```
alyabicak.com/tr/products/...  ✅ Çalışıyor
alyabicak.com/en/products/...  ✅ Çalışıyor (Türkçe path)
alyabicak.com/ar/products/...  ✅ Çalışıyor (Türkçe path)
```

### Hedef Durum (İleride)
```
alyabicak.com/tr/products/...        ✅ Türkiye
alyablade.com/en/products/...       🎯 Global - İngilizce path
alyablade.com/ar/منتجات/...         🎯 Global - Arapça path
```

### Geçiş Planı

| Aşama | İçerik | Durum |
|-------|--------|-------|
| **Aşama 1** | Site canlıya çıksın (alyabicak.com) | 🔄 Devam |
| **Aşama 2** | Ürün görselleri & içerikleri tamamlansın | ⏳ Bekliyor |
| **Aşama 3** | alyablade.com domain alınsın | ⏳ Bekliyor |
| **Aşama 4** | Multi-domain setup (Vercel) | ⏳ Bekliyor |
| **Aşama 5** | GeoIP redirect (opsiyonel) | ⏳ Bekliyor |
| **Aşama 6** | URL path lokalizasyonu | ⏳ Bekliyor |

### Teknik Notlar

**Middleware Güncellemesi Gerekecek:**
```typescript
// middleware.ts - İleride eklenecek
const domain = request.headers.get('host');
const isGlobalDomain = domain?.includes('alyablade');

if (isGlobalDomain) {
  // Global domain için İngilizce varsayılan
  defaultLocale = 'en';
}
```

**Vercel Multi-Domain Setup:**
```json
// vercel.json - İleride eklenecek
{
  "domains": [
    { "domain": "alyabicak.com", "primary": true },
    { "domain": "alyablade.com" }
  ]
}
```

### Neden Şimdi Değil?

1. **SEO Riski**: Domain + URL değişikliği birlikte = Ciddi indeksleme kaybı
2. **301 Redirect Haritası**: 762+ sayfa için redirect gerekir
3. **Test İhtiyacı**: Önce tek domain'de stabilize olmalı
4. **Öncelik**: İçerik (ürünler, görseller) daha kritik

---

## 🌍 ÇEVİRİ DURUMU

### Mevcut Çeviri İstatistikleri (Ocak 2026)

| Dil | Çevrilen Ürün | Toplam Ürün | Oran |
|-----|---------------|-------------|------|
| Türkçe | 166 (master) | 166 | ✅ %100 |
| İngilizce | 169 | 166 | ✅ %100 |
| Arapça | 169 | 166 | ✅ %100 |

> **Not**: Tüm çeviriler Ocak 2026 itibarıyla tamamlandı.

### Eksik Çevirileri Tamamlama

Çeviriler `lib/i18n/translations/products/` klasöründe:
- `tr.ts` - Master data (override için)
- `en.ts` - İngilizce çeviriler
- `ar.ts` - Arapça çeviriler ✅ TAMAMLANDI

**Fallback Sistemi:**
- Çeviri yoksa → Türkçe (master) gösterilir
- Bu sayede site çalışmaya devam eder

**Çeviri Ekleme Formatı:**
```typescript
'urun-id': {
  name: 'Ürün Adı (çevrilmiş)',
  description: 'Açıklama (çevrilmiş)',
  features: ['Özellik 1', 'Özellik 2'],
  applications: ['Kullanım Alanı 1'],
},
```

### Toplu Çeviri Stratejisi

1. **Manuel Çeviri** (Önerilen): Daha doğru, SEO için daha iyi
2. **AI Destekli**: İlk taslak için kullanılabilir, sonra manuel düzeltme

---

## Çalıştırma

```bash
cd industrial-blades-website/industrial-blades
npm run dev
```

Site: http://localhost:3000

## Önemli Notlar

1. **Domain**: `sitemap.ts` ve `robots.ts`'de `www.alyabicak.com` placeholder
2. **Görseller**: Placeholder görseller kullanılıyor
3. **İletişim**: Telefon/e-posta placeholder değerler
