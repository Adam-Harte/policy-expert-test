import React from 'react';

import { Header } from '../../Components/Header/Header';
import { ProductList } from '../../Components/ProductList/ProductList';
import { productsData } from '../../Data/productsData';

export const Shop: React.FC = () => (
  <React.Fragment>
    <Header />
    <ProductList products={productsData.products} />
  </React.Fragment>
);
