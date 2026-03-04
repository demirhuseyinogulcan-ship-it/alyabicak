/**
 * Blade Engineer - Canvas Drawing Engine
 * ISO 128 standartlarinda teknik cizim renderer
 * 
 * Tum cizimler mm biriminde, canvas'a px donusumu scale ile yapilir.
 * Hat kalinliklari ISO 128'e gore:
 *   - Gorunen kenarlar: 0.5mm (kalin)
 *   - Boyut cizgileri: 0.25mm (ince)
 *   - Merkez cizgileri: 0.25mm (kesikli)
 *   - Gizli kenarlar: 0.25mm (kesikli)
 */

import type {
  BladeGeometry,
  CircularParams,
  RectangularParams,
  OblongParams,
  TrapezoidParams,
  TriangularParams,
  HookParams,
  CustomParams,
  CanvasState,
  DimensionLine,
  ToothProfile,
} from './types'

// =============================================================================
// ISO RENK + CIZGI STANDARTLARI
// =============================================================================

const ISO = {
  // Cizgi kalinliklari (px olarak, scale ile carpilacak)
  THICK: 2,         // gorunen kenarlar
  THIN: 1,          // boyut, merkez, referans
  EXTRA_THIN: 0.5,  // hatching

  // Renkler
  OUTLINE: '#1a1a1a',       // ana kenarlar
  DIMENSION: '#1a73e8',     // boyut cizgileri + yazilar
  CENTER: '#e53e3e',        // merkez cizgileri
  HIDDEN: '#718096',        // gizli kenarlar
  HATCH: '#cbd5e1',         // tarama
  GRID: '#e2e8f0',          // grid
  GRID_MAJOR: '#cbd5e1',    // ana grid
  BACKGROUND: '#ffffff',    // beyaz kagit

  // Font
  FONT_FAMILY: 'Montserrat, system-ui, sans-serif',
  DIM_FONT_SIZE: 11,        // px
  TITLE_FONT_SIZE: 14,      // px

  // Boyut cizgisi ozellikleri
  ARROW_SIZE: 8,            // px
  EXTENSION_GAP: 3,         // px — kenardan uzaklik
  EXTENSION_OVERSHOOT: 3,   // px — boyut cizgisini gecme
  DIM_OFFSET: 25,           // px — default boyut mesafesi
}

// =============================================================================
// YARDIMCI FONKSIYONLAR
// =============================================================================

/** mm -> px donusumu */
function mmToPx(mm: number, scale: number): number {
  return mm * scale
}

/** Dashed line cizimi */
function drawDashed(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,
  x2: number, y2: number,
  dashPattern: number[] = [8, 4]
) {
  ctx.setLineDash(dashPattern)
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.setLineDash([])
}

/** Merkez-kesikli cizgi (uzun-kisa-uzun) */
function drawCenterLine(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,
  x2: number, y2: number,
) {
  ctx.setLineDash([12, 3, 3, 3])
  ctx.strokeStyle = ISO.CENTER
  ctx.lineWidth = ISO.THIN
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.setLineDash([])
}

/** Ok ucu cizimi */
function drawArrow(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  angle: number,
  size: number = ISO.ARROW_SIZE,
) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(-size, -size / 3)
  ctx.lineTo(-size, size / 3)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

// =============================================================================
// BOYUT CIZGISI
// =============================================================================

function drawDimensionLine(
  ctx: CanvasRenderingContext2D,
  dim: DimensionLine,
  scale: number,
  cx: number,
  cy: number,
) {
  const x1 = cx + mmToPx(dim.fromX, scale)
  const y1 = cy + mmToPx(dim.fromY, scale)
  const x2 = cx + mmToPx(dim.toX, scale)
  const y2 = cy + mmToPx(dim.toY, scale)
  const offset = mmToPx(dim.offset, scale)

  ctx.save()
  ctx.strokeStyle = ISO.DIMENSION
  ctx.fillStyle = ISO.DIMENSION
  ctx.lineWidth = ISO.THIN
  ctx.font = `${ISO.DIM_FONT_SIZE}px ${ISO.FONT_FAMILY}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'

  if (dim.isDiameter) {
    // Cap boyutu: diameter sembol + deger
    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2
    const angle = Math.atan2(y2 - y1, x2 - x1)

    // Boyut cizgisi
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()

    // Ok uclari
    drawArrow(ctx, x1, y1, angle + Math.PI, ISO.ARROW_SIZE)
    drawArrow(ctx, x2, y2, angle, ISO.ARROW_SIZE)

    // Boyut yazisi
    const text = `\u00D8${dim.value.toFixed(dim.value % 1 === 0 ? 0 : 1)}`
    ctx.save()
    ctx.translate(midX, midY - 4)
    if (Math.abs(angle) > Math.PI / 2) {
      ctx.rotate(angle + Math.PI)
    } else {
      ctx.rotate(angle)
    }
    ctx.fillText(text, 0, 0)
    ctx.restore()
  } else if (dim.isRadius) {
    // Yaricap boyutu
    const angle = Math.atan2(y2 - y1, x2 - x1)
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    drawArrow(ctx, x2, y2, angle, ISO.ARROW_SIZE)
    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2
    const text = `R${dim.value.toFixed(dim.value % 1 === 0 ? 0 : 1)}`
    ctx.fillText(text, midX, midY - 4)
  } else if (dim.isVertical) {
    // Dikey boyut cizgisi
    const ox = offset
    // Uzanti cizgileri
    ctx.beginPath()
    ctx.moveTo(x1 + ISO.EXTENSION_GAP, y1)
    ctx.lineTo(x1 + ox + ISO.EXTENSION_OVERSHOOT, y1)
    ctx.moveTo(x2 + ISO.EXTENSION_GAP, y2)
    ctx.lineTo(x2 + ox + ISO.EXTENSION_OVERSHOOT, y2)
    ctx.stroke()

    // Boyut cizgisi (dikey)
    ctx.beginPath()
    ctx.moveTo(x1 + ox, y1)
    ctx.lineTo(x1 + ox, y2)
    ctx.stroke()

    // Ok uclari
    drawArrow(ctx, x1 + ox, y1, -Math.PI / 2, ISO.ARROW_SIZE)
    drawArrow(ctx, x1 + ox, y2, Math.PI / 2, ISO.ARROW_SIZE)

    // Yazi
    const text = dim.value.toFixed(dim.value % 1 === 0 ? 0 : 1)
    ctx.save()
    ctx.translate(x1 + ox + 4, (y1 + y2) / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.textBaseline = 'top'
    ctx.fillText(text, 0, 0)
    ctx.restore()
  } else {
    // Yatay boyut cizgisi
    const oy = offset
    // Uzanti cizgileri
    ctx.beginPath()
    ctx.moveTo(x1, y1 + ISO.EXTENSION_GAP)
    ctx.lineTo(x1, y1 + oy + ISO.EXTENSION_OVERSHOOT)
    ctx.moveTo(x2, y2 + ISO.EXTENSION_GAP)
    ctx.lineTo(x2, y2 + oy + ISO.EXTENSION_OVERSHOOT)
    ctx.stroke()

    // Boyut cizgisi (yatay)
    ctx.beginPath()
    ctx.moveTo(x1, y1 + oy)
    ctx.lineTo(x2, y2 + oy)
    ctx.stroke()

    // Ok uclari
    drawArrow(ctx, x1, y1 + oy, Math.PI, ISO.ARROW_SIZE)
    drawArrow(ctx, x2, y2 + oy, 0, ISO.ARROW_SIZE)

    // Yazi
    const text = dim.value.toFixed(dim.value % 1 === 0 ? 0 : 1)
    ctx.fillText(text, (x1 + x2) / 2, y1 + oy - 4)
  }

  ctx.restore()
}

// =============================================================================
// GRID CIZIMI
// =============================================================================

function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  state: CanvasState,
  scale: number,
) {
  if (!state.showGrid) return

  const gridPx = mmToPx(state.gridSpacing, scale)
  if (gridPx < 5) return // cok kucuk grid cizme

  const startX = state.panX % gridPx
  const startY = state.panY % gridPx

  ctx.save()

  // Minor grid
  ctx.strokeStyle = ISO.GRID
  ctx.lineWidth = 0.5
  for (let x = startX; x < width; x += gridPx) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  for (let y = startY; y < height; y += gridPx) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  // Major grid (her 10 birimde)
  const majorPx = gridPx * 10
  if (majorPx > 30) {
    ctx.strokeStyle = ISO.GRID_MAJOR
    ctx.lineWidth = 0.8
    const mStartX = state.panX % majorPx
    const mStartY = state.panY % majorPx
    for (let x = mStartX; x < width; x += majorPx) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = mStartY; y < height; y += majorPx) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  ctx.restore()
}

// =============================================================================
// GEOMETRI CIZIMLERI
// =============================================================================

function drawCircular(
  ctx: CanvasRenderingContext2D,
  params: CircularParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const outerR = mmToPx(params.outerDiameter / 2, scale)
  const innerR = mmToPx(params.innerDiameter / 2, scale)

  // Merkez cizgileri
  if (showCenterLines) {
    const ext = outerR + 20
    drawCenterLine(ctx, cx - ext, cy, cx + ext, cy)
    drawCenterLine(ctx, cx, cy - ext, cx, cy + ext)
  }

  // Dis daire
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  ctx.beginPath()
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2)
  ctx.stroke()

  // Ic daire (bore)
  if (params.innerDiameter > 0) {
    ctx.beginPath()
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2)
    ctx.stroke()
  }

  // Kama yivleri
  params.keyways.forEach((kw) => {
    const kwW = mmToPx(kw.width, scale)
    const kwD = mmToPx(kw.depth, scale)
    const angleRad = (kw.angle * Math.PI) / 180
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(angleRad)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.strokeRect(-kwW / 2, innerR - kwD, kwW, kwD)
    ctx.restore()
  })

  // Montaj delikleri
  params.holes.forEach((hole) => {
    const hx = cx + mmToPx(hole.x, scale)
    const hy = cy + mmToPx(hole.y, scale)
    const hr = mmToPx(hole.diameter / 2, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    ctx.arc(hx, hy, hr, 0, Math.PI * 2)
    ctx.stroke()
    // Delik merkez cizgileri
    if (showCenterLines) {
      const ext = hr + 5
      drawCenterLine(ctx, hx - ext, hy, hx + ext, hy)
      drawCenterLine(ctx, hx, hy - ext, hx, hy + ext)
    }
  })

  // Centikler
  params.notches.forEach((notch) => {
    const angleRad = (notch.position * Math.PI) / 180
    const nW = mmToPx(notch.width, scale)
    const nD = mmToPx(notch.depth, scale)
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(angleRad)

    if (notch.shape === 'semicircle') {
      ctx.strokeStyle = ISO.OUTLINE
      ctx.lineWidth = ISO.THICK
      ctx.beginPath()
      ctx.arc(0, -(outerR - nD / 2), nD / 2, 0, Math.PI * 2)
      ctx.stroke()
    } else {
      ctx.strokeStyle = ISO.OUTLINE
      ctx.lineWidth = ISO.THICK
      ctx.strokeRect(-nW / 2, -outerR, nW, nD)
    }
    ctx.restore()
  })

  // Boyut cizgileri
  if (showDimensions) {
    const dims: DimensionLine[] = [
      // Dis cap
      {
        id: 'od', fromX: -params.outerDiameter / 2, fromY: 0,
        toX: params.outerDiameter / 2, toY: 0,
        offset: -(params.outerDiameter / 2 + 15),
        value: params.outerDiameter, isVertical: false, isRadius: false, isDiameter: true,
      },
    ]
    // Ic cap
    if (params.innerDiameter > 0) {
      dims.push({
        id: 'id', fromX: 0, fromY: -params.innerDiameter / 2,
        toX: 0, toY: params.innerDiameter / 2,
        offset: params.innerDiameter / 2 + 15,
        value: params.innerDiameter, isVertical: true, isRadius: false, isDiameter: true,
      })
    }
    dims.forEach(d => drawDimensionLine(ctx, d, scale, cx, cy))
  }
}

function drawRectangular(
  ctx: CanvasRenderingContext2D,
  params: RectangularParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const w = mmToPx(params.length, scale)
  const h = mmToPx(params.width, scale)
  const r = mmToPx(params.cornerRadius, scale)
  const x = cx - w / 2
  const y = cy - h / 2

  // Merkez cizgileri
  if (showCenterLines) {
    drawCenterLine(ctx, x - 15, cy, x + w + 15, cy)
    drawCenterLine(ctx, cx, y - 15, cx, y + h + 15)
  }

  // Ana sekil
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  if (r > 0) {
    ctx.beginPath()
    ctx.roundRect(x, y, w, h, r)
    ctx.stroke()
  } else {
    ctx.strokeRect(x, y, w, h)
  }

  // Bileme gosterimi (hatch cizgileri ile)
  if (params.bevelType !== 'none') {
    const bevelW = mmToPx(Math.min(params.width * 0.3, 10), scale)
    ctx.save()
    ctx.strokeStyle = ISO.HATCH
    ctx.lineWidth = ISO.EXTRA_THIN
    params.bevelSides.forEach(side => {
      const spacing = 3
      switch (side) {
        case 'top':
          for (let i = 0; i < bevelW; i += spacing) {
            drawDashed(ctx, x, y + i, x + w, y + i, [2, 2])
          }
          break
        case 'bottom':
          for (let i = 0; i < bevelW; i += spacing) {
            drawDashed(ctx, x, y + h - i, x + w, y + h - i, [2, 2])
          }
          break
        case 'left':
          for (let i = 0; i < bevelW; i += spacing) {
            drawDashed(ctx, x + i, y, x + i, y + h, [2, 2])
          }
          break
        case 'right':
          for (let i = 0; i < bevelW; i += spacing) {
            drawDashed(ctx, x + w - i, y, x + w - i, y + h, [2, 2])
          }
          break
      }
    })
    ctx.restore()
  }

  // Montaj delikleri
  params.holes.forEach(hole => {
    const hx = cx + mmToPx(hole.x, scale)
    const hy = cy + mmToPx(hole.y, scale)
    const hr = mmToPx(hole.diameter / 2, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    ctx.arc(hx, hy, hr, 0, Math.PI * 2)
    ctx.stroke()
    if (showCenterLines) {
      const ext = hr + 5
      drawCenterLine(ctx, hx - ext, hy, hx + ext, hy)
      drawCenterLine(ctx, hx, hy - ext, hx, hy + ext)
    }
  })

  // Boyut cizgileri
  if (showDimensions) {
    // Uzunluk (alt)
    drawDimensionLine(ctx, {
      id: 'length', fromX: -params.length / 2, fromY: params.width / 2,
      toX: params.length / 2, toY: params.width / 2,
      offset: 15, value: params.length,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    // Genislik (sag)
    drawDimensionLine(ctx, {
      id: 'width', fromX: params.length / 2, fromY: -params.width / 2,
      toX: params.length / 2, toY: params.width / 2,
      offset: 15, value: params.width,
      isVertical: true, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
  }
}

function drawOblong(
  ctx: CanvasRenderingContext2D,
  params: OblongParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const w = mmToPx(params.length, scale)
  const h = mmToPx(params.width, scale)
  const r = mmToPx(params.cornerRadius, scale)
  const x = cx - w / 2
  const y = cy - h / 2

  // Merkez cizgileri
  if (showCenterLines) {
    drawCenterLine(ctx, x - 10, cy, x + w + 10, cy)
    drawCenterLine(ctx, cx, y - 10, cx, y + h + 10)
  }

  // Ana sekil
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  if (params.cornerShape === 'rounded' && r > 0) {
    ctx.beginPath()
    ctx.roundRect(x, y, w, h, r)
    ctx.stroke()
  } else {
    ctx.strokeRect(x, y, w, h)
  }

  // Delikler
  if (params.holeCount > 0 && !params.hasSlot) {
    const spacing = mmToPx(params.holeSpacing, scale)
    const holeR = mmToPx(params.holeDiameter / 2, scale)
    const totalW = spacing * (params.holeCount - 1)
    const startX = cx - totalW / 2

    for (let i = 0; i < params.holeCount; i++) {
      const hx = startX + i * spacing
      ctx.strokeStyle = ISO.OUTLINE
      ctx.lineWidth = ISO.THICK
      ctx.beginPath()
      ctx.arc(hx, cy, holeR, 0, Math.PI * 2)
      ctx.stroke()
      if (showCenterLines) {
        const ext = holeR + 4
        drawCenterLine(ctx, hx - ext, cy, hx + ext, cy)
        drawCenterLine(ctx, hx, cy - ext, hx, cy + ext)
      }
    }
  }

  // Slot
  if (params.hasSlot) {
    const sw = mmToPx(params.slotLength, scale)
    const sh = mmToPx(params.slotWidth, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    ctx.roundRect(cx - sw / 2, cy - sh / 2, sw, sh, sh / 2)
    ctx.stroke()
  }

  // Boyut cizgileri
  if (showDimensions) {
    drawDimensionLine(ctx, {
      id: 'length', fromX: -params.length / 2, fromY: params.width / 2,
      toX: params.length / 2, toY: params.width / 2,
      offset: 10, value: params.length,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    drawDimensionLine(ctx, {
      id: 'width', fromX: params.length / 2, fromY: -params.width / 2,
      toX: params.length / 2, toY: params.width / 2,
      offset: 10, value: params.width,
      isVertical: true, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
  }
}

function drawTrapezoid(
  ctx: CanvasRenderingContext2D,
  params: TrapezoidParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const tw = mmToPx(params.topWidth, scale)
  const bw = mmToPx(params.bottomWidth, scale)
  const h = mmToPx(params.height, scale)

  // Merkez cizgileri
  if (showCenterLines) {
    drawCenterLine(ctx, cx - bw / 2 - 10, cy, cx + bw / 2 + 10, cy)
    drawCenterLine(ctx, cx, cy - h / 2 - 10, cx, cy + h / 2 + 10)
  }

  // Ana sekil
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  ctx.beginPath()
  ctx.moveTo(cx - tw / 2, cy - h / 2)  // sol ust
  ctx.lineTo(cx + tw / 2, cy - h / 2)  // sag ust
  ctx.lineTo(cx + bw / 2, cy + h / 2)  // sag alt
  ctx.lineTo(cx - bw / 2, cy + h / 2)  // sol alt
  ctx.closePath()
  ctx.stroke()

  // Centikler (alt kenar uzerinde)
  if (params.notchCount > 0) {
    const nW = mmToPx(params.notchWidth, scale)
    const nD = mmToPx(params.notchDepth, scale)
    const spacing = bw / (params.notchCount + 1)
    for (let i = 1; i <= params.notchCount; i++) {
      const nx = cx - bw / 2 + i * spacing
      ctx.strokeStyle = ISO.OUTLINE
      ctx.lineWidth = ISO.THICK
      ctx.strokeRect(nx - nW / 2, cy + h / 2 - nD, nW, nD)
    }
  }

  // Boyut cizgileri
  if (showDimensions) {
    // Alt genislik
    drawDimensionLine(ctx, {
      id: 'bottomWidth', fromX: -params.bottomWidth / 2, fromY: params.height / 2,
      toX: params.bottomWidth / 2, toY: params.height / 2,
      offset: 12, value: params.bottomWidth,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    // Ust genislik
    drawDimensionLine(ctx, {
      id: 'topWidth', fromX: -params.topWidth / 2, fromY: -params.height / 2,
      toX: params.topWidth / 2, toY: -params.height / 2,
      offset: -12, value: params.topWidth,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    // Yukseklik
    drawDimensionLine(ctx, {
      id: 'height', fromX: -params.bottomWidth / 2, fromY: -params.height / 2,
      toX: -params.bottomWidth / 2, toY: params.height / 2,
      offset: -15, value: params.height,
      isVertical: true, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
  }
}

function drawTriangular(
  ctx: CanvasRenderingContext2D,
  params: TriangularParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const bw = mmToPx(params.baseWidth, scale)
  const h = mmToPx(params.height, scale)

  // Uc noktasi yukarida, taban asagida
  const tipY = cy - h / 2
  const baseY = cy + h / 2

  // Merkez cizgisi
  if (showCenterLines) {
    drawCenterLine(ctx, cx, tipY - 15, cx, baseY + 15)
  }

  // Ana sekil (bisturi/plotter ucu)
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  ctx.beginPath()
  ctx.moveTo(cx, tipY)                    // sivri uc
  ctx.lineTo(cx + bw / 2, baseY)          // sag taban
  ctx.lineTo(cx - bw / 2, baseY)          // sol taban
  ctx.closePath()
  ctx.stroke()

  // Sap (shank)
  if (params.shankType === 'round') {
    const shankL = mmToPx(params.shankLength, scale)
    const shankR = mmToPx(params.shankDiameter / 2, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    ctx.moveTo(cx - shankR, baseY)
    ctx.lineTo(cx - shankR, baseY + shankL)
    ctx.lineTo(cx + shankR, baseY + shankL)
    ctx.lineTo(cx + shankR, baseY)
    ctx.stroke()
    // Alt yari daire
    ctx.beginPath()
    ctx.arc(cx, baseY + shankL, shankR, 0, Math.PI)
    ctx.stroke()
  } else if (params.shankType === 'flat') {
    const shankL = mmToPx(params.shankLength, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.strokeRect(cx - bw / 2, baseY, bw, shankL)
  }

  // Boyut cizgileri
  if (showDimensions) {
    drawDimensionLine(ctx, {
      id: 'baseWidth', fromX: -params.baseWidth / 2, fromY: params.height / 2,
      toX: params.baseWidth / 2, toY: params.height / 2,
      offset: 12, value: params.baseWidth,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    drawDimensionLine(ctx, {
      id: 'height', fromX: params.baseWidth / 2, fromY: -params.height / 2,
      toX: params.baseWidth / 2, toY: params.height / 2,
      offset: 15, value: params.height,
      isVertical: true, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
  }
}

function drawHook(
  ctx: CanvasRenderingContext2D,
  params: HookParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  const w = mmToPx(params.overallWidth, scale)
  const h = mmToPx(params.overallLength, scale)
  const hookD = mmToPx(params.hookDepth, scale)
  const curveR = mmToPx(params.curveRadius, scale)

  const x = cx - w / 2
  const y = cy - h / 2

  // Merkez cizgileri
  if (showCenterLines) {
    drawCenterLine(ctx, cx - w / 2 - 10, cy, cx + w / 2 + 10, cy)
  }

  // Kanca sekli
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK
  ctx.beginPath()
  // Sol kenar duz
  ctx.moveTo(x, y)
  ctx.lineTo(x, y + h)
  // Alt kenar
  ctx.lineTo(x + w, y + h)
  // Sag kenar ust bolumu duz
  ctx.lineTo(x + w, y + h * 0.4)
  // Kanca egrisi (icbukey)
  ctx.quadraticCurveTo(
    x + w - hookD, y + h * 0.2,
    x + w - hookD * 0.3, y
  )
  // Ust kenar
  ctx.lineTo(x, y)
  ctx.stroke()

  // Boyut cizgileri
  if (showDimensions) {
    drawDimensionLine(ctx, {
      id: 'overallLength', fromX: -params.overallWidth / 2, fromY: -params.overallLength / 2,
      toX: -params.overallWidth / 2, toY: params.overallLength / 2,
      offset: -15, value: params.overallLength,
      isVertical: true, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
    drawDimensionLine(ctx, {
      id: 'overallWidth', fromX: -params.overallWidth / 2, fromY: params.overallLength / 2,
      toX: params.overallWidth / 2, toY: params.overallLength / 2,
      offset: 12, value: params.overallWidth,
      isVertical: false, isRadius: false, isDiameter: false,
    }, scale, cx, cy)
  }
}

function drawCustom(
  ctx: CanvasRenderingContext2D,
  params: CustomParams,
  scale: number,
  cx: number,
  cy: number,
  showDimensions: boolean,
  showCenterLines: boolean,
) {
  // Ozel noktalar varsa bunlari ciz
  if (params.customPoints.length > 2) {
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    const firstPt = params.customPoints[0]
    ctx.moveTo(cx + mmToPx(firstPt.x, scale), cy + mmToPx(firstPt.y, scale))
    for (let i = 1; i < params.customPoints.length; i++) {
      const pt = params.customPoints[i]
      ctx.lineTo(cx + mmToPx(pt.x, scale), cy + mmToPx(pt.y, scale))
    }
    ctx.closePath()
    ctx.stroke()
  } else {
    // Varsayilan: duzgun cokgen
    const r = mmToPx(params.circumscribedDiameter / 2, scale)
    const n = params.sideCount

    // Merkez cizgileri
    if (showCenterLines) {
      drawCenterLine(ctx, cx - r - 15, cy, cx + r + 15, cy)
      drawCenterLine(ctx, cx, cy - r - 15, cx, cy + r + 15)
    }

    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    for (let i = 0; i <= n; i++) {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2
      const px = cx + r * Math.cos(angle)
      const py = cy + r * Math.sin(angle)
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.stroke()

    // Merkez deligi
    if (params.centerHoleDiameter > 0) {
      const holeR = mmToPx(params.centerHoleDiameter / 2, scale)
      ctx.beginPath()
      ctx.arc(cx, cy, holeR, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  // Montaj delikleri
  params.holes.forEach(hole => {
    const hx = cx + mmToPx(hole.x, scale)
    const hy = cy + mmToPx(hole.y, scale)
    const hr = mmToPx(hole.diameter / 2, scale)
    ctx.strokeStyle = ISO.OUTLINE
    ctx.lineWidth = ISO.THICK
    ctx.beginPath()
    ctx.arc(hx, hy, hr, 0, Math.PI * 2)
    ctx.stroke()
  })

  // Boyut cizgileri
  if (showDimensions) {
    const r = params.circumscribedDiameter / 2
    drawDimensionLine(ctx, {
      id: 'diameter', fromX: -r, fromY: 0,
      toX: r, toY: 0,
      offset: -(r + 15),
      value: params.circumscribedDiameter,
      isVertical: false, isRadius: false, isDiameter: true,
    }, scale, cx, cy)
  }
}

// =============================================================================
// DIS PROFILI CIZIMI
// =============================================================================

function drawToothProfile(
  ctx: CanvasRenderingContext2D,
  profile: ToothProfile,
  geometry: BladeGeometry,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
  scale: number,
  cx: number,
  cy: number,
) {
  if (!profile || profile.type === 'plain') return

  const pitch = mmToPx(profile.pitch, scale)
  const depth = mmToPx(profile.depth, scale)

  ctx.save()
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = ISO.THICK

  // Dikdortgen geometri icin dis profili (en yaygin)
  if (geometry === 'rectangular') {
    const w = mmToPx(params.length, scale)
    const h = mmToPx(params.width, scale)

    profile.sides.forEach(side => {
      ctx.beginPath()
      if (side === 'top') {
        const startX = cx - w / 2
        const y = cy - h / 2
        const count = Math.floor(w / pitch)
        for (let i = 0; i < count; i++) {
          const tx = startX + i * pitch
          if (profile.type === 'serrated') {
            // V-dis
            ctx.moveTo(tx, y)
            ctx.lineTo(tx + pitch / 2, y - depth)
            ctx.lineTo(tx + pitch, y)
          } else if (profile.type === 'scalloped') {
            // Yarim daire
            ctx.moveTo(tx, y)
            ctx.arc(tx + pitch / 2, y, pitch / 2, Math.PI, 0, false)
          } else if (profile.type === 'zigzag') {
            // Zig-zag
            ctx.moveTo(tx, y)
            ctx.lineTo(tx + pitch / 4, y - depth)
            ctx.lineTo(tx + pitch * 3 / 4, y + depth)
            ctx.lineTo(tx + pitch, y)
          } else if (profile.type === 'wavy') {
            // Sinusoidal
            ctx.moveTo(tx, y)
            ctx.quadraticCurveTo(tx + pitch / 4, y - depth, tx + pitch / 2, y)
            ctx.quadraticCurveTo(tx + pitch * 3 / 4, y + depth, tx + pitch, y)
          } else if (profile.type === 'perforating') {
            // Perfore
            ctx.moveTo(tx, y)
            ctx.lineTo(tx + pitch / 2, y - depth * 1.5)
            ctx.lineTo(tx + pitch, y)
          }
        }
      }
      ctx.stroke()
    })
  }

  // Dairesel geometri icin dis profili
  if (geometry === 'circular') {
    const outerR = mmToPx(params.outerDiameter / 2, scale)
    const circumference = 2 * Math.PI * outerR
    const count = Math.floor(circumference / pitch)

    if (profile.sides.includes('outer')) {
      ctx.beginPath()
      for (let i = 0; i < count; i++) {
        const a1 = (i / count) * Math.PI * 2
        const a2 = ((i + 0.5) / count) * Math.PI * 2
        const a3 = ((i + 1) / count) * Math.PI * 2

        if (profile.type === 'serrated') {
          const x1 = cx + outerR * Math.cos(a1)
          const y1 = cy + outerR * Math.sin(a1)
          const x2 = cx + (outerR + depth) * Math.cos(a2)
          const y2 = cy + (outerR + depth) * Math.sin(a2)
          const x3 = cx + outerR * Math.cos(a3)
          const y3 = cy + outerR * Math.sin(a3)
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.lineTo(x3, y3)
        }
      }
      ctx.stroke()
    }
  }

  ctx.restore()
}

// =============================================================================
// ANA RENDER FONKSIYONU
// =============================================================================

export interface RenderOptions {
  geometry: BladeGeometry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
  edgeProfile?: ToothProfile
  canvasState: CanvasState
  width: number
  height: number
}

export function renderBlade(
  ctx: CanvasRenderingContext2D,
  options: RenderOptions,
) {
  const { geometry, params, edgeProfile, canvasState, width, height } = options

  // Temizle
  ctx.fillStyle = ISO.BACKGROUND
  ctx.fillRect(0, 0, width, height)

  // Scale hesabi: bicak canvas'in %70'ini kaplasin
  const maxDim = getMaxDimension(geometry, params)
  const targetSize = Math.min(width, height) * 0.6
  const autoScale = targetSize / maxDim
  const scale = autoScale * canvasState.zoom

  // Merkez
  const cx = width / 2 + canvasState.panX
  const cy = height / 2 + canvasState.panY

  // Grid
  drawGrid(ctx, width, height, canvasState, scale)

  // Geometri cizimi
  switch (geometry) {
    case 'circular':
      drawCircular(ctx, params as CircularParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'rectangular':
      drawRectangular(ctx, params as RectangularParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'oblong':
      drawOblong(ctx, params as OblongParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'trapezoid':
      drawTrapezoid(ctx, params as TrapezoidParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'triangular':
      drawTriangular(ctx, params as TriangularParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'hook':
      drawHook(ctx, params as HookParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
    case 'custom':
      drawCustom(ctx, params as CustomParams, scale, cx, cy, canvasState.showDimensions, canvasState.showCenterLines)
      break
  }

  // Dis profili
  if (edgeProfile) {
    drawToothProfile(ctx, edgeProfile, geometry, params, scale, cx, cy)
  }

  // Olcek gostergesi (sag alt)
  drawScaleIndicator(ctx, width, height, scale)
}

// =============================================================================
// YARDIMCI
// =============================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMaxDimension(geometry: BladeGeometry, params: any): number {
  switch (geometry) {
    case 'circular': return params.outerDiameter
    case 'rectangular': return Math.max(params.length, params.width)
    case 'oblong': return Math.max(params.length, params.width)
    case 'trapezoid': return Math.max(params.bottomWidth, params.height)
    case 'triangular': return Math.max(params.baseWidth, params.height + (params.shankLength || 0))
    case 'hook': return Math.max(params.overallLength, params.overallWidth)
    case 'custom': return params.circumscribedDiameter || Math.max(params.boundingWidth, params.boundingHeight)
    default: return 100
  }
}

function drawScaleIndicator(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  scale: number,
) {
  // 10mm olcek cubugu
  const barLength = mmToPx(10, scale)
  const barHeight = 4
  const margin = 20
  const x = width - margin - barLength
  const y = height - margin

  ctx.save()
  ctx.fillStyle = ISO.OUTLINE
  ctx.strokeStyle = ISO.OUTLINE
  ctx.lineWidth = 1.5

  // Cubuk
  ctx.fillRect(x, y - barHeight, barLength, barHeight)

  // Uc cizgiler
  ctx.beginPath()
  ctx.moveTo(x, y - barHeight - 3)
  ctx.lineTo(x, y + 3)
  ctx.moveTo(x + barLength, y - barHeight - 3)
  ctx.lineTo(x + barLength, y + 3)
  ctx.stroke()

  // Yazi
  ctx.font = `10px ${ISO.FONT_FAMILY}`
  ctx.textAlign = 'center'
  ctx.fillText('10 mm', x + barLength / 2, y - barHeight - 5)

  ctx.restore()
}

// Canvas'tan PNG export
export function exportCanvasAsPng(canvas: HTMLCanvasElement, filename: string) {
  const link = document.createElement('a')
  link.download = filename
  link.href = canvas.toDataURL('image/png', 1.0)
  link.click()
}
