"use client";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Spinner from "../Spinner";

function HotelForm({ tripLocation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  //
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (searchTerm === "") {
        setSearchTerm(tripLocation);
      }
      params.set("location", searchTerm);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      setIsLoading(false);
    }, 800);
  }

  return (
    <form
      className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm"
      onSubmit={(e) => handleSubmit(e)}
    >
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
      {isLoading && <Spinner />}
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
      />
    </form>
  );
}

export default HotelForm;
