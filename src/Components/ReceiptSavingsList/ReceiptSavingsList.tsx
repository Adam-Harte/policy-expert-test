import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { calculateQuantityDiscount } from '../../Utils/calculateQuantityDiscount';
import { Item } from '../BasketItem/BasketItem';
import { ReceiptSavingsItem } from '../ReceiptSavingsItem/ReceiptSavingsItem';

import './ReceiptSavingsList.css';

interface ReceiptSavingsListProps {
  items: Item[];
}

export const ReceiptSavingsList: React.FC<ReceiptSavingsListProps> = ({ items }) => {
  const { totalSavings } = useContext(BasketContext)
  return (
    <React.Fragment>
      <span>Savings</span>
      <ul className="receipt-savings-list__list">
        {items.map((item) => {
          const discount = calculateQuantityDiscount(item.discountAmount, item.quantity, item.discountQuantity);
          return !!discount && (
            <li key={item.id}  data-testid="savings-items">
              <ReceiptSavingsItem
                label={item.discountRule || ''}
                discount={discount}
              />
            </li>
          );
        })}
      </ul>
      <hr />
      <ReceiptSavingsItem
        label="Total savings"
        discount={totalSavings}
      />
      <hr />
    </React.Fragment>
  );
};
