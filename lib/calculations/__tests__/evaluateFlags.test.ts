import { describe, it } from "vitest";

describe("evaluateFlags", () => {
  it.todo(
    "raises a cost_high flag when cost is at least 15% above baseline (FR-11)",
  );
  it.todo(
    "raises a yield_low flag when yield is at least 15% below baseline (FR-11)",
  );
  it.todo(
    "can raise cost_high and yield_low independently of each other in the same evaluation",
  );
  it.todo("raises no flags when neither threshold is crossed");
});
