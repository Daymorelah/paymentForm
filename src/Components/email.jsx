import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const Email = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(!currentInputValue.length){
      return setIsValidEntry(false, undefined);
    }

    if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(currentInputValue))) {
      setErrorMessage('Please enter a valid email address');
      setShowError(true);
      return setIsValidEntry(false, 'email');
    }

    return setIsValidEntry(true, 'email');
  }

  return (
    <>
      <FormInput 
        type="text"
        id="email"
        placeHolder="Email"
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
};

Email.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default Email;
