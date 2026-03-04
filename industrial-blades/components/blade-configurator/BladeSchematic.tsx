'use client';

/**
 * Blade Schematic Diagrams
 * Simple SVG reference diagrams showing blade dimensions.
 * NOT technical drawings - just visual references to help customers
 * understand which dimension they are entering.
 */

import type { BladeCategory } from '@/lib/blade-configurator/types';

interface BladeSchematicProps {
  category: BladeCategory;
  focusedField: string | null;
  dimensions: Record<string, number | string>;
  dict: Record<string, string>;
}

// Highlight color for focused dimension
const HIGHLIGHT = '#1a73e8';
const DIM_COLOR = '#6b7280';
const OUTLINE = '#374151';
const FILL = '#f1f5f9';
const ACTIVE_FILL = '#eff6ff';

function getColor(field: string, focusedField: string | null): string {
  return focusedField === field ? HIGHLIGHT : DIM_COLOR;
}

function getWeight(field: string, focusedField: string | null): number {
  return focusedField === field ? 2 : 1;
}

// ─── Dimension Arrow Helper ─────────────────────────────────────────────────

function DimArrow({
  x1, y1, x2, y2, label, field, focusedField, offset = 0,
}: {
  x1: number; y1: number; x2: number; y2: number;
  label: string; field: string; focusedField: string | null;
  offset?: number;
}) {
  const color = getColor(field, focusedField);
  const weight = getWeight(field, focusedField);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const isHoriz = Math.abs(y2 - y1) < Math.abs(x2 - x1);
  const textX = isHoriz ? mx : mx + offset;
  const textY = isHoriz ? my + offset : my;

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={weight} markerStart="url(#arrowStart)" markerEnd="url(#arrowEnd)" />
      <rect
        x={textX - 12}
        y={textY - 8}
        width={24}
        height={16}
        rx={3}
        fill="white"
        stroke={color}
        strokeWidth={0.5}
        opacity={0.95}
      />
      <text x={textX} y={textY + 4} textAnchor="middle" fill={color} fontSize={10} fontWeight={focusedField === field ? 700 : 500} fontFamily="Montserrat, sans-serif">
        {label}
      </text>
    </g>
  );
}

// ─── Arrow Marker Defs ──────────────────────────────────────────────────────

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrowEnd" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={DIM_COLOR} />
      </marker>
      <marker id="arrowStart" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
        <path d="M8,0 L0,3 L8,6 Z" fill={DIM_COLOR} />
      </marker>
    </defs>
  );
}

// ─── Circular Blade ─────────────────────────────────────────────────────────

function CircularSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      {/* Title */}
      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.circularTitle || 'Circular Blade'}
      </text>

      {/* ── Front View ── */}
      <text x={120} y={38} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Front View
      </text>

      {/* Outer circle */}
      <circle cx={120} cy={150} r={90} fill={focusedField === 'outerDiameter' ? ACTIVE_FILL : FILL} stroke={OUTLINE} strokeWidth={2} />

      {/* Inner bore circle */}
      <circle cx={120} cy={150} r={25} fill="white" stroke={OUTLINE} strokeWidth={1.5} />

      {/* Center crosshairs */}
      <line x1={120} y1={55} x2={120} y2={245} stroke={DIM_COLOR} strokeWidth={0.5} strokeDasharray="4,3" />
      <line x1={25} y1={150} x2={215} y2={150} stroke={DIM_COLOR} strokeWidth={0.5} strokeDasharray="4,3" />

      {/* A - Outer Diameter (horizontal, below) */}
      <DimArrow x1={30} y1={260} x2={210} y2={260} label="A" field="outerDiameter" focusedField={focusedField} offset={-5} />
      <line x1={30} y1={240} x2={30} y2={265} stroke={getColor('outerDiameter', focusedField)} strokeWidth={0.5} />
      <line x1={210} y1={240} x2={210} y2={265} stroke={getColor('outerDiameter', focusedField)} strokeWidth={0.5} />

      {/* B - Inner Diameter (across bore) */}
      <DimArrow x1={95} y1={150} x2={145} y2={150} label="B" field="innerDiameter" focusedField={focusedField} offset={-14} />

      {/* ── Side Cross-Section ── */}
      <text x={310} y={38} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Cross Section
      </text>

      {/* Blade cross-section body */}
      <rect x={270} y={80} width={80} height={140} rx={2} fill={focusedField === 'thickness' ? ACTIVE_FILL : FILL} stroke={OUTLINE} strokeWidth={1.5} />

      {/* Bevel lines (top) */}
      <line x1={270} y1={80} x2={285} y2={95} stroke={OUTLINE} strokeWidth={1} />
      <line x1={350} y1={80} x2={335} y2={95} stroke={OUTLINE} strokeWidth={1} />

      {/* Bevel lines (bottom) */}
      <line x1={270} y1={220} x2={285} y2={205} stroke={OUTLINE} strokeWidth={1} />
      <line x1={350} y1={220} x2={335} y2={205} stroke={OUTLINE} strokeWidth={1} />

      {/* C - Thickness (side) */}
      <DimArrow x1={370} y1={80} x2={370} y2={220} label="C" field="thickness" focusedField={focusedField} offset={15} />

      {/* D - Bevel angle indicator */}
      <path d={`M 270 80 Q 275 87 282 90`} fill="none" stroke={getColor('bevelAngle', focusedField)} strokeWidth={getWeight('bevelAngle', focusedField)} />
      <text x={258} y={90} textAnchor="middle" fill={getColor('bevelAngle', focusedField)} fontSize={10} fontWeight={focusedField === 'bevelAngle' ? 700 : 500} fontFamily="Montserrat, sans-serif">
        D
      </text>

      {/* E - Land width */}
      <line x1={268} y1={76} x2={268} y2={68} stroke={getColor('landWidth', focusedField)} strokeWidth={getWeight('landWidth', focusedField)} />
      <line x1={286} y1={76} x2={286} y2={68} stroke={getColor('landWidth', focusedField)} strokeWidth={getWeight('landWidth', focusedField)} />
      <DimArrow x1={268} y1={72} x2={286} y2={72} label="E" field="landWidth" focusedField={focusedField} offset={-12} />

      {/* Legend */}
      <g transform="translate(15, 280)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.outerDiameter || 'OD'} | B={dict.innerDiameter || 'ID'} | C={dict.thickness || 'T'} | D={dict.bevelAngle || 'Bevel'} | E={dict.landWidth || 'Land'}
        </text>
      </g>
    </svg>
  );
}

// ─── Straight / Flat Blade ──────────────────────────────────────────────────

function StraightSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.straightTitle || 'Straight Blade'}
      </text>

      {/* ── Top View ── */}
      <text x={200} y={40} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Top View
      </text>

      {/* Blade body */}
      <rect x={50} y={60} width={300} height={70} rx={3} fill={focusedField === 'length' || focusedField === 'width' ? ACTIVE_FILL : FILL} stroke={OUTLINE} strokeWidth={2} />

      {/* Holes (3 holes shown) */}
      <circle cx={120} cy={95} r={8} fill="white" stroke={OUTLINE} strokeWidth={1.2} />
      <circle cx={200} cy={95} r={8} fill="white" stroke={OUTLINE} strokeWidth={1.2} />
      <circle cx={280} cy={95} r={8} fill="white" stroke={OUTLINE} strokeWidth={1.2} />

      {/* Center line */}
      <line x1={45} y1={95} x2={355} y2={95} stroke={DIM_COLOR} strokeWidth={0.5} strokeDasharray="4,3" />

      {/* A - Length */}
      <DimArrow x1={50} y1={150} x2={350} y2={150} label="A" field="length" focusedField={focusedField} offset={-5} />
      <line x1={50} y1={132} x2={50} y2={155} stroke={getColor('length', focusedField)} strokeWidth={0.5} />
      <line x1={350} y1={132} x2={350} y2={155} stroke={getColor('length', focusedField)} strokeWidth={0.5} />

      {/* B - Width */}
      <DimArrow x1={370} y1={60} x2={370} y2={130} label="B" field="width" focusedField={focusedField} offset={15} />

      {/* D - Hole count (label near hole) */}
      <text x={120} y={80} textAnchor="middle" fill={getColor('holeCount', focusedField)} fontSize={8} fontWeight={focusedField === 'holeCount' ? 700 : 400} fontFamily="Montserrat, sans-serif">
        D
      </text>

      {/* E - Hole diameter */}
      <DimArrow x1={192} y1={95} x2={208} y2={95} label="E" field="holeDiameter" focusedField={focusedField} offset={-14} />

      {/* F - Hole spacing */}
      <DimArrow x1={120} y1={115} x2={200} y2={115} label="F" field="holeSpacing" focusedField={focusedField} offset={12} />

      {/* ── Side View ── */}
      <text x={200} y={185} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Side View
      </text>

      <rect x={50} y={200} width={300} height={12} rx={1} fill={focusedField === 'thickness' ? ACTIVE_FILL : FILL} stroke={OUTLINE} strokeWidth={1.5} />

      {/* Bevel on edge */}
      <line x1={350} y1={200} x2={355} y2={206} stroke={OUTLINE} strokeWidth={1} />
      <line x1={350} y1={212} x2={355} y2={206} stroke={OUTLINE} strokeWidth={1} />

      {/* C - Thickness */}
      <DimArrow x1={370} y1={200} x2={370} y2={212} label="C" field="thickness" focusedField={focusedField} offset={15} />

      {/* Legend */}
      <g transform="translate(20, 250)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.length || 'L'} | B={dict.width || 'W'} | C={dict.thickness || 'T'} | D={dict.holeCount || 'Holes'} | E={dict.holeDiameter || 'HD'} | F={dict.holeSpacing || 'HS'}
        </text>
      </g>
    </svg>
  );
}

// ─── Machine Knife ──────────────────────────────────────────────────────────

function MachineSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.machineTitle || 'Machine Knife'}
      </text>

      {/* Top View */}
      <text x={200} y={40} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Top View
      </text>

      {/* Blade body */}
      <rect x={30} y={55} width={340} height={80} rx={2} fill={FILL} stroke={OUTLINE} strokeWidth={2} />

      {/* Bolt holes along center */}
      <circle cx={80} cy={95} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />
      <circle cx={140} cy={95} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />
      <circle cx={200} cy={95} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />
      <circle cx={260} cy={95} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />
      <circle cx={320} cy={95} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />

      {/* Cutting edge indicator (bottom) */}
      <line x1={30} y1={135} x2={370} y2={135} stroke={HIGHLIGHT} strokeWidth={2} />
      <text x={380} y={138} fill={HIGHLIGHT} fontSize={7} fontFamily="Montserrat, sans-serif">
        Edge
      </text>

      {/* A - Length */}
      <DimArrow x1={30} y1={152} x2={370} y2={152} label="A" field="length" focusedField={focusedField} offset={-5} />
      <line x1={30} y1={137} x2={30} y2={157} stroke={getColor('length', focusedField)} strokeWidth={0.5} />
      <line x1={370} y1={137} x2={370} y2={157} stroke={getColor('length', focusedField)} strokeWidth={0.5} />

      {/* B - Width */}
      <DimArrow x1={390} y1={55} x2={390} y2={135} label="B" field="width" focusedField={focusedField} offset={12} />

      {/* E - Bolt holes label */}
      <text x={80} y={80} textAnchor="middle" fill={getColor('boltHoleCount', focusedField)} fontSize={8} fontWeight={focusedField === 'boltHoleCount' ? 700 : 400} fontFamily="Montserrat, sans-serif">
        E
      </text>

      {/* F - Bolt hole diameter */}
      <DimArrow x1={194} y1={95} x2={206} y2={95} label="F" field="boltHoleDiameter" focusedField={focusedField} offset={-14} />

      {/* Side View */}
      <text x={200} y={185} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Side View
      </text>

      {/* Side blade body */}
      <polygon points="30,200 370,200 370,230 35,230 30,225" fill={FILL} stroke={OUTLINE} strokeWidth={1.5} />

      {/* Cutting angle */}
      <path d={`M 32 225 Q 33 222 38 220`} fill="none" stroke={getColor('cuttingAngle', focusedField)} strokeWidth={getWeight('cuttingAngle', focusedField)} />
      <text x={20} y={222} textAnchor="middle" fill={getColor('cuttingAngle', focusedField)} fontSize={9} fontWeight={focusedField === 'cuttingAngle' ? 700 : 400} fontFamily="Montserrat, sans-serif">
        D
      </text>

      {/* C - Thickness */}
      <DimArrow x1={390} y1={200} x2={390} y2={230} label="C" field="thickness" focusedField={focusedField} offset={12} />

      {/* Legend */}
      <g transform="translate(20, 262)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.length || 'L'} | B={dict.width || 'W'} | C={dict.thickness || 'T'} | D={dict.cuttingAngle || 'Angle'} | E={dict.boltHoleCount || 'Bolts'} | F={dict.boltHoleDiameter || 'BD'}
        </text>
      </g>
    </svg>
  );
}

// ─── Special Form Blade ─────────────────────────────────────────────────────

function SpecialSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.specialTitle || 'Special Form Blade'}
      </text>

      {/* Trapezoid shape example */}
      <polygon points="130,60 270,60 300,190 100,190" fill={FILL} stroke={OUTLINE} strokeWidth={2} />

      {/* Center line vertical */}
      <line x1={200} y1={50} x2={200} y2={200} stroke={DIM_COLOR} strokeWidth={0.5} strokeDasharray="4,3" />

      {/* A - Overall Length (height) */}
      <DimArrow x1={340} y1={60} x2={340} y2={190} label="A" field="overallLength" focusedField={focusedField} offset={15} />

      {/* B - Overall Width (bottom) */}
      <DimArrow x1={100} y1={210} x2={300} y2={210} label="B" field="overallWidth" focusedField={focusedField} offset={-5} />
      <line x1={100} y1={192} x2={100} y2={215} stroke={getColor('overallWidth', focusedField)} strokeWidth={0.5} />
      <line x1={300} y1={192} x2={300} y2={215} stroke={getColor('overallWidth', focusedField)} strokeWidth={0.5} />

      {/* Side view - thickness */}
      <text x={200} y={240} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Side View
      </text>
      <rect x={100} y={252} width={200} height={8} rx={1} fill={FILL} stroke={OUTLINE} strokeWidth={1} />
      <DimArrow x1={320} y1={252} x2={320} y2={260} label="C" field="thickness" focusedField={focusedField} offset={15} />

      {/* Legend */}
      <g transform="translate(50, 278)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.overallLength || 'L'} | B={dict.overallWidth || 'W'} | C={dict.thickness || 'T'}
        </text>
      </g>
    </svg>
  );
}

// ─── Packaging Blade ────────────────────────────────────────────────────────

function PackagingSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.packagingTitle || 'Packaging Blade'}
      </text>

      {/* Star/complex shape outline */}
      <polygon
        points="200,45 220,90 270,90 230,120 245,170 200,140 155,170 170,120 130,90 180,90"
        fill={FILL}
        stroke={OUTLINE}
        strokeWidth={2}
      />

      {/* Center point */}
      <circle cx={200} cy={110} r={6} fill="white" stroke={OUTLINE} strokeWidth={1} />

      {/* A - Overall Length (vertical span) */}
      <DimArrow x1={320} y1={45} x2={320} y2={170} label="A" field="overallLength" focusedField={focusedField} offset={15} />

      {/* B - Overall Width (horizontal span) */}
      <DimArrow x1={130} y1={195} x2={270} y2={195} label="B" field="overallWidth" focusedField={focusedField} offset={-5} />
      <line x1={130} y1={172} x2={130} y2={200} stroke={getColor('overallWidth', focusedField)} strokeWidth={0.5} />
      <line x1={270} y1={172} x2={270} y2={200} stroke={getColor('overallWidth', focusedField)} strokeWidth={0.5} />

      {/* Side view */}
      <text x={200} y={225} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Side View
      </text>
      <rect x={100} y={237} width={200} height={10} rx={1} fill={FILL} stroke={OUTLINE} strokeWidth={1} />
      <DimArrow x1={320} y1={237} x2={320} y2={247} label="C" field="thickness" focusedField={focusedField} offset={15} />

      {/* Legend */}
      <g transform="translate(50, 275)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.overallLength || 'L'} | B={dict.overallWidth || 'W'} | C={dict.thickness || 'T'}
        </text>
      </g>
    </svg>
  );
}

// ─── Custom / Other ─────────────────────────────────────────────────────────

function CustomSchematic({ focusedField, dict }: Omit<BladeSchematicProps, 'category' | 'dimensions'>) {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[400px]">
      <ArrowDefs />

      <text x={200} y={18} textAnchor="middle" fill={OUTLINE} fontSize={11} fontWeight={600} fontFamily="Montserrat, sans-serif">
        {dict.customTitle || 'Custom Blade'}
      </text>

      {/* Generic irregular shape */}
      <path
        d="M120,70 L280,60 Q310,65 300,100 L310,180 Q305,200 280,195 L120,200 Q90,195 100,170 L85,100 Q90,70 120,70 Z"
        fill={FILL}
        stroke={OUTLINE}
        strokeWidth={2}
        strokeDasharray="6,3"
      />

      {/* Question mark in center */}
      <text x={200} y={145} textAnchor="middle" fill={DIM_COLOR} fontSize={36} fontWeight={300} fontFamily="Montserrat, sans-serif" opacity={0.4}>
        ?
      </text>

      {/* A - Approximate Length */}
      <DimArrow x1={340} y1={60} x2={340} y2={200} label="A" field="approximateLength" focusedField={focusedField} offset={15} />

      {/* B - Approximate Width */}
      <DimArrow x1={85} y1={225} x2={310} y2={225} label="B" field="approximateWidth" focusedField={focusedField} offset={-5} />
      <line x1={85} y1={202} x2={85} y2={230} stroke={getColor('approximateWidth', focusedField)} strokeWidth={0.5} />
      <line x1={310} y1={202} x2={310} y2={230} stroke={getColor('approximateWidth', focusedField)} strokeWidth={0.5} />

      {/* Side view */}
      <text x={200} y={248} textAnchor="middle" fill={DIM_COLOR} fontSize={9} fontFamily="Montserrat, sans-serif">
        Side View
      </text>
      <rect x={85} y={255} width={225} height={8} rx={1} fill={FILL} stroke={OUTLINE} strokeWidth={1} strokeDasharray="4,2" />
      <DimArrow x1={330} y1={255} x2={330} y2={263} label="C" field="approximateThickness" focusedField={focusedField} offset={15} />

      {/* Legend */}
      <g transform="translate(30, 278)">
        <text fill={DIM_COLOR} fontSize={8} fontFamily="Montserrat, sans-serif">
          A={dict.approximateLength || 'L'} | B={dict.approximateWidth || 'W'} | C={dict.approximateThickness || 'T'} ({dict.optional || 'Approximate'})
        </text>
      </g>
    </svg>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function BladeSchematic({ category, focusedField, dimensions, dict }: BladeSchematicProps) {
  const schematicProps = { focusedField, dict, dimensions };

  switch (category) {
    case 'circular':
      return <CircularSchematic {...schematicProps} />;
    case 'straight':
      return <StraightSchematic {...schematicProps} />;
    case 'machine':
      return <MachineSchematic {...schematicProps} />;
    case 'special':
      return <SpecialSchematic {...schematicProps} />;
    case 'packaging':
      return <PackagingSchematic {...schematicProps} />;
    case 'custom':
      return <CustomSchematic {...schematicProps} />;
    default:
      return null;
  }
}
