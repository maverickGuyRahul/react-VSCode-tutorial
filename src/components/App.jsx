import React, { useState } from 'react';

// let count = 0;

function App() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputBoxName = event.target.name;
  }

  // function updateHeadingText() {
  //   setHeadingText('Hello ' + userName);
  // }

  // function handleSubmit(event) {
  //   setHeadingText('Hello ' + userName);

  //   event.preventDefault();
  // }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName};
      </h1>
      <form>
        <input
          name="fName"
          type="text"
          placeholder="What is your first name?"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="What is your first name?"
          onChange={handleChange}
          value={fullName.fName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
