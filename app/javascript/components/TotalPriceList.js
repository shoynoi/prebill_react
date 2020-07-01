import React from 'react';
import PropTypes from 'prop-types';
import TotalPriceItem from './TotalPriceItem';
import { calcAnnualTotalAmount, monthlyAverageAmount } from '../helpers/service';

const TotalPriceList = ({ services }) => (
  <div className="card-container">
    <TotalPriceItem color="yellow" amountPrice={() => monthlyAverageAmount(services)}>
      月平均利用額
    </TotalPriceItem>
    <TotalPriceItem color="green" amountPrice={() => calcAnnualTotalAmount(services)}>
      年間合計額
    </TotalPriceItem>
  </div>
);

TotalPriceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TotalPriceList;
