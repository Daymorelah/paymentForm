import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const PasswordField = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(!currentInputValue.length){
      return setIsValidEntry(false, undefined);
    }
    if( !(/[A-Z0-9]+/.test(currentInputValue)) ){
      setErrorMessage('Password must contain at least one uppercase character and a number');
      setShowError(true);
      return setIsValidEntry(false, 'password');
    }
    if( !(/[\W_]/.test(currentInputValue)) ){
      setErrorMessage('Password must contain at least one special character');
      setShowError(true);
      return setIsValidEntry(false, 'password');
    }
    if(currentInputValue.length < 6) {
      setErrorMessage('Password must be more than 5 characters');
      setShowError(true);
      return setIsValidEntry(false, 'password');
    }
    return setIsValidEntry(true, 'password', currentInputValue);
  }
  return (
    <>
      <FormInput
        type="password"
        id="password"
        placeHolder="Password"
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
          setShowError(false);
        }}
        onBlur={() => validateInputField()}
      />
      {showError ? <ErrorField message={errorMessage} /> : null}
    </>
  );
}

PasswordField.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default PasswordField;
