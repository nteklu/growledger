/**
 * Screen 8 · Alert detail — Explain flag (FR-11–12)
 * Required content: current value, baseline, percent change, the
 * threshold rule (including production-method scope), confidence, and
 * notes surfaced as possible factors to review — never stated as causal.
 */
export default function AlertDetailPage({
  params,
}: {
  params: { flagId: string };
}) {
  return (
    <main>
      <h1>Alert detail</h1>
      {/* TODO: current / baseline / change summary */}
      {/* TODO: rule text + confidence chip */}
      {/* TODO: possible factors to review (from operational_notes) */}
    </main>
  );
}
