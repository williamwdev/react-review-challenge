import React, { useState, useEffect } from 'react';

/** The Challenge: Add Two Numbers
 * Store input numbers
 * Add numbers
 * Display the sum on the page
 */

export default function Calculator(props) {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState(number1 + number2);

  function calculateTotal() {
    setSum(number1 + number2);
  }

  return (
    <div className="calculator-container">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        />
      </div>

      <button onClick={calculateTotal}>Add Them!</button>

      <h2>{sum}</h2>
    </div>
  );
}
