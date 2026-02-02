# 📧 Manuel Mail Template - Web Sitesi Güncellemeleri

Her commit/push sonrası bu template'i kullanarak yöneticilere mail gönderin.

---

## TEMPLATE (Kopyala-Yapıştır)

**Kime:** yagiz@alyatekstil.com, pelin@alyatekstil.com  
**Konu:** [Alya Bıçak Web] [BURAYA KONU YAZIN]  
**Gönderen:** satis3@alyatekstil.com

---

**Sayın Yetkililer,**

Web sitemizde aşağıdaki güncelleme yapılmıştır:

### 🔧 Yapılan Değişiklik:
[BURAYA AÇIKLAMA YAZIN - Örnek: Footer'daki WeChat butonundaki tooltip sorunu düzeltildi]

### ✅ Sonuç:
- [BURAYA FAYDASI YAZIN - Örnek: URL ile çakışma ortadan kalktı]
- [BURAYA FAYDASI YAZIN - Örnek: Kullanıcı deneyimi iyileşti]

### 📋 Teknik Detay:
- **Dosya:** [DOSYA ADI - Örnek: components/Footer.tsx]
- **Commit:** [COMMIT HASH - Örneğin git log'dan alın]
- **Tarih:** [TARIH - Örnek: 30 Ocak 2026, 11:49]

**Linkler:**
- Web Sitesi: https://alyabicak.com
- GitHub Commit: https://github.com/demirhuseyinogulcan-ship-it/industrial-blades-website/commit/[COMMIT_HASH]

Saygılarımla,  
Satış Departmanı

---

## BUGÜNKÜ ÖRNEKLERİNİZ

### 1. WeChat Butonu Düzeltmesi (Commit: 91ff1ec)

**Kime:** yagiz@alyatekstil.com, pelin@alyatekstil.com  
**Konu:** [Alya Bıçak Web] Footer WeChat Butonu Düzeltmesi

**Sayın Yetkililer,**

Web sitemizde aşağıdaki güncelleme yapılmıştır:

### 🔧 Yapılan Değişiklik:
Footer (sayfa altı) bölümündeki WeChat butonuna fare ile gelindiğinde, telefon numarası yanlış konumda görünüyordu ve hemen üstündeki "www.alyatekstil.com" linki ile çakışıyordu. Bu durum düzeltilmiştir.

### ✅ Sonuç:
- WeChat butonuna fare ile gelindiğinde artık numara popup olarak çıkmayacak
- Ana site linki (www.alyatekstil.com) daha net görünecek
- Kullanıcı deneyimi iyileştirilmiş oldu

### 📋 Teknik Detay:
- **Dosya:** components/Footer.tsx
- **Commit:** 91ff1ec
- **Tarih:** 30 Ocak 2026, 11:49

**Linkler:**
- Web Sitesi: https://alyabicak.com
- GitHub Commit: https://github.com/demirhuseyinogulcan-ship-it/industrial-blades-website/commit/91ff1ec

Saygılarımla,  
Satış Departmanı

---

### 2. Otomatik Mail Sistemi Kurulumu (Commit: cc0fc5a)

**Kime:** yagiz@alyatekstil.com, pelin@alyatekstil.com  
**Konu:** [Alya Bıçak Web] GitHub Actions Mail Bildirim Sistemi Eklendi

**Sayın Yetkililer,**

Web sitemizde aşağıdaki güncelleme yapılmıştır:

### 🔧 Yapılan Değişiklik:
GitHub Actions kullanarak otomatik mail gönderme sistemi kuruldu. Sistem şu an hazır durumda ancak mail şifresi bilgisi eklenmesi gerekiyor. İleride IT yöneticimizle koordineli olarak aktif hale getirilebilir.

### ✅ Sonuç:
- Altyapı hazır
- İleride her kod değişikliğinde otomatik mail gönderebileceğiz
- Şimdilik manuel mail göndermeye devam ediyoruz

### 📋 Teknik Detay:
- **Dosya:** .github/workflows/notify-on-push.yml
- **Commit:** cc0fc5a
- **Tarih:** 30 Ocak 2026, 11:57

**Linkler:**
- Web Sitesi: https://alyabicak.com
- GitHub Commit: https://github.com/demirhuseyinogulcan-ship-it/industrial-blades-website/commit/cc0fc5a

Saygılarımla,  
Satış Departmanı

---

## HIZLI NOTLAR

### Commit Hash Nasıl Bulunur?
```bash
git log -1 --pretty=format:'%h'
```

### Son Commit Bilgisi:
```bash
git log -1 --pretty=format:'Commit: %h | Tarih: %ci | Mesaj: %s'
```

### Değiştirilen Dosyalar:
```bash
git diff --name-only HEAD~1 HEAD
```
