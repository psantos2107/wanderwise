"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main>
      <h1> Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
      <Link href={"/"}>Go back to home page</Link>
    </main>
  );
}
