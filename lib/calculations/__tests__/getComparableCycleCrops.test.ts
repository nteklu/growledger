import { describe, it } from "vitest";

describe("getComparableCycleCrops", () => {
  it.todo("only includes cycle_crops from completed cycles (FR-10)");
  it.todo("only includes cycle_crops with the same grower_id");
  it.todo("only includes cycle_crops with the same crop_profile_id");
  it.todo(
    "only includes cycle_crops whose parent cycle has the same production_method",
  );
  it.todo("only includes cycle_crops with a compatible unit");
  it.todo("excludes the cycle_crop itself from its own comparison pool");
  it.todo("orders results by cycle end_date descending");
  it.todo("limits results to at most 3 comparable cycle_crops");
});
