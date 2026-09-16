/**
 * FR-09: sum of valid cost items assigned to one crop within one cycle.
 * A cost shared by more than one crop in the same cycle is entered once
 * per affected crop with allocation_type = "estimated"; direct and
 * estimated costs are summed together, never blended silently.
 */
import type { CycleCropWithRelations } from "./types";

export function totalCycleOperatingCost(
  cycleCrop: CycleCropWithRelations,
): number {
  throw new Error("Not implemented");
}
