"use client";
import { standardSignOut } from "../_lib/actions";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    setIsSigningOut(true);
    try {
      await standardSignOut();
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <article>
      <button
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
        onClick={handleClick}
      >
        Sign Out
      </button>{" "}
      <div className="inline-block">{isSigningOut && <SpinnerMini />}</div>
    </article>
  );
}

export default SignOutButton;
