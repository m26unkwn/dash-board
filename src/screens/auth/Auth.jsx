import React from "react";
import { useLocation } from "react-router-dom";
import "./auth.css";
import { Signin } from "./signin/Signin";
import { Signup } from "./signup/Signup";
export const Auth = () => {
  const { pathname } = useLocation();

  return (
    <main className='auth-container'>
      <section className='auth-sidebar'>
        <div className='auth-siderbar-content'>Dash.</div>
      </section>
      <section className='auth-form-container'>
        {pathname === "/signup" ? <Signup /> : <Signin />}
      </section>
    </main>
  );
};
