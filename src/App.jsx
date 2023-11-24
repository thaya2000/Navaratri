import React from "react";
import "./App.css"; // Import your styles
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import HomeAnimation from "./components/HomeAnimation";
import Text from "./components/Text";

function App() {
  return (
    <>
      <div className="overall-container">
        <HomeAnimation />
        <Text />
        <Countdown />
        <div className="endtext">
          <h4>Organized by EFSU</h4>
        </div>
      </div>
    </>
  );
}

export default App;
