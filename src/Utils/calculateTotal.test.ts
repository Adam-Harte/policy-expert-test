import { calculateTotal } from "./calculateTotal"

it('returns the sum of the sub total - total savings', () => {
  expect(calculateTotal(200, 21.65)).toBe(178.35);
});
