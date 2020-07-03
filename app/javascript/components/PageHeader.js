import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ children }) => (
  <header className="page-header">
    {children}
  </header>
);

export default PageHeader;

PageHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
