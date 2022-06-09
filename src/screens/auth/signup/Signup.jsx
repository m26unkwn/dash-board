import { IconButton } from "../../../components";
import { GoogleIcon, AppleIcon } from "../../../assets";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../store/provider/auth-provider";
import { SignupForm } from "./form/SignupForm";
import { toast } from "react-toastify";

export const Signup = () => {
  const { auth, signInUsingGoogle } = useAuth();

  const signUpUserApple = () => {
    toast.warning("Apple signup coming soon");
  };
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
            <IconButton
              icon={GoogleIcon}
              text='Sign up with Google'
              onClick={signInUsingGoogle}
            />
            <IconButton
              icon={AppleIcon}
              text='Sign up with Apple'
              onClick={signUpUserApple}
            />
          </div>
          <SignupForm />
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
