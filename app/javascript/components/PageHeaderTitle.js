import React from 'react';
import PropTypes from 'prop-types';

const PageHeaderTitle = ({ children }) => (
  <h2 className="page-header__title">{children}</h2>
);

export default PageHeaderTitle;

PageHeaderTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
