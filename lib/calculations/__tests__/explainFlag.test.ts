import { describe, it } from "vitest";

describe("explainFlag", () => {
  it.todo(
    "includes metric, current, baseline, change, rule, and confidence carried over from the flag (FR-12)",
  );
  it.todo(
    "includes only operational_notes within the cycle_crop's cycle start_date/end_date range as possibleFactors",
  );
  it.todo(
    'never uses causal language ("caused by") — reads as "possible factor to review"',
  );
});
