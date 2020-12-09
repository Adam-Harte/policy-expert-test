import React from 'react';
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header>
    <nav>
      <Link to='/'>Shop</Link>
      <Link to='/basket'>Basket</Link>
    </nav>
  </header>
);
