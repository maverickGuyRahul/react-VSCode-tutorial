import React, { useState } from 'react';

// let count = 0;

function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMyClick() {
    setHeadingText('Submitted!');
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1> {headingText} </h1>
      <input type="text" placeholder="What is your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? 'black' : '#6bbe92' }}
        onClick={handleMyClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
