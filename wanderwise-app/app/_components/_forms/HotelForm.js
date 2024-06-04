"use client";
import { useState } from "react";

function HotelForm() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  //add handleSubmit later.

  return (
    <form className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
      <article>
        <label>
          Any particular city/location you are looking for hotels in? Fill out
          the form below and press submit if you do! Otherwise, just press
          submit to find your hotels!
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

export default HotelForm;
