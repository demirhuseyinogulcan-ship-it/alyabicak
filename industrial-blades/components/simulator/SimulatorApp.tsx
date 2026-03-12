// =============================================================================
// SimulatorApp — Ana Simülatör Bileşeni
// =============================================================================
// Desktop (lg+): Sol = Kontroller (scroll), Sağ = TÜM sonuçlar (sticky + iç scroll)
// Mobil: Tam ekran sonuçlar + bottom sheet ile kontrol paneli (Desmos/Google Maps pattern)
// =============================================================================

'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findMaterial } from '@/lib/simulator/engine';
import { isCircularBladeType } from '@/lib/simulator/types';
import { useSimulator } from './useSimulator';
import { useLandscapeLock } from './useLandscapeLock';

import ControlPanel from './controls/ControlPanel';
import BladeCrossSection from './visualization/BladeCrossSection';
import CircularBladeCrossSection from './visualization/CircularBladeCrossSection';
import ForceVectorDiagram from './visualization/ForceVectorDiagram';
import MetricsPanel from './metrics/MetricsPanel';
import AngleSweepChart from './charts/AngleSweepChart';

import {
  ChevronRight,
  SlidersHorizontal,
  X,
  Smartphone,
} from 'lucide-react';

// Compact number formatting
function fmt(n: number): string {
  if (Math.abs(n) >= 1e6) return n.toExponential(1);
  if (Math.abs(n) >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (Math.abs(n) >= 100) return n.toFixed(0);
  if (Math.abs(n) >= 1) return n.toFixed(1);
  return n.toFixed(3);
}

export default function SimulatorApp() {
  const { state, dispatch, simulate, runAngleSweep, addSnapshot } = useSimulator();
  const [mobileControlsOpen, setMobileControlsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const { isLocked, isPortrait, lock, unlock } = useLandscapeLock();

  // Mobil kontrol panelini landscape modunda aç
  const openMobileControls = useCallback(async () => {
    await lock();
    setMobileControlsOpen(true);
  }, [lock]);

  const closeMobileControls = useCallback(async () => {
    setMobileControlsOpen(false);
    // Küçük gecikme — kapanış animasyonu bitmeden unlock yapmayalım
    setTimeout(() => { unlock(); }, 300);
  }, [unlock]);

  useEffect(() => {
    runAngleSweep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    simulate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.materialId,
    state.bladeTypeId,
    state.primaryAngle,
    state.secondaryAngle,
    state.bevelType,
    state.bladeThickness,
    state.edgeRadius,
    state.bladeMaterialId,
    state.coatingId,
    state.machineTypeId,
    state.cuttingMethod,
    state.cuttingSpeed,
    state.materialThickness,
    state.rakeAngle,
    state.clearance,
    state.circularParams,
  ]);

  // Sayfa açıldığında mobilde otomatik landscape — sayfa kapanınca unlock
  useEffect(() => {
    lock();
    return () => { unlock(); };
  }, [lock, unlock]);

  // Body scroll lock for mobile bottom sheet
  useEffect(() => {
    if (mobileControlsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileControlsOpen]);

  const handleSimulate = useCallback(() => {
    const result = simulate();
    runAngleSweep();
    return result;
  }, [simulate, runAngleSweep]);

  const selectedMaterial = useMemo(
    () => findMaterial(state.materialId),
    [state.materialId]
  );

  const result = state.simulationResult;

  const bladeProps = useMemo(() => {
    if (!result) return null;
    return {
      geometry: {
        primaryAngle: state.primaryAngle,
        secondaryAngle: state.secondaryAngle ?? null,
        bevelType: state.bevelType,
        bladeThickness: state.bladeThickness,
        edgeRadius: state.edgeRadius,
        rakeAngle: state.rakeAngle,
        hollowRadius: null,
        bladeHeight: 19,
        profile: 'straight' as const,
      },
      bevelResult: result.bevelGeometry,
      pathPoints: result.bladePathPoints,
      sharpnessIndex: result.sharpnessIndex,
      durabilityIndex: result.durabilityIndex,
      includedAngle: result.includedAngle,
    };
  }, [
    result,
    state.primaryAngle,
    state.secondaryAngle,
    state.bevelType,
    state.bladeThickness,
    state.edgeRadius,
  ]);

  // Dairesel mı lineer mi?
  const isCircular = isCircularBladeType(state.bladeTypeId);

  // ───────────────── ALL RESULTS CONTENT ─────────────────
  const resultsContent = result && bladeProps && (
    <div className="space-y-5">
      {/* 1. Bıçak Kesit Görünümü — Strategy: dairesel vs lineer */}
      {isCircular && result.circularPathPoints ? (
        <CircularBladeCrossSection
          geometry={bladeProps.geometry}
          circularParams={state.circularParams}
          circularPathPoints={result.circularPathPoints}
          sharpnessIndex={result.sharpnessIndex}
          durabilityIndex={result.durabilityIndex}
          includedAngle={result.includedAngle}
        />
      ) : (
        <BladeCrossSection {...bladeProps} />
      )}

      {/* 2. Hızlı İstatistikler */}
      <div className="grid grid-cols-2 gap-2">
        <QuickStat
          label="Keskinlik"
          value={result.sharpnessIndex.toFixed(0)}
          unit="/100"
          trend={result.sharpnessIndex >= 70 ? 'up' : 'down'}
        />
        <QuickStat
          label="Dayanıklılık"
          value={result.durabilityIndex.toFixed(0)}
          unit="/100"
          trend={result.durabilityIndex >= 50 ? 'up' : 'down'}
        />
        <QuickStat
          label="Dahil Açı"
          value={result.includedAngle.toFixed(1)}
          unit="°"
        />
        <QuickStat
          label="Toplam Kuvvet"
          value={fmt(result.force.totalForce)}
          unit="N"
        />
      </div>

      {/* 3. Kuvvet Vektör Diyagramı */}
      <ForceVectorDiagram force={result.force} />

      {/* 4. Performans Metrikleri */}
      <MetricsPanel
        metrics={result.metrics}
        force={result.force}
        wear={result.wear}
        recommendations={result.recommendations}
        materialCompatibility={result.materialCompatibilityScore}
        showRecommendations={state.showRecommendations}
      />

      {/* 5. Açı Analizi */}
      <AngleSweepChart
        data={state.angleSweepData}
        currentAngle={state.primaryAngle}
        recommendedRange={selectedMaterial?.recommendedAngleRange}
      />

      {/* 6. Karşılaştırma */}
      {state.comparisonSnapshots.length > 0 && (
        <div className="bg-white rounded-xl border border-steel-100 p-4">
          <h3 className="text-xs font-semibold text-steel-600 mb-3">
            Karşılaştırma ({state.comparisonSnapshots.length})
          </h3>
          <div className="-mx-4 px-4 overflow-x-auto">
            <table className="w-full text-xs min-w-[400px]">
              <thead>
                <tr className="border-b border-steel-100">
                  <th className="text-left py-2 px-2 text-steel-500 font-medium">Kayıt</th>
                  <th className="text-right py-2 px-2 text-steel-500 font-medium">Açı</th>
                  <th className="text-right py-2 px-2 text-steel-500 font-medium">Keskinlik</th>
                  <th className="text-right py-2 px-2 text-steel-500 font-medium">Kuvvet</th>
                  <th className="text-right py-2 px-2 text-steel-500 font-medium">Skor</th>
                  <th className="py-2 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {state.comparisonSnapshots.map((snap, i) => (
                  <tr key={snap.id} className="border-b border-steel-50 hover:bg-steel-50">
                    <td className="py-2 px-2 font-medium text-steel-700">{snap.label}</td>
                    <td className="py-2 px-2 text-right">{snap.input.primaryAngle}°</td>
                    <td className="py-2 px-2 text-right">{snap.result.sharpnessIndex.toFixed(0)}</td>
                    <td className="py-2 px-2 text-right">{fmt(snap.result.force.totalForce)}</td>
                    <td className="py-2 px-2 text-right font-semibold text-primary-600">
                      {snap.result.metrics.overallScore.toFixed(0)}
                    </td>
                    <td className="py-2 px-2">
                      <button
                        type="button"
                        onClick={() => dispatch({ type: 'REMOVE_SNAPSHOT', payload: i })}
                        className="text-steel-400 hover:text-red-500 cursor-pointer"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={() => dispatch({ type: 'CLEAR_SNAPSHOTS' })}
            className="mt-2 text-xs text-steel-400 hover:text-red-500 cursor-pointer"
          >
            Tümünü temizle
          </button>
        </div>
      )}

      {/* 7. Malzeme Uyum Skoru */}
      <div className="bg-white rounded-xl border border-steel-100 p-4">
        <h3 className="text-xs font-semibold text-steel-600 mb-2">
          Malzeme-Bıçak Uyum Skoru
        </h3>
        <div className="flex items-center gap-4">
          <div
            className="text-xl font-semibold"
            style={{
              color:
                result.materialCompatibilityScore >= 80
                  ? '#0369a1'
                  : result.materialCompatibilityScore >= 60
                    ? '#ca8a04'
                    : '#dc2626',
            }}
          >
            {result.materialCompatibilityScore}
          </div>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-steel-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${result.materialCompatibilityScore}%`,
                  backgroundColor:
                    result.materialCompatibilityScore >= 80
                      ? '#0369a1'
                      : result.materialCompatibilityScore >= 60
                        ? '#ca8a04'
                        : '#dc2626',
                }}
              />
            </div>
            <p className="text-[10px] text-steel-400 mt-1">
              {result.materialCompatibilityScore >= 80
                ? 'Mükemmel uyum — bu kombinasyon endüstri standardı.'
                : result.materialCompatibilityScore >= 60
                  ? 'Kabul edilebilir uyum — iyileştirme potansiyeli var.'
                  : 'Düşük uyum — alternatif bıçak malzemesi düşünün.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-steel-50 overflow-x-hidden">
      {/* ═══ BAŞLIK BANDI ═══ */}
      <div className="bg-gradient-to-r from-steel-900 to-steel-800 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">
            Kesim Mühendisliği Simülatörü
          </h1>
          <div className="flex items-center gap-1 text-xs text-steel-400 mt-1">
            <span>Ana Sayfa</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-400 font-medium">Simülatör</span>
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP LAYOUT (lg+) ═══ */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-6 py-6">
          <div className="flex gap-5 items-start">
            {/* SOL: Kontroller — accordion sidebar */}
            <div className="w-[320px] shrink-0">
              <div className="bg-white rounded-xl border border-steel-200 shadow-sm p-4">
                <ControlPanel
                  state={state}
                  dispatch={dispatch}
                  onSimulate={handleSimulate}
                  onSnapshot={addSnapshot}
                />
              </div>
            </div>

            {/* SAĞ: TÜM Sonuçlar — sticky, kendi içinde scroll */}
            <div className="flex-1 min-w-0">
              <div
                className="sticky top-4 overflow-y-auto rounded-xl scrollbar-thin"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
              >
                <div className="pr-1">
                  {resultsContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MOBİL LAYOUT (< lg) ═══ */}
      <div className="lg:hidden">
        {/* Üst Toolbar — Ayarlar tetikleyici */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-steel-100 px-4 py-2.5 flex items-center justify-between">
          <button
            type="button"
            onClick={openMobileControls}
            className="
              flex items-center gap-1.5 px-3 py-2
              bg-primary-600 hover:bg-primary-700 text-white
              rounded-lg shadow-sm text-xs font-semibold
              transition-all duration-150 active:scale-[0.97]
              cursor-pointer
            "
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Ayarlar
            {isPortrait && (
              <Smartphone className="w-3 h-3 rotate-90 opacity-60" />
            )}
          </button>
          <span className="text-[11px] text-steel-400 font-medium">Kesim Simülatörü</span>
        </div>

        {/* Sonuçlar — tam ekran scrollable */}
        <div className="px-4 py-4 pb-8">
          {resultsContent}
        </div>

        {/* ═══ TAM EKRAN LANDSCAPE KONTROLLER ═══ */}
        <AnimatePresence>
          {mobileControlsOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/50"
                onClick={closeMobileControls}
              />

              {/* Fullscreen Kontrol Paneli */}
              <motion.div
                ref={sheetRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="
                  fixed inset-0 z-50
                  bg-steel-50 flex flex-col
                "
              >
                {/* Header */}
                <div className="shrink-0 bg-white border-b border-steel-200 px-4 py-3 flex items-center justify-between safe-area-top">
                  <div>
                    <h2 className="text-sm font-bold text-steel-800">
                      Simülatör Ayarları
                    </h2>
                    <p className="text-[10px] text-steel-400 mt-0.5">
                      {isLocked ? 'Yatay mod aktif' : 'Tam ekran kontrol paneli'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeMobileControls}
                    className="
                      flex items-center gap-1 px-3 py-2
                      bg-steel-100 hover:bg-steel-200
                      rounded-lg text-steel-600 text-xs font-semibold
                      transition-all cursor-pointer
                    "
                  >
                    <X className="w-4 h-4" />
                    Kapat
                  </button>
                </div>

                {/* İki kolonlu layout — landscape'da yan yana */}
                <div className="flex-1 overflow-hidden flex flex-col landscape:flex-row">
                  {/* Sol: Kontroller (scrollable) */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-3 landscape:border-r landscape:border-steel-200">
                    <ControlPanel
                      state={state}
                      dispatch={dispatch}
                      onSimulate={handleSimulate}
                      onSnapshot={addSnapshot}
                    />
                  </div>

                  {/* Sağ: TÜM sonuçlar — sadece landscape'da */}
                  <div className="hidden landscape:flex landscape:w-[45%] landscape:flex-col landscape:min-h-0 landscape:overflow-y-auto landscape:overscroll-contain landscape:p-3">
                    {resultsContent}
                  </div>
                </div>

                {/* Safe area */}
                <div className="shrink-0 h-[env(safe-area-inset-bottom,0px)]" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div className="bg-steel-100 border-t border-steel-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-steel-400">
            Bu simülatör akademik veriler ve endüstri standartlarına dayalı tahminler sunar.
          </p>
          <p className="text-xs font-semibold text-primary-500">
            Alya Bıçak — Kesim Mühendisliği
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// QuickStat
// ---------------------------------------------------------------------------

function QuickStat({
  label,
  value,
  unit,
  trend,
}: {
  label: string;
  value: string;
  unit: string;
  trend?: 'up' | 'down';
}) {
  return (
    <div className="bg-white rounded-lg border border-steel-100 p-2.5 text-center">
      <div className="text-[10px] font-medium text-steel-400 mb-0.5">{label}</div>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-sm font-semibold text-steel-700">{value}</span>
        <span className="text-[10px] text-steel-400">{unit}</span>
      </div>
      {trend && (
        <div
          className={`text-[9px] font-semibold mt-0.5 ${
            trend === 'up' ? 'text-emerald-600' : 'text-red-600'
          }`}
        >
          {trend === 'up' ? '▲ İyi' : '▼ Düşük'}
        </div>
      )}
    </div>
  );
}
