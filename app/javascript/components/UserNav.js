import React from 'react';
import deleteSession from '../helpers/authentication';

const UserNav = ({ user }) => (
  <div className="header-nav__items">
    <div className="header-nav__item">
      <HeaderMenu user={user} />
    </div>
  </div>
);

export default UserNav;
