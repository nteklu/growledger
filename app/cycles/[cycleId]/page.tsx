/**
 * Screen 7 · Cycle detail — Audit result (FR-12)
 * Viewing one crop (cycle_crop) at a time, selectable when the cycle has
 * more than one. Required content: cost breakdown by category, the
 * cost-per-saleable-unit formula shown (not just the result), notes
 * timeline (shared across crops in the cycle), and a comparison panel
 * against the crop-specific, production-method-scoped baseline.
 */
export default function CycleDetailPage({
  params,
}: {
  params: { cycleId: string };
}) {
  return (
    <main>
      <h1>Cycle detail</h1>
      {/* TODO: crop selector — 1 of n crops in this cycle */}
      {/* TODO: cost breakdown by category (energy, labor, nutrients, other) */}
      {/* TODO: cost-per-saleable-unit formula display */}
      {/* TODO: notes timeline */}
      {/* TODO: comparison panel vs. baseline (same crop + production method) */}
    </main>
  );
}
