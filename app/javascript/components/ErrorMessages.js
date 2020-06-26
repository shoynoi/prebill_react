import React from 'react';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = (props) => {
  const { errorMessages } = props;

  return (
    errorMessages.map((errorMessage, index) => (
      <ErrorMessage errorMessage={errorMessage} key={index} />
    ))
  );
};

export default ErrorMessages;
