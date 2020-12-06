import { Item } from "../Components/BasketItem/BasketItem";
import { Product } from "../Data/productsData";

interface BasketState {
  basket: Item[];
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
              ...(!action.payload.isLiquidBased && { quantity: 1 }),
              ...(action.payload.isLiquidBased && { litres: 0.175 }),
          });
      }

      return {
          ...state,
          basket: [...state.basket]
      };
    case "REMOVE_PRODUCT":
      return {
          ...state,
          basket: state.basket.filter(item => item.id !== action.payload.id)
      };
    case "INCREASE":
      const basketItemToIncrease = state.basket.findIndex(item => item.id === action.payload.id);

      if (state.basket[basketItemToIncrease].hasOwnProperty('quantity')) {
        state.basket[basketItemToIncrease].quantity!++;
      } else if (state.basket[basketItemToIncrease].hasOwnProperty('litres')) {
        state.basket[basketItemToIncrease].litres! += 0.175;
      }

      return {
          ...state,
          basket: [...state.basket]
      };
    case "DECREASE":
      const basketItemToDecrease = state.basket.findIndex(item => item.id === action.payload.id);

      if (state.basket[basketItemToDecrease].hasOwnProperty('quantity')) {
        state.basket[basketItemToDecrease].quantity!--;
      } else if (state.basket[basketItemToDecrease].hasOwnProperty('litres')) {
        state.basket[basketItemToDecrease].litres! -= 0.175;
      }

      return {
          ...state,
          basket: [...state.basket]
      };
    case "CLEAR_BASKET":
      return {
          basket: [],
      };
    default:
        return state;
  }
};
