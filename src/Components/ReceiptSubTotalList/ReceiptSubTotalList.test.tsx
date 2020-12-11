import React from "react";
import { render, screen } from "@testing-library/react";

import { ReceiptSubTotalList } from "./ReceiptSubTotalList";
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
    discountQuantity: 0,
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
  },
];

describe("render", () => {
  it("renders the list of sub total items", () => {
    render(<ReceiptSubTotalList items={dummyItems} />);
    const subTotalItems = screen
      .getAllByTestId("sub-total-items")
      .map((li) => li.textContent);

    expect(subTotalItems).toMatchInlineSnapshot(`
      Array [
        "dummy5",
        "dumm20.35 l @ £8.2/l2.87",
      ]
    `);
  });

  it("renders the sub total receipt item", () => {
    render(<ReceiptSubTotalList items={dummyItems} />);
    expect(screen.getByText(/Sub-total/).textContent).toBe("Sub-total");
  });
});

describe('context', () => {
  it('renders the sub total with the context value for sub total', () => {
    renderWithContext(<ReceiptSubTotalList items={dummyItems} />, dummyContext);

    expect(screen.getByText('Sub-total').textContent).toBe('Sub-total');
    expect(screen.getByText('10').textContent).toBe('10');
  });
});
