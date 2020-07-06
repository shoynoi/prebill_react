import React from 'react';
import { render } from 'react-dom';
import NewUser from '../../components/NewUser';

const New = () => (
  <div className="container">
    <NewUser />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <New />,
    document.querySelector('#root'),
  );
});
