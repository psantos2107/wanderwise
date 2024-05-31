import RecommendationMessage from "@/app/_components/RecommendationMessage";
import HotelForm from "@/app/_components/_forms/HotelForm";
import FetchHotels from "@/app/_components/_recommendation-fetching/FetchHotelList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Hotels",
};

export default async function HotelsPage() {
  //then get all details of the hotels afterward! look at HOTEL DETAILS!
  return (
    <main>
      <RecommendationMessage category={"hotels"} />
      <HotelForm />
      <div className="w-[80%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
          <FetchHotels />
        </Suspense>
      </div>
    </main>
  );
}
