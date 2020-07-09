import React from 'react';

const AccountNav = () => (
  <div className="header-nav__items">
    <div className="header-nav__item">
      <a href="/signup" className="header-nav__button">アカウント作成</a>
    </div>
    <div className="header-nav__item">
      <a href="/login" className="header-nav__link">ログイン</a>
    </div>
  </div>
);

export default AccountNav;
