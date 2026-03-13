# Makale 10: Neşter Bıçağı Kesim Kenarı Geometrisinin Modellenmesi

**Orijinal Başlık:** Modeling the cutting edge geometry of scalpel blades  
**Kaynak:** Pralav P Shetty, Ryan W Hatton, Andrew C Barnett, Andrew J Homich, Jason Z Moore  
**Kurum:** Department of Mechanical and Nuclear Engineering, The Pennsylvania State University, USA  
**Sorumlu Yazar:** Jason Z Moore, 318 Leonhard Building, University Park, PA 16802, USA — jzm14@psu.edu  
**Dosya:** proje/Modelingthecuttingedgegeometryofscalpelblades_personalcopy (1).pdf  
**Anahtar Kelimeler (orijinal):** Cutting, Surfaces  

---

## İçindekiler
1. Özet (Abstract)
2. Giriş (Introduction)
3. Neşter Geometri Modeli (Scalpel Geometry Model)
4. Phantom Jel Kayma Kesim Deneyi (Phantom Gel Slide Cutting Experiment)
5. Analiz ve Sonuçlar (Analysis and Results)
6. Sonuçlar (Conclusions)
7. Tablo ve Sayısal Veriler
8. Notasyon (Appendix — Notation)
9. Referanslar
10. Sınırlılıklar
11. Yeni Bilgiler ve Önceki Makalelerle Karşılaştırma
12. Diğer Makalelerle Bağlantılar
13. Kritik Öğrenimler

---

## 1. ÖZET (ABSTRACT)

**Yazarların orijinal ifadesiyle:**
> "Scalpel blades are commonly used in surgery to perform invasive medical procedures, yet there has been limited research on the geometry that makes up these cutting instruments. Improved understanding of a scalpel's cutting edge geometry can lead to smaller and more effective tissue cutting instruments."

**Çalışmanın kapsamı:**
- Herhangi bir sürekli türevlenebilir (continuously differentiable) neşter kesim kenarı yüzeyi için **rake angle (α)** ve **inclination angle (λ)** cinsinden genelleştirilmiş geometrik model geliştirilmiştir.
- **Scalpel-tissue contact area (A)** parametresi de incelenmiştir.
- Yaygın kullanılan dört neşter bıçağı (**#10, #11, #12, #15**) birbirleriyle karşılaştırılmış ve phantom jel ile kesim kuvvetleri ölçülmüştür.

**Ana bulgu:**
> "#10 bıçağı en düşük toplam kesim kuvvetini (total cutting force) göstermiş, ardından #15, #11 ve #12 gelmiştir. #10 bıçağı aynı zamanda en düşük normalize edilmiş kesim kuvvetini de göstermiş, ardından #15, #12 ve #11 gelmiştir."

---

## 2. GİRİŞ (INTRODUCTION)

### 2.1 Klinik Motivasyon

Neşter bıçakları, "ectomy" (kesmek) son ekiyle biten çeşitli invaziv cerrahi prosedürlerde kullanılır:
- **Lumpectomy** — kanserli meme dokusunun çıkarılması
- **Prostatectomy** — prostatın çıkarılması

**Klinik problemler:**

| Problem | Sayısal Veri | Kaynak |
|---------|:---:|:---:|
| Lumpectomy sonrası pozitif margin oranı | **%20 - %40** | Pleijhuis et al. [1] |
| Pozitif margin → ek cerrahi gereksinimi | Mutilating ek prosedürler | Jacobs [2] |
| Prostatektomi hataları → yan etkiler | İmpotans ve inkontinans artışı | Catalona et al. [3], Ong et al. [4] |

**Yazarların ifadesiyle:**
> "In 20% to 40% of patients positive margins are found (margins contain cancerous tissue) requiring the need for additional mutilating surgical procedures to obtain tumor free margins."

### 2.2 MIS (Minimally Invasive Surgery) İhtiyacı

> "There is a continual drive in MIS procedures to reduce the number and size of the abdominal incisions by using smaller instruments to reduce pain, shorten length of stay in hospital, allow for faster return to activity and create better cosmetic outcomes."

**Temel problem:** Küçük enstrümanlar yüksek doku kesim kuvvetlerine dayanacak kadar büyük yapılmak zorundadır. **Daha etkili kesim kenarı tasarımı** → doku kesim kuvvetini azaltır → daha küçük MIS enstrümanları mümkün olur.

### 2.3 Mevcut Literatür Boşluğu

- Mevcut çalışmalar: İntraoperatif kan kaybı, ameliyat süresi, maliyet, iyileşme süresi — ama **neşter geometrisi** değil
- Chanthasopeephan et al. [9]: Neşter-karaciğer etkileşim kuvvetini ANSYS FEM ile modellemiş ama **farklı neşter geometrilerini incelememiş**
- İğne (needle) kesim geometrisi λ ve α cinsinden iyi tanımlanmış [10, 11] — ama neşter için böyle bir çalışma **yoktu**

**Yazarların ifadesiyle:**
> "A study has yet to focus on the work conducted in this paper; defining the geometry of a scalpel cutting edge in terms of λ, α and the contact surface area, A."

### 2.4 Üç Temel Kesim Yöntemi (Scalpel Incision Methods)

Neşter bıçağı kesim yönünü değiştirerek üç temel insizyon yöntemi kullanılır:

| Yöntem | İngilizce | Açıklama |
|--------|-----------|----------|
| **Baskı Kesimi** | Press cutting | Bıçak dikey olarak dokuya bastırılır |
| **Kayma Kesimi** | Slide cutting | Bıçak doku boyunca kaydırılarak keser |
| **Kazıma Kesimi** | Scrape cutting | Bıçak yüzey boyunca kazıyarak keser |

---

## 3. NEŞTER GEOMETRİ MODELİ (SCALPEL GEOMETRY MODEL)

### 3.1 Temel Yaklaşım

Neşter kesim kenarı geometrisi, oblik kesim (oblique cutting) için kullanılan aynı parametrelerle karakterize edilmiştir:
- **λ** — İnklinasyon açısı (Inclination angle)
- **α** — Rake açısı (Rake angle)
- **A** — Temas yüzey alanı (Contact surface area)

### 3.2 İnklinasyon Açısı (Inclination Angle — λ)

#### Koordinat Sistemi

- Kesim kenarı şekli **sürekli türevlenebilir polinom** (continuously differentiable polynomial) olarak ifade edilir:

  **y = f(x)** ... (Denklem 1)

  Burada:
  - **x** = neşter ucu (point O) noktasından ölçülen kesim derinliği (cut depth)
  - **y** = kesim yönü (cutting direction), x'e dik
  - **v(x) = {0, 1, 0}** — y-yönü birim vektörü (cutting direction unit vector)
  - **c(x) = {1, 0, 0}** — x-yönü birim vektörü
  - **s(x) = {1, |f'(x)|, 0}** — f(x)'e teğet vektör (tangent vector)

#### Formül Türetmesi

İnklinasyon açısı, **Pr düzlemi** (normal vektörü v(x)) ile **s(x) vektörü** arasındaki açıdır:

**sin(λ(x)) = |s(x) · v(x)| / (|s(x)| · |v(x)|)** ... (Denklem 2)

s(x) ve v(x) değerleri yerine konarak:

**λ(x) = sin⁻¹(|f'(x)| / √(1 + |f'(x)|²))** ... (Denklem 3)

Bu ifade daha da sadeleştirilerek:

**λ(x) = tan⁻¹(|f'(x)|)** ... (Denklem 4)

**⚠️ Kritik sonuç:** İnklinasyon açısı, yalnızca kesim kenarı eğrisinin türevine (eğimine) bağlıdır.

### 3.3 Rake Açısı (Rake Angle — α)

#### Tanım ve Referans Düzlem Seçimi

Klasik tanım: Rake açısı, **Pr düzlemi** ile **Aγ düzlemi** arasındaki açıdır, **Pn düzleminde** ölçülür; alt rake yüzü (bottom rake face) referans düzlem olarak alınır.

**Yazarların sadeleştirmesi:** Bu çalışmada x-y düzlemi referans olarak kullanılmıştır. Rake açısı; **a(x)** vektörü (s(x) ve v(x)'in çapraz çarpımı) ile **b(x)** vektörü (s(x) ve nγ(x)'in çapraz çarpımı) arasındaki açı olarak hesaplanmıştır.

#### Formüller

**a(x) = s(x) × v(x) = {0, 0, 1}** ... (Denklem 5)

**b(x) = s(x) × nγ(x)**  
= {|f'(x)|cos(θ/2), -cos(θ/2), sin(θ/2)cos(tan⁻¹(|f'(x)|)) + |f'(x)|sin(θ/2)sin(tan⁻¹(|f'(x)|))}  
... (Denklem 6)

Burada **nγ(x)** = {-sin(θ/2)sin(tan⁻¹(|f'(x)|)), sin(θ/2)cos(tan⁻¹(|f'(x)|)), cos(θ/2)}

ve **θ(x)** = üretici tarafından kesim kenarına bilenmiş açı (angle ground into cutting edge)

> "θ is the angle ground into the cutting edge; which is the rake angle of the blade **overestimated** by a value of θ/2."

#### Rake Açısı Formülü

**α(x) + θ(x)/2 = cos⁻¹(a(x) · b(x) / (|a(x)| · |b(x)|))** ... (Denklem 7)

Sadeleştirilmiş hali:

**α(x) = 90° - θ(x)/2** ... (Denklem 8)

**⚠️ ÇOK ÖNEMLİ SONUÇ:** Rake açısı **yalnızca θ'ya** (bilenmiş açı) bağlıdır — kesim kenarı şeklinden (f(x)) bağımsızdır. Daha düşük θ → daha yüksek rake açısı → daha keskin bıçak.

### 3.4 Temas Yüzey Alanı (Contact Surface Area — A)

#### Kuvvet Ayrıştırması

Toplam doku kesim kuvveti (Ft) iki bileşene ayrılır:

**Ft = Fs + Ff**

| Bileşen | İngilizce | Açıklama |
|---------|-----------|----------|
| **Fs** | Tissue stiffness force | Doku sertlik kuvveti |
| **Ff** | Tissue friction force | Doku sürtünme kuvveti |

**A(x)** (temas yüzey alanı), **Ff**'nin büyüklüğüne doğrudan katkıda bulunan ana faktördür.

#### Ölçüm Yöntemi

3 boyutlu **CAD modelleri** kullanılarak her bir neşter bıçağı için A(x) değeri, kesim derinliği x'in fonksiyonu olarak hesaplanmıştır.

---

## 4. PHANTOM JEL KAYMA KESİM DENEYİ (PHANTOM GEL SLIDE CUTTING EXPERIMENT)

### 4.1 Deney Amacı

Dört neşter bıçağının (#10, #11, #12, #15) kesim kuvvetleri ile geometrileri arasındaki ilişkiyi araştırmak.

### 4.2 Deney Düzeneği

| Parametre | Değer/Detay |
|-----------|-------------|
| **Motor** | Lineer motor (Dunkermotoren, Almanya) |
| **Kuvvet sensörü** | 6 serbestlik dereceli (6 DOF), Nano17 (ATI Industrial Automation, NC) |
| **Sensör montajı** | Vidalı sürüşlü ötelenen taban üzerinde |
| **Phantom jel malzeme** | Polyvinyl chloride (PVC) phantom jel |
| **Jel oranı** | **5:1 plastik-yumuşatıcı oranı** (M.F. Manufacturing Company) |
| **Neşter bıçakları** | Surgical Carbon Steel — Havel (Cincinnati, Ohio) |
| **Kesim hızı** | **2.54 mm/s** (LabView ile hassas kontrol) |
| **Başlangıç kesim derinliği** | **6 mm** |
| **Neşter-kesim açısı** | x-ekseni, kesim yönü (y-ekseni) ile **90°** |
| **Kontrol yazılımı** | LabView |
| **Alt yüzey sabitleme** | Çift taraflı bant (double sided tape) |

### 4.3 Phantom Jel Numune Boyutları

| Parametre | Değer |
|-----------|:---:|
| **Numune boyutu** | **119 mm × 66 mm × 19 mm** |
| **İlk kesim pozisyonu** | Kenardan **20.3 mm** |
| **Ardışık kesimler arası mesafe** | **12.7 mm** |
| **Numune başına kesim sayısı** | **3** |

### 4.4 Deneme Sayıları

| Parametre | Değer |
|-----------|:---:|
| **Toplam deneme** | **12** |
| **Her bıçak için** | **3 deneme** |
| **Bıçak sayısı** | **4** (#10, #11, #12, #15) |

### 4.5 Sınır Koşulları ve Tekrarlanabilirlik

**Yazarların ifadesiyle:**
> "All the phantom gel samples were constrained at the bottom surface by the means of double sided tape to provide consistent boundary conditions which is crucial for repeatable machining results as illustrated by Shih et al. [13] in machining elastomers."

İlk kesim kenardan 20.3 mm, ardışık kesimler 12.7 mm arayla → sınır etkilerini minimize etmek ve her kesimi önceki kesimden izole etmek amacıyla.

---

## 5. ANALİZ VE SONUÇLAR (ANALYSIS AND RESULTS)

### 5.1 Kesim Kenarı Boyutlarının Analizi (Cutting Tool Dimensions)

#### Görüntü İşleme Yöntemi

1. Bıçak dış sınırlarının izlenmesi (image processing — exterior boundary tracing)
2. Piksel verisi → uzunluk ölçümüne dönüştürme: **piksel/nL oranı L bilinen uzunluğa bölünerek**
3. Orijin **O** noktası: neşter kesim kenarı ucu (cutting edge tip)
4. Çeşitli polinom uydurmaları → R² değerleri: **0.997 ile 0.999 arasında**

**Yazarların ifadesiyle:**
> "This technique can be extended to any blade with a continuously differentiable cutting edge geometry."

### 5.2 Kesim Kenarı Polinomları ve Bilenmiş Açılar

**⚠️ TABLO 1 — Sayısal veriler (Table 1: List of scalpel cutting edge polynomials and measured ground angles)**

| Bıçak # | Polinom f(x) (x mm cinsinden) | Ortalama θ ± σ (Derece) |
|:---:|:---:|:---:|
| **#10** | 7.810×10⁻³ x³ - 2.071×10⁻¹ x² + 1.831 x | **26.43° ± 0.74°** |
| **#11** | 2.658×10⁻¹ x | **14.07° ± 2.40°** |
| **#12** | 3.965×10⁻² x² - 8.523×10⁻¹ x | **20.39° ± 1.36°** |
| **#15** | -1.313×10⁻³ x⁴ + 4.119×10⁻² x³ - 4.509×10⁻¹ x² + 1.964 x | **27.53° ± 1.07°** |

**θ ölçüm yöntemi:** Zeiss Axio Optik Mikroskobu (Zeiss Axio Optical Microscope)

**θ'nın x ile ilişkisi:**
> "This value of θ changed minimally in relationship to x; therefore, it was assumed in the calculations of λ and α that θ was constant."

#### Kesim Kenarı Geometri Karakteristikleri

| Bıçak # | Geometri Özelliği |
|:---:|:---:|
| **#10** | En yüksek başlangıç pozitif eğim (initial positive slope) |
| **#11** | En küçük eğim büyüklüğü; **doğrusal** kesim kenarı (lineer — sabit eğim) |
| **#12** | Tırpan (scythe) şeklinde — **negatif başlangıç eğimi** olan TEK bıçak |
| **#15** | En yüksek başlangıç pozitif eğim; **konveksten konkava** eğrilik değişimi gösteren TEK bıçak |

### 5.3 Kesim Derinliği Analizi (Cut Depth Analysis)

**Problem:** Başlangıç kesim derinliği tüm deneylerde 6 mm olmasına rağmen, phantom jelin esnekliği (compliance) bu değeri sürekli değiştirmiştir. Farklı neşter geometrileri farklı miktarlarda doku sapmasına (tissue deflection) neden olmuştur.

**Çözüm yöntemi:**
1. Kesim olukuna (cut groove) mürekkep dökülmüştür
2. Mürekkep kuruyunca, bıçakla kesit alınarak kesim derinliği profili oluşturulmuştur
3. Üst ve alt kesim yüzeyleri sayısallaştırılmıştır (digitized)
4. İki eğri arasındaki dikey fark = **gerçek kesim derinliği x, kesim uzunluğu (y) fonksiyonu olarak**

### 5.4 Geometrik Model Sonuçları

#### İnklinasyon Açısı (λ) Sonuçları (Figure 12)

| Bıçak # | İnklinasyon Açısı Davranışı |
|:---:|:---:|
| **#10** | O noktasında yüksek başlangıç; **hızlı düşüş** → yüksek derinliklerde #12 ve #11'den düşük |
| **#11** | **Sabit** inklinasyon açısı (doğrusal kesim kenarı nedeniyle, eğim sıfır) |
| **#12** | Azalan ama #10 ve #15'e göre **daha kademeli** düşüş |
| **#15** | O noktasında yüksek başlangıç; **hızlı düşüş**; **x = 4 mm'de λ = 0°** (konveksten konkava geçiş nedeniyle) |

#### Rake Açısı (α) Sonuçları (Figure 13)

**⚠️ ÖNEMLİ BULGU:** Kesim kenarı şeklinden bağımsız olarak, her neşter bıçağının rake açısı **SABİTTİR.**

**Yazarların ifadesiyle:**
> "Irrespective of the shape of the cutting edge, the rake angle for scalpel blades remains constant as it is by definition measured in the plane Pn which always stays normal to the s(x) vector. Equation (8) captures this behavior as α is only a function of the ground angle or θ which has been assumed to be constant."

**Rake açısı sıralaması (yüksekten düşüğe = en keskinden en az keskine):**

| Sıra | Bıçak # | Rake Açısı (α = 90° - θ/2) | θ Değeri |
|:---:|:---:|:---:|:---:|
| 1 | **#11** | **82.97°** (hesaplanan) | 14.07° |
| 2 | **#12** | **79.81°** (hesaplanan) | 20.39° |
| 3 | **#10** | **76.79°** (hesaplanan) | 26.43° |
| 4 | **#15** | **76.24°** (hesaplanan) | 27.53° |

**⚠️ ÖNCEKİ MAKALELERLE ÖNEMLİ BAĞLANTI:** Daha düşük θ (bilenmiş açı) → daha yüksek rake açısı → daha keskin bıçak. α = 90° - θ/2 formülü, θ'nın doğrudan keskinliği nasıl belirlediğini matematiksel olarak kanıtlar.

#### Temas Yüzey Alanı A(x) Sonuçları (Figure 14)

| Bıçak # | A(x) Davranışı |
|:---:|:---:|
| **Tüm bıçaklar** | Kesim derinliği arttıkça yüzey alanı artar (yukarı trend) |
| **x = 10 mm'de en yüksek** | **#10** → #12 → #15 → #11 |
| **x < 4.66 mm'de en yüksek** | **#12** |

**Yazarların ifadesiyle:**
> "Scalpels with higher surface area will increase the friction between the scalpel and the tissue and therefore lead to higher Ft values."

### 5.5 Kayma Kesim Deneyi Sonuçları (Slide Cutting Experiment Results)

#### Genel Gözlemler (Figure 15)
- Tüm bıçaklarda başlangıçta **kuvvet artışı (initial spike)** — kırılma (fracture) mekanizması nedeniyle
- **y > 30 mm** sonrası nispeten **sabit kuvvet** bölgesine yerleşme
- Başlangıç 6 mm derinliğe rağmen, sabit kuvvet bölgesindeki ortalama kesim derinliği bıçaklar arasında farklılık göstermiştir

#### ⚠️ TABLO 2 — Kritik Sayısal Veriler (Table 2: Average values of crucial cutting parameters in the steady cutting force region)

**Sabit kuvvet bölgesi: y = 40 mm ile 100 mm arası**

| Bıçak # | Ort. x (mm) | Ort. A(x) (mm²) | Ort. λ(x) (°) | Ort. α(x) (°) | Ort. Ft (N) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **#10** | **4.29** | **29.37** | **45.33** | **63.57** | **0.52** |
| **#11** | **5.62** | **19.51** | **14.88** | **75.93** | **0.79** |
| **#12** | **6.48** | **52.14** | **30.32** | **69.61** | **1.17** |
| **#15** | **4.36** | **23.57** | **28.78** | **62.47** | **0.57** |

#### Sıralama Analizi

**Toplam kesim kuvveti (Ft) — düşükten yükseğe:**
1. **#10** → 0.52 N ✅ En düşük
2. **#15** → 0.57 N
3. **#11** → 0.79 N
4. **#12** → 1.17 N ❌ En yüksek

**Normalize edilmiş kesim kuvveti (Ft/x) — düşükten yükseğe:**
1. **#10** → En düşük ✅
2. **#15**
3. **#12**
4. **#11** ❌ En yüksek

**⚠️ SIRALAMA FARKI DİKKAT:** Toplam kuvvette #11 üçüncü sıradayken, normalize edilmişte sonuncu. Bunun nedeni #11'in en yüksek ortalama kesim derinliğine (5.62 mm) sahip olmasıdır — toplam kuvveti derinliğe bölünce normalize kuvveti yükselir.

### 5.6 Kesim Kuvvetini Belirleyen Faktörler

**Yazarların ifadesiyle:**
> "In conventional cutting a lower cutting force is able to be obtained by **reducing contact area** and **increasing rake and inclination angle**. This trend appears to also be true in scalpel tissue cutting."

**Kanıt:**
- **#10 bıçağı:** En yüksek ortalama inklinasyon açısı (45.33°) → **en düşük ortalama kesim kuvveti (0.52 N)**
- **#12 bıçağı:** En yüksek temas alanı (52.14 mm²) → **en yüksek ortalama kesim kuvveti (1.17 N)**

---

## 6. SONUÇLAR (CONCLUSIONS)

**Yazarların orijinal ifadesiyle:**

> "In this study, a generalized geometric model that describes the cutting edge of scalpel blades was developed."

**Temel çıktılar:**
1. Dört endüstri standardı neşter bıçağına (#10, #11, #12, #15) odaklanılmıştır
2. **λ (inklinasyon açısı)** için analitik çözüm: **Denklem (4) — λ(x) = tan⁻¹(|f'(x)|)**
3. **α (rake açısı)** için analitik çözüm: **Denklem (8) — α(x) = 90° - θ/2**
4. CAD modelleri ile **A (temas yüzey alanı)** phantom jel kesim deneyleri sırasında tahmin edilmiştir
5. Bu dört bıçağın geometrilerindeki benzerlikler ve farklılıklar, neşter-phantom jel etkileşimindeki farklılıklara yol açmıştır

**Yazarların gelecek çalışma notları:**
> "Further investigation is required in order to model the exact relation between these parameters and the cutting force."

> "The generalized analytical solutions developed to calculate the crucial cutting parameters provides for the first time, a quantitative technique to compare any scalpel blade cutting geometries."

---

## 7. TABLO VE SAYISAL VERİLER — ÖZET

### Tablo 1: Kesim Kenarı Polinomları ve Bilenmiş Açılar

| Bıçak # | f(x) | θ ± σ |
|:---:|:---:|:---:|
| #10 | 7.810×10⁻³x³ - 2.071×10⁻¹x² + 1.831x | 26.43° ± 0.74° |
| #11 | 2.658×10⁻¹x | 14.07° ± 2.40° |
| #12 | 3.965×10⁻²x² - 8.523×10⁻¹x | 20.39° ± 1.36° |
| #15 | -1.313×10⁻³x⁴ + 4.119×10⁻²x³ - 4.509×10⁻¹x² + 1.964x | 27.53° ± 1.07° |

### Tablo 2: Sabit Kesim Kuvveti Bölgesindeki Ortalama Değerler

| Bıçak # | x (mm) | A(x) (mm²) | λ(x) (°) | α(x) (°) | Ft (N) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| #10 | 4.29 | 29.37 | 45.33 | 63.57 | 0.52 |
| #11 | 5.62 | 19.51 | 14.88 | 75.93 | 0.79 |
| #12 | 6.48 | 52.14 | 30.32 | 69.61 | 1.17 |
| #15 | 4.36 | 23.57 | 28.78 | 62.47 | 0.57 |

### Hesaplanan Rake Açıları (α = 90° - θ/2)

| Bıçak # | θ | α (hesaplanan) |
|:---:|:---:|:---:|
| #11 | 14.07° | 82.97° |
| #12 | 20.39° | 79.81° |
| #10 | 26.43° | 76.79° |
| #15 | 27.53° | 76.24° |

---

## 8. NOTASYON (APPENDIX — NOTATION)

| Sembol | Tanım |
|:---:|:---:|
| **a** | Pn ve Pr düzlemlerinin kesişimi ile oluşan vektör |
| **A** | Neşter ile doku arasındaki temas yüzey alanı |
| **Aγ** | Normal vektörü nγ olan düzlem |
| **b** | Pn ve Aγ düzlemlerinin kesişimi ile oluşan vektör |
| **c** | Kesim derinliği x yönündeki birim vektör |
| **f** | Neşter kesim kenarı geometrisini tanımlayan sürekli türevlenebilir fonksiyon |
| **Ft** | Toplam neşter kayma kesim kuvveti (Total slide cutting force) |
| **Fs** | Sertlik neşter kayma kesim kuvveti (Stiffness force) |
| **Ff** | Sürtünme neşter kayma kesim kuvveti (Friction force) |
| **L** | Neşter geometrisindeki bilinen keyfi uzunluk |
| **nL** | Bilinen L uzunluğundaki piksel sayısı |
| **nγ** | Neşter rake yüzüne normal vektör |
| **O** | x-y düzlemi ve neşter kesim kenarı ucunun orijini |
| **Pn** | Normal vektörü s olan düzlem |
| **Pr** | Normal vektörü v olan düzlem |
| **s** | f'ye teğet vektör |
| **v** | Kesim yönü y'deki birim vektör |
| **x** | Neşter kesim derinliği |
| **y** | Neşter kesim uzunluğu ve kayma kesim yönü |
| **α** | Neşter kesim kenarı rake açısı |
| **λ** | Neşter kesim kenarı inklinasyon açısı |
| **θ** | Neşter üreticisi tarafından kesim kenarına bilenmiş açı |

---

## 9. REFERANSLAR

| # | Referans |
|:---:|:---:|
| [1] | Pleijhuis RG et al. "Obtaining Adequate Surgical Margins in Breast-Conserving Therapy..." Ann Surg Oncol. 2009; 16: 2717-30 |
| [2] | Jacobs L. "Positive margins: The challenge continues for breast surgeons." Ann Surg Oncol. 2008; 15: 1271-2 |
| [3] | Catalona WJ et al. "Potency, continence and complication rates in 1,870 consecutive radical retropubic prostatectomies." J Urol. 1999; 162: 433-8 |
| [4] | Ong AM et al. "Nerve sparing radical prostatectomy..." J Urol. 2004; 172: 1318-22 |
| [5] | Pallav K et al. "Surgical Scalpel Blade with Multiple Micro-cutting Edges and Surface Textured Rake Face." No 2011-033. Feb. 23, 2011 |
| [6] | Anlar B et al. "The effect of harmonic scalpel, electrocautery, and scalpel use on early wound complications..." Eur Surg. 2013; 45: 286-90 |
| [7] | Khan S et al. "Harmonic Scalpel Versus Electrocautery Dissection in Modified Radical Mastectomy..." Surgical Oncology. 2013 |
| [8] | Lang BHH et al. "A Systematic Review and Meta-analysis Comparing... Total Thyroidectomy Between Harmonic Scalpel Versus Ligasure." Ann Surg Oncol. 2013; 20: 1918-26 |
| [9] | Chanthasopeephan T et al. "Measuring forces in liver cutting..." Ann Biomed Eng. 2003; 31: 1372-82 |
| [10] | Moore JZ et al. "Modeling of the Plane Needle Cutting Edge Rake and Inclination Angles for Biopsy." J Manuf Sci E-T Asme. 2010; 132 |
| [11] | Moore JZ et al. "Modeling cutting edge geometry for plane and curved needle tips." P I Mech Eng B-J Eng. 2012; 226: 861-9 |
| [12] | Boothroyd G and Knight WA. "Fundamentals of machining and machine tools." 3rd ed. Boca Raton: Taylor and Francis, 2006, p.573 |
| [13] | Shih AJ et al. "End milling of elastomers - Fixture design and tool effectiveness..." J Manuf Sci E-T Asme. 2004; 126: 115-23 |

---

## 10. MAKALENİN SINIRLILIKLARI

1. **θ sabit varsayımı:** θ değerinin x ile minimal değiştiği gözlemlenmiş ve sabit kabul edilmiş — gerçekte bıçak boyunca hafif değişebilir
2. **Phantom jel ≠ gerçek doku:** PVC phantom jel (5:1 oranı) kullanılmış — gerçek biyolojik doku çok daha heterojen, katmanlı ve canlı
3. **Sadece kayma kesimi (slide cutting):** Press cutting ve scrape cutting test edilmemiş
4. **Tek kesim hızı (2.54 mm/s):** Farklı hızların kuvvet üzerindeki etkisi incelenmemiş
5. **Tek derinlik (6 mm başlangıç):** Farklı başlangıç derinlikleri denenmemiş
6. **Sınırlı deneme sayısı:** Bıçak başına sadece 3 deneme (toplam 12)
7. **Bıçak aşınması modellenmemiş:** Tüm testler yeni bıçaklarla — kullanımla körelmenin etkisi yok
8. **Kuvvet-geometri ilişkisi tam modellenmemiş:** Yazarlar "further investigation is required" demiş
9. **2D polinom uydurma:** Kesim kenarı 2D polinom olarak modellenmiş — 3D kenar profili (bevel geometrisi) polinom dışında sadece θ ile temsil edilmiş
10. **Sadece 4 bıçak numarası:** Başka neşter türleri (#20, #22, #23 vb.) incelenmemiş
11. **Sıcaklık ve nem etkileri** değerlendirilmemiş

---

## 11. YENİ BİLGİLER VE ÖNCEKİ MAKALELERLE KARŞILAŞTIRMA

### 11.1 Bu Makalede İlk Kez Karşılaşılan Kavramlar

| Yeni Kavram | Açıklama | Önem |
|------------|----------|------|
| **α = 90° - θ/2** | Rake açısının sadece bilenmiş açıya (θ) bağlı olduğu matematiksel kanıt | Önceki makalelerde keskinlik-açı ilişkisi sözel idi; burada formülize edilmiş |
| **λ(x) = tan⁻¹(\|f'(x)\|)** | İnklinasyon açısının sadece kesim kenarı eğimine bağlı olduğu formül | Eğri bıçaklarda inklinasyon açısının x ile nasıl değiştiğini gösterir |
| **Ft = Fs + Ff** | Toplam kuvvetin sertlik + sürtünme bileşenlerine ayrıştırılması | Makale 07'deki kuvvet modeliyle (T, Sn, Sr) farklı ama tamamlayıcı |
| **İnklinasyon açısı (λ)** | Slice cutting'de bıçak kenarı ile kesim düzlemi arasındaki açı | Önceki makalelerde bu kavram yoktu — yalnızca rake angle ve bevel angle vardı |
| **Neşter #10: 0.52 N kesim kuvveti** | Son derece düşük kesim kuvveti referans değeri | Endüstriyel bıçak kuvvetleriyle karşılaştırma için altın referans |
| **θ ve α ilişkisi: ters orantılı** | Düşük θ (ince bileme) → yüksek α (daha keskin) | Matematiksel kanıt |
| **Contact area → friction → cutting force** | Temas alanı arttıkça sürtünme artar, kuvvet artar | Makale 01'deki "geniş bıçak = daha fazla kuvvet" ifadesinin bilimsel temeli |

### 11.2 Önceki Makalelerle Tutarlılık ve Çelişki Kontrolü

| Konu | Önceki Makaleler | Bu Makale | Durum |
|------|:---:|:---:|:---:|
| Açı-keskinlik ilişkisi | Makale 03: Düşük açı = daha keskin; Makale 09: >25° BSI artar | α = 90° - θ/2 → düşük θ = yüksek α = daha keskin | ✅ Tutarlı, matematiksel kanıt |
| Rake angle kavramı | Makale 06: Pozitif/negatif/sıfır rake angle | α yalnızca θ'ya bağlı, kesim kenarı şeklinden bağımsız | ✅ Tutarlı + ek derinlik |
| Kuvvet-geometri ilişkisi | Makale 07: FEM ile bıçak açısı-gerilme analizi | Deneysel: inklinasyon↑ + temas alanı↓ → kuvvet↓ | ✅ Tutarlı — farklı malzeme (kağıt vs phantom jel) ama aynı prensip |
| Bıçak açısı ve kuvvet | Makale 01: 10°-40° kesim kenarı açısı aralığı | θ: 14.07°-27.53° aralığı (neşterler için) | ✅ Tutarlı — neşterler genel bıçak aralığının alt yarısında |
| Mikro bevel etkileri | Makale 09: "Angle closest to cutting edge determines sharpness" | α = 90° - θ/2 → θ (kesim kenarına en yakın bilenmiş açı) belirleyici | ✅ Tutarlı — matematiksel doğrulama |

### 11.3 Makale 07 ile Özel Karşılaştırma

| Parametre | Makale 07 (SV-JME) | Bu Makale (PSU) |
|-----------|:---:|:---:|
| **Yöntem** | FEM / ANSYS (simülasyon) | Deneysel (phantom jel) + analitik model |
| **Malzeme** | Kağıt (4 tür) | PVC phantom jel (doku benzeri) |
| **Bıçak türü** | Endüstriyel kağıt kesim bıçağı | Cerrahi neşter (#10, #11, #12, #15) |
| **Açı aralığı** | 20°-30° (6 açı) | θ: 14.07°-27.53° (4 bıçak) |
| **Kuvvet modeli** | T=0.9F, Sn=0.1F·sinα, Sr=0.1F·cosα | Ft = Fs + Ff |
| **Ana bulgu** | Kritik açı = 28° | En düşük kuvvet: #10 (θ=26.43°, yüksek λ) |
| **Kuvvet büyüklüğü** | Belirtilmemiş (gerilme olarak) | **0.52 - 1.17 N** |

**⚠️ ÖNEMLİ FARK:** Makale 07'de en önemli faktör **bıçak açısı** iken, bu makalede kesim kuvvetini belirleyen **birden fazla geometrik parametre** (λ, α, A) birlikte etkilidir. Tek başına rake açısı en yüksek olan #11, en düşük kuvveti göstermemiştir — çünkü temas alanı ve inklinasyon açısı da etkilidir.

---

## 12. DİĞER MAKALELERLE BAĞLANTILAR

- **Makale 01** (Bıçak Geometrisi): Kesim kenarı açısı 10°-40° → Burada neşter θ: 14.07°-27.53° — bu aralığın alt yarısı
- **Makale 03** (Bevel Açısı): Malzemeye özgü açı tablosu → Phantom jel (yumuşak doku benzeri) düşük açı gerektirir — neşterler buna uygun
- **Makale 04** (Keskinlik Bilimi): "Per side" vs "inclusive" kavramı → Burada θ = "ground angle" (inclusive olabilir — çift taraflı ise toplam açı)
- **Makale 06** (Rake Açısı): Pozitif/negatif/sıfır rake → Burada α = 90° - θ/2 formülü ile tüm neşterler pozitif rake'e sahip (62°-76°)
- **Makale 07** (FEM Kağıt Kesimi): Gerilme analizi → Burada kuvvet ölçümü — tamamlayıcı yaklaşımlar
- **Makale 08** (Japon Bıçak): Katsuramuki tekniği = slide cutting → Burada slide cutting deney yöntemi olarak kullanılmış
- **Makale 09** (BSI/Jilet Keskinliği): BSI ve kenar yarıçapı → Burada keskinlik θ ve α ile ölçülmüş — iki yaklaşım (BSI mikro, θ/α makro) tamamlayıcı

---

## 13. KRİTİK ÖĞRENİMLER (Bu Makaleye Özgü)

1. **α = 90° - θ/2** — Rake açısı yalnızca bilenmiş açıya bağlıdır; kesim kenarı şekli (eğri/düz) etkisizdir
2. **λ(x) = tan⁻¹(|f'(x)|)** — İnklinasyon açısı yalnızca kesim kenarı eğrilik türevine bağlıdır
3. **Düşük kuvvet = yüksek λ + yüksek α + düşük A** — üç parametre birlikte etkili
4. **Neşter #10 en düşük kuvveti** (0.52 N) göstermiş — en yüksek inklinasyon açısı (45.33°) sayesinde
5. **Neşter #12 en yüksek kuvveti** (1.17 N) göstermiş — en yüksek temas alanı (52.14 mm²) nedeniyle
6. **Tek başına yüksek rake açısı yeterli değil:** #11 en yüksek α'ya (75.93°) sahip ama en düşük kuvvete sahip değil — λ ve A da kritik
7. **Kesim kenarı polinom ile modellenebilir** — R² = 0.997-0.999 doğrulukla
8. **θ, x boyunca neredeyse sabit** — Zeiss Axio optik mikroskobu ile doğrulanmış
9. **Phantom jel (PVC, 5:1)** = standart doku simülant — endüstriyel bıçak testlerinde de kullanılabilir referans
10. **İlk kez neşter geometrilerinin kantitatif karşılaştırma tekniği** sunulmuştur
