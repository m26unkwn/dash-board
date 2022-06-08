import React from "react";
import { Input, PrimaryButton } from "../../../components";

export const Account = () => {
  return (
    <form>
      <Input type='text' label='Email Address' placholder='jhondoe@gmail.com' />
      <Input type='password' label='Current Password' placholder='********' />
      <Input type='password' label='New Password' placholder='********' />

      <div className='form-btn'>
        <PrimaryButton text='Save' />
      </div>
    </form>
  );
};
