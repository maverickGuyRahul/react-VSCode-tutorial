import React, { useState } from 'react';

// let count = 0;

function App() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  function updateFName(event) {
    let inputName = event.target.value;
    setFName(inputName);
  }

  function updateLName(event) {
    let inputName = event.target.value;
    setLName(inputName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <input
        type="text"
        placeholder="What is your first name?"
        onChange={updateFName}
        value={fName}
      />
      <input
        type="text"
        placeholder="What is your last name?"
        onChange={updateLName}
        value={lName}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
