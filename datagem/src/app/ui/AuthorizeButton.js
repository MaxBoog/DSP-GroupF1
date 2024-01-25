import { getAccess } from "../(pages)/my-data/insert_accessdata";
import Link from "next/link";

const AuthorizeButton = ({ selected_authorized }) => {
  const handleButtonClick = (selected) => {
    getAccess(selected);
  };

  return (
    <Link href="/signup/3">
      <button
        className="rounded-md mx-1 max-w-36 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handleButtonClick(selected_authorized)}
      >
        Authorize selected companies
      </button>
    </Link>
  );
};

export default AuthorizeButton;
