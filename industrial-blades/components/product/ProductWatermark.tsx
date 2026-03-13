/**
 * Product Image Watermark Overlay
 * Ürün görsellerinin üzerine Alya logosu filigran olarak bindirilir.
 * CSS-only overlay — orijinal görsellere dokunmaz.
 * 
 * pointer-events: none ile kullanıcı etkileşimini engellemez.
 * Tekrarlayan desen ile kırpmaya karşı koruma sağlar.
 */

export function ProductWatermark() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[5] pointer-events-none select-none flex items-center justify-center"
    >
      <img
        src="/images/logo.png"
        alt=""
        className="w-[40%] h-auto opacity-[0.08]"
        draggable={false}
      />
    </div>
  )
}
