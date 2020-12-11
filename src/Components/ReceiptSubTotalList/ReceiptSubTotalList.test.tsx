import React from "react";
import { render, screen } from "@testing-library/react";

import { ReceiptSubTotalList } from "./ReceiptSubTotalList";

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
