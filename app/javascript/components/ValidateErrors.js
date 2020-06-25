import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

const ValidateErrors = (props) => {
  const { errorMessages } = props;
  if (errorMessages.length === 0) {
    return null;
  }

  const message = (errorMessage, index) => (
    <ErrorMessage key={`error-${index}`} errorMessage={errorMessage} />
  );
  const listErrorMessages = errorMessages.map((errorMessage, index) => (
    message(errorMessage, index)
  ));

  return (
    <div className="errors">
      <h3 className="errors__title">入力内容にエラーがありました。</h3>
      <div className="errors__body">
        <ul className="errors__items">
          {listErrorMessages}
        </ul>
      </div>
    </div>
  );
};

export default ValidateErrors;

ValidateErrors.propTypes = {
  errorMessages: PropTypes.arrayOf(PropTypes.string),
};

ValidateErrors.defaultProps = {
  errorMessages: [],
};
