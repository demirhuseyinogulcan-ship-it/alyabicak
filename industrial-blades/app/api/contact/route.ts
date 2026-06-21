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
import { i18nConfig, isLocale, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n'

// API messages are now loaded from the i18n dictionary system
// See: lib/i18n/dictionaries/{locale}.ts → apiMessages section

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
  if (localeCookie && isLocale(localeCookie)) {
    return localeCookie
  }

  // 2. Accept-Language header'dan kontrol et
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2))
      .find((lang): lang is Locale => isLocale(lang))

    if (preferredLocale) return preferredLocale
  }

  return i18nConfig.defaultLocale
}

export async function POST(request: NextRequest) {
  // ─── FORM DEVRE DIŞI ───
  // İletişim formu şu an aktif değil. E-posta servisi bağlandığında
  // aşağıdaki kodu aktifleştir ve bu early-return'ü kaldır.
  // Neden: Formspree/Resend olmadan endpoint açık bırakmak spam riskine
  // ve Vercel serverless kaynak tüketimine yol açar.
  const locale = getLocaleFromRequest(request)
  const dict = await getDictionary(locale)
  return NextResponse.json(
    { success: true, message: dict.apiMessages.successMessage },
    { status: 200 }
  )

  /* ─── AKTİFLEŞTİRME: Yukarıdaki return'ü sil, aşağıdaki bloğu uncomment et ───
  const t = dict.apiMessages

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
  */
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
