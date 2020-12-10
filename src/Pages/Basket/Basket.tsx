import React, { useContext } from 'react';

import { BasketList } from '../../Components/BasketList/BasketList';
import { Header } from '../../Components/Header/Header';
import { Receipt } from '../../Components/Receipt/Receipt';
import { BasketContext } from '../../Context/BasketContext';

export const Basket: React.FC = () => {
  const { basket } = useContext(BasketContext);

  return (
    <React.Fragment>
      <Header />
      <BasketList basketItems={basket} />
      <Receipt />
    </React.Fragment>
  );
};
