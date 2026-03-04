/**
 * Blade Configurator - Category Definitions
 * Defines the 6 blade categories and their dimension fields
 */

import type { BladeCategory } from './types';

// ─── Category Metadata ──────────────────────────────────────────────────────

export interface CategoryMeta {
  id: BladeCategory;
  titleKey: string;
  descKey: string;
  icon: string; // SVG path data for icon
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'circular',
    titleKey: 'circularTitle',
    descKey: 'circularDesc',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
  },
  {
    id: 'straight',
    titleKey: 'straightTitle',
    descKey: 'straightDesc',
    icon: 'M3 6h18v4H3V6zm0 8h18v4H3v-4z',
  },
  {
    id: 'machine',
    titleKey: 'machineTitle',
    descKey: 'machineDesc',
    icon: 'M2 8h16v8H2V8zm18-2v12H0V6h20zM4 12a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z',
  },
  {
    id: 'special',
    titleKey: 'specialTitle',
    descKey: 'specialDesc',
    icon: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z',
  },
  {
    id: 'packaging',
    titleKey: 'packagingTitle',
    descKey: 'packagingDesc',
    icon: 'M3 3h18v6H3V3zm0 8h8v10H3V11zm10 0h8v10h-8V11z',
  },
  {
    id: 'custom',
    titleKey: 'customTitle',
    descKey: 'customDesc',
    icon: 'M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z',
  },
];

// ─── Dimension Field Definitions ────────────────────────────────────────────

export interface DimensionField {
  key: string;
  labelKey: string;
  type: 'number' | 'text' | 'select' | 'textarea';
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; labelKey: string }[];
  schematicLabel?: string; // Letter shown on SVG diagram (A, B, C...)
}

export function getDimensionFields(category: BladeCategory): DimensionField[] {
  switch (category) {
    case 'circular':
      return [
        { key: 'outerDiameter', labelKey: 'outerDiameter', type: 'number', unit: 'mm', min: 10, max: 2000, step: 0.1, required: true, schematicLabel: 'A' },
        { key: 'innerDiameter', labelKey: 'innerDiameter', type: 'number', unit: 'mm', min: 1, max: 1000, step: 0.1, required: true, schematicLabel: 'B' },
        { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 50, step: 0.01, required: true, schematicLabel: 'C' },
        { key: 'bevelAngle', labelKey: 'bevelAngle', type: 'number', unit: '°', min: 0, max: 90, step: 0.5, schematicLabel: 'D' },
        { key: 'landWidth', labelKey: 'landWidth', type: 'number', unit: 'mm', min: 0, max: 5, step: 0.01, schematicLabel: 'E' },
        { key: 'numberOfTeeth', labelKey: 'numberOfTeeth', type: 'number', min: 0, max: 500, step: 1, placeholder: '0' },
        { key: 'toothPitch', labelKey: 'toothPitch', type: 'number', unit: 'mm', min: 0.5, max: 50, step: 0.1 },
      ];

    case 'straight':
      return [
        { key: 'length', labelKey: 'length', type: 'number', unit: 'mm', min: 5, max: 2000, step: 0.1, required: true, schematicLabel: 'A' },
        { key: 'width', labelKey: 'width', type: 'number', unit: 'mm', min: 2, max: 500, step: 0.1, required: true, schematicLabel: 'B' },
        { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.05, max: 20, step: 0.01, required: true, schematicLabel: 'C' },
        { key: 'holeCount', labelKey: 'holeCount', type: 'number', min: 0, max: 10, step: 1, placeholder: '0', schematicLabel: 'D' },
        { key: 'holeDiameter', labelKey: 'holeDiameter', type: 'number', unit: 'mm', min: 1, max: 20, step: 0.1, schematicLabel: 'E' },
        { key: 'holeSpacing', labelKey: 'holeSpacing', type: 'number', unit: 'mm', min: 5, max: 500, step: 0.1, schematicLabel: 'F' },
        { key: 'cornerRadius', labelKey: 'cornerRadius', type: 'number', unit: 'mm', min: 0, max: 50, step: 0.1 },
      ];

    case 'machine':
      return [
        { key: 'length', labelKey: 'length', type: 'number', unit: 'mm', min: 50, max: 5000, step: 1, required: true, schematicLabel: 'A' },
        { key: 'width', labelKey: 'width', type: 'number', unit: 'mm', min: 10, max: 500, step: 0.1, required: true, schematicLabel: 'B' },
        { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 1, max: 100, step: 0.1, required: true, schematicLabel: 'C' },
        { key: 'cuttingAngle', labelKey: 'cuttingAngle', type: 'number', unit: '°', min: 0, max: 90, step: 0.5, schematicLabel: 'D' },
        { key: 'boltHoleCount', labelKey: 'boltHoleCount', type: 'number', min: 0, max: 20, step: 1, schematicLabel: 'E' },
        { key: 'boltHoleDiameter', labelKey: 'boltHoleDiameter', type: 'number', unit: 'mm', min: 3, max: 30, step: 0.1, schematicLabel: 'F' },
        { key: 'boltHoleSpacing', labelKey: 'boltHoleSpacing', type: 'number', unit: 'mm', min: 10, max: 500, step: 1 },
        { key: 'machineModel', labelKey: 'machineModel', type: 'text', placeholder: 'Marka / Model' },
      ];

    case 'special':
      return [
        {
          key: 'subtype', labelKey: 'subtype', type: 'select', required: true,
          options: [
            { value: 'trapezoid', labelKey: 'subtypeTrapezoid' },
            { value: 'hook', labelKey: 'subtypeHook' },
            { value: 'pentagon', labelKey: 'subtypePentagon' },
            { value: 'arrow', labelKey: 'subtypeArrow' },
            { value: 'scalpel', labelKey: 'subtypeScalpel' },
            { value: 'craft', labelKey: 'subtypeCraft' },
          ],
        },
        { key: 'overallLength', labelKey: 'overallLength', type: 'number', unit: 'mm', min: 5, max: 500, step: 0.1, required: true, schematicLabel: 'A' },
        { key: 'overallWidth', labelKey: 'overallWidth', type: 'number', unit: 'mm', min: 2, max: 200, step: 0.1, required: true, schematicLabel: 'B' },
        { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 20, step: 0.01, required: true, schematicLabel: 'C' },
        { key: 'description', labelKey: 'description', type: 'textarea' },
      ];

    case 'packaging':
      return [
        {
          key: 'subtype', labelKey: 'subtype', type: 'select', required: true,
          options: [
            { value: 'thermoform', labelKey: 'subtypeThermoform' },
            { value: 'tray-mold', labelKey: 'subtypeTrayMold' },
            { value: 'case-sealer', labelKey: 'subtypeCaseSealer' },
            { value: 'sausage', labelKey: 'subtypeSausage' },
            { value: 'zigzag', labelKey: 'subtypeZigZag' },
          ],
        },
        { key: 'overallLength', labelKey: 'overallLength', type: 'number', unit: 'mm', min: 10, max: 2000, step: 0.1, required: true, schematicLabel: 'A' },
        { key: 'overallWidth', labelKey: 'overallWidth', type: 'number', unit: 'mm', min: 5, max: 500, step: 0.1, required: true, schematicLabel: 'B' },
        { key: 'thickness', labelKey: 'thickness', type: 'number', unit: 'mm', min: 0.1, max: 20, step: 0.1, required: true, schematicLabel: 'C' },
        { key: 'machineModel', labelKey: 'machineModel', type: 'text', placeholder: 'Marka / Model' },
        { key: 'description', labelKey: 'description', type: 'textarea' },
      ];

    case 'custom':
      return [
        { key: 'description', labelKey: 'description', type: 'textarea', required: true },
        { key: 'approximateLength', labelKey: 'approximateLength', type: 'number', unit: 'mm', min: 1, max: 10000, step: 1, schematicLabel: 'A' },
        { key: 'approximateWidth', labelKey: 'approximateWidth', type: 'number', unit: 'mm', min: 1, max: 5000, step: 1, schematicLabel: 'B' },
        { key: 'approximateThickness', labelKey: 'approximateThickness', type: 'number', unit: 'mm', min: 0.1, max: 200, step: 0.1, schematicLabel: 'C' },
        { key: 'usage', labelKey: 'usage', type: 'textarea' },
      ];

    default:
      return [];
  }
}
