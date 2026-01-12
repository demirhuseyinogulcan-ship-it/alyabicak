/**
 * IndexNow API Route
 * 
 * POST /api/indexnow - URL'leri Bing/Yandex'e submit et
 * 
 * Kullanım:
 * curl -X POST https://alyablade.com/api/indexnow \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: Bearer YOUR_SECRET" \
 *   -d '{"urls": ["https://alyablade.com/en/products/new-product"]}'
 * 
 * Veya tüm siteyi submit et:
 * curl -X POST https://alyablade.com/api/indexnow \
 *   -H "Authorization: Bearer YOUR_SECRET" \
 *   -d '{"submitAll": true}'
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  submitToIndexNow, 
  submitAllUrlsToIndexNow 
} from '@/lib/seo/indexnow';

// Rate limiting cache (IP -> timestamp array)
const rateLimitCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // Max 10 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  return request.headers.get('x-forwarded-for') || 
         request.headers.get('cf-connecting-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitCache.get(ip) || [];
  
  // Clean old timestamps
  const recentTimestamps = timestamps.filter(ts => (now - ts) < RATE_LIMIT_WINDOW);
  
  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }
  
  recentTimestamps.push(now);
  rateLimitCache.set(ip, recentTimestamps);
  return false;
}

// Simple authorization check
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const apiSecret = process.env.INDEXNOW_WEBHOOK_SECRET;
  
  if (!apiSecret) {
    console.warn('[IndexNow API] INDEXNOW_WEBHOOK_SECRET not configured');
    return false;
  }
  
  return authHeader === `Bearer ${apiSecret}`;
}

export async function POST(request: NextRequest) {
  // Rate limiting check
  const ip = getRateLimitKey(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Max 10 requests per minute.' },
      { status: 429 }
    );
  }

  // Authorization check
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    
    // Submit all URLs
    if (body.submitAll === true) {
      const results = await submitAllUrlsToIndexNow();
      return NextResponse.json({
        success: true,
        message: 'All URLs submitted to IndexNow',
        results,
      });
    }

    // Submit specific URLs
    if (body.urls && Array.isArray(body.urls)) {
      const host = body.host || 'alyablade.com';
      const result = await submitToIndexNow(body.urls, host);
      return NextResponse.json({
        success: result.success,
        result,
      });
    }

    return NextResponse.json(
      { error: 'Invalid request. Provide "urls" array or "submitAll: true"' },
      { status: 400 }
    );

  } catch (error) {
    console.error('[IndexNow API] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Health check ve bilgi
export async function GET() {
  const hasApiKey = !!process.env.INDEXNOW_API_KEY;
  const hasWebhookSecret = !!process.env.INDEXNOW_WEBHOOK_SECRET;

  return NextResponse.json({
    service: 'IndexNow API',
    status: hasApiKey ? 'configured' : 'not_configured',
    endpoints: {
      POST: '/api/indexnow - Submit URLs to Bing/Yandex',
    },
    configuration: {
      apiKey: hasApiKey ? 'set' : 'missing (INDEXNOW_API_KEY)',
      webhookSecret: hasWebhookSecret ? 'set' : 'missing (INDEXNOW_WEBHOOK_SECRET)',
    },
    documentation: 'https://www.indexnow.org/documentation',
  });
}
