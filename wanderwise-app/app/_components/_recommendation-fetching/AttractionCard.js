"use client";
import Image from "next/image";
import { addAttractionToTrip } from "@/app/_lib/actions";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini";

function AttractionCard({ attraction, index, tripID }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    e.preventDefault();
    try {
      setIsSaving(true);
      const attraction = JSON.parse(e.target.dataset.attraction);
      await addAttractionToTrip(tripID, attraction);
      setClientMessage("Successfully added recommendation to your trip.");
    } catch (error) {
      console.error("Error: ", error);
      setClientMessage(
        "Failed to save recommendation to your trip. Please try again."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4 sm:text-lg sm:p-5">
      <h2 className="sm:text-xl">
        {index + 1}. {attraction.name}
      </h2>
      <figure className="w-[90%] h-[150px] sm:w-4/5 relative mx-auto my-4">
        {attraction?.image_url ? (
          <Image
            src={attraction.image_url}
            fill
            alt={`Image of ${attraction.name}`}
            className="object-cover max-h-36 rounded-sm"
          />
        ) : (
          "No photo provided by Yelp."
        )}
      </figure>
      <p className="sm:text-lg">
        <u className="text-sm sm:text-lg">CATEGORIES:</u>{" "}
        {attraction.categories.map((category) => category.title).join(", ")}
      </p>
      <p className="sm:text-lg">
        <u className="text-sm sm:text-lg">YELP RATING:</u> {attraction.rating}{" "}
        (out of {attraction.review_count} reviews)
      </p>
      <p className="sm:text-lg">
        <u className="text-sm sm:text-lg">ADDRESS:</u>{" "}
        {attraction.location.display_address.join(",")}
      </p>
      <section className="flex flex-col gap-1 items-center mt-3">
        <a
          href={attraction.url}
          target="_blank"
          className="w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner text-center cursor-pointer"
        >
          View on yelp!
        </a>
        {isSaving && <SpinnerMini />}
        {clientMessage && <p>{clientMessage}</p>}
        <button
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5 cursor-pointer"
          data-attraction={JSON.stringify(attraction)}
          onClick={handleSaveRecommendation}
        >
          Save Recommendation
        </button>
      </section>
    </article>
  );
}

export default AttractionCard;
