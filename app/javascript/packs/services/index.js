import React from 'react';
import { render } from 'react-dom';
import Flash from '../../components/Flash';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Flash />,
    document.querySelector('#root'),
  );
});
