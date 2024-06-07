import RestaurantForm from "@/app/_components/_forms/RestaurantForm";
import FetchRestaurants from "@/app/_components/_recommendation-fetching/FetchRestaurants";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";

export const metadata = {
  title: "Search Restaurants",
};

//searchParams grabs query params from the URL. This prop is only available on page.js
export default async function RestaurantsPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  //query params will be used to share state between client components and server components.
  console.log(trip);
  const tripLocation = `${trip.destination_city}, ${trip.destination_country}`;
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} restaurants`
    : "";
  const priceRange = searchParams?.priceRange ?? "";

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <Link
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
            href={`/trip/${params.tripID}/recommendations`}
          >
            Go Back
          </Link>
          <RecommendationMessage
            category={"restaurants"}
            tripLocation={tripLocation}
          />
          <RestaurantForm />
          <div className="w-[80%] mx-auto">
            <Suspense fallback={<Spinner />}>
              <FetchRestaurants
                searchTerm={searchTerm}
                priceRange={priceRange}
                tripLocation={tripLocation}
              />
            </Suspense>
          </div>
        </>
      ) : (
        <p>YOU ARE NOT AUTHORIZED TO VIEW OR EDIT THIS TRIP.</p>
      )}
    </main>
  );
}
