import React, { useState } from 'react';

export default function Events(props) {
  const [input, setInput] = useState('');

  if (input === 'open sesame') {
    alert('You may pass!');
  }

  return (
    <div className="event-container">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={input}
        placeholder="Super duper secret"
        onChange={e => setInput(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}
