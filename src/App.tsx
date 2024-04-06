import React, { useEffect } from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import Terminal from './Terminal';
import Typewriter from './TypeWriter';

function App() {
  return (
    
    <div>
      {/* <Typewriter text="Test" speed={50}/> */}
      <Terminal></Terminal>
    </div>
  );
}

export default App;
