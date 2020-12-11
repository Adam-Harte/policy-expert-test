import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BasketItem } from './BasketItem';
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

const dummyItem = {
  id: 1,
  name: 'dummy',
  price: 5,
  img: 'dummy.png',
  isLiquidBased: false,
  quantity: 2,
  litres: 0,
  discountAmount: 0.5,
  discountQuantity: 3,
}

describe('render', () => {
  it('renders the product name', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(/dummy/).textContent).toBe('dummy');
  });

  it('renders the product price', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText(/5/).textContent).toBe('£5');
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

    expect(screen.getByText(('+')).textContent).toBe('+');
  });

  it('renders a button for decreasing the quantity', () => {
    render(<BasketItem item={dummyItem} />);

    expect(screen.getByText('-').textContent).toBe('-');
  })
});

describe('context', () => {
  it('calls the increase context function to call the reducer to update basket state', () => {
    renderWithContext(<BasketItem item={dummyItem} />, dummyContext);
    fireEvent.click(screen.getByText('+'));
    expect(increaseFn).toHaveBeenCalledTimes(1);
    expect(increaseFn).toHaveBeenCalledWith(dummyItem);
  });

  it('calls the decrease context function to call the reducer to update basket state', () => {
    renderWithContext(<BasketItem item={dummyItem} />, dummyContext);
    fireEvent.click(screen.getByText('-'));
    expect(decreaseFn).toHaveBeenCalledTimes(1);
    expect(decreaseFn).toHaveBeenCalledWith(dummyItem);
  });

  it('calls the removeProduct context function to call the reducer to update basket state', () => {
    renderWithContext(<BasketItem item={dummyItem} />, dummyContext);
    fireEvent.click(screen.getByText('remove'));
    expect(removeProductFn).toHaveBeenCalledTimes(1);
    expect(removeProductFn).toHaveBeenCalledWith(dummyItem);
  });
});