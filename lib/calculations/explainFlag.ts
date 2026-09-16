/**
 * FR-12: generate a human-readable explanation from a structured flag
 * result. possibleFactors are operational_notes within the cycle_crop's
 * cycle date range, surfaced as factors to review — rendered as
 * "possible factor to review," never "caused by."
 */
import type { CycleCropWithRelations, Flag, FlagExplanation } from "./types";
import type { OperationalNote } from "@/types/database";

export function explainFlag(
  flag: Flag,
  cycleCrop: CycleCropWithRelations,
  notes: OperationalNote[],
): FlagExplanation {
  throw new Error("Not implemented");
}
