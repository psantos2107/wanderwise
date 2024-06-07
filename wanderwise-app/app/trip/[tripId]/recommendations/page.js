import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Recommendations",
};

export default async function RecommendationsPage({ params }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);

  return (
    <main className="w-full">
      <h1 className="text-center mb-3 text-lg">
        <u>RECOMMENDATIONS:</u>
      </h1>
      {trip?.user_id === userID ? (
        <article className="w-4/5 mx-auto flex flex-col gap-4 items-center">
          <h2>
            Hey {session.user.name.split(" ")[0]}! Let's try to find some
            restaurant, hotel, flight, or attraction recommendations for your
            trip to {trip.destination_city}, {trip.destination_country}! Please
            click on any of the buttons below to find recommendations!
          </h2>
          <Link
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
            href={`/trip/${params.tripID}/recommendations/flights`}
          >
            Flights
          </Link>
          <Link
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
            href={`/trip/${params.tripID}/recommendations/hotels`}
          >
            Hotels
          </Link>
          <Link
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
            href={`/trip/${params.tripID}/recommendations/restaurants`}
          >
            Restaurants
          </Link>
          <Link
            className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
            href={`/trip/${params.tripID}/recommendations/attractions`}
          >
            Attractions
          </Link>
          <p>
            Or you may also navigate back to your user page using the home icon
            above!
          </p>
        </article>
      ) : (
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-lg mb-4">
          <p>YOU ARE NOT AUTHORIZED TO VIEW OR EDIT THIS TRIP.</p>
        </article>
      )}
    </main>
  );
}
