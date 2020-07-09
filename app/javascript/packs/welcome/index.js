import React from 'react';
import { render } from 'react-dom';
import Welcome from '../application/welcome';
import Flash from '../../components/Flash';

const Index = () => (
  <Welcome>
    <Flash />
    <div>Home#index</div>
  </Welcome>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
