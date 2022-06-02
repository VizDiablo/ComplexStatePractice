import React, { useState } from "react";

function App() {
  ///Before
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // function updateFName(event) {
  //   setFName(event.target.value);
  // }

  // function updateLName(event) {
  //   setLName(event.target.value);
  // }

  // return (
  //   <div className="container">
  //     <h1>
  //       Hello {fName} {lName}
  //     </h1>
  //     <form>
  //       <input onChange={updateFName} name="fName" placeholder="First Name" />
  //       <input onChange={updateLName} name="lName" placeholder="Last Name" />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

  ///After
  const [fullName, updateFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleNameChange(event) {
    // const sender = event.target.name;
    // const newValue = event.target.value;
    const { value: newValue, name: sender } = event.target;

    updateFullName((previousValue) => {
      if (sender === "fName") {
        return {
          fName: newValue,
          lName: previousValue.lName
        };
      } else if (sender === "lName") {
        return {
          fName: previousValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleNameChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleNameChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
