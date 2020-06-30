import React from 'react';
import PropTypes from 'prop-types';

const TotalPriceItem = ({ amountPrice, color, children }) => (
  <div className={`card card--${color}`}>
    <div className="card__body">
      <div className="card__title">
        {children}
      </div>
      <div className="card__amount">
        {amountPrice()}
      </div>
    </div>
  </div>
);

export default TotalPriceItem;

TotalPriceItem.propTypes = {
  amountPrice: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
