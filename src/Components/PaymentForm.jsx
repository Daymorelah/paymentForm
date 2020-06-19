import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import FullName from './fullName';
import Email from './email';
import PhoneNumber from './phoneNumber';
import PasswordField from './passwordField';
import ConfirmPassword from './confirmPasswordField';
import CardNumber from './cardNumber';
import CardExpirationDate from './cardExpirationDate';
import CardPin from './cardPin';


const PaymentForm = (props) => {
  const [initialPassword, setInitialPassword] = useState('');
  const [arrayOfValidFields, setNumberOfValidFields] = useState([]);
  const handleSetNumberOfValidFields = (isValid, validField) => {
    if(isValid) {
      const newFiled = {};
      newFiled[validField] = true;
      return setNumberOfValidFields([...arrayOfValidFields, newFiled])
    }
    if(!isValid && (validField !== undefined)) {
      const newArray = [];
      arrayOfValidFields.forEach(field => { 
        if(Object.keys(field)[0] !== validField) newArray.push(field);
      });
      setNumberOfValidFields(newArray)
    }
  }
  return (
    <div id='form-container'>
      <h3>Please fill the form below</h3>
      <form>
        <FullName setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        <Email setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        <PhoneNumber setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        <PasswordField setIsValidEntry={async(isValid, validField, password) => {
          await handleSetNumberOfValidFields(isValid, validField);
          await setInitialPassword(password)
        }} />
        <ConfirmPassword
          setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)}
          initialPassword={initialPassword}  
        />
        <CardNumber setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        <CardExpirationDate setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        <CardPin setIsValidEntry={(isValid, validField) => handleSetNumberOfValidFields(isValid, validField)} />
        {console.log(arrayOfValidFields)}
        {
          (arrayOfValidFields.length === 8) ? (
            <Button
              value='Submit'
              id='submit_button'
              onClick={() => props.history.push('/dashboard')}
            />
          ) : null
        }
      </form>
    </div>
  );
};

PaymentForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number, PropTypes.string, PropTypes.func, PropTypes.object
  ])).isRequired,
};

export default PaymentForm;
