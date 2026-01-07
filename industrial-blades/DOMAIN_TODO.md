# 🚀 Domain Alındıktan Sonra Yapılacaklar

Bu dosya domain alındığında yapılması gereken SEO ve analytics ayarlarını içerir.
**Domain alındığında bu listeyi takip edin!**

---

## 1. ✅ Google Search Console Kurulumu

### Adımlar:
1. [Google Search Console](https://search.google.com/search-console) adresine git
2. "Property Ekle" → Domain seç
3. DNS doğrulama için TXT kaydı ekle (domain sağlayıcında)
4. Doğrulama tamamlandıktan sonra:
   - Sitemap gönder: `https://DOMAIN.com/sitemap.xml`
   - URL denetimi yap
   - Mobil kullanılabilirlik kontrolü

### Sitemap URL'leri:
```
https://DOMAIN.com/sitemap.xml
```

---

## 2. ✅ Bing Webmaster Tools Kurulumu

### Adımlar:
1. [Bing Webmaster Tools](https://www.bing.com/webmasters) adresine git
2. Google Search Console'dan import et (en kolay yol)
3. Veya manuel olarak site ekle ve doğrula
4. Sitemap gönder

---

## 3. ✅ Google Analytics 4 - Domain Güncelleme

### Adımlar:
1. [Google Analytics](https://analytics.google.com) → Admin
2. Data Streams → Web stream seç
3. "Add stream" veya mevcut stream'e domain ekle
4. Referral exclusions'a kendi domain'i ekle

---

## 4. ✅ Microsoft Clarity - Domain Güncelleme

### Adımlar:
1. [Microsoft Clarity](https://clarity.microsoft.com) → Settings
2. Setup → "Allowed sites" bölümüne domain ekle
3. Blocked IPs'e kendi IP'ni ekle (verileri kirletmemek için)

---

## 5. ✅ robots.txt Kontrolü

Domain değişince kontrol et:
```
https://DOMAIN.com/robots.txt
```

Sitemap URL'inin doğru olduğundan emin ol.

---

## 6. ✅ SSL/HTTPS Kontrolü

- Vercel otomatik SSL sağlar
- https://DOMAIN.com çalıştığını doğrula
- http → https yönlendirmesini kontrol et

---

## 7. ✅ Structured Data Test

1. [Rich Results Test](https://search.google.com/test/rich-results) adresine git
2. Domain URL'ini test et
3. Hataları düzelt

---

## 8. ✅ PageSpeed Insights

1. [PageSpeed Insights](https://pagespeed.web.dev/) adresine git
2. Domain'i test et
3. Core Web Vitals skorlarını kaydet
4. Önerileri uygula

---

## 9. ✅ Social Media Meta Tags

Domain alındıktan sonra:
1. Facebook Sharing Debugger ile test et
2. Twitter Card Validator ile test et
3. LinkedIn Post Inspector ile test et

---

## 10. ✅ Google Business Profile (Opsiyonel ama Önemli)

1. [Google Business](https://business.google.com) adresine git
2. İşletme profili oluştur
3. Website URL'i ekle
4. Adres, telefon, çalışma saatleri ekle
5. Fotoğraflar yükle

---

## 📊 Analytics ID'leri (.env.local dosyasında)

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

---

## 🔗 Faydalı Linkler

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Google Analytics](https://analytics.google.com)
- [Microsoft Clarity](https://clarity.microsoft.com)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

**Son Güncelleme:** Ocak 2026
**Oluşturan:** Development Team
