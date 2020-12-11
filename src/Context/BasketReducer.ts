import { Item } from "../Components/BasketItem/BasketItem";
import { Product } from "../Data/productsData";
import { calculateSubTotal } from "../Utils/calculateSubTotal";
import { calculateTotal } from "../Utils/calculateTotal";
import { calculateTotalSavings } from "../Utils/calculateTotalSavings";
import { roundNumberToDecimals } from "../Utils/roundNumberToDecimals";

interface BasketState {
  basket: Item[];
  subTotal: number;
  totalSavings: number;
  total: number;
};

interface Action {
  type: string;
  payload: Product;
}

export const BasketReducer = (state: BasketState, action: Action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let addProductBasket = [...state.basket];

      if (!state.basket.find((item) => item.id === action.payload.id)) {
        addProductBasket = addProductBasket.concat([{
            ...action.payload,
            quantity: !action.payload.isLiquidBased ? 1: 0,
            litres: action.payload.isLiquidBased ? 0.175 : 0,
        }]);
      }

      return {
          ...state,
          basket: addProductBasket,
          subTotal: calculateSubTotal(addProductBasket),
          totalSavings: calculateTotalSavings(addProductBasket),
          total: calculateTotal(calculateSubTotal(addProductBasket), calculateTotalSavings(addProductBasket)),
      };
    case "REMOVE_PRODUCT":
      const removeProductBasket = state.basket.filter((item) => item.id !== action.payload.id);
      return {
          ...state,
          basket: removeProductBasket,
          subTotal: calculateSubTotal(removeProductBasket),
          totalSavings: calculateTotalSavings(removeProductBasket),
          total: calculateTotal(calculateSubTotal(removeProductBasket), calculateTotalSavings(removeProductBasket)),
      };
    case "INCREASE":
      const basketItemToIncrease = state.basket.findIndex((item) => item.id === action.payload.id);

      const increasedBasketItem = {
        ...state.basket[basketItemToIncrease],
        ...(!state.basket[basketItemToIncrease].isLiquidBased && { quantity: state.basket[basketItemToIncrease].quantity + 1 }),
        ...(state.basket[basketItemToIncrease].isLiquidBased && { litres: roundNumberToDecimals(state.basket[basketItemToIncrease].litres + 0.175, 3) }),
      }

      const newBasketIncrease = [
        ...state.basket.slice(0, basketItemToIncrease),
        increasedBasketItem,
        ...state.basket.slice(basketItemToIncrease + 1),
      ];

      return {
          ...state,
          basket: newBasketIncrease,
          subTotal: calculateSubTotal(newBasketIncrease),
          totalSavings: calculateTotalSavings(newBasketIncrease),
          total: calculateTotal(calculateSubTotal(newBasketIncrease), calculateTotalSavings(newBasketIncrease)),
      };
    case "DECREASE":
      const basketItemToDecrease = state.basket.findIndex((item) => item.id === action.payload.id);

      const decreasedBasketItem = {
        ...state.basket[basketItemToDecrease],
        ...(!state.basket[basketItemToDecrease].isLiquidBased && { quantity: state.basket[basketItemToDecrease].quantity - 1 }),
        ...(state.basket[basketItemToDecrease].isLiquidBased && { litres: roundNumberToDecimals(state.basket[basketItemToDecrease].litres - 0.175, 3) }),
      }

      const newBasketDecrease = [
        ...state.basket.slice(0, basketItemToDecrease),
        decreasedBasketItem,
        ...state.basket.slice(basketItemToDecrease + 1),
      ];

      return {
          ...state,
          basket: newBasketDecrease,
          subTotal: calculateSubTotal(newBasketDecrease),
          totalSavings: calculateTotalSavings(newBasketDecrease),
          total: calculateTotal(calculateSubTotal(newBasketDecrease), calculateTotalSavings(newBasketDecrease)),
      };
    case "CLEAR_BASKET":
      return {
          basket: [],
          subTotal: 0,
          totalSavings: 0,
          total: 0,
      };
    default:
        return state;
  }
};
