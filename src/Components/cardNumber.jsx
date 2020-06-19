import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const CardNumber = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const handleCardInput = (number) => {
    if(((inputValue.length + 1) % 5) === 0) {
      const newValue = inputValue+' '+number[number.length-1]
      return setInputValue(newValue);
    }
    return setInputValue(number);
  }
  const validateInputField = () => {
    const currentInputValue = inputValue.split(' ').join('');
    if(/[^0-9]/.test(currentInputValue)) {
      setInputValue('');
      setErrorMessage('Card number must contain only digits');
      setShowError(true);
      return setIsValidEntry(false);
    }
    if(!inputValue.length){
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <>
      <FormInput
        type="text"
        id="card_number"
        placeHolder="Card number"
        value={inputValue}
        onChange={event => {
          handleCardInput(event.target.value)
          setShowError(false);
        }}
        onBlur={() => validateInputField()}
        maxLength="19"
        size="19"
      />
      {showError ? <ErrorField message={errorMessage} /> : null}
    </>
  );
}

CardNumber.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default CardNumber;
