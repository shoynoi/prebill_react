import React from 'react';
import { render } from 'react-dom';
import NewUser from '../../components/NewUser';
import Welcome from '../application/welcome';

const New = () => (
  <Welcome>
    <NewUser />
  </Welcome>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <New />,
    document.querySelector('#root'),
  );
});
