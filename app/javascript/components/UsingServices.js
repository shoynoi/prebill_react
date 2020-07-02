import React from 'react';
import PropTypes from 'prop-types';
import ServiceList from './ServiceList';
import ServiceItem from './ServiceItem';
import PageHeader from './PageHeader';
import PageHeaderTitle from './PageHeaderTitle';
import LinkButton from './LinkButton';

const UsingServices = ({ services, onDelete }) => (
  <>
    <PageHeader>
      <PageHeaderTitle>利用中のサービス</PageHeaderTitle>
      <div className="page-header__action">
        <LinkButton href="/services/new" color="btn--primary" size="btn--md">新規登録</LinkButton>
      </div>
    </PageHeader>
    <ServiceList>
      {services.map((service) => (
        <ServiceItem service={service} onDelete={onDelete} key={service.id} />
      ))}
    </ServiceList>
  </>
);

export default UsingServices;

UsingServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
