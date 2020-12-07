  import React from 'react';

import { BasketItem, Item } from '../BasketItem/BasketItem';

interface BasketListProps {
  basketItems: Item[];
};

export const BasketList: React.FC<BasketListProps> = ({ basketItems }) => {

  return (
    <ul>
      { basketItems.map((item) => (
        <li key={item.id} data-testid="basket-items">
          <BasketItem item={item} />
        </li>
      ))}
    </ul>
  )
}