import { Input, PrimaryButton, Table } from "../../components";
import { searchIcon, FilterIcon, AddIcon, Avatar } from "../../assets";
import "./users.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    (async function () {
      try {
        setLoader(true);
        let {
          data: { results },
        } = await axios.get(
          `https://randomuser.me/api/?page=${index}&results=10&seed=abc`,
        );
        setLoader(false);
        setUsers(results);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    })();
  }, []);

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

      {users.length > 0 ? (
        <table>
          <tbody>
            {users.map((user) => (
              <Table key={user.cell} data={user} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Loading</h1>
      )}

      <div className='pagination'></div>
    </div>
  );
};
