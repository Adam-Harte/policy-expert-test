import React, { useContext } from 'react';
import { BasketContext } from '../../Context/BasketContext';
import { Item } from '../BasketItem/BasketItem';
import { ReceiptItem } from '../ReceiptItem/ReceiptItem';

interface ReceiptSubTotalListProps {
  items: Item[];
}

export const ReceiptSubTotalList: React.FC<ReceiptSubTotalListProps> = ({ items }) => {
  const { subTotal } = useContext(BasketContext);
  return (
    <>
      <ul data-testid="sub-total-items">
        {items.map((item: Item, index: number) => (
          <li key={item.id + index}>
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
    </>
  );
};
