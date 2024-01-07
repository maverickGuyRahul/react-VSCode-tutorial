import React from 'react';

function strike() {
  document.getElementById('root').style.textDecoration = 'line-through';
}

function disableStrike() {
  document.getElementById('root').style.textDecoration = 'none';
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={strike}> done </button>
      <button onClick={disableStrike}> undo </button>
    </div>
  );
}

export default App;
