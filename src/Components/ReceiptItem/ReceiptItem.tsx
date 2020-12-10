import React from 'react';

import { calculateProductPriceTotal } from '../../Utils/calculateProductPriceTotal';

import './ReceiptItem.css'

interface ReceptItemProps {
  isLiquidBased?: boolean;
  name: string;
  quantity?: number;
  litres?: number;
  price: number;
};

export const ReceiptItem: React.FC<ReceptItemProps> = ({
  isLiquidBased = false,
  name,
  quantity = 0,
  litres = 0,
  price,
}) => (
  <div className="receipt-item__item">
    <div>
      <span>{name}</span>
      {isLiquidBased && (
        <span className="receipt-item__liquid-based">{litres} l @ £{price}/l</span>
      )}
    </div>
    <div>
      <span>{isLiquidBased ? calculateProductPriceTotal(litres, price) : price}</span>
    </div>
  </div>
);
