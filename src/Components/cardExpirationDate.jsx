import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const CardExpirationDate = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleOnChange = (value) => {
    if(inputValue.length === 2 && (inputValue[inputValue.length-1] !== '/')) {
      return setInputValue(inputValue+'/'+value[value.length-1]);
    }
    return setInputValue(value);
  }
  const validateInputField = () => {
    const currentInputValue = inputValue.trim().split('/');
    if(/[^0-9/]/.test(currentInputValue.join(''))){
      return setIsValidEntry(false);
    }
    if(parseInt(currentInputValue[0], 10) > 12){
      return setIsValidEntry(false);
    }
    if(parseInt(currentInputValue[0], 10) < 1){
      return setIsValidEntry(false);
    }
    if(!inputValue.length){
      return setIsValidEntry(false);
    }
    return setIsValidEntry(true);
  }
  return (
    <FormInput
      type="text"
      id="expiration_date"
      placeHolder="Expiration date"
      value={inputValue}
      onChange={event => handleOnChange(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
}

CardExpirationDate.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default CardExpirationDate;