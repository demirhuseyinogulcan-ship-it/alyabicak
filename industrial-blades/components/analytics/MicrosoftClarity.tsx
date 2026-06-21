/**
 * Microsoft Clarity Integration
 *
 * Tracks: Session recordings, heatmaps, click maps, scroll maps
 * Free unlimited recordings - perfect for UX analysis
 *
 * Setup: Replace CLARITY_PROJECT_ID in .env.local
 * Get ID from: https://clarity.microsoft.com
 */

'use client'

import Script from 'next/script'

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

export default function MicrosoftClarity() {
  // Don't render if no project ID configured
  if (!CLARITY_PROJECT_ID) {
    return null
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  )
}
