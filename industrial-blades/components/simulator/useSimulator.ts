// =============================================================================
// SimulatorApp — useReducer State Yönetimi
// =============================================================================
// Tüm simülatör state'ini merkezi reducer ile yönetir.
// SimulatorApp bileşeni bu hook'u kullanarak state ve dispatch sağlar.
// =============================================================================

'use client';

import { useReducer, useCallback, useMemo } from 'react';
import type { SimulatorTab, BladeType, BevelType, CoatingType, MachineType, CuttingMethod, CircularBladeParams } from '@/lib/simulator/types';
import type { SimulationInput, SimulationResult, AngleSweepPoint } from '@/lib/simulator/engine';
import {
  runSimulation,
  sweepAngle,
  createDefaultInput,
  CIRCULAR_DEFAULTS,
} from '@/lib/simulator/engine';

// ---------------------------------------------------------------------------
// STATE / ACTION / SNAPSHOT TİPLERİ
// ---------------------------------------------------------------------------

/** Anlık durum fotoğrafı — karşılaştırma için */
export interface SimulatorSnapshot {
  id: string;
  label: string;
  timestamp: number;
  input: SimulationInput;
  result: SimulationResult;
}

/** Simülatör ana durumu — React state */
export interface SimulatorState {
  // Giriş parametreleri
  materialId: string;
  bladeTypeId: BladeType;
  primaryAngle: number;
  secondaryAngle?: number;
  bevelType: BevelType;
  bladeThickness: number;
  edgeRadius: number;
  bladeMaterialId: string;
  coatingId: CoatingType;
  machineTypeId: MachineType;
  cuttingMethod: CuttingMethod;
  cuttingSpeed: number;
  materialThickness: number;
  rakeAngle: number;
  clearance: number;
  circularParams: CircularBladeParams;

  // Sonuçlar
  simulationResult: SimulationResult | null;

  // UI
  activeTab: SimulatorTab;
  isSimulating: boolean;
  showRecommendations: boolean;
  comparisonSnapshots: SimulatorSnapshot[];
  angleSweepData: AngleSweepPoint[];
}

/** Simülatör eylemleri — useReducer ile kullanım */
export type SimulatorAction =
  | { type: 'SET_MATERIAL'; payload: string }
  | { type: 'SET_BLADE_TYPE'; payload: BladeType }
  | { type: 'SET_PRIMARY_ANGLE'; payload: number }
  | { type: 'SET_SECONDARY_ANGLE'; payload: number }
  | { type: 'SET_BEVEL_TYPE'; payload: BevelType }
  | { type: 'SET_BLADE_THICKNESS'; payload: number }
  | { type: 'SET_EDGE_RADIUS'; payload: number }
  | { type: 'SET_BLADE_MATERIAL'; payload: string }
  | { type: 'SET_COATING'; payload: CoatingType }
  | { type: 'SET_MACHINE_TYPE'; payload: MachineType }
  | { type: 'SET_CUTTING_METHOD'; payload: CuttingMethod }
  | { type: 'SET_CUTTING_SPEED'; payload: number }
  | { type: 'SET_MATERIAL_THICKNESS'; payload: number }
  | { type: 'SET_RAKE_ANGLE'; payload: number }
  | { type: 'SET_CLEARANCE'; payload: number }
  | { type: 'SET_CIRCULAR_PARAMS'; payload: Partial<CircularBladeParams> }
  | { type: 'RUN_SIMULATION'; payload: SimulationResult }
  | { type: 'SET_TAB'; payload: SimulatorTab }
  | { type: 'TOGGLE_RECOMMENDATIONS' }
  | { type: 'ADD_SNAPSHOT'; payload: SimulatorSnapshot }
  | { type: 'REMOVE_SNAPSHOT'; payload: number }
  | { type: 'CLEAR_SNAPSHOTS' }
  | { type: 'SET_ANGLE_SWEEP'; payload: AngleSweepPoint[] }
  | { type: 'RESET' };

// ---------------------------------------------------------------------------
// INITIAL STATE
// ---------------------------------------------------------------------------

function buildInitialState(): SimulatorState {
  const defaultInput = createDefaultInput();
  const result = runSimulation(defaultInput);

  return {
    // Giriş parametreleri
    materialId: defaultInput.materialId,
    bladeTypeId: defaultInput.bladeTypeId,
    primaryAngle: defaultInput.primaryAngle,
    secondaryAngle: defaultInput.secondaryAngle,
    bevelType: defaultInput.bevelType,
    bladeThickness: defaultInput.bladeThickness,
    edgeRadius: defaultInput.edgeRadius,
    bladeMaterialId: defaultInput.bladeMaterialId,
    coatingId: defaultInput.coatingId,
    machineTypeId: defaultInput.machineTypeId,
    cuttingMethod: defaultInput.cuttingMethod,
    cuttingSpeed: defaultInput.cuttingSpeed,
    materialThickness: defaultInput.materialThickness,
    rakeAngle: defaultInput.rakeAngle,
    clearance: defaultInput.clearance,
    circularParams: defaultInput.circularParams ?? { ...CIRCULAR_DEFAULTS },

    // Sonuçlar
    simulationResult: result,

    // UI
    activeTab: 'forces',
    isSimulating: false,
    showRecommendations: true,
    comparisonSnapshots: [],
    angleSweepData: [],
  };
}

// ---------------------------------------------------------------------------
// REDUCER
// ---------------------------------------------------------------------------

function simulatorReducer(
  state: SimulatorState,
  action: SimulatorAction
): SimulatorState {
  switch (action.type) {
    case 'SET_MATERIAL':
      return { ...state, materialId: action.payload };

    case 'SET_BLADE_TYPE':
      return { ...state, bladeTypeId: action.payload };

    case 'SET_PRIMARY_ANGLE':
      return { ...state, primaryAngle: action.payload };

    case 'SET_SECONDARY_ANGLE':
      return { ...state, secondaryAngle: action.payload };

    case 'SET_BEVEL_TYPE':
      return { ...state, bevelType: action.payload };

    case 'SET_BLADE_THICKNESS':
      return { ...state, bladeThickness: action.payload };

    case 'SET_EDGE_RADIUS':
      return { ...state, edgeRadius: action.payload };

    case 'SET_BLADE_MATERIAL':
      return { ...state, bladeMaterialId: action.payload };

    case 'SET_COATING':
      return { ...state, coatingId: action.payload };

    case 'SET_MACHINE_TYPE':
      return { ...state, machineTypeId: action.payload };

    case 'SET_CUTTING_METHOD':
      return { ...state, cuttingMethod: action.payload };

    case 'SET_CUTTING_SPEED':
      return { ...state, cuttingSpeed: action.payload };

    case 'SET_MATERIAL_THICKNESS':
      return { ...state, materialThickness: action.payload };

    case 'SET_RAKE_ANGLE':
      return { ...state, rakeAngle: action.payload };

    case 'SET_CLEARANCE':
      return { ...state, clearance: action.payload };

    case 'SET_CIRCULAR_PARAMS':
      return {
        ...state,
        circularParams: { ...state.circularParams, ...action.payload },
      };

    case 'RUN_SIMULATION':
      return {
        ...state,
        simulationResult: action.payload,
        isSimulating: false,
      };

    case 'SET_TAB':
      return { ...state, activeTab: action.payload };

    case 'TOGGLE_RECOMMENDATIONS':
      return { ...state, showRecommendations: !state.showRecommendations };

    case 'ADD_SNAPSHOT': {
      const snapshots = [...state.comparisonSnapshots, action.payload];
      // Maksimum 4 karşılaştırma
      if (snapshots.length > 4) snapshots.shift();
      return { ...state, comparisonSnapshots: snapshots };
    }

    case 'REMOVE_SNAPSHOT':
      return {
        ...state,
        comparisonSnapshots: state.comparisonSnapshots.filter(
          (_, i) => i !== action.payload
        ),
      };

    case 'CLEAR_SNAPSHOTS':
      return { ...state, comparisonSnapshots: [] };

    case 'SET_ANGLE_SWEEP':
      return { ...state, angleSweepData: action.payload };

    case 'RESET':
      return buildInitialState();

    default:
      return state;
  }
}

// ---------------------------------------------------------------------------
// HOOK
// ---------------------------------------------------------------------------

export function useSimulator() {
  const [state, dispatch] = useReducer(simulatorReducer, undefined, buildInitialState);

  // Simülasyonu çalıştır (mevcut state'ten input üret)
  const simulate = useCallback(() => {
    const input: SimulationInput = {
      materialId: state.materialId,
      bladeTypeId: state.bladeTypeId,
      primaryAngle: state.primaryAngle,
      secondaryAngle: state.secondaryAngle,
      bevelType: state.bevelType,
      bladeThickness: state.bladeThickness,
      edgeRadius: state.edgeRadius,
      bladeMaterialId: state.bladeMaterialId,
      coatingId: state.coatingId,
      machineTypeId: state.machineTypeId,
      cuttingMethod: state.cuttingMethod,
      cuttingSpeed: state.cuttingSpeed,
      materialThickness: state.materialThickness,
      rakeAngle: state.rakeAngle,
      clearance: state.clearance,
      circularParams: state.circularParams,
    };

    const result = runSimulation(input);
    dispatch({ type: 'RUN_SIMULATION', payload: result });
    return result;
  }, [state]);

  // Açı sweep
  const runAngleSweep = useCallback(() => {
    const input: SimulationInput = {
      materialId: state.materialId,
      bladeTypeId: state.bladeTypeId,
      primaryAngle: state.primaryAngle,
      secondaryAngle: state.secondaryAngle,
      bevelType: state.bevelType,
      bladeThickness: state.bladeThickness,
      edgeRadius: state.edgeRadius,
      bladeMaterialId: state.bladeMaterialId,
      coatingId: state.coatingId,
      machineTypeId: state.machineTypeId,
      cuttingMethod: state.cuttingMethod,
      cuttingSpeed: state.cuttingSpeed,
      materialThickness: state.materialThickness,
      rakeAngle: state.rakeAngle,
      clearance: state.clearance,
      circularParams: state.circularParams,
    };
    const data = sweepAngle(input, 5, 60, 1);
    dispatch({ type: 'SET_ANGLE_SWEEP', payload: data });
    return data;
  }, [state]);

  // Snapshot ekle
  const addSnapshot = useCallback(
    (label: string) => {
      if (!state.simulationResult) return;
      dispatch({
        type: 'ADD_SNAPSHOT',
        payload: {
          id: `snap-${Date.now()}`,
          label,
          timestamp: Date.now(),
          input: {
            materialId: state.materialId,
            bladeTypeId: state.bladeTypeId,
            primaryAngle: state.primaryAngle,
            secondaryAngle: state.secondaryAngle,
            bevelType: state.bevelType,
            bladeThickness: state.bladeThickness,
            edgeRadius: state.edgeRadius,
            bladeMaterialId: state.bladeMaterialId,
            coatingId: state.coatingId,
            machineTypeId: state.machineTypeId,
            cuttingMethod: state.cuttingMethod,
            cuttingSpeed: state.cuttingSpeed,
            materialThickness: state.materialThickness,
            rakeAngle: state.rakeAngle,
            clearance: state.clearance,
            circularParams: state.circularParams,
          },
          result: state.simulationResult,
        },
      });
    },
    [state]
  );

  return {
    state,
    dispatch,
    simulate,
    runAngleSweep,
    addSnapshot,
  };
}
