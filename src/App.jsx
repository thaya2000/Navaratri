import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Pages/Home";

function App() {
  console.log("Rendering App component");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Navaratri" element={<Home/>} />
        <Route
          path="/Navaratri/:index"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
