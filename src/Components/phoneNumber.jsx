import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const PhoneNumber = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const validateInputField = () => {
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
