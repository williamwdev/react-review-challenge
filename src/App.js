import React from "react";
import UserProfile from "../src/components/UserProfile/UserProfile";
import List from "../src/components/List/List";
import UserInput from "../src/components/UserInput/UserInput";
import EventHandling from "./components/EventHandling/EventHandling";
import Calculator from "../src/components/Calculator/Calculator";
import Movement from "../src/components/Movement/Movement";
import FetchAPI from "../src/components/FetchAPI/FetchAPI";
import ParentComponent from "./components/PassProps/PassProps";
import Context from "./components/Context/Context";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Context />
      <ParentComponent />
      <FetchAPI />
      <Movement />
      <Calculator />
      <EventHandling />
      <UserInput />
      <UserProfile />
      <List />
    </div>
  );
}

export default App;
