import AttractionForm from "@/app/_components/_forms/AttractionForm";
import { Suspense } from "react";
import FetchAttractions from "@/app/_components/_recommendation-fetching/FetchAttractions";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import BackToRecommendations from "@/app/_components/BackToRecommendations.js";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";

export const metadata = {
  title: "Search Attractions",
};

export default async function AttractionsPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  //query params will be used to share state between client components and server components.
  const tripLocation = `${trip.destination_city}, ${trip.destination_country}`;
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} attractions`
    : "";

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <BackToRecommendations tripID={params.tripID} />
          <RecommendationMessage
            category={"attractions"}
            tripLocation={tripLocation}
          />
          <AttractionForm />
          <div className="w-[80%] mx-auto mt-4">
            <FetchAttractions
              searchTerm={searchTerm}
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
