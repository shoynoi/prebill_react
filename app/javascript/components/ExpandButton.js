import React from 'react';
import PropTypes from 'prop-types';

const ExpandButton = ({ onClick, isExpand }) => {
  const className = isExpand ? 'list-item__expand is-checked' : 'list-item__expand';
  return (

    <button type="button" aria-label="expand" className={className} onClick={onClick} />
  );
};

export default ExpandButton;

ExpandButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isExpand: PropTypes.bool.isRequired,
};
