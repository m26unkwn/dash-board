import React from "react";
import { Input, PrimaryButton } from "../../../components";

export const Profile = () => {
  return (
    <form>
      <div className='user-input'>
        <Input type='text' label='First Name' placholder='Jhon' />
        <Input type='text' label='Last Name' placholder='Doe' />
      </div>
      <Input type='date' label='Date of Birth' placholder='MM/DD/YYYY' />
      <Input
        type='tel'
        label='Password'
        placholder='904154825'
        pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
        required
      />
      <Input
        type='text'
        label='Address'
        placholder='323 Fifth Ave. Canandaigua, NY'
      />
      <div className='form-btn'>
        <PrimaryButton text='Save' />
      </div>
    </form>
  );
};
