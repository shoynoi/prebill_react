import React from 'react';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = (props) => {
  const { errorMessages } = props;

  return (
    errorMessages.map((errorMessage, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ErrorMessage errorMessage={errorMessage} key={index} />
    ))
  );
};

export default ErrorMessages;
