import RecommendationMessage from "@/app/_components/RecommendationMessage";
import HotelForm from "@/app/_components/_forms/HotelForm";
import FetchHotels from "@/app/_components/_recommendation-fetching/FetchHotels";
import BackToRecommendations from "@/app/_components/BackToRecommendations.js";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";

export const metadata = {
  title: "Search Hotels",
};

export default async function HotelsPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  //query params will be used to share state between client components and server components.
  const tripLocation = `${trip.destination_city}, ${trip.destination_country}`;
  //grab current trip, derive location there.
  const location = searchParams?.location
    ? (searchParams?.location).trim()
    : "";

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <BackToRecommendations tripID={params.tripID} />
          <RecommendationMessage
            category={"hotels"}
            tripLocation={tripLocation}
          />
          <HotelForm tripLocation={tripLocation} />
          <div className="w-[95%] mx-auto mt-4">
            <FetchHotels location={location} tripID={params.tripID} />
          </div>
        </>
      ) : (
        <NotAuthorizedMessage />
      )}
    </main>
  );
}
