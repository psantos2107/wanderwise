import CreateOrEditTrip from "@/app/_components/_trip-components/CreateOrEditTrip";
import NotAuthorizedMessage from "@/app/_components/NotAuthorizedMessage";
import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";
import Link from "next/link";
import DeleteTripButton from "@/app/_components/DeleteTripButton";

export const metadata = {
  title: "Edit Trip",
};

export default async function EditPage({ params }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);
  return (
    <main>
      {trip?.user_id === userID ? (
        <>
          <h1 className="text-center mb-3 sm:text-xl">
            Please use this trip to edit your trip details! If you want to view
            the recommendations you saved, please navigate to the "View Details"
            page via the "View Entire Trip" button. If you'd like to delete this
            trip, you may press the delete button in the bottom of this form.
          </h1>
          <article className="flex justify-center mb-3">
            <Link
              className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner sm:text-lg sm:my-4"
              href={`/trip/${params.tripID}`}
            >
              View Entire Trip
            </Link>
          </article>
          <CreateOrEditTrip
            userID={userID}
            trip={trip}
            isCreatingNewTrip={false}
          />
          <article className="my-5 sm:my-8 ml-2 w-fit sm:text-lg sm:p-2">
            <DeleteTripButton tripID={params.tripID} />
          </article>
        </>
      ) : (
        <NotAuthorizedMessage />
      )}
    </main>
  );
}
