import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const setLocation = () => {
        window.location.href = "/";
    };
    const setLocation2 = () => {
        window.location.href = "/counter";
    };
    const setLocation3 = () => {
        window.location.href = "/form";
    };
  return (
    <nav className="navbar">
        <button onClick={setLocation}>Home</button>
        <button onClick={setLocation2}>Counter</button>
        <button onClick={setLocation3}>Application Form</button>
    </nav>
  );
}
