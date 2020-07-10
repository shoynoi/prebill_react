import React from 'react';
import { render } from 'react-dom';
import Welcome from '../application/welcome';
import Login from '../../components/Login';

const New = () => (
  <Welcome>
    <Login />
  </Welcome>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <New />,
    document.querySelector('#root'),
  );
});
export default New;
