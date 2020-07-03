import React from 'react';
import PropTypes from 'prop-types';
import ServiceItemElement from './ServiceItemElement';
import { formatDate, formatPlan, formatPrice } from '../helpers/service';

const ListDisplayedItem = ({ service }) => (
  <div className="list-item--display">
    <ServiceItemElement size="col-lg">
      <span className="list-item__title">{service.name}</span>
    </ServiceItemElement>
    <ServiceItemElement size="col-sm">{formatPlan(service.plan)}</ServiceItemElement>
    <ServiceItemElement size="col-sm">{formatPrice(service.price)}</ServiceItemElement>
    <ServiceItemElement>{formatDate(service.renewed_on)}</ServiceItemElement>
    <ServiceItemElement>{formatDate(service.remind_on)}</ServiceItemElement>
  </div>
);

export default ListDisplayedItem;

ListDisplayedItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    plan: PropTypes.string,
    price: PropTypes.number,
    renewed_on: PropTypes.string,
    remind_on: PropTypes.string,
  }),
};

ListDisplayedItem.defaultProps = {
  service: undefined,
};
