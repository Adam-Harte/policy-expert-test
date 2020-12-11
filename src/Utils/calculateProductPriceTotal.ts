import { roundNumberToDecimals } from "./roundNumberToDecimals";

export const calculateProductPriceTotal = (quantity: number, price: number): number => roundNumberToDecimals(price * quantity, 2);