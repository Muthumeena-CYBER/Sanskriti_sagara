import React from "react";
import "./LearnColorsTelugu.css";

const colors = [
  { name: "लाल", english: "Red", file: "लाल", color: "red" },
  { name: "नीला", english: "Blue", file: "नीला", color: "blue" },
  { name: "हरा", english: "Green", file: "हरा", color: "green" },
  { name: "पीला", english: "Yellow", file: "पीला", color: "yellow" },
  // Add more colors as needed
];

const HindiColor = () => {
  const playSound = (color) => {
    const audio = new Audio(`/sounds/${color}.mp3`); // Directly reference the public folder
    audio.play();
  };

  return (
    <div>
      <h1>🎨 Learn Colors in Hindi</h1>
      <div className="container">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-btn"
            onClick={() => playSound(color.file)}
            style={{ backgroundColor: color.color }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HindiColor;