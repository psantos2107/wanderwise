import RestaurantCard from "./RestaurantCard";
import { searchRestaurants } from "@/app/_lib/data-service";
import Image from "next/image";
import yelpLogo from "@/public/imgs/yelp_logo.jpg";

async function FetchRestaurants({
  searchTerm,
  priceRange,
  tripLocation,
  tripID,
}) {
  let restaurants = [];

  if (searchTerm && priceRange) {
    restaurants = await searchRestaurants(tripLocation, searchTerm, priceRange);
  }

  return (
    <section className="flex flex-col">
      {restaurants.length > 0 ? (
        <>
          <h1 className="my-2 text-center sm:text-xl">
            RESULTS of SEARCH- Generated by Yelp:{" "}
          </h1>
          <figure className="sm:w-md sm:h-[50px] relative w-sm h-[30px] mb-4">
            <Image
              src={yelpLogo}
              fill
              className="object-contain"
              quality={100}
              placeholder="blur"
              alt="yelp logo"
            />
          </figure>
          {restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
                restaurant={restaurant}
                index={index}
                key={restaurant.id}
                tripID={tripID}
              />
            );
          })}
        </>
      ) : (
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[100%] mx-auto rounded-sm shadow-md leading-6 text-md mt-4 sm:text-lg">
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
