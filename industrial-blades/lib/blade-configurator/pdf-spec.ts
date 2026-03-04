/**
 * Blade Configurator - PDF Specification Sheet Generator
 * Produces a clean A4 portrait specification sheet using jsPDF.
 * This is NOT a technical drawing - it's a professional order specification.
 */

import type { BladeSpec, BladeCategory, BladeConfiguratorDict } from './types';
import type { DimensionField } from './categories';
import { getDimensionFields } from './categories';

// ─── Constants ──────────────────────────────────────────────────────────────

const PAGE_W = 210; // A4 portrait width in mm
const PAGE_H = 297; // A4 portrait height in mm
const MARGIN = 15;
const CONTENT_W = PAGE_W - 2 * MARGIN;

const COLORS = {
  primary: [26, 115, 232] as [number, number, number],     // #1a73e8
  dark: [31, 41, 55] as [number, number, number],           // #1f2937
  text: [55, 65, 81] as [number, number, number],           // #374151
  lightBg: [241, 245, 249] as [number, number, number],     // #f1f5f9
  divider: [209, 213, 219] as [number, number, number],     // #d1d5db
  white: [255, 255, 255] as [number, number, number],
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function getCategoryLabel(category: BladeCategory, dict: BladeConfiguratorDict): string {
  const map: Record<BladeCategory, string> = {
    circular: 'circularTitle',
    straight: 'straightTitle',
    machine: 'machineTitle',
    special: 'specialTitle',
    packaging: 'packagingTitle',
    custom: 'customTitle',
  };
  return dict[map[category]] || category;
}

function getFieldLabel(key: string, dict: BladeConfiguratorDict): string {
  return dict[key] || key;
}

function formatValue(value: number | string, unit?: string): string {
  if (typeof value === 'number') {
    return unit ? `${value} ${unit}` : `${value}`;
  }
  return value || '-';
}

function generateRefNumber(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `BS-${dateStr}-${random}`;
}

// ─── Main Export Function ───────────────────────────────────────────────────

export async function exportBladeSpecPdf(
  spec: BladeSpec,
  dict: BladeConfiguratorDict,
): Promise<void> {
  // Dynamic import jsPDF
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const refNumber = generateRefNumber();
  const dateStr = new Date().toLocaleDateString('en-GB');

  let y = MARGIN;

  // ── Header Background ──
  doc.setFillColor(...COLORS.dark);
  doc.rect(0, 0, PAGE_W, 38, 'F');

  // ── Logo/Company Name ──
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('ALYA BLADE', MARGIN, 18);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('alyablade.com | alyabicak.com', MARGIN, 26);

  // ── Title on right ──
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(dict.pdfTitle || 'BLADE SPECIFICATION SHEET', PAGE_W - MARGIN, 16, { align: 'right' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`${dict.pdfRef || 'Ref'}: ${refNumber}`, PAGE_W - MARGIN, 24, { align: 'right' });
  doc.text(`${dict.pdfDate || 'Date'}: ${dateStr}`, PAGE_W - MARGIN, 30, { align: 'right' });

  y = 48;

  // ── Blade Type Section ──
  doc.setFillColor(...COLORS.primary);
  doc.rect(MARGIN, y, CONTENT_W, 10, 'F');
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(dict.pdfBladeType || 'BLADE TYPE', MARGIN + 4, y + 7);
  y += 14;

  doc.setTextColor(...COLORS.dark);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(getCategoryLabel(spec.category, dict), MARGIN + 4, y + 3);
  y += 12;

  // Draw divider
  doc.setDrawColor(...COLORS.divider);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  y += 6;

  // ── Dimensions Section ──
  doc.setFillColor(...COLORS.primary);
  doc.rect(MARGIN, y, CONTENT_W, 10, 'F');
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(dict.pdfDimensions || 'DIMENSIONS', MARGIN + 4, y + 7);
  y += 14;

  // Get field definitions for this category
  const fields = getDimensionFields(spec.category);
  const dimEntries = Object.entries(spec.dimensions).filter(([, v]) => v !== '' && v !== 0 && v !== undefined);

  let rowIdx = 0;
  for (const [key, value] of dimEntries) {
    const field = fields.find((f: DimensionField) => f.key === key);
    if (!field) continue;

    // Alternate row backgrounds
    if (rowIdx % 2 === 0) {
      doc.setFillColor(...COLORS.lightBg);
      doc.rect(MARGIN, y - 3, CONTENT_W, 8, 'F');
    }

    doc.setTextColor(...COLORS.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(getFieldLabel(field.labelKey, dict), MARGIN + 4, y + 2);

    doc.setFont('helvetica', 'bold');
    doc.text(formatValue(value, field.unit), PAGE_W - MARGIN - 4, y + 2, { align: 'right' });

    y += 8;
    rowIdx++;
  }

  y += 6;

  // ── Material & Specifications Section ──
  doc.setFillColor(...COLORS.primary);
  doc.rect(MARGIN, y, CONTENT_W, 10, 'F');
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(dict.pdfSpecs || 'MATERIAL & SPECIFICATIONS', MARGIN + 4, y + 7);
  y += 14;

  const specRows: [string, string][] = [
    [dict.material || 'Material', dict[`mat${capitalize(spec.material.material)}`] || spec.material.material || '-'],
    [dict.hardness || 'Hardness', spec.material.hardness || '-'],
    [dict.coating || 'Coating', dict[`coating${capitalize(spec.material.coating)}`] || spec.material.coating || '-'],
    [dict.surfaceFinish || 'Surface Finish', dict[`finish${capitalize(spec.material.surfaceFinish)}`] || spec.material.surfaceFinish || '-'],
    [dict.toleranceClass || 'Tolerance', dict[`tol${capitalize(spec.material.toleranceClass)}`] || spec.material.toleranceClass || '-'],
    [dict.edgeType || 'Edge Type', dict[`edge${capitalize(spec.material.edgeType)}`] || spec.material.edgeType || '-'],
    [dict.bevelType || 'Bevel Type', dict[`bevel${capitalize(spec.material.bevelType)}`] || spec.material.bevelType || '-'],
  ];

  if (spec.material.customTolerance) {
    specRows.push([dict.customTolerance || 'Custom Tolerance', spec.material.customTolerance]);
  }

  rowIdx = 0;
  for (const [label, value] of specRows) {
    if (rowIdx % 2 === 0) {
      doc.setFillColor(...COLORS.lightBg);
      doc.rect(MARGIN, y - 3, CONTENT_W, 8, 'F');
    }

    doc.setTextColor(...COLORS.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(label, MARGIN + 4, y + 2);

    doc.setFont('helvetica', 'bold');
    doc.text(value, PAGE_W - MARGIN - 4, y + 2, { align: 'right' });

    y += 8;
    rowIdx++;
  }

  y += 6;

  // ── Quantity & Notes Section ──
  doc.setFillColor(...COLORS.primary);
  doc.rect(MARGIN, y, CONTENT_W, 10, 'F');
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(dict.reviewQuantityNotes || 'QUANTITY & NOTES', MARGIN + 4, y + 7);
  y += 14;

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`${dict.quantity || 'Quantity'}: `, MARGIN + 4, y + 2);
  doc.setFont('helvetica', 'bold');
  doc.text(`${spec.material.quantity} ${dict.pcs || 'pcs'}`, MARGIN + 40, y + 2);
  y += 10;

  if (spec.material.notes) {
    doc.setFont('helvetica', 'normal');
    doc.text(`${dict.notes || 'Notes'}:`, MARGIN + 4, y + 2);
    y += 8;

    // Word-wrap notes
    const noteLines = doc.splitTextToSize(spec.material.notes, CONTENT_W - 8);
    doc.setFontSize(9);
    for (const line of noteLines) {
      doc.text(line, MARGIN + 4, y + 2);
      y += 5;
    }
  }

  // ── Footer ──
  const footerY = PAGE_H - 25;

  doc.setDrawColor(...COLORS.divider);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, footerY, PAGE_W - MARGIN, footerY);

  doc.setTextColor(...COLORS.text);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  const footerText = dict.pdfFooter || 'This is a specification request. Manufacturing drawing will be prepared upon order confirmation.';
  const footerLines = doc.splitTextToSize(footerText, CONTENT_W);
  doc.text(footerLines, MARGIN, footerY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.primary);
  doc.text('ALYA BLADE | alyablade.com | info@alyablade.com', PAGE_W / 2, PAGE_H - 8, { align: 'center' });

  // ── Save ──
  const fileName = `blade-spec-${refNumber}.pdf`;
  doc.save(fileName);
}

// ─── Utility ────────────────────────────────────────────────────────────────

function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
