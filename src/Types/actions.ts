import { Product } from "./product";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: Product;
}

export interface IncreaseAction {
  type: typeof INCREASE;
  payload: Product;
}

export interface DecreaseAction {
  type: typeof DECREASE;
  payload: Product;
}

export interface ClearBasketAction {
  type: typeof CLEAR_BASKET;
}

export type BasketActionTypes = AddProductAction | RemoveProductAction | IncreaseAction | DecreaseAction | ClearBasketAction;