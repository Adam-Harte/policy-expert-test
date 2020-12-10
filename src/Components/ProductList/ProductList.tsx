import React from 'react';

import { Product } from '../../Data/productsData';
import { ProductItem } from '../ProductItem/ProductItem';

import './ProductList.css'

interface ProductListProps {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
}) => (
  <ul className="product-list__list">
    { products.map((product) => (
      <li
        className="product-list__item"
        key={product.id}
        data-testid="product-items"
      >
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);
