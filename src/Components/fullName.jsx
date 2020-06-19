import React, {useState,} from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import ErrorField from './ErrorField';

const FullName = ({ setIsValidEntry, }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const validateInputField = () => {
    const currentInputValue = inputValue.trim();
    if(!currentInputValue.length){
      return setIsValidEntry(false, undefined);
    }

    if(currentInputValue.length < 2) {
      setErrorMessage('First name should be more than two characters');
      setShowError(true);
      return setIsValidEntry(false, 'name');
    }

    if( !(/\s/.test(currentInputValue)) ) {
      setErrorMessage('There must be a space between fist name and last name');
      setShowError(true);
      return setIsValidEntry(false, 'name');
    }

    const arrayOfNames = currentInputValue.split(' ');

    if(arrayOfNames.length !== 2) {
      setErrorMessage('You must enter a first name and a last name');
      setShowError(true);
      return setIsValidEntry(false, 'name');
    }

    if( (arrayOfNames[0].length < 2) || (arrayOfNames[1].length < 2) ) {
      setErrorMessage('Both first name and last name must be more than two characters');
      setShowError(true);
      return setIsValidEntry(false, 'name')
    }

    return setIsValidEntry(true, 'name');
  }

  return (
    <>
      <FormInput 
        type="text"
        id="full_name"
        placeHolder="Full name"
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

FullName.propTypes = {
  setIsValidEntry: PropTypes.func.isRequired,
};

export default FullName;