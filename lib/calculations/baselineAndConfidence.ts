/**
 * Confidence-scaling (PRD Section 5): average cost and yield across the
 * comparable cycle_crops that actually priced, dropping any with an
 * unavailable cost from the average rather than blending it in or
 * blanking the whole baseline.
 *
 * confidence = "full" if 3+ priced comparables, "low" if 2, otherwise
 * "insufficient" (this includes the all-unavailable case, where baseline
 * itself is "unavailable").
 */
import type { CycleCropWithRelations, Baseline } from "./types";

export function baselineAndConfidence(
  cycleCrop: CycleCropWithRelations,
  comparable: CycleCropWithRelations[],
): Baseline {
  throw new Error("Not implemented");
}
