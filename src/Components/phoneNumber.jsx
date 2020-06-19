import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const PhoneNumber = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(!currentInputValue.length){
      return setIsValidEntry(false, undefined);
    }
    if(/[\s\D]/.test(currentInputValue)) {
      setErrorMessage('Phone number must contain only numbers and no spaces');
      setShowError(true);
      return setIsValidEntry(false, 'phone number');
    }
    if(currentInputValue.length !== 11) {
      setErrorMessage('Phone number must be 11 digits');
      setShowError(true);
      return setIsValidEntry(false, 'phone number');
    }
    if(currentInputValue[0] !== '0') {
      setErrorMessage('Phone number must start with 0');
      setShowError(true);
      return setIsValidEntry(false, 'phone number');
    }
    if((currentInputValue[1] < 7) || (currentInputValue[1] > 9) ){
      setErrorMessage('Phone number must be a valid Nigerian number e.g. 070, 081, e.t.c');
      setShowError(true);
      return setIsValidEntry(false, 'phone number');
    }
    if(currentInputValue[2] > 1) {
      setErrorMessage('Phone number must be a valid Nigerian number e.g. 070, 081, e.t.c');
      setShowError(true);
      return setIsValidEntry(false, 'phone number');
    }
    return setIsValidEntry(true, 'phone number');
  }
  return (
    <>
      <FormInput
        type="tel"
        id="phone_number"
        placeHolder="Phone number"
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

PhoneNumber.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default PhoneNumber;
