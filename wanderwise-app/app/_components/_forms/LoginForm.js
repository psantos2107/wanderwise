"use client";

import { useState } from "react";
import { googleSignIn, standardSignIn } from "../../_lib/actions";
import Spinner from "../Spinner";
import Link from "next/link";
import googleIcon from "@/public/imgs/google_logo.jpg";
import Image from "next/image";

function LoginForm({ session }) {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingGooglePg, setIsLoadingGooglePg] = useState(false);
  const [isLoadingCreds, setIsLoadingCreds] = useState(false);

  function handleEmailInput(e) {
    setEmailAdd(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleGoogleOnClick() {
    setIsLoadingGooglePg(true);
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setErrorMessage("");
      const formData = {
        email: emailAdd,
        password: password,
      };
      console.log(formData);
      setIsLoadingCreds(true);
      await standardSignIn(formData);
    } catch (error) {
      setErrorMessage(
        `Something went wrong. Either the email/password combination doesn't exist OR you inputted the wrong credentials. Note: If you originally signed up via google, you MUST log in via google again.`
      );
    } finally {
      setIsLoadingCreds(false);
    }
  }

  return (
    <main>
      {session?.user ? (
        <h2 className="p-3 text-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-3">
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
          <h2 className="mb-2">
            Please login in to continue using our web app! Or, you can click on
            the button to sign via your google account.
          </h2>
          <p className="text-xs text-center mb-3">
            (Note: If you were just re-directed from the sign-in page, you may
            use this login form with the credentials you just made to proceed
            with the app!)
          </p>
          <form
            onSubmit={handleSubmit}
            className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-3"
          >
            <label>Email Address:</label>
            <input
              type="email"
              value={emailAdd}
              onChange={handleEmailInput}
              className="text-black"
              required
            />
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordInput}
              className="text-black"
              required
            />
            {errorMessage && (
              <p className="text-red-700 boldest">{errorMessage}</p>
            )}
            <input
              type="submit"
              value="Submit Form"
              className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
            />
          </form>
          <p className="text-center mb-3">OR</p>
          {isLoadingGooglePg && <Spinner />}
          {isLoadingCreds && <Spinner />}
          <form
            action={googleSignIn}
            className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm mb-4"
          >
            <article className="w-full flex justify-center">
              <figure className="relative w-[15%] h-auto ">
                <Image
                  src={googleIcon}
                  loading="lazy"
                  fill
                  className="object-contain"
                />
              </figure>
              <button
                onClick={handleGoogleOnClick}
                className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
              >
                Login with Google
              </button>
            </article>
          </form>
          <p>
            Or, if you don't have an account yet{" "}
            <Link
              href={"/signup"}
              className="underline transition-transform transform hover:bg-blue-300 active:bg-blue-400  hover:scale-105 active:scale-95 active:shadow-inner hover:italic active:italic cursor-pointer"
            >
              click here
            </Link>{" "}
            to sign up!
          </p>
        </>
      )}
    </main>
  );
}

export default LoginForm;
