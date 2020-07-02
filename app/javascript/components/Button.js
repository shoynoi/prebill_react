import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick, children, color, size, block,
}) => (
  <button type="button" onClick={() => onClick()} className={`btn ${color} ${size} ${block}`}>{children}</button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.string,
};

Button.defaultProps = {
  color: '',
  size: '',
  block: '',
};
