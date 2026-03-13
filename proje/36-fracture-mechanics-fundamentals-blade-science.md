# Makale 36 — Kırılma Mekaniği Temelleri: Endüstriyel Bıçaklar İçin Kırılma Bilimi

**Kaynak:** Wikipedia — Fracture Mechanics, Fracture Toughness, Stress Intensity Factor (derlenmiş)  
**Orijinal Başlıklar:**  
- "Fracture mechanics" — https://en.wikipedia.org/wiki/Fracture_mechanics  
- "Fracture toughness" — https://en.wikipedia.org/wiki/Fracture_toughness  
- "Stress intensity factor" — https://en.wikipedia.org/wiki/Stress_intensity_factor  
**Tarih:** Erişim 2025  
**Tür:** Teorik temel — akademik derleme

---

## Özet

Kırılma mekaniği (fracture mechanics), malzemelerdeki çatlakların yayılmasını inceleyen mekanik dalıdır. Endüstriyel bıçaklarda kenar çatlağı oluşumu, talaşlanma (chipping), yorulma kırılması ve ani kırılma mekanizmalarının anlaşılması için temel bilimsel altyapıyı sağlar. Bu makale Griffith kriteri, Irwin modifikasyonu, gerilme yoğunluğu faktörü (K), çatlak ucu plastik bölgesi, kırılma tokluğu (K_IC), J-integrali ve Mod I/II/III yükleme kavramlarını kapsamaktadır.

---

## 1. Kırılma Mekaniğine Giriş

Kırılma mekaniği, analitik katı cisim mekaniği yöntemlerini kullanarak çatlak üzerindeki itici kuvveti ve deneysel katı cisim mekaniği yöntemlerini kullanarak malzemenin kırılmaya karşı direncini karakterize eder.

### Temel Motivasyon

Malzeme üretimi, işleme ve şekillendirme süreçleri bitmiş mekanik bileşenlere kusurlar (flaw/fissure) getirebilir. Kırılma mekaniğinin yanıtlamaya çalıştığı sorular:

1. Çatlak boyutunun fonksiyonu olarak bileşenin mukavemeti nedir?
2. Servis yüklemesi altında tolere edilebilir maksimum çatlak boyutu nedir?
3. Bir çatlağın belirli bir başlangıç boyutundan maksimum izin verilebilir boyuta büyümesi ne kadar sürer?
4. Belirli bir önceden var olan kusur boyutu varsayıldığında yapının servis ömrü nedir?
5. Çatlak tespit periyodu boyunca yapı ne sıklıkla denetlenmelidir?

> **Endüstriyel bıçak bağlamı:** Bu sorular doğrudan bıçak kenarındaki mikro çatlaklar, talaşlanma başlangıcı, kenar yorulması ve kesim ömrü tahminleriyle ilgilidir.

---

## 2. Griffith Kriteri — Kırılma Mekaniğinin Temeli

### Tarihsel Arka Plan

I. Dünya Savaşı sırasında İngiliz havacılık mühendisi **A. A. Griffith** (1921), gevrek malzemelerin kırılmasını açıklamak için termodinamik bir yaklaşım geliştirdi.

### Çelişkili Gözlemler

- Bulk cam kırılma gerilmesi: **~100 MPa** (15.000 psi)
- Atomik bağların teorik kırılma gerilmesi: **~10.000 MPa** (1.500.000 psi)

Bu 100 kat fark, malzeme içindeki **mikroskopik kusurların** varlığıyla açıklandı.

### Griffith Denklemi

Griffith, yapay bir yüzey çatlağı olan cam numunelerde şunu buldu:

$$\sigma_f \sqrt{a} \approx C$$

Burada:
- $\sigma_f$ = kırılma gerilmesi
- $a$ = çatlak yarı uzunluğu
- $C$ = malzeme sabiti

### Termodinamik Yaklaşım

Griffith'in enerji dengeleme yaklaşımı:

1. Tek eksenli çekme yükü altında mükemmel numunede depolanan **potansiyel enerjiyi** hesapla
2. Sınırı sabitle, çatlak ekle → çatlak yüzeylerindeki gerilme gevşer → **elastik enerji** azalır
3. Çatlak **yüzey enerjisini** artırır
4. **Serbest enerji** (yüzey enerjisi − elastik enerji) çatlak uzunluğunun fonksiyonu olarak hesapla
5. Kırılma, serbest enerji kritik çatlak uzunluğunda tepe değerine ulaştığında gerçekleşir

### Griffith Sabiti

$$C = \sqrt{\frac{2E\gamma}{\pi}}$$

Burada:
- $E$ = Young modülü (elastisite modülü)
- $\gamma$ = yüzey enerji yoğunluğu

Cam için $E = 62$ GPa ve $\gamma = 1$ J/m² varsayımıyla deneysel sonuçlarla mükemmel uyum elde edildi.

### Enerji Salınım Oranı (Energy Release Rate)

Düz dikdörtgen plakada yüke dik çatlak için:

$$G = \frac{\pi \sigma^2 a}{E}$$

Düzlem gerinim (plane strain) durumunda $E$ yerine $E/(1-\nu^2)$ kullanılır ($\nu$ = Poisson oranı).

**Kırılma kriteri:** $G \geq G_c$ olduğunda çatlak yayılmaya başlar.

> **Endüstriyel bıçak bağlamı:** Bıçak kenarındaki mikro çatlakların kritik boyuta ulaşıp yayılması bu enerji dengesine bağlıdır. Kesim sırasında kenar üzerindeki gerilme yeterince yüksekse, G ≥ Gc şartı sağlanır ve talaşlanma/kırılma başlar.
> **Çapraz Referans (M.28):** M.28'de WC bıçaklardaki 6 kırılma modu — Griffith kriteri mikro çatlak yayılmasının temelini açıklar.

---

## 3. Irwin Modifikasyonu — Sünek Malzemeler

### Griffith'in Sınırlaması

Griffith'in teorisi cam gibi gevrek malzemelerde mükemmel çalışır, ancak çelik gibi sünek malzemelerde $\sigma_f \sqrt{a} = C$ ilişkisi hâlâ geçerli olsa da, tahmin edilen yüzey enerjisi gerçekçi olmayacak kadar yüksektir.

### Irwin'in Katkısı (1950'ler)

**G. R. Irwin** ve ABD Deniz Araştırma Laboratuvarı (NRL) ekibi, sünek malzemelerin kırılmasında **plastisitenin** önemli rol oynadığını fark etti.

### Enerji Bölümleme

Irwin toplam enerjiyi ikiye ayırdı:

1. **Depolanan elastik gerinim enerjisi** → çatlak büyüdüğünde salınır (termodinamik itici kuvvet)
2. **Harcanan enerji** → plastik dağılma + yüzey enerjisi (termodinamik direnç)

$$G = 2\gamma + G_p$$

Burada:
- $\gamma$ = yüzey enerjisi
- $G_p$ = plastik dağılma (ve diğer kaynaklardan dağılma) — birim çatlak büyüme alanı başına

### Malzeme Türüne Göre G Değerleri

| Malzeme Türü | G Değeri | Açıklama |
|---|---|---|
| **Gevrek (cam)** | $G \approx 2\gamma = 2$ J/m² | Yüzey enerjisi baskın |
| **Sünek (çelik)** | $G \approx G_p = 1000$ J/m² | Plastik dağılma baskın |
| **Polimer (cam geçiş sıcaklığı)** | 2–1000 J/m² | Ara değerler |

### Modifiye Griffith Kriteri

$$\sigma_f \sqrt{a} = \sqrt{\frac{E \cdot G}{\pi}}$$

> **Endüstriyel bıçak bağlamı:** Çelik bıçaklar sünek malzeme olduğu için, kırılma enerjisi büyük ölçüde plastik dağılma (Gp) tarafından kontrol edilir. Bu nedenle bıçak çeliğinin tokluğu (toughness) kırılma direncini belirleyen kritik parametredir.
> **Çapraz Referans (M.29):** M.29'da WC vs çelik karşılaştırmasında tokluk parametresi — WC: düşük tokluk, yüksek sertlik; çelik: yüksek tokluk, orta sertlik. Irwin modeli bu dengeyi açıklar.
> **Çapraz Referans (M.31):** M.31'de 6 çelik kategorisi — her birinin sertlik-tokluk dengesi farklıdır. HSS (M2): yüksek sertlik ama düşük darbe direnci; sıcak iş (H13): orta sertlik ama yüksek tokluk.

---

## 4. Gerilme Yoğunluğu Faktörü (Stress Intensity Factor — K)

### Tanım

Gerilme yoğunluğu faktörü (K), çatlak ucu yakınındaki gerilme durumunu ("gerilme yoğunluğu") tahmin etmek için kullanılır.

Genel ifade:

$$K = \sigma \sqrt{\pi a} \cdot f(a/W)$$

Burada:
- $\sigma$ = uygulanan gerilme
- $a$ = çatlak uzunluğu
- $W$ = numune genişliği
- $f(a/W)$ = geometri bağımlı düzeltme faktörü

### Çatlak Ucundaki Gerilme Dağılımı

Polar koordinatlarda ($r, \theta$):

$$\sigma_{ij}(r, \theta) = \frac{K}{\sqrt{2\pi r}} f_{ij}(\theta) + \text{yüksek dereceli terimler}$$

**Teorik olarak** $r \to 0$ iken $\sigma_{ij} \to \infty$ — gerilme tekillği (stress singularity). Pratikte plastik bölge oluştuğu için bu tekillik gerçekleşmez.

### Üç Bağımsız Çatlak Yükleme Modu

**G. Irwin (1957)** herhangi bir keyfi yüklemenin üç bağımsız moda ayrılabileceğini buldu:

| Mod | Adı | Türkçe | Açıklama | Endüstriyel Bıçak Bağlamı |
|---|---|---|---|---|
| **Mod I** | Opening (açılma) | Çekme modu | Çatlak yüzeyleri doğrudan ayrılır (çekme gerilmesi, çatlak düzlemine dik) | Bıçak kenarında çekme çatlağı — en yaygın kırılma modu |
| **Mod II** | Sliding (kayma) | Düzlem içi kayma | Çatlak yüzeyleri birbirine göre kayar (kayma gerilmesi, çatlak düzlemine paralel, çatlak cephesine dik) | Makaslama bıçaklarında kayma kırılması |
| **Mod III** | Tearing (yırtılma) | Düzlem dışı yırtma | Çatlak yüzeyleri birbirine göre hareket eder (kayma gerilmesi, çatlak düzlemine ve cephesine paralel) | Kaymalı kesimde (slicing) yırtma modu |

**Mod I en yaygın** mühendislik tasarım yükleme tipidir.

### Formal K Tanımları

$$K_I = \lim_{r \to 0} \sqrt{2\pi r} \cdot \sigma_{yy}(r, 0)$$

$$K_{II} = \lim_{r \to 0} \sqrt{2\pi r} \cdot \sigma_{yx}(r, 0)$$

$$K_{III} = \lim_{r \to 0} \sqrt{2\pi r} \cdot \sigma_{yz}(r, 0)$$

### K ile Enerji Salınım Oranı (G) İlişkisi

**Düzlem gerilme (plane stress):**

$$G_I = K_I^2 \cdot \frac{1}{E}, \quad G_{II} = K_{II}^2 \cdot \frac{1}{E}$$

**Düzlem gerinim (plane strain):**

$$G_I = K_I^2 \cdot \frac{1 - \nu^2}{E}, \quad G_{II} = K_{II}^2 \cdot \frac{1 - \nu^2}{E}$$

**Mod III:**

$$G_{III} = K_{III}^2 \cdot \frac{1 + \nu}{E}$$

**Genel yükleme (düzlem gerinim):**

$$G = G_I + G_{II} + G_{III}$$

> **Çapraz Referans (M.13):** M.13'te Zhou ve ark. (Georgia Tech) — biyomalzeme kesiminde Mod II (kenar kayma, α = 0–10°) ve Mod III (düzlem dışı yırtma, α = 10–90°) kırılma modları tanımlanmıştır. Küçük kayma açılarında τ_yz kaynaklı Mod II, büyük açılarda τ_xy ve τ_xz kaynaklı Mod III baskındır. Mod III çok daha az kuvvet gerektirir.
> **Çapraz Referans (M.07):** M.07'de Kurt ve ark. (Gazi Üniversitesi, Ankara) — kağıt kesiminde bıçak açısı 28° optimum, 22° altında gerilmeler artış eğilimi gösterir. Von Mises gerilmesi (SEQV) K ile ilişkilidir.

---

## 5. Kritik Gerilme Yoğunluğu Faktörü — Kırılma Tokluğu (K_IC)

### Tanım

Çok keskin bir çatlak veya V-çentik yapılabildiğinde, $K_I$'nin deneysel olarak belirlenebilen minimum değeri **kritik kırılma tokluğu** olarak adlandırılır:

- **$K_{Ic}$** = düzlem gerinim (plane strain) koşullarında Mod I kritik gerilme yoğunluğu faktörü — **malzeme özelliği**
- **$K_c$** = kalınlık ve düzlem gerinim gereksinimlerini karşılayamayan testlerde elde edilen değer

### Kırılma Kriteri

$$K_I \geq K_{Ic} \Rightarrow \text{kırılma (fracture) başlar}$$

### G-Kriteri (Genel Yükleme)

$$K_c^2 = K_I^2 + K_{II}^2 + \frac{E'}{2\mu} K_{III}^2$$

Burada $E' = E/(1-\nu^2)$ (düzlem gerinim), $E' = E$ (düzlem gerilme).

### Malzeme K_IC Değerleri Karşılaştırması

| Malzeme Türü | Malzeme | K_IC (MPa·m^(1/2)) |
|---|---|---|
| **Metal** | Alüminyum | 14–28 |
| | Alüminyum alaşımı (7075) | 20–35 |
| | Inconel 718 | 73–87 |
| | Maraging çeliği (200 Grade) | **175** |
| | Çelik alaşımı (4340) | **50** |
| | Titanyum alaşımı | 84–107 |
| **Seramik** | Alüminyum oksit (Al₂O₃) | 3–5 |
| | Silisyum karbür (SiC) | 3–5 |
| | Soda-kireç cam | 0,7–0,8 |
| | Beton | 0,2–1,4 |
| **Polimer** | PMMA | 0,7–1,6 |
| | Polistiren | 0,7–1,1 |
| **Kompozit** | Mullit elyaf kompozit | 1,8–3,3 |
| | Silika aerojel | 0,0008–0,0048 |

**Kırılma tokluğu malzemelere göre yaklaşık 4 büyüklük sırası (order of magnitude) değişir.** Metaller en yüksek, seramikler en düşük değerlere sahiptir.

> **Endüstriyel bıçak bağlamı:** Bıçak çeliği seçiminde K_IC kritik parametredir. Yüksek sertlik (HRC) genellikle düşük K_IC'ye yol açar — sertlik-tokluk dengesi temel tasarım problemidir.
> **Çapraz Referans (M.24):** M.24'te tungsten karbür (WC): çok yüksek sertlik (~1500 HV) ama düşük tokluk — K_IC tablodan ~3–5 MPa·m^(1/2) (SiC sınıfı). Bu nedenle WC bıçaklar darbe altında talaşlanmaya eğilimlidir.
> **Çapraz Referans (M.28):** M.28'de WC kırılma modları — düşük K_IC nedeniyle "talaşlanma" (chipping) en yaygın arıza modu.
> **Çapraz Referans (M.34):** M.34'te 10 bıçak malzeme kategorisi — her birinin sertlik-tokluk dengesi K_IC perspektifinden değerlendirilebilir.

---

## 6. Çatlak Ucu Plastik Bölge

### Teorik Arka Plan

Teoride çatlak ucunda yarıçap sıfıra yaklaştığında gerilme sonsuza gider (gerilme tekilliği). Gerçekte malzeme **akma dayanımını** aştığında plastik deformasyon oluşur.

### Irwin Plastik Bölge Yarıçapı

$$r_p = \frac{K_C^2}{2\pi \sigma_Y^2}$$

Burada:
- $r_p$ = plastik bölge yarıçapı
- $K_C$ = kırılma tokluğu
- $\sigma_Y$ = akma dayanımı

### Yorumlama

| Parametre | Yüksek Değer | Anlam |
|---|---|---|
| $K_C$ yüksek | Büyük $r_p$ | Malzeme tok — daha fazla plastik deformasyon |
| $\sigma_Y$ düşük | Büyük $r_p$ | Malzeme sünek — daha kolay plastik akış |
| $K_C$ düşük, $\sigma_Y$ yüksek | Küçük $r_p$ | Malzeme gevrek — sınırlı plastik bölge, ani kırılma riski |

> **Endüstriyel bıçak bağlamı:** Yüksek sertliğe (HRC) ısıl işlem görmüş bıçak çeliklerinde $\sigma_Y$ yüksek, dolayısıyla plastik bölge küçüktür. Bu, çatlak ucunda enerji absorpsiyonunun sınırlı olması ve ani kırılma riskinin artması demektir.
> **Çapraz Referans (M.35):** M.35'te PM çeliklerinin (Vanadis 4E, K390) AHSS için tercih edilme nedeni — PM çelikleri ince, homojen karbür yapısı sayesinde daha iyi tokluk sağlar, yani daha büyük $r_p$ ve daha az talaşlanma.
> **[ÇAKIŞMA] M.30 vs M.35:** M.30'da D2/Cr12MoV — 800.000+ makaslama ömrü vurgulanır. M.35'te D2'nin AHSS'de talaşlanma riski yüksek diye uyarılır. Bu çelişki, D2'nin normal çelik keserken iyi ama AHSS gibi ultra-sert malzemelerde yetersiz kalmasıyla açıklanır. Kırılma mekaniği görüşüyle: D2'nin kaba karbürleri çatlak başlatma noktaları (crack initiation sites) oluşturur.

---

## 7. Elastik-Plastik Kırılma Mekaniği (EPFM)

### LEFM'nin Sınırlaması

Lineer elastik kırılma mekaniği (LEFM) **küçük ölçekli akma** (small-scale yielding) varsayımına dayanır: plastik bölge çatlak uzunluğuna göre küçük olmalıdır. Yapısal çeliklerde bu koşul genellikle sağlanmaz.

### J-İntegrali

**James R. Rice** (1960'ların ortası, Brown Üniversitesi) tarafından geliştirilen J-integrali, çatlak ucunda yeterli plastik deformasyon olduğunda kullanılır:

$$J = \int_{\Gamma} \left( w \, dy - T_i \frac{\partial u_i}{\partial x} \, ds \right)$$

Burada:
- $\Gamma$ = çatlak ucunun etrafında saat yönünde keyfi yol
- $w$ = gerinim enerji yoğunluğu
- $T_i$ = çekme vektörü bileşenleri
- $u_i$ = yer değiştirme vektörü bileşenleri
- $ds$ = $\Gamma$ yolu boyunca artımlı uzunluk

### J_IC ve K_IC İlişkisi

$$K_{Ic} = \sqrt{E^* \cdot J_{Ic}}$$

Burada:
- $E^* = E$ (düzlem gerilme)
- $E^* = E/(1-\nu^2)$ (düzlem gerinim)

### Çatlak Ucu Açılma Yer Değiştirmesi (CTOD)

**Wells** tarafından önerilen CTOD parametresi, kırılma öncesi çatlak duvarlarının ayrılmasıyla ölçülür. Daha tok çeliklerde çatlak ucu daha fazla yuvarlanır (künt hale gelir).

---

## 8. İçsel ve Dışsal Tokluk Mekanizmaları

### İçsel Toklaştırma Mekanizmaları (Çatlak Ucunun Önünde)

Çatlak ucunun ilerisinde etki eden ve malzemenin tokluğunu artıran süreçler:

1. **İkincil fazlarla çatlak sapması** (crack deflection)
2. **İnce tane yapısıyla çatlak ayrılması**
3. **Tane sınırları nedeniyle çatlak yolunda değişiklik**
4. **Dönüşüm toklaştırması** (transformation toughening) — örn. itriya stabilize zirkonya (YSZ), seramik bıçaklar ve jet türbin kanatları

### Dışsal Toklaştırma Mekanizmaları (Çatlak Ucunun Arkasında)

Çatlak ucunun arkasında etki eden ve daha fazla açılmaya direnen süreçler:

1. **Elyaf/lamel köprüleme** — kırılma yüzeylerini bir arada tutar
2. **Çatlak kamalama** — iki pürüzlü kırılma yüzeyi arasındaki sürtünme
3. **Mikro çatlaklama** — ana çatlak etrafında küçük çatlaklar oluşur, çatlak ucundaki gerilmeyi hafifletir

### Tane Sınırları ve Sıcaklık Etkisi

| Sıcaklık | Davranış | Tokluk | Mekanizma |
|---|---|---|---|
| **Düşük** | Tamamen gevrek | **Düşük** | Plastik bölge yok, ardışık tane klivajı |
| **Geçiş** | Klivaj + sünek bağlar | **Orta** | Lifli bağlantılar artmaya başlar |
| **Yüksek** | Tamamen sünek | **Yüksek** | %100 lifli bağlantı, sünek kırılma |

**Sünek-gevrek geçiş sıcaklığı (DBTT):** BCC metallerde kritik sıcaklık — safsızlık içeriği, tane boyutu ve alaşımlama elementlerine bağlı değişir. Tane inceltme veya kontrollü ısıl işlem DBTT'yi düşürebilir.

> **Endüstriyel bıçak bağlamı:** Soğuk ortamda (soğuk depo tesisleri, gıda işleme) çalışan bıçaklar DBTT'nin altına düşerse gevrekleşebilir. Bıçak çeliğinin DBTT'si operasyon sıcaklığının altında olmalıdır.
> **Çapraz Referans (M.30):** M.30'da 9CrSi — düşük sıcaklık dayanımı belirtilmemiş ama HRC 55–58 ile sınırlı tokluk.
> **Çapraz Referans (M.26):** M.26'da HSS vs WC — HSS (çelik) daha tok ama daha yumuşak; WC daha sert ama kırılgan. Bu sertlik-tokluk dengesi K_IC ve DBTT ile doğrudan ilişkilidir.

---

## 9. İnklüzyonların Etkisi

Malzemedeki ikincil faz parçacıkları (inklüzyonlar) gevrek taneler gibi davranarak çatlak yayılmasını etkilebilir. Kırılma veya ayrılma:

- **Dış gerilme** nedeniyle veya
- İnklüzyonun çevre malzemeyle bağlı kalma çabasından oluşan **dislokasyonlar** nedeniyle gerçekleşir

Kırılma en olası konum: **plastik-elastik bölge sınırı**

| Plastik Bölge | İnklüzyon Yoğunluğu | Sonuç |
|---|---|---|
| Küçük | Düşük | Kırılma doğrudan ana çatlak ucuna bağlanır |
| Büyük | Yüksek | Plastik bölge içinde ek inklüzyon kırılmaları, progresif bağlantı |

> **Endüstriyel bıçak bağlamı:** D2 gibi geleneksel soğuk iş çeliklerinde kaba karbür inklüzyonları çatlak başlatma noktalarıdır. PM çeliklerinde ince, homojen karbür dağılımı bu riski azaltır.
> **Çapraz Referans (M.35):** M.35'te D2 vs PM: "D2'de kaba, düzensiz karbür; PM'de ince, homojen karbür" — kırılma mekaniği perspektifinden, PM çeliklerinin üstünlüğü inklüzyon boyutunun küçüklüğünden kaynaklanır.

---

## 10. Kırılma Tokluğu Test Yöntemleri

### Standart Numune Konfigürasyonları (ASTM E1820)

1. **SE(B)** — Tek kenarlı eğme numunesi (single-edge bending)
2. **C(T)** — Kompakt çekme numunesi (compact tension)
3. **DC(T)** — Disk şekilli kompakt çekme numunesi

### Düzlem Gerinim Koşulu

$$B, a \geq 2,5 \left( \frac{K_{Ic}}{\sigma_{YS}} \right)^2$$

Burada $B$ = minimum gerekli kalınlık, $\sigma_{YS}$ = akma dayanımı.

### K_IC Testi (ASTM E399)

- Yükleme hızı: $K_I$ artışı 0,55–2,75 (MPa·√m)/s
- Yük ve CMOD (çatlak ağzı açılma yer değiştirmesi) kaydedilir
- Geçici tokluk: $K_Q = \frac{P_Q}{B\sqrt{W}} f(a/W)$
- Geçerlilik şartları: $\min(B, a) > 2,5(K_Q/\sigma_{YS})^2$ ve $P_{max} \leq 1,1 P_Q$

### Palmqvist Yöntemi (ISO 28079)

**Sementlenmiş karbürler** (WC-Co) için özel olarak geliştirilen kırılma tokluğu test yöntemi.

> **Çapraz Referans (M.24, M.28):** WC bıçak malzemeleri için Palmqvist yöntemi ISO 28079 uygulanabilir.

---

## 11. Malzeme Arıza Mekanizmaları ve Bıçak Kenarı İlişkisi

### Kırılma Modu ve Bıçak Uygulaması Eşleştirme Tablosu

| Kırılma Modu | Mekanizma | Bıçak Arıza Türü | Tipik Durum |
|---|---|---|---|
| **Mod I — Açılma** | Çekme gerilmesi → çatlak açılması | Kenar çatlağı, talaşlanma | Sert malzeme kesimi, darbe |
| **Mod II — Kayma** | Düzlem içi kayma → çatlak kayması | Makaslama çatlağı | Giyotin bıçak, makaslama |
| **Mod III — Yırtma** | Düzlem dışı kayma → yırtma | Kaymalı kesimde kenar hasarı | Dilimleme, dilme |
| **Yorulma** | Tekrarlı yükleme → çatlak büyümesi | Progresif kenar kaybı | Uzun servis ömrü sonrası |
| **Gerilme korozyonu** | Korozif ortam + gerilme → yavaş çatlak | Kenar korozyonu | Islak ortam, asidik malzeme |

### Paris Yasası — Yorulma Çatlak Büyümesi

Uzun çatlaklar için büyüme hızı:

$$\frac{da}{dN} \propto (\Delta K)^m$$

Burada $\Delta K$ = gerilme yoğunluğu aralığı, $N$ = çevrim sayısı, $m$ = malzeme sabiti.

> **Endüstriyel bıçak bağlamı:** Tekrarlı kesim çevrimleri bıçak kenarında yorulma çatlağı büyütür. Paris yasası, bıçak ömrünü tahmin etmek için kullanılabilir.

---

## 12. Çatlak Sapma Toklaştırması (Crack Deflection Toughening)

### Faber-Evans Modeli

**Katherine Faber** ve **Anthony G. Evans** (1983) tarafından geliştirilen model, seramiklerde ikincil faz parçacıkları etrafında çatlak sapmasından kaynaklanan tokluk artışını tahmin eder.

Model parametreleri:
- Parçacık morfolojisi ve en boy oranı
- Parçacık aralığı ve hacim fraksiyonu
- Çatlak ucundaki lokal gerilme yoğunluğunun azalması

**Yaklaşık eşit eksenli taneli malzemelerde, sapma etkileri kırılma tokluğunu tane sınırı değerinin yaklaşık iki katına artırabilir.**

> **Endüstriyel bıçak bağlamı:** PM çeliklerindeki ince, homojen karbür dağılımı doğal bir çatlak sapma mekanizması sağlar — her karbür parçacığı çatlak yolunu saptırarak enerji harcatır.

---

## 13. Sayısal Özet Tablosu

### Temel Kırılma Mekaniği Parametreleri

| Parametre | Sembol | Birim | Açıklama |
|---|---|---|---|
| Gerilme yoğunluğu faktörü | $K$ | MPa·√m | Çatlak ucu gerilme durumu |
| Kırılma tokluğu | $K_{Ic}$ | MPa·√m | Malzeme özelliği (düzlem gerinim) |
| Enerji salınım oranı | $G$ | J/m² | Çatlak büyümesi için mevcut enerji |
| J-integrali | $J$ | J/m² | Elastik-plastik enerji parametresi |
| Çatlak ucu açılma | CTOD | mm | Çatlak ucu deformasyonu |
| Plastik bölge yarıçapı | $r_p$ | mm | Çatlak ucundaki plastik bölge |
| Çekme yükleme | Mod I | — | En yaygın mühendislik yüklemesi |
| Kayma yükleme | Mod II | — | Makaslama durumu |
| Yırtma yükleme | Mod III | — | Dilimleme/kaymalı kesim |

---

## 14. Endüstriyel Bıçak Tasarımı İçin Kırılma Mekaniği Prensipleri

### Tasarım Kuralları

1. **Sertlik-tokluk dengesi:** Yüksek HRC → düşük K_IC → talaşlanma riski. Optimal sertlik uygulama şartlarına göre seçilmeli.

2. **Karbür boyutu minimizasyonu:** İnce karbürler (PM çelik) → küçük çatlak başlatma noktaları → yüksek yorulma ömrü.

3. **Yüzey kalitesi:** Taşlama çizikleri ve yüzey kusurları çatlak başlatma noktalarıdır. İnce taşlama → düşük başlangıç çatlak boyutu ($a_0$) → uzun ömür.

4. **Kenar açısı optimizasyonu:** Çok keskin kenar (küçük açı) → yüksek gerilme konsantrasyonu → düşük K eşiği → erken talaşlanma.

5. **Darbe yüklemesinden kaçınma:** Ani yükler gerilme yoğunluğunu artırır → $K_I > K_{Ic}$ → ani kırılma.

6. **Sıcaklık kontrolü:** Düşük sıcaklık → DBTT altı → gevrekleşme; yüksek sıcaklık → temperleme → sertlik kaybı.

7. **Kaplama ile koruma:** Kaplamalarda (TiN, TiAlN) yüzey mikro çatlaklarını minimize etme → kenar ömrünü uzatma.

> **Çapraz Referans (M.04):** M.04'te keskinlik bilimi — "Bıçak kenarındaki keskinlik, gerilme konsantrasyonu oluşturarak malzeme kırılmasını başlatır" — kırılma mekaniğinin düzeneğidir.
> **Çapraz Referans (M.33):** M.33'te 9 bakım ipucu — "düzenli bileme, doğru depolama, hasar kontrolü" — tümü kırılma mekaniği prensipleriyle tutarlıdır: başlangıç çatlak boyutunu küçük tutma ve gerilme yoğunluğunu minimize etme.
> **Çapraz Referans (M.23):** M.23'te kaplamalar — TiN, TiCN, DLC — yüzey sertleştirme ve sürtünme azaltma yoluyla kenar üzerindeki gerilme yoğunluğunu düşürür.

---

## 15. Referanslar

1. Griffith, A. A. (1921), "The phenomena of rupture and flow in solids", Philosophical Transactions of the Royal Society of London, 221, 163–198.
2. Irwin, G. R. (1957), "Analysis of stresses and strains near the end of a crack traversing a plate", Journal of Applied Mechanics, 24, 361–364.
3. Rice, J. R. (1968), "A path independent integral and the approximate analysis of strain concentration by notches and cracks", Journal of Applied Mechanics, 35(2), 379–386.
4. Anderson, T. L. (2005), Fracture Mechanics: Fundamentals and Applications, CRC Press.
5. Suresh, S. (2004), Fatigue of Materials, Cambridge University Press.
6. Faber, K. T.; Evans, A. G. (1983), "Crack deflection processes—I. Theory", Acta Metallurgica, 31(4), 565–576.
7. Rooke, D. P.; Cartwright, D. J. (1976), Compendium of stress intensity factors, HMSO.
8. ASTM E1820 — Standard Test Method for Measurement of Fracture Toughness.
9. ASTM E399 — Standard Test Method for Plane-Strain Fracture Toughness of Metallic Materials.
10. ISO 28079:2009 — Palmqvist method for cemented carbides.

---

## 16. Diğer Makalelerle Bağlantılar

| Makale | İlişki |
|---|---|
| **M.07** | Bıçak açısının gerilmelere etkisi (FEM/ANSYS) — von Mises, S1, S3 → gerilme yoğunluğu analizi |
| **M.10** | Neşter bıçağı geometri modeli — eğim açısı λ(x), temas alanı → K ile ilişkili |
| **M.13** | Baskı ve kayma kesimi — Tresca kırılma kriteri, Mod II/III, gerilme-kuvvet ilişkisi |
| **M.12** | Sebze kesim enerjisi — spesifik enerji, kırılma tokluğu konsepti |
| **M.23** | Kaplamalar — yüzey sertleştirme, mikro çatlak koruma |
| **M.24** | WC bıçaklar — düşük tokluk, yüksek sertlik dengesi |
| **M.26** | HSS vs WC — tokluk vs sertlik karşılaştırması |
| **M.28** | WC kırılma modları — 6 arıza modu, talaşlanma mekanizması |
| **M.29** | WC vs çelik performans — kırılma tokluğu perspektifi |
| **M.30** | 8 Çin çeliği — karbür yapısı ve çatlak başlatma |
| **M.31** | 6 çelik kategorisi — sertlik-tokluk dengesi |
| **M.33** | 9 bakım ipucu — çatlak yönetimi prensipleri |
| **M.34** | 10 malzeme kategorisi — K_IC perspektifinden değerlendirme |
| **M.35** | AHSS PM çelikleri — ince karbür, tokluk avantajı |

---

## 17. Kritik Öğrenimler

1. **Kırılma mekaniği, endüstriyel bıçak tasarımı ve arıza analizinin temel bilimidir** — Griffith'ten modern EPFM'ye kadar tüm konseptler bıçak kenarı davranışıyla doğrudan ilgilidir.

2. **K_IC (kırılma tokluğu) bıçak malzeme seçiminde HRC kadar önemlidir** — sertlik tek başına yeterli değildir, tokluk de dikkate alınmalıdır.

3. **Çatlak modları (I, II, III) farklı bıçak uygulamalarıyla eşleşir** — makaslama → Mod II, dilimleme → Mod III, general kesim → Mod I.

4. **PM çeliklerinin üstünlüğü kırılma mekaniği ile açıklanır** — ince karbürler = küçük başlangıç çatlakları = yüksek yorulma ömrü = düşük talaşlanma riski.

5. **Bıçak bakımı (bileme, depolama, hasar kontrolü) kırılma mekaniği prensiplerinin pratik uygulamasıdır** — başlangıç çatlak boyutunu minimize et, gerilme yoğunluğunu düşür, yorulma çevrimlerini izle.
