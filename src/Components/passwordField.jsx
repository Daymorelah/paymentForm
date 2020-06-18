import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const PasswordField = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const currentInputValue = inputValue.trim();
  const validateInputField = () => {
    if( !(/[A-Z]+[0-9]+/.test(currentInputValue)) ){
      return setIsValidEntry(false);
    }
    if( !(/[\W_]/.test(currentInputValue)) ){
      return setIsValidEntry(false);
    }
    if(currentInputValue.length < 6) {
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <FormInput
      type="tel"
      id="password"
      placeHolder="Password"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
}

PasswordField.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default PasswordField;
