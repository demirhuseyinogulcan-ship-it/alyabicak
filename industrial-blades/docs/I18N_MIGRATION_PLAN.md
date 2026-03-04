# Page-Level i18n Migration Plan

## Durum

Projede 9 sayfa dosyası ve 1 API route dosyasında inline çeviri blokları var.
Bu çeviriler `{ tr: {...}, en: {...}, ar: {...}, ru: {...}, fr: {...} }` formatında
doğrudan sayfa içinde tanımlanmış.

**ÖNEMLİ:** Manuel çeviri stratejisi SEO/GEO amaçlı ve kasıtlıdır.
Migration amacı çeviri yöntemini değiştirmek DEĞİL, konumu merkezileştirmektir.

## Mevcut Dictionary Yapısı

```
lib/i18n/dictionaries/
├── tr.ts    (~670 satır, flat object)
├── en.ts
├── ar.ts
├── ru.ts
├── fr.ts
└── index.ts (import + getDictionary)
```

## Migration Sırası (Küçükten Büyüğe)

### Batch 1 — Küçük UI Labels (~30 dk)

| Dosya | Değişken | Key Sayısı | Hedef Dictionary Section |
|-------|----------|------------|--------------------------|
| `catalog/page.tsx` | `labels` | 4 | `dict.catalog.view`, `dict.catalog.download`, etc. |
| `faq/page.tsx` | `content` | 7 | `dict.faq.badge`, `dict.faq.cta*`, etc. |
| `api/contact/route.ts` | `apiMessages` | 6 | `dict.api.rateLimited`, etc. |
| `view/[slug]/page.tsx` | `l` | 10 | `dict.catalog.viewer.*` |

### Batch 2 — Orta UI Labels (~1 saat)

| Dosya | Değişken | Key Sayısı | Hedef Dictionary Section |
|-------|----------|------------|--------------------------|
| `contact/page.tsx` | `labels` | 17 | `dict.contact.labels.*` |
| `quality-standards/page.tsx` | `content` | ~18 | `dict.quality.*` |

### Batch 3 — Büyük Content Bloklar (~2-3 saat)

| Dosya | Değişken | Key Sayısı | Hedef Dictionary Section |
|-------|----------|------------|--------------------------|
| `about/page.tsx` | `content` | ~40+ | `dict.about.content.*` |
| `consulting/page.tsx` | `content` | ~45+ | `dict.consulting.content.*` |

### Batch 4 — Legal Sayfalar (~2 saat)

| Dosya | Değişken | Key Sayısı | Hedef Dictionary Section |
|-------|----------|------------|--------------------------|
| `privacy-policy/page.tsx` | `content` + `titles`/`descriptions` | ~45+ | `dict.privacyPolicy.*` |
| `cookie-policy/page.tsx` | `content` | ~30+ | `dict.cookiePolicy.*` |

## Migration Pattern (Her Dosya İçin)

### Adım 1: Dictionary'ye Section Ekle
```typescript
// lib/i18n/dictionaries/tr.ts
const tr = {
  // ... mevcut key'ler
  catalog: {
    // ... mevcut key'ler
    view: 'Görüntüle',        // YENİ
    download: 'İndir',         // YENİ
    heroTitle: 'Ürün Katalogları', // YENİ
    heroDesc: 'PDF kataloglarımızı görüntüleyin veya indirin', // YENİ
  },
}
```

### Adım 2: Diğer 4 Dile de Ekle
`en.ts`, `ar.ts`, `ru.ts`, `fr.ts` dosyalarına aynı key'leri ekle.

### Adım 3: Dictionary Type Güncelle
TypeScript, eksik key olursa hata verir — güvenli.

### Adım 4: Sayfa Dosyasını Güncelle
```diff
- const labels = {
-   tr: { view: 'Görüntüle', ... },
-   en: { view: 'View', ... },
-   ...
- }
- const l = labels[locale]
+ const l = {
+   view: dict.catalog.view,
+   download: dict.catalog.download,
+   heroTitle: dict.catalog.heroTitle,
+   heroDesc: dict.catalog.heroDesc,
+ }
```

## Doğrulama

Her batch sonrası:
1. `npm run build` — TypeScript eksik key hatası kontrolü
2. `npm run check-i18n` — Çeviri coverage raporu
3. Tüm 5 dilde sayfayı kontrol et

## Notlar

- `apiMessages` server-side olduğu için dictionary yerine ayrı bir 
  `lib/i18n/api-messages.ts` dosyasına da taşınabilir
- Legal sayfaların uzun HTML-like içerikleri array+paragraph pattern'ı gerektirebilir
- Yeni dil eklendiğinde TypeScript `Record<Locale, ...>` ile eksik key hatasını yakalar
- Bu migration toplam ~220+ key × 5 dil = ~1100 dictionary girişi
