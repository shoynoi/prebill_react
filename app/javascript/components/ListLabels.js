import React from 'react';
import ListLabelItem from './ListLabelItem';

const ListLabels = () => (
  <div className="list__labels">
    <ListLabelItem colSize="col-lg">サービス名</ListLabelItem>
    <ListLabelItem colSize="col-sm">プラン</ListLabelItem>
    <ListLabelItem colSize="col-sm">料金</ListLabelItem>
    <ListLabelItem>更新日</ListLabelItem>
    <ListLabelItem>通知日</ListLabelItem>
  </div>
);

export default ListLabels;
