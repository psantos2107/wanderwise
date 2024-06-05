import React from "react";
import hotelIcon from "@/public/imgs/hotel_icon.jpg";
import Image from "next/image";
import TextExpander from "../TextExpander";

function HotelCard({ hotel, index, pictureURL }) {
  return (
    <article
      className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4"
      data-hotel={JSON.stringify(hotel)}
    >
      <h2>
        {index + 1}. {hotel.name}
      </h2>
      <figure className="w-[90%] mx-auto">
        {pictureURL ? (
          <img
            src={pictureURL || ""}
            // width="100"
            // height="100"
            // layout="responsive"
            alt={`Placeholder Image for Hotels`}
            className="object-cover object-top max-h-44 rounded-sm"
          />
        ) : (
          <h2>Picture not available.</h2>
        )}
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
        <a
          href={hotel.see_all_photos}
          target="_blank"
          className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
        >
          See More Photos!
        </a>
        <a
          href={hotel.web_url}
          target="_blank"
          className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
        >
          View on TripAdvisor!
        </a>
      </figure>
      <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
        {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
        Save Recommendation
      </button>
      <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
        {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
        Add to Itinerary
      </button>
    </article>
  );
}

export default HotelCard;
