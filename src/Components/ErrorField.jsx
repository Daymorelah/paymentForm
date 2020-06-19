import React from 'react';
import PropTypes from 'prop-types'

const ErrorMessage = ({ message, }) => {
  return (
    <h4 id="error-message">
      {message}
    </h4>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage;
