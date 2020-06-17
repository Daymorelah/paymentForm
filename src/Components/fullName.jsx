import React, {useState,} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const FullName = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();

    if(currentInputValue.length < 2) {
      return setIsValidEntry(false);
    }

    if( !(/\s/.test(currentInputValue)) ) {
      return setIsValidEntry(false);
    }

    const arrayOfNames = currentInputValue.split(' ');

    if(arrayOfNames.length !== 2) {
      return setIsValidEntry(false);
    }

    if( (arrayOfNames[0].length < 2) || (arrayOfNames[1].length < 2) ) {
      return setIsValidEntry(false)
    }

    return setIsValidEntry(true);
  }

  return (
    <FormInput 
      type="text"
      id="full_name"
      placeHolder="Full name"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
};

FullName.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default FullName;