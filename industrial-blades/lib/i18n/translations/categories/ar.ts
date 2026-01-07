/**
 * Categories - Arabic Translations (العربية)
 * 
 * الترجمات العربية للفئات الرئيسية والفرعية.
 * تبقى قيم الـ Slug بدون تغيير، يتم ترجمة الاسم والوصف فقط.
 */

import type { CategoryTranslations, SubcategoryTranslations } from './tr';

// =============================================================================
// الفئات الرئيسية
// =============================================================================

export const categoriesAr: CategoryTranslations = {
  'sanayi-jiletleri': {
    name: 'الشفرات الصناعية',
    description: 'شفرات وأدوات قطع صناعية احترافية للاستخدام الصناعي',
  },
  'makina-bicaklari': {
    name: 'سكاكين الآلات',
    description: 'سكاكين وأنظمة قطع مصنعة حسب الطلب للآلات الصناعية',
  },
  'is-guvenligi-el-bicaklari': {
    name: 'سكاكين الأمان واليد',
    description: 'سكاكين يد وأدوات قطع احترافية متوافقة مع معايير السلامة',
  },
};

// =============================================================================
// الفئات الفرعية
// =============================================================================

export const subcategoriesAr: SubcategoryTranslations = {
  // --- الشفرات الصناعية ---
  '3-delikli-dilme': {
    name: 'شفرات التقطيع 3 ثقوب',
    description: 'شفرات صناعية قياسية بـ 3 ثقوب',
  },
  'slotted-dilme': {
    name: 'شفرات التقطيع المشقوقة',
    description: 'شفرات مشقوقة عالية الأداء',
  },
  'injektor-dilme': {
    name: 'شفرات التقطيع الحاقنة',
    description: 'شفرات حاقنة للقطع الدقيق',
  },
  'tek-kenarli': {
    name: 'شفرات حافة واحدة',
    description: 'شفرات حافة واحدة للاستخدام الآمن',
  },
  'trapez-bicaklar': {
    name: 'شفرات شبه منحرف',
    description: 'شفرات قطع شبه منحرف متعددة الاستخدامات',
  },
  'kanca-bicaklar': {
    name: 'شفرات الخطاف',
    description: 'شفرات خطاف للتطبيقات الخاصة',
  },
  'falcata-bicaklar': {
    name: 'شفرات القطر | قاطع',
    description: 'أطراف شفرات قاطع دقيقة',
  },
  'hobi-jiletleri': {
    name: 'شفرات الهواية',
    description: 'شفرات لأعمال الهواية والحرف',
  },
  'bisturi-nester': {
    name: 'مشرط - شفرات جراحية',
    description: 'مشرط وشفرات جراحية للقطع الدقيق الطبي والصناعي',
  },
  'kesik-elyaf': {
    name: 'شفرات الألياف المفرومة',
    description: 'شفرات مصممة خصيصاً لقطع الألياف',
  },
  'cam-elyaf': {
    name: 'شفرات الألياف الزجاجية',
    description: 'شفرات عالية الأداء لقطع الألياف الزجاجية',
  },
  'dairesel-jiletler': {
    name: 'شفرات دائرية',
    description: 'شفرات دائرية للقطع الدوار',
  },
  'besgen-bicaklar': {
    name: 'شفرات خماسية',
    description: 'شفرات قطع خماسية بهندسة خاصة',
  },
  'lamel-yaprak': {
    name: 'شفرات صفائحية / ورقية',
    description: 'شفرات صفائحية للقطع الرقيق والدقيق',
  },
  'mikrotom-jilet': {
    name: 'شفرات الأنسجة / الميكروتوم',
    description: 'شفرات ميكروتوم لتطبيقات المختبرات والأنسجة',
  },
  'lasik-mikrokeratom': {
    name: 'شفرات الليزك / الميكروكيراتوم',
    description: 'شفرات ميكروكيراتوم لجراحة العيون والتطبيقات الطبية',
  },
  'cam-kaziyici': {
    name: 'كاشطة الزجاج',
    description: 'كاشطات لإزالة الملصقات والبقايا من الأسطح الزجاجية',
  },
  'klasik-jilet': {
    name: 'شفرات الحلاقة الكلاسيكية',
    description: 'شفرات حلاقة كلاسيكية تقليدية مزدوجة الحافة',
  },
  'alci-levha': {
    name: 'شفرات الجبس (الجصي)',
    description: 'شفرات خاصة لقطع الجبس والألواح الجصية',
  },
  'ok-bicaklar': {
    name: 'شفرات السهم',
    description: 'شفرات وأمواس السهم الاحترافية',
  },

  // --- سكاكين الآلات ---
  'ileri-islem': {
    name: 'سكاكين المعالجة',
    description: 'سكاكين لتطبيقات المعالجة الصناعية',
  },
  'termoform-vakum': {
    name: 'سكاكين التشكيل الحراري والفراغي',
    description: 'لآلات التغليف الحرارية والفراغية',
  },
  'dairesel-dilme': {
    name: 'سكاكين التقطيع الدائرية',
    description: 'سكاكين لآلات التقطيع الدائرية',
  },
  'geri-donusum': {
    name: 'سكاكين إعادة التدوير',
    description: 'سكاكين لعمليات إعادة التدوير',
  },
  'oluklu-mukavva': {
    name: 'سكاكين تقطيع الكرتون المموج',
    description: 'سكاكين خاصة لتقطيع الكرتون والمموج',
  },
  'doner-kesim': {
    name: 'سكاكين القطع الدوارة',
    description: 'سكاكين لآلات القطع الدوارة',
  },
  'disli-bicaklar': {
    name: 'سكاكين مسننة',
    description: 'سكاكين قطع مسننة بأسنان منشار',
  },
  'dairesel-ezici': {
    name: 'سكاكين السحق الدائرية',
    description: 'لعمليات السحق والقطع الدائرية',
  },
  'et-acma': {
    name: 'سكاكين السلخ (إزالة الجلد)',
    description: 'سكاكين احترافية لمعالجة اللحوم والسلخ',
  },
  'logsaw-kagit': {
    name: 'شفرات المنشار اللفي',
    description: 'شفرات منشار لفي لإنتاج ورق التواليت والمناديل',
  },
  'masura-kesim': {
    name: 'سكاكين قطع الأنابيب',
    description: 'سكاكين لقطع الأنابيب والبكرات',
  },
  'kutu-kapama': {
    name: 'سكاكين إغلاق الصناديق - الشريط',
    description: 'لآلات التغليف وإغلاق الشريط',
  },
  'zig-zag': {
    name: 'سكاكين الزجزاج',
    description: 'سكاكين خاصة لنمط القطع المتعرج',
  },
  'serit-bicaklar': {
    name: 'سكاكين الشريط',
    description: 'مناشير شريطية وسكاكين قطع',
  },
  'tray-kalip': {
    name: 'سكاكين قوالب الصواني (الأوعية)',
    description: 'سكاكين لقطع قوالب الصواني والأوعية',
  },
  'sosis-siyirma': {
    name: 'سكاكين تجريد السجق',
    description: 'سكاكين تجريد لخطوط إنتاج السجق',
  },
  'cnc-bicaklari': {
    name: 'سكاكين CNC',
    description: 'سكاكين قطع لآلات التحكم الرقمي',
  },
  'plotter-bicaklari': {
    name: 'شفرات البلوتر',
    description: 'شفرات لأجهزة القطع الرقمية',
  },

  // --- سكاكين الأمان واليد ---
  'oto-geri-cekilebilir': {
    name: 'سكاكين قابلة للسحب التلقائي',
    description: 'سكاكين أمان تقفل تلقائياً بعد القطع',
  },
  'sabit-uclu': {
    name: 'سكاكين ثابتة الشفرة',
    description: 'قواطع أمان بطرف شفرة ثابت',
  },
  'guvenlik-bicaklari': {
    name: 'سكاكين الأمان',
    description: 'سكاكين خاصة بشهادة السلامة',
  },
  'maket-bicaklari': {
    name: 'سكاكين الاستخدام العام',
    description: 'سكاكين وأدوات قطع احترافية للاستخدام العام',
  },
  'capak-alma-hobi': {
    name: 'سكاكين إزالة النتوءات والهواية',
    description: 'سكاكين خاصة للعمل التفصيلي',
  },
  'olfa-dairesel': {
    name: 'شفرات OLFA الدائرية',
    description: 'شفرات قطع دائرية من علامة OLFA',
  },
  'olfa-falcata': {
    name: 'شفرات OLFA القابلة للكسر',
    description: 'سلسلة شفرات OLFA الاحترافية القابلة للكسر',
  },
  'olfa-is-guvenligi': {
    name: 'سكاكين OLFA الآمنة',
    description: 'منتجات OLFA المعتمدة للسلامة',
  },
  'muhafaza-atik-kutulari': {
    name: 'حاويات التخزين والتخلص',
    description: 'حاويات تخلص آمنة لشفرات أدوات القطع المستعملة',
  },
};
