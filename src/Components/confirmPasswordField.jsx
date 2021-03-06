import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const ConfirmPassword = ({ setIsValidEntry, initialPassword, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false, undefined);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(!currentInputValue.length){
      return setIsValidEntry(false);
    }
    if(currentInputValue !== initialPassword) {
      setErrorMessage('Passwords must match');
      setShowError(true);
      return setIsValidEntry(false, 'confirm password');
    }

    return setIsValidEntry(true, 'confirm password');
  }
  return (
    <>
      <FormInput
        type="password"
        id="confirm_password"
        placeHolder="Confirm Password"
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

ConfirmPassword.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
  initialPassword: PropTypes.string,
};


export default ConfirmPassword;
