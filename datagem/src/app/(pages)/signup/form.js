"use client";

import Image from "next/image";
import Button from "@/app/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submission
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        company_name: formData.get("company_name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
    const data = await response.json();

    if (data.error) {
      if (data.code === "23505") {
        // Handle duplicate email error
        setErrorMessage("Email already exists");
      } else {
        // Handle other errors
        setErrorMessage(data.message || "An error occurred");
      }
    } else {
      // Handle success

      router.push("/login");
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 mx-auto max-w-md bg-indigo-900 p-5 rounded my-10 sm:my-36"
    >
      <h1 className="mx-auto text-gray-100 text-xl">
        Sign Up to become part of DataGem{" "}
        <Image className="inline" src="/gem.png" width={35} height={35} />
      </h1>
      <input
        name="company_name"
        className="border rounded text-black"
        type="text"
      />
      <input name="email" className="border rounded text-black" type="email" />
      <input
        name="password"
        className="border rounded text-black"
        type="password"
      />
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p> // Display error message
      )}
      <Button type="submit">Register</Button>
      <p className="text-gray-100">
        Already have an account?{" "}
        <Link href={"/signup"}>
          <button className="hover:text-gray-300"> Log In!</button>
        </Link>
      </p>
    </form>
  );
}
