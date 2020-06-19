import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const PhoneNumber = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const currentInputValue = inputValue.trim();
  const validateInputField = () => {
    if(/[\s\D]/.test(currentInputValue)) {
      return setIsValidEntry(false);
    }
    if(currentInputValue.length !== 11) {
      return setIsValidEntry(false);
    }
    if(currentInputValue[0] !== '0') {
      return setIsValidEntry(false);
    }
    if((currentInputValue[1] < 7) || (currentInputValue[1] > 9) ){
      return setIsValidEntry(false);
    }
    if(currentInputValue[2] > 1) {
      return setIsValidEntry(false);
    }
    if(!currentInputValue.length){
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <FormInput
      type="tel"
      id="phone_number"
      placeHolder="Phone number"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
}

PhoneNumber.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default PhoneNumber;
