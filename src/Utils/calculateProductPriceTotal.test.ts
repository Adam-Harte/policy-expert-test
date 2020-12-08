import { calculateProductPriceTotal } from "./calculateProductPriceTotal"

it('returns the cost per litre * the number of litres', () => {
  expect(calculateProductPriceTotal(2, 2)).toBe(4);
});