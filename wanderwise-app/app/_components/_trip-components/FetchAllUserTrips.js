import TripCard from "./TripCard";

async function FetchAllUserTrips({ id }) {
  const userTrips = [];
  //fetch all trips related to the user.
  return (
    <div>
      {userTrips.length > 0 ? (
        <section>Display user trips.</section>
      ) : (
        <h1>User has no trips to display quite yet!</h1>
      )}
    </div>
  );
}

export default FetchAllUserTrips;
