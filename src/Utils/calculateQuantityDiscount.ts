import { roundNumberToDecimals } from "./roundNumberToDecimals";

export const calculateQuantityDiscount = (discountAmount: number, quantity: number, discountedQuantity: number): number => {
  const isDiscountApplicable = quantity / discountedQuantity >= 1;
  const totalDiscount = isDiscountApplicable ? Math.floor(quantity / discountedQuantity) * discountAmount : 0;

  return roundNumberToDecimals(totalDiscount, 2);
};
