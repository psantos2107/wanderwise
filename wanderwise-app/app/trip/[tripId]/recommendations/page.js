import RecommendationButtons from "@/app/_components/RecommendationButtons";
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
      <h1 className="text-center mb-3 text-lg sm:text-2xl">
        <u>RECOMMENDATIONS:</u>
      </h1>
      {trip?.user_id === userID ? (
        <article className="w-4/5 mx-auto flex flex-col gap-4 sm:gap-6 items-center sm:text-xl sm:mt-4">
          <h2>
            Hey {session.user.name.split(" ")[0]}! Let's try to find some
            restaurant, hotel, flight, or attraction recommendations for your
            trip to {trip.destination_city}, {trip.destination_country}! Please
            click on any of the buttons below to find recommendations!
          </h2>
          <RecommendationButtons tripID={params.tripID} />
          <p className="sm:mt-4">
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
