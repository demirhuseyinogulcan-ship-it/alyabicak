/**
 * Zod Validation Schemas
 * Form ve data validasyonları için merkezi şema tanımları
 *
 * i18n: Validation mesajları locale-aware factory fonksiyonlarıyla üretilir.
 * Statik schema'lar (locale bilmeyenler) Türkçe fallback mesaj kullanır.
 */

import { z } from 'zod'

// =============================================================================
// i18n VALIDATION MESSAGES
// =============================================================================

/** Tüm validation mesajlarının key haritası */
const validationMessages = {
  tr: {
    nameMin: 'İsim en az 2 karakter olmalıdır',
    nameMax: 'İsim en fazla 100 karakter olabilir',
    emailInvalid: 'Geçerli bir e-posta adresi giriniz',
    phoneMin: 'Telefon numarası en az 10 karakter olmalıdır',
    phoneMax: 'Telefon numarası en fazla 20 karakter olabilir',
    phoneInvalid: 'Geçerli bir telefon numarası giriniz',
    companyMax: 'Şirket adı en fazla 100 karakter olabilir',
    subjectRequired: 'Lütfen bir konu seçiniz',
    messageMin: 'Mesaj en az 10 karakter olmalıdır',
    messageMax: 'Mesaj en fazla 2000 karakter olabilir',
    consentRequired: 'KVKK onayı gereklidir',
    searchMin: 'Arama terimi en az 2 karakter olmalıdır',
    searchMax: 'Arama terimi en fazla 100 karakter olabilir',
    invalidValue: 'Geçersiz değer',
  },
  en: {
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name must be at most 100 characters',
    emailInvalid: 'Please enter a valid email address',
    phoneMin: 'Phone number must be at least 10 characters',
    phoneMax: 'Phone number must be at most 20 characters',
    phoneInvalid: 'Please enter a valid phone number',
    companyMax: 'Company name must be at most 100 characters',
    subjectRequired: 'Please select a subject',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message must be at most 2000 characters',
    consentRequired: 'Privacy policy consent is required',
    searchMin: 'Search term must be at least 2 characters',
    searchMax: 'Search term must be at most 100 characters',
    invalidValue: 'Invalid value',
  },
  ar: {
    nameMin: 'يجب أن يكون الاسم حرفين على الأقل',
    nameMax: 'يجب ألا يتجاوز الاسم 100 حرف',
    emailInvalid: 'يرجى إدخال بريد إلكتروني صالح',
    phoneMin: 'يجب أن يكون رقم الهاتف 10 أحرف على الأقل',
    phoneMax: 'يجب ألا يتجاوز رقم الهاتف 20 حرفًا',
    phoneInvalid: 'يرجى إدخال رقم هاتف صالح',
    companyMax: 'يجب ألا يتجاوز اسم الشركة 100 حرف',
    subjectRequired: 'يرجى اختيار موضوع',
    messageMin: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
    messageMax: 'يجب ألا تتجاوز الرسالة 2000 حرف',
    consentRequired: 'الموافقة على سياسة الخصوصية مطلوبة',
    searchMin: 'يجب أن يكون مصطلح البحث حرفين على الأقل',
    searchMax: 'يجب ألا يتجاوز مصطلح البحث 100 حرف',
    invalidValue: 'قيمة غير صالحة',
  },
  ru: {
    nameMin: 'Имя должно содержать не менее 2 символов',
    nameMax: 'Имя должно содержать не более 100 символов',
    emailInvalid: 'Введите действительный адрес электронной почты',
    phoneMin: 'Номер телефона должен содержать не менее 10 символов',
    phoneMax: 'Номер телефона должен содержать не более 20 символов',
    phoneInvalid: 'Введите действительный номер телефона',
    companyMax: 'Название компании должно содержать не более 100 символов',
    subjectRequired: 'Пожалуйста, выберите тему',
    messageMin: 'Сообщение должно содержать не менее 10 символов',
    messageMax: 'Сообщение должно содержать не более 2000 символов',
    consentRequired: 'Необходимо согласие с политикой конфиденциальности',
    searchMin: 'Поисковый запрос должен содержать не менее 2 символов',
    searchMax: 'Поисковый запрос должен содержать не более 100 символов',
    invalidValue: 'Недопустимое значение',
  },
  fr: {
    nameMin: 'Le nom doit contenir au moins 2 caractères',
    nameMax: 'Le nom ne doit pas dépasser 100 caractères',
    emailInvalid: 'Veuillez entrer une adresse e-mail valide',
    phoneMin: 'Le numéro de téléphone doit contenir au moins 10 caractères',
    phoneMax: 'Le numéro de téléphone ne doit pas dépasser 20 caractères',
    phoneInvalid: 'Veuillez entrer un numéro de téléphone valide',
    companyMax: 'Le nom de l\'entreprise ne doit pas dépasser 100 caractères',
    subjectRequired: 'Veuillez sélectionner un sujet',
    messageMin: 'Le message doit contenir au moins 10 caractères',
    messageMax: 'Le message ne doit pas dépasser 2000 caractères',
    consentRequired: 'Le consentement à la politique de confidentialité est requis',
    searchMin: 'Le terme de recherche doit contenir au moins 2 caractères',
    searchMax: 'Le terme de recherche ne doit pas dépasser 100 caractères',
    invalidValue: 'Valeur invalide',
  },
} as const

type ValidationLocale = keyof typeof validationMessages

function getMessages(locale: string = 'tr') {
  return validationMessages[locale as ValidationLocale] || validationMessages.tr
}

// =============================================================================
// İLETİŞİM FORMU — Locale-aware Factory
// =============================================================================

export function createContactFormSchema(locale: string = 'tr') {
  const m = getMessages(locale)

  return z.object({
    name: z
      .string()
      .min(2, m.nameMin)
      .max(100, m.nameMax),

    email: z
      .string()
      .email(m.emailInvalid),

    phone: z
      .string()
      .min(10, m.phoneMin)
      .max(20, m.phoneMax)
      .regex(
        /^[\d\s\+\-\(\)]+$/,
        m.phoneInvalid
      )
      .optional()
      .or(z.literal('')),

    company: z
      .string()
      .max(100, m.companyMax)
      .optional()
      .or(z.literal('')),

    subject: z
      .string()
      .min(1, m.subjectRequired),

    message: z
      .string()
      .min(10, m.messageMin)
      .max(2000, m.messageMax),

    consent: z
      .boolean()
      .refine((val) => val === true, m.consentRequired),
  })
}

/** Statik schema (API route + backward compat — Türkçe fallback) */
export const contactFormSchema = createContactFormSchema('tr')

export type ContactFormData = z.infer<typeof contactFormSchema>

// =============================================================================
// ÜRÜN FİLTRELEME
// =============================================================================

export const productFilterSchema = z.object({
  categoryId: z.string().optional(),
  subcategoryId: z.string().optional(),
  search: z.string().max(100).optional(),
  inStock: z.boolean().optional(),
  featured: z.boolean().optional(),
  sortBy: z.enum(['name', 'newest', 'popular']).optional(),
})

export type ProductFilterData = z.infer<typeof productFilterSchema>

// =============================================================================
// ARAMA — Locale-aware Factory
// =============================================================================

export function createSearchSchema(locale: string = 'tr') {
  const m = getMessages(locale)

  return z.object({
    query: z
      .string()
      .min(2, m.searchMin)
      .max(100, m.searchMax),
  })
}

/** Statik schema (backward compat — Türkçe fallback) */
export const searchSchema = createSearchSchema('tr')

export type SearchData = z.infer<typeof searchSchema>

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/**
 * Form verilerini validate et ve hataları döndür
 */
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
  const result = schema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  const errors: Record<string, string> = {}
  result.error.issues.forEach((err) => {
    const path = err.path.join('.')
    if (!errors[path]) {
      errors[path] = err.message
    }
  })

  return { success: false, errors }
}

/**
 * Tek bir alanı validate et
 */
export function validateField<T>(
  schema: z.ZodSchema<T>,
  value: unknown,
  locale: string = 'tr'
): string | null {
  const result = schema.safeParse(value)

  if (result.success) {
    return null
  }

  return result.error.issues[0]?.message || getMessages(locale).invalidValue
}

