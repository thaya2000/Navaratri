import React from "react";
import "./App.css"; // Import your styles
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Title />
      {/* <Header /> */}
      <Countdown />
    </>
  );
}

export default App;
