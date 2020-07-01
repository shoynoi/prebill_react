import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers/service';

const TotalPriceItem = ({ amountPrice, color, children }) => (
  <div className={`card card--${color}`}>
    <div className="card__body">
      <div className="card__title">
        {children}
      </div>
      <div className="card__amount">
        {formatPrice(amountPrice)}
      </div>
    </div>
  </div>
);

export default TotalPriceItem;

TotalPriceItem.propTypes = {
  amountPrice: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
