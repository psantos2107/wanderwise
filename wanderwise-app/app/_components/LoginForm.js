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
          <form>
            <label>Email Address:</label>
            <input type="text" value={emailAdd} onChange={handleEmailInput} />
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordInput}
            />
            <input type="submit" value="Submit Form" onSubmit={handleSubmit} />
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
