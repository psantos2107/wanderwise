import RestaurantForm from "@/app/_components/_forms/RestaurantForm";
import FetchRestaurantList from "@/app/_components/_recommendation-fetching/FetchRestaurantList";
import RecommendationMessage from "@/app/_components/RecommendationMessage";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Search Restaurants",
};

export default async function RestaurantsPage() {
  return (
    <main>
      <RecommendationMessage category={"restaurants"} />
      <RestaurantForm />
      <div className="w-[80%] mx-auto">
        <Suspense fallback={<Spinner />}>
          <FetchRestaurantList />
        </Suspense>
      </div>
    </main>
  );
}
