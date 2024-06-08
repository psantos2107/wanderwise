import RestaurantForm from "@/app/_components/_forms/RestaurantForm";
import FetchRestaurants from "@/app/_components/_recommendation-fetching/FetchRestaurants";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import BackToRecommendations from "@/app/_components/BackToRecommendations";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";

export const metadata = {
  title: "Search Restaurants",
};

//searchParams grabs query params from the URL. This prop is only available on page.js
export default async function RestaurantsPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  //query params will be used to share state between client components and server components.
  const tripLocation = `${trip.destination_city}, ${trip.destination_country}`;
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} restaurants`
    : "";
  const priceRange = searchParams?.priceRange ?? "";

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <BackToRecommendations tripID={params.tripID} />
          <RecommendationMessage
            category={"restaurants"}
            tripLocation={tripLocation}
          />
          <RestaurantForm />
          <div className="w-[80%] mx-auto">
            <FetchRestaurants
              searchTerm={searchTerm}
              priceRange={priceRange}
              tripLocation={tripLocation}
              tripID={params.tripID}
            />
          </div>
        </>
      ) : (
        <NotAuthorizedMessage />
      )}
    </main>
  );
}
