import React from "react";
import { render, screen } from "@testing-library/react";

import { ReceiptSavingsList } from "./ReceiptSavingsList";

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
