//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [interval, setIntervalN] = useState(0);
  const [color, setColor] = useState('rgb(0,0,0)');
  //const element = [];
  //let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let styleTest = { width: '255px', height: '255px', backgroundColor: color };

  const colorRandom = () => {
    return Math.floor(Math.random() * 255);
  }
  const ChangeHex = (r, g, b) => {
    const colornew = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(colornew);
    return colornew;
  }

  const ColorGene = () => {
    const rgb = {
      r: colorRandom(),
      g: colorRandom(),
      b: colorRandom(),
    };
    return setColor(ChangeHex(rgb.r, rgb.g, rgb.b));
  }

  const changeColor = () => {
    return setIntervalN(setInterval(ColorGene, 800));
  }
  const stopchangeColor = () => {
    return clearInterval(interval);
  }
  const doubleClickStopChange = () => {
    return clearInterval(interval);
  }
  const changeButton = () => {
  }

  return (
    <div className="App App-header">
      <div onMouseOver={changeColor} onMouseLeave={stopchangeColor}
        onDoubleClick={doubleClickStopChange} style={styleTest}></div>
      <h3>Color: {color} </h3>
      <button onClick={changeButton}>Test</button>
    </div>
  );
}

export default App;
