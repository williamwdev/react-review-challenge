import React, { useState } from 'react';

/** The Challenge: Move a Box Up
 * Create a state variable to hold the value of the transformation points
 * Handle an event which increments or decrements the transformation points
 * Bind the transformation using inline CSS to the created box
 */

export default function Movement() {
  const [yAxis, setYAxis] = useState(300);

  function moveBoxUp() {
    setYAxis(yAxis - 50);
  }

  return (
    
    <div className="movement-container">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={{
        transform: `translateY(${yAxis}px)`
      }} />
    </div>
  );
}
