"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-lg mb-4">
      <h1>Something went wrong when loading the page! :(</h1>
      <p className="text-red-700">Error message: {error.message}</p>
      <button
        onClick={reset}
        className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
      >
        Reload the page
      </button>
      <Link
        href={"/"}
        className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
      >
        Go back to Home Page
      </Link>
    </main>
  );
}
