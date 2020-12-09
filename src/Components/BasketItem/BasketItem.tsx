import React, { useContext } from 'react';
import { BasketContext } from '../../Context/BasketContext';

export type Item = {
  id: number;
  name: string;
  price: number;
  img: string;
  isLiquidBased: boolean;
  quantity: number;
  litres: number;
  discountAmount: number;
  discountQuantity: number;
};

interface BasketItemProps {
  item: Item;
};

export const BasketItem: React.FC<BasketItemProps> = ({ item }) => {
  const { increase, decrease, removeProduct } = useContext(BasketContext);

  return (
    <React.Fragment>
      <h4>{item.name}</h4>
      <span>{item.price}</span>
      <img src={item.img} alt={item.name} />
      <button
        type="button"
        disabled={item.quantity <= 1 && item.litres <= 0.175}
        onClick={() => decrease(item)}> - </button>
      <span>Qty: {item.quantity}</span>
      <button type="button" onClick={() => increase(item)}> + </button>
      <button type="button" onClick={() => removeProduct(item)}>remove</button>
    </React.Fragment>
  );
};