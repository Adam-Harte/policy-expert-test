import React, { useContext } from 'react';
import { BasketContext } from '../../Context/BasketContext';

import { Product } from '../../Data/productsData';

import './ProductItem.css';

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
      <h4 className="product-item__name">{product.name}</h4>
      <span className="product-item__price">£{product.price}</span>
      <img className="product-item__image" src={product.img} alt={product.name} />
      <button
        className="product-item__add-product-button"
        type="button"
        onClick={handleClick}>
          Add to basket
        </button>
    </React.Fragment>
  );
};
