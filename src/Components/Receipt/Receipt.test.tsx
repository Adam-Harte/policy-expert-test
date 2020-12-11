import React from "react";
import { render, screen } from "@testing-library/react";

import { Receipt } from "./Receipt";
import { BasketContext, BasketContextProps } from "../../Context/BasketContext";

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
    basket: [
      {
        id: 1,
        name: "dummy",
        price: 5,
        img: "dummy.png",
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 2,
        discountQuantity: 2,
        discountRule: "2 for 8",
      },
      {
        id: 2,
        name: "dumm2",
        price: 8.2,
        img: "dummy2.png",
        isLiquidBased: true,
        quantity: 0,
        litres: 0.35,
        discountAmount: 1,
        discountQuantity: 3,
        discountRule: "3l for £23.60",
      },
    ],
    subTotal: 12.87,
    totalSavings: 2,
    total: 10.87,
  }
}

describe("render", () => {
  it('renders the total with the context value for total', () => {
    renderWithContext(<Receipt />, dummyContext);

    expect(screen.getByText('Total to Pay').textContent).toBe('Total to Pay');
    expect(screen.getByText('10.87').textContent).toBe('10.87');
  });
});

