"use client";

import React from "react";
import { useState } from "react";
import { googleSignIn } from "@/app/_lib/actions";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/_lib/actions";
import googleIcon from "@/public/imgs/google_logo.jpg";
import Image from "next/image";
import Link from "next/link";

function SignUpForm({ session }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingCreds, setIsLoadingCreds] = useState(false);
  const [isLoadingGooglePg, setIsLoadingGooglePg] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      setIsLoadingCreds(true);
      await createUser(fullName, email, password);
      router.push("/user_page");
    } catch (error) {
      console.error("Error: ", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoadingCreds(false);
    }
  }

  function handleGoogleOnClick() {
    setIsLoadingGooglePg(true);
  }

  return (
    <main className="w-full sm:flex sm:flex-col sm:items-center">
      {session?.user ? (
        <h2 className="p-3 text-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-3 sm:text-2xl sm:mt-10">
          You are already logged in. You may navigate to your user page via{" "}
          <Link
            href="/user_page"
            className="underline transition-transform transform hover:bg-blue-300 active:bg-blue-400  hover:scale-105 active:scale-95 active:shadow-inner hover:italic active:italic cursor-pointer"
          >
            this link.
          </Link>
        </h2>
      ) : (
        <>
          <h2 className="mb-3 sm:text-center sm:text-3xl max-w-4xl sm:mt-8">
            Welcome to WanderWise! Please fill out the form to sign up and
            continue using our web app! Or, alternatively, you can simply sign
            up with your Google credentials by pressing on the button below!
          </h2>
          <form
            onSubmit={handleFormSubmit}
            className="p-3 flex flex-col gap-3 sm:gap-8 items-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-4 sm:text-2xl sm:p-10 max-w-xl sm:mt-10"
          >
            <article className="flex gap-2">
              <label>First Name:</label>
              <input
                type="text"
                placeholder="First Name"
                className="text-black px-2"
                required
                value={firstName}
                onChange={handleFirstName}
              />
            </article>
            <article className="flex gap-2">
              <label>Last Name:</label>
              <input
                type="text"
                placeholder="Last Name"
                className="text-black px-2"
                required
                value={lastName}
                onChange={handleLastName}
              />
            </article>
            <article className="flex gap-2">
              <label>Email Address:</label>
              <input
                type="email"
                className="text-black px-2"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmail}
              />
            </article>
            <article className="flex gap-2">
              <label>Password: </label>
              <input
                type="password"
                className="text-black px-2"
                placeholder="Password"
                required
                value={password}
                onChange={handlePassword}
              />
            </article>
            {errorMessage && (
              <p className="text-red-700 boldest">{errorMessage}</p>
            )}
            <input
              type="submit"
              value="Submit Form"
              className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
            />
          </form>
          <p className="text-center mb-3 sm:text-2xl">OR</p>
          <form
            action={googleSignIn}
            className="p-1 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[80%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-3 max-w-xl"
          >
            <article className="w-full flex justify-center">
              <figure className="relative w-[15%] h-auto">
                <Image
                  src={googleIcon}
                  loading="lazy"
                  fill
                  className="object-contain"
                  alt="Google Icon"
                />
              </figure>
              <button
                onClick={handleGoogleOnClick}
                className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer sm:text-2xl sm:p-2"
              >
                Sign Up with Google
              </button>
            </article>
          </form>
          <p className="sm:text-xl sm:mt-6">
            Or, if you already have an account,{" "}
            <Link
              href={"/login"}
              className="underline transition-transform transform hover:bg-blue-300 active:bg-blue-400  hover:scale-105 active:scale-95 active:shadow-inner hover:italic active:italic cursor-pointer sm:text-2xl"
            >
              click here
            </Link>{" "}
            to log in!
          </p>
          <div>
            {isLoadingGooglePg && <Spinner />}
            {isLoadingCreds && <Spinner />}
          </div>
        </>
      )}
    </main>
  );
}

export default SignUpForm;
