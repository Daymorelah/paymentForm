import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const ConfirmPassword = ({ setIsValidEntry, initialPassword, }) => {
  const [inputValue, setInputValue] = useState('');
  const currentInputValue = inputValue.trim();
  const validateInputField = () => {
    if(currentInputValue !== initialPassword) {
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <FormInput
      type="password"
      id="confirm_password"
      placeHolder="Confirm Password"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
}

ConfirmPassword.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
  initialPassword: PropTypes.string.isRequired,
};


export default ConfirmPassword;
