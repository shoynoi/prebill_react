import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessages from './ErrorMessages';

const ValidationErrors = (props) => {
  const { errorMessages } = props;
  if (errorMessages.length === 0) {
    return null;
  }

  return (
    <div className="errors">
      <h3 className="errors__title">入力内容にエラーがありました。</h3>
      <div className="errors__body">
        <ul className="errors__items">
          <ErrorMessages errorMessages={errorMessages} />
        </ul>
      </div>
    </div>
  );
};

export default ValidationErrors;

ValidationErrors.propTypes = {
  errorMessages: PropTypes.arrayOf(PropTypes.string),
};

ValidationErrors.defaultProps = {
  errorMessages: [],
};
