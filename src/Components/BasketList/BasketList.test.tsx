import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { BasketList } from "./BasketList";
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
    basket: [],
    subTotal: 10,
    totalSavings: 2,
    total: 8,
  }
}

const dummyItems = [
  {
    id: 1,
    name: "dummy",
    price: 5,
    img: "dummy.png",
    isLiquidBased: false,
    quantity: 2,
    litres: 0,
    discountAmount: 0.5,
    discountQuantity: 4,
  },
  {
    id: 2,
    name: "dumm2",
    price: 8.2,
    img: "dummy2.png",
    isLiquidBased: true,
    quantity: 0,
    litres: 0.7,
    discountAmount: 1,
    discountQuantity: 2,
  },
];

describe("render", () => {
  it("renders the list of products with product name in correct order", () => {
    render(<BasketList basketItems={dummyItems} />);
    const basketItems = screen
      .getAllByTestId("basket-items")
      .map((li) => li.textContent);

    expect(basketItems).toMatchInlineSnapshot(`
      Array [
        "dummy£5-Qty: 2+remove",
        "dumm2£8.2-Qty: 0.7+remove",
      ]
    `);
  });
});

describe('context', () => {
  it('calls the clearBasket dispatch method on click of clear basket button', () => {
    renderWithContext(<BasketList basketItems={dummyItems} />, dummyContext);

    fireEvent.click(screen.getByText('Clear basket'));
    expect(clearBasketFn).toHaveBeenCalledTimes(1);
  });
});
