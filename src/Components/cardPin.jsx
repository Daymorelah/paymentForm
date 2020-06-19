import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const CardPin = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(/[^0-9]/.test(currentInputValue)) {
      setErrorMessage('Card pin must contain numbers only');
      setShowError(true);
      return setIsValidEntry(false);
    }
    if(currentInputValue.length !== 4) {
      setErrorMessage('Card pin mus be 4 digits only.');
      setShowError(true);
      return setIsValidEntry(false);
    }
    if(!currentInputValue.length) {
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <>
      <FormInput
        type="text"
        id="pin"
        placeHolder="Card pin"
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

CardPin.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default CardPin;