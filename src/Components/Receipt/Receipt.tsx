import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { Item } from '../BasketItem/BasketItem';
import { ReceiptItem } from '../ReceiptItem/ReceiptItem';
import { ReceiptSavingsList } from '../ReceiptSavingsList/ReceiptSavingsList';
import { ReceiptSubTotalList } from '../ReceiptSubTotalList/ReceiptSubTotalList';

import './Receipt.css'

export const Receipt: React.FC = () => {
  const { basket, total } = useContext(BasketContext);

  const subTotalItems = basket.reduce((result: Item[], item: Item) => {
    if (!item.isLiquidBased) {
      for (let i = 0; i < item.quantity; i++) {
        result.push(item);
      }
    } else {
      result.push(item);
    }

    return result;
  }, []);

  const savingsItems = basket.filter((item: Item) => !!item.discountAmount);


  return (
    <div className="receipt">
      <ReceiptSubTotalList items={subTotalItems} />
      <ReceiptSavingsList items={savingsItems} />
      <ReceiptItem
        name="Total to Pay"
        price={total}
      />
    </div>
  );
};
