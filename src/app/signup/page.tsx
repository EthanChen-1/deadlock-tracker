"use client";

import { signup } from "./actions";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="h-[calc(100vh-3.5rem)] w-full flex flex-col justify-center items-center">
      <form action={signup} className="flex w-1/6 flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">Create an account</h1>
          <p className="text-sm text-zinc-500">
            Enter your information to get started
          </p>
        </div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="p-2 border-2 rounded mb-2"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          autoComplete="on"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          className="p-2 border-2 rounded mb-2"
          id="password"
          name="password"
        />
        <button className="bg-black text-white border-double border-4 rounded">
          Sign Up
        </button>
      </form>
      <Link className="text-sm text-zinc-500" href="login">
        To Login
      </Link>
    </div>
  );
}
