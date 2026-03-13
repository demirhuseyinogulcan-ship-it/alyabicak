# Makale 13: Baskı ve Kayma ile Kesim — Biyomalzeme Robotik Kesimi, Bölüm II: Kayma ve Baskı Kesimlerinde Kuvvet

**Orijinal Başlık:** Cutting, 'by Pressing and Slicing', Applied to the Robotic Cut of Bio-materials, Part II: Force during Slicing and Pressing Cuts  
**Yazarlar:** Debao Zhou*, Mark R. Claffee⁺, Kok-Meng Lee⁺, Gary V. McMurray*  
**Kurumlar:**  
- *Food Processing Technology Division, HES Laboratory, Georgia Tech Research Institute (GTRI), Atlanta, GA 30332  
- ⁺George W. Woodruff School of Mechanical Engineering, Georgia Institute of Technology, Atlanta, GA 30332  
**E-posta:** debao.zhou@gtri.gatech.edu, gary.mcmurray@gtri.gatech.edu, m.claffee@gatech.edu, kokmeng.lee@me.gatech.edu  
**Kaynak:** IEEE International Conference on Robotics and Automation (ICRA), Mayıs 2006  
**Dosya:** proje/Cutting_by_pressing_and_slicing_applied_to_the_r.pdf  
**Anahtar Kelimeler (orijinal):** robotics, blade cutting, slicing angle, sharpness  

**⚠️ NOT:** Bu makale iki parçalı bir serinin **Bölüm II**'sidir. Bölüm I [11] gerilme dağılımı modelini geliştirmiştir; bu makale o modeli temel alarak kesim kuvvetlerini analiz eder.

---

## İçindekiler
1. Özet (Abstract)
2. Giriş (Introduction)
3. Kesim Parametreleri Analizi (Cutting Parameter Analysis)
4. Simülasyon Sonuçları (Simulation Results)
5. Model Doğrulama (Model Validation)
6. Sonuçlar (Conclusions)
7. Sayısal Veriler ve Tablolar
8. Referanslar
9. Sınırlılıklar
10. Yeni Bilgiler ve Önceki Makalelerle Karşılaştırma
11. Diğer Makalelerle Bağlantılar
12. Kritik Öğrenimler

---

## 1. ÖZET (ABSTRACT)

**Yazarların orijinal ifadesiyle:**
> "In this paper, the influence of the blade edge-shape and its slicing angle on the cutting of biomaterials are formulated and discussed based on the stress analysis that has been presented in Part I."

**Çalışmanın kapsamı:**
- Bıçak kenarı şekli (blade edge-shape) ve kayma açısının (slicing angle) biyomalzeme kesimi üzerine etkisi
- Kesim kuvveti modellenmesiyle **optimal kayma açısı** formülize edilmiştir
- Amaç: İlerleme hızını (feed rate) maksimize ederken kesim kuvvetlerini minimize etmek
- Bıçak ile biyomalzeme arasındaki kesim kuvvetlerini **tahmin** etme yöntemi
- Biyomalzeme kesimini **otomatikleştirmek** için güçlü kuvvet kontrol algoritmaları tasarımının temeli

**Uygulama alanları:**
> "Robotics applications are becoming more and more common in non-traditional industries such as the **medical industry** including robotic surgery and sample microtoming as well as **food industry** that include the processing of meats, fruits and vegetables."

---

## 2. GİRİŞ (INTRODUCTION)

### 2.1 Endüstriyel Motivasyon

**İlk test yatağı:** Tipik bir kanatlı hayvan işleme tesisinde **kanat-omuz kesim operasyonu** (wing-shoulder cutting).

**Yazarların ifadesiyle:**
> "This cut is not only **difficult for the human operator and very labor intensive**, but it is also one that directly affects the **yield of the breast meat**; the most profitable margin item on a bird."

> "Cutting line workers are at high risk of developing **musculoskeletal disorders (MSDs)** which are often attributed to the forces, postures and repetition of the processing tasks."

### 2.2 Metal vs. Gıda Kesimi — Kritik Fark

**⚠️ ÖNEMLİ TEORİK AYRIŞMA:**

| Parametre | Metal Kesimi | Gıda Kesimi |
|:---:|:---:|:---:|
| **Talaş deformasyonu** | Plastik (kalıcı) | Elastik (geri dönüşümlü) |
| **Enerji depolama** | Talaşlar kalıcı enerji depolar | Talaşlar neredeyse **hiç enerji depolamaz** |
| **Formülasyon yaklaşımı** | Gerilme/kuvvet analizi | Enerji yöntemi — **kırılma tokluğu (fracture toughness)** kavramı |

**Yazarların ifadesiyle:**
> "Metal cutting creates plastically deformed offcuts which permanently store energy while the **elastically deformed food offcuts** (in materials such as cheese, fruit, etc) permanently store **almost no energy**."

### 2.3 Literatürdeki Temel Yaklaşımlar

| Yaklaşım | Araştırmacılar | Konu |
|:---:|:---:|:---:|
| **Enerji yöntemi (Fracture toughness)** | Mahvash & Hayward [3] | Kesim kuvveti-derinlik ilişkisi: deformasyon, kesim, yırtılma |
| **Enerji yöntemi** | Atkins et al. [4] | **Neden baskı+kayma kesimi, sadece baskıdan daha az kuvvet gerektirir** |
| **Enerji yöntemi** | Atkins & Mai [5] | Biyomalzemelerin kırılma tokluğu deneysel değerleri |
| **Gerilme dağılımı** | Kamyab et al. [6] | Tel ile peynir kesiminde gerilme ve kuvvet dağılımı |
| **Gerilme analizi** | Yoshihara & Matsumoto [7] | Ahşap kesme özellikleri — kayma modülü ve kayma dayanımı |
| **Keskinlik ve kavrama kuvveti** | McGorry et al. [9] | Cilalı/pürüzsüz/kaba bıçak → kavrama kuvveti ve kesim momenti |
| **Bıçak körelme çizelgeleri** | Szabo et al. [10] | Tekrarlı kullanımla körelme → kuvvet artışı → steeling programları |

### 2.4 McGorry et al. [9] Bulgusu — Keskinlik ve Kuvvet

**Yazarların ifadesiyle:**
> "They found that a **finely polished knife significantly reduced mean grip force and cutting moment** during the cutting operation."

Üç farklı bıçak keskinliği test edilmiştir:
1. **Polished** (cilalı) — en keskin
2. **Smooth** (pürüzsüz)
3. **Coarse** (kaba) — en az keskin

### 2.5 Szabo et al. [10] — Mutlak Keskinlik Ölçümü

Bıçağın carrageenan (karragin) hedefine kesildiğindeki **kesim alanı** → **mutlak keskinliğin** kantitatif ölçüsü olarak kullanılmıştır.

### 2.6 Bu Çalışmanın Farkı

**Yazarların ifadesiyle:**
> "Unlike the above methods that studied the blade sharpness in terms of gripping force, **this research uses internal stress** to describe the cutting mechanics and the sharpness of a set of blades."

---

## 3. KESİM PARAMETRELERİ ANALİZİ (CUTTING PARAMETER ANALYSIS)

### 3.1 Kesim Modeli ve Parametre Tanımları

**Şekil 1(a) — Basitleştirilmiş kesim modeli:**
- Kesim kuvveti **P**, yarı-sonsuz bir cismin (semi-infinite body) yüzeyine uygulanır
- xy düzlemi, yarı-sonsuz cismin sınırındadır
- **Pv** = z yönündeki kuvvet bileşeni (dikey/baskı)
- **Ph** = x yönündeki kuvvet bileşeni (yatay/kayma)
- **Kayma açısı α (slicing angle):** P'nin pozitif z yönünden ölçülen açısı

**⚠️ TANIMLAMA:** α = 0° → yalnızca dikey baskı (pressing only); α = 90° → yalnızca yatay kayma (slicing only)

**Şekil 1(b) — Bıçak parametreleri:**
- Bıçak, x eksenine paralel yönde sabit kesim kuvveti uygular
- yz düzleminde kesim kuvveti dağılımı:
  - **q** = maksimum kuvvet yoğunluğu (y ∈ [-s, s] aralığında)
  - Kuvvet, **-a** ve **a** noktalarına doğru doğrusal olarak sıfıra düşer
- **a** = bıçak kenarı genişliği (blade edge-width) — **yarım genişlik**
- **s** = bıçak şekli parametresi (blade shape)
- **w** = kuvvet dağılımı şekil parametresi

**Tüm konum koordinatları (x, y, z) a'ya göre normalize edilmiştir.**

### 3.2 Gerilme Dağılımı Matrisi

Kesim gerilmeleri; toplam kuvvet **P**, temas uzunluğu **l** ve bıçak parametreleri **(a, s)**'nin fonksiyonudur:

**Denklem (1) — Gerilme Tensörü:**

σ = (P / (l · a · w)) × [gerilme matrisi]

Burada:
- **fi (i = 1, …, 6)** = kesilecek malzemenin nihai gerilmesi τu ve bıçak parametreleri (a, l, w) fonksiyonları
- **α = 90°** (yalnızca teğetsel kuvvet) → yalnızca **τxy** ve **τxz** aktif
- **α = 0°** (yalnızca normal kuvvet) → **τxy** ve **τxz** sıfır

### 3.3 Asal Gerilmeler ve Maksimum Kayma Gerilmesi

**Denklem (2) — Öz-değer problemi:**
> s x = λx

Asal gerilmeler (σ₁, σ₂, σ₃) ve yönleri, öz-değerler ve öz-vektörler olarak elde edilir.

**Denklem (3) — Maksimum kayma gerilmesi:**
> τmn = ½(σm - σn), burada m, n = 1, 2 veya 3

### 3.4 Kırılma Başlatma (Fracture Initialization)

**Tresca kırılma kriteri [14]:**

**Denklem (4):**
> τmax = Max[|τ₁₂|, |τ₂₃|, |τ₁₃|] ≥ τu / Ks

Burada:
- **τu** = nihai kayma dayanımı (ultimate shear strength) — malzeme için sabit kabul edilir
- **Ks** = çentik gerilme yoğunlaşma faktörü (notch stress concentration factor)

#### İki Kesim Durumu

| Durum | Ks Değeri | Açıklama |
|:---:|:---:|:---:|
| **Kırılma öncesi (Pre-fracture)** | **Ks = 1** | Tüm gerilmeler deformasyon kaynaklı |
| **Kırılma sonrası (Post-fracture)** | **Ks = τu / τo** | τo = kırılma sonrası nihai gerilme |

**Denklem (5):**
> Ks = τu / τo = FFracture / FCutting

### 3.5 Kırılma Kuvveti Formülü

**Denklem (7):**
> Pu = (τu · Ks · l) / f₈(yu, zu, a, w, α)

Eğer bıçak-malzeme göreli konumu sabit kalırsa, τmax'ın oluştuğu konum değişmez → **P ile α arasında doğrudan ilişki** kurulabilir.

### 3.6 Göreli Keskinlik Faktörü (Relative Sharpness Factor — η)

**⚠️ İLK KEZ KANTİTATİF KESKİNLİK TANIMI (Analitik):**

**Denklem (8):**
> η = Ks + f₈(yu, zu, a, w, αc)

**Denklem (9):**
> Pu = η · τu · l / Ku

#### Keskinlik Ölçüm Prosedürü

| Adım | İşlem |
|:---:|:---:|
| **1** | Referans bıçak (nominal blade) seçilir, kesim kuvveti **Pu⁰** kaydedilir |
| **2** | Referans keskinlik hesaplanır: **η₀ = Pu⁰ / Ku** |
| **3** | Diğer bıçakların göreli keskinliği: **η = η₀ · (Pu / Pu⁰)** |
| **4** | Maksimum izin verilen kuvvet **Puf** ile en kör keskinlik tanımlanır: **ηf = η₀ · (Puf / Pu⁰)** |

#### Keskinlik Seviye Sınıflandırması (κ)

**Formül:**
> κ = int[n × (η - η₀) / (ηf - η₀) + 1]

Burada:
- **n** = kullanıcı tanımlı seviye sayısı
- **int(#)** = en yakın tam sayıya yuvarlama
- **Seviye 1** = η₀ = 1 (referans keskinlik)
- Bıçak **n seviyeye** sınıflandırılabilir

**⚠️ MAKALE 09 (BSI) İLE KARŞILAŞTIRMA:** BSI = kenar yarıçapı tabanlı (mikroskobik ölçüm), buradaki η = kuvvet tabanlı (makroskobik ölçüm). İki yaklaşım tamamlayıcıdır: BSI fiziksel durumu, η fonksiyonel performansı ölçer.

---

## 4. SİMÜLASYON SONUÇLARI (SIMULATION RESULTS)

### 4.1 Simülasyon Parametreleri

| Parametre | Değer |
|:---:|:---:|
| **a** (yarım kenar genişliği) | **1** (normalize) |
| **w** (şekil parametresi) | **0.85** |
| **P/l** (kuvvet/temas uzunluğu) | **1** (normalize) |
| **Test açıları** | **α = 0° ve 90°** |

### 4.2 ⚠️ TABLO 1 — Olası Maksimum Gerilme Konumları ve Değerleri

**Normalize edilmiş gerilme değerleri (P/l = 1 için):**

| Konum | (y/a, z/a) | σx | σy | σz | τxy | τyz | τxz |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **(i)** | (0.00, 0.00) | -0.32 | -0.54 | -0.54 | 0 | 0 | 0.54 |
| **(ii)** | (-0.85, 0.00) | -0.32 | -0.54 | -0.54 | 0.60 | 0 | 0.54 |
| **(iii)** | (-0.93, 0.00) | -0.15 | -0.25 | -0.25 | 0.72 | 0 | 0.25 |
| **(iv)** | (-0.93, 0.37) | -0.14 | -0.25 | -0.25 | 0.28 | -0.16 | 0.23 |

### 4.3 Kayma Açısına Göre Gerilme Değişimi (Konum ii)

α = 0° → 90° değişiminde (y/a = -0.85, z/a = 0.00):

| Parametre | α = 0° | α = 90° | Davranış |
|:---:|:---:|:---:|:---:|
| **τxy, τxz** | 0 | Maksimum büyüklüğe | Artar |
| **τyz** | 0 | 0 | Değişmez |
| **σx, σy, σz** | Maksimum büyüklükte | 0 | Azalır |
| **Asal gerilmeler** | (-0.32, -0.54, -0.54) | (0.81, 0, -0.81) | Değişir |
| **Maks. kayma gerilmeleri** | (0.11, 0, 0.11) | (0.81, 0.4, 0.4) | **Önemli ölçüde artar** |

### 4.4 ⚠️ KRİTİK BULGU — Kırılma Modları ve Açı Eşiği

**İki farklı kırılma modu tespit edilmiştir:**

| Açı Aralığı | Kırılma Modu | Kırılma Tipi | Konum | Açıklama |
|:---:|:---:|:---:|:---:|:---:|
| **α = 0° — ~10°** | **Mode II (KII)** | Kenar kayma kırılması (edge-sliding fracture) | **(iv)** — yüzey altı (z ≠ 0) | τyz nedeniyle |
| **α = ~10° — 90°** | **Mode III (KIII)** | Düzlem dışı yırtılma (out-of-plane tearing) | **(ii)** — yüzey üzerinde (z = 0) | τxy ve τxz nedeniyle |

**⚠️ EN ÖNEMLİ BULGU:**

**Yazarların ifadesiyle:**
> "The required force to cut **by compression only** is **far larger** than the force required by **both compression and slicing**."

> "**Type III fracture requires considerably less force than Type II fracture.**"

**⚠️ [ÇAKIŞMA DEĞİL — YENİ TEORİK TEMEL]:** Bu bulgu, Makale 10'daki "slide cutting" deneylerinde neden #10 neşterin (yüksek inklinasyon açısı = kayma bileşeni) en düşük kuvveti gösterdiğini açıklar. Ayrıca Makale 08'deki Japon bıçak tekniği "katsuramuki" (kayma kesimi) prensibini doğrular.

### 4.5 Kuvvet Bileşenleri Analizi

**Şekil 5 sonuçları:**
- Mode III kırılmada **Ph (yatay/kayma kuvveti) büyük ölçüde değişmez** ve toplam kuvvete eşittir
- α artışı ile toplam kuvvet **dramatik olarak azalır**

### 4.6 Bıçak Şekli Etkisi (Blade Shape — w parametresi)

**Şekil 7 sonuçları:**

**Yazarların ifadesiyle:**
> "By keeping the external force unchanged, when the force distribution changes from **constant intensity to linear intensity**, the maximum magnitude of all the induced stresses **increases**. This leads to an increase in the magnitude of the maximum induced shear stress."

**Sonuç:**
> "The external force to realize cutting fracture is **reduced**, i.e. **the knife sharpness is increased**."

**Anlamı:** Kuvvet dağılımı sabit yoğunluktan (geniş düz kenar) doğrusal yoğunluğa (sivri kenar — küçük w değeri) değiştiğinde → aynı dış kuvvetle daha yüksek gerilme üretilir → **daha az kuvvetle kesim başlar** → etkin keskinlik artar.

### 4.7 Temas Uzunluğu ve Kenar Genişliği Etkisi

**l (temas uzunluğu) ve a (kenar genişliği) etkisi:**
> "If l and a increase, the distributed force intensity will decrease. In order to realize the cut, **larger force must be applied**."

---

## 5. MODEL DOĞRULAMA (MODEL VALIDATION)

### 5.1 FEM Doğrulaması (ANSYS)

| Parametre | Değer |
|:---:|:---:|
| **Yazılım** | ANSYS Finite Element |
| **Elastisite modülü (E)** | **93,259.3 psi** (≈ 643 MPa) |
| **Poisson oranı (ν)** | **0.25** |
| **Model** | Büyük küp — yarı-sonsuz cismin yarısı, tabandan sabitlenmiş |
| **Kuvvet** | Üst yüzeyin ortasına dağıtılmış kuvvet |
| **Test durumları** | α = 0° ve α = 90° |

**FEM sonuçları (Şekil 8-9):**
- α = 0° (yalnızca normal kuvvet): τxy ve τxz her zaman sıfır; yalnızca σx, σy, σz ve τyz sıfır olmayan → **Analitik model ile tutarlı**
- α = 90° (yalnızca teğetsel kuvvet): τxy ve τxz sıfır olmayan değerlere sahip → **Analitik model ile tutarlı**

### 5.2 Deneysel Doğrulama

#### Deney Düzeneği

| Bileşen | Detay |
|:---:|:---:|
| **Robot** | ABB IRB 140 [15] — hareket üretimi, hız kontrolü, mesafe ölçümü |
| **Kuvvet sensörü** | ATI Force/Torque sensor [16] — kuvvet ölçümü |
| **Kesim hızı** | **0.5 mm/s** (çok düşük hız) |
| **Veri kaydı** | Merkezi bilgisayar |
| **Bıçak** | Jilet bıçağı (razor blade) |

#### Test Malzemeleri

| Malzeme | Deney Türü |
|:---:|:---:|
| **Fırınlık patates (baking potato)** | Basınç kesimi + farklı kayma açılarında kesim |
| **Tavuk göğüs eti (chicken breast)** | Basınç kesimi |

#### Sonuçlar (Şekil 11-13)

**Şekil 11:** Kuvvetin temas uzunluğu ile değişimi (patates — basınç kesimi)
**Şekil 12:** Tavuk göğüs eti kesiminde kuvvet-deplasman profili
**Şekil 13:** Farklı kayma açılarında patates kesim kuvvetleri — **deneysel veri ve teorik tahmin karşılaştırması**

**Yazarların ifadesiyle:**
> "A **good match** is observed in both force direction."

### 5.3 Robotik Kuvvet Kontrolü Uygulaması

**Şekil 14:** Biyomalzeme kesim operasyonu kontrol şeması:

```
İstenen Kuvvet → [Kuvvet Kontrolcüsü] → [Pozisyon Kontrolcüsü] → [Robot] → Gerçek Pozisyon
                          ↑                                                    ↓
                     Gerçek Kuvvet ←────────────────────────────────────────────
```

Teorik kuvvetler, robotik kesim otomasyonunda kuvvet kontrol döngüsünde **istenen kuvvet (desired force)** olarak kullanılabilir.

---

## 6. SONUÇLAR (CONCLUSIONS)

**Yazarların orijinal ifadesiyle, 6 ana sonuç:**

> **1)** "The relationship between the cutting force and internal stress is established."

> **2)** "At the initialization of the cutting fracture, the cutting force P is **proportional to the contact length l**."

> **3)** "At the initialization of fracture, the cutting force P is **not simply proportional to the width of the blade edge a**. Edge shape and edge width have the **combined influence** on fracture force. For the same edge width, the external force is proportional to the maximum force intensity which the edge shape can generate."

> **4)** "For **smaller slicing angles**, the cutting fracture is due to shear force τyz (**Mode II**). For **larger slicing angles**, the cutting fracture is due to shear force τxy and τxz (**Mode III**). **Type III fracture requires considerably less force than Type II fracture.**"

> **5)** "By using the **relative sharpness factor** concept, blade sharpness can be quantified at certain slicing angles."

> **6)** "Based on the material properties, the knife sharpness properties and the interaction between the blade and the material, the required force to realize cutting **can be predicted**. This observation provides the principle to **optimize the cutting mechanism design** and the force control algorithm design for the automation of bio-material cutting operations."

### Gelecek Çalışma

> "The stress intensity factors KII and KIII will be analyzed and quantified. The influence of the knife relative velocity to the material will also be investigated."

---

## 7. SAYISAL VERİLER VE TABLOLAR — ÖZET

### Tablo 1: Maksimum Gerilme Konumları (Normalize edilmiş)

| Konum | (y/a, z/a) | σx | σy | σz | τxy | τyz | τxz |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| (i) | (0.00, 0.00) | -0.32 | -0.54 | -0.54 | 0 | 0 | 0.54 |
| (ii) | (-0.85, 0.00) | -0.32 | -0.54 | -0.54 | 0.60 | 0 | 0.54 |
| (iii) | (-0.93, 0.00) | -0.15 | -0.25 | -0.25 | 0.72 | 0 | 0.25 |
| (iv) | (-0.93, 0.37) | -0.14 | -0.25 | -0.25 | 0.28 | -0.16 | 0.23 |

### FEM Parametreleri

| Parametre | Değer |
|:---:|:---:|
| E (Elastisite modülü) | 93,259.3 psi (≈ 643 MPa) |
| ν (Poisson oranı) | 0.25 |

### Deney Parametreleri

| Parametre | Değer |
|:---:|:---:|
| Robot | ABB IRB 140 |
| Kuvvet sensörü | ATI F/T-16 |
| Kesim hızı | 0.5 mm/s |
| Test malzemeleri | Patates, tavuk göğsü |
| Bıçak | Jilet bıçağı |

### Kırılma Modu Geçiş Açısı

| Açı | Mod | Kuvvet |
|:---:|:---:|:---:|
| 0° — ~10° | Mode II (kenar kayma) | YÜKSEK |
| ~10° — 90° | Mode III (düzlem dışı yırtılma) | DÜŞÜK |

---

## 8. REFERANSLAR

| # | Referans | Konu |
|:---:|:---:|:---:|
| [1] | Dempsey & McGorry (2004) | Domuz omuz sökme operasyonu ergonomisi |
| [2] | Hellan (1984) | Introduction to Fracture Mechanics |
| [3] | Mahvash & Hayward (2001) | Haptic rendering of cutting — kırılma mekaniği yaklaşımı |
| [4] | Atkins, Xu & Jeronimidis (2004) | **Baskı+kayma kesiminin neden daha az kuvvet gerektirdiği** — cheddar peyniri ve salam deneyleri |
| [5] | Atkins & Mai (1985) | Elastic and Plastic Fracture — biyomalzeme kırılma tokluğu değerleri |
| [6] | Kamyab, Chalranarti & Williams (1998) | Tel ile peynir kesimi — gerilme ve kuvvet dağılımı |
| [7] | Yoshihara & Matsumoto (2005) | Ahşap kayma özellikleri — düzlem içi kayma testi |
| [8] | Tech Edge (2005) | Bıçak kenar mikro yapısı dokümantasyonu |
| [9] | McGorry, Dowd & Dempsey (2005) | Bıçak yüzey işlemi ve kenar açısının et kesim kuvvetlerine etkisi |
| [10] | Szabo, Radwin & Henderson (2001) | Bıçak körelme ile operatör yorulması ve steeling programları |
| [11] | Zhou, Claffee, Lee & McMurray (2006) | **Bölüm I:** Gerilme dağılımı modelleme (ICRA06) |
| [12] | Zhou, Claffee, Lee & McMurray (2005) | Biyomalzeme basınç kesimi modelleme — göreli keskinlik tanımı |
| [13] | Sadd (2005) | Elasticity: Theory, Applications, and Numerics |
| [14] | Charlles & Robert (1963) | Handbook of Stress and Strength — Tresca kriteri |
| [15] | ABB (2000) | IRB 140 Product Manual |
| [16] | ATI (1998) | ISA F/T-16 Force/Torque sensor manual |

---

## 9. MAKALENİN SINIRLILIKLARI

1. **Yarı-sonsuz cisim varsayımı:** Gerçek malzemeler sonlu boyutlu — sınır etkileri modelleştirilmemiş
2. **İzotropik malzeme varsayımı:** Biyomalzemeler (et, sebze) genellikle anizotropik (Makale 12'deki lif yönelimi etkisi burada yok)
3. **Sabit τu varsayımı:** Malzemenin nihai kayma dayanımının sabit kabul edilmesi — gerçekte nem, sıcaklık, deformasyon hızıyla değişir
4. **Quasi-static (yarı-statik) analiz:** 0.5 mm/s çok düşük hız — endüstriyel hızlarda dinamik etkiler farklılık yaratabilir
5. **Elastik deformasyon varsayımı:** Plastik deformasyon ve kalıcı hasar modellenmemiş
6. **2D kuvvet dağılımı:** Bıçak kenarı boyunca kuvvet dağılımı idealize edilmiş (doğrusal-max-doğrusal)
7. **Bıçak aşınması modellenmemiş:** Tekrarlı kesimlerle bıçak geometrisi değişimi göz ardı
8. **Sınırlı deney:** Sadece patates ve tavuk göğsü — geniş biyomalzeme validasyonu yok
9. **KII ve KIII stress intensity factörleri** henüz kantitatif olarak analiz edilmemiş (gelecek çalışma)
10. **Bıçak hızı etkisi** incelenmemiş (gelecek çalışma)
11. **Sürtünme ayrıştırması yok:** Makale 10'daki Ft = Fs + Ff ayrıştırması burada yapılmamış

---

## 10. YENİ BİLGİLER VE ÖNCEKİ MAKALELERLE KARŞILAŞTIRMA

### 10.1 Bu Makalede İlk Kez Karşılaşılan Kavramlar

| Yeni Kavram | Açıklama | Önem |
|------------|----------|------|
| **Mode II (KII) vs Mode III (KIII) kırılma** | Küçük kayma açısı = kenar kayma (Mode II, yüksek kuvvet); büyük kayma açısı = düzlem dışı yırtılma (Mode III, düşük kuvvet) | Kayma kesiminin neden daha az kuvvet gerektirdiğinin bilimsel açıklaması |
| **~10° geçiş açısı** | Mode II→III geçiş noktası | Endüstriyel bıçak tasarımı için kritik eşik |
| **Göreli keskinlik faktörü (η)** | Kuvvet tabanlı kantitatif keskinlik ölçümü | BSI'ye (kenar yarıçapı bazlı) tamamlayıcı yaklaşım |
| **Keskinlik seviye sınıflandırması (κ)** | n-seviyeli bıçak keskinlik kategorileri | Endüstriyel kalite kontrol için pratik |
| **P ∝ l (kırılma başlangıcında)** | Kuvvet, temas uzunluğuyla doğru orantılı | Makale 10 ve 12'deki temas alanı bulgularını destekler |
| **P ∝ a ilişkisi karmaşık** | Kenar genişliği-kuvvet ilişkisi doğrusal değil — şekil ile birlikte etkili | Basit "geniş kenar = daha fazla kuvvet" genellemesi yanlış olabilir |
| **Doğrusal kuvvet dağılımı > sabit dağılım** | Sivri kenar (doğrusal) aynı kuvvetle daha yüksek gerilme üretir → daha kolay keser | BSI'deki kenar yarıçapı kavramını destekler |
| **Biyomalzeme elastik deformasyon** | Gıda talaşları enerji depolamaz — metalden temel fark | Gıda ve biyomalzeme kesim mekaniğinin metal kesimden farklılığı |
| **Robotik kuvvet kontrol döngüsü** | Teorik kuvvet → istenen kuvvet → robot kontrol | Otomasyon için temel |

### 10.2 Önceki Makalelerle Tutarlılık ve Çelişki Kontrolü

| Konu | Önceki Makaleler | Bu Makale | Durum |
|------|:---:|:---:|:---:|
| Kayma kesimi < baskı kesimi kuvveti | Makale 10: Slide cutting deneyleri | Mode III (kayma) << Mode II (baskı) kuvveti — matematiksel kanıt | ✅ Tutarlı — teorik temel sağlanmış |
| Temas alanı → kuvvet | Makale 10: A↑→Ft↑; Makale 12: 200→500mm² = 7.4× | P ∝ l; l ve a artışı → kuvvet artışı | ✅ Tutarlı |
| Sivri bıçak = kolay kesim | Makale 09: Küçük kenar yarıçapı = BSI düşük | Doğrusal kuvvet dağılımı (sivri) → düşük kuvvet | ✅ Tutarlı — farklı perspektiften aynı sonuç |
| Bıçak açısı ve kuvvet | Makale 07: Kağıt kesimde kritik açı 28° | Burada açı farklı tanım (slicing angle α ≠ wedge angle) ama prensipler uyumlu | ✅ Tamamlayıcı |
| Keskinlik ölçümü | Makale 09: BSI (kenar yarıçapı bazlı) | η (kuvvet bazlı göreli keskinlik) | ✅ Tamamlayıcı — iki farklı ama uyumlu yaklaşım |
| McGorry et al. bulgusu | Makale 09: Cilalı bıçak daha keskin | "Finely polished knife significantly reduced mean grip force" | ✅ Tutarlı |
| Basınç+kayma birleşik kesim | Makale 08: Katsuramuki (kayma kesimi) tekniği | α>10° → Mode III → önemli ölçüde düşük kuvvet | ✅ Tutarlı — Japon tekniğinin bilimsel temeli |

### 10.3 [ÇAKIŞMA] Kontrolü

**[ÇAKIŞMA] — KESİM KUVVETİ VE KENAR GENİŞLİĞİ (a):**

Makale 12'de (CIGR sebze çalışması) ve Makale 10'da (neşter), temas alanı arttıkça kuvvet doğrusal olarak artıyormuş gibi sunulmuştu. Bu makalede ise:

> **"The cutting force P is NOT simply proportional to the width of the blade edge a. Edge shape and edge width have the COMBINED influence on fracture force."**

Bu, önceki makalelerdeki basit "alan ↑ = kuvvet ↑" genellemesine **kısmi çelişki** oluşturur. Gerçek ilişki kenar şekli (w parametresi) ile birlikte karmaşıktır. **Aynı kenar genişliğinde, daha sivri profil (doğrusal kuvvet dağılımı) daha az kuvvet gerektirir.**

**Sonuç:** "Temas alanı arttıkça kuvvet artar" ifadesi **genel olarak doğru** ama mekanizma **sadece alan değil, alan + şekil + kuvvet dağılımı profili** birlikte belirler.

---

## 11. DİĞER MAKALELERLE BAĞLANTILAR

- **Makale 01** (Bıçak Geometrisi): Genel prensipler → Burada matematiksel modelle kanıtlanmış
- **Makale 03** (Bevel Açısı): Düşük açı = düşük kuvvet → Burada α>10° = Mode III = düşük kuvvet
- **Makale 06** (Rake Açısı): Pozitif rake → kolay kesim → Burada kayma bileşeni arttıkça kuvvet azalır — paralel ilke
- **Makale 07** (FEM Kağıt Kesimi): ANSYS ile kağıt kesim gerilme analizi → Burada da ANSYS ile biyomalzeme FEM — benzer yöntem
- **Makale 08** (Japon Bıçak): Katsuramuki kayma tekniği → **Burada kayma kesiminin (Mode III) baskıdan ÇOK DAHA AZ kuvvet gerektirdiğinin kanıtı**
- **Makale 09** (BSI): Kenar yarıçapı bazlı keskinlik → Burada η (kuvvet bazlı göreli keskinlik) — **tamamlayıcı iki metrik**
- **Makale 10** (Neşter Geometrisi): λ (inklinasyon) = kayma bileşeni → Yüksek λ = daha fazla kayma = Mode III = düşük kuvvet → **#10 neşterin neden en düşük kuvvete sahip olduğunun teorik açıklaması**
- **Makale 11** (Schneidkeil): Keilwinkel, Freiwinkel, Spanwinkel → Burada farklı terminoloji ama aynı prensipler
- **Makale 12** (Sebze Kesim Enerjisi): Temas alanı ve açı etkisi → Burada P ∝ l ve Mode II/III ayrışması ile teorik temel

---

## 12. KRİTİK ÖĞRENİMLER

1. **Kayma kesimi (slicing) baskıdan (pressing) ÇOK DAHA AZ kuvvet gerektirir** — Mode III (yırtılma) vs Mode II (kayma) kırılma
2. **~10° geçiş açısı:** α < 10° → yüzey altı kırılma (Mode II, yüksek kuvvet); α > 10° → yüzey kırılması (Mode III, düşük kuvvet)
3. **P ∝ l (kırılma başlangıcında):** Kesim kuvveti, temas uzunluğuyla doğru orantılı
4. **P ∝ a ilişkisi karmaşık:** Kenar genişliği tek başına yetmez — şekil (w) ile birlikte etkili
5. **Sivri kenar profili (doğrusal kuvvet dağılımı):** Aynı dış kuvvetle daha yüksek lokal gerilme → daha az kuvvetle kesim başlatma
6. **Göreli keskinlik faktörü (η):** Kuvvet bazlı kantitatif keskinlik ölçümü — BSI'ye tamamlayıcı
7. **Gıda ≠ metal:** Elastik vs plastik deformasyon — enerji depolama farklılığı
8. **Deneysel doğrulama:** ABB IRB 140 robot + ATI F/T sensör + patates/tavuk → teorik model deneylerle "good match"
9. **Robotik otomasyon temeli:** Teorik kuvvet tahminleri kuvvet kontrol döngüsüne entegre edilebilir
10. **[ÇAKIŞMA]:** Kesim kuvveti, kenar genişliğiyle basitçe orantılı DEĞİL — şekil profili de belirleyici (önceki makalelerdeki "alan ↑ = kuvvet ↑" genellemesine kısmi istisna)
