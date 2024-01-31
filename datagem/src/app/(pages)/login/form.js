"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/ui/Button";
import Image from "next/image";

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

    // console.log({ response });
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="mx-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mx-auto max-w-md bg-indigo-900 p-5 rounded my-10 sm:my-36"
      >
        <h1 className="mx-auto text-gray-100 text-2xl">
          Log In to DataGem{" "}
          <Image className="inline" src="/gem.png" width={35} height={35} />
        </h1>
        <input
          name="email"
          className="rounded border text-black"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          className="border border-black text-black"
          type="password"
          placeholder="password"
        />
        {loginError && <div className="text-red-500">{loginError}</div>}
        <Button type="submit">Login</Button>
        <p className="text-gray-100">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"}>
            <button className="hover:text-gray-300"> Sign up!</button>
          </Link>
        </p>
      </form>
    </div>
  );
}
