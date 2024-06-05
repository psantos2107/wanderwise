import React from "react";
import RestaurantCard from "./RestaurantCard";
import { searchRestaurants } from "@/app/_lib/data-service";

async function FetchRestaurants({ searchTerm, priceRange }) {
  let restaurants = [];

  if (searchTerm && priceRange) {
    restaurants = await searchRestaurants(
      "Los Angeles",
      searchTerm,
      priceRange
    );
  }

  return (
    <section className="flex flex-col">
      {restaurants.length > 0 ? (
        <>
          <h1 className="my-2 text-center">RESULTS of SEARCH:</h1>
          {restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
                restaurant={restaurant}
                index={index}
                key={restaurant.id}
              />
            );
          })}
        </>
      ) : (
        <h1>
          No results to display. Either no search has been made, or no results
          were found from the search. If the latter, please re-do your search
          and try again.
        </h1>
      )}
    </section>
  );
}

export default FetchRestaurants;
