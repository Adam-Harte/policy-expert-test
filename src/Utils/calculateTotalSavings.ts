import { Item } from '../Components/BasketItem/BasketItem';
import { calculateQuantityDiscount } from './calculateQuantityDiscount';
import { roundNumberToDecimals } from './roundNumberToDecimals';

export const calculateTotalSavings = (items: Item[]): number => {
  return items.reduce((total, item) => {
    if (item.discountAmount) {
      total += calculateQuantityDiscount(item.discountAmount, item.quantity, item.discountQuantity);
    }

    return roundNumberToDecimals(total, 2);
  }, 0);
}