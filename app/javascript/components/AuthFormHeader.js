import React from 'react';
import PropTypes from 'prop-types';

const AuthFormHeader = ({ children }) => (
  <header className="auth-form__header">
    <h1 className="auth-form__title">
      {children}
    </h1>
  </header>
);

export default AuthFormHeader;

AuthFormHeader.propTypes = {
  children: PropTypes.string.isRequired,
};
