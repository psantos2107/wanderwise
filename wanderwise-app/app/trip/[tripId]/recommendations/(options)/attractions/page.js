import AttractionForm from "@/app/_components/_forms/AttractionForm";
import { Suspense } from "react";
import FetchAttractions from "@/app/_components/_recommendation-fetching/FetchAttractions";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";

export const metadata = {
  title: "Search Attractions",
};

export default async function AttractionsPage({ params, searchParams }) {
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} attractions`
    : "";

  return (
    <main>
      <Link
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
        href={`/trip/${params.tripID}/recommendations`}
      >
        Go Back
      </Link>
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
