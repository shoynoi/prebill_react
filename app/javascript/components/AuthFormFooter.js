import React from 'react';
import PropTypes from 'prop-types';

const AuthFormFooter = ({ children }) => (
  <footer className="auth-form__footer">
    <nav className="auth-form-nav">
      <ul className="auth-form-nav__items">
        {children}
      </ul>
    </nav>
  </footer>
);

export default AuthFormFooter;

AuthFormFooter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
