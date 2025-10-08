//Date: 2025-10-08
//Project: Lab-3-ColorBox-(Hooks&States in React)
//Author: Shreyas Bhinkah
//FileName: ColorBox.jsx
//Description: ColorBox Component to display individual color box

import { useState } from "react";

export default function ColorBox({ color, colors }) {
  const [boxColor, setBoxColor] = useState(color);

  return (

    <div className="ColorBox" style={{ backgroundColor: boxColor }}
      onClick={() => {       
        const randomNo = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomNo];
        setBoxColor(newColor);
      }}>
    </div>

  );
}
