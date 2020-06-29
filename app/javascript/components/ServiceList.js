import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services }) => {
  if (services.length === 0) {
    return null;
  }

  return (
    services.map((service) => (
      <ServiceItem service={service} key={service.id} />
    ))
  );
};

export default ServiceList;
