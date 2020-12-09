import { BasketReducer } from './BasketReducer';

it('adds a product to the basket state when it doesnt already exist', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'ADD_PRODUCT',
    payload: {
      id: 1,
      name: 'bar',
      price: 2.50,
      img: 'bar.png',
      isLiquidBased: false,
      discountAmount: 1.00,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      },
      {
        id: 1,
        name: 'bar',
        price: 2.50,
        img: 'bar.png',
        isLiquidBased: false,
        litres: 0,
        quantity: 1,
        discountAmount: 1.00,
        discountQuantity: 2,
      }
    ],
    subTotal: 12.5,
    total: 11.5,
    totalSavings: 1,
  });
});

it('DOES NOT add a product to the basket state when it already exists', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 1,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'ADD_PRODUCT',
    payload: {
      id: 0,
      name: 'foo',
      price: 5,
      img: 'foo.png',
      isLiquidBased: false,
      discountAmount: 1,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 1,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      },
    ],
    subTotal: 5,
    total: 5,
    totalSavings: 0,
  });
});

it('removes a product from the basket state when it exists', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'REMOVE_PRODUCT',
    payload: {
      id: 0,
      name: 'foo',
      price: 5,
      img: 'foo.png',
      isLiquidBased: false,
      discountAmount: 1,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [],
    subTotal: 0,
    total: 0,
    totalSavings: 0,
  });
});

it('increases a product quantity in the basket state', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'INCREASE',
    payload: {
      id: 0,
      name: 'foo',
      price: 5,
      img: 'foo.png',
      isLiquidBased: false,
      discountAmount: 1,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 3,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 15,
    total: 14,
    totalSavings: 1,
  });
});

it('decreases a product quantity in the basket state', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'DECREASE',
    payload: {
      id: 0,
      name: 'foo',
      price: 5,
      img: 'foo.png',
      isLiquidBased: false,
      discountAmount: 1,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 1,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 5,
    total: 5,
    totalSavings: 0,
  });
});

it('clears basket state', () => {
  const dummyState = {
    basket: [
      {
        id: 0,
        name: 'foo',
        price: 5,
        img: 'foo.png',
        isLiquidBased: false,
        quantity: 2,
        litres: 0,
        discountAmount: 1,
        discountQuantity: 2,
      }
    ],
    subTotal: 10,
    totalSavings: 1,
    total: 9,
  }

  expect(BasketReducer(dummyState, {
    type: 'CLEAR_BASKET',
    payload: {
      id: 0,
      name: 'foo',
      price: 5,
      img: 'foo.png',
      isLiquidBased: false,
      discountAmount: 1,
      discountQuantity: 2,
    }
  })).toEqual({
    basket: [],
    subTotal: 0,
    total: 0,
    totalSavings: 0,
  });
});
