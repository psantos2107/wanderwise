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
      <h1 className="my-2 text-center">RESULTS of SEARCH:</h1>
      {flightOffers.length > 0 ? (
        <>
          {flightOffers.map((flightOffer, index) => (
            <FlightCard
              flightOffer={flightOffer}
              index={index}
              key={`${flightOffer.price.total}-${flightOffer.price.currency}-${flightOffer.itineraries[0].segments[0].carrierCode}-${flightOffer.itineraries[0].segments[0].number}`}
            />
          ))}
        </>
      ) : (
        <h2>
          No results to display. Either no search has been made yet, or there
          was something wrong with your search. If the latter please re-do your
          search and try again.
        </h2>
      )}
    </section>
  );
}

export default FetchFlights;
