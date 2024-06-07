"use client";
import Image from "next/image";

/* 
possible solution via server actions. 
import { saveRestaurant } from "@/actions/saveRestaurant";

function RestaurantCard({ restaurant, index }) {
  const handleSaveRecommendation = async () => {
    const restaurantData = JSON.parse(
      document.querySelector(`article[data-restaurant-id="${index}"]`).dataset.restaurant
    );

    const response = await saveRestaurant(restaurantData);
    if (response.message === "Restaurant saved successfully!") {
      alert(response.message);
    } else {
      alert("Error saving restaurant");
    }
  };
*/

function RestaurantCard({ restaurant, index }) {
  return (
    <article
      className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4"
      data-restaurant={restaurant}
    >
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
          className="w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner text-center"
        >
          View on yelp!
        </a>
        <button className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5">
          {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
          Save Recommendation
        </button>
        <button className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5">
          {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
          Add to Itinerary
        </button>
      </section>
    </article>
  );
}

export default RestaurantCard;
