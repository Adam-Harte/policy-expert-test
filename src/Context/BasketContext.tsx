import React, { useReducer } from 'react';

import { Item } from '../Components/BasketItem/BasketItem';
import { Product } from '../Data/productsData';
import { BasketReducer } from './BasketReducer';

interface BasketContextProps {
  addProduct: (payload: Product) => void;
  removeProduct: (payload: Product) => void;
  increase: (payload: Product) => void;
  decrease: (payload: Product) => void;
  clearBasket: (payload: Product) => void;
  basket: Item[];
  subTotal: number;
  totalSavings: number;
  total: number;
}

export const BasketContext = React.createContext<BasketContextProps>({
  addProduct: (payload: Product) => {},
  removeProduct: (payload: Product) => {},
  increase: (payload: Product) => {},
  decrease: (payload: Product) => {},
  clearBasket: (payload: Product) => {},
  basket: [],
  subTotal: 0,
  totalSavings: 0,
  total: 0,
});

const initialState = {
  basket: [],
  subTotal: 0,
  totalSavings: 0,
  total: 0,
};

export const BasketContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(BasketReducer, initialState);

  const addProduct = (payload: Product) => {
    dispatch({type: 'ADD_PRODUCT', payload})
  };

  const removeProduct = (payload: Product) => {
    dispatch({type: 'REMOVE_PRODUCT', payload})
  };

  const increase = (payload: Product) => {
    dispatch({type: 'INCREASE', payload})
  };

  const decrease = (payload: Product) => {
    dispatch({type: 'DECREASE', payload})
  };

  const clearBasket = (payload: Product) => {
    dispatch({type: 'CLEAR', payload})
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearBasket,
    ...state
  };

  return (
    <BasketContext.Provider value={contextValues} >
      { children }
    </BasketContext.Provider>
 );
};
