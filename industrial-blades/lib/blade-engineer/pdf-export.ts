/**
 * Blade Engineer - PDF Export (ISO A4)
 * ISO 7200 title block + ISO 5456 layout
 * jsPDF ile A4 teknik cizim PDF uretimi
 */

import { jsPDF } from 'jspdf'
import type { BladeSpec, BladeGeometry } from './types'
import { renderBlade, type RenderOptions } from './canvas-renderer'

// A4 boyutlari (mm)
const A4_WIDTH = 297
const A4_HEIGHT = 210  // Landscape
const MARGIN = 10
const DRAWING_AREA_X = MARGIN
const DRAWING_AREA_Y = MARGIN
const DRAWING_AREA_W = A4_WIDTH - MARGIN * 2 - 70  // Sag tarafa title block icin yer
const DRAWING_AREA_H = A4_HEIGHT - MARGIN * 2

const TITLE_BLOCK_X = A4_WIDTH - MARGIN - 65
const TITLE_BLOCK_Y = MARGIN
const TITLE_BLOCK_W = 65
const TITLE_BLOCK_H = A4_HEIGHT - MARGIN * 2

// =============================================================================
// ISO CERCEVE CIZIMI
// =============================================================================

function drawISOFrame(doc: jsPDF) {
  // Dis cerceve (kalin)
  doc.setDrawColor(0)
  doc.setLineWidth(0.7)
  doc.rect(MARGIN, MARGIN, A4_WIDTH - MARGIN * 2, A4_HEIGHT - MARGIN * 2)

  // Ic cerceve (ince) — cizim alani
  doc.setLineWidth(0.3)
  doc.rect(DRAWING_AREA_X + 2, DRAWING_AREA_Y + 2, DRAWING_AREA_W - 4, DRAWING_AREA_H - 4)

  // Title block ayirici cizgi
  doc.setLineWidth(0.5)
  doc.line(TITLE_BLOCK_X, TITLE_BLOCK_Y, TITLE_BLOCK_X, TITLE_BLOCK_Y + TITLE_BLOCK_H)
}

// =============================================================================
// TITLE BLOCK (ISO 7200)
// =============================================================================

interface TitleBlockData {
  company: string
  drawingTitle: string
  drawingNumber: string
  material: string
  scale: string
  date: string
  drawnBy: string
  units: string
  projection: string
  revision: string
  sheet: string
  tolerance: string
}

function drawTitleBlock(doc: jsPDF, data: TitleBlockData) {
  const x = TITLE_BLOCK_X
  const y = TITLE_BLOCK_Y
  const w = TITLE_BLOCK_W
  const rowH = 8
  let currentY = y

  doc.setDrawColor(0)
  doc.setLineWidth(0.3)
  doc.setFontSize(6)

  // Logo / Sirket adi alani
  doc.setFillColor(26, 26, 26)
  doc.rect(x, currentY, w, 16, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.text('ALYA BLADE', x + w / 2, currentY + 7, { align: 'center' })
  doc.setFontSize(6)
  doc.text('Industrial Cutting Solutions', x + w / 2, currentY + 12, { align: 'center' })
  currentY += 16

  doc.setTextColor(0, 0, 0)

  // Cizim basligi
  doc.setLineWidth(0.3)
  doc.rect(x, currentY, w, rowH * 2)
  doc.setFontSize(5)
  doc.setTextColor(100, 100, 100)
  doc.text('DRAWING TITLE', x + 2, currentY + 3)
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(8)
  doc.text(data.drawingTitle, x + w / 2, currentY + 11, { align: 'center' })
  currentY += rowH * 2

  // Cizim no
  drawTitleRow(doc, x, currentY, w, rowH, 'DWG. NO.', data.drawingNumber)
  currentY += rowH

  // Malzeme
  drawTitleRow(doc, x, currentY, w, rowH, 'MATERIAL', data.material)
  currentY += rowH

  // Olcek
  drawTitleRow(doc, x, currentY, w / 2, rowH, 'SCALE', data.scale)
  drawTitleRow(doc, x + w / 2, currentY, w / 2, rowH, 'UNITS', data.units)
  currentY += rowH

  // Tarih / Cizen
  drawTitleRow(doc, x, currentY, w / 2, rowH, 'DATE', data.date)
  drawTitleRow(doc, x + w / 2, currentY, w / 2, rowH, 'DRAWN BY', data.drawnBy)
  currentY += rowH

  // Projeksiyon / Revizyon
  drawTitleRow(doc, x, currentY, w / 2, rowH, 'PROJECTION', data.projection)
  drawTitleRow(doc, x + w / 2, currentY, w / 2, rowH, 'REV.', data.revision)
  currentY += rowH

  // Sayfa / Tolerans
  drawTitleRow(doc, x, currentY, w / 2, rowH, 'SHEET', data.sheet)
  drawTitleRow(doc, x + w / 2, currentY, w / 2, rowH, 'TOL.', data.tolerance)
  currentY += rowH

  // Alt bilgi
  doc.setFontSize(5)
  doc.setTextColor(120, 120, 120)
  doc.text('This drawing is the property of Alya Blade.', x + 2, currentY + 4)
  doc.text('Reproduction prohibited without permission.', x + 2, currentY + 8)
  doc.text('www.alyablade.com | www.alyabicak.com', x + 2, currentY + 12)
}

function drawTitleRow(
  doc: jsPDF,
  x: number, y: number,
  w: number, h: number,
  label: string, value: string,
) {
  doc.setLineWidth(0.2)
  doc.rect(x, y, w, h)
  doc.setFontSize(5)
  doc.setTextColor(120, 120, 120)
  doc.text(label, x + 1.5, y + 3)
  doc.setFontSize(7)
  doc.setTextColor(0, 0, 0)
  doc.text(value || '-', x + 1.5, y + h - 1.5)
}

// =============================================================================
// ANA EXPORT FONKSIYONU
// =============================================================================

export interface PdfExportOptions {
  spec: BladeSpec
  locale: string
  canvasElement?: HTMLCanvasElement  // Mevcut canvas'tan al
}

export function exportBladeAsPdf(options: PdfExportOptions): void {
  const { spec, locale } = options

  // A4 Yatay PDF olustur
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  })

  // ISO Cerceve
  drawISOFrame(doc)

  // Cizimi canvas'a render et, sonra PDF'e gom
  if (options.canvasElement) {
    const imgData = options.canvasElement.toDataURL('image/png', 1.0)
    // Cizim alanina sigdir
    doc.addImage(
      imgData, 'PNG',
      DRAWING_AREA_X + 4, DRAWING_AREA_Y + 4,
      DRAWING_AREA_W - 8, DRAWING_AREA_H - 8,
    )
  }

  // Title Block
  const today = new Date()
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  drawTitleBlock(doc, {
    company: locale === 'tr' ? 'Alya Bicak' : 'Alya Blade',
    drawingTitle: spec.name || getGeometryName(spec.geometry, locale),
    drawingNumber: `AB-${spec.id.slice(0, 8).toUpperCase()}`,
    material: spec.material || '-',
    scale: 'NTS',
    date: dateStr,
    drawnBy: 'Customer',
    units: 'mm',
    projection: '1st Angle',
    revision: 'A',
    sheet: '1/1',
    tolerance: spec.hardness || '\u00B10.1',
  })

  // Kaydet
  const filename = `Alya-Blade-${spec.geometry}-${dateStr}.pdf`
  doc.save(filename)
}

function getGeometryName(geometry: BladeGeometry, locale: string): string {
  const names: Record<string, Record<BladeGeometry, string>> = {
    tr: {
      circular: 'Dairesel Bicak',
      rectangular: 'Dikdortgen Bicak',
      oblong: 'Oblong Jilet',
      trapezoid: 'Trapez Bicak',
      triangular: 'Ucgen Bicak',
      hook: 'Kanca Bicak',
      custom: 'Ozel Profil Bicak',
    },
    en: {
      circular: 'Circular Blade',
      rectangular: 'Rectangular Blade',
      oblong: 'Oblong Slitter Blade',
      trapezoid: 'Trapezoid Blade',
      triangular: 'Triangular Blade',
      hook: 'Hook Blade',
      custom: 'Custom Profile Blade',
    },
  }
  return names[locale]?.[geometry] || names.en[geometry]
}

// Canvassiz PDF (offscreen render)
export function exportBladeAsPdfOffscreen(
  spec: BladeSpec,
  geometry: BladeGeometry,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
  locale: string,
): void {
  // Offscreen canvas olustur
  const offCanvas = document.createElement('canvas')
  offCanvas.width = 1600
  offCanvas.height = 1000
  const ctx = offCanvas.getContext('2d')
  if (!ctx) return

  const renderOpts: RenderOptions = {
    geometry,
    params,
    canvasState: {
      zoom: 1,
      panX: 0,
      panY: 0,
      showGrid: false,
      showDimensions: true,
      showCenterLines: true,
      snapToGrid: false,
      gridSpacing: 5,
      selectedElement: null,
      isDragging: false,
      dragTarget: null,
    },
    width: 1600,
    height: 1000,
  }

  renderBlade(ctx, renderOpts)

  exportBladeAsPdf({
    spec,
    locale,
    canvasElement: offCanvas,
  })
}
