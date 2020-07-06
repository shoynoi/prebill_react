import React from 'react';
import PropTypes from 'prop-types';
import ServiceItemElement from './ServiceItemElement';
import { formatDate, formatPlan, formatPrice } from '../helpers/service';
import ExpandButton from './ExpandButton';

const ListDisplayedItem = ({ service, onClick, isExpand }) => (
  <div className="list-item--display">
    <ServiceItemElement size="lg">
      <span className="list-item__title">{service.name}</span>
    </ServiceItemElement>
    <ServiceItemElement size="sm">{formatPlan(service.plan)}</ServiceItemElement>
    <ServiceItemElement size="sm">{formatPrice(service.price)}</ServiceItemElement>
    <ServiceItemElement>{formatDate(service.renewed_on)}</ServiceItemElement>
    <ServiceItemElement>{formatDate(service.remind_on)}</ServiceItemElement>
    <ExpandButton onClick={onClick} isExpand={isExpand} />
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
  onClick: PropTypes.func.isRequired,
  isExpand: PropTypes.bool.isRequired,
};

ListDisplayedItem.defaultProps = {
  service: undefined,
};
