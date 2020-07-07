import React from 'react';
import PropTypes from 'prop-types';

const AuthFormFooterLink = ({ href, children }) => (
  <li className="auth-form-nav__item">
    <a href={href} className="auth-form-nav__link">{children}</a>
  </li>
);

export default AuthFormFooterLink;

AuthFormFooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
