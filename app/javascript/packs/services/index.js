import React from 'react';
import { render } from 'react-dom';
import UsingServices from '../../components/UsingServices';
import Flash from '../../components/Flash';

const Index = () => (
  <>
    <Flash />
    <UsingServices />
  </>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
