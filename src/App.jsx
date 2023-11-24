import React from "react";
import "./App.css"; // Import your styles
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import HomeAnimation from "./components/HomeAnimation";

function App() {
  return (
    <>
      <HomeAnimation/>
      <Countdown/>
    </>
  );
}

export default App;
