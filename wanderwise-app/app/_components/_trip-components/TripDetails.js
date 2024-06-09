import React from "react";
import formatTimestamp from "@/app/_lib/format-timestamp";
import Link from "next/link";
import ShowAndEditTripNotes from "./ShowAndEditTripNotes";

function TripDetails({ trip }) {
  return (
    <article className="p-3 flex flex-col text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm sm:text-lg">
      <h1 className="text-center sm:text-xl">
        YOUR TRIP TO {trip.destination_city.toUpperCase()},{" "}
        {trip.destination_country.toUpperCase()}
      </h1>
      <p>Starts on {trip.start_date}</p>
      <p>Ends on {trip.end_date}</p>
      <p>Flying From: "{trip.airline}"" Airline</p>
      <p>Budget For Trip: ${trip.budget}</p>
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
      <section className="w-full flex justify-around my-3">
        <Link
          href={`/trip/${trip.id}/edit`}
          className="block  bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          Edit Trip Details
        </Link>
        <Link
          href={`/trip/${trip.id}/recommendations`}
          className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          Find More Recs
        </Link>
      </section>
      <ShowAndEditTripNotes trip={trip} />
    </article>
  );
}

export default TripDetails;
