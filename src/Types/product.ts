export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  isLiquidBased: boolean;
  discountAmount: number;
  discountQuantity: number;
  discountRule?: string;
};
