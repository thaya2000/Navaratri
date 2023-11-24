import React from "react";
import "./App.css"; // Import your styles
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import HomeAnimation from "./components/HomeAnimation";
import Text from "./components/Text";

function App() {
  return (
    <>
      <HomeAnimation />
      <Text />
      <Countdown />
    </>
  );
}

export default App;
