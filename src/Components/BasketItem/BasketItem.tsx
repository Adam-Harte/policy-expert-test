import React, { useContext } from 'react';

import { BasketContext } from '../../Context/BasketContext';
import { Item } from '../../Types/item';

import './BasketItem.css';

interface BasketItemProps {
  item: Item;
};

export const BasketItem: React.FC<BasketItemProps> = ({ item }) => {
  const { increase, decrease, removeProduct } = useContext(BasketContext);

  return (
    <React.Fragment>
      <h4 className="basket-item__name">{item.name}</h4>
      <span className="basket-item__price">£{item.price}</span>
      <img
        className="basket-item__image"
        src={item.img}
        alt={item.name}
      />
      <button
        className="basket-item__decrease-button"
        type="button"
        disabled={item.quantity <= 1 && item.litres <= 0.175}
        onClick={() => decrease(item)}
      >
          -
      </button>
      <span className="basket-item__quantity">
        Qty: {item.isLiquidBased ? item.litres : item.quantity}
      </span>
      <button
      className="basket-item__increase-button"
        type="button"
        onClick={() => increase(item)}
      >
          +
      </button>
      <button
        className="basket-item__remove-button"
        type="button"
        onClick={() => removeProduct(item)}
      >
        remove
      </button>
    </React.Fragment>
  );
};