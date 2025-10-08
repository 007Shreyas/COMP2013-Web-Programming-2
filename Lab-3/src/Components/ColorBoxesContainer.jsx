//Date: 2025-10-08
//Project: Lab-3-ColorBox-(Hooks&States in React)
//Author: Shreyas Bhinkah
//FileName: ColorBoxesContainer.jsx
//Description: ColorBoxesContainer component to hold multiple ColorBox components

import ColorBox from './ColorBox';

export default function ColorBoxesContainer({ colors }) {
    
  return (
   <div className="ColorBoxesContainer">
    {colors.map((color, index) => (
        
        <ColorBox colors={colors} key={index} color={color} />

    ))}

   </div>
   
  );
}


