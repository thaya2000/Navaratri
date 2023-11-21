import React from "react";
import "./App.css"; // Import your styles
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import { Title } from "./components/Title";
import Bubbls from "./components/Bubbls";

function App() {
  return (
    <>
      <Title />
      <Bubbls />
      <Countdown />
    </>
  );
}

export default App;
