/**
 * Screen 6 · Cycle form — Record data (FR-05–08)
 * Shared by every crop in the cycle: grow_space, start_date, end_date.
 * production_method is copied from the selected grow space at save,
 * not entered here. Repeatable per crop (1..n): crop_profile, cost_items
 * (category, amount, direct/estimated, incurred_on), harvested_amount,
 * saleable_amount, unit. operational_notes are repeatable and shared
 * across every crop in the cycle.
 */
export default function NewCyclePage() {
  return (
    <main>
      <h1>New cycle</h1>
      {/* TODO: grow_space, start_date, end_date */}
      {/* TODO: repeatable crop block — crop_profile, cost_items, yield */}
      {/* TODO: + Add another crop */}
      {/* TODO: repeatable operational_notes — shared across crops */}
    </main>
  );
}
