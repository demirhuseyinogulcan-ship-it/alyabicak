/**
 * Sitemap Ping Script
 * 
 * Build sonrası Google ve Bing'e sitemap güncellemesi bildirir.
 * Google'ın resmi ping URL'i: https://www.google.com/ping?sitemap=URL
 * Bing de IndexNow'u destekler ama ek olarak sitemap ping de yapılabilir.
 * 
 * Kullanım:
 *   node scripts/ping-sitemaps.mjs
 *   veya package.json'a: "postbuild": "node scripts/ping-sitemaps.mjs"
 */

const SITEMAPS = [
  'https://alyabicak.com/sitemap.xml',
  'https://alyablade.com/sitemap.xml',
  'https://alyabicak.com/image-sitemap.xml',
  'https://alyablade.com/image-sitemap.xml',
]

const PING_URLS = [
  // Google Sitemap Ping
  (sitemap) => `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
  // Bing Sitemap Ping (ek olarak IndexNow da zaten var)
  (sitemap) => `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
]

async function ping(url, label) {
  try {
    const res = await fetch(url, { method: 'GET' })
    const status = res.ok ? '✓' : `✗ ${res.status}`
    console.log(`  ${status} ${label}`)
    return res.ok
  } catch (err) {
    console.log(`  ✗ ${label} — ${err.message}`)
    return false
  }
}

async function main() {
  console.log('\n🔔 Sitemap Ping — Google & Bing bilgilendirme\n')
  
  let success = 0
  let total = 0

  for (const sitemap of SITEMAPS) {
    console.log(`📍 ${sitemap}`)
    for (const urlBuilder of PING_URLS) {
      total++
      const url = urlBuilder(sitemap)
      const ok = await ping(url, url.includes('google') ? 'Google' : 'Bing')
      if (ok) success++
    }
  }

  console.log(`\n📊 Sonuç: ${success}/${total} başarılı\n`)
  
  // CI'da hata durumunda exit code 1 dönmemesini sağla
  // Ping başarısız olsa bile build'i kırmak istemeyiz
  process.exit(0)
}

main()
