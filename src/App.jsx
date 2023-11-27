import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Import your styles
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/Navaratri/:index" element={<Home />} /> */}
          <Route path="/Navaratri/" element={<Home />} />
          <Route path="/Navaratri/0" element={<Home />} />
          <Route path="/Navaratri/:index" element={<Home />} />
          {/* <Route path="/Navaratri/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
