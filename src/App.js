import React from 'react';
import Users from '../src/STORE';
import './App.css';

function App() {
  const url = `http://twitter.com/@${Users.twitterUsername}`


  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={url} alt="user avatar" />

        <h3>
          <a href="https://github.com/dc5will">{Users.name}</a>
        </h3>

        <p>
          <strong>Location</strong>
          {Users.location}
        </p>

        <p>
          <strong>Eats</strong>
          {Users.foodType}
        </p>

        <p>
          <strong>Age</strong>
          {Users.age}
        </p>

        <p>
          <strong>Likes</strong>
          {Users.likes}
        </p>

        <strong>Twitter</strong>
        <a href={url}>@{Users.twitterUsername}</a>
      </div>
    </div>
  );
}

export default App;
