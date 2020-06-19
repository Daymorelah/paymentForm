import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const CardPin = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const currentInputValue = inputValue.trim();
  const validateInputField = () => {
    if(/[^0-9]/.test(currentInputValue)) {
      return setIsValidEntry(false);
    }
    if(currentInputValue.length !== 4) {
      return setIsValidEntry(false);
    }
    if(!currentInputValue.length) {
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <FormInput
      type="text"
      id="pin"
      placeHolder="Card pin"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
}

CardPin.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default CardPin;