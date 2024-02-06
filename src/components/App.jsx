import React, { useState } from 'react';

// let count = 0;

function App() {
  const [userName, setUserName] = useState('');
  const [headingText, setHeadingText] = useState('Hello');

  function updateUserName(event) {
    setUserName(event.target.value);
  }
  function updateHeadingText() {
    setHeadingText('Hello ' + userName);
  }

  function handleSubmit(event) {
    setHeadingText('Hello ' + userName);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is your first name?"
          onChange={updateUserName}
          value={userName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
