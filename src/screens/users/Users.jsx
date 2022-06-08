import { Input } from "../../components";
import { searchIcon } from "../../assets";
import "./users.css";

export const Users = () => {
  return (
    <div className='account users-container'>
      <div className='users-header'>
        <h2 className='users-title'>User Records</h2>
        <div className='users-filtes'>
          <div className='user-search'>
            <Input placholder='Search in table...' type='text' />
            <button>
              <img src={searchIcon} alt='Search-user' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
