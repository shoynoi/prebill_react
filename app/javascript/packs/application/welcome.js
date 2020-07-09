import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Flash from '../../components/Flash';
import Header from '../../components/Header';

const Welcome = ({ children }) => (
  <>
    <Header />
    <div className="container">
      <Flash />
      {children}
    </div>
    <Footer />
  </>
);

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
};
