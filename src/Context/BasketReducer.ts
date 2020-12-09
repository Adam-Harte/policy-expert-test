import { Item } from "../Components/BasketItem/BasketItem";
import { Product } from "../Data/productsData";
import { calculateSubTotal } from "../Utils/calculateSubTotal";
import { calculateTotal } from "../Utils/calculateTotal";
import { calculateTotalSavings } from "../Utils/calculateTotalSavings";

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
      if (!state.basket.find(item => item.id === action.payload.id)) {
          state.basket.push({
              ...action.payload,
              quantity: !action.payload.isLiquidBased ? 1: 0,
              litres: action.payload.isLiquidBased ? 0.175 : 0,
          });
      }

      return {
          ...state,
          basket: [...state.basket],
          subTotal: calculateSubTotal(state.basket),
          totalSavings: calculateTotalSavings(state.basket),
          total: calculateTotal(calculateSubTotal(state.basket), calculateTotalSavings(state.basket)),
      };
    case "REMOVE_PRODUCT":
      const updatedBasket = state.basket.filter(item => item.id !== action.payload.id);
      return {
          ...state,
          basket: updatedBasket,
          subTotal: calculateSubTotal(updatedBasket),
          totalSavings: calculateTotalSavings(updatedBasket),
          total: calculateTotal(calculateSubTotal(updatedBasket), calculateTotalSavings(updatedBasket)),
      };
    case "INCREASE":
      const basketItemToIncrease = state.basket.findIndex(item => item.id === action.payload.id);

      if (state.basket[basketItemToIncrease].hasOwnProperty('quantity')) {
        state.basket[basketItemToIncrease].quantity ++;
      } else if (state.basket[basketItemToIncrease].hasOwnProperty('litres')) {
        state.basket[basketItemToIncrease].litres! += 0.175;
      }

      return {
          ...state,
          basket: [...state.basket],
          subTotal: calculateSubTotal(state.basket),
          totalSavings: calculateTotalSavings(state.basket),
          total: calculateTotal(calculateSubTotal(state.basket), calculateTotalSavings(state.basket)),
      };
    case "DECREASE":
      const basketItemToDecrease = state.basket.findIndex(item => item.id === action.payload.id);

      if (state.basket[basketItemToDecrease].hasOwnProperty('quantity')) {
        state.basket[basketItemToDecrease].quantity! --;
      } else if (state.basket[basketItemToDecrease].hasOwnProperty('litres')) {
        state.basket[basketItemToDecrease].litres! -= 0.175;
      }

      return {
          ...state,
          basket: [...state.basket],
          subTotal: calculateSubTotal(state.basket),
          totalSavings: calculateTotalSavings(state.basket),
          total: calculateTotal(calculateSubTotal(state.basket), calculateTotalSavings(state.basket)),
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
