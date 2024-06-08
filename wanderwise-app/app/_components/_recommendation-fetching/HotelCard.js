"use client";
import Image from "next/image";
import TextExpander from "../TextExpander";
import { useState } from "react";
import { addHotelToTrip } from "@/app/_lib/actions";
import SpinnerMini from "../SpinnerMini";

function HotelCard({ hotel, index, pictureURL, tripID, savedPicURL }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    e.preventDefault();
    try {
      setIsSaving(true);
      const hotel = JSON.parse(e.target.dataset.hotel);
      await addHotelToTrip(tripID, hotel);
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
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-3 mb-4">
      <h2>
        {index + 1}. {hotel.name}
      </h2>
      <figure className="w-[90%] mx-auto mb-3">
        {pictureURL || savedPicURL ? (
          <img
            src={pictureURL || savedPicURL || ""}
            // width="100"
            // height="100"
            // layout="responsive"
            alt={`Placeholder Image for Hotels`}
            className="object-fit object-top max-h-44 rounded-sm block mx-auto"
          />
        ) : (
          <h2>Picture not available.</h2>
        )}
      </figure>
      <p>
        <strong>
          <u className="text-sm">DESCRIPTION:</u>{" "}
        </strong>{" "}
        <TextExpander>{hotel.description}</TextExpander>
      </p>
      <p>
        <u className="text-sm">ADDRESS:</u> {hotel.address_obj.address_string}
      </p>
      <p>
        <u className="text-sm">PHONE NUMBER:</u> {hotel.phone}
      </p>
      <p>
        <u className="text-sm">TRIPADVISOR RATING:</u> {hotel.rating} (out of{" "}
        {hotel.num_reviews} reviews){" "}
      </p>
      <figure className="w-3/4 mx-auto">
        {hotel.rating_image_url ? (
          <Image
            src={hotel.rating_image_url}
            width="30"
            height="30"
            layout="responsive"
            alt={`Rating image for ${hotel.name}`}
          />
        ) : (
          "Rating image not available."
        )}
      </figure>
      <section className="flex flex-col gap-1 items-center mt-3">
        <a
          href={hotel.see_all_photos}
          target="_blank"
          className="block text-center w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          See More Photos!
        </a>
        <a
          href={hotel.web_url}
          target="_blank"
          className="block text-center w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          View on TripAdvisor!
        </a>
        {isSaving && <SpinnerMini />}
        {clientMessage && <p>{clientMessage}</p>}
        <button
          className="block text-center w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
          data-hotel={JSON.stringify({
            ...hotel,
            pictureURL: `${pictureURL || ""}`,
          })}
          onClick={handleSaveRecommendation}
        >
          Save Recommendation
        </button>
      </section>
    </article>
  );
}

export default HotelCard;
