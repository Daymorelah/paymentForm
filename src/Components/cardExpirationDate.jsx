import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const CardExpirationDate = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  
  const handleOnChange = (value) => {
    if(inputValue.length === 2 && (inputValue[inputValue.length-1] !== '/')) {
      return setInputValue(inputValue+'/'+value[value.length-1]);
    }
    return setInputValue(value);
  }
  const validateInputField = () => {
    const currentInputValue = inputValue.trim().split('/');
    if(!inputValue.length){
      return setIsValidEntry(false, undefined);
    }
    if(/[^0-9/]/.test(currentInputValue.join(''))){
      setErrorMessage('Date must contain numbers only');
      setShowError(true);
      return setIsValidEntry(false, 'card expiry');
    }
    if(parseInt(currentInputValue[0], 10) > 12){
      setErrorMessage('Date must contain a valid month');
      setShowError(true);
      return setIsValidEntry(false, 'card expiry');
    }
    if(parseInt(currentInputValue[0], 10) < 1){
      setErrorMessage('Date must contain a valid month');
      setShowError(true);
      return setIsValidEntry(false, 'card expiry');
    }
    return setIsValidEntry(true, 'card expiry');
  }
  return (
    <>
      <FormInput
        type="text"
        id="expiration_date"
        placeHolder="Expiration date"
        value={inputValue}
        onChange={event => {
          handleOnChange(event.target.value);
          setShowError(false);
        }}
        onBlur={() => validateInputField()}
        maxLength="5"
        onKeyDown={event => {
          if (event.key === 'Backspace') return setInputValue('')
        }}
      />
      {showError ? <ErrorField message={errorMessage} /> : null}
    </>
  );
}

CardExpirationDate.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default CardExpirationDate;