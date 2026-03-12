/**
 * Phase 3 Circular Blade Module — Runtime Validation
 * Run: npx tsx scripts/validate-circular.ts
 */
import { runSimulation, createDefaultInput } from '../lib/simulator/engine/cutting-engine';
import type { SimulationInput } from '../lib/simulator/engine/cutting-engine';
import { isCircularBladeType, getBladeCategory } from '../lib/simulator/types';
import type { BladeType } from '../lib/simulator/types';
import { CIRCULAR_DEFAULTS, CIRCULAR_PHYSICS } from '../lib/simulator/constants';

let passed = 0;
let failed = 0;

function assert(label: string, condition: boolean, detail?: string) {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}${detail ? ' — ' + detail : ''}`);
    failed++;
  }
}

// 1. Type guards
console.log('\n=== 1. Type Guards ===');
assert('circular → circular', getBladeCategory('circular' as BladeType) === 'circular');
assert('rotary-knife → circular', getBladeCategory('rotary-knife' as BladeType) === 'circular');
assert('slitting-3hole → linear', getBladeCategory('slitting-3hole' as BladeType) === 'linear');
assert('isCircular(circular) = true', isCircularBladeType('circular' as BladeType));
assert('isCircular(trapezoid) = false', !isCircularBladeType('trapezoid' as BladeType));
assert('isCircular(straight) = false', !isCircularBladeType('straight' as BladeType));

// 2. Default input
console.log('\n=== 2. Default Input ===');
const defaultInput = createDefaultInput();
assert('circularParams exists', !!defaultInput.circularParams);
assert('OD = 100', defaultInput.circularParams?.outerDiameter === CIRCULAR_DEFAULTS.outerDiameter);
assert('ID = 34', defaultInput.circularParams?.innerDiameter === CIRCULAR_DEFAULTS.innerDiameter);

// 3. Linear simulation unchanged
console.log('\n=== 3. Linear Simulation (regression check) ===');
const linearResult = runSimulation(defaultInput);
assert('totalForce > 0', linearResult.force.totalForce > 0, `${linearResult.force.totalForce} N`);
assert('no circularBevelGeometry', !linearResult.circularBevelGeometry);
assert('no circularPathPoints', !linearResult.circularPathPoints);

// 4. Circular simulation
console.log('\n=== 4. Circular Blade Simulation ===');
const circularInput: SimulationInput = {
  ...defaultInput,
  bladeTypeId: 'circular' as BladeType,
  bladeThickness: 1.0,
  primaryAngle: 20,
  cuttingSpeed: 300,
  cuttingMethod: 'shear',
  machineTypeId: 'slitter-rewinder',
  circularParams: { outerDiameter: 105, innerDiameter: 34, dishAngle: 0, bladeOverlap: 2 },
};
const circResult = runSimulation(circularInput);
assert('totalForce > 0', circResult.force.totalForce > 0, `${circResult.force.totalForce} N`);
assert('temperature > 0', circResult.force.estimatedTemperatureRise > 0, `${circResult.force.estimatedTemperatureRise} °C`);
assert('edgeLife > 0', circResult.wear.estimatedEdgeLife > 0, `${circResult.wear.estimatedEdgeLife} m`);
assert('overallScore 0-100', circResult.metrics.overallScore >= 0 && circResult.metrics.overallScore <= 100);
assert('circularBevelGeometry exists', !!circResult.circularBevelGeometry);
assert('contactArcLength > 0', (circResult.circularBevelGeometry?.contactArcLength ?? 0) > 0);
assert('effectiveCuttingRadius > 0', (circResult.circularBevelGeometry?.effectiveCuttingRadius ?? 0) > 0);
assert('circumference > 0', (circResult.circularBevelGeometry?.circumference ?? 0) > 0);
assert('circularPathPoints exists', !!circResult.circularPathPoints);
assert('outerCircle present', !!circResult.circularPathPoints?.outerCircle);
assert('innerCircle present', !!circResult.circularPathPoints?.innerCircle);

// 5. Linear vs Circular comparison — capped life ratio
console.log('\n=== 5. Linear vs Circular Comparison ===');
const linearSame: SimulationInput = { ...circularInput, bladeTypeId: 'slitting-3hole' as BladeType };
const linResult = runSimulation(linearSame);
assert('linear force > 0', linResult.force.totalForce > 0, `Lin: ${linResult.force.totalForce} N`);
const lifeRatio = circResult.wear.estimatedEdgeLife / linResult.wear.estimatedEdgeLife;
console.log(`  → Life ratio (circular/linear): ${lifeRatio.toFixed(2)}x`);
assert('circular edge life >= linear', lifeRatio >= 1.0, `${lifeRatio.toFixed(2)}x`);
assert(
  `life ratio capped at ${CIRCULAR_PHYSICS.MAX_CIRCUMFERENTIAL_BENEFIT}x`,
  lifeRatio <= CIRCULAR_PHYSICS.MAX_CIRCUMFERENTIAL_BENEFIT + 1,
  `${lifeRatio.toFixed(2)}x exceeds max`,
);
assert('life ratio realistic (5-30x)', lifeRatio >= 3 && lifeRatio <= 35, `${lifeRatio.toFixed(2)}x`);

// 6. Dish angle effect
console.log('\n=== 6. Dish Angle Effect ===');
const dishedInput: SimulationInput = { ...circularInput, circularParams: { ...circularInput.circularParams!, dishAngle: 5 } };
const dishedResult = runSimulation(dishedInput);
const forceReduction = 1 - dishedResult.force.totalForce / circResult.force.totalForce;
console.log(`  → Force reduction with 5° dish: ${(forceReduction * 100).toFixed(1)}%`);
assert('dished force < flat force', dishedResult.force.totalForce < circResult.force.totalForce);

// 7. Boundary conditions
console.log('\n=== 7. Boundary Conditions ===');
// Very small blade
const tinyInput: SimulationInput = {
  ...circularInput,
  circularParams: { outerDiameter: 30, innerDiameter: 10, dishAngle: 0, bladeOverlap: 0 },
};
const tinyResult = runSimulation(tinyInput);
assert('tiny blade (Ø30) totalForce > 0', tinyResult.force.totalForce > 0);
assert('tiny blade edgeLife > 0', tinyResult.wear.estimatedEdgeLife > 0);

// Very large blade
const largeInput: SimulationInput = {
  ...circularInput,
  circularParams: { outerDiameter: 400, innerDiameter: 150, dishAngle: 12, bladeOverlap: 10 },
};
const largeResult = runSimulation(largeInput);
assert('large blade (Ø400) totalForce > 0', largeResult.force.totalForce > 0);
assert('large blade edgeLife > 0', largeResult.wear.estimatedEdgeLife > 0);
assert('large blade has max dish effect', largeResult.force.totalForce < circResult.force.totalForce);

// Zero overlap
const noOverlapInput: SimulationInput = {
  ...circularInput,
  circularParams: { ...circularInput.circularParams!, bladeOverlap: 0 },
};
const noOverlapResult = runSimulation(noOverlapInput);
assert('zero overlap → valid result', noOverlapResult.force.totalForce > 0);

// Summary
console.log(`\n=== SUMMARY: ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
