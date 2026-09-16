/**
 * FR-11: flag cost at least 15% above baseline, or yield at least 15%
 * below baseline. Apply documented thresholds with cautious language —
 * see explainFlag for how a flag is rendered.
 */
import type { CycleCropWithRelations, Baseline, Flag } from "./types";

export function evaluateFlags(
  cycleCrop: CycleCropWithRelations,
  baseline: Baseline,
): Flag[] {
  throw new Error("Not implemented");
}
