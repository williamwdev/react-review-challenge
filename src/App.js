import React from 'react';
import UserProfile from '../src/components/UserProfile/UserProfile';
import List from '../src/components/List/List'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <UserProfile/>
      <List/>
    </div>
  );
}

export default App;
