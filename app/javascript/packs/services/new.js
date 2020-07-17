import React from 'react';
import { render } from 'react-dom';
import NewService from '../../components/NewService';
import App from '../application/app';
import Header from '../../components/Header';

const New = () => (
  <>
    <Header />
    <App>
      <main className="page">
        <NewService />
      </main>
    </App>
  </>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <New />,
    document.querySelector('#root'),
  );
});
