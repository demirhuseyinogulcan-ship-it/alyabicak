# Blog Görselleri

Bu klasör blog yazıları için kullanılan görselleri içerir.

## Görsel Boyutları

### Kapak Görseli (Cover Image)
- **Boyut:** 1200 x 630 piksel
- **Format:** WebP (öncelikli), JPG
- **Maksimum dosya boyutu:** 200KB
- **Oran:** 1.91:1 (OG Image standardı)

### İçerik Görseli
- **Boyut:** 800 x 450 piksel
- **Format:** WebP (öncelikli), JPG
- **Maksimum dosya boyutu:** 150KB

## Dosya İsimlendirme

Dosya isimleri blog yazısının slug'ı ile aynı olmalıdır:

```
blog-yazisi-slug.webp       → Kapak görseli
blog-yazisi-slug-1.webp     → İçerik görseli 1
blog-yazisi-slug-2.webp     → İçerik görseli 2
```

## Mevcut Görseller

| Dosya | Yazı | Durum |
|-------|------|-------|
| `celik-endustrinin-omurgasi.webp` | Çelik: Endüstrinin Omurgası | ❌ Yüklenmedi |
| `endustriyel-bicak-secimi.webp` | Endüstriyel Bıçak Seçimi | ❌ Yüklenmedi |
| `sheffield-celigi.webp` | Sheffield Çeliği | ❌ Yüklenmedi |

## Görsel Optimizasyonu

1. **WebP'ye Dönüştürme:**
   - Squoosh.app kullanılabilir
   - Quality: 80-85%

2. **Sıkıştırma:**
   - TinyPNG veya Squoosh
   - Hedef: %60-70 sıkıştırma

3. **Metadata Temizleme:**
   - EXIF verilerini kaldır
