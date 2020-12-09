import React from "react";

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { Shop } from '../Pages/Shop/Shop';
import { Basket } from '../Pages/Basket/Basket';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route path="/basket" component={Basket} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;