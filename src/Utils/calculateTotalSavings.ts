import { Item } from '../Components/BasketItem/BasketItem';
import { calculateQuantityDiscount } from './calculateQuantityDiscount';

export const calculateTotalSavings = (items: Item[]): number => {
  return items.reduce((total, item) => {
    if (item.discountAmount) {
      total += calculateQuantityDiscount(item.discountAmount, item.quantity, item.discountQuantity);
    }

    return total;
  }, 0);
}