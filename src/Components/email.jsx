import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

const Email = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(currentInputValue)) {
      return setIsValidEntry(true);
    }
    if(!currentInputValue.length){
      return setIsValidEntry(false);
    }
    return setIsValidEntry(false)
  }

  return (
    <FormInput 
      type="text"
      id="email"
      placeHolder="Email"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      onBlur={() => validateInputField()}
    />
  );
};

Email.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default Email;
