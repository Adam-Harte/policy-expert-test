import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ProductItem } from './ProductItem';
import { BasketContext, BasketContextProps } from '../../Context/BasketContext';

const renderWithContext = (ui: JSX.Element, providerProps: {
  value: BasketContextProps
}) => {
  return render(
    <BasketContext.Provider {...providerProps}>{ui}</BasketContext.Provider>,
  )
}

const addProductFn = jest.fn();
const removeProductFn = jest.fn();
const increaseFn = jest.fn();
const decreaseFn = jest.fn();
const clearBasketFn = jest.fn();

const dummyContext = {
  value: {
    addProduct: addProductFn,
    removeProduct: removeProductFn,
    increase: increaseFn,
    decrease: decreaseFn,
    clearBasket: clearBasketFn,
    basket: [],
    subTotal: 0,
    totalSavings: 0,
    total: 0,
  }
}

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

describe('context', () => {
  it('calls the addProduct context function to call the reducer to update basket state', () => {
    renderWithContext(<ProductItem product={dummyProduct} />, dummyContext);
    fireEvent.click(screen.getByText('Add to basket'));
    expect(addProductFn).toHaveBeenCalledTimes(1);
    expect(addProductFn).toHaveBeenCalledWith(dummyProduct);
  });
});