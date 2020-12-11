import { Item } from "../Types/item";
import { calculateProductPriceTotal } from "./calculateProductPriceTotal";
import { roundNumberToDecimals } from "./roundNumberToDecimals";

export const calculateSubTotal = (basket: Item[]): number => {
  const subTotal = basket.reduce((total, item) => {
    if (item.isLiquidBased) {
      return total += calculateProductPriceTotal(item.litres, item.price);
    } else {
      return total += calculateProductPriceTotal(item.quantity, item.price);
    }
  }, 0);

  return roundNumberToDecimals(subTotal, 2);
}
