"use client";

import Image from "next/image";
import { getAirlineByIata } from "aircodes";
import { addFlightOfferToTrip } from "@/app/_lib/actions";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini";
import convertDuration from "@/app/_lib/convertTripDuration";
import convertDateTime from "@/app/_lib/convert-date-time";

function FlightCard({ flightOffer, index, tripID, isASavedRec }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    e.preventDefault();
    try {
      setIsSaving(true);
      const flightOffer = JSON.parse(e.target.dataset.flight);
      await addFlightOfferToTrip(tripID, flightOffer);
      setClientMessage("Successfully added recommendation to your trip.");
    } catch (error) {
      console.error("Error: ", error);
      setClientMessage(
        "Failed to save recommendation to your trip. Please try again."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4 w-full sm:text-lg">
      <h2 className="bolder sm:text-lg mb-3">
        <u>FLIGHT OFFER {index + 1}</u>
      </h2>
      <p>
        TOTAL PRICE:{" "}
        <span>
          {flightOffer.price.total} {flightOffer.price.currency}
        </span>
      </p>
      <p>ONE-WAY FLIGHT: {flightOffer.oneWay ? "True" : "False"}</p>
      <h3>ADDITIONAL SERVICES</h3>
      <ul>
        {flightOffer.price.additionalServices
          ? flightOffer.price.additionalServices.map((service) => {
              return (
                <li className="ml-3" key={service.type + service.amount}>
                  {service.type
                    .split("_")
                    .map((segment) => {
                      return segment[0] + segment.slice(1).toLowerCase();
                    })
                    .join(" ")}
                  : {service.amount}
                  {flightOffer.price.currency}
                </li>
              );
            })
          : "None"}
      </ul>
      <hr
        style={{
          border: "1px solid grey",
          width: "100%",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      />
      <h2 className="bolder">
        <u>FLIGHT DETAILS:</u>
      </h2>
      {flightOffer.itineraries.map((itinerary, index) => {
        return (
          <article className="w-full" key={`Itinerary #${index}`}>
            {index === 0 ? (
              <h2>ITINERARY TO DESTINATION</h2>
            ) : (
              <h2>ITINERARY BACK HOME</h2>
            )}
            <section className="ml-3 w-full">
              <p>
                <u>Total Duration:</u> {convertDuration(itinerary.duration)}
              </p>
              {itinerary.segments.map((segment, i, arr) => {
                return (
                  <section key={`Segment of itinerary. Flight #${i}`}>
                    Airline:{" "}
                    {segment.carrierCode === "B6"
                      ? "Jet Blue"
                      : getAirlineByIata(segment.carrierCode)?.name ||
                        `Carrier Code: ${segment.carrierCode} (Unable to fetch exact airline name. You may search for the airline name through its carrier code.)`}
                    - Flight #{segment.number} (Flight {i + 1}/{arr.length})
                    <div className="flex flex-col">
                      <div>
                        <h4>DEPARTING:</h4>
                        <p>IATA Code: {segment.departure.iataCode}</p>
                        <p>Terminal: {segment.departure.terminal}</p>
                        <p>
                          Departs at: {convertDateTime(segment.departure.at)}
                        </p>
                        <hr
                          style={{
                            border: "1px dotted grey",
                            width: "75%",
                            marginTop: "3px",
                            marginBottom: "3px",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4>ARRIVING:</h4>
                      <p>IATA Code: {segment.arrival.iataCode}</p>
                      <p>Terminal: {segment.arrival.terminal}</p>
                      <p>Arrives at: {convertDateTime(segment.arrival.at)}</p>
                      <hr
                        style={{
                          border: "1px dotted grey",
                          width: "75%",
                          marginTop: "3px",
                          marginBottom: "3px",
                        }}
                      />
                    </div>
                    <figure className="w-3/4 h-[100px] relative">
                      {getAirlineByIata(segment.carrierCode)?.logo ? (
                        <Image
                          src={getAirlineByIata(segment.carrierCode).logo}
                          fill
                          alt={`Image of Airline.`}
                          className="object-contain"
                        />
                      ) : (
                        ""
                      )}
                    </figure>
                  </section>
                );
              })}
            </section>
          </article>
        );
      })}
      {isSaving && <SpinnerMini />}
      {clientMessage && <p>{clientMessage}</p>}
      {!isASavedRec && (
        <button
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5 block mx-auto cursor-pointer max-w-lg mt-4"
          data-flight={JSON.stringify(flightOffer)}
          onClick={handleSaveRecommendation}
        >
          Save Recommendation
        </button>
      )}
    </article>
  );
}

export default FlightCard;
