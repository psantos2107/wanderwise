//file to hold dummy data for the different 

export const flightsPlaceholder = {
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

export const singleFlight = {
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
