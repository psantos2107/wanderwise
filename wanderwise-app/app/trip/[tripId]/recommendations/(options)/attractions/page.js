import AttractionForm from "@/app/_components/_forms/AttractionForm";
import { Suspense } from "react";
import FetchAttractions from "@/app/_components/_recommendation-fetching/FetchAttractions";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Attractions",
};

export default async function AttractionsPage() {
  //then get all details of the hotels afterward! look at HOTEL DETAILS!
  return (
    <main>
      <RecommendationMessage category={"attractions"} />
      <AttractionForm />
      <div className="w-[80%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
          <FetchAttractions />
        </Suspense>
      </div>
    </main>
  );
}
