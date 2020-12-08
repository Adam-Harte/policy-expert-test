import { Item } from "../Components/BasketItem/BasketItem";
import { calculateProductPriceTotal } from "./calculateProductPriceTotal";

export const calculateSubTotal = (basket: Item[]): number => {
  const subTotal = basket.reduce((total, item) => {
    if (item.isLiquidBased) {
      return total += calculateProductPriceTotal(item.litres, item.price);
    } else {
      return total += calculateProductPriceTotal(item.quantity, item.price);
    }
  }, 0);

  return parseFloat(subTotal.toFixed(2));
}