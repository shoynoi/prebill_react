import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import EditService from '../../components/EditService';

const Edit = ({ serviceId }) => (
  <div className="container">
    <main className="page">
      <EditService serviceId={serviceId} />
    </main>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#root');
  const { serviceId } = el.dataset;
  render(
    <Edit serviceId={serviceId} />,
    el,
  );
});

Edit.propTypes = {
  serviceId: PropTypes.string,
};

Edit.defaultProps = {
  serviceId: '',
};
