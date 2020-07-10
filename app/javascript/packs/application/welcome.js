import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Welcome = ({ children }) => (
  <>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </>
);

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
};
