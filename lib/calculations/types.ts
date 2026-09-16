/**
 * Domain types for the calculation module (Formulas & Functions tab).
 * Composed from types/database.ts. Kept independent of any data-fetching
 * layer so every function here stays a pure, unit-testable function of
 * its inputs (PRD Section 7).
 */
import type {
  Cycle,
  CycleCrop,
  CostItem,
  YieldRecord,
} from "@/types/database";

/** A cycle_crop joined with the data every formula needs. */
export interface CycleCropWithRelations extends CycleCrop {
  cycle: Cycle;
  costItems: CostItem[];
  yield: YieldRecord | null;
}

export type ConfidenceLevel = "full" | "low" | "insufficient";

export interface Baseline {
  cost: number | "unavailable";
  yield: number | "unavailable";
  confidence: ConfidenceLevel;
  /** Number of comparable cycle_crops with an available cost. */
  sampleSize: number;
}

export type FlagMetric = "cost_high" | "yield_low";

export interface Flag {
  metric: FlagMetric;
  current: number;
  baseline: number;
  pctChange: number;
  thresholdText: string;
  confidence: ConfidenceLevel;
}

export interface FlagExplanation {
  metric: FlagMetric;
  current: number;
  baseline: number;
  change: number;
  rule: string;
  confidence: ConfidenceLevel;
  possibleFactors: string[];
}
