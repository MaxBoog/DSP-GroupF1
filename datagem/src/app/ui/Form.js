"use client";

import { useState, useEffect } from "react";
import { getCompanies } from "../(pages)/my-data/insert_query";

const Form = () => {
  // State variable to store the input value
  const [storedInput, setStoredInput] = useState("");

  // State variable to track the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle changes in the textbox
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the button click and store the input text in a variable
  const handleButtonClick = () => {
    // Update the storedInput variable with the current input value
    setStoredInput(inputValue);
  };

  // useEffect to log the storedInput value when it changes
  useEffect(() => {
    getCompanies(storedInput);
  }, [storedInput]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>Store Input</button>
    </div>
  );
};

export default Form;

// export default function Form() {
//   const [name, setName] = useState("");
//   const [guestList, setGuestList] = useState([]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setGuestList(guestList.push(name));
//     setName("");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={(e) => handleSubmit(e)}>
//         Name to add to the guest list:
//         <input
//           value={name}
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// TextInput.js
// import React, { useState } from 'react';

// const Form = ({ onInputChange }) => {
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     const newText = e.target.value;
//     setInputText(newText);
//     onInputChange(newText); // Notify parent components about the change
//   };

//   return (
//     <input
//       type="text"
//       value={inputText}
//       onChange={handleInputChange}
//       placeholder="Enter text"
//     />
//   );
// };

// export default Form;
