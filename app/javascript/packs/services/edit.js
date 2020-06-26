import React from 'react';
import { render } from 'react-dom';
import EditService from '../../components/EditService';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#root');
  const { serviceId } = el.dataset;
  render(
    <EditService serviceId={serviceId} />,
    el,
  );
});
