import React from 'react';

import './ReceiptSavingsItem.css';

interface ReceiptSavingsItemProps {
  label: string;
  discount: number;
}

export const ReceiptSavingsItem: React.FC<ReceiptSavingsItemProps> = ({
  label,
  discount,
}) => (
  <div className="receipt-savings-item__item">
    <span> {label} </span>
    <span> -{discount} </span>
  </div>
)
