import React from 'react';
import Heading from './Heading';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let count = 0;

function increase() {
  count++;
  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

function decrease() {
  count--;
  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default App;
