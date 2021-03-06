import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <>
    <div className="container">
      {children}
    </div>
  </>
);

export default App;

App.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};
