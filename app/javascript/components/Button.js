import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick, children, color, size, isBlock,
}) => {
  const block = isBlock ? 'btn--block' : '';
  return (
    <button type="button" onClick={() => onClick()} className={`btn btn--${color} btn--${size} ${block}`}>{children}</button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  isBlock: PropTypes.bool,
};

Button.defaultProps = {
  isBlock: false,
};
