import React from 'react';
import { calculateProductPriceTotal } from '../../Utils/calculateProductPriceTotal';

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
  <div>
    <div>
      <span>{name}</span>
      {isLiquidBased && (
        <span>{litres} l @ £{price}/l</span>
      )}
    </div>
    <div>
      <span>{isLiquidBased ? calculateProductPriceTotal(litres, price) : price}</span>
    </div>
  </div>
);
