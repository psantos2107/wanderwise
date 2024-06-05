import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage({ searchParams }) {
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
      <RecommendationMessage category={"flights"} />
      <FlightForm />
      <div className="w-[90%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </div>
    </main>
  );
}
