import React from 'react';

/** The Challenge: Add Two Numbers
 * Store input numbers
 * Add numbers
 * Display the sum on the page
 */

export default function Calculator(props) {
  return (
    <div className="calculator-container">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" />
        <input type="number" placeholder="0" />
      </div>

      <button>Add Them!</button>

      <h2>0</h2>
    </div>
  );
}
