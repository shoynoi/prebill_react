import React from 'react';

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
