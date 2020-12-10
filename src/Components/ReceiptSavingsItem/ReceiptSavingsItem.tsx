import React from 'react';

interface ReceiptSavingsItemProps {
  label: string;
  discount: number;
}

export const ReceiptSavingsItem: React.FC<ReceiptSavingsItemProps> = ({
  label,
  discount,
}) => (
  <div>
    <span> {label} </span>
    <span> -£{discount} </span>
  </div>
)
