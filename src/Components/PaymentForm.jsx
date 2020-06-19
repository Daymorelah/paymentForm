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
  const [isValidEntry, setIsValidEntry] = useState(true);
  const [initialPassword, setInitialPassword] = useState('')
  
  return (
    <div id='form-container'>
      <h3>Please fill the form below</h3>
      <form>
        <FullName setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <Email setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <PhoneNumber setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <PasswordField setIsValidEntry={async(isValid, password) => {
          await setIsValidEntry(isValid);
          await setInitialPassword(password)
        }} />
        <ConfirmPassword
          setIsValidEntry={(isValid) => setIsValidEntry(isValid)}
          initialPassword={initialPassword}  
        />
        <CardNumber setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <CardExpirationDate setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <CardPin setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        {
          isValidEntry ? (
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
  history: PropTypes.func.isRequired,
};

export default PaymentForm;
