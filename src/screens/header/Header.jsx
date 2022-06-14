import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, NotificationIcon, searchIcon, MenuIcon } from "../../assets";
import { SidebarNav } from "../../components";
import "./header.css";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebarHandler = () => {
    setSidebarOpen(true);
  };

  const hideSidebarHandler = (e) => {
    if (e.target.classList.contains("sidebar-backdrop")) {
      setSidebarOpen(false);
    }
  };

  const { pathname } = useLocation();
  const headerTitle = () => {
    if (pathname === "/setting") {
      return "Setting";
    }
    if (pathname === "/users") {
      return "Users";
    }
    if (pathname === "/dashboard") {
      return "Dashboard";
    }
    if (pathname === "/transaction") {
      return "Transaction";
    }
    if (pathname === "/schedules") {
      return "Schedules";
    }
  };

  return (
    <div className='header-container'>
      <div className='header-title'>
        <h1>{headerTitle()}</h1>
      </div>
      <div className='header-nav-container'>
        <button className='header-menu' onClick={openSidebarHandler}>
          <img src={MenuIcon} alt='menu' />
        </button>
        <div className='header-nav'>
          <div className='header-search'>
            <input type='text' placeholder='Search...' />
            <button>
              <img src={searchIcon} alt='search' />
            </button>
          </div>
          <div className='header-notifcation'>
            <button>
              <img src={NotificationIcon} alt='notification' />
            </button>
          </div>
          <div className='header-avatar'>
            <NavLink to='/setting' className='header-avatar'>
              <img src={Avatar} alt='user-avatar' />
            </NavLink>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div className='sidebar-backdrop' onClick={hideSidebarHandler}>
          <div className='sidebar-mobile-container'>
            <SidebarNav />
          </div>
        </div>
      )}
    </div>
  );
};
