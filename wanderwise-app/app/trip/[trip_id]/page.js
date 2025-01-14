import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";
import TripDetails from "@/app/_components/_trip-components/TripDetails";
import ViewSavedRecs from "@/app/_components/_trip-components/ViewSavedRecs";
import fetchRestaurantDetails from "@/app/_lib/fetch-restaurant-details-and-pics";

export const metadata = {
  title: "Trip Details",
};

export default async function ViewTripPage({ params, searchParams }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.trip_id);
  let recommendationArray;
  if (!searchParams?.category) {
    recommendationArray = [];
  } else if (searchParams.category === "attractions") {
    recommendationArray = trip?.activities ? [...trip.activities] : [];
  } else if (searchParams.category === "hotels") {
    recommendationArray = trip?.hotels ? [...trip.hotels] : [];
  } else if (searchParams.category === "restaurants") {
    const restaurantIDArray = trip?.restaurants ? [...trip.restaurants] : [];
    if (restaurantIDArray.length > 0) {
      const restaurantArray = await fetchRestaurantDetails(restaurantIDArray);
      recommendationArray = [...restaurantArray];
    } else {
      recommendationArray = [];
    }
  } else {
    recommendationArray = trip?.flight_offers ? [...trip.flight_offers] : [];
  }

  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <h1 className="text-center text-lg sm:text-2xl sm:mb-4">
            <strong>
              <u>TRIP DETAILS</u>
            </strong>
          </h1>
          <TripDetails trip={trip} />
          <h2 className="text-center text-lg mt-3 sm:text-xl sm:my-4">
            <strong>
              <u>SAVED RECOMMENDATIONS</u>
            </strong>
          </h2>
          <article className="p-3 flex flex-col text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
            <ViewSavedRecs
              trip={trip}
              recArray={recommendationArray}
              category={searchParams.category}
              searchParamsExist={!!searchParams?.category}
            />
          </article>
        </>
      ) : (
        <NotAuthorizedMessage />
      )}
    </main>
  );
}
