import { calculateTotalSavings } from "./calculateTotalSavings";

it('returns the sum of all the passed items calculated discounts', () => {
  expect(calculateTotalSavings([
    {
      id: 0,
      name: 'foo',
      img: 'foo.png',
      isLiquidBased: false,
      litres: 0,
      quantity: 2,
      price: 2.50,
      discountAmount: 1,
      discountQuantity: 2,
    },
    {
      id: 1,
      name: 'bar',
      img: 'bar.png',
      isLiquidBased: false,
      litres: 0,
      quantity: 7,
      price: 0.65,
      discountAmount: 0.65,
      discountQuantity: 6,
    }
  ])).toBe(1.65);
});

it('returns 0 when items is empty', () => {
  expect(calculateTotalSavings([])).toBe(0);
});
