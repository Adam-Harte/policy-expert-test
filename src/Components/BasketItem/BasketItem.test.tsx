import React from 'react';
import { render, screen } from '@testing-library/react';

import { BasketItem } from './BasketItem';

const dummyItem = {
  id: 1,
  name: 'dummy',
  price: 5,
  img: 'dummy.png',
  isLiquidBased: false,
  quantity: 2,
}

describe('render', () => {
  it('renders the product name', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(/dummy/).textContent).toBe('dummy');
  });

  it('renders the product price', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(/5/).textContent).toBe('5');
  });

  it('renders an img with the src set to product img', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByAltText(/dummy/)).toHaveAttribute('src', 'dummy.png');
  });

  it('renders a button for removing the product', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(/remove/).textContent).toBe('remove');
  });

  it('renders a button for increasing the quantity', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(('+')).textContent).toBe(' + ');
  });

  it('renders a button for decreasing the quantity', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText('-').textContent).toBe(' - ');
  })
});