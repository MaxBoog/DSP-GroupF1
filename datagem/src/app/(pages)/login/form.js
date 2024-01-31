"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(""); // Reset error message on new submission
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        className="border border-black text-black"
        type="email"
      />
      <input
        name="password"
        className="border border-black text-black"
        type="password"
      />
      {loginError && <div className="text-red-500">{loginError}</div>}
      <button type="submit">Login</button>
      <Link href={"/signup"}>
        <button>Don't have an account? Sign up!</button>
      </Link>
    </form>
  );
}
