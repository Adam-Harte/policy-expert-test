import React from "react";
import { render, screen } from "@testing-library/react";

import { ProductList } from "./ProductList";

const dummyProducts = [
  {
    id: 1,
    name: "dummy",
    price: 5,
    img: "dummy.png",
    isLiquidBased: false,
  },
  {
    id: 2,
    name: "dumm2",
    price: 8.2,
    img: "dummy2.png",
    isLiquidBased: true,
  },
];

describe("render", () => {
  it("renders the list of products with product name in correct order", () => {
    render(<ProductList products={dummyProducts} />);
    const productItems = screen
      .getAllByTestId("product-items")
      .map((li) => li.textContent);

    expect(productItems).toMatchInlineSnapshot(`
      Array [
        "dummy5Add to basket",
        "dumm28.2Add to basket",
      ]
    `);
  });
});
