import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';

const UserNav = ({ user }) => (
  <div className="header-nav__items">
    <div className="header-nav__item">
      <HeaderMenu user={user} />
    </div>
  </div>
);

export default UserNav;

UserNav.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
