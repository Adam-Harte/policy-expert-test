import React from "react";
import { render, screen } from "@testing-library/react";

import { BasketList } from "./BasketList";

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
