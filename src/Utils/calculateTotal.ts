import { roundNumberToDecimals } from "./roundNumberToDecimals";

export const calculateTotal = (subTotal: number, totalSavings: number): number => roundNumberToDecimals(subTotal - totalSavings, 2);