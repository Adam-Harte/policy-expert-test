import { calculateLiquidBasedTotal } from "./calculateLiquidBasedTotal"

it('returns the cost per litre * the number of litres', () => {
  expect(calculateLiquidBasedTotal(2, 2)).toBe(4);
});