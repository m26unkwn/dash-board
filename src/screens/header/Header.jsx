import { NavLink, useLocation } from "react-router-dom";
import { Avatar, NotificationIcon, searchIcon } from "../../assets";
import "./header.css";

export const Header = () => {
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
  );
};
