/**
 * FR-10: the up-to-3 most recent completed cycle_crops comparable to
 * cycleCrop — same grower, crop profile, and production method (captured
 * on the parent cycle at creation), with a compatible unit, excluding
 * cycleCrop itself. This filter can only shrink comparison pools: a
 * grower running both hydroponic and soil basil gets two thinner,
 * separately-tracked histories instead of one blended one.
 *
 * Pure by design (PRD Section 7): candidates are passed in rather than
 * queried here, so this stays independent of any data-fetching layer.
 */
import type { CycleCropWithRelations } from "./types";

export function getComparableCycleCrops(
  cycleCrop: CycleCropWithRelations,
  candidates: CycleCropWithRelations[],
): CycleCropWithRelations[] {
  throw new Error("Not implemented");
}
