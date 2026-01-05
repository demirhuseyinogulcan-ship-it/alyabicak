/**
 * Contact Form API Route
 * 
 * İletişim formu verilerini işler ve e-posta gönderir.
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

export async function POST(request: NextRequest) {
  try {
    // Rate limiting kontrolü
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.' },
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
          error: 'Geçersiz form verisi',
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
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
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
        message: 'Mesajınız alındı (development mode).' 
      })
    }

    // Production'da hata ver
    return NextResponse.json(
      { success: false, error: 'E-posta servisi yapılandırılmamış.' },
      { status: 500 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
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
