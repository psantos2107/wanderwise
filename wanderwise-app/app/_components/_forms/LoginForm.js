"use client";

import { useState } from "react";
import { googleSignIn, standardSignIn } from "../../_lib/actions";
import Spinner from "../Spinner";
import Link from "next/link";

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
        "Something went wrong. Check your email address and password combination. Note: If you originally signed up via google, you MUST log in via google again."
      );
    } finally {
      setIsLoadingCreds(false);
    }
  }

  return (
    <main>
      {session?.user ? (
        <h2>
          You are already logged in. You may navigate to your user page via this
          link.
        </h2>
      ) : (
        <>
          <h2>
            Please sign in to continue using our web app! Or, you can click on
            the button to sign via your google account.
          </h2>
          <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Submit Form" />
            <div>{errorMessage}</div>
          </form>
          <p>OR</p>
          <form action={googleSignIn}>
            <button onClick={handleGoogleOnClick}>Login with Google</button>
            <div>
              {isLoadingGooglePg && <Spinner />}
              {isLoadingCreds && <Spinner />}
            </div>
          </form>
        </>
      )}
    </main>
  );
}

export default LoginForm;
