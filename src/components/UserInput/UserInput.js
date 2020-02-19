import React, { useState } from 'react';

/** The Challenge: Update Data from Form Input
 * Use an <input> field to accept text
 * Update your UI based on that input field
 * Use React state to automatically update your UI
 * Update data using a form
 */

export default function UserInput(props) {
  // create state variables using useState react hooks
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age} </p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="24"
            onChange={e => setAge(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
