"use client";

import React from "react";
import { useState } from "react";
import { googleSignIn } from "@/app/_lib/actions";
import Spinner from "../Spinner";

function SignUpForm({ session }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingCreds, setIsLoadingCreds] = useState(false);
  const [isLoadingGooglePg, setIsLoadingGooglePg] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  function handleFormSubmit() {
    //....figure out server actions and how to handle this later!!
  }

  function handleGoogleOnClick() {
    setIsLoadingGooglePg(true);
  }

  return (
    <div>
      {session?.user ? (
        <h2>
          You are already logged in. You may navigate to your user page via this
          link.
        </h2>
      ) : (
        <main>
          <h2>
            Welcome to WanderWise! Please fill out the form to sign up and
            continue using our web app! Or, alternatively, you can simply sign
            up with your Google credentials by pressing on the button below!
          </h2>
          <form>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              className="text-black"
              required
              value={firstName}
              onChange={handleFirstName}
            />
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              className="text-black"
              required
              value={lastName}
              onChange={handleLastName}
            />
            <label>Email Address:</label>
            <input
              type="email"
              className="text-black"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmail}
            />
            <label>Password: </label>
            <input
              type="password"
              className="text-black"
              placeholder="Password"
              required
              value={password}
              onChange={setPassword}
            />
            <input type="submit" value="Submit Form" />
            <div>{errorMessage}</div>
          </form>
          <p>OR</p>
          <form action={googleSignIn}>
            <button onClick={handleGoogleOnClick}>
              Sign Up Through Google
            </button>
            <div>
              {isLoadingGooglePg && <Spinner />}
              {isLoadingCreds && <Spinner />}
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default SignUpForm;
