import React from 'react';
import DATA from '../../DATA';

export default function List(props) {
  const renderListOfUsers = DATA.map((user, index) => {
    return (
      <div key={index}>
        <p>{user.name}</p>
        <p>{user.location}</p>
        <p>{user.car}</p>
      </div>
    );
  });

  return (
    <>
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      <div className="users">
        {renderListOfUsers}
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
      </div>
    </>
  );
}
