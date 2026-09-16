/**
 * Screen 6 · Cycle form — Record data (FR-05–08), edit mode.
 * Same required content as the create form (app/cycles/new); see FR-05
 * (create, edit, complete, cancel cycles).
 */
export default function EditCyclePage({
  params,
}: {
  params: { cycleId: string };
}) {
  return (
    <main>
      <h1>Edit cycle</h1>
      {/* TODO: reuse the cycle form used by app/cycles/new */}
    </main>
  );
}
