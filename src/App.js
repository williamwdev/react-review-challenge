import React from 'react';
import UserProfile from '../src/components/UserProfile/UserProfile';
import List from '../src/components/List/List'
import UserInput from '../src/components/UserInput/UserInput'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <UserInput/>
      <UserProfile/>
      <List/>
    </div>
  );
}

export default App;
