import { describe, it } from "vitest";

describe("baselineAndConfidence", () => {
  it.todo(
    "averages cost only across comparable cycle_crops that actually priced",
  );
  it.todo(
    "drops a comparable cycle_crop with unavailable cost from the average, rather than blending it in or blanking the whole baseline",
  );
  it.todo(
    'returns confidence "full" when 3 or more comparables priced',
  );
  it.todo('returns confidence "low" when exactly 2 comparables priced');
  it.todo(
    'returns confidence "insufficient" when fewer than 2 comparables priced',
  );
  it.todo(
    'when every comparable cycle_crop is unavailable, returns baseline "unavailable" and confidence "insufficient" — the same as having no history at all',
  );
});
