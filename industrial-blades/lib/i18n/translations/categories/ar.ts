/**
 * Categories - Arabic Translations
 * 
 * Arabic translations for main categories and subcategories.
 * ID values are in English, matching the new standardized structure.
 */

import type { CategoryTranslations, SubcategoryTranslations } from './tr';

// =============================================================================
// MAIN CATEGORIES
// =============================================================================

export const categoriesAr: CategoryTranslations = {
  'industrial-blades': {
    name: 'الشفرات الصناعية',
    description: 'شفرات صناعية احترافية وأدوات قطع للاستخدام الصناعي',
  },
  'machine-knives': {
    name: 'سكاكين الآلات',
    description: 'سكاكين مصنعة خصيصاً وأنظمة قطع للآلات الصناعية',
  },
  'safety-knives': {
    name: 'سكاكين الأمان واليد',
    description: 'سكاكين يد احترافية وأدوات قطع متوافقة مع معايير السلامة',
  },
};

// =============================================================================
// SUBCATEGORIES
// =============================================================================

export const subcategoriesAr: SubcategoryTranslations = {
  // --- INDUSTRIAL BLADES ---
  '3-hole-slitting': {
    name: 'شفرات التقطيع ذات 3 ثقوب',
    description: 'شفرات تقطيع احترافية ذات 3 ثقوب لقطع الأفلام والرقائق والورق والتغليف. تصنيع من الفولاذ عالي الكربون مع خيارات الطلاء لأداء قطع طويل الأمد.',
    seoKeywords: ['شفرة صناعية', 'شفرات القطع', 'شفرات تقطيع الأفلام', 'شفرة ثلاثية الثقوب', 'شفرات التغليف', 'شفرات الورق', 'شفرات مطلية'],
  },
  'slotted-slitting': {
    name: 'شفرات التقطيع المشقوقة',
    description: 'شفرات مشقوقة عالية الأداء',
  },
  'injector-slitting': {
    name: 'شفرات التقطيع الحاقنة',
    description: 'شفرات حاقنة للقطع الدقيق',
  },
  'single-edge': {
    name: 'شفرات أحادية الحافة',
    description: 'شفرات أحادية الحافة للاستخدام الآمن',
  },
  'trapezoid-blades': {
    name: 'شفرات شبه منحرفة',
    description: 'شفرات قطع متعددة الأغراض',
  },
  'hook-blades': {
    name: 'شفرات الخطاف',
    description: 'شفرات خطافية للتطبيقات الخاصة',
  },
  'craft-blades': {
    name: 'شفرات الحرف والقطع',
    description: 'رؤوس شفرات دقيقة للقطع',
  },
  'hobby-blades': {
    name: 'شفرات الهوايات',
    description: 'شفرات للهوايات والأعمال اليدوية',
  },
  'scalpel-blades': {
    name: 'شفرات المشرط الجراحي',
    description: 'شفرات مشرط وجراحة للقطع الدقيق الطبي والصناعي',
  },
  'chopped-fiber': {
    name: 'شفرات الألياف المقطعة',
    description: 'شفرات مصممة خصيصاً لقطع الألياف',
  },
  'fiberglass': {
    name: 'شفرات الألياف الزجاجية',
    description: 'شفرات عالية الأداء لقطع الألياف الزجاجية',
  },
  'circular-blades': {
    name: 'الشفرات الدائرية',
    description: 'شفرات دائرية للقطع الدوار',
  },
  'pentagon-blades': {
    name: 'شفرات خماسية',
    description: 'شفرات قطع ذات هندسة خاصة',
  },
  'lamella-blades': {
    name: 'شفرات الصفائح',
    description: 'شفرات صفائحية للقطع الرقيق والدقيق',
  },
  'microtome-blades': {
    name: 'شفرات الميكروتوم',
    description: 'شفرات ميكروتوم للمختبرات وتطبيقات علم الأنسجة',
  },
  'microkeratome-blades': {
    name: 'شفرات الليزك والميكروكيراتوم',
    description: 'شفرات ميكروكيراتوم لجراحة العيون والتطبيقات الطبية',
  },
  'glass-scraper': {
    name: 'كاشطة الزجاج',
    description: 'كاشطات لتنظيف الملصقات والبقايا على الأسطح الزجاجية',
  },
  'classic-blades': {
    name: 'شفرات كلاسيكية',
    description: 'شفرات كلاسيكية تقليدية مزدوجة الحافة',
  },
  'drywall-blades': {
    name: 'شفرات الجبس',
    description: 'شفرات خاصة لقطع ألواح الجبس',
  },
  'arrow-blades': {
    name: 'شفرات السهم',
    description: 'شفرات سهم احترافية',
  },

  // --- MACHINE KNIVES ---
  'advanced-processing': {
    name: 'سكاكين المعالجة المتقدمة',
    description: 'سكاكين لتطبيقات المعالجة الصناعية المتقدمة',
  },
  'thermoform-vacuum': {
    name: 'سكاكين التشكيل الحراري والفراغ',
    description: 'لآلات التشكيل الحراري والتغليف بالفراغ',
  },
  'circular-slitting': {
    name: 'سكاكين التقطيع الدائري',
    description: 'سكاكين لآلات التقطيع الدائري',
  },
  'recycling-knives': {
    name: 'سكاكين إعادة التدوير',
    description: 'سكاكين لعمليات إعادة التدوير',
  },
  'corrugated-slitting': {
    name: 'سكاكين تقطيع الكرتون المموج',
    description: 'سكاكين خاصة لتقطيع الكرتون المموج',
  },
  'rotary-cutting': {
    name: 'سكاكين القطع الدوار',
    description: 'سكاكين لآلات القطع الدوار',
  },
  'serrated-knives': {
    name: 'سكاكين مسننة',
    description: 'سكاكين قطع ذات أسنان منشار',
  },
  'circular-crusher': {
    name: 'سكاكين الطحن الدائري',
    description: 'لعمليات الطحن والقطع الدائري',
  },
  'derinder-knives': {
    name: 'سكاكين نزع الجلد',
    description: 'سكاكين احترافية لمعالجة اللحوم ونزع الجلد',
  },
  'logsaw-knives': {
    name: 'سكاكين قطع اللفات',
    description: 'سكاكين لفات ورق التواليت والمناشف الورقية',
  },
  'core-cutting': {
    name: 'سكاكين قطع الأنابيب',
    description: 'سكاكين لقطع الأنابيب والبكرات',
  },
  'case-sealer': {
    name: 'سكاكين إغلاق الصناديق',
    description: 'لآلات التغليف وإغلاق الصناديق',
  },
  'zig-zag-knives': {
    name: 'سكاكين متعرجة',
    description: 'سكاكين خاصة لأنماط القطع المتعرجة',
  },
  'band-knives': {
    name: 'سكاكين الشريط',
    description: 'مناشير شريطية وسكاكين قطع',
  },
  'tray-mold': {
    name: 'سكاكين قوالب الصواني',
    description: 'سكاكين لقطع قوالب الصواني والأوعية',
  },
  'sausage-peeling': {
    name: 'سكاكين تقشير النقانق',
    description: 'سكاكين تقشير لخطوط إنتاج النقانق',
  },
  'cnc-knives': {
    name: 'سكاكين CNC',
    description: 'سكاكين قطع لآلات CNC',
  },
  'plotter-knives': {
    name: 'سكاكين الراسمة',
    description: 'سكاكين لراسمات القطع الرقمية',
  },

  // --- SAFETY KNIVES ---
  'auto-retract': {
    name: 'سكاكين أمان ذاتية السحب',
    description: 'سكاكين أمان تقفل تلقائياً بعد القطع',
  },
  'fixed-blade': {
    name: 'سكاكين ذات شفرة ثابتة',
    description: 'قواطع أمان ذات شفرة ثابتة',
  },
  'safety-cutters': {
    name: 'قواطع الأمان',
    description: 'أدوات قطع معتمدة للسلامة',
  },
  'utility-knives': {
    name: 'سكاكين متعددة الاستخدام',
    description: 'سكاكين احترافية متعددة الاستخدام',
  },
  'deburring-hobby': {
    name: 'سكاكين إزالة النتوءات والهوايات',
    description: 'سكاكين خاصة للأعمال التفصيلية',
  },
  'olfa-rotary': {
    name: 'قواطع OLFA الدوارة',
    description: 'شفرات قطع دوارة من ماركة OLFA',
  },
  'olfa-craft': {
    name: 'سكاكين OLFA للحرف',
    description: 'سلسلة OLFA الاحترافية للحرف',
  },
  'olfa-safety': {
    name: 'سكاكين أمان OLFA',
    description: 'منتجات OLFA المعتمدة للسلامة',
  },
  'blade-disposal': {
    name: 'حاويات التخلص من الشفرات',
    description: 'حاويات لجمع نفايات أدوات القطع بشكل آمن',
  },
};
