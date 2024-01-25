"use server";

import { getAccess } from "../(pages)/my-data/insert_accessdata";
const AuthorizeButton = ({ selected_authorized }) => {
  const handleButtonClick = (selected) => {
    getAccess(selected);
  };

  return (
    <button onClick={() => handleButtonClick(selected_authorized)}>
      Authorize selected companies
    </button>
  );
};

export default AuthorizeButton;
