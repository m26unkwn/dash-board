import React, { useMemo } from "react";
import { Loader, Table } from "..";
import { nameFilter } from "../../utils";

export const FilterUsers = ({ users, searchQuery, loader }) => {
  const filteredUsers = useMemo(
    () => nameFilter(users, searchQuery),
    [searchQuery, users],
  );
  if (users.length > 0) {
    if (filteredUsers.length > 0) {
      return (
        <table>
          <tbody>
            {filteredUsers.map((user) => (
              <Table key={user.cell} data={user} />
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <div className='table-fallback'>
          <h1 className='no-data'>No Data Found</h1>
        </div>
      );
    }
  } else if (loader) {
    return (
      <div className='table-fallback'>
        <Loader />
      </div>
    );
  }
};
