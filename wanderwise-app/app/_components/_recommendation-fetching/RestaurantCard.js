"use client";
import { addRestaurantToTrip } from "@/app/_lib/actions";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini";

function RestaurantCard({ restaurant, index, tripID, isASavedRec }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    try {
      setIsSaving(true);
      const restaurantID = e.target.dataset.restaurant;
      await addRestaurantToTrip(tripID, restaurantID);
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
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4 sm:text-lg sm:p-4">
      <h2 className="text-lg sm:text-xl">
        {index + 1}. {restaurant.displayName.text}
      </h2>
      <p>
        <strong>
          <u className="text-sm sm:text-lg">CATEGORIES:</u>{" "}
        </strong>{" "}
        {restaurant.types.join(", ")}
      </p>
      <p>
        <u className="text-sm sm:text-lg">GOOGLE PLACES RATING:</u>{" "}
        {restaurant.rating} (out of {restaurant.userRatingCount} reviews)
      </p>
      <p>
        <u className="text-sm sm:text-lg">ADDRESS:</u>{" "}
        {restaurant.formattedAddress}
      </p>
      <p>
        <u className="text-sm sm:text-lg">NATIONAL PHONE #:</u>{" "}
        {restaurant.nationalPhoneNumber}
      </p>
      <p>
        <u className="text-sm sm:text-lg">INTERNATIONAL PHONE #:</u>{" "}
        {restaurant.internationalPhoneNumber}
      </p>
      <section className="flex flex-col gap-1 items-center mt-3">
        <a
          href={restaurant?.websiteUri || "#"}
          target="_blank"
          className="w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner text-center cursor-pointer"
        >
          View website!
        </a>
        {isSaving && <SpinnerMini />}
        {clientMessage && <p>{clientMessage}</p>}
        {!isASavedRec && (
          <p
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5 cursor-pointer text-center"
            data-restaurant={restaurant.id}
            onClick={handleSaveRecommendation}
          >
            Save Recommendation
          </p>
        )}
      </section>
    </article>
  );
}

export default RestaurantCard;

/*

displayName
: 
{text: 'Sushisho Masa', languageCode: 'en'}
formattedAddress
: 
"Japan, 〒106-0031 Tokyo, Minato City, Nishiazabu, 4-chōme−1−１５ セブン西麻布 B1F"
internationalPhoneNumber
: 
"+81 3-3499-9178"
nationalPhoneNumber
: 
"03-3499-9178"
photos
: 
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
rating
: 
4.8
types
: 
(6) ['sushi_restaurant', 'japanese_restaurant', 'restaurant', 'food', 'point_of_interest', 'establishment']
userRatingCount
: 
204
websiteUri
: 
"https://www.sushisyomasa.com/"
*/
