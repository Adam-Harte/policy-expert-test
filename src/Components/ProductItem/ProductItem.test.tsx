import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductItem } from './ProductItem';

const dummyProduct = {
  id: 1,
  name: 'dummy',
  price: 5,
  img: 'dummy.png',
  isLiquidBased: false,
  discountAmount: 1.50,
  discountQuantity: 4,
}

describe('render', () => {
  it('renders the product name', () => {
    render(<ProductItem product={dummyProduct} />);

    expect(screen.getByText(/dummy/).textContent).toBe('dummy');
  });

  it('renders the product price', () => {
    render(<ProductItem product={dummyProduct} />);

    expect(screen.getByText(/5/).textContent).toBe('£5');
  });

  it('renders an img with the src set to product img', () => {
    render(<ProductItem product={dummyProduct} />);

    expect(screen.getByAltText(/dummy/)).toHaveAttribute('src', 'dummy.png');
  });
});