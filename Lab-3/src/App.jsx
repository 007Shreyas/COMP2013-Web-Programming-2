//Date: 2025-10-08
//Project: Lab-3-ColorBox-(Hooks&States in React)
//Author: Shreyas Bhinkah
//FileName: App.jsx
//Description: App's Main content

import './App.css';
import ColorBoxesContainer from './Components/ColorBoxesContainer';
import data from './data/data';


function App() {
  
  return (
    <>
     
     <ColorBoxesContainer colors={data} />

    </>
  );
}

export default App;
