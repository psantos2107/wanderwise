"use client";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

function RecommendationButtons({ tripID }) {
  const [isNavigatingToNewPage, setIsNavigatingToNewPage] = useState(false);
  const router = useRouter();

  function handleClick(path) {
    setIsNavigatingToNewPage(true);
    router.push(path);
  }

  return (
    <>
      {" "}
      <Link
        className="w-full text-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        href={`/trip/${tripID}/recommendations/flights`}
        onClick={() => handleClick(`/trip/${tripID}/recommendations/flights`)}
      >
        Flights
      </Link>
      <Link
        className="w-full text-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        href={`/trip/${tripID}/recommendations/hotels`}
        onClick={() => handleClick(`/trip/${tripID}/recommendations/flights`)}
      >
        Hotels
      </Link>
      <Link
        className="w-full text-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        href={`/trip/${tripID}/recommendations/restaurants`}
        onClick={() => handleClick(`/trip/${tripID}/recommendations/flights`)}
      >
        Restaurants
      </Link>
      <Link
        className="w-full text-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        href={`/trip/${tripID}/recommendations/attractions`}
        onClick={() => handleClick(`/trip/${tripID}/recommendations/flights`)}
      >
        Attractions
      </Link>
      {isNavigatingToNewPage && <Spinner text={"Loading Page..."} />}
    </>
  );
}

export default RecommendationButtons;
