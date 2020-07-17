import React from 'react';
import { render } from 'react-dom';
import App from '../application/app';
import EditUser from '../../components/EditUser';
import Header from '../../components/Header';

const Edit = () => (
  <>
    <Header />
    <App>
      <main className="page">
        <EditUser />
      </main>
    </App>
  </>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Edit />,
    document.querySelector('#root'),
  );
});
