import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage() {
  return (
    <main>
      <RecommendationMessage category={"flights"} />
      <FlightForm />
      <div className="w-[90%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
          <FetchFlights />
        </Suspense>
      </div>
    </main>
  );
}
