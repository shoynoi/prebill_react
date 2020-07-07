import React from 'react';
import PropTypes from 'prop-types';
import ListLabels from './ListLabels';

const ServiceList = ({ children }) => {
  if (children.count === 0) {
    return null;
  }

  return (
    <div className="list">
      <ListLabels />
      <div className="list__items">
        {children}
      </div>
    </div>
  );
};

export default ServiceList;

ServiceList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
