import React from 'react';
import PropTypes from 'prop-types';
import ListDisplayedItem from './ListDisplayedItem';
import ListExpandableItem from './ListExpandableItem';

const ServiceItem = ({ service, onDelete }) => (
  <div className="list-item">
    <ListDisplayedItem service={service} />
    <ListExpandableItem service={service} onDelete={onDelete} />
  </div>
);

export default ServiceItem;

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    plan: PropTypes.string,
    price: PropTypes.number,
    renewed_on: PropTypes.string,
    remind_on: PropTypes.string,
    description: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};

ServiceItem.defaultProps = {
  service: undefined,
};
