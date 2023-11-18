import React, { useEffect } from "react";
import "./App.css"; // Import your styles

function App() {
  useEffect(() => {
    $(".sakura-falling").sakura();
  }, []);

  return (
    <>
      <div className="sakura-falling"></div>
    </>
  );
}

export default App;
