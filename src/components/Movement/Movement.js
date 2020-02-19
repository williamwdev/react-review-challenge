import React from 'react';

/** The Challenge: Move a Box Up
 * Create a state variable to hold the value of the transformation points
 * Handle an event which increments or decrements the transformation points
 * Bind the transformation using inline CSS to the created box
 */

export default function Movement() {
  return (
    <div className="movement-container">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={{}} />
    </div>
  );
}
