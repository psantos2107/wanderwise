import RecommendationMessage from "@/app/_components/RecommendationMessage";
import FetchFlights from "@/app/_components/_recommendation-fetching/FetchFlights";

export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage() {
  return (
    <main>
      <RecommendationMessage category={"flights"} />
      <FetchFlights />
    </main>
  );
}
