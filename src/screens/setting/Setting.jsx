import React from "react";
import "./setting.css";
import { ProfileImg } from "../../assets";
import { Profile } from "./profile/Profile";
import { Account } from "./account/Account";
export const Setting = () => {
  return (
    <div className='setting-container'>
      <div className='profile'>
        <h2 className='profile-title'>Profile</h2>
        <div className='profile-info-container'>
          <div className='profile-info'>
            <img src={ProfileImg} alt='user-profile' />
            <button>Change</button>
          </div>
          <div className='profile-form'>
            <Profile />
          </div>
        </div>
      </div>
      <div className='account-container'>
        <div className='account'>
          <h2 className='account-title'>Account</h2>
          <Account />
        </div>
        <div className='account account-security'>
          <h2 className='account-title'>Security</h2>
          <div className='security'>
            <p>2-Step Verification</p>
            <label class='toggle-button'>
              <input type='checkbox' />
              <span class='slider round'></span>
            </label>
          </div>
        </div>
        <div className=' account account-delete'>
          <h2 className='account-title'>Danger Zone</h2>
          <button>Delete My Account</button>
        </div>
      </div>
    </div>
  );
};
