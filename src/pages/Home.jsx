import React from "react";
import "./Home.css"; // Import your styles
import Countdown from "../components/Countdown";
import HomeAnimation from "../components/HomeAnimation";
import Text from "../components/Text";

function Home() {
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

export default Home;
