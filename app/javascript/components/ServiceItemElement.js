import React from 'react';
import PropTypes from 'prop-types';

const ServiceItemElement = ({ size, children }) => (
  <div className={`list-item__element col-${size}`}>{children}</div>
);

export default ServiceItemElement;

ServiceItemElement.propTypes = {
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

ServiceItemElement.defaultProps = {
  size: 'md',
  children: null,
};
