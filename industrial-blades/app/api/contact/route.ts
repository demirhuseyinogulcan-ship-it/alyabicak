/**
 * Contact Form API Route
 * 
 * İletişim formu verilerini işler ve e-posta gönderir.
 * i18n: Request header'dan locale alarak çok dilli hata mesajları
 * 
 * Kullanım:
 * 1. Formspree: FORMSPREE_ENDPOINT env variable'ı ile
 * 2. Resend: RESEND_API_KEY env variable'ı ile
 * 3. Custom SMTP: Nodemailer entegrasyonu
 * 
 * Environment Variables (.env.local):
 * FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
 * veya
 * RESEND_API_KEY=re_xxxxx
 * CONTACT_EMAIL=info@alyatekstil.com
 */

import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { i18nConfig, type Locale } from '@/lib/i18n/config'

// i18n API messages
const apiMessages = {
  tr: {
    rateLimited: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.',
    invalidFormData: 'Geçersiz form verisi',
    successMessage: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    developmentMode: 'Mesajınız alındı (development mode).',
    emailNotConfigured: 'E-posta servisi yapılandırılmamış.',
    genericError: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
  },
  en: {
    rateLimited: 'Too many requests. Please wait a minute.',
    invalidFormData: 'Invalid form data',
    successMessage: 'Your message has been sent successfully. We will get back to you shortly.',
    developmentMode: 'Message received (development mode).',
    emailNotConfigured: 'Email service not configured.',
    genericError: 'An error occurred. Please try again later.',
  },
  ar: {
    rateLimited: 'طلبات كثيرة جداً. يرجى الانتظار دقيقة.',
    invalidFormData: 'بيانات النموذج غير صالحة',
    successMessage: 'تم إرسال رسالتك بنجاح. سنعود إليك قريباً.',
    developmentMode: 'تم استلام الرسالة (وضع التطوير).',
    emailNotConfigured: 'خدمة البريد الإلكتروني غير مهيأة.',
    genericError: 'حدث خطأ. يرجى المحاولة لاحقاً.',
  },
  ru: {
    rateLimited: 'Слишком много запросов. Пожалуйста, подождите минуту.',
    invalidFormData: 'Неверные данные формы',
    successMessage: 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.',
    developmentMode: 'Сообщение получено (режим разработки).',
    emailNotConfigured: 'Служба электронной почты не настроена.',
    genericError: 'Произошла ошибка. Пожалуйста, попробуйте позже.',
  },
}

// Rate limiting için basit in-memory store
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 dakika
const MAX_REQUESTS = 5 // Dakikada max 5 istek

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return false
  }
  
  if (record.count >= MAX_REQUESTS) {
    return true
  }
  
  record.count++
  return false
}

// Helper to get locale from request
function getLocaleFromRequest(request: NextRequest): Locale {
  // 1. Cookie'den kontrol et
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && i18nConfig.locales.includes(localeCookie as Locale)) {
    return localeCookie as Locale
  }
  
  // 2. Accept-Language header'dan kontrol et
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2))
      .find((lang) => i18nConfig.locales.includes(lang as Locale))
    
    if (preferredLocale) return preferredLocale as Locale
  }
  
  return i18nConfig.defaultLocale
}

export async function POST(request: NextRequest) {
  const locale = getLocaleFromRequest(request)
  const t = apiMessages[locale]
  
  try {
    // Rate limiting kontrolü
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: t.rateLimited },
        { status: 429 }
      )
    }

    // Request body'yi parse et
    const body = await request.json()
    
    // Zod ile validasyon
    const validation = contactFormSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: t.invalidFormData,
          details: validation.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const formData = validation.data

    // E-posta gönderimi
    // Seçenek 1: Formspree kullan
    if (process.env.FORMSPREE_ENDPOINT) {
      const formspreeResponse = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Belirtilmedi',
          company: formData.company || 'Belirtilmedi',
          subject: formData.subject,
          message: formData.message,
          _subject: `[Alya Bıçak] Yeni İletişim: ${formData.subject}`,
        }),
      })

      if (!formspreeResponse.ok) {
        throw new Error('Formspree error')
      }

      return NextResponse.json({ 
        success: true, 
        message: t.successMessage 
      })
    }

    // Seçenek 2: Resend kullan (ileride eklenebilir)
    // if (process.env.RESEND_API_KEY) { ... }

    // Hiçbir servis yapılandırılmamışsa
    // Development'ta console'a log at
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Contact Form Submission:', formData)
      return NextResponse.json({ 
        success: true, 
        message: t.developmentMode 
      })
    }

    // Production'da hata ver
    return NextResponse.json(
      { success: false, error: t.emailNotConfigured },
      { status: 500 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: t.genericError },
      { status: 500 }
    )
  }
}

// OPTIONS - CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
