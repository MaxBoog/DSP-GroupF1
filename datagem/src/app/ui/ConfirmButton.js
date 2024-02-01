"use client";

import Link from "next/link";
import { insertCompanies } from "../(pages)/signup/1/queries/insert_query";

export default function ConfirmButton({ user }) {
  // console.log(user);
  const handleClick = async () => {
    await insertCompanies(user); // Pass the user object correctly
  };
  return (
    <Link href="/signup/2">
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-3"
        onClick={handleClick}
      >
        Confirm & Create my network
      </button>
    </Link>
  );
}
