import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'linkifyjs/react';
import { formatDate, formatPlan, formatPrice } from '../helpers/service';
import './ServiceItem.css';

const ServiceItem = ({ service, onDelete }) => (
  <div className="list">
    <div className="list--display">
      <div className="list-item col-lg">{service.name}</div>
      <div className="list-item col-sm">{formatPlan(service.plan)}</div>
      <div className="list-item col-sm">{formatPrice(service.price)}</div>
      <div className="list-item__renewal">
        <span className="list-item__renewal-text">{formatDate(service.renewed_on)}</span>
      </div>
      <div className="list-item__remind">
        <span className="list-item__remind-text">{formatDate(service.remind_on)}</span>
      </div>
      <div className="list--expandable">
        <div className="list-item">
          <Linkify className="list-item__memo" tagName="p" options={{ target: '_blank' }}>{service.description}</Linkify>
        </div>
        <div className="list__actions">
          <div className="list__action">
            <a href={`services/${service.id}/edit`} className="btn--full btn--sm btn--secondary">修正</a>
          </div>
          <div className="list__action">
            <button type="button" onClick={() => onDelete(service.id)}>削除</button>
          </div>
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
