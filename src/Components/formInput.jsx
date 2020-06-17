import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  onChange, placeHolder, id, type, value, onBlur,
}) => (
  <input
    type={type}
    id={id}
    onChange={onChange}
    value={value}
    placeholder={placeHolder}
    onBlur={onBlur}
  />
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default FormInput;
