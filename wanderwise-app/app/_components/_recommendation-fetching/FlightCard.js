import Image from "next/image";
import { getAirlineByIata } from "aircodes";

function FlightCard({ flightOffer, index }) {
  return (
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4 w-full">
      <h2 className="bolder">
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
          <article className="w-full">
            {index === 0 ? (
              <h2>ITINERARY TO DESTINATION</h2>
            ) : (
              <h2>ITINERARY BACK HOME</h2>
            )}
            <section className="ml-3 w-full">
              <p>
                <u>Total Duration:</u> {itinerary.duration}
              </p>
              {itinerary.segments.map((segment, i, arr) => {
                return (
                  <section>
                    Airline: {getAirlineByIata(segment.carrierCode).name}-
                    Flight #{segment.number} (Flight {i + 1}/{arr.length})
                    <div className="flex flex-col">
                      <div>
                        <h4>DEPARTING:</h4>
                        <p>IATA Code: {segment.departure.iataCode}</p>
                        <p>Terminal: {segment.departure.terminal}</p>
                        <p>Departs at: {segment.departure.at}</p>
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
                      <p>Departs at: {segment.arrival.at}</p>
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
                      <Image
                        src={getAirlineByIata(segment.carrierCode).logo}
                        fill
                        alt={`Image of Airline.`}
                        className="object-contain"
                      />
                    </figure>
                  </section>
                );
              })}
            </section>
          </article>
        );
      })}
    </article>
  );
}

export default FlightCard;
