import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  onChange, placeHolder, id, type, value, onBlur,
  maxLength, size, onKeyDown,
}) => (
  <input
    type={type}
    id={id}
    onChange={onChange}
    value={value}
    placeholder={placeHolder}
    onBlur={onBlur}
    maxLength={maxLength}
    size={size}
    onKeyDown={onKeyDown}
  />
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  maxLength: PropTypes.string,
  size: PropTypes.string,
  onKeyDown: PropTypes.func,
};

export default FormInput;
