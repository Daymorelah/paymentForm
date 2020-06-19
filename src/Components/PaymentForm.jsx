import React, {useState} from 'react';
import Button from './button';
import FullName from './fullName';
import Email from './email';
import PhoneNumber from './phoneNumber';
import PasswordField from './passwordField';
import ConfirmPassword from './confirmPasswordField';
import CardNumber from './cardNumber';
import CardExpirationDate from './cardExpirationDate';
import CardPin from './cardPin';

const PaymentForm = () => {
  const [isValidEntry, setIsValidEntry] = useState(false);
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
              onClick={() => {}}
            />
          ) : null
        }
      </form>
    </div>
  );
};

export default PaymentForm;
