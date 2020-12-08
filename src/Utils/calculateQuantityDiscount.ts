export const calculateQuantityDiscount = (discountAmount: number, quantity: number, discountedQuantity: number): number => {
  const isDiscountApplicable = quantity / discountedQuantity >= 1;
  const totalDiscount = isDiscountApplicable ? Math.min(quantity / discountedQuantity) * discountAmount : 0;

  return totalDiscount;
};
