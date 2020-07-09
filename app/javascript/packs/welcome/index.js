import React from 'react';
import { render } from 'react-dom';
import Welcome from '../application/welcome';

const Index = () => (
  <Welcome>
    <div>Home#index</div>
  </Welcome>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
