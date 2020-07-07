import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="header-title">
        <a href="/" className="header-title__link">PreBill</a>
      </h1>
      <nav className="header-nav">
        <div className="header-nav__items">
          <div className="header-nav__item">
            <a href="/signup" className="header-nav__button">アカウント作成</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
