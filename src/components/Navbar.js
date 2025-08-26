import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/video">Video</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
  );
}
