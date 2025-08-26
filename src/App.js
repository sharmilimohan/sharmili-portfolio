import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/Aut";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Video from "./components/Video";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState("#000000"); // Default for light mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#21212aff"; // dark bg
      document.documentElement.style.setProperty(
        "--main-text-color",
        textColor || "#ffffff" // white default, but palette can override
      );
    } else {
      document.body.style.backgroundColor = "#f5f5f5"; // light bg
      document.documentElement.style.setProperty(
        "--main-text-color",
        textColor || "#000000" // palette or black
      );
    }
  }, [darkMode, textColor]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <ThemeSwitcher
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onColorChange={setTextColor}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
