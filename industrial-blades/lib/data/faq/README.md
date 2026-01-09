# FAQ Modül Yapısı - Yeni Dil Ekleme Rehberi

## 📁 Dosya Yapısı

```
lib/data/faq/
├── index.ts              # Ana export dosyası
├── types.ts              # TypeScript tipleri
└── locales/              # Dil dosyaları
    ├── tr.json           # Türkçe
    ├── en.json           # İngilizce
    ├── ar.json           # Arapça
    └── [yeni-dil].json   # Yeni eklenecek diller
```

## 🚀 Yeni Dil Ekleme (3 Adım)

### Adım 1: JSON Dosyası Oluştur
`lib/data/faq/locales/` klasörüne yeni dil kodu ile JSON dosyası ekleyin.

Örnek: Rusça için `ru.json`

```json
{
  "locale": "ru",
  "categories": {
    "arizagiderme": "Устранение неполадок и производительность",
    "celik": "Типы стали и техническая информация",
    "kaplama": "Покрытие и обработка поверхности",
    "teknik": "Технические характеристики",
    "ozelUretim": "Индивидуальное производство и услуги",
    "siparis": "Заказ и доставка",
    "genel": "Общая информация"
  },
  "questions": [
    {
      "id": "blade-dulling-quickly",
      "question": "Наши лезвия быстро тупятся, что делать?",
      "answer": "Быстрое затупление может иметь несколько причин...",
      "category": "arizagiderme"
    }
    // ... diğer sorular
  ]
}
```

### Adım 2: index.ts'de Import Ekle
`lib/data/faq/index.ts` dosyasında:

```typescript
// Import locale data
import trData from './locales/tr.json'
import enData from './locales/en.json'
import arData from './locales/ar.json'
import ruData from './locales/ru.json'  // ← Yeni eklendi

// FAQ data map
const faqDataMap: Record<FAQLocale, FAQData> = {
  tr: trData as FAQData,
  en: enData as FAQData,
  ar: arData as FAQData,
  ru: ruData as FAQData,  // ← Yeni eklendi
}
```

### Adım 3: types.ts'de Locale Ekle
`lib/data/faq/types.ts` dosyasında:

```typescript
export type FAQLocale = 'tr' | 'en' | 'ar' | 'ru'  // ← 'ru' eklendi
```

Ve `index.ts`'de:
```typescript
export const SUPPORTED_LOCALES: FAQLocale[] = ['tr', 'en', 'ar', 'ru']  // ← 'ru' eklendi
```

## ✅ Avantajlar

| Özellik | Açıklama |
|---------|----------|
| **İzole Dosyalar** | Her dil kendi JSON dosyasında, çakışma riski yok |
| **Çevirmen Dostu** | Sadece JSON, kod bilgisi gerektirmez |
| **Tip Güvenliği** | TypeScript tüm JSON'ları doğrular |
| **Kolay Git** | Sadece değişen dil dosyası commit edilir |
| **Sıralı Kategoriler** | `CATEGORY_ORDER` ile tutarlı gösterim |

## 📋 Kategori Kodları

| Kod | Türkçe | İngilizce |
|-----|--------|-----------|
| `arizagiderme` | Arıza Giderme & Performans | Troubleshooting & Performance |
| `celik` | Çelik Türleri & Teknik Bilgi | Steel Types & Technical Info |
| `kaplama` | Kaplama & Yüzey İşlemleri | Coating & Surface Treatments |
| `teknik` | Teknik Spesifikasyonlar | Technical Specifications |
| `ozelUretim` | Özel Üretim & Hizmetler | Custom Manufacturing & Services |
| `siparis` | Sipariş & Teslimat | Order & Delivery |
| `genel` | Genel Bilgiler | General Information |

## 🔧 JSON Template (Boş)

Yeni dil eklerken bu template'i kullanın:

```json
{
  "locale": "XX",
  "categories": {
    "arizagiderme": "",
    "celik": "",
    "kaplama": "",
    "teknik": "",
    "ozelUretim": "",
    "siparis": "",
    "genel": ""
  },
  "questions": []
}
```
