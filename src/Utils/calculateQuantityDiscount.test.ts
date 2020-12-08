import { calculateQuantityDiscount } from "./calculateQuantityDiscount"

it('returns the discount when the items quantity meets the discountQuantity needs', () => {
  expect(calculateQuantityDiscount(1, 4, 2)).toBe(2);
});

it('returns 0 when the discountQuantity needs it not met', () => {
  expect(calculateQuantityDiscount(2, 4, 6)).toBe(0);
});
