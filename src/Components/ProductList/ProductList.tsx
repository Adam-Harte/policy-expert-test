import React from 'react';

import { Product } from '../../Data/productsData';
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductListProps {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
}) => (
  <ul>
    { products.map((product) => (
      <li key={product.id} data-testid="product-items">
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);
