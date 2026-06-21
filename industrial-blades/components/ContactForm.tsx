/**
 * Contact Form Component
 * Zod validation ile form yönetimi
 */

'use client'

import { useState, useCallback } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { createContactFormSchema, type ContactFormData, validateForm } from '@/lib/validations'
import { Button } from '@/components/ui'
import { useLocale } from '@/lib/i18n/client'
import { trackContactFormSubmit } from '@/lib/analytics'

type FormErrors = Partial<Record<keyof ContactFormData, string>>

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  consent: false,
}

export default function ContactForm() {
  const { locale, dictionary } = useLocale();
  const t = dictionary.contactForm;

  // Locale-aware Zod schema
  const contactFormSchema = createContactFormSchema(locale);

  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Tek alan validasyonu
  const validateField = useCallback((name: keyof ContactFormData, value: unknown) => {
    const fieldSchema = contactFormSchema.shape[name]
    const result = fieldSchema.safeParse(value)

    if (!result.success) {
      return result.error.issues[0]?.message || dictionary.common.error
    }
    return undefined
  }, [dictionary])

  // Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Tüm alanları touched olarak işaretle
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof ContactFormData] = true
      return acc
    }, {} as typeof touched)
    setTouched(allTouched)

    // Form validasyonu
    const validation = validateForm(contactFormSchema, formData)

    if (!validation.success) {
      setErrors(validation.errors as FormErrors)
      return
    }

    setStatus('sending')
    setErrors({})

    try {
      // API endpoint'e gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Bir hata oluştu')
      }

      // Track successful form submission in analytics
      trackContactFormSubmit({
        subject: formData.subject,
        hasCompany: !!formData.company,
        locale: locale,
      })

      setStatus('success')
      setFormData(initialFormData)
      setTouched({})

      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submit error:', error)
      setStatus('error')
    }
  }

  // Input değişikliği
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({ ...prev, [name]: newValue }))

    // Eğer alan daha önce dokunulmuşsa, anlık validasyon yap
    if (touched[name as keyof ContactFormData]) {
      const error = validateField(name as keyof ContactFormData, newValue)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  // Blur olduğunda validasyon
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name as keyof ContactFormData, fieldValue)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  // Input class helper
  const getInputClass = (fieldName: keyof ContactFormData) => {
    const baseClass = "w-full px-4 py-3 border rounded-lg transition-all focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    const hasError = touched[fieldName] && errors[fieldName]

    return `${baseClass} ${hasError ? 'border-red-500 bg-red-50' : 'border-steel-300'}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-2">
          {t.name} <span className="text-red-500" aria-label={t.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClass('name')}
          placeholder={t.namePlaceholder}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-2">
          {t.email} <span className="text-red-500" aria-label={t.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClass('email')}
          placeholder={t.emailPlaceholder}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone & Company - 2 columns on desktop */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-2">
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass('phone')}
            placeholder={t.phonePlaceholder}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {touched.phone && errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-2">
            {t.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass('company')}
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-steel-700 mb-2">
          {t.subject} <span className="text-red-500" aria-label={t.required}>*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClass('subject')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          <option value="">{t.selectSubject}</option>
          <option value="fiyat-teklifi">{t.subjects.priceQuote}</option>
          <option value="urun-bilgisi">{t.subjects.productInfo}</option>
          <option value="danismanlik">{t.subjects.consulting}</option>
          <option value="ozel-uretim">{t.subjects.customProduction}</option>
          <option value="diger">{t.subjects.other}</option>
        </select>
        {touched.subject && errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-2">
          {t.message} <span className="text-red-500" aria-label={t.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${getInputClass('message')} resize-none`}
          placeholder={t.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
        <p className="mt-1 text-xs text-steel-500">
          {formData.message.length}/2000 {t.characters}
        </p>
      </div>

      {/* KVKK Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 w-4 h-4 text-primary-600 border-steel-300 rounded focus:ring-primary-500"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        <div>
          <label htmlFor="consent" className="text-sm text-steel-700">
            <a href={`/${locale}/privacy-policy`} className="text-primary-600 hover:underline">
              {t.kvkkConsent}
            </a>
            {t.kvkkConsentText}{' '}
            <span className="text-red-500" aria-label={t.required}>*</span>
          </label>
          {touched.consent && errors.consent && (
            <p id="consent-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div
          className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
          role="alert"
          aria-live="polite"
        >
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-800 font-medium">
            {t.successMessage}
          </p>
        </div>
      )}

      {status === 'error' && (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-800 font-medium">
            {t.errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        fullWidth
        isLoading={status === 'sending'}
        icon={Send}
        iconPosition="left"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? t.sending : t.send}
      </Button>

      <p className="text-sm text-steel-500 text-center">
        {t.privacyConsent}
      </p>
    </form>
  )
}
