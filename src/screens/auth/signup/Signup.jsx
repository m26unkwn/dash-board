import { IconButton, Input, PrimaryButton } from "../../../components";
import { GoogleIcon, AppleIcon } from "../../../assets";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../store/provider/auth-provider";

export const Signup = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth ? (
        <Navigate to='/dashboard' />
      ) : (
        <div className='auth-form-wrapper'>
          <div className='auth-head'>
            <h1 className='auth-head-title'>Create an account</h1>
            <p className='auth-head-sub-title'>
              Create an account to use dashboard
            </p>
          </div>
          <div className='auth-icon-button'>
            <IconButton icon={GoogleIcon} text='Sign up with Google' />
            <IconButton icon={AppleIcon} text='Sign up with Apple' />
          </div>
          <form className='auth-form'>
            <div className='user-input'>
              <Input type='text' label='First Name' placholder='Jhon' />
              <Input type='text' label='Last Name' placholder='Doe' />
            </div>
            <Input
              type='text'
              label='Email Address'
              placholder='jhondoe@gmail.com'
            />
            <Input type='password' label='Password' placholder='********' />
            <Input
              type='password'
              label='Confirm Password'
              placholder='********'
            />

            <PrimaryButton text='Sign Up' />
          </form>
          <p className='register-link'>
            Already have an account?{" "}
            <Link to='/' className='link'>
              Sign in here
            </Link>
          </p>
        </div>
      )}
    </>
  );
};
