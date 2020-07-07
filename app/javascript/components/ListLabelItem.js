import React from 'react';
import PropTypes from 'prop-types';

const ListLabelItem = ({ colSize, children }) => (
  <div className={`list__label col-${colSize}`}>{children}</div>
);

export default ListLabelItem;

ListLabelItem.propTypes = {
  colSize: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ListLabelItem.defaultProps = {
  colSize: 'md',
};
