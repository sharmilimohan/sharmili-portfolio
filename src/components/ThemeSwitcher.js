import React, { useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";

const colors = ["#6269c8", "#b54bc0", "#188d82", "#b01e3c"];

export default function ThemeSwitcher({ darkMode, setDarkMode, onColorChange }) {
  const [showColors, setShowColors] = useState(false);

  return (
    <div className="theme-switcher">
      <button className="palette-btn" onClick={() => setShowColors(!showColors)}>
        <Palette size={20} />
      </button>

      {showColors && (
        <div className="color-options">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
              onClick={() => {
                onColorChange(color);
                setShowColors(false);
              }}
            />
          ))}
        </div>
      )}

      {/* Dark/Light mode */}
      <button className="mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
