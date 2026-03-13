# Makale 37 — Endüstriyel Kesme Mekaniği: Makaslama, Kesim ve Bıçak Bilimi

**Kaynak:** Wikipedia — Shearing (manufacturing), Blade, Sharpness (cutting), Cutting (derlenmiş)  
**Orijinal Başlıklar:**  
- "Shearing (manufacturing)" — https://en.wikipedia.org/wiki/Shearing_(manufacturing)  
- "Blade" — https://en.wikipedia.org/wiki/Blade  
- "Sharpness (cutting)" — https://en.wikipedia.org/wiki/Sharpness_(cutting)  
- "Cutting" — https://en.wikipedia.org/wiki/Cutting  
**Tarih:** Erişim 2025  
**Tür:** Uygulamalı temel — endüstriyel kesme bilimi derlemesi

---

## Özet

Bu makale, endüstriyel bıçakların çalışma prensiplerini — makaslama (shearing), kesme (cutting), bıçak fiziği (blade physics) ve keskinlik (sharpness) — kapsayan temel kesme mekaniği bilgisini derlemektedir. Makaslama sürecinde boşluk (clearance), malzeme kırılma mekanizması, bıçak geometrisi ve kenar açısının etkileri, körleşme mekanizmaları, keskinlik ölçümü (Blade Sharpness Index) ve takım malzemeleri ele alınmaktadır.

---

## 1. Kesme (Cutting) — Temel Prensip

### Tanım

Kesme, basınç (compressive stress) ve kayma (shear stress) kuvvetlerinin birleşimiyle malzemeyi iki veya daha fazla parçaya ayırma işlemidir.

### Temel Denklem

$$\tau = \frac{F}{A}$$

Burada:
- $\tau$ = kayma gerilmesi (shear stress)
- $F$ = uygulanan kuvvet
- $A$ = kayma alanı

### Kesme Yöntemleri

| Yöntem | Mekanizma | Endüstriyel Uygulama |
|---|---|---|
| **Talaş kaldırma** (chip forming) | Malzemeyi talaş olarak kaldırma | Torna, freze, planya |
| **Makaslama** (shearing) | Basınç + kayma ile malzemeyi ayırma | Giyotin, makas, zımba |
| **Aşındırma** (abrasive) | Sert parçacıklarla yüzey kaldırma | Taşlama, zımparalama |
| **Isıl kesme** (heat) | Malzemeyi eriterek veya buharlaştırarak kesme | Lazer, plazma, oksi-kesim |
| **Elektrokimyasal** | Elektroliz yoluyla malzeme kaldırma | ECM, EDM |

> **Endüstriyel bıçak bağlamı:** Endüstriyel bıçaklar ağırlıklı olarak **makaslama** ve **talaş kaldırmayan kesme** (non-chip cutting) yöntemlerini kullanır. Bıçak kenarı malzemeye basınç uygular, kayma gerilmesi oluşturur ve malzeme kayma dayanımını ($\tau_s$) aştığında kesim gerçekleşir.
> **Çapraz Referans (M.15):** M.15'te dilme (slitting) yöntemleri — makaslama, ezme kesim, jilet kesim. Her biri farklı τ/A oranlarıyla çalışır.

---

## 2. Makaslama (Shearing) — Endüstriyel Metal Kesme

### Tanım ve Sınıflandırma

Makaslama, talaş oluşturmadan ve yakma/eritme kullanmadan stok malzemeyi kesen bir işlemdir.

**Terminoloji:**
- Kesme bıçakları **düz** ise → süreç **makaslama** (shearing) olarak adlandırılır
- Kesme bıçakları **eğri** ise → **makaslama tipi işlemler** olarak adlandırılır

### Makaslama Tipi İşlemler

| İşlem | Türkçe | Açıklama |
|---|---|---|
| **Blanking** | Sac kesme | Sac metalden şekil çıkarma |
| **Piercing** | Delme | Sac metalde delik açma |
| **Roll slitting** | Dilme | Rulodan şerit kesme |
| **Trimming** | Budama | Fazla malzemeyi kesme |

### Makaslama Prensibi — Detaylı Mekanizma

#### Aşama 1: Baskı ve Elastik Deformasyon
Zımba (hareketli bıçak) iş parçasını kalıba (sabit bıçak) doğru iter.

#### Aşama 2: Plastik Deformasyon
Malzeme, zımba ve kalıp arasında yoğun **kayma gerilmesine** ($\tau$) maruz kalır. İlk kesilen bölge **plastik deformasyona** uğrar.

#### Aşama 3: Kırılma
Zımba malzeme kalınlığının **%15–60'ı** kadar ilerlediğinde, kayma gerilmeleri malzemenin **kayma dayanımından** ($\tau_s$) büyük olur ve kalan malzeme **yırtılarak** ayrılır.

#### Kesme Yüzeyi Yapısı

Makaslanmış iş parçasında iki belirgin bölge görülür:

| Bölge | Mekanizma | Görünüm |
|---|---|---|
| **Üst bölge** | Plastik deformasyon | Düzgün, parlak yüzey |
| **Alt bölge** | Kırılma/yırtılma | Pürüzlü, mat yüzey |

**Normal malzeme homojen değildir** ve zımba-kalıp boşluğu tamamen tekdüze olmadığından, makaslama eylemi **uniform değildir**. Kırılma en zayıf noktada başlar ve sırayla sonraki en zayıf noktaya ilerler — bu, pürüzlü kenarın nedenini açıklar.

> **Çapraz Referans (M.13):** M.13'te Zhou ve ark. — biyomalzeme kesiminde de benzer mekanizma: baskı (pressing, α ≈ 0°) → kayma gerilmesi τ_yz baskın; kaymalı kesim (slicing, α > 10°) → τ_xy ve τ_xz baskın.
> **Çapraz Referans (M.36):** M.36'da Mod II (düzlem içi kayma) — makaslama işleminin kırılma mekaniği karşılığıdır.

---

## 3. Boşluk (Clearance) — Kritik Parametre

### Tanım

Boşluk, zımba (hareketli bıçak) ile kalıp (sabit bıçak) arasındaki mesafedir. Kesme eyleminin gerçekleştiği noktada, bıçak hareket yönüne dik olarak ölçülür.

### Tipik Boşluk Değerleri

$$\text{Boşluk} = \%5 - \%40 \times t$$

Burada $t$ = malzeme kalınlığı.

### Boşluğun Etkileri

| Boşluk | Yüzey Kalitesi | Güç Tüketimi | Sorunlar |
|---|---|---|---|
| **Çok küçük** (<%5) | Yüksek kalite | Yüksek güç | Erken bıçak aşınması, artan kuvvet |
| **Optimal** (%5-%15) | İyi kalite | Orta güç | En iyi genel performans |
| **Büyük** (%15-%40) | Düşük kalite | Düşük güç | **Çapak** (burr), malzeme dönmesi (roll-over) |
| **Çok büyük** (>%40) | Kötü kalite | Minimum güç | Ağır çapak, çarpık kenar |

### Çapak Kontrolü

Çok fazla boşluk → malzeme **roll-over** (yuvarlanma) veya **ağır çapak** (heavy burr) yaşar.

**Kalıp yastığı** (die cushion) ile üstten kenetleme yapılırsa → belirli bir basıncın üzerinde **kırılma bölgesi tamamen elimine** edilebilir.

Ancak: makaslanmış kenar genellikle **iş sertleşmesi** (work-hardening) ve **çatlaklık** (cracking) gösterir.

> **Endüstriyel bıçak bağlamı:** Giyotin bıçaklarında, makas bıçaklarında ve dilme bıçaklarında boşluk ayarı kritik kalite parametresidir. Yanlış boşluk → hem ürün kalitesini bozar hem de bıçak ömrünü kısaltır.
> **Çapraz Referans (M.06):** M.06'da makaslama bıçağı eğim açısı (rake angle) — boşluk ile birlikte kesim kalitesini belirler.
> **Çapraz Referans (M.15):** M.15'te dilme yöntemlerinde boşluk kontrolü — makaslama dilmede optimal boşluk, ezme kesimde sıfır boşluk.

---

## 4. Makaslama Takım Malzemeleri

### Kalınlığa Göre Çelik Seçimi

| Malzeme Kalınlığı | Takım Çeliği | Açıklama |
|---|---|---|
| **≤ 6,4 mm** (1/4 inç) — düşük üretim | **Düşük alaşımlı çelik** | Maliyet avantajı, sınırlı ömür |
| **≤ 6,4 mm** (1/4 inç) — yüksek üretim | **Yüksek karbonlu, yüksek kromlu çelik** | D2 tipi, uzun ömür |
| **≥ 6,4 mm** (1/4 inç) | **Darbe dirençli çelik** | S serisi takım çelikleri |

> **Çapraz Referans (M.30):** M.30'da 8 Çin çeliği — D2 eşdeğeri Cr12MoV yüksek üretim makaslaması için yaygın tercih. T10A (W1 eşdeğeri) düşük alaşımlı seçenek.
> **Çapraz Referans (M.31):** M.31'de 6 çelik kategorisi — "soğuk iş çeliği" kategorisi (D2, A2, O1) makaslama bıçakları için birincil seçenektir.
> **Çapraz Referans (M.35):** M.35'te AHSS makaslamasında PM çelikleri (K390, Vanadis 4E) → yüksek üretim, yüksek sertlik malzemeler için gerekli.

---

## 5. Makaslama Toleransları ve Yüzey Kalitesi

### Tolerans Değerleri

| İşlem Türü | Tipik Tolerans | Mümkün Tolerans |
|---|---|---|
| **Sac makaslama** | ±0,1 inç (±2,5 mm) | ±0,005 inç (±0,13 mm) |
| **Çubuk/profil makaslama** | ±0,06 inç (±1,5 mm) | ±0,03 inç (±0,76 mm) |

### Yüzey Pürüzlülüğü

| Durum | Ra (μinç) | Ra (μm) |
|---|---|---|
| **Tipik** | 250–1000 | 6,3–25,4 |
| **Olası aralık** | 125–2000 | 3,2–50,8 |
| **Daha iyi yüzey** | İkincil işlem (taşlama, cilalama) gereklidir | — |

> **Endüstriyel bıçak bağlamı:** Makaslama yüzey kalitesi doğrudan bıçak kenar geometrisine ve boşluk ayarına bağlıdır. Daha keskin kenar + doğru boşluk = daha düzgün yüzey = daha az çapak.

---

## 6. Bıçak Fiziği — Kuvvet Konsantrasyonu

### Temel Prensip

Basit bir kesme bıçağı, iki yüzün (faces) bir kenarda (edge) birleşmesinden oluşur. İdeal olarak bu kenar sıfır yarıçaplı olmalıdır; pratikte tüm kenarlar büyütme altında (optik veya elektron mikroskobu) bir dereceye kadar yuvarlanmış görünür.

### Kuvvet Konsantrasyonu Mekanizması

1. Kuvvet bıçağın **sırtına** (back) veya **sapına** (handle) uygulanır
2. Sırt/sap **büyük alana** sahiptir
3. Bıçak kenarı **çok küçük alana** sahiptir
4. Kuvvetin küçük alana konsantre edilmesi → **basınç artışı**

$$P = \frac{F}{A_{kenar}}$$

Bu yüksek basınç, malzemenin moleküller, kristaller veya lifler arasındaki **bağları kopararak** kesim sağlar.

**Bıçak yeterince güçlü olmalıdır** — kesilen malzeme kopana kadar bıçağın kırılmaması gerekir.

> **Çapraz Referans (M.04):** M.04'te keskinlik bilimi — basınç konsantrasyonu kavramının detaylı açıklaması.
> **Çapraz Referans (M.07):** M.07'de FEM analizi — bıçak kenarındaki gerilme dağılımı, von Mises gerilmesi.

---

## 7. Kenar Açısı ve Geometri

### Açı-Mukavemet Dengesi

Kenarı oluşturan iki yüzün birleşme açısı kritik tasarım parametresidir:

| Kenar Açısı | Keskinlik | Kenar Mukavemeti | Dayanıklılık | Uygulama |
|---|---|---|---|---|
| **Küçük** (<15°) | Çok yüksek | Düşük | Düşük — kırılma/bükülme riski | Jilet, neşter, hassas kesim |
| **Orta** (15–25°) | Yüksek | Orta | Orta | Mutfak bıçağı, fileto bıçağı |
| **Büyük** (25–35°) | Orta | Yüksek | Yüksek | Makaslama bıçağı, doğrama bıçağı |
| **Çok büyük** (>35°) | Düşük | Çok yüksek | Çok yüksek | Balta, kıyma bıçağı, ayırma takozları |

### Bıçak Kalınlığı Etkisi

- **İnce bıçak:** Hafif, esnek, düşük sürtünme (drag) → dilimleme ve delme için ideal
- **Kalın bıçak:** Ağır, sert (stiff), yüksek mukavemet → kıyma ve ayırma için ideal

### Eğri ve Düz Kenar Karşılaştırması

| Kenar Tipi | Avantaj | Uygulama |
|---|---|---|
| **Eğri** | Kuvveti küçük temas alanına konsantre eder (balta etkisi) | Doğrama, odun yarma |
| **Düz** | Basma yükü potansiyel olarak kenar boyunca dağılır | Giyotin, düz makaslama |
| **Dişli (serrated)** | Kuvvet diş uçlarına konsantre olur + malzeme dişler arasına genişler | Ekmek bıçağı, testere |

### Dişli (Serrated) Kenar Mekaniği

Dişli kenar, düz kenardan farklı çalışır:
- Bıçağı malzemeye **bastırmak** → düşük elastik modüllü malzemeleri (ekmek gibi) ezer
- Bıçağı malzeme üzerinde **çekmek** → her diş aynı anda keser, malzeme deformasyonu minimum
- Dişler malzeme liflerine **açılı** olarak temas eder → kayma kuvveti daha etkili

> **Çapraz Referans (M.07):** M.07'de optimal bıçak açısı 28°, 22° altında gerilmeler artıyor — açı-mukavemet dengesi FEM ile doğrulanmış.
> **Çapraz Referans (M.10):** M.10'da neşter bıçağı geometrisi — eğim açısı λ(x) = tan⁻¹(|f'(x)|) ve etkili açı α(x) = 90° − θ/2 fonksiyonları. Eğri kenarın matematiksel modeli.
> **Çapraz Referans (M.14):** M.14'te toz üretimi — bıçak geometrisinin kesim kalitesine etkisi.
> **[ÇAKIŞMA] M.07 vs genel kural:** M.07'de optimal açı 28° bulunuyor (kağıt kesimi, HSS bıçak); ancak genel endüstriyel uygulamada optimal açı malzemeye göre 15–40° arasında değişir. 28° kağıt kesimi için optimaldir, evrensel optimum değildir.

---

## 8. Bıçak Malzemeleri — Genel Prensipler

### Temel Kural

Bıçak malzemesi, kesilen malzemeden **en az eşit sertlikte**, genellikle **daha sert** olmalıdır. Yetersiz sertlikteki bıçak:
- Malzemeyi kesemez veya
- Aşındırma (abrasion) nedeniyle çok hızlı aşınır

### Sertlik-Tokluk Dengesi Genel Kuralı

> "**Genel kural olarak, malzeme ne kadar sert ise o kadar az tok (daha gevrek) olur.**"

| Malzeme | Sertlik | Tokluk | Avantaj | Dezavantaj |
|---|---|---|---|---|
| **Çelik** (alaşımlı) | Yüksek (HRC 55–67) | Orta-yüksek | Kenar tutma + darbe direnci dengesi | Korozyon riski (paslanmaz olmayan) |
| **Seramik** (ZrO₂) | Çok yüksek (Mohs 8,5) | Çok düşük | Korozyonsuz, süper keskin | Kırılgan, düşürülürse kırılır |
| **WC** (sementli karbür) | Çok yüksek (~1500 HV) | Düşük | Aşınma direnci | Talaşlanma riski |
| **Paslanmaz çelik** | Orta-yüksek | Orta | Korozyon direnci | Kenar tutma çeliğe göre düşük |
| **Plastik** | Düşük | Yüksek | Ucuz, güvenli | Zayıf kenar tutma |

### Japon Kılıç Prensibi — Diferansiyel Sertleştirme

En iyi Japon kılıçları routinely 7'ye kadar farklı metal bölümden yapılırdı:
- **Yumuşak demir**: Darbe enerjisini absorbe eder, kırılmaz ama bükülür ve kenar tutmaz
- **Sert çelik**: Darbe altında kırılma riski ama kenar iyi tutar
- **Kombinasyon**: Darbe direnci + keskinlik dengesi

**Diferansiyel su verme (differential quenching):** Bıçak kesici kenarına ince kil, gövdeye kalın kil sürülür → su verme sırasında kenar hızlı soğur → ince kristal yapısı → sert kenar + esnek gövde.

Bu prensip modern endüstriyel bıçak tasarımına da uygulanır:
- Bimetalik bıçaklar (bimetal blades)
- Kenar kaplamalı bıçaklar (coated edge)
- Farklı ısıl işlem bölgeleri

> **Çapraz Referans (M.23):** M.23'te kaplamalar — TiN, TiAlN, DLC → yüzey sertleştirme, bulk malzeme tokluğunu koruyarak kenar sertliğini artırma. Modern "diferansiyel sertleştirme" versiyonu.
> **Çapraz Referans (M.34):** M.34'te 10 malzeme kategorisi — çelikten seramiğe, WC'den bimetale kadar tüm spektrum.
> **Çapraz Referans (M.36):** M.36'da kırılma tokluğu tablosu — K_IC değerleri sertlik-tokluk dengesinin sayısal ifadesi.

---

## 9. Körleşme (Dulling) Mekanizmaları

### Dört Temel Körleşme Mekanizması

| Mekanizma | Açıklama | Sonuç | Geri Dönüşüm |
|---|---|---|---|
| **1. Spiral makaslama** (spiral shearing) | Yumuşak kenar metal şerit oluşturur, malzeme soyulur | Malzeme kaybı ama kenar düzgün | Bileme ile onarılabilir |
| **2. Darbe deformasyonu** (impact deformation) | Bıçak sert nesneye çarpar → çukurlar, metal dönmesi, omurga streslenebilir | Çentikler, yuvarlanmış kenar | Malzeme kaldırma (bileme) gerekli |
| **3. Çizikler** (scrapes) | Bıçak yüzeylerinde kullanım sonrası çizikler oluşur | Başlangıçta kozmetik, ilerleyen dönemde gerilme çatlakları → bıçak arızası | Ciddi ise polisaj/yeniden bileme |
| **4. Kenar yuvarlanması** (edge rolling) | İnce kenar "J" harfi gibi kıvrılır | Keskinlik kaybı ama malzeme kaybı yok | **Masatlama** (stropping/honing) ile düzeltilir |

### Kritik Faktörler

- **Daha dar açılı kenar** → daha hızlı körleşir (ince malzeme kaldırıldığında kenar kalın bölgeye ulaşır)
- **Sert yüzeylerle temas** → en hızlı körleşme nedeni (seramik, cam, kemik)
- **Cam/taş üzerinde çekme** → çizik içindeki ince cam/taş parçacıkları bıçağı aşındırır

> **Endüstriyel bıçak bağlamı:** Endüstriyel ortamda 4 körleşme mekanizmasının hepsi aynı anda etkili olabilir. Kesilen malzeme türüne göre baskın mekanizma değişir.
> **Çapraz Referans (M.33):** M.33'te 9 bakım ipucu — düzenli bileme (spiral makaslama kompanzasyonu), masatlama (kenar yuvarlanması düzeltme), hasar kontrolü (darbe deformasyonu tespiti).
> **Çapraz Referans (M.32):** M.32'de aşınma direnci — kenar tutma kapasitesi körleşme hızıyla ters orantılı.
> **Çapraz Referans (M.04):** M.04'te keskinlik bilimi — "bıçak kenarı kullanımla körleşir, bileme ile yenilenir" — körleşme döngüsü.

---

## 10. Keskinlik (Sharpness) — Tanım ve Ölçüm

### Bilimsel Tanım

**Keskinlik**, bir bıçağın, uçun veya kesme aletinin malzemeleri **minimum kuvvetle** kesmesini sağlayan kapasitedir. Daha spesifik olarak: **bir yüzeyin başka bir yüzeyde kesim başlatma kapasitesi**.

### Keskinliği Belirleyen Faktörler

1. **Kenar açısı** (edge angle) — küçük açı = daha keskin
2. **Kenar genişliği** (edge width) — dar kenar = daha keskin
3. **Kenar inceliği** (fineness) — düşük yarıçap = daha keskin
4. **Malzeme sertliği** — yardımcı faktör (kenar dayanıklılığı)

### Görsel Kontrol

Çok keskin bir bıçağın kenarı **gözle görülemeyecek kadar küçüktür**; mikroskop altında bile odaklanmak zor olabilir. Bıçağı döndürerek yansıma değişiklikleri izlenebilir:
- **Çentikler ve yuvarlanmış kenarlar** görülebilir → yuvarlanmış kenar yansıtıcı yüzey sağlar
- **Düzgün düzeltilmiş kenar** → doğrudan bakıldığında **görünmez** (ışığı yansıtamayacak kadar dar)

### Blade Sharpness Index (BSI) — Bıçak Keskinlik İndeksi

BSI, dövme bıçakların keskinliğini standardize edilmiş bir malzemeyi kesmek için gereken **kuvvete** göre sınıflandıran nicel bir ölçüttür:

- **Yüksek BSI** → daha ince kesme kenarı → test malzemesini delmek/dilimlemek için daha az kuvvet gerekli
- **Düşük BSI** → daha kör kenar → daha fazla kuvvet gerekli

**Referans:** S. Schuldt ve ark., "Analysis of the sharpness of blades for food cutting", Journal of Food Engineering, Vol. 188 (2016), s. 13–20.

### Diş Keskinliği ile Analoji

Diş ucu (tooth cusp) keskinliği **eğrilik yarıçapı** (radius of curvature, RoC) ile ölçülür:
- **Düşük RoC** = daha keskin → temas alanı küçük → kırılma başlatmak için daha az enerji/kuvvet
- **Yüksek RoC** = daha kör → temas alanı büyük → daha fazla enerji/kuvvet gerekli

Bu prensip endüstriyel bıçaklara doğrudan uygulanır: kenar uç yarıçapı ne kadar küçükse, başlangıç kesim kuvveti o kadar düşüktür.

> **Çapraz Referans (M.12):** M.12'de sebze kesim enerjisi — spesifik enerji $E_j = L/A$ (kuvvet×mesafe/alan) → keskinlik arttıkça $E_j$ azalır.
> **Çapraz Referans (M.10):** M.10'da neşter bıçağı — Tablo 2: 10 numaralı bıçak (en düşük $F_t$ = 0,52 N) → en yüksek BSI eşdeğeri; 12 numaralı bıçak (en yüksek $F_t$ = 1,17 N) → en düşük BSI eşdeğeri.

---

## 11. Keskinlik ve Güvenlik Paradoksu

### Karşı-Sezgisel Güvenlik Kuralı

**Daha keskin aletler genellikle daha güvenlidir.**

| Durum | Mekanizma | Yaralanma Riski |
|---|---|---|
| **Keskin bıçak** | Minimum basınç gerekli → kontrollü kesim | **Düşük** — kaza olasılığı düşük; ancak kesilirse yaranın derinliği/ciddiyeti daha fazla |
| **Kör bıçak** | Yüksek basınç gerekli → kullanıcı zorlanır → kayma riski | **Yüksek** — kontrolsüz kaymalar, beklenmedik yönde kesim |

> Endüstriyel ortamda bıçak keskinliğinin düzenli korunması hem ürün kalitesi hem de operatör güvenliği için kritiktir. Kişisel koruyucu ekipman (kesilmeye dayanıklı eldivenler) zorunludur.

---

## 12. Bıçak Biçimleri ve Endüstriyel Optimizasyon

### Bıçak Profillerinin Fonksiyonelliği

| Profil | Uç/Kenar Özelliği | Birincil Fonksiyon | Endüstriyel Eşdeğer |
|---|---|---|---|
| **Düz sırt (S1)** | Eğri kenar, düz sırt | Doğrama + dilimleme + delme | Çok amaçlı endüstriyel bıçak |
| **Takip ucu (S2)** | Sırt yukarı kıvrılır | Dilimleme optimize | Deri/film kesim bıçakları |
| **Drop point (S3)** | Konveks sırt eğrisi | Güçlü uç, dilimleme | Genel amaçlı endüstriyel |
| **Clip point (S4)** | Kırpılmış sırt | İnce uç — delme/sıkı alan | Hassas kesim bıçakları |
| **Sheepsfoot (S5)** | Düz kenar, sırt kenara kıvrılır | Maksimum kontrol | Güvenlik bıçakları |
| **Hawkbill (C6)** | İç kenar keskin | Yırtma/çekme kesim | Halı/linoleum bıçakları |
| **Ulu/dairesel (C7)** | Daire segmenti | Kazıma/döner kesim | Pizza kesici, deri kazıma |

---

## 13. Fuller (Oluk) ve Yapısal Optimizasyon

### I-Kiriş Prensibi

Kılıç ve büyük bıçaklarda **fuller** (oluk), dövme veya frezeleme ile bıçak gövdesine açılan uzunlamasına kanaldır.

**Etki:**
- Malzeme kaybı → bıçak **hafifler** ama…
- Rijitlik (stiffness) korunur — **I-kiriş prensibi** ile aynı fizik

Bıçaklarda fuller genellikle önemsizdir (çok az malzeme kaldırılır), ancak endüstriyel büyük bıçaklarda (giyotin bıçakları, hadde bıçakları) yapısal oluklar hafiflik ve termal yönetim için kullanılabilir.

---

## 14. Kombine Malzeme ve Isıl İşlem

### Japon Kılıcı Modeli — Modern Endüstriyel Uygulamalar

| Teknik | Tarihsel | Modern Endüstriyel |
|---|---|---|
| **Çoklu metal** | 7 bölüm — yumuşak demir + sert çelik | Bimetalik bıçaklar (HSS kenar + esnek gövde) |
| **Dövme kaynak** (pattern welding) | Düşük/yüksek karbonlu demir çubuklar | Kaynaklı bileşik bıçaklar |
| **Diferansiyel sertleştirme** | Kil + su verme → sert kenar/yumuşak gövde | Lokal indüksiyon sertleştirme |
| **Diferansiyel temperleme** | Avrupa tekniği — benzer sonuç | Çoklu temperleme bölgeleri |

> **Çapraz Referans (M.31):** M.31'de HSS (M2, M42) — bimetalik band testere bıçaklarında HSS kenar + esnek çelik gövde prensibi Japon kılıcı modelinin modern tezahürüdür.
> **Çapraz Referans (M.23):** M.23'te kaplamalar (TiN, TiAlN, DLC) — sert kaplama + tok substrat → modern diferansiyel sertleştirme.

---

## 15. Obsidiyen — Doğanın En Keskin Kenarı

### Özellikler

- **Volkanik cam** — amorf (kristal yapısız) yapıda
- Kırık yüzeyleri **metal kenarlardan daha keskin** olabilir — hücresel düzeyde kesim yapabilir
- Modern cerrahide **obsidiyen neşterler** ile deney yapılmaktadır
- MÖ 2100'den eski obsidiyen neşterler Türkiye'deki Tunç Çağı yerleşiminde bulunmuştur

### Benzer Doğal Malzemeler

- **Çakmak taşı** (flint) ve **çört** (chert) — keskin kenarlarla kırılır
- Erken kesme aletleri olarak kullanılmıştır

### Endüstriyel Bıçak Bağlantısı

Obsidiyenin kırılma davranışı **M.36'daki Griffith kriteri** ile açıklanır: cam gibi amorf malzemelerde yüzey enerjisi ($\gamma$) düşük olduğundan, çok ince çatlak yüzeyleri oluşabilir → atomik düzeyde keskin kenar.

> **Çapraz Referans (M.36):** M.36'da cam: $G \approx 2\gamma = 2$ J/m², $E = 62$ GPa — Griffith kriteri cam/obsidiyen kırılmasını tam olarak tahmin eder.

---

## 16. Kesme Mekaniği Sayısal Özet

### Kritik Parametreler

| Parametre | Sembol | Birim | Tipik Aralık | Etkisi |
|---|---|---|---|---|
| Kayma gerilmesi | $\tau$ | MPa | 100–800 | Malzeme kesim sınırı |
| Boşluk | $c$ | %$t$ | 5–40 | Yüzey kalitesi + güç tüketimi |
| Malzeme kırılma yüzdesi | — | %$t$ | 15–60 | Zımba penetrasyon derinliği |
| Kenar açısı | $\theta$ | ° | 10–45 | Keskinlik-mukavemet dengesi |
| Kenar yarıçapı | $r$ | μm | 0,1–50 | Başlangıç kesim kuvveti |
| Yüzey pürüzlülüğü | $R_a$ | μm | 3,2–50,8 | Kesim yüzey kalitesi |
| BSI | — | (göreceli) | — | Bıçak keskinlik ölçümü |
| Kuvvet | $F$ | N | Uygulamaya bağlı | Kuvvet = τ × A |

---

## 17. Endüstriyel Uygulamalar İçin Sentez

### Kesme Mekaniği Tasarım Kuralları

1. **Malzeme-bıçak sertlik eşleştirmesi:** Bıçak sertliği ≥ malzeme sertliği. AHSS gibi ultra-sert malzemeler → WC veya PM çeliği gerektirir.

2. **Boşluk optimizasyonu:** Her malzeme kalınlığı ve türü için optimal boşluk belirlenmeli. Çok dar → aşırı aşınma; çok geniş → çapak.

3. **Kenar açısı seçimi:** Malzeme sertliğine ve kesim tipine göre. Yumuşak malzeme → dar açı (15–20°); sert malzeme → geniş açı (25–35°).

4. **Körleşme yönetimi:** Her 4 mekanizma için ayrı strateji:
   - Spiral makaslama → düzenli bileme periyodu
   - Darbe deformasyonu → doğru sertlik seçimi, darbe yükleme minimizasyonu
   - Çizikler → yüzey kalitesi kontrolü, kaplama
   - Kenar yuvarlanması → masatlama (honing), kenar açısı artırma

5. **Diferansiyel sertleştirme prensibi:** Modern kaplamalı bıçaklar (sert kenar + tok gövde) 1000 yıllık Japon kılıç prensibinin devamıdır.

6. **Keskinlik standardizasyonu:** BSI veya eşdeğer ölçüm → kalibreli bakım programları, tahmine dayalı ömür yönetimi.

---

## 18. Diğer Makalelerle Bağlantılar

| Makale | İlişki |
|---|---|
| **M.04** | Keskinlik bilimi — temel konseptler |
| **M.06** | Eğim açısı, makaslama bıçağı geometrisi |
| **M.07** | FEM gerilme analizi — optimal 28° açı (kağıt kesimi) |
| **M.10** | Neşter geometri modeli — λ(x), α(x) fonksiyonları |
| **M.12** | Sebze kesim enerjisi — spesifik enerji, kuvvet ölçümü |
| **M.13** | Baskı ve kayma kesimi — Tresca kriteri, Mod II/III |
| **M.14** | Bıçak geometrisi ve toz üretimi |
| **M.15** | Dilme yöntemleri — makaslama/ezme/jilet mekanizmaları |
| **M.16** | Ezme kesim — bıçak seçim mekaniği |
| **M.23** | Kaplamalar — modern diferansiyel sertleştirme |
| **M.26** | HSS vs WC — tokluk-sertlik dengesi |
| **M.30** | 8 Çin çeliği — makaslama bıçağı malzemeleri |
| **M.31** | 6 çelik kategorisi — soğuk iş, HSS, darbe dirençli |
| **M.32** | Aşınma direnci — kenar tutma kapasitesi |
| **M.33** | 9 bakım ipucu — körleşme yönetimi pratiği |
| **M.34** | 10 malzeme kategorisi — genel sertlik-tokluk haritası |
| **M.35** | AHSS PM çelikleri — yüksek sertlik malzeme makaslaması |
| **M.36** | Kırılma mekaniği temelleri — K_IC, G, Mod I/II/III |

---

## 19. Kritik Öğrenimler

1. **Makaslama kesimi %15–60 penetrasyonda tamamlanır** — bıçak malzeme kalınlığının yarısından azını geçtiğinde kırılma başlar. Doğru boşluk ayarı bu oranı optimize eder.

2. **Bıçak kenarı bir kuvvet yoğunlaştırıcıdır** — basınç = kuvvet/alan; kenar alanı ne kadar küçükse (keskinlik ne kadar yüksekse), kesim basıncı o kadar yüksek olur.

3. **Sertlik-tokluk dengesi 1000 yıllık mühendislik problemidir** — Japon kılıç yapımcılarından modern PM çelik + PVD kaplama kombinasyonlarına kadar aynı temel prensip: sert kenar + tok gövde.

4. **Dört körleşme mekanizması farklı çözümler gerektirir** — spiral makaslama (bileme), darbe (malzeme seçimi), çizikler (kaplama/yüzey kalitesi), yuvarlanma (masatlama). Tek bir çözüm tüm mekanizmaları kapsamaz.

5. **BSI (Bıçak Keskinlik İndeksi) endüstriyel kalite kontrolünde standardizasyon sağlar** — subjektif "keskin/kör" değerlendirmesi yerine ölçülebilir bir parametre.

6. **Kenar açısı evrensel olarak optimize edilemez** — M.07'de kağıt için 28° optimal, ancak her malzeme-uygulama çifti için farklı optimal açı vardır.

---

## 20. Referanslar

1. Degarmo, E. P.; Black, J. T.; Kohser, R. A. (2003), Materials and Processes in Manufacturing (9. baskı), Wiley.
2. Todd, R. H.; Allen, D. K.; Alting, L. (1994), Manufacturing Processes Reference Guide, Industrial Press.
3. Wick, C.; Veilleux, R. F. (1984), Tool and Manufacturing Engineers Handbook: Forming (4. baskı), SME.
4. Schuldt, S.; Arnold, G.; Kowalewski, J.; Schneider, Y.; Rohm, H. (2016), "Analysis of the sharpness of blades for food cutting", Journal of Food Engineering, 188, 13–20.
5. Cotterell, B.; Kamminga, J. (1992), Mechanics of pre-industrial technology, Cambridge University Press.
6. Berthaume, M. A.; Dumont, E. R.; Godfrey, L. R.; Grosse, I. R. (2014), "The effects of relative food item size on optimal tooth cusp sharpness during brittle food item processing", J. Royal Society Interface, 11(101).
7. Wikipedia — Shearing (manufacturing), Blade, Sharpness (cutting), Cutting — Erişim 2025.
