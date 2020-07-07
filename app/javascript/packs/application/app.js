import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const App = ({ children }) => (
  <>
    <Header />
    <div className="container">
      {children}
    </div>
  </>
);

export default App;

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
