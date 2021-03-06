import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({
  href, children, color, size,
}) => (
  <a href={href} className={`btn btn--${color} btn--${size}`}>{children}</a>
);

export default LinkButton;

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
