import RecommendationMessage from "@/app/_components/RecommendationMessage";
import HotelForm from "@/app/_components/_forms/HotelForm";
import FetchHotels from "@/app/_components/_recommendation-fetching/FetchHotels";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";

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
      <Link
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
        href={`/trip/${params.tripID}/recommendations`}
      >
        Go Back
      </Link>
      <RecommendationMessage category={"hotels"} />
      <HotelForm />
      <div className="w-[80%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
          <FetchHotels location={location} />
        </Suspense>
      </div>
    </main>
  );
}
