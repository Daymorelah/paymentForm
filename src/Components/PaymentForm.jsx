import React from 'react';
import FormInput from './formInput';
import Button from './button';

const PaymentForm = () => (
  <div id='form-container'>
    <h3>Please fill the form below</h3>
    <form>
      <FormInput 
        type="text"
        id="full_name"
        placeHolder="Full name"
        value={''}
        onChange={() => {}}     
      />
      <FormInput
        type="email"
        id="email"
        placeHolder="Email"
        value={''}
        onChange={() => {}}
      />
      <FormInput
        type="tel"
        id="phone_number"
        placeHolder="Phone number"
        value={''}
        onChange={() => {}}
      />
      <FormInput
        type="password"
        id="password"
        placeHolder="Password"
        value={''}
        onChange={() => {}}
      />
      <FormInput
        type="password"
        id="password"
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
      <Button
        value='Submit'
        id='submit_button'
        onClick={() => {}}
      />
    </form>
  </div>
);

export default PaymentForm;
