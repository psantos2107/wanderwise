/* fields to put on the flight search forms!
const originLocation = "LAX";
const destinationLocation = "PAR";
const departureDate = "2024-06-01";
const returnDate = "2024-06-10";
const numAdults = 1;
const numChildren = 0;
const numInfants = 0;
const travelClass = "ECONOMY";
const nonStop = false;
const limit = 10;

const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocation}&destinationLocationCode=${destinationLocation}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${numAdults}&children=${numChildren}&infants=${numInfants}&travelClass=${travelClass}&nonStop=${
  nonStop ? "true" : "false"
}&max=${limit}`;

//THERE MUST BE A POST REQUEST MADE HERE TO OBTAIN CREDENTIALS:

const fetch = require('node-fetch');

const client_id = 'your_client_id'; // Replace with your actual client_id
const client_secret = 'your_client_secret'; // Replace with your actual client_secret

const data = {
  grant_type: 'client_credentials',
  client_id: client_id,
  client_secret: client_secret
};

const url2 = 'https://test.api.amadeus.com/v1/security/oauth2/token';

fetch(url2, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
------

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.AMADEUS_API_KEY}`,
  },
};

const res = await fetch(url, options);
const flights = await res.json();
console.log(flights);
------------------------------------
ALT:
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET'
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-06-01',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});

-----
Auto refresh token?
const fetch = require('node-fetch');

let accessToken = null;
let tokenExpirationTime = null;

const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';

async function fetchAccessToken() {
  const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    })
  });

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpirationTime = Date.now() + (data.expires_in * 1000);
}

async function makeApiRequest(url) {
  if (!accessToken || Date.now() >= tokenExpirationTime) {
    await fetchAccessToken();
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return response.json();
}

// Example usage:
(async () => {
  const apiUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=PAR&departureDate=2024-06-01&returnDate=2024-06-10&adults=1&children=0&infants=0&travelClass=ECONOMY&nonStop=true&max=10';
  const data = await makeApiRequest(apiUrl);
  console.log(data);
})();

*/

const flightOffers = {
  meta: {
    count: 2,
    links: {
      self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=PAR&departureDate=2024-06-01&returnDate=2024-06-10&adults=1&children=0&infants=0&travelClass=ECONOMY&nonStop=true&max=10",
    },
  },
  data: [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2024-05-28",
      lastTicketingDateTime: "2024-05-28",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT10H50M",
          segments: [
            {
              departure: {
                iataCode: "LAX",
                terminal: "B",
                at: "2024-06-01T19:45:00",
              },
              arrival: {
                iataCode: "ORY",
                terminal: "4",
                at: "2024-06-02T15:35:00",
              },
              carrierCode: "BF",
              number: "731",
              aircraft: {
                code: "359",
              },
              operating: {
                carrierCode: "BF",
              },
              duration: "PT10H50M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT11H40M",
          segments: [
            {
              departure: {
                iataCode: "ORY",
                terminal: "4",
                at: "2024-06-10T14:50:00",
              },
              arrival: {
                iataCode: "LAX",
                terminal: "B",
                at: "2024-06-10T17:30:00",
              },
              carrierCode: "BF",
              number: "730",
              aircraft: {
                code: "359",
              },
              operating: {
                carrierCode: "BF",
              },
              duration: "PT11H40M",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "847.20",
        base: "461.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "847.20",
        additionalServices: [
          {
            amount: "120.00",
            type: "CHECKED_BAGS",
          },
        ],
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: false,
      },
      validatingAirlineCodes: ["BF"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "847.20",
            base: "461.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "QBCRTUS",
              brandedFare: "BASICPLUS",
              brandedFareLabel: "BASIC PLUS",
              class: "Q",
              includedCheckedBags: {
                quantity: 0,
              },
              amenities: [
                {
                  description: "CHECKED BAG SECOND",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG THIRD",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FIRST BAG",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "PRE RESERVED SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "BASIC MEAL",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGE BEFORE DEPARTURE",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGE AFTER DEPARTURE",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "QBCRTUS",
              brandedFare: "BASICPLUS",
              brandedFareLabel: "BASIC PLUS",
              class: "Q",
              includedCheckedBags: {
                quantity: 0,
              },
              amenities: [
                {
                  description: "CHECKED BAG SECOND",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG THIRD",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FIRST BAG",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "PRE RESERVED SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "BASIC MEAL",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGE BEFORE DEPARTURE",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGE AFTER DEPARTURE",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "2",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2024-05-28",
      lastTicketingDateTime: "2024-05-28",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT10H50M",
          segments: [
            {
              departure: {
                iataCode: "LAX",
                terminal: "B",
                at: "2024-06-01T19:45:00",
              },
              arrival: {
                iataCode: "ORY",
                terminal: "4",
                at: "2024-06-02T15:35:00",
              },
              carrierCode: "TX",
              number: "6731",
              aircraft: {
                code: "359",
              },
              operating: {
                carrierCode: "BF",
              },
              duration: "PT10H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT11H40M",
          segments: [
            {
              departure: {
                iataCode: "ORY",
                terminal: "4",
                at: "2024-06-10T14:50:00",
              },
              arrival: {
                iataCode: "LAX",
                terminal: "B",
                at: "2024-06-10T17:30:00",
              },
              carrierCode: "TX",
              number: "6730",
              aircraft: {
                code: "359",
              },
              operating: {
                carrierCode: "BF",
              },
              duration: "PT11H40M",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "847.20",
        base: "461.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "847.20",
        additionalServices: [
          {
            amount: "150.00",
            type: "CHECKED_BAGS",
          },
        ],
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: false,
      },
      validatingAirlineCodes: ["TX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "847.20",
            base: "461.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "TBCRTUS",
              brandedFare: "EBASIC",
              brandedFareLabel: "ECO BASIC",
              class: "T",
              includedCheckedBags: {
                quantity: 0,
              },
              amenities: [
                {
                  description: "CHECKED BAG FIRST",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG SECOND",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG THIRD",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "BAGGAGE DELIVERY AIRPORT",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "PRE RESERVED SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "TEENAGER MEAL",
                  isChargeable: true,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "TBCRTUS",
              brandedFare: "EBASIC",
              brandedFareLabel: "ECO BASIC",
              class: "T",
              includedCheckedBags: {
                quantity: 0,
              },
              amenities: [
                {
                  description: "CHECKED BAG FIRST",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG SECOND",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHECKED BAG THIRD",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "BAGGAGE DELIVERY AIRPORT",
                  isChargeable: true,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "PRE RESERVED SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "TEENAGER MEAL",
                  isChargeable: true,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const flightOffer = {
  type: "flight-offer",
  id: "1",
  source: "GDS",
  instantTicketingRequired: false,
  nonHomogeneous: false,
  oneWay: false,
  lastTicketingDate: "2024-05-28",
  lastTicketingDateTime: "2024-05-28",
  numberOfBookableSeats: 9,
  itineraries: [
    {
      duration: "PT10H50M",
      segments: [
        {
          departure: {
            iataCode: "LAX",
            terminal: "B",
            at: "2024-06-01T19:45:00",
          },
          arrival: {
            iataCode: "ORY",
            terminal: "4",
            at: "2024-06-02T15:35:00",
          },
          carrierCode: "BF",
          number: "731",
          aircraft: {
            code: "359",
          },
          operating: {
            carrierCode: "BF",
          },
          duration: "PT10H50M",
          id: "2",
          numberOfStops: 0,
          blacklistedInEU: false,
        },
      ],
    },
    {
      duration: "PT11H40M",
      segments: [
        {
          departure: {
            iataCode: "ORY",
            terminal: "4",
            at: "2024-06-10T14:50:00",
          },
          arrival: {
            iataCode: "LAX",
            terminal: "B",
            at: "2024-06-10T17:30:00",
          },
          carrierCode: "BF",
          number: "730",
          aircraft: {
            code: "359",
          },
          operating: {
            carrierCode: "BF",
          },
          duration: "PT11H40M",
          id: "10",
          numberOfStops: 0,
          blacklistedInEU: false,
        },
      ],
    },
  ],
  price: {
    currency: "EUR",
    total: "847.20",
    base: "461.00",
    fees: [
      {
        amount: "0.00",
        type: "SUPPLIER",
      },
      {
        amount: "0.00",
        type: "TICKETING",
      },
    ],
    grandTotal: "847.20",
    additionalServices: [
      {
        amount: "120.00",
        type: "CHECKED_BAGS",
      },
    ],
  },
  pricingOptions: {
    fareType: ["PUBLISHED"],
    includedCheckedBagsOnly: false,
  },
  validatingAirlineCodes: ["BF"],
  travelerPricings: [
    {
      travelerId: "1",
      fareOption: "STANDARD",
      travelerType: "ADULT",
      price: {
        currency: "EUR",
        total: "847.20",
        base: "461.00",
      },
      fareDetailsBySegment: [
        {
          segmentId: "2",
          cabin: "ECONOMY",
          fareBasis: "QBCRTUS",
          brandedFare: "BASICPLUS",
          brandedFareLabel: "BASIC PLUS",
          class: "Q",
          includedCheckedBags: {
            quantity: 0,
          },
          amenities: [
            {
              description: "CHECKED BAG SECOND",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHECKED BAG THIRD",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "FIRST BAG",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "PRE RESERVED SEAT ASSIGNMENT",
              isChargeable: true,
              amenityType: "PRE_RESERVED_SEAT",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "BASIC MEAL",
              isChargeable: false,
              amenityType: "MEAL",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHANGE BEFORE DEPARTURE",
              isChargeable: true,
              amenityType: "BRANDED_FARES",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHANGE AFTER DEPARTURE",
              isChargeable: true,
              amenityType: "BRANDED_FARES",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
          ],
        },
        {
          segmentId: "10",
          cabin: "ECONOMY",
          fareBasis: "QBCRTUS",
          brandedFare: "BASICPLUS",
          brandedFareLabel: "BASIC PLUS",
          class: "Q",
          includedCheckedBags: {
            quantity: 0,
          },
          amenities: [
            {
              description: "CHECKED BAG SECOND",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHECKED BAG THIRD",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "FIRST BAG",
              isChargeable: true,
              amenityType: "BAGGAGE",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "PRE RESERVED SEAT ASSIGNMENT",
              isChargeable: true,
              amenityType: "PRE_RESERVED_SEAT",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "BASIC MEAL",
              isChargeable: false,
              amenityType: "MEAL",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHANGE BEFORE DEPARTURE",
              isChargeable: true,
              amenityType: "BRANDED_FARES",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
            {
              description: "CHANGE AFTER DEPARTURE",
              isChargeable: true,
              amenityType: "BRANDED_FARES",
              amenityProvider: {
                name: "BrandedFare",
              },
            },
          ],
        },
      ],
    },
  ],
};

import React from "react";
import Amadeus from "amadeus";
import FlightCard from "./FlightCard";

//VARIABLES TO QUERY FROM. LOOK @ AMADEUS API!

async function FetchFlights() {
  // const amadeus = new Amadeus({
  //   clientId: `${process.env.AMADEUS_API_KEY}`,
  //   clientSecret: `${process.env.AMADEUS_API_SECRET}`,
  // });

  // console.log(getAirportByIata("LAX"));

  // const res = await amadeus.shopping.flightOffersSearch.get({
  //   originLocationCode: "SYD",
  //   destinationLocationCode: "BKK",
  //   departureDate: "2024-06-01",
  //   adults: "2",
  //   max: "3",
  // });

  // console.log(res.data); //it works -> returns an array similar to the one above!

  return (
    <section>
      <h1 className="my-2 text-center">RESULTS of SEARCH:</h1>
      {flightOffers.data.map((flightOffer, index) => (
        <FlightCard
          flightOffer={flightOffer}
          index={index}
          key={`${flightOffer.price.total}-${flightOffer.price.currency}-${flightOffer.itineraries[0].segments[0].carrierCode}-${flightOffer.itineraries[0].segments[0].number}`}
        />
      ))}
    </section>
  );
}

export default FetchFlights;
