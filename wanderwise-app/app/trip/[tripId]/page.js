import { auth } from "@/app/_lib/auth";
import { getTripByTripId } from "@/app/_lib/data-service";

export const metadata = {
  title: "Trip Details",
};

export default async function ViewTripPage({ params }) {
  const session = await auth();
  const userID = session.user.id;
  const trip = await getTripByTripId(params.tripID);

  return (
    <main>
      {trip?.user_id === userID ? (
        <p>Here people can view individual trips!</p>
      ) : (
        <p>YOU ARE NOT AUTHORIZED TO VIEW OR EDIT THIS TRIP.</p>
      )}
    </main>
  );
}
