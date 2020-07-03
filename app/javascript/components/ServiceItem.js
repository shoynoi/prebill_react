import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'linkifyjs/react';
import { formatDate, formatPlan, formatPrice } from '../helpers/service';
import LinkButton from './LinkButton';
import Button from './Button';
import ServiceItemElement from './ServiceItemElement';

const ServiceItem = ({ service, onDelete }) => (
  <div className="list">
    <div className="list--display">
      <ServiceItemElement size="col-lg">
        <span className="list-item__title">{service.name}</span>
      </ServiceItemElement>
      <ServiceItemElement size="col-sm">{formatPlan(service.plan)}</ServiceItemElement>
      <ServiceItemElement size="col-sm">{formatPrice(service.price)}</ServiceItemElement>
      <ServiceItemElement>{formatDate(service.renewed_on)}</ServiceItemElement>
      <ServiceItemElement>{formatDate(service.remind_on)}</ServiceItemElement>
    </div>
    <div className="list--expandable">
      <div className="list-item">
        <Linkify className="list-item__memo" tagName="p" options={{ target: '_blank' }}>{service.description}</Linkify>
      </div>
      <div className="list__actions">
        <div className="list__action">
          <LinkButton href={`services/${service.id}/edit`} color="secondary" size="sm">修正</LinkButton>
        </div>
        <div className="list__action">
          <Button
            onClick={() => onDelete(service.id)}
            color="danger"
            size="sm"
          >
            削除
          </Button>
        </div>
      </div>
    </div>
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
