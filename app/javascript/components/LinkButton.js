import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ href, children }) => (
  <a href={href}>{children}</a>
);

export default LinkButton;

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
