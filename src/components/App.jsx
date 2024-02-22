import React, { useState } from 'react';

// let count = 0;

function App() {
  const [contactDetails, setContactDetails] = useState({
    fName: '',
    lName: '',
    email: '',
  });

  function handleChange(event) {
    const { value, name } = event.target;

    // if (inputBoxName === 'fName') {
    //   setContactDetails({ fName: newValue });
    // } else if (inputBoxName === 'lName') {
    //   setContactDetails({ lName: newValue });
    // }

    setContactDetails((previousValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: previousValue.lName,
          email: previousValue.email,
        };
      } else if (name === 'lName') {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email,
        };
      } else if (name === 'email') {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value,
        };
      }
    });
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
        Hello {contactDetails.fName} {contactDetails.lName}
      </h1>
      <h3> {contactDetails.email} </h3>
      <form>
        <input
          name="fName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={contactDetails.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={contactDetails.lName}
        />
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          onChange={handleChange}
          value={contactDetails.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
