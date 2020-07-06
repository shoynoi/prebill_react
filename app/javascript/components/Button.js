import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick, children, color, size, block,
}) => {
  const btnBlock = block === '' ? '' : `btn--${block}`;
  return (
    <button type="button" onClick={() => onClick()} className={`btn btn--${color} btn--${size} ${btnBlock}`}>{children}</button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  block: PropTypes.string,
};

Button.defaultProps = {
  block: '',
};
