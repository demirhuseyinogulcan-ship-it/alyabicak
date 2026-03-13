# Makale 41 — Endüstriyel Dilme, Makaslama ve Kesme (Blanking) Teknolojisi: Bıçak Tasarımı, Süreç Mekaniği ve Kalite Kontrol

## Giriş

Endüstriyel üretimde metal levha, bobin (coil) ve şerit malzemelerin belirli ölçülere kesilmesi, dilme (slitting), makaslama (shearing) ve blanking (kesip çıkarma) süreçleriyle gerçekleştirilir. Bu süreçlerin ortak noktası, malzemenin talaş kaldırmadan (chip-free) ve ergitme/yakma olmaksızın kesilmesidir. Makaslamada düz bıçaklar kullanıldığında süreç "shearing" olarak adlandırılır; kavisli bıçaklarla yapılan kesim ise "shearing-type operations" (makaslama tipi işlemler) kategorisindedir. Makaslama tipi işlemler arasında blanking (dış profil kesme), piercing (delme), roll slitting (rulo dilme) ve trimming (kenar kesme) yer alır.

Bu makale, endüstriyel bıçak üretimi ve kullanımı açısından kritik olan tüm dilme, makaslama ve blanking süreçlerini; bıçak malzemeleri, geometrik parametreler, toleranslar, çapak (burr) oluşumu, kalite kontrol ve endüstriyel uygulamalar bağlamında derinlemesine incelemektedir. Bilgiler, önceki makalelerdeki bıçak geometrisi (M.01), kesme mekaniği (M.06), aşınma mekanizmaları (M.07), kaplama teknolojileri (M.02-M.03), çelik türleri (M.23-M.31) ve ısıl işlem (M.40) bilgileriyle entegre edilmiştir.

---

## 1. Makaslama (Shearing) Temel Prensipleri

### 1.1 Süreç Tanımı

Makaslama (shearing), "die cutting" olarak da bilinen, malzemeyi talaş oluşturmadan ve eritme/yakma yapmadan kesen bir işlemdir. Temel prensip şöyledir:

1. **Zımba (punch/hareketli bıçak)** iş parçasını **kalıba (die/sabit bıçak)** doğru iter
2. Bıçaklar arasındaki **klirens (clearance)** malzeme kalınlığının %5-40'ı arasındadır
3. Klirens, kesme noktasında bıçaklar arasındaki mesafe olarak tanımlanır ve bıçak hareket yönüne dik ölçülür
4. Malzeme, zımba ve kalıp arasında yüksek lokalize **kayma gerilmelerine (shear stress)** maruz kalır
5. Zımba, malzeme kalınlığının %15-60'ı kadar ilerlediğinde malzeme **kırılır (fracture)**, çünkü kayma gerilmeleri malzemenin **kayma mukavemetini (shear strength)** aşmıştır

### 1.2 Kesim Profili Anatomisi

Kesilmiş iş parçasında iki belirgin bölge gözlemlenir:

| Bölge | Açıklama | Oluşum Mekanizması |
|-------|----------|-------------------|
| **Plastik deformasyon bölgesi** | Düzgün, parlak yüzey | Malzeme bıçaklar arasında plastik olarak deforme olur |
| **Kırılma bölgesi** | Pürüzlü, mat yüzey | Kayma mukavemeti aşılır, malzeme kopar |

Malzemedeki inhomojenllikler ve zımba-kalıp arasındaki klirens tutarsızlıkları nedeniyle, makaslama eylemi uniform şekilde gerçekleşmez. Kırılma, en zayıf noktadan başlar ve bir sonraki en zayıf noktaya ilerler — bu durum pürüzlü kenar oluşumunun sebebidir.

### 1.3 Klirens Etkisi

Klirens parametresi kritik öneme sahiptir:

| Klirens Durumu | Etki |
|----------------|------|
| **Optimal klirens** | Temiz kesim, minimum çapak, düşük güç tüketimi |
| **Yetersiz klirens** | Bıçak kenarında aşırı nokta basıncı (point pressure), hızlı takım aşınması |
| **Aşırı klirens** | Roll-over (kıvrılma) veya ağır çapak (heavy burring) oluşumu |
| **Üst baskı ile** | Belirli bir basıncın üzerinde kırılma bölgesi tamamen ortadan kaldırılabilir |

Kesilmiş kenar genellikle **iş sertleşmesi (work-hardening)** ve **çatlama** riski taşır.

### 1.4 Makaslama Bıçak Malzemeleri

| Malzeme | Kullanım Alanı |
|---------|---------------|
| **Düşük alaşımlı çelik (Low alloy steel)** | Düşük üretim hacmi, ≤6.4 mm (¼ inç) kalınlık |
| **Yüksek karbonlu, yüksek kromlu çelik** | Yüksek üretim hacmi, ≤6.4 mm (¼ inç) kalınlık |
| **Darbe dayanımlı çelik (Shock-resistant steel)** | ≥6.4 mm (¼ inç) ve üzeri kalınlık |

Bu malzeme seçimi, M.23-M.31 makale serisindeki takım çelikleri sınıflandırmasıyla doğrudan bağlantılıdır. Yüksek karbonlu-yüksek kromlu çelikler D2 (AISI) tipi soğuk iş takım çeliklerine, darbe dayanımlı çelikler ise S grubu (AISI S5, S7) takım çeliklerine karşılık gelir.

### 1.5 Toleranslar ve Yüzey Kalitesi

| Parametre | Tipik Değer | Ulaşılabilir Değer |
|-----------|-------------|---------------------|
| **Levha makaslama toleransı** | ±0.1 inç (±2.54 mm) | ±0.005 inç (±0.127 mm) |
| **Çubuk/profil makaslama toleransı** | ±0.06 inç (±1.52 mm) | ±0.03 inç (±0.762 mm) |
| **Yüzey pürüzlülüğü (tipik)** | 250-1000 µinç (6.35-25.4 µm) | — |
| **Yüzey pürüzlülüğü (aralık)** | 125-2000 µinç (3.18-50.8 µm) | — |

Daha iyi yüzey kalitesi istendiğinde ikincil operasyonlar (taşlama, bileme) gereklidir.

---

## 2. Sac Metal Makas Tipleri (Shear Types)

### 2.1 Giyotin Makas (Guillotine Shear / Power Shear / Squaring Shear)

Endüstride en yaygın kullanılan sac kesme makinasıdır.

**Çalışma prensibi:**
1. Malzeme tabla üzerine yerleştirilir
2. Koç (ram) ile malzeme sıkıştırılır
3. Hareketli bıçak, sabit bıçağa doğru hareket ederek malzemeyi keser

**Güç kaynağı seçenekleri:**
- Ayak pedalı ile (küçük işler)
- El ile (nadir)
- Mekanik tahrik
- Hidrolik tahrik

**Kritik geometrik parametreler:**

| Parametre | Değer | Etki |
|-----------|-------|------|
| **Makas açısı (Shear angle)** | Açılı veya "rocking" | Malzemeyi bir uçtan diğerine kademeli keser |
| **Eğim açısı (Rake angle)** | 0.5°-2.5° | Malzemenin bıçaklar arasında sıkışmasını önler |
| **5° makas açısı** | — | Kesme kuvvetini ~%20 azaltır (ancak strok artar) |

**Önemli:** Eğim açısı (rake) uygulamak kenar dikliğini (squareness) bozar — bu pratikte bir mühendislik uzlaşmasıdır (engineering compromise).

**Makina bileşenleri:**
- **Makas tablası (shear table):** İş parçasının dayandığı platform
- **İş tutucu (work-holding device):** Malzemeyi sabit tutar, burkulma ve kaymayı önler
- **Üst ve alt bıçaklar:** Gerçek kesimi yapan elemanlar
- **Ölçü mesnedi (gauging device / backgauge):** Doğru kesim pozisyonunu sağlar

**Bıçak tasarımı uzlaşması:** Keskin kenar, mukavemet ve dayanıklılık arasındaki denge nedeniyle, metal işleme bıçakları genellikle bıçak-keskinliğinde (knife-edge) değil, **kare-kenarlı (square-edged)** olarak tasarlanır.

**Tipik iş parçası malzemeleri:**
- Alüminyum, pirinç, bronz, yumuşak çelik — mükemmel makaslama derecelendirmesi
- Paslanmaz çelik — iş sertleşme eğilimi nedeniyle daha az makaslanır (M.39 ile bağlantılı)

### 2.2 Timsah Makas (Alligator Shear)

Tarihsel olarak "kol makası" (lever shear), bazen "timsah makası" (crocodile shear) olarak da bilinir.

- **Mekanizma:** Menteşeli çene, volan veya hidrolik silindir tahrikli
- **Çene boyutu:** 100-910 mm (4-36 inç)
- **Kullanım:** Demir esaslı malzemeler — inşaat demiri, boru, köşebent, I-profil
- **Tipi:** Masa üstü veya ekskavatör montajlı

### 2.3 Tezgah Makası (Bench Shear)

- **Diğer adı:** Kol makası (lever shear)
- **Mekanizma:** Bileşik mekanizma ile mekanik avantaj artırımı
- **Kullanım:** Orta boy sac parçalardan kaba şekil kesme
- **Kapasite:** Bazı modeller 10 mm kalınlığa kadar sac, çubuk ve lama kesebilir
- **Bıçaklar:** Dikkatlice bilenerek temiz, çapaksız kesim sağlanır
- **Kesit bıçakları:** Kayar bıçaklarla farklı boyutlardaki köşebent ve T-profillerde 90° kesim; yuvarlak ve kare çubuk kesme açıklıkları

### 2.4 Boğazsız Makas (Throatless Shear)

- **İsim kaynağı:** Metalin bıçak etrafında serbestçe hareket edebilmesi (boğaz kısıtlaması yok)
- **Kullanım:** Sac metalde karmaşık düz ve eğri kesimlerin yapılması
- **Avantaj:** Büyük esneklik — malzeme herhangi bir yönde kesilebilir

### 2.5 Motorlu El Makası (Power Shear)

- **Güç kaynağı:** Elektrik veya pnömatik
- **Kullanım:** Büyük sac parçalardan blanking (profil kesme) işlemi
- **Kesim tipi:** Düz çizgiler ve nispeten büyük yarıçaplı eğriler
- **Kapasite:** Büyük modeller 12 gauge (≈2.66 mm) sac kesebilir
- **Avantaj:** Band testere gibi boyut limiti yok
- **Hidrolik versiyonlar:** Ağır makinalara monte edilir; uzak lokasyonlardaki (maden, orman) büyük/tehlikeli parçalar için kullanılır

### 2.6 Teneke Makası (Tin Snips)

- **Diğer adı:** Shears (makaslar)
- **Tip 1 — Tenekeci makası (Tinner's snips):** Normal makasa benzer yapı
- **Tip 2 — Bileşik kollu makaslar (Compound-action snips):** Bileşik kaldıraç sistemiyle artırılmış mekanik avantaj
- **Kullanım:** Sac metal, düz veya eğri kesim (içbükey ve dışbükey)

---

## 3. Rulo Dilme (Roll Slitting) Teknolojisi

### 3.1 Temel Kavram

Rulo dilme (roll slitting), geniş bir malzeme rulosunu daha dar rulolara bölen bir **makaslama operasyonudur**. İki temel tip vardır:

| Tip | Açıklama |
|-----|----------|
| **Log dilme (Log slitting)** | Rulo bütün olarak ("log") işlenir; sarma/yeniden sarma yapılmadan bir veya daha fazla dilim alınır |
| **Yeniden sarmalı dilme (Rewind slitting)** | Web açılır, bıçaklar veya lazerlerden geçirilir, bir veya daha fazla şafta yeniden sarılır |

Dar şeritler "mults" (çoğul kısaltması) veya çapları genişliklerine göre çok fazlaysa "pancakes" olarak adlandırılır.

**Makina terminolojisi:**
- Log dilme → **kağıt rulo testeresi** (daire testere veya şerit testere kullanır)
- Rewind dilme → **slitter rewinder / slitter / slitting machine** (birbirinin yerine kullanılır)
- "Dilme" (slitting) → malzeme web'inin boyuna yönde kesilmesi
- "Kesme" (cutting) → hem boyuna hem enine kesim operasyonlarını kapsar

### 3.2 Yumuşak Malzeme Dilme

Plastik filmler, tekstil, yapışkan bantlar ve kağıt gibi yumuşak malzemelerde birden fazla yöntem mevcuttur:

| Yöntem | Açıklama | Avantaj/Dezavantaj |
|--------|----------|-------------------|
| **Jilet (Razor) dilme** | Düz veya dairesel jilet bıçakları | Basit kurulum, hızlı ayar; düşük maliyet ama sık değişim gerektirir |
| **Döner makas dilme (Rotary shear)** | Erkek ve dişi dairesel bıçaklar birbirine geçerek makas etkisi sağlar | Kağıt, film, folyo için yaygın; uzun süre keskin kalır; ayar süresi daha uzun |
| **Ezme kesim (Crush cut)** | Erkek bıçak bir örs (anvil) üzerinde çalışır | Dokusuz kumaşlar ve köpükler için iyi |
| **Sıcak bıçak (Hot knife)** | Isıtılmış yuvarlak bıçak veya keskin metal bir örs üzerinde çalışır | Kenarları yakıp saçaklanmayı önler |

**Hız aralığı:** 10 m/dk (özel metal weblar) ila 1000 m/dk (kağıt yapımı)

**Otomasyon özellikleri:**
- Malzeme gerginlik kontrolü (tension control)
- Otomatik bıçak konumlandırma
- Otomatik maça (core) hizalama
- Manuel rulo taşıma minimizasyonu
- Bazı makinalar bıçak durumunu izleyip otomatik bileme yapar

### 3.3 Sert Malzeme Dilme (Metal Bobin Dilme)

Sac metal gibi sert malzemelerde bıçak kullanılamaz. Bunun yerine **modifiye makaslama** uygulanır:

**Prensip:** Birbirine uyan kaburga (rib) ve oluklara (groove) sahip iki silindirik rulo, geniş ruloyu çok sayıda dar ruloya keser.

**Avantajlar:**
- Sürekli üretim süreci — ekonomik
- Çoğu diğer kesme sürecinden **daha hassas**

**Dezavantajlar:**
- Dilim kenarlarında **çapak (burr)** oluşumu yaygındır
- Rulo geometrisi, malzeme türü ve iş parçası kalınlığına göre belirli toleranslarla belirlenir

### 3.4 Metal Bobin Dilme Hattı (Slitting Line) Bileşenleri

Metal bobin dilme makinası üç ana bölümden oluşur:

| Bölüm | Fonksiyon |
|-------|-----------|
| **Açıcı (Uncoiler)** | Bobini tutar ve açar; frenlenir veya tahrik edilir |
| **Dilme ünitesi (Slitter)** | İki dairesel kesim tekerleği (üst ve alt) arasından malzeme geçer |
| **Sarıcı (Recoiler)** | Dilimlenmiş şeritleri yeniden sarar |

### 3.5 Sarma (Rewind) Teknolojisi

**Ana tip:** Diferansiyel sarma şaftları ile merkez sarma (centre winding)

- **Diferansiyel şaftlar:** Malzemenin tam genişliği boyunca eşit gerilim sağlar
- **Yük hücreleri (load cell) geri beslemesi:** Kapalı döngü (closed-loop) sarma gerilim kontrolü
- **Tahrik:** AC vektörel sürücüler + AC motorlardan kapalı döngü geri besleme
- **Hassas ve doğru gerilim kontrolü:** İyi rulo dilmenin anahtarıdır

### 3.6 Endüstri Kullanımı

Rulo dilme, **dönüştürücü endüstri (converter industry)** tarafından yoğun olarak kullanılır. Dönüştürücüler genellikle baskı, kaplama ve laminasyon yapan firmalardır.

**Tipik süreç örneği (esnek ambalaj):**
1. Geniş BOPP (çift eksenli yönlendirilmiş polipropilen) film rulosu satın alınır
2. Müşteri tasarımına göre baskı yapılır
3. Soğuk yapıştırıcı (cold seal adhesive) ile kaplanır
4. Geniş ve büyük çaplı rulolarda işlenir (maksimum verimlilik)
5. Dilme makinasıyla ambalaj makinesine uygun boyutta dar rulolara kesilir

---

## 4. Blanking ve Piercing (Kesip Çıkarma ve Delme)

### 4.1 Temel Tanımlar

| Terim | Tanım |
|-------|-------|
| **Blanking** | Bobin veya sac malzemeden dış profili kesen makaslama işlemi |
| **Piercing (Punching)** | İç delik veya şekilleri oluşturan makaslama işlemi |
| **Web** | Birden fazla parça üretildikten sonra kalan hurda malzeme |
| **Slug** | İç delik açma sırasında çıkarılan hurda parçalar |

### 4.2 Kalıp Yuvarlanması (Die Roll) ve Çapak Oluşumu

**Die roll (kalıp yuvarlanması):**
- Malzeme, makaslama başlamadan önce sıkıştırıldığında oluşur
- Blank'ın dış kenarı ve delinmiş deliklerin çevresinde bir yarıçap (radius) şeklinde gözlenir

**Çapak (burr) oluşumu süreci:**
1. Sıkıştırma sonrası malzeme kalınlığının yaklaşık **%10'u** kadar makaslama gerçekleşir
2. Ardından malzeme şerit veya sacdan **koparılarak (fracture)** ayrılır
3. Bu kopma, **yükseltilmiş, tırtıklı bir kenar** oluşturur → çapak (burr)

**Çapak giderme:** Genellikle **tumbling** (tambur) ile ikincil bir proseste yapılır.

**Çapak yüksekliği**, takım aşınmasının önemli bir göstergesi olarak kullanılır.

### 4.3 Takım Tasarım Kılavuzları

**Zımba/kalıp klirens:**
- Tüm proses parametrelerinin seçimi, **sac kalınlığı** ve **iş parçası malzeme mukavemeti** tarafından yönetilir
- Klirens, kesici takım kenarındaki yükü (point pressure) belirleyen kritik parametredir
- Aşırı nokta basıncı, takım aşınmasını hızlandırır
- Klirens ayrıca kesilmiş parçanın yüzey kalitesini de etkiler

**Malzemeye özgü tasarım parametreleri:**
- Minimum kabul edilebilir delik çapları
- Köprü boyutları (bridge sizes)
- Yarık (slot) boyutları
- Şerit düzeni (strip layout): şerit genişliği ve adım (pitch)
- Parçalar arası köprü genişliği ve kenar payı (edge allowance)

### 4.4 Süreç Varyantları

#### 4.4.1 Lancing (Yırtma-Bükme)

- İş parçası tek bir kalıp darbesiyle **kesilir ve bükülür**
- Malzeme kaybı yoktur — sadece geometri değişikliği
- **Kullanım:** Tırnak (tab), havalandırma (vent), jalusi (louver) yapımı
- Tab: 90° bükme; Vent: ~45° bükme; Louver: yuvarlak/kupa şekli
- Genellikle mekanik preste yapılır

#### 4.4.2 Perforating (Delikli Kesim)

- Çok sayıda birbirine yakın deliğin açılması
- Piercing takımlamasının özel bir formudur

#### 4.4.3 Notching (Çentik Açma)

- İş parçasının **kenarından** malzeme çıkaran piercing operasyonu

#### 4.4.4 Nibbling (Kemirme)

- Bir dizi örtüşen yarık veya çentik üreterek kontur kesen süreç
- **Hız:** 300-900 darbe/dakika
- **Kalınlık:** 6 mm'ye (0.25 inç) kadar sac metal
- Oblong ve dikdörtgen zımbalar yaygındır (dairesel zımbaya kıyasla daha az atık, daha uzun strok arası mesafe)
- Dış veya iç kontur kesimi yapılabilir (iç kesim için bir başlangıç deliği gerekir)
- Kenar düzgünlüğü: Kesim örtüşmesi arttıkça kenar daha temiz olur
- Genellikle adanmış bir blanking kalıbını haklı kılmayacak miktarlarda kullanılır
- Tamamlanan şekiller genellikle **eğeleme veya taşlama** ile finishlenir

#### 4.4.5 Shaving (Traşlama)

- Daha önce blanking yapılmış parçadan **az miktarda metalin** kesildiği **bitirme operasyonu**
- **Amaç:** Daha iyi boyutsal doğruluk; ikincil amaçlar: kenarı dikleştirme ve düzleştirme
- **Doğruluk:** 0.025 mm'ye (0.001 inç) kadar
- **Kullanım:** Alet parçaları, saat ve kronometre parçaları — düz, pürüzsüz kenar gerektiren hassas parçalar

#### 4.4.6 Trimming (Kenar Kesme)

- Son operasyon olarak yapılır
- Derin çekilmiş sacların duvarlarından **fazla veya istenmeyen düzensiz** malzemeyi keser

#### 4.4.7 Fine Blanking (İnce Blanking)

Bu, makaslama sırasında **kırılma bölgesi oluşmayan** özelleşmiş bir blanking formudur.

**Prensip:**
1. Tüm parça sıkıştırılır
2. Üst ve alt zımba blank'ı çıkarır

**Takım bileşenleri:**
- Sertleştirilmiş kalıp zımbası (erkek)
- Sertleştirilmiş blanking kalıbı (dişi)
- Kılavuz plakanın kalıp açıklığı çevresinde **sivri çıkıntı/iğne (stinger)** vardır → malzemeyi sıkıca tutar
- Karşı basınç (counter pressure) zımbanın karşısına uygulanır
- Kesim, tipik zımbalamasından çok **ekstrüzyona** benzer bir mekanizmayla gerçekleşir

**Klirens:** Malzeme kalınlığının yaklaşık **%1'i**

**İşlenebilir kalınlık:** 0.5-13 mm (tipik); 19 mm'ye (0.75 inç) kadar mümkün

**Toleranslar:** ±0.0076-0.0508 mm (±0.0003-0.002 inç) — malzeme kalınlığı ve çekme mukavemetine bağlı

**Tek operasyonda yapılabilenler:**
- Piercing, kısmi piercing
- Offset (75°'ye kadar)
- Kabartma (embossing)
- Kalıplama (coining)

**Fine blanking avantajları:**
- Mükemmel boyutsal kontrol, doğruluk ve tekrarlanabilirlik
- Mükemmel parça düzlüğü korunur
- Düz, üstün bitirme kenarlı kesim (diğer metal damgalama süreçlerine kıyasla)
- Makineleme detaylarına çok az ihtiyaç
- Tek operasyonda çok sayıda özellik eklenebilir
- Büyük üretim serileri: Geleneksel operasyonlara kıyasla daha ekonomik (minimum 1000-20000 parça)
- Delik ve yarıklar kenarlarına veya birbirlerine çok yakın konumlandırılabilir
- Kalınlığa oranla çok küçük delikler açılabilir (geleneksel damgalamadan daha küçük)

**Fine blanking dezavantajları:**
- Geleneksel zımbalama operasyonlarından biraz daha yavaş
- Daha yüksek takım maliyeti ve pres tonaj gereksinimi

**PVD koruyucu kaplamalar:** Blanking zımbaları, daha uzun ömür için genellikle PVD koruyucu kaplamalarla kaplanır (M.02 ve M.03 bağlantılı).

---

## 5. Çapak (Burr) Oluşumu ve Giderme

### 5.1 Çapak Tipleri

İşleme operasyonlarından üç tip çapak oluşabilir:

| Tip | Oluşum Mekanizması | Açıklama |
|-----|-------------------|----------|
| **Poisson çapağı** | Yanal akış (lateral flow) | Plastik deformasyon sonucu yanal yönde malzeme akışı |
| **Rollover çapağı** | Bükülme (bending) | **En yaygın tip** — kesme kenarında malzemenin kıvrılması |
| **Breakout çapağı** | Yırtılma (tearing) | İş parçasından malzeme koparılması |
| **Recast boncuğu** | Katılaşma/yeniden birikme | Ergitilmiş malzemenin yeniden katılaşması |
| **Cutoff çıkıntısı** | Eksik kesim | Malzemenin tam kesilemeyip çıkıntı bırakması |

### 5.2 Çapağın Neden Olduğu Problemler

| Problem | Mekanizma |
|---------|-----------|
| **Gerilme yoğunlaşması** | Delik kenarlarında stres konsantrasyonu → kırılma direnci azalır, yorulma ömrü kısalır |
| **Bağlantı elemanı sorunları** | Çapak, bağlantı elemanının oturmasını engeller → bağlantı elemanı veya montaj hasarı |
| **Malzeme yetmezliği** | Gerilme ve gerinim kaynaklı çatlaklar → malzeme arızası |
| **Korozyon riski** | Pürüzlü yüzeyde kaplama kalınlığı değişimleri → koruma azalır |
| **Statik deşarj** | Keskin köşeler elektrik yükünü konsantre eder → statik boşalma riski |
| **Sürtünme ve ısı** | Hareketli parçalarda istenmeyen sürtünme artışı → aşırı ısınma |
| **Yağlama bozulması** | Pürüzlü yüzeyler arayüzlerde aşınmayı artırır → parça değişim sıklığı artar |
| **Korozyon (elektrik)** | Elektrik yükü birikimi → elektrokimyasal korozyon |

### 5.3 Çapak Giderme (Deburring) Yöntemleri

| Yöntem | Prensip | Kullanım Alanı |
|--------|---------|---------------|
| **Manuel** | Kazıyıcı, eğe, zımpara, taş, rayba veya motorlu el aletleri | En yaygın yöntem; esnek, düşük maliyetli, anlık kontrol imkanı |
| **Elektrokimyasal** | Tuz veya glikol çözeltisi + elektrik akımı | Hassas iş parçaları, ulaşılması zor kenarlar (kesişen delikler dahil); 5-10 saniye |
| **Termal (TEM)** | Patlayıcı gaz karışımı ile termal enerji | En hızlı yöntem (20 milisaniye); ~220 metrik ton basınç; O₂+yakıt karışımı; zirve sıcaklık 3000°C |
| **Kriyojenik** | Sıvı azot (-195°C) ile gevrekleştirme + tumbling/medya püskürtme | Plastik ve döküm parçalar; 1960'lardan beri kullanılıyor |
| **Mekanik** | Taşlama veya kenar yuvarlama | 1960'larda geliştirildi; dilme/makaslama metal çapağını kendi üzerine yuvarlar |
| **Su jeti** | CNC kontrollü yüksek basınçlı su | Yüksek hassasiyet ve tekrarlanabilirlik; derin deliklerdeki çapak ve talaşlar |
| **Ultrasonik** | Sıvı içinde ultrasonik dalgalar → kavitasyon | Kavitelerin oluşumu ve çökmesi ile basınç üretir |

---

## 6. Kesici Takım Kenar (Cutting Edge) Parametreleri

### 6.1 Kenar Profili

Kesici takımların kenar profili, kesme performansını doğrudan etkileyen kritik parametreleri içerir:

| Parametre | Açıklama |
|-----------|----------|
| **Kenar formu** | Yarıçap (radius), şelale (waterfall) veya trompet (reverse waterfall) |
| **Kesme kenar açıları** | Boşluk açısı (clearance angle), kama açısı (wedge angle), talaş açısı (rake angle) |
| **Pah boyutu ve formu** | Chamfer boyutları ve yönelimi |
| **Sγ ve Sα** | Kenar asimetri parametreleri |
| **K faktörü** | Sγ/Sα oranı — kenar formunu tanımlar |
| **Δr** | Kenar sapma parametresi |

### 6.2 K Faktörü

K faktörü, kesme kenar formunun en önemli parametresidir:

| K Değeri | Kenar Formu | Açıklama |
|----------|-------------|----------|
| **K = 1** | Simetrik kenar | Eşit kenar profili |
| **K < 1** | Şelale (Waterfall) | Talaş yüzü tarafı daha uzun |
| **K > 1** | Trompet (Trumpet) | Boşluk yüzü tarafı daha uzun |

Kesilen malzeme, ilerleme hızı ve diğer faktörlere bağlı olarak optimum K faktörlü kesici takım seçilmelidir.

### 6.3 Kenar Ölçümü

Kesme kenarı ölçümü iki yöntemle yapılır:
- **Dokunsal (taktil) enstrüman:** Fiziksel temas ile kenar profili ölçümü
- **Focus variation:** Optik odak değişimi ile temassız 3D ölçüm

---

## 7. Talaş Açısı (Rake Angle) — Detaylı İnceleme

### 7.1 Temel Kavram

Talaş açısı (rake angle), kesme yüzünün iş parçasına göre açısını tanımlayan bir parametredir. Üç tipi vardır:

| Tip | Tanım | Kesici Tip Durumu |
|-----|-------|------------------|
| **Pozitif talaş açısı** | Kesme yüzü, kesme kenarından iç tarafa doğru eğimli | Daha keskin, daha sivri uç |
| **Sıfır (nötr) talaş açısı** | Kesme yüzü, kesme kenarına dik | Düz profil |
| **Negatif talaş açısı** | Kesme yüzü, kesme kenarından dış tarafa doğru eğimli | Daha küt, daha güçlü uç |

### 7.2 Talaş Açısı Etkileri

**Pozitif talaş açısının etkileri:**
- Takımı daha keskin ve sivri yapar → küçük dahili açı → talaşlanma (chipping) riski
- Kesme kuvvetlerini ve güç gereksinimini azaltır
- Sünek malzemelerde sürekli talaş oluşumunu destekler
- Yığma kenar (built-up edge/BUE) oluşumunu önleyebilir

**Negatif talaş açısının etkileri:**
- Kesme kenarı mukavemetini artırır — daha küt takım
- Kesme kuvvetini artırır
- Kesim için gerekli gücü artırır
- Sürtünmeyi artırabilir → daha yüksek sıcaklıklar
- Yüzey kalitesini iyileştirebilir

**Sıfır talaş açısının etkileri:**
- Üretimi kolaydır
- Yeniden bileme kolaydır
- Negatif talaş açılı takımdan daha az güç ve kesme kuvveti
- Talaş, talaş yüzünü aşındırarak "krater" oluşturur

### 7.3 Malzemeye Göre Önerilen Talaş Açıları

| Malzeme | Tornalama | Delme | Frezeleme | Testere |
|---------|-----------|-------|-----------|---------|
| **Alüminyum** | 12°-25° | 40° | 35° | 12°-25° |
| **Pirinç** | 3°-14° | 8° | 0° | 3°-14° |
| **Bronz** | 5°-14° | — | 0° | 5°-14° |
| **Gri dökme demir** | 0°-6° | 0° | 5° | 3°-6° |
| **Bakır** | 18°-25° | — | 16° | 18°-25° |
| **Polistiren** | 20°-25° | — | — | 20°-25° |
| **PVC** | 20°-25° | — | — | 20°-25° |
| **Paslanmaz çelik** | 8°-10° | 8° | 8° | 8°-10° |
| **Yumuşak çelik** | 12°-14° | 20° | 8°-15° | 12°-14° |
| **Titanyum** | 0°-4° | — | — | 0°-4° |

**Not:** Bu değerler; malzeme, takım malzemesi, kesme derinliği, kesme hızı, makina, kurulum ve süreç parametrelerine bağlı olarak değişebilir.

**Endüstriyel bıçaklara uyarlanması:** Bu tablo, makaslama ve dilme bıçak tasarımı için doğrudan uygulanabilir değildir ancak genel malzeme kesilme eğilimlerini gösterir. Makaslama bıçaklarında genellikle sıfıra yakın veya hafif pozitif rake açısı tercih edilir (M.01 ile bağlantılı).

---

## 8. Slitting Mill — Tarihsel Kökeni

### 8.1 İlk Dilme Değirmenleri

Dilme değirmeni (slitting mill), demir çubuklarını çubuklara dilmek için kullanılan bir **su değirmenidir** (watermill). Üretilen çubuklar daha sonra çivi yapımcılarına verilir, uç ve başlık verilerek çivi haline getirilirdi.

**Tarihçe:**
- Muhtemelen bugünkü Belçika'da, Liège yakınlarında icat edildi
- İngiltere'deki ilk dilme değirmeni: **Dartford, Kent, 1590**
- Rugeley yakınlarında: ~1611
- Hyde Mill, Kinver: 1627
- River Stour üzerinde yoğunlaşma (Stourbridge-Stourport arası)

### 8.2 Sürecin Teknik Açıklaması (18. Yüzyıl)

1755 tarihli bir mektuptan alınan detaylı süreç açıklaması:

1. Büyük bir demir çubuk alınır
2. Su çarkı ile çalışan büyük bir makas ile ~30 cm (1 foot) uzunluğunda parçalara kesilir
3. Parçalar fırında kızıl-sıcak ısıtılır
4. İlk silindir çifti arasından geçirilir → ~120 cm uzunluk, ~7.5 cm genişliğe haddelenir
5. Hemen ikinci silindir çiftine (cutters) aktarılır → kenarları birbirine kenetlenen makas benzeri keskin kenarlar, çubuğu ~8 kare çubuk (rod) haline diler
6. Çubuklar soğutulur ve çivi yapımcıları için demetlenir

Bu tarihi süreç, bugünkü modern metal bobin dilme hatlarının kökenini oluşturur.

---

## 9. Endüstriyel Bıçak Perspektifinden Süreçlerin Karşılaştırması

### 9.1 Süreç-Bıçak Matrisi

| Süreç | Bıçak Tipi | Hareket | Kesim Mekanizması | Tipik Malzeme |
|-------|-----------|---------|-------------------|---------------|
| **Giyotin makaslama** | Düz, kare kenarlı | Doğrusal (yukarı-aşağı) | Tam makaslama | Sac metal (Al, pirinç, yumuşak çelik) |
| **Rulo dilme (yumuşak)** | Jilet veya dairesel | Döner | Kesme/ezme | Film, kağıt, folyo, tekstil |
| **Rulo dilme (sert)** | Dairesel, kaburgalı | Döner | Modifiye makaslama | Sac metal bobin |
| **Blanking** | Zımba + kalıp | Doğrusal | Makaslama + kopma | Sac/bobin (tüm metaller) |
| **Fine blanking** | Zımba + kalıp + kılavuz | Doğrusal (sıkıştırmalı) | Ekstrüzyon benzeri | Al, pirinç, bakır, çelikler |
| **Nibbling** | Küçük zımba + kalıp | Tekrarlı doğrusal | Örtüşen makaslama | Sac metal ≤6 mm |
| **Timsah makas** | Menteşeli çene | Dönme (menteşe) | Makaslama | Profiller, boru, çubuk |

### 9.2 Bıçak Aşınma Tipleri — Süreç Bazında

| Süreç | Baskın Aşınma Mekanizması | Referans |
|-------|--------------------------|----------|
| **Giyotin makaslama** | Abrazif aşınma + kenar yuvarlanma | M.07 |
| **Rulo dilme (metal)** | Abrazif + adhesif aşınma | M.07 |
| **Blanking/Piercing** | Kenar çiplenme + abrazif aşınma | M.07, M.02 |
| **Fine blanking** | Adhesif aşınma + termal yorulma | M.07, M.03 (PVD) |
| **Nibbling** | Darbe yorulması + abrazif | M.07 |

### 9.3 Bıçak Malzeme Seçim Rehberi

| Süreç | Düşük Hacim | Orta Hacim | Yüksek Hacim |
|-------|-------------|------------|--------------|
| **Giyotin makaslama** | Düşük alaşımlı çelik | D2 | D2 + kriyojenik (M.40) |
| **Rulo dilme** | D2 | M2 HSS | WC-Co karbür |
| **Blanking** | O1 | D2 | D2+PVD / M2+PVD |
| **Fine blanking** | D2 | D2+PVD | CPM-10V, vanadyum karbür |
| **Nibbling** | S7 (darbe dayanımlı) | S7+PVD | — |

---

## 10. Dilme Kalite Kontrol Parametreleri

### 10.1 Kenar Kalite Değerlendirmesi

| Parametre | Ölçüm Yöntemi | Kabul Kriteri |
|-----------|---------------|---------------|
| **Çapak yüksekliği** | Mikrometre, profilometre | Malzeme kalınlığının <%5'i |
| **Kenar dikliği** | Optik mikroskop | 90° ±2° (düz kenar) |
| **Plastik/kırılma oranı** | Makro kesit inceleme | Plastik bölge >%40 (iyi klirens göstergesi) |
| **Kenar çatlağı** | Büyüteçli görsel kontrol | Sıfır tolerance |
| **Yüzey pürüzlülüğü** | Profilometre (Ra, Rz) | Uygulamaya bağlı |
| **Boyutsal tolerans** | Kaliper, CMM | İş parçası spesifikasyonuna bağlı |

### 10.2 Takım Aşınma İzleme

- **Çapak yüksekliği trendi:** Artan çapak yüksekliği → bıçak aşınması göstergesi
- **Kesme kuvveti izleme:** Artan kuvvet → bıçak gecikmiş bileme
- **Parça boyut trendi:** Drift → klirens değişimi / aşınma
- **Görsel kenar muayenesi:** Her parti başında ve sonunda

---

## 11. Dilme ve Makaslama Bıçaklarında Isıl İşlem Uygulamaları

M.40 makalesindeki ısıl işlem bilgileri, dilme/makaslama bıçakları için şu şekilde uygulanır:

| Bıçak Çeliği | Östenitleme | Su Verme | Temperleme | Hedef HRC | Kriyojenik |
|---------------|-------------|----------|------------|-----------|------------|
| **D2 (giyotin)** | 1010-1040°C | Hava/yağ | 200-260°C (2×) | 58-62 | Önerilir |
| **M2 (dilme)** | 1190-1230°C | Yağ/tuz/vakum | 540-595°C (3×) | 63-66 | Önerilir |
| **O1 (blanking)** | 790-815°C | Yağ | 175-260°C (1×) | 57-62 | İsteğe bağlı |
| **S7 (nibbling)** | 940-955°C | Hava | 205-620°C (2×) | 50-56 | İsteğe bağlı |
| **WC-Co (dilme)** | Sinterleme (1400-1500°C) | — | — | 86-93 HRA | DCT faydalı |

**Not:** D2 ve M2 çeliklerinde kriyojenik işlem (-196°C, DCT), kalan östeniti martenzite dönüştürerek boyutsal kararlılık ve aşınma direncini artırır (M.40 detaylı).

---

## 12. Endüstriyel Uygulama Alanları — Sektörel Matris

| Sektör | Dilme | Makaslama | Blanking | Fine Blanking |
|--------|-------|-----------|----------|---------------|
| **Otomotiv** | Bobin dilme (gövde sacı) | Panel kesim | Parça üretimi | Şanzıman dişlileri, ABS sensör halkaları |
| **Elektrik/Elektronik** | Bakır folyo dilme | Konektör kesim | Motor laminasyonu | Konektör pinleri |
| **Ambalaj** | Al folyo, film dilme | — | Kapak üretimi | — |
| **İnşaat** | Çelik profil dilme | Levha kesim | Bağlantı elemanları | — |
| **Enerji** | Silisyum çeliği dilme | Transformatör sacı | Stator/rotor paketi | — |
| **Tıbbi cihaz** | İnce folyo dilme | — | Cerrahi bıçak blanking | İmplant parçaları |

---

## 13. Modern Trendler ve Gelişmeler

### 13.1 Otomasyon
- CNC kontrollü bıçak konumlandırma → ayar süresini minimuma indirir
- Otomatik bıçak bileme programları → kesim kalitesini sürekli korur
- Kapalı döngü gerilim kontrol sistemleri → hassas sarma

### 13.2 Malzeme Gelişmeleri
- PM (Toz metalurjisi) çelikler → homojen karbür dağılımı, üstün aşınma direnci (M.32 bağlantılı)
- Nano-yapılandırılmış PVD kaplamalar → fine blanking zımba ömrünü 3-5× artırır (M.03)
- WC-Co karbür bıçaklar → metal dilme hatlarında uzun ömür (M.04)

### 13.3 Dijital İzleme
- Gerçek zamanlı çapak yüksekliği ölçümü → Industry 4.0 entegrasyonu
- Titreşim analizi ile bıçak aşınma tahmini
- Makine öğrenme tabanlı kalite tahmin modelleri

---

## 14. Referanslar ve Çapraz Bağlantılar

### 14.1 Makale İç Referansları

| Referans | Konu | Bağlantı |
|----------|------|-----------|
| M.01 | Bıçak geometrisi ve açıları | Talaş açısı, boşluk açısı temel parametreler |
| M.02-M.03 | Kaplama teknolojileri | PVD kaplamalar fine blanking zımba ömrünü artırır |
| M.04 | Tungsten karbür | WC-Co dilme bıçakları |
| M.06 | Kesme mekaniği | Makaslama kuvveti hesaplamaları |
| M.07 | Aşınma mekanizmaları | Bıçak aşınma tipleri vs. süreç bazlı aşınma |
| M.23-M.31 | Çelik türleri | D2, M2, O1, S7 takım çelikleri özellikleri |
| M.32 | PM çelikler | Toz metalurjisi bıçak çelikleri |
| M.39 | Paslanmaz çelik | İş sertleşme eğilimi — makaslama zorluğu |
| M.40 | Isıl işlem ve kriyojenik | Bıçak ısıl işlem reçeteleri |

### 14.2 Bibliyografya

- Todd, H. Robert; Allen, K. Dell; Alting, Leo (1994), *Manufacturing Processes Reference Guide*, 1st ed., Industrial Press Inc., pp. 131–132, ISBN 0-8311-3049-0
- Degarmo, E. Paul; Black, J T.; Kohser, Ronald A. (2003), *Materials and Processes in Manufacturing*, 9th ed., Wiley, ISBN 0-471-65653-4
- Wick, Charles; Veilleux, Raymond F. (1984), *Tool and Manufacturing Engineers Handbook: Forming*, 4th ed., SME, ISBN 978-0-87263-135-9
- Gillespie, LaRoux K. (1999), *Deburring and Edge Finishing Handbook*, SME, ISBN 978-0-87263-501-2
- Stephenson, David A.; Agapiou, John S. (2018), *Metal Cutting Theory and Practice*, CRC Press, ISBN 978-1-315-36031-7
- Kalpakjian, Serope; Schmid, Steven R. (2006), *Manufacturing Engineering and Technology*, 5th ed., Pearson Prentice Hall, ISBN 0-13-148965-8
- Oberg, Erik et al. (2020), *Machinery's Handbook*, 31st ed., Industrial Press, ISBN 978-0-8311-3731-1

---

## 15. Özet ve Sonuç

Bu makale, endüstriyel dilme, makaslama ve blanking süreçlerini bıçak tasarımı ve üretimi perspektifinden kapsamlı olarak incelemiştir. Temel bulgular:

1. **Makaslama prensibi evrenseldir:** Tüm süreçler, malzemeyi kayma gerilmeleriyle kesen aynı temel mekanizmayı kullanır — farklılık bıçak geometrisi, hareket tipi ve kuvvet uygulama biçimindedir.

2. **Klirens kritik parametredir:** %5-40 aralığındaki klirens, kesim kalitesi (çapak, yüzey) ve bıçak ömrü (nokta basıncı, aşınma) arasındaki dengeyi belirler.

3. **Çapak yönetimi zorunludur:** Çapak, hemen tüm makaslama süreçlerinde kaçınılmazdır (fine blanking hariç) ve gerilme konsantrasyonu, korozyon, bağlantı elemanı sorunları gibi ciddi problemlere yol açar.

4. **Bıçak malzeme seçimi sürece özeldir:** D2 giyotin makaslar, M2/WC-Co dilme bıçakları, S7 nibbling zımbaları — her sürecin baskın aşınma mekanizmasına uygun malzeme gerektirir.

5. **Fine blanking, üstün bir teknolojidir:** %1 klirens ile kırılma bölgesi oluşmadan kesim yapabilmesi sayesinde, hassas parça üretiminde geleneksel blanking'in yerine geçmektedir.

6. **Modern trendler:** Otomasyon, PM çelikler, nano-PVD kaplamalar ve dijital izleme, bu süreçlerin verimliliğini ve kalitesini sürekli artırmaktadır.

---

*Bu makale, endüstriyel bıçak bilgi tabanı serisinin 41. makalesidir. Dilme, makaslama ve blanking süreçlerinde kullanılan bıçakların tasarımı, malzeme seçimi ve kalite kontrolüne ilişkin kapsamlı bir referans kaynağı olarak hazırlanmıştır.*
