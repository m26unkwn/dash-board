import { IconButton, Input, PrimaryButton } from "../../../components";
import { GoogleIcon, AppleIcon } from "../../../assets";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../store/provider/auth-provider";

export const Signin = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { auth } = useAuth();

  const { signInUser, signInUsingGoogle } = useAuth();

  const onChangeLogin = (e, value) => {
    setLoginInfo((prev) => ({ ...prev, [value]: e.target.value }));
  };

  const signinUserHandler = (e, email, password) => {
    e.preventDefault();
    signInUser(email, password);
  };

  return (
    <>
      {auth ? (
        <Navigate to='/dashboard' />
      ) : (
        <div className='auth-form-wrapper'>
          <div className='auth-head'>
            <h1 className='auth-head-title'>Signin</h1>
            <p className='auth-head-sub-title'>Sign in to your account</p>
          </div>
          <div className='auth-icon-button'>
            <IconButton
              icon={GoogleIcon}
              text='Sign in with Google'
              onClick={signInUsingGoogle}
            />
            <IconButton icon={AppleIcon} text='Sign in with Apple' />
          </div>
          <form className='auth-form'>
            <Input
              type='text'
              label='Email Address'
              placholder='jhondoe@gmail.com'
              onChange={(e) => onChangeLogin(e, "email")}
              value={loginInfo.email}
            />
            <Input
              type='password'
              label='Password'
              onChange={(e) => onChangeLogin(e, "password")}
              placholder='********'
            />
            <p className='pwd-forget'>Forget password?</p>
            <PrimaryButton
              text='Sign In'
              onClick={(e) =>
                signinUserHandler(e, loginInfo.email, loginInfo.password)
              }
            />
          </form>
          <p className='register-link'>
            Don’t have an account?
            <Link to='/signup' className='link'>
              Register here
            </Link>
          </p>
        </div>
      )}
    </>
  );
};
