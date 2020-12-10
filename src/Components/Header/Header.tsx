import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

export const Header: React.FC = () => (
  <header className="header">
    <nav className="header__nav">
      <Link className="header__nav__item" to='/'>Shop</Link>
      <Link className="header__nav__item" to='/basket'>Basket</Link>
    </nav>
  </header>
);
