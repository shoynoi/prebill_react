import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import Notification from './Notification';

const UserNav = ({ user, services }) => (
  <div className="header-nav__items">
    <div className="header-nav__item">
      <Notification services={services} />
    </div>
    <div className="header-nav__item">
      <HeaderMenu user={user} />
    </div>
  </div>
);

export default UserNav;

UserNav.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  services: PropTypes.arrayOf(PropTypes.object),
};

UserNav.defaultProps = {
  services: [],
};
