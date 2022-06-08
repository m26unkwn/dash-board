import { Input, PrimaryButton } from "../../components";
import { searchIcon, FilterIcon, AddIcon, Avatar } from "../../assets";
import "./users.css";

export const Users = () => {
  return (
    <div className='account users-container'>
      <div className='users-header'>
        <h2 className='users-title'>User Records</h2>
        <div className='users-filters'>
          <div className='user-search'>
            <Input placholder='Search in table...' type='text' />
            <button>
              <img src={searchIcon} alt='Search-user' />
            </button>
          </div>
          <button className='filter-btn'>
            <img src={FilterIcon} alt='filter' />
            <span>Filter</span>
          </button>
          <button className='btn add-btn'>
            <img src={AddIcon} alt='add' />
            <span>Add</span>
          </button>
        </div>
      </div>
      <table>
        <tr>
          <td>
            <img src={Avatar} />
          </td>
          <td>Robert Thomas</td>
          <td>robert.thomas@gmail.com</td>
          <td>Male</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>
            <img src={Avatar} />
          </td>
          <td>Robert Thomas</td>
          <td>robert.thomas@gmail.com</td>
          <td>Male</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>
            <img src={Avatar} />
          </td>
          <td>Robert Thomas</td>
          <td>robert.thomas@gmail.com</td>
          <td>Male</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>
            <img src={Avatar} />
          </td>
          <td>Robert Thomas</td>
          <td>robert.thomas@gmail.com</td>
          <td>Male</td>
          <td>Admin</td>
        </tr>
      </table>
      <div className='pagination'></div>
    </div>
  );
};
