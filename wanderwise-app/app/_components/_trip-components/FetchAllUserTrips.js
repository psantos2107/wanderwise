import TripCard from "./TripCard";
import { getTripsByUserId } from "@/app/_lib/data-service";

async function FetchAllUserTrips({ id }) {
  let userTrips = [];
  userTrips = await getTripsByUserId(id);
  userTrips.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return (
    <div>
      {userTrips.length > 0 ? (
        <section className="w-full flex flex-col">
          {userTrips.map((trip, index) => {
            return <TripCard trip={trip} key={trip.id} index={index} />;
          })}
        </section>
      ) : (
        <h1 className="text-center p-5 bg-orange-100">
          You have no trips to display quite yet!
        </h1>
      )}
    </div>
  );
}

export default FetchAllUserTrips;
