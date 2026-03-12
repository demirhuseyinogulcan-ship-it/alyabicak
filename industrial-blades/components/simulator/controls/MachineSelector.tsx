// =============================================================================
// MachineSelector — Makine Tipi Seçici
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { MachineType, CuttingMethod } from '@/lib/simulator/types';
import {
  listMachineTypes,
  listCompatibleCuttingMethods,
  type MachineTypeInfo,
} from '@/lib/simulator/engine';

interface MachineSelectorProps {
  selectedMachineId: MachineType;
  selectedMethod: CuttingMethod;
  cuttingSpeed: number;
  onMachineChange: (id: MachineType) => void;
  onMethodChange: (method: CuttingMethod) => void;
  onSpeedChange: (speed: number) => void;
}

const METHOD_LABELS: Record<CuttingMethod, string> = {
  shear: 'Makaslama (Shear)',
  crush: 'Ezme (Crush)',
  razor: 'Jilet / Traşlama (Razor)',
  score: 'Çizme (Score)',
  rotary: 'Döner (Rotary)',
  die: 'Kalıp Kesim (Die)',
  ultrasonic: 'Ultrasonik',
  laser: 'Lazer',
};

export default function MachineSelector({
  selectedMachineId,
  selectedMethod,
  cuttingSpeed,
  onMachineChange,
  onMethodChange,
  onSpeedChange,
}: MachineSelectorProps) {
  const machines = useMemo(() => listMachineTypes(), []);
  const compatibleMethods = useMemo(
    () => listCompatibleCuttingMethods(selectedMachineId),
    [selectedMachineId]
  );
  const selectedMachine = machines.find(m => m.id === selectedMachineId);

  return (
    <div className="space-y-4">
      {/* Makine Seçimi */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-steel-700">
          Makine Tipi
        </label>
        <select
          value={selectedMachineId}
          onChange={e => onMachineChange(e.target.value as MachineType)}
          className="
            w-full px-3 py-2.5 rounded-lg border border-steel-200
            bg-white text-steel-800 text-xs font-medium
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            transition-colors
          "
        >
          {machines.map(m => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Kesim Yöntemi */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-steel-700">
          Kesim Yöntemi
        </label>
        <div className="flex flex-wrap gap-2">
          {compatibleMethods.map(method => (
            <button
              key={method}
              type="button"
              onClick={() => onMethodChange(method)}
              className={`
                px-3 py-1.5 rounded-md text-xs font-medium
                border transition-all duration-200 cursor-pointer
                ${
                  method === selectedMethod
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-steel-200 bg-white text-steel-500 hover:border-steel-300'
                }
              `}
            >
              {METHOD_LABELS[method]}
            </button>
          ))}
        </div>
      </div>

      {/* Kesim Hızı */}
      {selectedMachine && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-steel-700">
              Kesim Hızı
            </label>
            <span className="text-xs font-semibold text-steel-600">
              {cuttingSpeed} m/dk
            </span>
          </div>
          <input
            type="range"
            min={selectedMachine.typicalSpeed[0]}
            max={selectedMachine.typicalSpeed[1]}
            step={10}
            value={cuttingSpeed}
            onChange={e => onSpeedChange(Number(e.target.value))}
            className="
              w-full h-2 appearance-none bg-steel-100 rounded-full cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-primary-500
              [&::-webkit-slider-thumb]:shadow-md
              [&::-webkit-slider-thumb]:cursor-grab
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-primary-500
              [&::-moz-range-thumb]:shadow-md
            "
          />
          <div className="flex justify-between text-[10px] text-steel-400">
            <span>{selectedMachine.typicalSpeed[0]} m/dk</span>
            <span>{selectedMachine.typicalSpeed[1]} m/dk</span>
          </div>
        </div>
      )}
    </div>
  );
}
