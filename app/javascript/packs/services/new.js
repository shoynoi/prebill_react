import React from 'react';
import { render } from 'react-dom';
import NewService from '../../components/NewService';

const New = () => (
  <div className="container">
    <main className="page">
      <NewService />
    </main>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <New />,
    document.querySelector('#root'),
  );
});
