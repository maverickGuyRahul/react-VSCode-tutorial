import React, { useState } from 'react';
import Heading from './Heading';
import ReactDOM from 'react-dom/client';

// let count = 0;

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, updateTime] = useState(now);

  function showCurrentTime() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
    setInterval(showCurrentTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showCurrentTime}> Start clock </button>
    </div>
  );
}

export default App;
