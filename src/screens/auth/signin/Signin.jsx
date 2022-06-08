import { IconButton, Input, PrimaryButton } from "../../../components";
import { GoogleIcon, AppleIcon } from "../../../assets";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className='auth-form-wrapper'>
      <div className='auth-head'>
        <h1 className='auth-head-title'>Signin</h1>
        <p className='auth-head-sub-title'>Sign in to your account</p>
      </div>
      <div className='auth-icon-button'>
        <IconButton icon={GoogleIcon} text='Sign in with Google' />
        <IconButton icon={AppleIcon} text='Sign in with Apple' />
      </div>
      <form className='auth-form'>
        <Input
          type='text'
          label='Email Address'
          placholder='jhondoe@gmail.com'
        />
        <Input type='password' label='Password' placholder='********' />
        <p className='pwd-forget'>Forget password?</p>
        <PrimaryButton text='Sign In' />
      </form>
      <p className='register-link'>
        Don’t have an account?{" "}
        <Link to='/signup' className='link'>
          Register here
        </Link>
      </p>
    </div>
  );
};
