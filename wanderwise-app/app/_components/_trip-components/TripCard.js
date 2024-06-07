"use client";
import Link from "next/link";
import formatTimestamp from "@/app/_lib/format-timestamp";

function TripCard({ trip, index }) {
  return (
    <article
      className={`w-full flex flex-col gap-1 p-2 ${
        (index + 2) % 2 !== 0 ? "bg-orange-200" : "bg-orange-100"
      }`}
    >
      <h1 className="text-center">
        {index + 1}. TRIP TO {trip.destination_city.toUpperCase()},{" "}
        {trip.destination_country.toUpperCase()}
      </h1>
      <p>Starts on {trip.start_date}</p>
      <p>Ends on {trip.end_date}</p>
      <p>
        Flight Booked?:{" "}
        {trip.flight_booked ? (
          <span className="text-green-700">TRUE</span>
        ) : (
          <span className="text-red-700">FALSE</span>
        )}
      </p>
      <p>
        Hotel Booked?:{" "}
        {trip.hotel_booked ? (
          <span className="text-green-700">TRUE</span>
        ) : (
          <span className="text-red-700">FALSE</span>
        )}
      </p>
      <p>Last Edited At: {formatTimestamp(trip.updated_at)}</p>
      <section className="w-full flex justify-around">
        <Link
          href={`/trip/${trip.id}`}
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
        >
          View Details
        </Link>
        <Link
          href={`/trip/${trip.id}/edit`}
          className="block  bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
        >
          Edit Trip
        </Link>
        <Link
          href={`/trip/${trip.id}/recommendations`}
          className="block  bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
        >
          Find Recs
        </Link>
      </section>
    </article>
  );
}

export default TripCard;
