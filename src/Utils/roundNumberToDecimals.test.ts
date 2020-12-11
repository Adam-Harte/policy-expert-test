import { roundNumberToDecimals } from "./roundNumberToDecimals"

it('returns a float to 2 decimal places', () => {
  expect(roundNumberToDecimals(5.17491, 2)).toBe(5.17);
});

it('return a float to 3 decimal places', () => {
  expect(roundNumberToDecimals(7.327691, 3)).toBe(7.328);
});