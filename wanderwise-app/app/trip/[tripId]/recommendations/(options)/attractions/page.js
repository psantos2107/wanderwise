import AttractionForm from "@/app/_components/_forms/AttractionForm";
import { Suspense } from "react";
import FetchAttractions from "@/app/_components/_recommendation-fetching/FetchAttractions";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Attractions",
};

export default async function AttractionsPage({ searchParams }) {
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} attractions`
    : "";

  return (
    <main>
      <RecommendationMessage category={"attractions"} />
      <AttractionForm />
      <div className="w-[80%] mx-auto mt-4">
        <Suspense fallback={<Spinner />}>
          <FetchAttractions searchTerm={searchTerm} />
        </Suspense>
      </div>
    </main>
  );
}
