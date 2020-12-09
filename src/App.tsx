import React from 'react';

import { BasketContextProvider } from './Context/BasketContext';
import Routes from './Routes';

function App() {
  return (
    <BasketContextProvider>
      <Routes />
    </BasketContextProvider>
  );
}

export default App;
