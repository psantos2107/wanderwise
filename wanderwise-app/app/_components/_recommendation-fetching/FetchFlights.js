import FlightCard from "./FlightCard";
import { searchFlights } from "@/app/_lib/data-service";
import { flightsPlaceholder, singleFlight } from "@/app/_lib/placeholderData";

async function FetchFlights({
  iataOrigin,
  departureDate,
  returnDate,
  numAdults,
  numChildren,
  numInfants,
  travelClass,
  nonStopOnly,
  tripID,
  tripLocation,
}) {
  let flightOffers = [];
  if (
    iataOrigin &&
    departureDate &&
    returnDate &&
    numAdults &&
    numChildren &&
    numInfants &&
    travelClass &&
    nonStopOnly
  ) {
    flightOffers = await searchFlights(
      iataOrigin,
      tripLocation,
      departureDate,
      returnDate,
      numAdults,
      numChildren,
      numInfants,
      travelClass,
      nonStopOnly
    );
  }

  return (
    <section>
      <h1 className="my-2 text-center bolder sm:text-xl">
        <u>RESULTS of SEARCH:</u>
      </h1>
      {flightOffers.length > 0 ? (
        <>
          {flightOffers.map((flightOffer, index) => (
            <FlightCard
              flightOffer={flightOffer}
              index={index}
              key={`${flightOffer.price.total}-${flightOffer.price.currency}-${flightOffer.itineraries[0].segments[0].carrierCode}-${flightOffer.itineraries[0].segments[0].number}`}
              tripID={tripID}
            />
          ))}
        </>
      ) : (
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[100%] mx-auto rounded-sm shadow-md leading-6 text-md mb-4 sm:text-lg">
          <h2>
            No results to display. Either no search has been made yet, or there
            was something wrong with your search. If the latter please re-do
            your search and try again.
          </h2>
        </article>
      )}
    </section>
  );
}

export default FetchFlights;
