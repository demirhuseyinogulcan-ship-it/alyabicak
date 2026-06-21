# 🔧 Ürün Ekleme Rehberi

Bu dokümantasyon, Alya Bıçak web sitesine yeni ürün ekleme sürecini açıklar.

---

## 🚨 ÖNEMLİ: URL ve ID Kuralları

### ⚠️ ALTIN KURALLAR - MUTLAKA OKUYUN!

| Kural | Açıklama | Örnek |
|-------|----------|-------|
| ✅ **Slug'lar İNGİLİZCE** | URL'de görünecek slug İngilizce olmalı | `3-hole-slitting-blade-020` |
| ✅ **Kategori ID'leri İNGİLİZCE** | Veri dosyalarında İngilizce ID kullan | `industrial-blades` |
| ✅ **Türkçe isim ÇEVIRI dosyasına** | Görünen isimler çeviri dosyasında | `tr.ts` → "3 Delikli Dilme Jileti" |
| ❌ **ASLA Türkçe slug** | URL'de Türkçe karakter OLMAMALI | ~~`3-delikli-dilme-jileti`~~ |
| ❌ **ASLA Türkçe ID** | Veri dosyalarında Türkçe ID YOK | ~~`sanayi-jiletleri`~~ |

### 📊 Kategori ID Eşleştirme Tablosu

| Türkçe İsim (Sitede Görünür) | İngilizce ID (Kodda Kullan) |
|------------------------------|---------------------------|
| Sanayi Jiletleri | `industrial-blades` |
| Makina Bıçakları | `machine-knives` |
| İş Güvenliği & El Bıçakları | `safety-knives` |

### 📊 Alt Kategori ID Eşleştirme Tablosu

#### Sanayi Jiletleri (industrial-blades)
| Türkçe İsim | İngilizce ID |
|-------------|-------------|
| 3 Delikli Dilme Jiletleri | `3-hole-slitting` |
| Slotted Dilme Jiletleri | `slotted-slitting` |
| İnjektör Dilme Jiletleri | `injector-slitting` |
| Tek Kenarlı Jiletler | `single-edge` |
| Hobi Jiletleri | `hobby-blades` |
| Bisturi / Neşter | `scalpel-blades` |
| Maket Bıçak Ucu / Falçata | `craft-blades` |

#### Makina Bıçakları (machine-knives)
| Türkçe İsim | İngilizce ID |
|-------------|-------------|
| Döner Kesim Bıçakları | `rotary-cutting` |
| Termoform Vakum Bıçakları | `thermoform-vacuum` |
| Plastik Granül Bıçakları | `plastic-granulator` |
| Paketleme Bıçakları | `packaging-blades` |
| Giyotin Bıçakları | `guillotine-blades` |
| Zincir Testere Kılavuzları | `chainsaw-guides` |

#### İş Güvenliği & El Bıçakları (safety-knives)
| Türkçe İsim | İngilizce ID |
|-------------|-------------|
| Trapez Bıçaklar | `trapezoid-blades` |
| Kanca Bıçaklar | `hook-blades` |
| Otomatik Geri Çekilebilir | `auto-retract` |
| Sabit Uçlu Bıçaklar | `fixed-blade` |
| Güvenlik Bıçakları | `safety-cutters` |
| Maket Bıçakları | `utility-knives` |
| Seramik Bıçaklar | `ceramic-blades` |
| Paslanmaz Çelik | `stainless-steel` |
| Karambit | `karambit` |
| Kauçuk Bıçaklar | `rubber-knives` |
| Kutu Açacakları | `box-cutters` |

> 💡 **İpucu:** Tam liste için `lib/data/categories.ts` dosyasına bakın.

---

## 📁 Dosya Yapısı

```
lib/
├── data/
│   ├── products.ts             ← Manuel ürünler
│   ├── scraped-products.json   ← Otomatik çekilen ürünler
│   ├── products-extended.ts    ← Zengin ürün verileri
│   └── categories.ts           ← Kategori tanımları
├── i18n/
│   └── translations/
│       └── products/
│           ├── tr.ts           ← Türkçe ürün çevirileri
│           ├── en.ts           ← İngilizce ürün çevirileri
│           └── ar.ts           ← Arapça ürün çevirileri

public/images/products/
└── [ürün-slug]/                ← Her ürün için ayrı klasör
    ├── main.webp               ← Ana görsel (800x800)
    └── thumb.webp              ← Küçük görsel (400x400)
```

---

## 🆕 Yeni Ürün Ekleme (Adım Adım)

### Adım 1: Slug Oluştur (İNGİLİZCE!)

```
❌ YANLIŞ: 3-delikli-dilme-jileti-020mm
✅ DOĞRU:  3-hole-slitting-blade-020mm

❌ YANLIŞ: döküm-metal-el-bıçağı
✅ DOĞRU:  cast-metal-hand-knife
```

**Slug Kuralları:**
- Sadece küçük harf
- Boşluk yerine tire `-`
- Türkçe karakter YOK (ü→u, ş→s, ı→i, ö→o, ç→c, ğ→g)
- İngilizce kelimeler kullan

### Adım 2: Ürün Verisini Ekle

`lib/data/products.ts` veya `lib/data/scraped-products.json` dosyasına ekle:

```typescript
{
  id: 'b301',                                      // Benzersiz ID
  slug: '3-hole-slitting-blade-020mm',             // ⚠️ İNGİLİZCE SLUG!
  code: 'B301',                                    // Ürün kodu
  name: '3 Delikli Dilme Jileti 0.20mm',           // Varsayılan isim (TR)

  categoryId: 'industrial-blades',                 // ⚠️ İNGİLİZCE ID!
  subcategoryId: '3-hole-slitting',                // ⚠️ İNGİLİZCE ID!

  image: '/images/products/b301.jpg',
  shortDescription: 'Kısa açıklama...',

  isActive: true,
  isFeatured: false,
  inStock: true,
  order: 1,
}
```

### Adım 3: Çevirileri Ekle

#### Türkçe Çeviri (`lib/i18n/translations/products/tr.ts`):
```typescript
'b301': {
  name: '3 Delikli Dilme Jileti 0.20mm',
  shortDescription: 'Endüstriyel dilme makineleri için yüksek kaliteli jilet.',
  longDescription: '<p>Detaylı açıklama...</p>',
},
```

#### İngilizce Çeviri (`lib/i18n/translations/products/en.ts`):
```typescript
'b301': {
  name: '3-Hole Slitting Blade 0.20mm',
  shortDescription: 'High quality blade for industrial slitting machines.',
  longDescription: '<p>Detailed description...</p>',
},
```

#### Arapça Çeviri (`lib/i18n/translations/products/ar.ts`):
```typescript
'b301': {
  name: 'شفرة تقطيع 3 ثقوب 0.20 مم',
  shortDescription: 'شفرة عالية الجودة لآلات التقطيع الصناعية.',
  longDescription: '<p>وصف تفصيلي...</p>',
},
```

### Adım 4: Görselleri Ekle

```
public/images/products/b301.jpg    ← Ana görsel
```

veya klasör yapısı:
```
public/images/products/b301/
├── main.webp
├── gallery-1.webp
└── thumb.webp
```

---

## 📊 URL Yapısı

Site üzerinde URL'ler şu şekilde görünür:

| Dil | URL |
|-----|-----|
| Türkçe | `/tr/products/3-hole-slitting-blade-020mm` |
| İngilizce | `/en/products/3-hole-slitting-blade-020mm` |
| Arapça | `/ar/products/3-hole-slitting-blade-020mm` |

> 💡 URL hep aynı, sadece dil prefix'i değişir. İçerik çeviri dosyalarından gelir.

---

## 🔄 Akış Diyagramı

```
┌─────────────────────────────────────────────────────────────┐
│                    YENİ ÜRÜN EKLEMEK                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  1. SLUG OLUŞTUR (İNGİLİZCE!)                               │
│     Örnek: "auto-retract-safety-knife"                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. VERİ DOSYASINA EKLE                                     │
│     lib/data/products.ts veya scraped-products.json         │
│     - categoryId: İNGİLİZCE ID                              │
│     - subcategoryId: İNGİLİZCE ID                           │
│     - slug: İNGİLİZCE SLUG                                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  3. ÇEVİRİLERİ EKLE                                         │
│     lib/i18n/translations/products/                         │
│     - tr.ts → Türkçe isim ve açıklama                       │
│     - en.ts → İngilizce isim ve açıklama                    │
│     - ar.ts → Arapça isim ve açıklama                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  4. GÖRSELLERİ EKLE                                         │
│     public/images/products/                                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  5. TEST ET                                                 │
│     npm run dev → Siteyi kontrol et                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Kullanılabilir İkonlar

### Teknik Özellikler (specs.icon)
- `Layers` - Malzeme
- `Shield` - Sertlik/Güvenlik
- `Box` - Gövde/Kutu
- `Scale` - Ağırlık
- `Ruler` - Boyut/Uzunluk
- `Gauge` - Ölçü

### Kullanım Alanları (applications.icon)
- `Factory` - Üretim
- `Warehouse` - Depo
- `Package` - Ambalaj
- `Truck` - Lojistik
- `Scissors` - Kesim
- `Beef` - Gıda

---

## ✅ Kontrol Listesi

Yeni ürün eklerken:

- [ ] Slug İNGİLİZCE mi? (Türkçe karakter YOK)
- [ ] `categoryId` İNGİLİZCE ID mi?
- [ ] `subcategoryId` İNGİLİZCE ID mi?
- [ ] Türkçe çeviri eklendi mi? (`tr.ts`)
- [ ] İngilizce çeviri eklendi mi? (`en.ts`)
- [ ] Arapça çeviri eklendi mi? (`ar.ts`)
- [ ] Görsel eklendi mi?
- [ ] `isActive: true` mi?

---

## 🐛 Sorun Giderme

### Ürün sayfası 404 veriyor
- `slug` değerinin doğru ve İngilizce olduğundan emin ol
- `isActive: true` olduğundan emin ol

### Türkçe isim görünmüyor
- `lib/i18n/translations/products/tr.ts` dosyasına çeviri eklenmiş mi kontrol et
- Ürün ID'sinin çeviri dosyasındaki key ile eşleştiğinden emin ol

### Kategori sayfasında ürün görünmüyor
- `categoryId` doğru İngilizce ID ile eşleşiyor mu?
- `subcategoryId` doğru İngilizce ID ile eşleşiyor mu?

---

## 📝 Örnek: Tam Bir Ürün Ekleme

### 1. Veri Dosyası (`lib/data/products.ts`):
```typescript
{
  id: 'h020-001-a01',
  slug: 'auto-retract-pro-safety-knife',           // ✅ İngilizce
  code: 'H020 001 A01',
  name: 'Auto Retract Pro',
  categoryId: 'safety-knives',                      // ✅ İngilizce ID
  subcategoryId: 'auto-retract',                    // ✅ İngilizce ID
  image: '/images/products/h020-001-a01.jpg',
  shortDescription: 'Professional auto-retract safety knife',
  isActive: true,
  isFeatured: true,
  inStock: true,
  order: 1,
}
```

### 2. Türkçe Çeviri (`lib/i18n/translations/products/tr.ts`):
```typescript
'h020-001-a01': {
  name: 'Auto Retract Pro Güvenlik Bıçağı',
  shortDescription: 'Otomatik geri çekilme mekanizmalı profesyonel güvenlik bıçağı.',
  longDescription: '<p>İş güvenliği için tasarlanmış...</p>',
},
```

### 3. Sonuç URL'ler:
```
/tr/products/auto-retract-pro-safety-knife  → Türkçe içerik
/en/products/auto-retract-pro-safety-knife  → İngilizce içerik
/ar/products/auto-retract-pro-safety-knife  → Arapça içerik
```

---

## 🌍 Yeni Dil Ekleme (Gelecek İçin)

Rusça, Kazakça veya başka bir dil eklemek için:

1. `lib/i18n/config.ts` → Dili ekle
2. `lib/i18n/dictionaries/ru.ts` → UI çevirilerini ekle
3. `lib/i18n/translations/products/ru.ts` → Ürün çevirilerini ekle
4. `lib/i18n/translations/categories/ru.ts` → Kategori çevirilerini ekle

**⚠️ URL YAPISI DEĞİŞMEZ!** Sadece çeviri dosyaları eklenir.

---

## 📞 Destek

Sorularınız için: info@alyatekstil.com
