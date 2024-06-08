import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import BackToRecommendations from "@/app/_components/BackToRecommendations";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage({ params, searchParams }) {
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
      <BackToRecommendations tripID={params.tripID} />
      <RecommendationMessage category={"flights"} />
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
        />
      </div>
    </main>
  );
}
