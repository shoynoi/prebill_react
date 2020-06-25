import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  const { errorMessage } = props;

  return (
    <li className="errors__item">
      {errorMessage}
    </li>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorMessage: null,
};
