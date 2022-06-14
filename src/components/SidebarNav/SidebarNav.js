import React from "react";
import "./sidebarNav.css";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data";
import { useAuth } from "../../store/provider/auth-provider";

export const SidebarNav = () => {
  const { logoutUser } = useAuth();
  return (
    <div className='sidebar-content-wrapper'>
      <div className='sidebar-head'>
        <NavLink to='/'>
          <h1>Dash.</h1>
        </NavLink>
      </div>
      <div className='sidebar-nav-items'>
        <div className='nav-items'>
          {navItems.map(({ icon, title, to }) => (
            <NavLink
              key={title}
              to={to}
              className={({ isActive }) => (isActive ? "nav-item-active" : "")}>
              <img src={icon} alt='home_icon' />
              <span className='nav-title'>{title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className='nav-items-end'>
        <button className='logout-btn' onClick={logoutUser}>
          Logout
        </button>
        <p>Contact us</p>
      </div>
    </div>
  );
};
