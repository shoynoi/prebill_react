import React from 'react';
import { render } from 'react-dom';
import ServiceList from '../../components/ServiceList';
import Flash from '../../components/Flash';

const Index = () => (
  <>
    <Flash />
    <ServiceList />
  </>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
