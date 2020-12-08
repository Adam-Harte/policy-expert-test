import { calculateSubTotal } from "./calculateSubTotal"

it('returns the sum of all the passed items price * quantity', () => {
  expect(calculateSubTotal([
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
      quantity: 4,
      price: 0.65,
      discountAmount: 0.65,
      discountQuantity: 6,
    }
  ])).toBe(7.60);
});

it('returns the sum of all the passed items litres * price', () => {
  expect(calculateSubTotal([
    {
      id: 3,
      name: 'baz',
      img: 'baz.png',
      isLiquidBased: true,
      litres: 0.50,
      quantity: 0,
      price: 15.00,
      discountAmount: 2,
      discountQuantity: 5,
    },
  ])).toBe(7.50);
});

it('returns the sum of all the passed items litres or quantity * price', () => {
  expect(calculateSubTotal([
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
      quantity: 4,
      price: 0.65,
      discountAmount: 0.65,
      discountQuantity: 6,
    },
    {
      id: 3,
      name: 'baz',
      img: 'baz.png',
      isLiquidBased: true,
      litres: 0.50,
      quantity: 0,
      price: 15.00,
      discountAmount: 2,
      discountQuantity: 5,
    },
  ])).toBe(15.10);
});

it('returns 0 when items is empty', () => {
  expect(calculateSubTotal([])).toBe(0);
});
