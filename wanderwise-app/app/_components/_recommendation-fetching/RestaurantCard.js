"use client";
import Image from "next/image";
import { addRestaurantToTrip } from "@/app/_lib/actions";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini";

function RestaurantCard({ restaurant, index, tripID }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    e.preventDefault();
    try {
      setIsSaving(true);
      const restaurant = JSON.parse(e.target.dataset.restaurant);
      await addRestaurantToTrip(tripID, restaurant);
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
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4">
      <h2 className="text-lg">
        {index + 1}. {restaurant.name}
      </h2>
      <figure className="w-[90%] mx-auto">
        <Image
          src={restaurant.image_url}
          width="100"
          height="100"
          layout="responsive"
          alt={`Image of ${restaurant.name}`}
          className="object-cover max-h-36 rounded-sm"
        />
        <p>
          <strong>
            <u className="text-sm">CATEGORIES:</u>{" "}
          </strong>{" "}
          {restaurant.categories.map((category) => category.title).join(", ")}
        </p>
        <p>
          <u className="text-sm">YELP RATING:</u> {restaurant.rating} (out of{" "}
          {restaurant.review_count} reviews)
        </p>
        <p>
          <u className="text-sm">ADDRESS:</u>{" "}
          {restaurant.location.display_address.join(",")}
        </p>
      </figure>
      <section className="flex flex-col gap-1 items-center mt-3">
        <a
          href={restaurant.url}
          target="_blank"
          className="w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner text-center cursor-pointer"
        >
          View on yelp!
        </a>
        {isSaving && <SpinnerMini />}
        {clientMessage && <p>{clientMessage}</p>}
        <button
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5 cursor-pointer"
          data-restaurant={JSON.stringify(restaurant)}
          onClick={handleSaveRecommendation}
        >
          Save Recommendation
        </button>
      </section>
    </article>
  );
}

export default RestaurantCard;
