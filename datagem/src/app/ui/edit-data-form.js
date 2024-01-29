"use client";

import { useState, useEffect } from "react";
import { editData } from "../(pages)/edit-data/queries/editData.js";
import Link from "next/link";

const Form = (Product, Info) => {
  // State variable to store the input value

  const [companyNameInput, setcompanyNameInput] = useState("");

  // State variable to track the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle changes in the textbox
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the button click and store the input text in a variable
  const handleButtonClick = () => {
    // Update the companyNameInput variable with the current input value
    editData(Product, Info, companyNameInput);
    localStorage.setItem("local_storage_company_name", inputValue);
    window.location.reload();

  };

  // useEffect to log the companyNameInput value when it changes
  useEffect(() => {
    editData(Product, Info, companyNameInput);
  }, [Product, Info, companyNameInput]);

  return (
    <div className="my-5 rounded">
      <input
        className="rounded text-gray-900"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Your new value"
      />
      <Link href="edit-data">
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-3"
          onClick={handleButtonClick}
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};

export default Form;
