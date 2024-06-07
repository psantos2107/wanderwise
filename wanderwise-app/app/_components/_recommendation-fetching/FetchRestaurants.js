import RestaurantCard from "./RestaurantCard";
import { searchRestaurants } from "@/app/_lib/data-service";

async function FetchRestaurants({ searchTerm, priceRange, tripLocation }) {
  let restaurants = [];

  if (searchTerm && priceRange) {
    restaurants = await searchRestaurants(tripLocation, searchTerm, priceRange);
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
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[100%] mx-auto rounded-sm shadow-md leading-6 text-md mt-4">
          <h2>
            No results to display. Either no search has been conducted yet or no
            results have come out of your search. If it is the latter, please
            refine your search and try again.
          </h2>
        </article>
      )}
    </section>
  );
}

export default FetchRestaurants;
