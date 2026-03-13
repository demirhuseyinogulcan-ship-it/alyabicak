# Makale 42 — Dairesel ve Şerit Testere Bıçak Teknolojisi: Endüstriyel Kesme Sistemleri

## Yazar Notu

Bu makale, endüstriyel dairesel testere bıçakları, soğuk testereler (cold saw), karbür testereler ve şerit (bant) testere bıçaklarının kapsamlı teknik analizini sunmaktadır. Dairesel bıçak geometrisi, malzeme seçimi, titreşim stabilitesi, makine rijitliği ve bant testere sistemleri dahil olmak üzere tüm kritik mühendislik parametreleri ele alınmıştır. Veriler, Wikipedia "Circular saw", "Cold saw", "Carbide saw", "Band saw" ve "Saw" maddelerinden derlenmiştir.

**Çapraz Referanslar:** Tungsten karbür kimyası (M.05), takım çelikleri (M.02-03), ısıl işlem (M.40), aşınma mekanizmaları (M.06), kaplama teknolojileri (M.07), kesme mekaniği (M.32), talaş kaldırma açıları (M.41)

---

## 1. Giriş ve Tarihsel Gelişim

### 1.1 Testere Bıçağının Evrimi

Testere, sert dişli kenara sahip güçlü bir bıçak, tel veya zincirden oluşan kesme aletidir. Tarih boyunca çakmaktaşı, obsidiyen, deniz kabukları ve köpekbalığı dişlerinden yapılan ilk testerelerden modern tungsten karbür uçlu dairesel bıçaklara kadar dramatik bir evrim geçirmiştir.

**Kronolojik Gelişim:**

| Dönem | Gelişme |
|--------|---------|
| MÖ 90.000-30.000 | Pech-de-l'Azé IV mağarası — taş testere izleri (Fransa) |
| MÖ ~3100-2686 | Mısır Erken Hanedanlık — bakır çekme testereler |
| MÖ ~3100 | Djer mezarında çok sayıda bakır testere buluntusu |
| MÖ 1200 | Sertleştirilmiş çelik (su verme ile) ilk kullanım |
| Demir Çağı | Çerçeveli testereler — ince bıçaklar gerginlik altında tutularak |
| MS 3. yüzyıl | Hierapolis taş kesme değirmeni (Roma) — bilinen en eski mekanik testere |
| 18. yüzyıl ortası | Sheffield krozet dökme çeliği — sertlik, süneklik, yaylılık |
| 18. yüzyıl sonu | Dairesel testere icadı |
| 1809 | William Newberry — ilk bant testere İngiliz patenti |
| 1836 | Benjamin Barker — ilk Amerikan bant testere patenti |
| 1846 | Anne Paulin Crepin — bant bıçağı kaynak tekniği (Fransa) |
| 1926 | Krupp — sinterlenmiş tungsten karbür geliştirme |
| 1930'lar | TCT bıçaklarla demir dışı malzeme kesimi başlangıcı |
| 1942 | Alman bilim insanları cermet geliştirme |
| 1963 | Ingersoll — ilk karbür levha testeresi |
| 1969 | Braunschweig Üniversitesi — negatif kesme açılı karbür diş geometrisi |
| 1984 | Speedcut "Notch Grind" geometrisi — çelik kütük kesimde devrim |

### 1.2 Dairesel Testere Tarihçesi

Dairesel testere, 18. yüzyılın sonlarında icat edilmiştir. Dönen dairesel bıçak, malzemeyi dişlerin her biri küçük talaşlar kopararak keser ve bu talaşları kesim bölgesinden dışarı yönlendirir. Kereste fabrikalarında kullanılan bıçaklar 3 metreye kadar çap alabilir.

**Temel Karakteristikler:**
- Dar kereste kaybı (kerf)
- Pürüzsüz kesim yüzeyi
- Doğrusal ve hassas kesim
- Metal ve plastikte çapak oluşumu

### 1.3 Soğuk Testere (Cold Saw) ve Sıcak Testere Ayrımı

Terminoloji önemlidir: ısı yönetimine göre iki temel sınıf mevcuttur:

- **Sıcak testereler (Hot saws):** Aşındırıcı veya sürtünme testereleri — kesim sırasında ısı oluşturur
- **Soğuk testereler (Cold saws):** HSS veya karbür uçlu — soğutucu kullanır veya ısıyı talaşlara aktarır; iş parçası ve bıçak soğuk kalır

HSS bıçaklar geliştirilmeden önce aşındırıcı, sürtünme veya sıcak testereler kullanılıyordu. HSS bıçaklar soğutucu ile çalıştığı ve kesim yüzeyleri ısınmadığı için "soğuk testere" adını aldı. Karbür testerelerde ise diş geometrisinin kendisi ısıyı talaşlara aktarır.

---

## 2. Testere Bıçağı Terminolojisi ve Diş Geometrisi

### 2.1 Temel Terimler

| Terim | Tanım |
|-------|--------|
| **Kerf (Kesim genişliği)** | Testere tarafından bırakılan dar kanal ve bu genişliğin ölçüsü |
| **Set (Diş açıklığı)** | Dişlerin bıçak gövdesinden yana doğru bükülme derecesi |
| **TPI (Diş/inç)** | İnç başına diş sayısı |
| **PPI (Nokta/inç)** | İnç başına diş noktası sayısı (= TPI + 1) |
| **Gullet (Diş boğazı)** | Diş noktaları arasındaki vadi |
| **Rake (Talaş açısı)** | Diş ön yüzünün testere uzunluğuna dik çizgiye göre açısı |
| **Fleam** | Diş yüzlerinin testere yüzeyine dik çizgiye göre açısı |
| **Back (Sırt)** | Dişli kenarın karşı tarafı |
| **Toe (Burun)** | Saptan en uzak uç |
| **Heel (Topuk)** | Sapa en yakın uç |

### 2.2 Kerf (Kesim Genişliği) Detayları

Kerf, testere bıçağının kalınlığı, diş set'i, kesim sırasındaki titreşim (wobble) ve kesim kenarlarından çıkarılan malzeme miktarına bağlıdır. Aynı kalınlık ve set'e sahip bıçaklar farklı kerf değerleri üretebilir — örneğin çok ince bir bıçak aşırı titreşime neden olarak beklenenden geniş kerf oluşturabilir.

**Kritik nokta:** 8 ft (2,4 m) uzunluğunda bir malzemeyi 1 ft (30 cm) parçalara keserken, kerf 1/8 inç (3 mm) ise, yedi bölüm + 7/8 inç (21 mm) kısa bir parça elde edilir.

Kerf, **dişçi seti (saw tooth setter)** aleti ile dişlerin set'i ayarlanarak değiştirilebilir.

### 2.3 Set (Diş Açıklığı) Çeşitleri

Set, dişlerin bıçak düzleminden yana bükülme derecesidir. Modern testerelerde dişler genellikle iki taraflı set edilir, böylece kerf bıçak kalınlığından geniş olur ve bıçak kesimde sıkışmadan ilerler.

**Set çeşitlerine göre kullanım:**
- **Yarma testeresi (Rip saw):** Keski açısına benzer set — malzemeyi yırtar
- **Düz kesim testeresi (Flush-cutting saw):** Tek taraflı set — yüzeye paralel kesim
- Set, **saw set** aleti ile çekiç veya mengene tipli araçlarla ayarlanır

### 2.4 Diş Profil Çeşitleri (Bant Testere)

| Profil | Özellik | Kullanım |
|--------|---------|----------|
| **Precision (Hassas)** | Düzgün, ince dişler | Hassas kesim, pürüzsüz yüzey |
| **Buttress (Payanda)** | Büyük diş, geniş boğaz | Hızlı kesim, büyük talaş yükü |
| **Claw tooth (Pençe diş)** | Ekstra boşluk | Hızlı kesim, yumuşak malzeme |

**Temel kural:** İş parçası ile her zaman en az 2 diş temas halinde olmalıdır — aksi takdirde dişler soyulur.

---

## 3. Dairesel Testere Bıçak Türleri

### 3.1 Malzemeye Göre Sınıflandırma

| Bıçak Türü | Malzeme | Sertlik | Uygulama |
|-------------|---------|---------|----------|
| **Çelik bıçak** | Karbon/alaşım çeliği | Orta | Genel amaçlı ahşap |
| **HSS tam gövde** | Yüksek hız çeliği (M2, M35+Co) | Yüksek | Metal kesimi, dayanıklılık |
| **TCT (Tungsten Carbide Tipped)** | Çelik gövde + WC uçlar | Çok yüksek | Ahşap, kontrplak, lamine, plastik, alüminyum |
| **Tam karbür** | Sinterlenmiş tungsten karbür | En yüksek | Yüksek sıcaklık, aşırı sert malzeme |
| **Elmas** | Çelik gövde + endüstriyel elmas segmentler | Süper sert | Taş, beton, asfalt, tuğla, seramik, cam, yarı iletken |

### 3.2 Kesim Tipine Göre Bıçak Çeşitleri

| Bıçak Tipi | Açıklama |
|-------------|----------|
| **Crosscut (Enine kesim)** | Lif yönüne dik kesim |
| **Rip (Yarma)** | Lif yönüne paralel kesim |
| **Plytooth** | Çok sayıda küçük diş — kontrplakta minimum lif koparma |
| **Dado** | Geniş oluklu kesim — birleşim yuvaları |
| **Strobe** | Özel tırmıklar — yaş/ham kereste kesiminde sıkışma önleme |

### 3.3 TCT (Tungsten Karbür Uçlu) Bıçaklar

TCT bıçaklarda, küçük keskin tungsten karbür blokları bıçak gövdesinin dişlerine kaynak (genellikle gümüş lehim) ile bağlanır. Bu tip bıçaklar ahşap kesimde evrensel standart haline gelmiştir.

**Avantajlar:** HSS'ye göre çok daha sert, yüksek sıcaklıklarda sertlik koruması, uzun ömür
**Dezavantajlar:** HSS'ye göre daha kırılgan, pozitif kesme açılarında uç çatlama riski (M.05, M.32)

### 3.4 Tam Karbür Bıçaklar

Bıçak gövdesinin tamamı tungsten karbürden imal edilir. HSS bıçaklara kıyasla yüksek sıcaklıklarda daha yüksek sertlik ve dayanıklılık gösterir, ancak tokluğu daha düşüktür.

---

## 4. Soğuk Testere (Cold Saw) Teknolojisi

### 4.1 Çalışma Prensibi

Soğuk testerenin temel prensibi: **kesim sırasında oluşan ısı talaşlara aktarılır** — bıçak ve iş parçası soğuk kalır. Bu, metalürjik yapı bozulmasını önler ve hassas kesim sağlar.

### 4.2 Solid HSS Bıçaklar

Tam HSS soğuk testere bıçakları, yüksek hız çeliğinden (tipik M2 veya M35+Co kobalt alaşımlı) imal edilir.

| Parametre | Demir İçeren (Ferrous) | Demir İçermeyen (Non-ferrous) |
|-----------|----------------------|------------------------------|
| **Malzeme** | M2 veya M35+Co | M2 veya M35+Co |
| **Sertlik** | 64-65 HRC | 58-60 HRC |
| **Sertleştirme** | Pres su verme (warping önleme) | Pres su verme |
| **Taşlama** | Hollow ground (boşluk taşlaması) | Hollow ground |
| **Kesim hızı** | < 350 SFM | Değişken |
| **Kaplamalar** | TiN, TiAlN, siyah oksit | TiN, TiAlN, siyah oksit |

**Pres su verme (Press quenching):** Bıçak diskleri düz kalıplar arasında su verilir — çarpılma (warping) önlenir.

**Hollow ground (Boşluk taşlaması):** Bıçak gövdesi çevreden merkeze doğru incelir — iş parçasında boşluk sağlanarak sürtünme azaltılır.

### 4.3 TCT Soğuk Testere Bıçakları

| Parametre | Değer |
|-----------|-------|
| **Gövde malzemesi** | CrV alaşım çeliği |
| **Gövde sertliği** | 38-42 HRC |
| **Uç malzemesi** | Tungsten karbür |
| **Uç sertliği** | ~98 HRC |
| **Orijinal uygulama** | Demir dışı metaller |
| **Modern uygulama** | Demir içeren metaller dahil |

**Önemli gereksinimler:**
- Geri tepme sıfır (backlash-free) dişli kutusu — titreşim kontrolü için kritik
- Bilyalı vida (ball-screw) besleme sistemi — hassas ilerleme kontrolü

### 4.4 Talaş Yükü (Chip Load)

Soğuk testerelerde tipik talaş yükü: **0,001-0,003 inç/diş (0,025-0,076 mm/diş)**

Bu değer, diş başına kaldırılan malzeme kalınlığını temsil eder ve doğru ayarlanması:
- Bıçak ömrünü doğrudan etkiler
- Çok düşük → sürtünme ısısı, diş aşınması
- Çok yüksek → diş kırılması, vibrasyon

### 4.5 Portatif Soğuk Testereler

Cermet uçlu portatif soğuk testereler, sac metal çatı kaplama sektöründe yaygın kullanılır. 6 mm'ye kadar yumuşak çelik kesebilir. Cermet (seramik-metal kompozit), karbüre alternatif olarak yüksek sıcaklık dayanımı sağlar (M.07).

---

## 5. Karbür Testere Teknolojisi (Carbide Saw)

### 5.1 Tarihsel Gelişim ve Braunschweig Geometrisi

Karbür testerelerin asıl atılımı 1963-1969 yılları arasında gerçekleşmiştir:

**Sorun:** 1930'larda TCT bıçaklarla demir dışı malzeme kesilebiliyordu, ancak demir içeren malzemelerde başarısız olunuyordu. Nedenler:
1. Mevcut testerelerin yetersiz hız, rijitlik ve düşük titreşim ile yüksek kuvvet aktarım kapasitesi
2. Pozitif kesme açılı diş geometrisi — sert ama kırılgan karbür uçlarda çatlama

**Çözüm (Braunschweig Üniversitesi, 1963-1969):**
- Prof. Pahlitzsch, Arno Willemeit ve Horst Doepcke
- **Negatif kesme açılı** karbür uç geometrisi
- **Talaş bölme sistemi:** Diş çifti her talaşı üç parçaya böler
- Bu geometri ile alaşım çeliği kütüklerinin ekonomik olarak kesilmesi mümkün oldu

**Performans karşılaştırması:**
| Yöntem | Karbür Testereye Göre Hız |
|--------|--------------------------|
| Bant testere | 8× yavaş |
| HSS soğuk testere | 4× yavaş |
| Karbür testere | **Referans (1×)** |

### 5.2 Diş Geometrisi Gelişimi

| Yıl | Geliştirici | Geometri | Talaş Bölme |
|-----|-------------|----------|-------------|
| 1963-69 | Braunschweig Üni. | Negatif kesme açısı, diş çifti | 1 talaş → 3 parça |
| 1972-76 | Doepcke (disertasyon) | Boru kesim geometrisi | Her diş → 2 parça |
| 1984 | Speedcut Inc. | "Notch Grind" | Kademeli oluk/diş → talaş bölme |

**Notch Grind teknolojisi**, Braunschweig geometrisine göre önemli ölçüde daha hızlı çelik kütük kesimi sağladı (US Patent 4,463,645, 1984).

### 5.3 Değiştirilebilir Uçlu Bıçaklar

Çeşitli firmalar değiştirilebilir karbür uçlu testere bıçakları geliştirmiştir. Ancak bu bıçaklar çelik kesimde henüz ekonomik olarak kanıtlanamamıştır.

**[ÇAKIŞMA]:** Değiştirilebilir uçlu bıçaklar (cermet, WC) bazı uygulamalarda ekonomik kabul edilirken, yüksek hacimli çelik kütük kesiminde hâlâ lehimli uçlar baskındır.

---

## 6. Karbür Testere Makine Tipleri

### 6.1 Yatay Kaymalı Testereler (Horizontal Slide)

En yaygın kullanılan karbür testere tipidir. Bıçak, dişli kutusu milinde monte edilir ve yatay kızaklar üzerinde kayarak iş parçasına yatay olarak girer.

- 1969'da AME/Metalcut tarafından geliştirilen ilk yatay karbür kütük testeresi
- Hennig teleskopik çelik kızak kapakları ve çelik önlükler — yüksek hızlı uçan talaşlardan koruma

### 6.2 Dikey Kaymalı Testereler (Vertical Slide)

Bıçak malzemeye dikey olarak girer. Genellikle **katman testeresi (layer saw)** olarak kullanılır — çok sayıda boru, profil veya çubuk yatay katmanlar halinde eşzamanlı kesilir.

- 1974: Arno Willemeit (Braunschweig ortak mucit) tarafından ilk dikey kaymalı karbür testere
- Ohler (Remscheid, Almanya) → Framag (Avusturya) tarafından üretim devralınması

### 6.3 Eğik Kızaklı Testereler (Inclined Ways)

Konvansiyonel yatay kaymalı testerelerden daha pahalıdır. **Demiryolu rayı kesiminde** optimal giriş açısı sağladığı için en etkilidir.

### 6.4 Pivot (Salınım) Testereler

Orijinal olarak küçük profil ve boru kesimi için HSS testerelerde kullanılmıştır. 1970'lerin sonlarından itibaren büyük çelik profillerde de uygulanmaya başlamıştır.

**Kronolojik gelişim:**

| Yıl | Geliştirici | Kapasite | Özellik |
|-----|-------------|----------|---------|
| 1973 | Metalcut | 75 mm çubuk | Pivot ekseni tabana monte, çift taraflı kesim |
| 1976 | CCI (Rockford) | 200 mm (8") kütük | Yatay kaymalı testereye rakip |
| - | Metalcut | 600 mm (24") kütük | Katman veya kütük testeresi olarak |
| 1994 | AME | AMSAW 200 | ABD pazarı için maliyet etkin pivot |
| 2011 | AME | AMSAW 350PR | 350 mm (14") kütük, kapalı döngü kuvvet, gelişmiş talaş akışı |

---

## 7. Özel Karbür Testere Modelleri

### 7.1 Levha Testereleri (Plate Saws)

- 1963: Ingersoll — yüksek mukavemetli karbon çeliği levhalar için karbür bıçaklı testere (kızaklar levha üzerinde kirişe monte)
- Oliver Machinery — dişli kutusu levha altında kayar ve alttan keser

### 7.2 Demiryolu Ray Testereleri

| Yıl | Geliştirici | Özellik |
|-----|-------------|---------|
| 1973 | Metalcut | İlk karbür ray testeresi |
| 1997 | AME | AMSAW 300-R (ABD genelinde yaygın) |
| 1999 | AME | Makas ve manevra rayları için açılı (miter) kesim modeli |
| 2011 | AME | Demiryolu vagonuna entegre çift testere — ray onarımı |

**Önemli:** 2011 modeli, aşındırıcı testerelerin yerini almıştır. Aşındırıcı testereler sıcak talaş ve kıvılcımlarla **orman yangınlarına** neden oluyordu — karbür soğuk testereler bu tehlikeyi ortadan kaldırdı.

### 7.3 Katman Testereleri (Layer Saws)

1974'te Metalcut, altı "C" profilinin uçlarını katmanlar halinde kesen iki katman testeresi geliştirmiştir:
- İlk testere: ön uçları keser
- İkinci testere (hareketli): arka uçları keser, farklı uzunluklar mümkün
- Pivot tip, alttan yukarı kesim

### 7.4 Karbür Sıcak Testereler

2008'de AME, demiryolu endüstrisi için sıcak dövülmüş akslerin uçlarını kesen karbür sıcak testere geliştirmiştir.

### 7.5 Karbür Halka Testereleri (Ring Saws)

Sıcak haddelenmiş kalın cidarlı halkalar dilimler halinde kesilir:
- MFL Liezen (Avusturya): iç çaptan keser
- AME (Rockford): dış çaptan keser

---

## 8. Karbür Testere Genel Tasarım Prensipleri

### 8.1 Gövde Yapısı

Kaymalı testereler (yatay, dikey veya eğik) şu bileşenlerden oluşur:
- **Kaynaklı çelik levha taban:** Yeterince nervürlü, genellikle titreşim sönümleme malzemesi ile doldurulmuş
- **Sertleştirilmiş kızaklar:** Tabana cıvatalı, dişli kutusu bunlar üzerinde kayar
- **Konik ayar kamları (taper gibs):** Minimum boşlukla veya hidrolik ön yükleme ile rijitlik sağlama
- **Ön yüklü lineer kızaklar:** Modern alternatif — sertleştirilmiş bilya veya makaralı

**Tartışma:** Düşük sürtünmeli plastik kaplı kutu kızakların mı yoksa sertleştirilmiş lineer kızakların mı daha iyi titreşim sönümleme sağladığı hâlâ tartışmalıdır.

### 8.2 Besleme Sistemi (Feed System)

İki ana tip:
1. **Hidrolik silindir** — doğrudan basınçlı besleme
2. **Bilyalı vida (ball screw) + dişli redüktör** — servo motor tahrikli, hassas kontrol

### 8.3 Dişli Kutusu (Gearbox)

| Parametre | Değer / Özellik |
|-----------|-----------------|
| Dişli tipi | Düşük geri tepme, sementasyon sertleştirilmiş |
| Yatak tipi | Bilyalı veya konik makaralı |
| Maksimum dişli seti | 5 set |
| Maksimum redüksiyon oranı | 40:1 |
| Motor gücü | 150 kW'a kadar |
| Tahrik | Doğrudan veya kayış (V / zamanlama) ile |
| Volan | Giriş milinde — dalgalanan tork düzleştirme |

**Bıçak montaj flanşı:** 
- Entegre tip: Mil içinde — daha ucuz ama aşınma durumunda pahalı bakım
- Değiştirilebilir göbek (drive hub): Rijit montaj, kolay değiştirme — daha yenilikçi

### 8.4 Fikstür (Fixture)

İki hidrolik sıkıştırma silindiri, malzemeyi bıçağın her iki tarafında yatay, dikey veya açılı olarak sıkıştırır. **Kritik detay:** Bıçak geri çekilmeden önce malzeme her iki taraftan bıçaktan ayrılır — bıçak ömrü uzar.

### 8.5 Bıçak Montajı

Bıçak, tahrik miline titreşimsiz şekilde sıkı monte edilmelidir — devasa tork aktarımı gerektirir. 

**Büyük flanş:** Titreşimi azaltır ama daha büyük bıçak çapı gerektirir
**Küçük flanş + stabilizatör:** Bıçak maliyetini düşürür, aynı stabilite

---

## 9. Bıçak Stabilitesi ve Titreşim Kontrolü

### 9.1 Dairesel Bıçak Rijitlik Paradoksu

Karbür testere bıçakları dairesel olduğundan:
- **Besleme yönünde:** Radyal olarak en rijit eleman
- **Beslemeye dik yönde:** Çok kararsız (ince gövde nedeniyle)

Bu nedenle yanal titreşim genliklerini minimize etmek için **bıçak stabilizatörleri** zorunludur.

### 9.2 Stabilizatör Türleri

| Tip | Yapı | Geliştime |
|-----|------|-----------|
| **Rulolu (Roller)** | Plastik kaplı iki bilyalı rulman, eksantrik miller üzerinde | AME/Metalcut ilk geliştirme |
| **Segmental** | Bıçağın iki yanında ayarlanabilir plastik kaplı plakalar | AME geliştirme |
| **Ön stabilizatör** | Bıçağın malzemeye giriş noktasına yakın, hidrolik uzatmalı | AME AMSAW — karbür dişler geçtikten sonra uzar |

**Terminoloji uyarısı:** Bazı üreticiler bu elemanları "titreşim sönümleyici (vibration dampener)" olarak pazarlar. Ancak teknik olarak bunlar salınımları **sönümlemez**, sadece genlikleri minimize eder. Doepcke bu farkı disertasyonunda detaylı açıklar.

### 9.3 Bıçak Çapı / Kalınlık Oranı

- Küçük çaplı bıçak: Daha ucuz, daha az tork gerektirir
- İnce bıçak: Daha az malzeme israfı, daha az enerji
- **Ancak:** Büyük çap/kalınlık oranı → yanal rijitlik düşer → titreşim artar

**Optimizasyon:** Daha küçük montaj göbeği + stabilizatör kombinasyonu ile daha büyük malzemeyi daha küçük bıçakla kesmek mümkündür.

### 9.4 Dişli Geri Tepmesi (Gear Backlash) ve Titreşim

**Kritik hesaplama:**
- 1800 mm (70") çaplı bıçak
- 250 mm (10") mil dişli pitch çapı
- Oran: 7/1
- Diş boşluğu: 0,025 mm (0,001") → **bıçak dişinde 0,18 mm (0,007") kayıp hareket**

Bu kayıp hareket + dişli setinin torsiyonal sarımı (diş malzemeye girdiğinde gerilir, çıktığında gevşer) → **torsiyonel titreşim** → geri tepme sıfırlama mekanizmaları veya dişli setlerinin minimum boşlukla taşlanması gerekir.

---

## 10. Makine Rijitliği ve Kuvvet Döngüsü

### 10.1 Temel Problem

Dairesel karbür uçlu testere bıçağı malzemeye girdiğinde veya çıktığında **tek diş keser**. Yük dalgalanması titreşim indükler ve çok rijit dişli kutusu + makine gerektirir.

### 10.2 Kapalı Döngü vs Açık Döngü

| Özellik | Pivot Testere (Kapalı Döngü) | Kaymalı Testere (Açık Döngü) |
|---------|-------------------------------|-------------------------------|
| **Kuvvet akışı** | Dişli kutusu pivotu → bilyalı vida → fikstür → kütük → kapalı döngü | Kızak boyunca açık, komliyans birikir |
| **Rijitlik** | En yüksek | Daha düşük — daha ağır yapılmalı |
| **Kayıp hareket** | Minimum | Besleme sistemindeki komliyansı korur |
| **Maliyet** | En uygun | Aynı rijitlik için daha pahalı |
| **Talaş kontrolü** | Aşağı doğru — kolay kontrol | Yatay/dikey — değişken |
| **Zemin alanı** | Daha az | Daha fazla |
| **Servis** | Kolay | Değişken |

### 10.3 Dikey Kaymalı Testereler

- **En rijit** ama **en pahalı**
- Yatay veya açılı kaymalılardan daha az yer
- Yatay talaş akışı → kontrol zorluğu
- Servis zorluğu

### 10.4 Genel Karşılaştırma Özeti

| Testere Tipi | Rijitlik | Maliyet | Talaş Kontrolü | Zemin Alanı | Servis |
|--------------|----------|---------|-----------------|-------------|--------|
| Dikey kaymalı | ★★★★★ | ★★★★★ | ★★ | ★★★★ | ★★ |
| Yatay kaymalı | ★★★ | ★★★ | ★★★★ | ★★ | ★★★★ |
| Açılı kaymalı | ★★★★ | ★★★★ | ★★★ | ★★★ | ★★★ |
| Pivot (yatay) | ★★★★★ | ★★ | ★★★★ | ★★★★★ | ★★★★★ |

---

## 11. Şerit (Bant) Testere Bıçak Teknolojisi

### 11.1 Genel Prensipler

Bant testere, iki veya daha fazla tekerlek arasında gerilen sürekli dişli metal banttan oluşur. Dairesel testereye göre avantajları:
- **Eşit dağılmış diş yükü** → üniform kesim
- **Düzensiz/eğri şekil kesme** kabiliyeti (jigsaw benzeri)
- **Daha az israf** — ince bant = dar kerf
- **Daha iyi ısı dağılımı** — daha uzun bıçak = daha fazla kesim alanı
- Genellikle daha düşük hızda çalışır

**Minimum eğri yarıçapı**, bant genişliği ve kerf ile belirlenir.

### 11.2 Bant Testere Türleri

#### 11.2.1 Konut ve Hafif Sanayi

Küçük-orta boyutlu dikey bantlar, ahşap, metal veya plastik keser. Portatif (akülü dahil) modeller yaygınlaşmıştır.

#### 11.2.2 Et Kesim

| Özellik | Değer |
|---------|-------|
| Gövde | Tamamı paslanmaz çelik |
| Tasarım | Kolay temizlenebilir |
| Bıçak tipi 1 | İnce dişli, ısıl işlem görmüş uçlar |
| Bıçak tipi 2 | Düz veya taraklı bıçak kenarlı |

#### 11.2.3 Metal İşleme — Fabrikasyon ve Tezgah Atölyeleri

| Parametre | Değer |
|-----------|-------|
| Bant hızı (tipik) | 40-5.000 ft/min (0,20-25 m/s) |
| Bant hızı (sürtünme kesim) | 15.000 ft/min (76 m/s) |
| Bıçak malzemesi | Bimetal — HSS dişler (kobalt kaliteleri dahil) |
| Gelişmiş malzeme | M51 çeliği, kriyojenik işlem görmüş bıçaklar (M.40) |
| Soğutma | Kesme sıvısı — talaş temizleme + soğutma + yağlama |
| Talaş fırçaları | Dişler arasına talaş sıkışmasını önler |

**Yatay bant testere:** İş parçası sabit, bıçak aşağı sallanarak keser. Boru/çubuk stok boyuna kesim. Eğri kesim yapamaz.

**Dikey bant testere (Kontur testeresi):** Bıçak yolu sabit, iş parçası hareket eder. Karmaşık şekil ve açı kesimi.

**Önemli gelişmeler:**
- Bimetal bıçaklar (HSS dişler + esnek çelik gövde) artık standart
- Yeni diş geometrileri ve diş pitch'leri → artan üretim hızı + uzun bıçak ömrü
- M51 çeliği ve kriyojenik işlem → daha önce imkansız kabul edilen performans

#### 11.2.4 Kereste Kesim

Kereste fabrikalarında çok büyük bant testereler kullanılır. Dairesel testereye kıyasla:
- Büyük çaplı kütükleri işleyebilir
- Daha küçük kerf → daha az israf

**Head saw (Baş testere):** Kütükte ilk kesimleri yapar. 2-3 inç (51-76 mm) diş aralığı, arka tarafta "sliver dişleri" (talaş temizleme, kesim yapmayan dişler).

**Resaw (Yeniden biçme):** Büyük kesitleri küçük parçalara veya kaplamaya dönüştürür. 2-3 inç (51-76 mm) geniş bıçak gerektirir.

**Çift kesim testereleri:** Her iki tarafta dişli — baş testere boyutlarında.

### 11.3 Bant Testere Yapı ve Besleme Sistemleri

| Besleme Tipi | Mekanizma | Kullanım |
|--------------|-----------|----------|
| **Yerçekimi** | Kendi ağırlığı ile düşer; yay/hidrolik/pnömatik damper ile hız kontrolü | Küçük testereler |
| **Hidrolik** | Pozitif basınçlı piston — ayarlanabilir basınç ve hız | Üretim testereleri |
| **Vidalı** | Kurşun vida mekanizması | Özel uygulamalar |

| Düşme (Fall) Tipi | Yapı | Özellik |
|--------------------|------|---------|
| **Pivot** | Ark şeklinde ilerleme | Basit, kompakt |
| **Tek kolon** | Büyük çaplı kolon üzerinde yukarı-aşağı (matkap presi benzeri) | Orta rijitlik |
| **Çift kolon** | İki büyük kolon — iş parçasının iki yanında | En yüksek rijitlik ve hassasiyet; miter kesim yapamaz |

### 11.4 Otomatik Bant Testereler

- Önceden ayarlanmış besleme hızı, geri dönüş, düşme, parça besleme ve sıkıştırma
- Bir operatör birden fazla otomatik testereyi besleyebilir
- CNC kontrollü modeller: daha hızlı, daha hassas, karmaşık miter (açılı) kesimler

### 11.5 Bant Testere Bıçak Bakımı (Sawfiling)

Kereste bant testerelerinde bıçak bakımı kritik uzmanılık gerektirir:

- **Benching:** Operasyonel kuvvetler ve ısınmaya karşı koyan deformasyon — bıçak imalatında bilerek oluşturulur
- **Diş boğazı profili:** Değirmen ve odun tipine göre optimize edilir; donmuş kütükler için "frost notch" oluk gerekir
- **İzleme (Tracking):** İki bant tekerleğinin aynı düzlemde (co-planar) olması kritik
- **Kılavuz makaraları:** Bıçak arkası ile flanş arasında ~1 mm boşluk
- Daralmış bıçaklar (tekrarlanan bileme) → kılavuz makaralarda kademe kesimi gerekir
- İdeal olarak makaralar bombeli (crowned) olmalı — bantların düzgün izlenmesini sağlar

---

## 12. Ölçme ve Kontrol Sistemleri

### 12.1 Karbür Testere Ölçme Cihazları

**Tip 1 — Kavrama pensesi ile:**
- Kütük kavrama penseleri ile sıkıştırılır
- Penseler kızaklar üzerinde bilyalı vida + servo motor ile pozisyonlanır
- Hassas boy ölçümü

**Tip 2 — Ölçme stopları ile:**
- Kütükler silindir konveyör ile ayarlanabilir stopa doğru sürülür
- Stop, bilyalı vida + servo mekanizma ile pozisyonlanır
- Amortisör ile darbe sönümleme
- Uzun parçalar için tercih edilir

### 12.2 Kontrol

Otomatik üretim testereleri büyük çoğunlukla **PLC (Programmable Logic Controller)** ile kontrol edilir. CNC versiyonları ise karmaşık açılı kesimler ve otomatik optimizasyon sağlar.

---

## 13. Endüstriyel Testere Bıçak Malzemeleri Karşılaştırma Matrisi

| Malzeme | Sertlik | Tokluk | Kesim Hızı | Ömür | Maliyet | Tipik Uygulama |
|---------|---------|--------|------------|------|---------|----------------|
| Karbon çeliği | ★★ | ★★★★★ | ★★ | ★★ | ★ | Ahşap el testereleri |
| Alaşım çeliği | ★★★ | ★★★★ | ★★★ | ★★★ | ★★ | Bant gövdeleri, CrV soğuk testere gövdeleri |
| HSS (M2) | ★★★★ | ★★★ | ★★★★ | ★★★★ | ★★★ | Soğuk testere bıçakları, bimetal bant dişleri |
| HSS+Co (M35, M42) | ★★★★★ | ★★★ | ★★★★ | ★★★★★ | ★★★★ | Paslanmaz çelik kesimi |
| M51 | ★★★★★ | ★★★ | ★★★★★ | ★★★★★ | ★★★★ | Yüksek performans bant testereler |
| TCT (WC uçlar) | ★★★★★+ | ★★ | ★★★★★ | ★★★★★ | ★★★★ | Dairesel testereler, soğuk testereler |
| Tam karbür | ★★★★★+ | ★ | ★★★★★ | ★★★★★+ | ★★★★★ | Çok sert malzeme, yüksek sıcaklık |
| Cermet | ★★★★★ | ★★ | ★★★★★ | ★★★★★ | ★★★★ | Portatif soğuk testereler, özel uygulamalar |
| Elmas | Süper sert | ★ | ★★★ | ★★★★★+ | ★★★★★ | Taş, beton, seramik, yarı iletken |

---

## 14. Testere Tipi Seçim Rehberi

### 14.1 Malzeme ve İşleme Göre

| Malzeme | İşlem | Önerilen Testere | Bıçak |
|---------|-------|-----------------|-------|
| Yumuşak çelik çubuk | Boyuna kesim | Yatay bant testere | Bimetal HSS |
| Alaşım çeliği kütük | Üretim kesimi | Karbür pivot testere | TCT negatif rake |
| Paslanmaz çelik boru | Hassas kesim | Soğuk testere | HSS M35+Co, 64-65 HRC |
| Alüminyum profil | Seri kesim | Soğuk testere veya karbür | TCT 38-42 HRC gövde |
| Demiryolu rayı | Saha/fabrika | Karbür eğik kızak/pivot | TCT özel geometri |
| Çelik levha | Levha kesim | Karbür levha testeresi | TCT |
| Ahşap kereste | Boyuna kesim | Büyük bant testere | Karbon çeliği, geniş set |
| Kütük (ilk kesim) | Head saw | Büyük bant testere | 2-3" diş aralığı + sliver dişler |
| Eğri/karmaşık şekil | Kontur kesim | Dikey bant testere | Dar bant, ince diş |
| Beton/asfalt | Yol kesim | Dairesel testere | Elmas segmentli |
| Sac metal çatı | Saha kesim | Portatif soğuk testere | Cermet uçlu |

### 14.2 Hız ve Verimlilik Karşılaştırması

| Testere Tipi | Göreceli Hız | Yüzey Kalitesi | Isı Etkisi |
|--------------|-------------|----------------|------------|
| Aşındırıcı testere | ★★★ | ★ | ★★★★★ (sıcak) |
| Sürtünme testeresi | ★★★★ | ★ | ★★★★★ (sıcak) |
| HSS soğuk testere | ★★ | ★★★★ | ★ (soğuk) |
| Karbür testere | ★★★★★ | ★★★★★ | ★ (soğuk) |
| Bant testere | ★ | ★★★ | ★★ |

---

## 15. Kaplama Teknolojileri ve Bıçak Ömrü

Soğuk testere ve karbür testere bıçaklarında kullanılan kaplamalar (M.07):

| Kaplama | Sertlik (HV) | Sürtünme Katsayısı | Uygulama |
|---------|-------------|-------------------|----------|
| **TiN** | ~2300 | 0,4-0,6 | Genel amaçlı HSS bıçaklar |
| **TiAlN** | ~3300 | 0,3-0,5 | Yüksek sıcaklık, kuru kesim |
| **Siyah oksit** | Düşük | Yüksek | Korozyon koruması, maliyet etkin |
| **TiCN** | ~3000 | 0,3-0,4 | Aşınma direnci, demir dışı |
| **AlCrN** | ~3200 | 0,3-0,5 | Yüksek sıcaklık, oksidasyon direnci |

---

## 16. Isıl İşlem Uygulamaları (M.40)

### 16.1 HSS Soğuk Testere Bıçakları

| Parametre | M2 | M35+Co |
|-----------|-----|--------|
| Östenitleme | 1190-1230°C | 1190-1230°C |
| Su verme | Yağ veya pres | Yağ veya pres |
| Temperleme | 540-595°C × 3 tekrar | 540-595°C × 3 tekrar |
| Sertlik (ferrous) | 64-65 HRC | 64-65 HRC |
| Sertlik (non-ferrous) | 58-60 HRC | 58-60 HRC |

### 16.2 TCT Soğuk Testere Gövdesi

| Parametre | CrV Alaşım Çeliği |
|-----------|-------------------|
| Östenitleme | 840-870°C |
| Su verme | Yağ |
| Temperleme | 400-500°C |
| Sertlik | 38-42 HRC |

### 16.3 Bant Testere Bıçakları

- **Bimetal:** HSS kenar + esnek çelik gövde — farklı ısıl işlem bölgeleri
- **Kriyojenik işlem:** -196°C derin soğutma → artık östenit → martenzit dönüşümü → aşınma direnci artışı (M.40)
- Kereste bant testereleri: yüzey sertleştirme (alev sertleştirme dahil) yaygın

---

## 17. Endüstriyel Sektör Matrisi

| Sektör | Testere Tipi | Bıçak | Kesilen Malzeme |
|--------|-------------|-------|-----------------|
| **Otomotiv** | Karbür pivot/yatay | TCT negatif rake | Alaşım çeliği kütük, profil |
| **Havacılık** | Soğuk testere + bant | HSS M35+Co, TCT | Titanyum, Inconel, alüminyum |
| **İnşaat** | Portatif soğuk, beton testere | Cermet, elmas | Ray, sac, beton, asfalt |
| **Demiryolu** | Karbür eğik/pivot | TCT özel | Ray, makas, aks |
| **Enerji** | Karbür halka testere | TCT | Sıcak hadde halkalar |
| **Genel metal işleme** | Bant testere (yatay) | Bimetal HSS | Çubuk stok, boru |
| **Kereste** | Büyük bant testere | Karbon/alaşım çeliği | Kütük, kereste |
| **Et işleme** | Bant testere (dikey) | Paslanmaz çelik | Kemik, et |
| **Mobilya** | Dairesel testere, bant | TCT, karbon | Ahşap, MDF, kontrplak |
| **Yarı iletken** | Dairesel testere | Elmas | Silikon wafer |

---

## 18. Sorun Giderme ve Bakım Rehberi

### 18.1 Dairesel Bıçak Sorunları

| Sorun | Olası Neden | Çözüm |
|-------|------------|-------|
| Geniş kerf | Aşırı titreşim (wobble) | Stabilizatör kontrolü, geri tepme azaltma |
| Karbür uç kırılması | Pozitif rake açısı, aşırı talaş yükü | Negatif rake geometri, talaş yükü azaltma |
| Bıçak çarpılması | Asimetrik ısınma | Pres su verme, uygun soğutma |
| Yüzey kalitesi düşük | Yetersiz rijitlik, aşınmış dişler | Makine rijitliği artırma, bıçak değiştirme |
| Torsiyonel titreşim | Dişli geri tepmesi | Anti-backlash mekanizma, taşlanmış dişli |

### 18.2 Bant Testere Sorunları

| Sorun | Olası Neden | Çözüm |
|-------|------------|-------|
| Bıçak kırılması | Metal yorgunluğu, aşırı gerilim | Uygun gerginlik, doğru tekerlek çapı |
| Eğri kesim | Yanlış izleme | Tekerlekleri aynı düzleme getirme |
| Diş soyulması | < 2 diş temas | Daha ince diş pitch seçimi |
| Kısa bıçak ömrü | Aşırı ısı | Soğutucu ekle, hız azalt |
| Dişler arasında talaş | Yetersiz temizleme | Fırça/fırça tekerlek kontrolü |

---

## 19. Modern Trendler ve Gelecek Yönelimler

1. **Servo-motorlu besleme sistemleri** — adaptif ilerleme kontrolü, PLC/CNC entegrasyonu
2. **Kriyojenik işlem görmüş bant bıçaklar** — dramatik ömür artışı
3. **Gelişmiş kaplama teknolojileri** — TiAlN, AlCrN yüksek sıcaklık uygulamaları
4. **Hafif ama rijit makine tasarımları** — kapalı döngü kuvvet sistemleri
5. **Ön stabilizatörler** — kesim doğruluğu ve bıçak ömründe inovasyon
6. **Bimetal bant teknolojisi** — M51 ve kobalt HSS kaliteleri ile sürekli gelişim
7. **Otomasyon** — tek operatörlü çoklu testere hücreleri
8. **Çevre dostu çözümler** — karbür soğuk testerelerin aşındırıcı testereleri değiştirmesi (orman yangını riski eliminasyonu)
9. **Akıllı kesim** — gerçek zamanlı titreşim izleme, otomatik bıçak durumu tespiti
10. **Nano-yapılı karbür uçlar** — ultra ince tane boyutu ile sertlik + tokluk optimizasyonu (M.05)

---

## 20. Kaynakça ve Çapraz Referanslar

### Wikipedia Kaynakları
- Circular saw — https://en.wikipedia.org/wiki/Circular_saw
- Cold saw — https://en.wikipedia.org/wiki/Cold_saw
- Carbide saw — https://en.wikipedia.org/wiki/Carbide_saw
- Band saw — https://en.wikipedia.org/wiki/Bandsaw
- Saw — https://en.wikipedia.org/wiki/Saw

### Akademik ve Teknik Referanslar
- Pahlitzsch, Willemeit, Doepcke — Braunschweig Üniversitesi karbür diş geometrisi araştırması (1963-1976)
- Doepcke, H. — "Sägen von Rohren mit hartmetallbestückten Kreissägeblättern" (disertasyon)
- Liebrecht, R. — VDI Verlag Nr. 1999, testere bıçağı titreşim etkileri
- Chamberlain Manufacturing Corp. — "Investigation of New Sawing Concept" (Frankford Arsenal raporu, 1970)
- US Patent 4,463,645 (Speedcut, 1984) — Notch Grind geometrisi
- Todd, Allen & Alting — Manufacturing Processes Reference Guide (1994)
- Naylor, A. — "A review of wood machining literature with a special focus on sawing" (BioRes, 2013)

### Çapraz Referans Dizini
- **(M.02-03)** Takım Çelikleri — HSS kaliteleri (M2, M35, M42, M51)
- **(M.05)** Tungsten Karbür — TCT uçlar, sinterlenmiş karbür, tane boyutu
- **(M.06)** Aşınma Mekanizmaları — diş aşınması, abrazif/yapışkan/termal
- **(M.07)** Kaplama Teknolojileri — TiN, TiAlN, AlCrN, PVD/CVD
- **(M.32)** Kesme Mekaniği — kuvvet, talaş oluşumu, ısı transferi
- **(M.39)** Paslanmaz Çelik — HSS+Co gereksinimi, et işleme hyijenik tasarım
- **(M.40)** Isıl İşlem ve Kriyojenik — su verme, temperleme, kriyojenik bant işleme
- **(M.41)** Dilme/Makaslama — rake açısı, kerf tasarımı, kesme kuvvetleri
