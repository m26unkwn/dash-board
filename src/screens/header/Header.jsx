import { Avatar, NotificationIcon, searchIcon } from "../../assets";
import "./header.css";

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-title'>
        <h1>Setting</h1>
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
          <img src={Avatar} alt='user-avatar' />
        </div>
      </div>
    </div>
  );
};
