// =============================================================================
// ControlPanel — Accordion Kontrol Paneli
// =============================================================================
// Tek bölüm açık kalır. Compact butonlar. Genişletilebilir section yapısı.
// =============================================================================

'use client';

import { useState, useCallback, useMemo } from 'react';
import type { SimulatorState, SimulatorAction } from '../useSimulator';
import type { SimulationResult } from '@/lib/simulator/engine';
import { findMaterial, CIRCULAR_PRESETS, CIRCULAR_PHYSICS } from '@/lib/simulator/engine';
import { isCircularBladeType } from '@/lib/simulator/types';

import MaterialSelector from './MaterialSelector';
import BladeTypeSelector from './BladeTypeSelector';
import BevelTypeSelector from './BevelTypeSelector';
import BladeMaterialSelector from './BladeMaterialSelector';
import CoatingSelector from './CoatingSelector';
import MachineSelector from './MachineSelector';
import AngleSlider from './AngleSlider';
import {
  RotateCcw,
  Camera,
  BarChart3,
  ChevronDown,
  Package,
  Scissors,
  Triangle,
  Layers,
  Settings2,
  type LucideIcon,
} from 'lucide-react';

interface ControlPanelProps {
  state: SimulatorState;
  dispatch: React.Dispatch<SimulatorAction>;
  onSimulate: () => SimulationResult;
  onSnapshot: (label: string) => void;
}

type SectionId = 'material' | 'blade' | 'geometry' | 'coating' | 'machine';

export default function ControlPanel({
  state,
  dispatch,
  onSimulate,
  onSnapshot,
}: ControlPanelProps) {
  const [openSection, setOpenSection] = useState<SectionId | null>('material');

  const selectedMaterial = useMemo(
    () => findMaterial(state.materialId),
    [state.materialId]
  );

  const handleSimulate = useCallback(() => {
    onSimulate();
  }, [onSimulate]);

  const handleSnapshot = useCallback(() => {
    const angle = state.primaryAngle;
    const label = `${state.bladeTypeId} ${angle}° ${state.bevelType}`;
    onSnapshot(label);
  }, [onSnapshot, state.primaryAngle, state.bladeTypeId, state.bevelType]);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, [dispatch]);

  const toggle = useCallback((id: SectionId) => {
    setOpenSection(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className="space-y-1">
      {/* ─── AKSİYON BUTONLARI (compact) ─── */}
      <div className="flex items-center gap-1.5 pb-2">
        <button
          type="button"
          onClick={handleSimulate}
          className="
            flex-1 flex items-center justify-center gap-1.5
            px-3 py-2 rounded-md font-semibold text-xs
            bg-primary-600 hover:bg-primary-700 text-white
            shadow-sm hover:shadow-md
            transition-all duration-150 active:scale-[0.98]
            cursor-pointer
          "
        >
          <BarChart3 className="w-3.5 h-3.5" />
          Analiz
        </button>

        <button
          type="button"
          onClick={handleSnapshot}
          className="
            p-2 rounded-md border border-steel-200
            text-steel-500 hover:text-primary-600 hover:border-primary-300
            transition-all duration-150 cursor-pointer
          "
          title="Kaydet"
        >
          <Camera className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="
            p-2 rounded-md border border-steel-200
            text-steel-500 hover:text-red-500 hover:border-red-300
            transition-all duration-150 cursor-pointer
          "
          title="Sıfırla"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ─── ACCORDION SECTIONS ─── */}
      <AccordionSection
        id="material"
        title="Kesilen Malzeme"
        icon={Package}
        isOpen={openSection === 'material'}
        onToggle={toggle}
      >
        <MaterialSelector
          selectedId={state.materialId}
          onChange={id => dispatch({ type: 'SET_MATERIAL', payload: id })}
        />
      </AccordionSection>

      <AccordionSection
        id="blade"
        title="Bıçak / Jilet Tipi"
        icon={Scissors}
        isOpen={openSection === 'blade'}
        onToggle={toggle}
      >
        <BladeTypeSelector
          selectedId={state.bladeTypeId}
          onChange={id => dispatch({ type: 'SET_BLADE_TYPE', payload: id })}
        />
      </AccordionSection>

      <AccordionSection
        id="geometry"
        title="Bileme Geometrisi"
        icon={Triangle}
        isOpen={openSection === 'geometry'}
        onToggle={toggle}
      >
        <BevelTypeSelector
          selectedId={state.bevelType}
          onChange={id => dispatch({ type: 'SET_BEVEL_TYPE', payload: id })}
        />
        <div className="mt-3 space-y-3">
          <AngleSlider
            label="Birincil Bileme Açısı"
            value={state.primaryAngle}
            onChange={v => dispatch({ type: 'SET_PRIMARY_ANGLE', payload: v })}
            min={5}
            max={60}
            step={0.5}
            recommendedRange={selectedMaterial?.recommendedAngleRange}
            description="Bıçak kenarının merkez eksene göre açısı (yarım açı)"
          />
          {state.bevelType === 'compound' && (
            <AngleSlider
              label="İkincil Bileme Açısı"
              value={state.secondaryAngle ?? state.primaryAngle + 5}
              onChange={v => dispatch({ type: 'SET_SECONDARY_ANGLE', payload: v })}
              min={state.primaryAngle + 1}
              max={60}
              step={0.5}
              description="Compound bileme — birincil açıdan büyük olmalı"
            />
          )}
          <AngleSlider
            label="Bıçak Kalınlığı"
            value={state.bladeThickness}
            onChange={v => dispatch({ type: 'SET_BLADE_THICKNESS', payload: v })}
            min={0.1}
            max={5}
            step={0.05}
            unit="mm"
            description="Bıçak sırtındaki toplam kalınlık"
          />
          <AngleSlider
            label="Kenar Yarıçapı"
            value={state.edgeRadius}
            onChange={v => dispatch({ type: 'SET_EDGE_RADIUS', payload: v })}
            min={0.1}
            max={50}
            step={0.5}
            unit="µm"
            description="Kesici kenarın yuvarlaklık yarıçapı (küçük = keskin)"
          />
          <AngleSlider
            label="Talaş Açısı (γ)"
            value={state.rakeAngle}
            onChange={v => dispatch({ type: 'SET_RAKE_ANGLE', payload: v })}
            min={-15}
            max={15}
            step={0.5}
            unit="°"
            description="Bıçak montaj açısı — pozitif: azalan kuvvet, negatif: artan kuvvet"
          />
          {/* ── Faz 3: Dairesel Bıçak Parametreleri ── */}
          {isCircularBladeType(state.bladeTypeId) && (
            <>
              <div className="pt-2 pb-1 border-t border-steel-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-steel-500 uppercase tracking-wider">
                    Dairesel Boyutlar
                  </span>
                  <select
                    className="text-[10px] text-steel-500 bg-steel-50 border border-steel-200 rounded px-1.5 py-0.5 cursor-pointer"
                    value=""
                    onChange={e => {
                      const preset = CIRCULAR_PRESETS.find(p => p.id === e.target.value);
                      if (preset) {
                        dispatch({
                          type: 'SET_CIRCULAR_PARAMS',
                          payload: {
                            outerDiameter: preset.outerDiameter,
                            innerDiameter: preset.innerDiameter,
                          },
                        });
                        dispatch({ type: 'SET_BLADE_THICKNESS', payload: preset.thickness });
                      }
                    }}
                  >
                    <option value="">Preset seç…</option>
                    {CIRCULAR_PRESETS.map(p => (
                      <option key={p.id} value={p.id}>{p.name} — {p.description}</option>
                    ))}
                  </select>
                </div>
              </div>
              <AngleSlider
                label="Dış Çap (OD)"
                value={state.circularParams.outerDiameter}
                onChange={v => dispatch({ type: 'SET_CIRCULAR_PARAMS', payload: { outerDiameter: v } })}
                min={CIRCULAR_PHYSICS.MIN_OD}
                max={CIRCULAR_PHYSICS.MAX_OD}
                step={1}
                unit="mm"
                description="Bıçak dış çapı — kesim yarıçapını belirler"
              />
              <AngleSlider
                label="İç Çap (ID)"
                value={state.circularParams.innerDiameter}
                onChange={v => dispatch({ type: 'SET_CIRCULAR_PARAMS', payload: { innerDiameter: v } })}
                min={CIRCULAR_PHYSICS.MIN_ID}
                max={Math.min(CIRCULAR_PHYSICS.MAX_ID, state.circularParams.outerDiameter * 0.8)}
                step={1}
                unit="mm"
                description="Montaj deliği çapı"
              />
              <AngleSlider
                label="Dish Açısı"
                value={state.circularParams.dishAngle}
                onChange={v => dispatch({ type: 'SET_CIRCULAR_PARAMS', payload: { dishAngle: v } })}
                min={CIRCULAR_PHYSICS.MIN_DISH_ANGLE}
                max={CIRCULAR_PHYSICS.MAX_DISH_ANGLE}
                step={0.5}
                unit="°"
                description="Konkav açı — 0° = düz, >0° = dished (makaslama etkisi)"
              />
              <AngleSlider
                label="Overlap"
                value={state.circularParams.bladeOverlap}
                onChange={v => dispatch({ type: 'SET_CIRCULAR_PARAMS', payload: { bladeOverlap: v } })}
                min={CIRCULAR_PHYSICS.MIN_OVERLAP}
                max={CIRCULAR_PHYSICS.MAX_OVERLAP}
                step={0.1}
                unit="mm"
                description="Üst-alt bıçak bindirme mesafesi (shear slitting)"
              />
            </>
          )}
        </div>
      </AccordionSection>

      <AccordionSection
        id="coating"
        title="Malzeme & Kaplama"
        icon={Layers}
        isOpen={openSection === 'coating'}
        onToggle={toggle}
      >
        <BladeMaterialSelector
          selectedId={state.bladeMaterialId}
          onChange={id => dispatch({ type: 'SET_BLADE_MATERIAL', payload: id })}
        />
        <div className="mt-3">
          <CoatingSelector
            selectedId={state.coatingId}
            onChange={id => dispatch({ type: 'SET_COATING', payload: id })}
            recommendedCoatings={state.simulationResult?.recommendedCoatings}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        id="machine"
        title="Makine & Kesim"
        icon={Settings2}
        isOpen={openSection === 'machine'}
        onToggle={toggle}
      >
        <MachineSelector
          selectedMachineId={state.machineTypeId}
          selectedMethod={state.cuttingMethod}
          cuttingSpeed={state.cuttingSpeed}
          onMachineChange={id => dispatch({ type: 'SET_MACHINE_TYPE', payload: id })}
          onMethodChange={m => dispatch({ type: 'SET_CUTTING_METHOD', payload: m })}
          onSpeedChange={s => dispatch({ type: 'SET_CUTTING_SPEED', payload: s })}
        />
        <div className="mt-3">
          <AngleSlider
            label="Malzeme Kalınlığı"
            value={state.materialThickness}
            onChange={v => dispatch({ type: 'SET_MATERIAL_THICKNESS', payload: v })}
            min={0.005}
            max={50}
            step={0.005}
            unit="mm"
            description="Kesilen malzemenin kalınlığı (0.005–50mm)"
          />
          {state.cuttingMethod === 'shear' && (
            <AngleSlider
              label="Makaslama Boşluğu"
              value={state.clearance}
              onChange={v => dispatch({ type: 'SET_CLEARANCE', payload: v })}
              min={1}
              max={25}
              step={0.5}
              unit="%"
              description="Üst/alt bıçak arası boşluk (malzeme kalınlığının %'si)"
            />
          )}
        </div>
      </AccordionSection>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AccordionSection — Tek açık section
// ---------------------------------------------------------------------------

function AccordionSection({
  id,
  title,
  icon: Icon,
  isOpen,
  onToggle,
  children,
}: {
  id: SectionId;
  title: string;
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: (id: SectionId) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-steel-100 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className={`
          w-full flex items-center gap-2 px-3 py-2.5
          text-left text-xs font-semibold transition-colors cursor-pointer
          ${isOpen
            ? 'bg-steel-50 text-steel-800'
            : 'bg-white text-steel-500 hover:text-steel-700 hover:bg-steel-50/50'
          }
        `}
      >
        <Icon className="w-3.5 h-3.5 shrink-0" />
        <span className="flex-1">{title}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-3 py-3 border-t border-steel-100 bg-white">
          {children}
        </div>
      )}
    </div>
  );
}
