import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import EditService from '../../components/EditService';
import App from '../application/app';
import Header from '../../components/Header';

const Edit = ({ serviceId }) => (
  <>
    <Header />
    <App>
      <main className="page">
        <EditService serviceId={serviceId} />
      </main>
    </App>
  </>
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
