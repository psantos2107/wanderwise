import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import BackToRecommendations from "@/app/_components/BackToRecommendations";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  const tripLocation = `${trip.destination_city}, ${trip.destination_country}`;
  const iataOrigin = searchParams?.iataOrigin ?? "";
  const departureDate = searchParams?.departureDate ?? "";
  const returnDate = searchParams?.returnDate ?? "";
  const numAdults = searchParams?.numAdults ?? "";
  const numChildren = searchParams?.numChildren ?? "";
  const numInfants = searchParams?.numInfants ?? "";
  const travelClass = searchParams?.travelClass ?? "";
  const nonStopOnly = searchParams?.nonStopOnly ?? "";

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          {" "}
          <BackToRecommendations tripID={params.tripID} />
          <RecommendationMessage
            category={"flights"}
            tripLocation={tripLocation}
          />
          <FlightForm />
          <div className="w-[90%] mx-auto mt-4">
            <FetchFlights
              iataOrigin={iataOrigin}
              departureDate={departureDate}
              returnDate={returnDate}
              numAdults={numAdults}
              numChildren={numChildren}
              numInfants={numInfants}
              travelClass={travelClass}
              nonStopOnly={nonStopOnly}
              tripLocation={trip.airline}
              tripID={params.tripID}
            />
          </div>{" "}
        </>
      ) : (
        <NotAuthorizedMessage />
      )}
    </main>
  );
}
