"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SpinnerMini from "../SpinnerMini";
import { useState } from "react";

function ToggleRecommendations({ trip }) {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(category) {
    setIsLoading(true);
    setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("category", category);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      setIsLoading(false);
    }, 800);
  }

  return (
    <article>
      <h2>
        Please select which set of saved recommendations you'd like to view!
      </h2>
      {isLoading && <SpinnerMini />}
      <section className="flex justify-evenly mt-3">
        <button
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-sm border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
          onClick={() => handleClick("flights")}
        >
          Flights
        </button>
        <button
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-sm border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
          onClick={() => handleClick("hotels")}
        >
          Hotels
        </button>
        <button
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
          onClick={() => handleClick("restaurants")}
        >
          Restaurants
        </button>
        <button
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
          onClick={() => handleClick("attractions")}
        >
          Attractions
        </button>
      </section>
    </article>
  );
}

export default ToggleRecommendations;
