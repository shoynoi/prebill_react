import React from 'react';
import ServiceList from './ServiceList';
import ServiceItem from './ServiceItem';

const UsingServices = ({ services, onDelete }) => (
  <div className="page-body">
    <h3 className="page-body__header">利用中のサービス</h3>
    <div className="page-body__actions">
      <a href="/services/new">新規登録</a>
    </div>
    <div className="page-body__inner">
      <ServiceList>
        {services.map((service) => (
          <ServiceItem service={service} onDelete={onDelete} key={service.id} />
        ))}
      </ServiceList>
    </div>
  </div>
);

export default UsingServices;
