import React from 'react';
import DATA from '../../DATA';

/** The Challenge: Loop Over an Array
 * Use the .map() method to render data
 * Parse and display data in an array of objects
 */

export default function List(props) {
  const renderListOfUsers = DATA.map((user, index) => {
    return (
      // Each card must have a 'key' attribute
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
      </div>
    </>
  );
}
