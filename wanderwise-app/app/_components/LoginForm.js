"use client";

import { useState } from "react";
import { googleSignIn, standardSignIn } from "../_lib/actions";
import Link from "next/link";

function LoginForm({ session }) {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailInput(e) {
    setEmailAdd(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email: emailAdd,
      password: password,
    };
    console.log(formData);
    await standardSignIn(formData);
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
          </form>
          <p>OR</p>
          <form action={googleSignIn}>
            <button>Continue with Google</button>
          </form>
        </>
      )}
    </main>
  );
}

export default LoginForm;
