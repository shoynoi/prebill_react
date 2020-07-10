import React from 'react';
import HeaderNav from './HeaderNav';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="header-title">
        <a href="/" className="header-title__link">PreBill</a>
      </h1>
      <HeaderNav />
    </div>
  </header>
);

export default Header;
