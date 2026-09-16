/**
 * FR-09: totalCycleOperatingCost / saleable yield.
 * Returns "unavailable" when saleable_amount is zero or missing —
 * never 0, never Infinity (PRD Section 5).
 */
import type { CycleCropWithRelations } from "./types";

export function costPerSaleableUnit(
  cycleCrop: CycleCropWithRelations,
): number | "unavailable" {
  throw new Error("Not implemented");
}
