import React, {useState} from 'react';
import FormInput from './formInput';
import Button from './button';
import FullName from './fullName';
import Email from './email';
import PhoneNumber from './phoneNumber';
import PasswordField from './passwordField';

const PaymentForm = () => {
  const [isValidEntry, setIsValidEntry] = useState(false);
  
  return (
    <div id='form-container'>
      <h3>Please fill the form below</h3>
      <form>
        <FullName setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <Email setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <PhoneNumber setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <PasswordField setIsValidEntry={(isValid) => setIsValidEntry(isValid)} />
        <FormInput
          type="password"
          id="confirm_password"
          placeHolder="Confirm password"
          value={''}
          onChange={() => {}}
        />
        <FormInput
          type="number"
          id="card_number"
          placeHolder="Card number"
          value={''}
          onChange={() => {}}
        />
        <FormInput
          type="date"
          id="expiration_date"
          placeHolder="Expiration date"
          value={''}
          onChange={() => {}}
        />
        <FormInput
          type="number"
          id="pin"
          placeHolder="Card pin"
          value={''}
          onChange={() => {}}
        />
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
