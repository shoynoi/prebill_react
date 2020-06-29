import React from 'react';
import Service from './Service';

const Services = ({ services }) => {
  if (services.length === 0) {
    return null;
  }

  return (
    services.map((service) => (
      <Service service={service} key={service.id} />
    ))
  );
};

export default Services;
