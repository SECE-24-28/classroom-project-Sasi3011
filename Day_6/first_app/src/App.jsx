import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Counter from "./Counter";
import Body from "./Body";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2><center>Welcome Home 👋</center></h2>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Body />} />
      </Routes>
    </Router>
  );
}

export default App;
