import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';

const Welcome = ({ children }) => (
  <>
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
