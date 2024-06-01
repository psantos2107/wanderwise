import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";
import FlightForm from "@/app/_components/_forms/FlightForm";
import DateRangePicker from "@/app/_components/DateRangePicker";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage() {
  return (
    <main>
      <RecommendationMessage category={"flights"} />
      <FlightForm />
      <FetchFlights />
    </main>
  );
}
