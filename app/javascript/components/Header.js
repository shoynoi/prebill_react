import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';

const Header = ({ services }) => (
  <header className="header">
    <div className="container">
      <h1 className="header-title">
        <a href="/" className="header-title__link">PreBill</a>
      </h1>
      <HeaderNav services={services} />
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  services: [],
};
