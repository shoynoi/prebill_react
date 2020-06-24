import React from 'react';
import { render } from 'react-dom';
import NewService from '../../components/NewService';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <NewService />,
    document.querySelector('#root'),
  );
});
