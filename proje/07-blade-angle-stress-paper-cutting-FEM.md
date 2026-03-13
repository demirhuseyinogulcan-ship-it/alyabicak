# Makale 7: Farklı Kağıt Malzemelerin Kesilmesi Sırasında Bıçak Açısının Bıçak Gerilmelerine Etkileri (FEM/ANSYS Akademik Çalışma)

**Tam Başlık (Orijinal):** "The Effects of Blade Angle on Blade Stresses During Cutting of Different Kinds of Paper Materials"  
**Kaynak:** Strojniški vestnik - Journal of Mechanical Engineering 55(2009)10, 633-640  
**UDC:** 621.9  
**Makale Alınma Tarihi:** 21.11.2007  
**Makale Kabul Tarihi:** 25.09.2009  
**Yazarlar:**
- Abdullah Kurt¹ *(Sorumlu yazar — akurt@gazi.edu.tr)*
- Erdogan Kose²
- Turkun Sahinbaskan³

**Kurumlar:**
1. Gazi University, Technical Education Faculty, Mechanical Department, 06500 Ankara, Turkey
2. Gazi University, Technical Education Faculty, Printing Department, Turkey
3. Marmara University, Technical Education Faculty, Printing Department, Turkey

**Anahtar Kelimeler (Keywords):** paper, blade, stress, ANSYS

---

## ÖZET (Abstract — Yazarların Kendi İfadesiyle, Aynen)

> "In the printing sector knives (blades) are used during pre-printing, printing and post-printing. Therefore, paper type, blade angles, the sharpness of blades and applied pressure are all important factors in terms of cutting quality. In this study, during the cutting of different kinds of paper material, the effects of blade angle on blade stresses has been investigated. Using paper pulp I, paper pulp II, coated paper and Bristol paper various analyses have been made. In the analyses, according to changes to blade angles of 20, 22, 24, 26, 28 and 30°, changes have been observed in maximum principal stress, S₁, minimum principal stress, S₃ and von Mises stresses, SEQV. In conclusion; since Von Mises stresses and especially max. compressive stresses (min. principal stress, S₃) occurred at the lowest level for paper pulp I, paper pulp II, coated paper and Bristol papers, it has been decided that for increased durability of the knife the critical blade angle in terms of abrasion/breakage of the blade should be **28 degrees** rather than the more widely used angle of **24°**. A blade angle below **22 degrees** is not advised."

---

## İçindekiler
1. Giriş (Introduction)
2. Malzeme ve Yöntem (Material and Method)
3. Bıçak Üzerindeki Gerilme Dağılımları (Stress Distributions on the Blade)
4. Sonuçlar (Conclusion)
5. Sayısal Veriler — Tüm Grafikler ve Tablolar
6. Gerilme Dağılımı Görselleri (ANSYS Çıktıları)
7. Referanslar
8. Metodoloji Detayları ve Sınırlılıklar
9. Diğer Makalelerle Bağlantılar

---

## 1. GİRİŞ (INTRODUCTION)

### 1.1 Baskı Sektöründe Kesim İşlemlerinin Önemi

Yazarların ifadesiyle: Kesim işleri baskı endüstrisinde önemli bir yere sahiptir. En küçük etiketten tüm poster, broşür, dergi, kitap, gazete ve billboard türlerine kadar tüm kağıt ürünleri belirli bir boyuta göre hazırlanmalıdır. Bu nedenle giyotin kağıt kesiciler hem baskı öncesi (pre-printing) hem de baskı sonrası (post-printing) aşamalarda gereklidir.

**Giyotin kağıt kesicilerin kullanım alanları:**
- Kağıdı kullanılan baskı makinesine uygun boyuta getirmek
- Basılmış fazla kopyaları ayırmak
- Basılıp ciltlenmiş kağıtların kenarlarından fazlalıkları kesmek

Yazarların ifadesiyle: *"With regards to work quality and customer satisfaction, cutting is a highly delicate matter in the printing industry."*

### 1.2 Kesim Malzemelerinin Sınıflandırılması

Baskı sektöründe en yaygın kesim malzemeleri kağıt (paper), mukavva (paperboard) ve karton (cardboard) olup üç kategoriye ayrılır:

| Kategori | Malzemeler |
|----------|-----------|
| **Yumuşak (Soft)** | Kopya kağıdı, peçete kağıdı, kurutma kağıdı, ipek kağıdı |
| **Normal** | Baskı kağıdı, karton, senet kağıdı (bond-bill paper) |
| **Sert (Hard)** | Kuşe kağıt (coated paper), krom kağıt, mukavva (paperboard), etiket kağıdı, yapışkan kağıt |

### 1.3 Bıçak Malzemeleri ve Türleri

Giyotin kağıt kesici bıçakları çelik ve çelik alaşımından yapılır. Çelik alaşım bileşimi bıçağın ömrünü belirler.

**Sektörde kullanılan bıçak türleri:**

| Bıçak Türü | Alaşım Payı | Açıklama |
|-------------|-------------|----------|
| **Standard steel knives** | %5 alaşım payı | Standart çelik bıçaklar |
| **HSS-knives (Super speed steel)** | %18 tungsten alaşım payı | Süper hız çeliği bıçaklar |
| **Carbide-tipped knives** | %75-95 tungsten karbür | Toz metalürjisi prosedürüyle preslenmiş |

**Bıçak maliyeti değerlendirmesinde dikkate alınması gerekenler:**
- Yeni bıçağın fiyatı
- Ortalama kesim sayısı (servis ömrü)
- Bıçak değişiklik sayısı
- Bileme fiyatı (metre başına)
- Ortalama bileme miktarı (milimetre cinsinden)

### 1.4 Bıçak Açısının Rolü

Yazarların ifadesiyle:
- *"Blades with small angles require less cutting strength compared to blades with larger angles."*
- *"Blades with small angles cannot remain strong in hard and flexible cutting materials; they will bend or eventually wear out."*
- *"A very important decision is made with the selection of the knife material and the grinding angle. Both factors are crucial for cutting quality and the number of cuts with a sharp knife."*

### 1.5 Literatür Taraması

- **Bishop ve Wilson** → Tek pnömatik silindir kullanarak hız kontrol ve yavaşlatma yöntemi; kağıt kesme mekanizmasına uygulama; "makas" etkisi nedeniyle sabit bıçaktaki atalet etkisi (iki bıçak ekseninin kesme hareketini sağlamak için hafif eğikliği) hesaba katılmış
- **FEM çalışmaları** → Euler formülasyonu ve Lagrange formülasyonu (talaş oluşumunu başlangıçtan kararlı duruma kadar modelleyen, daha yaygın kullanılan)
- **Uygulanan FEM teknikleri:** Element separation, cutting tool wear modelling, re-meshing, friction modelling
- **Kullanılan ticari yazılımlar:** MARC, ABAQUS, DEFORM 2D/3D, NIKE, DYNE
- Literatürdeki çoğu çalışma **iki boyutlu simülasyon** üzerinedir

---

## 2. MALZEME VE YÖNTEM (MATERIAL AND METHOD)

### 2.1 Deney Düzeneği

**Kullanılan makine:** POLAR 115 High Speed Cutter

**POLAR 115 Teknik Özellikleri (Tablo 1 — Eksiksiz):**

| Parametre | Değer |
|-----------|-------|
| Kesim genişliği (Cutting width) | 1150 mm |
| İlerleme derinliği (Feeding depth) | 1150 mm |
| Maks. ilerleme yüksekliği (false clamp olmadan) | 165 mm |
| Ön masa uzunluğu (Front table length) | 715 mm |
| Masa yüksekliği (Table height) | 900 mm |
| Güvenlik kelepçe basıncı (Safety clamp pressure) | 30 daN |
| Min. kelepçe basıncı (Clamp pressure, min) | 150 daN |
| Maks. kelepçe basıncı (Clamp pressure, max) | 4500 daN |
| Dönüş yolunda arka dayama hızı (Backgauge speed) | 300 mm/sn |
| Bıçak hızı (Knife speed) | 45 çevrim/dk |
| Bıçak kalınlığı (Knife thickness) | 13.8 mm |
| Bıçak bileme rezervi (HSS 18 bıçak), maks | 50 mm |
| En küçük kesim, manuel, false clamp plakası olmadan | 20 mm |
| En küçük kesim, otomatik, false clamp plakası olmadan | 25 mm |
| En küçük kesim, otomatik, false clamp plakalı | 95 mm |
| Gürültü seviyesi | 77 dB/A |

### 2.2 Sonlu Eleman Analizi (Finite Element Analysis) — METODOLOJİ

**Bıçak malzeme özellikleri (HSS süper hız çeliği):**
- Alaşım: %18 tungsten
- Elastisite modülü: **200 GPa**
- Poisson oranı: **0.3**

**Yazılım:** ANSYS 9.0 (Finite Element Method tabanlı)

**Modelleme süreci:**
1. Bıçak kenarının geometrik özellikleri dikkate alınarak model oluşturuldu
2. Model **Mechanical Desktop 6 Power Pack**'te oluşturuldu
3. ".iges" formatında **ANSYS**'e transfer edildi

**Mesh (Ağ) Yapılandırması:**
- Bıçak kenarı meshleme: **8 nodal quadrilateral PLANE82** bileşeni seçildi
- Yüzey yükleri: **SURF153** bileşeni kullanıldı (bıçak kuvvetinin ana kesim yüzeyi ve yardımcı kesim yüzeyi üzerinde normal ve teğetsel yük dağılımlarında uygulanması için)
- Bileşen ayrıştırma: **"smartsize"** yöntemi ile (katı model geometrisi için en uygun bileşen sırasını otomatik ayarlar)
- Ağ boyutu: Tüm bıçak kenarları için **smartsize = 4** uygulandı

**Sınır Koşulları (Boundary Conditions):**
- Bıçağın, bıçak kılavuz bileşenine monte edildiği alanlardaki yer değiştirmeler = **sıfır** (sabit)

### 2.3 Kesim Kuvvetleri ve Test Edilen Kağıt Türleri

**4 farklı kağıt türü için uygulanan kesim kuvvetleri (100 cm uzunluğunda):**

| Kağıt Türü | Gramaj (gsm) | Kesim Kuvveti F (kN) | Yaprak Sayısı | Yığın Yüksekliği h (mm) |
|-----------|-------------|---------------------|---------------|----------------------|
| **Paper pulp I** | 80 gsm | 16.5 kN | 500 adet | 48 mm |
| **Paper pulp II** | 54 gsm | 12 kN | 500 adet | 32 mm |
| **Coated paper (Kuşe kağıt)** | 170 gsm | 17.5 kN | 250 adet | 30 mm |
| **Bristol paper** | 230 gsm | 45 kN | 100 adet | 32 mm |

### 2.4 Kuvvet Dağılımı Modeli

Kesim kuvvetleri (F), ana kesim yüzeyi ve yardımcı kesim yüzeyi üzerinde normal ve teğetsel yük dağılımlarında uygulanmıştır.

**Kuvvet ayrıştırması:**
- **T** (ana kesim yüzeyindeki teğetsel kuvvet) = **0.9 × F**
- **S** (yardımcı kesim yüzeyindeki kuvvet) = **0.1 × F**
- **S** kuvveti daha sonra bileşenlerine ayrılmıştır:
  - **Sₙ** = 0.1 × F × sin α (normal bileşen)
  - **Sᵣ** = 0.1 × F × cos α (radyal bileşen)

Burada **α** = bıçak açısı

T, Sₙ ve Sᵣ kuvvetleri, uygun yayılmış yüzey yükü biçiminde ana kesim yüzeyi ve yardımcı kesim yüzeyi üzerindeki her bileşene uygulanmıştır.

### 2.5 Test Edilen Bıçak Açıları

Sektörde yaygın olarak kullanılan **24°** açıya ek olarak, her kağıt türü için **6 farklı açıda** modeller oluşturulmuştur:

| Test Edilen Açılar |
|:---:|
| **20°, 22°, 24°, 26°, 28°, 30°** |

### 2.6 Analiz Varsayımları ve Sınırlamalar

- Bıçak ile kağıt arasındaki **sürtünme ihmal edilmiştir**
- Bıçakların **keskin** olduğu (kör veya kullanılmış olmadığı) kabul edilmiştir
- 2 boyutlu analiz yapılmıştır (PLANE82 elementi)
- Kağıdın kesim sırasındaki davranışı (deformasyon, yırtılma) modellenmemiştir
- Sadece bıçak üzerindeki gerilmeler incelenmiştir

---

## 3. BIÇAK ÜZERİNDEKİ GERİLME DAĞILIMLARI (STRESS DISTRIBUTIONS ON THE BLADE)

Yükleme durumuna göre, her kağıt türü için 20°, 22°, 24°, 26°, 28° ve 30° açılarda farklı modeller kullanılarak bıçak üzerinde oluşan **maksimum asal gerilme (S₁)**, **minimum asal gerilme (S₃)** ve **von Mises gerilmeleri (SEQV)** incelenmiştir.

### 3.1 Paper Pulp I (80 gsm) — Grafik Değerleri (Fig. 4)

#### a) Maksimum Asal Gerilmeler, S₁ [MPa]

| Bıçak Açısı (°) | S₁ (MPa) |
|:---:|:---:|
| 20 | 195.43 |
| 22 | 195.98 |
| 24 | 195.82 |
| 26 | 195.71 |
| 28 | 195.69 |
| 30 | 195.56 |

**Değerlendirme:** Bıçak açıları S₁ üzerinde büyük bir etkiye sahip değildir. Tüm değerler ~195-196 MPa aralığında çok yakındır.

#### b) Minimum Asal Gerilmeler, S₃ [MPa]

| Bıçak Açısı (°) | S₃ (MPa) |
|:---:|:---:|
| 20 | -619.74 |
| 22 | -609.68 |
| 24 | -609.53 |
| 26 | -609.26 |
| 28 | -608.40 |
| 30 | -606.96 |

**Değerlendirme:** 22°'nin altındaki açılarda gerilmelerin artma eğilimi vardır. 20°'de -619.74 MPa ile en yüksek basma gerilmesi oluşmuştur.

#### c) Von Mises Gerilmeleri, SEQV [MPa]

| Bıçak Açısı (°) | SEQV (MPa) |
|:---:|:---:|
| 20 | 538.98 |
| 22 | 529.74 |
| 24 | 529.51 |
| 26 | 527.75 |
| 28 | 527.34 |
| 30 | *(grafekte eksik — trend azalan)* |

**Değerlendirme:** Von Mises gerilmeleri özellikle 22°'nin altına düştüğünde yükselme eğilimindedir. 20°'de 538.98 MPa ile en yüksek değer ölçülmüştür.

**Yazarların ifadesiyle:** *"When investigating maximum principle stresses formed during the cutting of 80 (gsm) Paper pulp I we find that blade angles do not have a great impact on these stresses. While a similar result is obtained with minimum principle stresses, we can also say that stresses have a tendency to increase at angles below 22 degrees."*

**Paper Pulp I Yapısı Hakkında:** Paper Pulp I genellikle düşük yoğunlukta ve farklı ağaç malzemelerinden oluşur. Selüloz kullanılarak hacim olarak artırılabilen yapısı burada etkilidir. Üretimde birincil (uzun) ve ikincil (kısa) lifler kullanılır. Lif yapısı nedeniyle, bıçak açısı kesim sırasında maksimum asal gerilmeler üzerinde etkili olmamış olabilir.

---

### 3.2 Paper Pulp II (54 gsm) — Grafik Değerleri (Fig. 5)

#### a) Maksimum Asal Gerilmeler, S₁ [MPa]

| Bıçak Açısı (°) | S₁ (MPa) |
|:---:|:---:|
| 20 | 193.16 |
| 22 | 185.58 |
| 24 | 165.98 |
| 26 | 148.01 |
| 28 | 136.09 |
| 30 | 131.99 |

**Değerlendirme:** Bıçak açısı arttıkça gerilmeler belirgin şekilde azalmıştır. 20°→30° aralığında %31.7 düşüş (193.16→131.99 MPa).

#### b) Minimum Asal Gerilmeler, S₃ [MPa]

| Bıçak Açısı (°) | S₃ (MPa) |
|:---:|:---:|
| 20 | -528.55 |
| 22 | -492.39 |
| 24 | -475.51 |
| 26 | -468.02 |
| 28 | -460.08 |
| 30 | -461.26 |

**Değerlendirme:** Açı arttıkça gerilmeler azalmış, ancak 28°'den sonra hafif artış gözlenmiştir (-460.08 → -461.26 MPa).

#### c) Von Mises Gerilmeleri, SEQV [MPa]

| Bıçak Açısı (°) | SEQV (MPa) |
|:---:|:---:|
| 20 | 457.88 |
| 22 | 426.76 |
| 24 | 412.37 |
| 26 | 406.28 |
| 28 | 399.43 |
| 30 | 400.60 |

**Değerlendirme:** Açı arttıkça gerilmeler düşmüş, minimum **28°**'de (399.43 MPa) gözlenmiş, 30°'de hafif artış (400.60 MPa) olmuştur. **Maksimum artırılabilir açı 28° olarak belirlenmiştir.**

**Yazarların ifadesiyle:** *"When investigating maximum and minimum principle stresses formed during the cutting of 54 (gsm) paper pulp II we find that stresses decrease as blade angles are increased. In von Mises stresses, there is yet again a decline in stresses as the angle increases and we find that the maximum increasable angle must remain at 28 degrees."*

---

### 3.3 Coated Paper / Kuşe Kağıt (170 gsm) — Grafik Değerleri (Fig. 6)

#### a) Maksimum Asal Gerilmeler, S₁ [MPa]

| Bıçak Açısı (°) | S₁ (MPa) |
|:---:|:---:|
| 20 | 299.99 |
| 22 | 299.75 |
| 24 | 264.13 |
| 26 | 240.03 |
| 28 | 214.15 |
| 30 | 198.21 |

**Değerlendirme:** 20° ve 22°'de gerilmelerde fark yoktur (~300 MPa). 24°'den sonra açı arttıkça gerilmeler düşmüştür.

#### b) Minimum Asal Gerilmeler, S₃ [MPa]

| Bıçak Açısı (°) | S₃ (MPa) |
|:---:|:---:|
| 20 | -783.84 |
| 22 | -770.15 |
| 24 | -711.11 |
| 26 | -688.70 |
| 28 | -674.86 |
| 30 | -676.91 |

**Değerlendirme:** 20° ve 22°'de değişiklik az. 24°-28° aralığında açı ile gerilme arasında negatif ilişki. 28°'den sonraki artışlar gerilmeleri de artırmıştır (-674.86 → -676.91 MPa). **Minimum değer: 28° = -674.86 MPa.**

#### c) Von Mises Gerilmeleri, SEQV [MPa]

| Bıçak Açısı (°) | SEQV (MPa) |
|:---:|:---:|
| 20 | 678.83 |
| 22 | 667.29 |
| 24 | 616.10 |
| 26 | 579.25 |
| 28 | 585.33 |
| 30 | 587.60 |

**Değerlendirme:** 26°'de minimum (579.25 MPa), ancak 28° ve 30°'de hafif artış. S₃ için benzer durum söz konusu.

**Yazarların ifadesiyle:** *"When investigating maximum principle stresses formed during the cutting of 170 (gsm) coated paper it is determined that while there is no difference in stresses for blade angles of 20 and 22 degrees, stresses decline as the angle increases after 24 degrees. It should be pointed out that here the effectiveness of the paper lies with it being coated."*

**Kuşe kağıt ve Bristol kartonun yapısı hakkında:** Üretim aşamaları doğrudan selülozdan üretilen kağıtlara benzer olsa da, lif yapısı, mürekkep giderme (deinking) ve flotasyon kimyası aşamalarıyla farklılık gösterir.

---

### 3.4 Bristol Paper (230 gsm) — Grafik Değerleri (Fig. 7)

#### a) Maksimum Asal Gerilmeler, S₁ [MPa]

| Bıçak Açısı (°) | S₁ (MPa) |
|:---:|:---:|
| 20 | 724.38 |
| 22 | 727.68 |
| 24 | 615.32 |
| 26 | 555.03 |
| 28 | 510.36 |
| 30 | 494.96 |

**Değerlendirme:** 22°'de artış (727.68 MPa), 24° üzerinde açı arttıkça gerilmeler düşmüştür.

#### b) Minimum Asal Gerilmeler, S₃ [MPa]

| Bıçak Açısı (°) | S₃ (MPa) |
|:---:|:---:|
| 20 | -1982.1 |
| 22 | -1808.0 |
| 24 | -1775.3 |
| 26 | -1755.1 |
| 28 | -1725.3 |
| 30 | -1729.7 |

**Değerlendirme:** Açı 28°'ye kadar arttıkça gerilmeler azalmıştır. 28°'de minimum (-1725.3 MPa), 30°'de hafif artış (-1729.7 MPa). **Bristol kağıdında en yüksek basma gerilmeleri oluşmuştur** (45 kN kesim kuvveti nedeniyle).

#### c) Von Mises Gerilmeleri, SEQV [MPa]

| Bıçak Açısı (°) | SEQV (MPa) |
|:---:|:---:|
| 20 | 1717.1 |
| 22 | 1567.7 |
| 24 | 1539.3 |
| 26 | 1523.5 |
| 28 | 1497.9 |
| 30 | 1502.2 |

**Değerlendirme:** 28°'de minimum (1497.9 MPa), 30°'de tekrar hafif artış (1502.2 MPa). **İdeal bıçak açısı 28° olarak belirlenmiştir.**

**Yazarların ifadesiyle:** *"When investigating maximum principle stresses formed during the cutting of 230 (gsm) Bristol papers, there was an increase in stresses at 22 degrees, yet it was observed that these stresses declined as the angle increased over 24 degrees... The ideal blade angle here has been specified as 28 degrees."*

---

## 4. GERİLME DAĞILIMI ÖZELLİKLERİ (ANSYS Çıktıları)

### 4.1 Paper Pulp I (80 gsm) — Bıçak Açısı = 20° (Fig. 8)

- **S₁ (maks. çekme gerilmesi):** Bıçağın serbest yüzeyi boyunca (kesilmiş kağıt parçalarını — kağıt atığını — kesim alanından uzaklaştıran alan) yoğunlaşmış, bıçağın keskin kenarına kadar etkili.
- **S₃ (maks. basma gerilmesi):** Kağıt yığın yüksekliği çevresinde en yüksek değerlere ulaşmıştır.
- **SEQV (Von Mises):** S₃'e benzer dağılım göstermiş ancak daha geniş etki alanına sahip. Özellikle bıçağın keskin kenarına kadar **450-500 MPa** civarında gerilmeler hakimdir.
- Bıçak kenar kesitinde istikrarlı düşüş, bıçağın aşınması ve sonunda kırılması meselesidir.

### 4.2 Paper Pulp II, Coated Paper ve Bristol Paper (Fig. 9-11)

- **S₁ (maks. çekme gerilmesi):** Bıçak kenarı yakınında açılandırılmış kesit üzerinde gruplandırılmıştır.
- **S₃ (maks. basma gerilmesi):** Bıçak taşıyıcı çubuğu üzerindeki kılavuz noktasına doğru yayılmıştır.
- **SEQV (Von Mises):** Kılavuz noktasının altından toplanmış ve belirli bir miktar kesim kenarında birikmiştir.

### 4.3 ANSYS Görsel Çıktıları (Ekli Görsel)

![Stress Distributions - Figure 9, 10, 11](image/06-rake-angle-shear-blade-bevel/1773210594464.png)

*Görselde görülen ANSYS 9.0 çıktıları:*
- **Fig. 9:** Paper pulp II (54 gsm) — Blade angle = 20° → S₁, S₃, SEQV dağılımları
- **Fig. 10:** Coated paper (170 gsm) — Blade angle = 20° → S₁, S₃, SEQV dağılımları
- **Fig. 11:** Bristol paper (230 gsm) — Blade angle = 20° → S₁, S₃, SEQV dağılımları

---

## 5. TÜM KAĞIT TÜRLERİ İÇİN KARŞILAŞTIRMALI ÖZET TABLO

### 5.1 En Düşük Von Mises Gerilmesinin Oluştuğu Açılar

| Kağıt Türü | Gramaj | Kesim Kuvveti | En Düşük SEQV Açısı | En Düşük SEQV Değeri | En Yüksek SEQV (20°) | Fark |
|-----------|--------|--------------|---------------------|---------------------|---------------------|------|
| Paper pulp I | 80 gsm | 16.5 kN | 28° | 527.34 MPa | 538.98 MPa (20°) | %2.2 |
| Paper pulp II | 54 gsm | 12 kN | **28°** | **399.43 MPa** | 457.88 MPa (20°) | %12.8 |
| Coated paper | 170 gsm | 17.5 kN | 26° | 579.25 MPa | 678.83 MPa (20°) | %14.7 |
| Bristol paper | 230 gsm | 45 kN | **28°** | **1497.9 MPa** | 1717.1 MPa (20°) | %12.8 |

### 5.2 En Düşük Basma Gerilmesinin (S₃) Oluştuğu Açılar

| Kağıt Türü | En Düşük S₃ Açısı | En Düşük S₃ Değeri | En Yüksek S₃ (20°) |
|-----------|-------------------|--------------------|--------------------|
| Paper pulp I | 30° | -606.96 MPa | -619.74 MPa |
| Paper pulp II | **28°** | **-460.08 MPa** | -528.55 MPa |
| Coated paper | **28°** | **-674.86 MPa** | -783.84 MPa |
| Bristol paper | **28°** | **-1725.3 MPa** | -1982.1 MPa |

---

## 6. SONUÇLAR (CONCLUSION — Yazarların Kendi İfadesiyle)

### Paper pulp I (80 gsm):
> "Blade angles do not have a great impact on S₁, S₃, and SEQV. But S₃ and SEQV stresses have a tendency to increase angles below 22 degree. From the stress distributions; S₁ stresses are concentrated along the free surface of the blade and are effective all the way up to the sharp edge of the blade while S₃ and SEQV stresses reached the highest values around the paper stowing height."

### Paper pulp II (54 gsm), Coated paper (170 gsm) ve Bristol papers (230 gsm):
> "S₁, S₃, and SEQV stresses decrease as blade angles are increased. But S₃ and SEQV stresses have a tendency to increase angles after 28 degree while there is no difference in S₁, S₃, and SEQV stresses for blade angles of 20 and 22 degrees for coated paper. From the stress distributions, for Paper pulp II, coated paper and Bristol papers; S₁ stresses are grouped over the section that has been angled near the blade edge while S₃ and SEQV stresses dispersed towards the guiding point over the blade carrier bar."

### ANA SONUÇ:
> **"In conclusion, since Von Mises stresses and especially max. compressive stresses (min. principal stress, S₃) occurred at the lowest level for paper pulp I, paper pulp II, coated paper and Bristol paper it has been decided that for increased durability of the knife the critical blade angle in terms of abrasion/breakage of the blade should be 28 degrees rather than the more widely used angle of 24 degrees. A blade angle below 22 degrees is not advised."**

### Sektörel Öneriler:

Yazarlara göre baskı sektöründeki malzemeler 3 gruba ayrılabilir ve **3 farklı açıda bıçak** kullanılmalıdır:

| Grup | Malzemeler | Önerilen Yaklaşım |
|------|-----------|-------------------|
| **Grup 1** | Paper pulp I | Ayrı bıçak açısı |
| **Grup 2** | Paper pulp II + geri dönüştürülmüş kağıtlar | Ayrı bıçak açısı |
| **Grup 3** | Kuşe kağıt + kartonlar (Bristol vb.) | Ayrı bıçak açısı |

Yazarların ifadesiyle: *"By putting coated paper and cardboard into their own individual groups the three different blade angles in terms of cutting will award the printing sector with extra speed and time."*

---

## 7. METODOLOJİ DETAYLARI VE SINIRLILIKLAR

### 7.1 Metodolojinin Güçlü Yönleri
- Gerçek endüstriyel makine verileri kullanılmıştır (POLAR 115)
- Gerçekçi kesim kuvvetleri (makine üreticisinden alınan veriler)
- 6 farklı açı × 4 farklı kağıt türü = 24 farklı analiz yapılmıştır
- 3 farklı gerilme türü (S₁, S₃, SEQV) incelenmiştir
- ANSYS 9.0 güvenilir bir FEM yazılımıdır

### 7.2 Sınırlılıklar (Limitations)
1. **Sürtünme ihmal edilmiş:** Bıçak-kağıt arası sürtünme analiz dışı bırakılmıştır. Gerçekte sürtünme gerilmeleri önemli ölçüde etkiler.
2. **Sadece keskin bıçak varsayımı:** Kör/aşınmış bıçak durumları incelenmemiştir. Pratikte bıçaklar zamanla körelir.
3. **2 boyutlu analiz:** PLANE82 2D elementi kullanılmıştır; 3D analiz yapılmamıştır.
4. **Kağıt davranışı modellenmemiş:** Kağıdın kesim sırasındaki deformasyon, yırtılma, sıkışma davranışı hesaba katılmamıştır.
5. **Sıcaklık etkisi yok:** Kesim sırasında oluşan ısı ve termal gerilmeler incelenmemiştir.
6. **Dinamik analiz yok:** Statik yükleme varsayımı; kesim sırasındaki dinamik kuvvetler ve darbe etkileri ihmal edilmiştir.
7. **Kağıt türü sınırlılığı:** Sadece 4 kağıt türü test edilmiştir; geri dönüştürülmüş kağıt, etiket kağıdı vb. dahil edilmemiştir.
8. **Bıçak aşınma mekanizması:** Bıçak açısının aşınma hızını doğrudan nasıl etkilediği deneysel olarak doğrulanmamıştır.

---

## 8. REFERANSLAR (Orijinal Sırayla)

[1] http://www.polar-mohr.com/index_en.html  
[2] Bishop, R.E., Wilson, C.C. — Dynamic control of spring-driven mechanisms, IBM Journal of Research and Development, p. 222-230.  
[3] Strenkowski, J.S., Caroll, J.T. (1985) — A finite element model of orthogonal cutting, ASME, J. Eng. for Industry, 107, p. 349-354.  
[4] Strenkowski, J.S., Mitchum, G.L. (1987) — An improved finite element model of orthogonal cutting, Prod. North American Manufac. Res. Conf., Bethlehem, p. 506-508.  
[5] Komvopoulos, K., Erpenbeck, S.A. (1991) — Finite element modelling of ortogonal metal cutting, ASME, J. Eng. for Industry, 113, p. 253-267.  
[6] Ueda, K., Manabe, K. (1992) — Chip formation in micro cutting of an amorphous metal, Annals of the CIRP, 41, p. 129-132.  
[7] Shih, A., Yang, H.T.Y. (1993) — Experimental and finite element predictions of residual stresses due to orthogonal metal cutting, Int. J. for Numerical Methods in Eng., 36, p. 1487-1507.  
[8] Shih, A. (1995) — Finite element simulation of orthogonal metal cutting, J. Eng. for Industry, 117, p. 84-93.  
[9] Zang, B., Bagchi, A. (1994) — Finite element simulation of chip formation and comparison with machining experiment, J. Eng. for Industry, 116, p. 289-297.  
[10] Usta, M. (1999) — Finite element analysis of orthogonal metal cutting operations, PhD Thesis, Middle East Technical University, Ankara.  
[11] Kalhori, V., Lundblad, M., Lindgren, L.E. (1997) — Numerical and experimental analysis of orthogonal metal cutting, ASME, Int. Mech. Eng. Congress & Exposition, MED vol. 6-2, Dallas, Texas, p. 29-35.

---

## 9. DİĞER MAKALELERLE BAĞLANTILAR

- **Makale 01** (Bıçak Geometrisi): Kesim kenarı açısı 10°-40° aralığı → Bu çalışmada kağıt kesimi için 20°-30° aralığı test edilmiş → Doğrudan uyumlu
- **Makale 02** (Bevel Türleri): Single bevel bıçak yapısı → Bu çalışmadaki giyotin bıçakları da single bevel (tek taraflı) kesim yapar
- **Makale 03** (Bevel Açısı): Malzemeye özgü açı önerileri → Bu çalışma kağıt türüne özgü açı deneysel kanıtı sunuyor
- **Makale 04** (Keskinlik Bilimi): HRC sertlik değerleri ve kenar geometrisi → HSS çelik bıçağın malzeme özellikleri (200 GPa, %18 tungsten)
- **Makale 05** (Düz Bıçak Seçimi): Bıçak kalınlığı-rijitlik ilişkisi → Bu çalışmada bıçak kalınlığı 13.8 mm
- **Makale 06** (Rake Açısı): Makas bıçağı enerji kullanımı ve kuvvet analizi → Bu çalışmadaki kuvvet dağılımı modeli (T = 0.9F, S = 0.1F) ile paralellik

---

## 10. KRİTİK ÖĞRENİMLER (Bu Makaleye Özgü)

1. **Akademik FEM kanıtı:** 28° bıçak açısı, sektörde yaygın olan 24°'den daha düşük gerilme üretir → Bıçak ömrünü uzatır
2. **22°'nin altı tehlikeli:** Tüm kağıt türlerinde 22°'nin altında gerilmeler artma eğiliminde
3. **Bristol kağıdı en zorlayıcı:** 45 kN kesim kuvveti ve ~1500-1700 MPa Von Mises gerilmeleri → Bıçak dayanıklılığı için en kritik malzeme
4. **Kağıt yapısı etkili:** Paper pulp I'de lif yapısı nedeniyle açı etkisi minimal; kuşe kağıt ve Bristol'de kaplama/sertlik nedeniyle açı çok etkili
5. **Kuvvet dağılımı formülü:** T = 0.9F (ana yüzey), Sₙ = 0.1F·sinα, Sᵣ = 0.1F·cosα → Pratik mühendislik formülü
6. **3 bıçak grubu önerisi:** Sektöre 3 farklı açıda bıçak kullanımı öneriliyor → Hız ve zaman kazanımı
7. **ANSYS 9.0 + PLANE82 + SURF153:** Metodoloji tekrarlanabilir ve güvenilir
