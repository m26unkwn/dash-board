import { firebaseAuth } from "../../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const authContext = createContext();

const authToken = sessionStorage.getItem("auth") ? true : false;

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(authToken);

  const navigate = useNavigate();

  // sign in handler using email and password
  const signInUser = async (email, password) => {
    try {
      let response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      setAuth(true);
      sessionStorage.setItem("auth", response.user.accessToken);
      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // signup handler using email and password
  const signUpUser = async (email, password) => {
    try {
      let response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      setAuth(true);
      sessionStorage.setItem("auth", response.user.accessToken);
      toast.success("Signup Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // sign in using google email provider
  const signInUsingGoogle = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, googleProvider);
      setAuth(true);
      sessionStorage.setItem("auth", response.user.accessToken);
      navigate("/dashboard");
      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // logout handler
  const logoutUser = (e) => {
    e.preventDefault();
    setAuth(false);
    sessionStorage.removeItem("auth");
    navigate("/");
    toast.success("Logout Successfully");
  };

  return (
    <authContext.Provider
      value={{ signInUsingGoogle, logoutUser, signInUser, signUpUser, auth }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);
export { AuthProvider, useAuth };
