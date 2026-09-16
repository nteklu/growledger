import { describe, it } from "vitest";

describe("costPerSaleableUnit", () => {
  it.todo(
    "returns totalCycleOperatingCost divided by saleable_amount (FR-09)",
  );
  it.todo('returns "unavailable" when saleable_amount is zero');
  it.todo(
    'returns "unavailable" when saleable_amount is null/missing — never 0, never Infinity',
  );
  it.todo(
    "PRD Section 12 acceptance example: $500 total cost and 100 lb saleable yield returns $5.00/lb",
  );
});
