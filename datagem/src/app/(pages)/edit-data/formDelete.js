"use client";

import { useState, useEffect } from "react";
import { deleteData } from "./queries/editData.js";
import Link from "next/link";

const DelForm = ({ Product, user }) => {
  // Function to handle the button click and store the input text in a variable
  const handleButtonClick = async () => {
    // Update the companyNameInput variable with the current input value
    await deleteData(Product, user);
    // localStorage.se  tItem("local_storage_company_name", inputValue);
    window.location.reload();
  };

  //   useEffect to log the companyNameInput value when it changes
  // useEffect(() => {
  //   deleteData(Product, user);
  // }, [Product]);

  return (
    <Link href="/my-data">
      <button
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-3"
        onClick={handleButtonClick}
      >
        Delete Product
      </button>
    </Link>
  );
};

export default DelForm;
