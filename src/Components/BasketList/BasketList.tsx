import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { Item } from '../../Types/item';
import { BasketItem } from '../BasketItem/BasketItem';

import './BasketList.css';

interface BasketListProps {
  basketItems: Item[];
};

export const BasketList: React.FC<BasketListProps> = ({ basketItems }) => {
  const { clearBasket } = useContext(BasketContext)

  return (
    <React.Fragment>
      <ul className="basket-list__list">
        { basketItems.map((item) => (
          <li key={item.id} data-testid="basket-items">
            <BasketItem item={item} />
          </li>
        ))}
      </ul>
      <button
        className="basket-list__clear-button"
        type="button"
        onClick={clearBasket}
      >
        Clear basket
      </button>
    </React.Fragment>
  )
}