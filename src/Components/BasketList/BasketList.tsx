  import React from 'react';

import { BasketItem, Item } from '../BasketItem/BasketItem';

import './BasketList.css';

interface BasketListProps {
  basketItems: Item[];
};

export const BasketList: React.FC<BasketListProps> = ({ basketItems }) => {

  return (
    <ul className="basket-list__list">
      { basketItems.map((item) => (
        <li key={item.id} data-testid="basket-items">
          <BasketItem item={item} />
        </li>
      ))}
    </ul>
  )
}