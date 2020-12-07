import React, { useContext } from 'react';
import { BasketContext } from '../../Context/BasketContext';

import { Product } from '../../Data/productsData';

interface ProductItemProps {
  product: Product,
};

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
}) => {
  const { addProduct } = useContext(BasketContext);

  const handleClick = () => {
    addProduct(product);
  };

  return (
    <React.Fragment>
      <h4>{product.name}</h4>
      <span>{product.price}</span>
      <img src={product.img} alt={product.name} />
      <button type="button" onClick={handleClick}>Add to basket</button>
    </React.Fragment>
  );
};
