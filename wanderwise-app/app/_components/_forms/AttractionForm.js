"use client";
import { useState } from "react";

function AttractionForm() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  //add handleSubmit later.

  return (
    <form className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
      <article>
        <label>
          What kind of attractions are you looking for? Please input terms like
          "hiking", "museum", "concerts", etc.
        </label>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            className="px-1"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </article>
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 text-sm boldest"
      />
    </form>
  );
}

export default AttractionForm;