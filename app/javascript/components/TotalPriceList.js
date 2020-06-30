import React from 'react';
import TotalPriceItem from './TotalPriceItem';
import { annualTotalAmount, monthlyAverageAmount } from '../helpers/service';

const TotalPriceList = ({ services }) => (
  <div className="card-container">
    <TotalPriceItem color="yellow" amountPrice={() => monthlyAverageAmount(services)}>
      月平均利用額
    </TotalPriceItem>
    <TotalPriceItem color="green" amountPrice={() => annualTotalAmount(services)}>
      年間合計額
    </TotalPriceItem>
  </div>
);

export default TotalPriceList;
