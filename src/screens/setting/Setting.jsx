import React from "react";
import "./setting.css";
import { ProfileImg } from "../../assets";
import { Profile } from "./profile/Profile";
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
            
        </div>
        <div className='account-security'></div>
        <div className='account-delete'></div>
      </div>
    </div>
  );
};
