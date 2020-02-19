import React from 'react';
import UserProfile from '../src/components/UserProfile/UserProfile';
import List from '../src/components/List/List'
import UserInput from '../src/components/UserInput/UserInput'
import Events from '../src/components/Events/Events';
import Calculator from '../src/components/Calculator/Calculator';
import Movement from '../src/components/Movement/Movement';
import './App.css';

function App() {
  return (
    <div className="App">
      <Movement/>
      <Calculator/>
      <Events/>
      <UserInput/>
      <UserProfile/>
      <List/>
    </div>
  );
}

export default App;
