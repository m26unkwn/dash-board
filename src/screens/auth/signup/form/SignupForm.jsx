import { useReducer } from "react";
import { toast } from "react-toastify";
import { Input, PrimaryButton } from "../../../../components";

import { useAuth } from "../../../../store/provider/auth-provider";

import { signupValidation, signUpReducer, signupInitialData } from "../utils";
export const SignupForm = () => {
  const [signupState, dispatch] = useReducer(signUpReducer, signupInitialData);

  const { signUpUser } = useAuth();
  const { firstName, lastName, email, password, confirmPassword } = signupState;

  const signUpUserHandler = (e) => {
    e.preventDefault();
    if (signupValidation(signupState, dispatch)) {
      signUpUser(email, password);
    } else {
      toast.warning("Please Enter All The Fields");
    }
  };

  const onChangeSignup = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  return (
    <form className='auth-form'>
      <div className='user-input'>
        <Input
          type='text'
          label='First Name'
          placholder='Jhon'
          value={firstName}
          onChange={(e) => onChangeSignup(e, "SET_FIRST_NAME")}
        />
        <Input
          type='text'
          label='Last Name'
          placholder='Doe'
          value={lastName}
          onChange={(e) => onChangeSignup(e, "SET_LAST_NAME")}
        />
      </div>
      <Input
        type='text'
        label='Email Address'
        placholder='jhondoe@gmail.com'
        value={email}
        onChange={(e) => onChangeSignup(e, "SET_EMAIL")}
      />
      <Input
        type='password'
        label='Password'
        placholder='********'
        value={password}
        onChange={(e) => onChangeSignup(e, "SET_PASSWORD")}
        eye={true}
      />
      <Input
        type='password'
        label='Confirm Password'
        placholder='********'
        value={confirmPassword}
        onChange={(e) => onChangeSignup(e, "SET_CNFRM_PASSWORD")}
        eye={true}
      />
      <div className='signup-checkbox'>
        <input type='checkbox' />
        <p className='register-link'>
          I agree the <span className='link'>terms and condition</span>
        </p>
      </div>

      <PrimaryButton text='Sign Up' onClick={(e) => signUpUserHandler(e)} />
    </form>
  );
};
