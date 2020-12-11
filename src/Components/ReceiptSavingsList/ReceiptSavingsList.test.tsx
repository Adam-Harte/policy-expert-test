import React from "react";
import { render, screen } from "@testing-library/react";

import { ReceiptSavingsList } from "./ReceiptSavingsList";
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
];

describe("render", () => {
  it("renders the list of savings items", () => {
    render(<ReceiptSavingsList items={dummyItems} />);
    const receiptSavingsItems = screen
      .getAllByTestId("savings-items")
      .map((li) => li.textContent);

    expect(receiptSavingsItems).toMatchInlineSnapshot(`
      Array [
        " 2 for 8  -2 ",
      ]
    `);
  });

  it("renders the savings label", () => {
    render(<ReceiptSavingsList items={dummyItems} />);

    expect(screen.getByText(/Savings/).textContent).toBe("Savings");
  });

  it("renders the total savings item", () => {
    render(<ReceiptSavingsList items={dummyItems} />);

    expect(screen.getByText(/Total savings/).textContent).toBe(
      " Total savings "
    );
  });
});

describe('context', () => {
  it('renders the total savings with the context value for total savings', () => {
    renderWithContext(<ReceiptSavingsList items={dummyItems} />, dummyContext);

    expect(screen.getByText('Total savings').textContent).toBe(' Total savings ');
    expect(screen.getAllByText('-2')[1].textContent).toBe(' -2 ');
  });
});
