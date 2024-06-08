import RecommendationMessage from "@/app/_components/RecommendationMessage";
import HotelForm from "@/app/_components/_forms/HotelForm";
import FetchHotels from "@/app/_components/_recommendation-fetching/FetchHotels";
import BackToRecommendations from "@/app/_components/BackToRecommendations";

export const metadata = {
  title: "Search Hotels",
};

export default async function HotelsPage({ params, searchParams }) {
  //grab current trip, derive location there.
  const location = searchParams?.location
    ? (searchParams?.location).trim()
    : "";

  return (
    <main>
      <BackToRecommendations tripID={params.tripID} />
      <RecommendationMessage category={"hotels"} />
      <HotelForm />
      <div className="w-[80%] mx-auto mt-4">
        <FetchHotels location={location} />
      </div>
    </main>
  );
}
