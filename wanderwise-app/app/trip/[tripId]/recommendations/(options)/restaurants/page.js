import RestaurantForm from "@/app/_components/_forms/RestaurantForm";
import FetchRestaurants from "@/app/_components/_recommendation-fetching/FetchRestaurants";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Restaurants",
};

//searchParams grabs query params from the URL. This prop is only available on page.js
export default async function RestaurantsPage({ searchParams }) {
  //query params will be used to share state between client components and server components.
  const searchTerm = searchParams?.searchTerm
    ? `${(searchParams?.searchTerm).trim()} restaurants`
    : "";
  const priceRange = searchParams?.priceRange ?? "";

  return (
    <main>
      <RecommendationMessage category={"restaurants"} />
      <RestaurantForm />
      <div className="w-[80%] mx-auto">
        <Suspense fallback={<Spinner />}>
          <FetchRestaurants searchTerm={searchTerm} priceRange={priceRange} />
        </Suspense>
      </div>
    </main>
  );
}
