"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="block px-4 py-2 text-left text-sm w-full text-gray-700 hover:bg-gray-100"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
