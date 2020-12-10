import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { calculateQuantityDiscount } from '../../Utils/calculateQuantityDiscount';
import { Item } from '../BasketItem/BasketItem';
import { ReceiptSavingsItem } from '../ReceiptSavingsItem/ReceiptSavingsItem';

interface ReceiptSavingsListProps {
  items: Item[];
}

export const ReceiptSavingsList: React.FC<ReceiptSavingsListProps> = ({ items }) => {
  const { totalSavings } = useContext(BasketContext)
  return (
    <>
      <span>Savings</span>
      <ul data-testid="savings-items">
        {items.map((item) => (
          <li key={item.id}>
            <ReceiptSavingsItem
              label={item.discountRule || ''}
              discount={calculateQuantityDiscount(item.discountAmount, item.quantity, item.discountQuantity)}
            />
          </li>
        ))}
      </ul>
      <hr />
      <ReceiptSavingsItem
        label="Total savings"
        discount={totalSavings}
      />
      <hr />
    </>
  );
};
