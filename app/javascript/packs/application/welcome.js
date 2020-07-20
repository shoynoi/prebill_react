import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Welcome = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};
