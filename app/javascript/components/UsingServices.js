import React from 'react';
import PropTypes from 'prop-types';
import ServiceList from './ServiceList';
import ServiceItem from './ServiceItem';
import PageHeader from './PageHeader';
import PageHeaderTitle from './PageHeaderTitle';
import LinkButton from './LinkButton';

const UsingServices = ({ services, onDelete }) => (
  <div className="page-body">
    <PageHeader>
      <PageHeaderTitle>利用中のサービス</PageHeaderTitle>
      <div className="page-body__actions">
        <LinkButton href="/services/new">新規登録</LinkButton>
      </div>
    </PageHeader>
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

UsingServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
