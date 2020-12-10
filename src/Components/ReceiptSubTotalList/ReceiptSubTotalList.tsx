import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { Item } from '../BasketItem/BasketItem';
import { ReceiptItem } from '../ReceiptItem/ReceiptItem';

import './ReceiptSubTotalList.css'

interface ReceiptSubTotalListProps {
  items: Item[];
}

export const ReceiptSubTotalList: React.FC<ReceiptSubTotalListProps> = ({ items }) => {
  const { subTotal } = useContext(BasketContext);
  return (
    <React.Fragment>
      <ul className="receipt-sub-total-list__list">
        {items.map((item: Item, index: number) => (
          <li key={item.id + index} data-testid="sub-total-items">
            <ReceiptItem
              isLiquidBased={item.isLiquidBased}
              name={item.name}
              price={item.price}
              litres={item.litres}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
      <hr />
      <ReceiptItem
        name="Sub-total"
        price={subTotal}
      />
    </React.Fragment>
  );
};
