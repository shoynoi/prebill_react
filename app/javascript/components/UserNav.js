import React from 'react';
import deleteSession from '../helpers/authentication';

const UserNav = () => (
  <div className="header-nav__items">
    <div className="header-nav__item">
      <button type="button" className="header-nav__link" onClick={() => deleteSession()}>ログアウト</button>
    </div>
  </div>
);

export default UserNav;
