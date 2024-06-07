import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";

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
      <Link
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
        href={`/trip/${params.tripID}/recommendations`}
      >
        Go Back
      </Link>
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
