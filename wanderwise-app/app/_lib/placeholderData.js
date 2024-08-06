//file to hold dummy data for the different things. will delete in production.

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

export const tripCardData = [
  {
    id: "2",
    start_date: "2024-06-15",
    end_date: "2024-06-21",
    flight_booked: false,
    hotel_booked: true,
    destination_city: "Maniila",
    destination_country: "Philippines",
    updated_at: "2024-06-06 @ 23:09",
  },
  {
    id: "3",
    start_date: "2024-06-15",
    end_date: "2024-06-21",
    flight_booked: false,
    hotel_booked: true,
    destination_city: "Lover Land",
    destination_country: "Philippines",
    updated_at: "2024-06-06 @ 23:09",
  },
];

export const tripAdvisorAttractions = {
  data: [
    {
      location_id: "151972",
      name: "Bahia de Los Angeles",
      address_obj: {
        street1: "",
        street2: "",
        city: "Bahia de Los Angeles",
        state: "Baja California Norte",
        country: "Mexico",
        postalcode: "22890",
        address_string:
          "Bahia de Los Angeles, Ensenada Municipality 22890 Mexico",
      },
    },
    {
      location_id: "560853",
      name: "Los Angeles Convention Center",
      address_obj: {
        street1: "1201 S Figueroa St",
        street2: "",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90015-1308",
        address_string: "1201 S Figueroa St, Los Angeles, CA 90015-1308",
      },
    },
    {
      location_id: "491889",
      name: "Metro Los Angeles",
      address_obj: {
        street1: "1 Gateway Plaza",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90012-3745",
        address_string: "1 Gateway Plaza, Los Angeles, CA 90012-3745",
      },
    },
    {
      location_id: "106166",
      name: "Los Angeles County Museum of Art",
      address_obj: {
        street1: "5905 Wilshire Blvd",
        street2: "",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90036-4597",
        address_string: "5905 Wilshire Blvd, Los Angeles, CA 90036-4597",
      },
    },
    {
      location_id: "560855",
      name: "Los Angeles Memorial Coliseum",
      address_obj: {
        street1: "3911 S Figueroa St",
        street2: "Exposition Park",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90037-1207",
        address_string:
          "3911 S Figueroa St Exposition Park, Los Angeles, CA 90037-1207",
      },
    },
    {
      location_id: "144145",
      name: "University of California, Los Angeles (UCLA)",
      address_obj: {
        street1: "Sunset Blvd.",
        street2: "",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "",
        address_string: "Sunset Blvd., Los Angeles, CA",
      },
    },
    {
      location_id: "15084575",
      name: "The Port of Los Angeles",
      address_obj: {
        street1: "425 South Palos Verdes Street",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90731",
        address_string: "425 South Palos Verdes Street, Los Angeles, CA 90731",
      },
    },
    {
      location_id: "8399942",
      name: "Los Angeles Termal",
      address_obj: {
        street1: "Vereda Agua Caliente",
        city: "Rivera",
        country: "Colombia",
        address_string: "Vereda Agua Caliente, Rivera Colombia",
      },
    },
    {
      location_id: "116885",
      name: "Los Angeles Zoo & Botanical Gardens",
      address_obj: {
        street1: "5333 Zoo Dr",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90027-1451",
        address_string: "5333 Zoo Dr, Los Angeles, CA 90027-1451",
      },
    },
    {
      location_id: "143621",
      name: "Los Angeles Central Library",
      address_obj: {
        street1: "630 W 5th St",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postalcode: "90071-2002",
        address_string: "630 W 5th St, Los Angeles, CA 90071-2002",
      },
    },
  ],
};

export const conventionCenter = [
  {
    location_id: "560853",
    name: "Los Angeles Convention Center",
    description:
      "The Los Angeles Convention Center attracts millions of visitors annually and is renowned internationally as a prime site for conventions, trade shows, and exhibitions. Located in the cultural, business, and entertainment mecca of Downtown Los Angeles, the LACC is an integral economic component of the Southern California area, and remains an enduring symbol of environmental sustainability and social responsibility for our community. First opened to the public in 1971, the LACC has since undergone modernization and expansion; as a testament to our continuous effort to enhance our facility and services, the LACC is embarking on its fourth phase of renovation under AEG’s management this year. The year-long transformation will enhance both functionality and aesthetics of the LACC, and will include replacing existing carpet, installing the latest energy-efficient products such as “cool roofs” and new air handling units, completely remodeling the theatre, and upgrading IT infrastructure and operating systems throughout the Center.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g32655-d560853-Reviews-Los_Angeles_Convention_Center-Los_Angeles_California.html?m=66827",
    address_obj: {
      street1: "1201 S Figueroa St",
      street2: "",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90015-1308",
      address_string: "1201 S Figueroa St, Los Angeles, CA 90015-1308",
    },
    ancestors: [
      {
        level: "City",
        name: "Los Angeles",
        location_id: "32655",
      },
      {
        abbrv: "CA",
        level: "State",
        name: "California",
        location_id: "28926",
      },
      {
        level: "Country",
        name: "United States",
        location_id: "191",
      },
    ],
    latitude: "34.04297",
    longitude: "-118.26955",
    timezone: "America/Los_Angeles",
    phone: "+1 213-741-1151",
    website: "http://www.lacclink.com",
    write_review:
      "https://www.tripadvisor.com/UserReview-g32655-d560853-Los_Angeles_Convention_Center-Los_Angeles_California.html?m=66827",
    ranking_data: {
      geo_location_id: "32655",
      ranking_string: "#83 of 926 things to do in Los Angeles",
      geo_location_name: "Los Angeles",
      ranking_out_of: "926",
      ranking: "83",
    },
    rating: "4.0",
    rating_image_url:
      "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-66827-5.svg",
    num_reviews: "227",
    review_rating_count: {
      1: "8",
      2: "6",
      3: "43",
      4: "78",
      5: "92",
    },
    photo_count: "199",
    see_all_photos:
      "https://www.tripadvisor.com/Attraction_Review-g32655-d560853-m66827-Reviews-Los_Angeles_Convention_Center-Los_Angeles_California.html#photos",
    hours: {
      periods: [
        {
          open: { day: 1, time: "0800" },
          close: { day: 1, time: "1700" },
        },
        {
          open: { day: 2, time: "0800" },
          close: { day: 2, time: "1700" },
        },
        {
          open: { day: 3, time: "0800" },
          close: { day: 3, time: "1700" },
        },
        {
          open: { day: 4, time: "0800" },
          close: { day: 4, time: "1700" },
        },
        {
          open: { day: 5, time: "0800" },
          close: { day: 5, time: "1700" },
        },
        {
          open: { day: 6, time: "0800" },
          close: { day: 6, time: "1700" },
        },
        {
          open: { day: 7, time: "0800" },
          close: { day: 7, time: "1700" },
        },
      ],
      weekday_text: [
        "Monday: 08:00 - 17:00",
        "Tuesday: 08:00 - 17:00",
        "Wednesday: 08:00 - 17:00",
        "Thursday: 08:00 - 17:00",
        "Friday: 08:00 - 17:00",
        "Saturday: 08:00 - 17:00",
        "Sunday: 08:00 - 17:00",
      ],
    },
    category: {
      name: "attraction",
      localized_name: "Attraction",
    },
    subcategory: [
      {
        name: "traveler_resources",
        localized_name: "Traveler Resources",
      },
      {
        name: "attractions",
        localized_name: "Attractions",
      },
    ],
    groups: [
      {
        name: "Traveler Resources",
        localized_name: "Traveler Resources",
        categories: [
          {
            name: "Conference & Convention Centers",
            localized_name: "Conference & Convention Centers",
          },
        ],
      },
    ],
    neighborhood_info: [
      {
        location_id: "7231034",
        name: "Downtown",
      },
      {
        location_id: "20933761",
        name: "Central L.A",
      },
    ],
    trip_types: [
      {
        name: "business",
        localized_name: "Business",
        value: "83",
      },
      {
        name: "couples",
        localized_name: "Couples",
        value: "19",
      },
      {
        name: "solo",
        localized_name: "Solo travel",
        value: "20",
      },
      {
        name: "family",
        localized_name: "Family",
        value: "28",
      },
      {
        name: "friends",
        localized_name: "Friends getaway",
        value: "23",
      },
    ],
    awards: [],
  },
];

export const hotels = [
  {
    location_id: "23845025",
    name: "Conrad Los Angeles",
    description:
      "Daily Mandatory Charge includes: Destination Charge with premium internet access; daily $15 food and beverage credit; house car use; Conrad Spa dry sauna & tea blending bar; in-lobby premium coffee; RunGo app access for trails; PressReader. Mandatory Charge also includes CA & LA Tourism Assessments. Surrounded by iconic art, theatre, and music institutions, Conrad Los Angeles channels the bold originality, creative innovation and dynamic energy that fuels Downtown LA's newest cultural corridor. Heralded by the vision of legendary architect Frank Gehry, our hotel is an elegant destination for vibrant social events, remarkable gatherings and curated dining experiences by acclaimed chef and humanitarian Jose Andres. Here, framed by dramatic views of the Walt Disney Concert Hall and Downtown LA, discover energizing experiences that will ignite your inspiration.",
    web_url:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d23845025-Reviews-Conrad_Los_Angeles-Los_Angeles_California.html?m=66827",
    address_obj: {
      street1: "100 South Grand Ave.",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90012",
      address_string: "100 South Grand Ave., Los Angeles, CA 90012",
    },
    ancestors: [[Object], [Object], [Object]],
    latitude: "34.055176",
    longitude: "-118.24858",
    timezone: "America/Los_Angeles",
    phone: "18556184701",
    write_review:
      "https://www.tripadvisor.com/UserReview-g32655-d23845025-Conrad_Los_Angeles-Los_Angeles_California.html?m=66827",
    ranking_data: {
      geo_location_id: "32655",
      ranking_string: "#63 of 425 hotels in Los Angeles",
      geo_location_name: "Los Angeles",
      ranking_out_of: "425",
      ranking: "63",
    },
    rating: "4.5",
    rating_image_url:
      "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg",
    num_reviews: "144",
    review_rating_count: { 1: "7", 2: "10", 3: "5", 4: "6", 5: "116" },
    subratings: {
      0: [Object],
      1: [Object],
      2: [Object],
      3: [Object],
      4: [Object],
      5: [Object],
    },
    photo_count: "672",
    see_all_photos:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d23845025-m66827-Reviews-Conrad_Los_Angeles-Los_Angeles_California.html#photos",
    price_level: "$$$$",
    amenities: [
      "Pool",
      "Internet",
      "Suites",
      "Room service",
      "Free Internet",
      "Wheelchair access",
      "Restaurant",
      "Spa",
      "Wifi",
      "Free Wifi",
      "Dry Cleaning",
      "Meeting rooms",
      "Non-smoking rooms",
      "Business center",
      "Fitness center",
      "Laundry Service",
      "Concierge",
      "Electric vehicle charging station",
      "English",
      "Pool with View",
      "Spanish",
      "Kids Activities",
      "Bar/Lounge",
      "Pets Allowed",
      "Banquet Room",
      "Air conditioning",
      "Accessible rooms",
      "Minibar",
      "Conference Facilities",
      "Non-smoking hotel",
      "Safe",
      "Rooftop Pool",
      "Heated pool",
      "Flatscreen TV",
      "Rooftop Terrace",
      "Poolside Bar",
      "Outdoor pool",
      "Breakfast Available",
      "Facilities for Disabled Guests",
      "Housekeeping",
      "Sauna",
      "Baggage Storage",
      "Bathrobes",
      "Blackout Curtains",
      "Body Wrap",
      "Bottled Water",
      "Breakfast in the Room",
      "Cable / Satellite TV",
      "Children's Television Networks",
      "Clothes Rack",
      "Couples Massage",
      "Desk",
      "Facial Treatments",
      "Fitness Classes",
      "Fitness / Spa Locker Rooms",
      "Complimentary Toiletries",
      "24-Hour Front Desk",
      "Full Body Massage",
      "Hair Dryer",
      "Happy Hour",
      "Highchairs Available",
      "Iron",
      "Kids' Meals",
      "Landmark View",
      "Light Therapy",
      "Massage",
      "Mountain View",
      "Newspaper",
      "Outdoor Dining Area",
      "Outdoor Fireplace",
      "Outdoor Furniture",
      "Patio",
      "Pool / Beach Towels",
      "Pool View",
      "Private Bathrooms",
      "Paid Private Parking On-site",
      "Seating Area",
      "24-Hour Security",
      "Secured Parking",
      "Shoeshine",
      "Shops",
      "Sofa",
      "Steam Room",
      "Sun Deck",
      "Sun Loungers / Beach Chairs",
      "Sun Terrace",
      "Sun Umbrellas",
      "Telephone",
      "Valet Parking",
      "Wake Up Service / Alarm Clock",
      "Walk-in Shower",
      "Walking Tours",
      "Wardrobe / Closet",
      "Wine / Champagne",
      "Yoga Classes",
    ],
    parent_brand: "Hilton Worldwide",
    brand: "Conrad Hotels & Resorts",
    category: { name: "hotel", localized_name: "Hotel" },
    subcategory: [[Object]],
    styles: ["Luxury", "Romantic"],
    neighborhood_info: [],
    trip_types: [[Object], [Object], [Object], [Object], [Object]],
    awards: [[Object]],
  },
  {
    location_id: "77798",
    name: "Sheraton Grand Los Angeles",
    description:
      "Thrive brimming with style and substance at Sheraton Grand Los Angeles. Head to District Kitchen & Bar, our innovative on-site restaurant serving creative libations and farm-to-table cuisine. Work and play like a Los Angeleno at our fully equipped Sheraton Fitness center. If you are planning a professional meeting, special event, or a lavish wedding, ask about our indoor and outdoor event venues offering more than 35,000 square feet of space. After a busy day in DTLA, unwind in beautiful dog-friendly hotel rooms or suites. Make your stay extraordinary at Sheraton Grand Los Angeles.",
    web_url:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d77798-Reviews-Sheraton_Grand_Los_Angeles-Los_Angeles_California.html?m=66827",
    address_obj: {
      street1: "711 South Hope Street",
      street2: "",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90017-3803",
      address_string: "711 South Hope Street, Los Angeles, CA 90017-3803",
    },
    ancestors: [[Object], [Object], [Object]],
    latitude: "34.047775",
    longitude: "-118.25814",
    timezone: "America/Los_Angeles",
    phone: "18446310595",
    write_review:
      "https://www.tripadvisor.com/UserReview-g32655-d77798-Sheraton_Grand_Los_Angeles-Los_Angeles_California.html?m=66827",
    ranking_data: {
      geo_location_id: "32655",
      ranking_string: "#37 of 425 hotels in Los Angeles",
      geo_location_name: "Los Angeles",
      ranking_out_of: "425",
      ranking: "37",
    },
    rating: "4.5",
    rating_image_url:
      "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg",
    num_reviews: "1565",
    review_rating_count: { 1: "42", 2: "33", 3: "90", 4: "377", 5: "1023" },
    subratings: {
      0: [Object],
      1: [Object],
      2: [Object],
      3: [Object],
      4: [Object],
      5: [Object],
    },
    photo_count: "700",
    see_all_photos:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d77798-m66827-Reviews-Sheraton_Grand_Los_Angeles-Los_Angeles_California.html#photos",
    price_level: "$$$",
    hours: { periods: [Array], weekday_text: [Array] },
    amenities: [
      "Pets Allowed",
      "Breakfast Available",
      "Wifi",
      "Meeting rooms",
      "Internet",
      "Suites",
      "Room service",
      "Free Internet",
      "Wheelchair access",
      "Restaurant",
      "Bar/Lounge",
      "Public Wifi",
      "Dry Cleaning",
      "Non-smoking rooms",
      "Fitness center",
      "Banquet Room",
      "Air conditioning",
      "Family Rooms",
      "Multilingual Staff",
      "Refrigerator in room",
      "Conference Facilities",
      "Non-smoking hotel",
      "Safe",
      "Flatscreen TV",
      "Parking",
      "Facilities for Disabled Guests",
      "Housekeeping",
      "Bath / Shower",
      "Bottled Water",
      "Coffee / Tea Maker",
      "Desk",
      "English",
      "24-Hour Front Desk",
      "Hair Dryer",
      "Iron",
      "On-Demand Movies",
      "Paid Public Parking Nearby",
      "Seating Area",
      "24-Hour Security",
      "Secured Parking",
      "Shared Lounge / TV Area",
      "Spanish",
      "Taxi Service",
      "Telephone",
      "Wake Up Service / Alarm Clock",
      "Kids Stay Free",
      "Bowling Off-site",
      "Cable / Satellite TV",
      "Car Hire",
      "Express Check-in / Check-out",
      "Electric Kettle",
      "Executive Lounge Access",
      "Interconnected room(s) available",
      "Newspaper",
      "Patio",
      "Radio",
      "Shops",
      "Sofa",
      "Sofa Bed",
      "Valet Parking",
      "Vending Machine",
      "Walk-in Shower",
    ],
    parent_brand: "Marriott",
    brand: "Sheraton (Marriott Bonvoy)",
    category: { name: "hotel", localized_name: "Hotel" },
    subcategory: [[Object]],
    styles: ["Modern", "Value"],
    neighborhood_info: [[Object], [Object]],
    trip_types: [[Object], [Object], [Object], [Object], [Object]],
    awards: [[Object], [Object]],
  },
  {
    location_id: "78694",
    name: "Hilton Los Angeles / Universal City",
    description:
      "Experience this AAA 4 Diamond hotel, situated just a block away from the entrance to Universal Studios and minutes from Hollywood. The Hilton Los Angeles/Universal City hotel is perfect for travelers looking to explore some of Los Angeles' greatest attractions. All guest rooms and suites feature attractive decor and have high-speed internet access. Keep up-to-date with work at any time in the 24-hour business center. Have a Hollywood wedding in the 16,000 sq. ft. Sierra Ballroom, or hold conferences and meetings in the hotel's 32,000 sq. ft. of function space. Enjoy local cuisine in the Café Sierra hotel restaurant, which offers California, Continental and Chinese cuisine in a modern, brightly lit setting.",
    web_url:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d78694-Reviews-Hilton_Los_Angeles_Universal_City-Los_Angeles_California.html?m=66827",
    address_obj: {
      street1: "555 Universal Hollywood Drive",
      street2: "",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "91608-1001",
      address_string:
        "555 Universal Hollywood Drive, Los Angeles, CA 91608-1001",
    },
    ancestors: [[Object], [Object], [Object]],
    latitude: "34.136444",
    longitude: "-118.35804",
    timezone: "America/Los_Angeles",
    phone: "18556050316",
    write_review:
      "https://www.tripadvisor.com/UserReview-g32655-d78694-Hilton_Los_Angeles_Universal_City-Los_Angeles_California.html?m=66827",
    ranking_data: {
      geo_location_id: "32655",
      ranking_string: "#23 of 425 hotels in Los Angeles",
      geo_location_name: "Los Angeles",
      ranking_out_of: "425",
      ranking: "23",
    },
    rating: "4.0",
    rating_image_url:
      "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-66827-5.svg",
    num_reviews: "5986",
    review_rating_count: { 1: "241", 2: "291", 3: "773", 4: "1770", 5: "2911" },
    subratings: {
      0: [Object],
      1: [Object],
      2: [Object],
      3: [Object],
      4: [Object],
      5: [Object],
    },
    photo_count: "2277",
    see_all_photos:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d78694-m66827-Reviews-Hilton_Los_Angeles_Universal_City-Los_Angeles_California.html#photos",
    price_level: "$$$$",
    hours: { periods: [Array], weekday_text: [Array] },
    amenities: [
      "Shuttle Bus Service",
      "Pool",
      "Room service",
      "Internet",
      "Suites",
      "Wifi",
      "Paid Wifi",
      "Paid Internet",
      "Meeting rooms",
      "Non-smoking rooms",
      "Wheelchair access",
      "Concierge",
      "Restaurant",
      "Bar/Lounge",
      "Public Wifi",
      "Dry Cleaning",
      "Hot Tub",
      "Business center",
      "Fitness center",
      "Banquet Room",
      "Air conditioning",
      "Family Rooms",
      "Multilingual Staff",
      "Accessible rooms",
      "Refrigerator in room",
      "Conference Facilities",
      "Non-smoking hotel",
      "Safe",
      "Heated pool",
      "Flatscreen TV",
      "Breakfast Buffet",
      "Poolside Bar",
      "Outdoor pool",
      "Parking",
      "Facilities for Disabled Guests",
      "Electric vehicle charging station",
      "ATM On Site",
      "Baggage Storage",
      "Breakfast in the Room",
      "Express Check-in / Check-out",
      "Coffee Shop",
      "Convenience Store",
      "Desk",
      "English",
      "Filipino",
      "Complimentary Instant Cofffee",
      "24-Hour Front Desk",
      "Gift Shop",
      "Interconnected room(s) available",
      "Iron",
      "Kids' Meals",
      "Kid-Friendly Buffet",
      "Newspaper",
      "On-Demand Movies",
      "Parking Garage",
      "Pool / Beach Towels",
      "Paid Private Parking On-site",
      "Paid Private Parking Nearby",
      "Seating Area",
      "24-Hour Security",
      "Shops",
      "Snack Bar",
      "Spanish",
      "Sun Loungers / Beach Chairs",
      "Taxi Service",
      "Valet Parking",
      "Wake Up Service / Alarm Clock",
      "Breakfast Available",
      "Chinese",
      "Vending Machine",
    ],
    parent_brand: "Hilton Worldwide",
    brand: "Hilton Hotels & Resorts",
    category: { name: "hotel", localized_name: "Hotel" },
    subcategory: [[Object]],
    styles: ["Park View", "Great View"],
    neighborhood_info: [[Object], [Object]],
    trip_types: [[Object], [Object], [Object], [Object], [Object]],
    awards: [[Object], [Object]],
  },
  {
    location_id: "8678267",
    name: "InterContinental Los Angeles Downtown",
    description:
      "As the tallest building west of Chicago, the InterContinental Los Angeles Downtown forever elevates the city skyline and is paired seamlessly with a genuinely personable commitment to service excellence second to none. Located in the epicenter of Downtown and mere blocks from Staples Center and L.A. Live, the hotel leads the way as the new architectural icon of luxury hospitality. Featuring a 70th floor sky lobby and 889 guest rooms including 109 suites, there is a myriad of culinary venues: La Boucherie, a Wine Spectator award-winning steakhouse; Dekkadance, an international market experience; and Spire 73 – the tallest open-air bar in the Western Hemisphere – located atop the 73rd floor. The hotel also offers 95,000 sq. ft. of indoor/outdoor meeting and event space, an outdoor pool, an executive-style gym with classes and steam rooms, and a signature Club InterContinental Lounge.",
    web_url:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d8678267-Reviews-InterContinental_Los_Angeles_Downtown-Los_Angeles_California.html?m=66827",
    address_obj: {
      street1: "900 Wilshire Blvd",
      street2: "Vehicle entry on 7th St. between Figueroa and Francisco",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90017-4701",
      address_string:
        "900 Wilshire Blvd Vehicle entry on 7th St. between Figueroa and Francisco, Los Angeles, CA 90017-4701",
    },
    ancestors: [[Object], [Object], [Object]],
    latitude: "34.049725",
    longitude: "-118.26055",
    timezone: "America/Los_Angeles",
    phone: "18669783633",
    write_review:
      "https://www.tripadvisor.com/UserReview-g32655-d8678267-InterContinental_Los_Angeles_Downtown-Los_Angeles_California.html?m=66827",
    ranking_data: {
      geo_location_id: "32655",
      ranking_string: "#84 of 425 hotels in Los Angeles",
      geo_location_name: "Los Angeles",
      ranking_out_of: "425",
      ranking: "84",
    },
    rating: "4.0",
    rating_image_url:
      "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-66827-5.svg",
    num_reviews: "1098",
    review_rating_count: { 1: "77", 2: "64", 3: "129", 4: "220", 5: "608" },
    subratings: {
      0: [Object],
      1: [Object],
      2: [Object],
      3: [Object],
      4: [Object],
      5: [Object],
    },
    photo_count: "1778",
    see_all_photos:
      "https://www.tripadvisor.com/Hotel_Review-g32655-d8678267-m66827-Reviews-InterContinental_Los_Angeles_Downtown-Los_Angeles_California.html#photos",
    price_level: "$$$$",
    amenities: [
      "Pool",
      "Internet",
      "Suites",
      "Room service",
      "Free Internet",
      "Wheelchair access",
      "Restaurant",
      "Bar/Lounge",
      "Pets Allowed",
      "Wifi",
      "Public Wifi",
      "Free Wifi",
      "Dry Cleaning",
      "Meeting rooms",
      "Hot Tub",
      "Non-smoking rooms",
      "Fitness center",
      "Laundry Service",
      "Concierge",
      "Banquet Room",
      "Air conditioning",
      "Multilingual Staff",
      "Accessible rooms",
      "Minibar",
      "Conference Facilities",
      "Non-smoking hotel",
      "Safe",
      "Rooftop Bar",
      "Heated pool",
      "Flatscreen TV",
      "Rooftop Terrace",
      "Breakfast Buffet",
      "Poolside Bar",
      "Outdoor pool",
      "Breakfast Available",
      "Parking",
      "Facilities for Disabled Guests",
      "Housekeeping",
      "Baggage Storage",
      "Bath / Shower",
      "Bathrobes",
      "Blackout Curtains",
      "Breakfast in the Room",
      "Coffee Shop",
      "Desk",
      "Fitness / Spa Locker Rooms",
      "Complimentary Toiletries",
      "24-Hour Front Desk",
      "Hair Dryer",
      "Iron",
      "Ironing Service",
      "Nightclub / DJ",
      "On-Demand Movies",
      "Parking Garage",
      "Pool / Beach Towels",
      "Pool with View",
      "Paid Private Parking On-site",
      "24-Hour Security",
      "Secured Parking",
      "Spanish",
      "Sun Loungers / Beach Chairs",
      "Valet Parking",
      "VIP Room Facilities",
      "Sauna",
      "Electric vehicle charging station",
      "Allergy-free Room",
      "ATM On Site",
      "Bowling Off-site",
      "Bridal Suite",
      "Cable / Satellite TV",
      "24-Hour Check-in",
      "Express Check-in / Check-out",
      "Children's Television Networks",
      "Clothes Rack",
      "Coffee / Tea Maker",
      "Complimentary Tea",
      "Currency Exchange",
      "English",
      "Executive Lounge Access",
      "Happy Hour",
      "Highchairs Available",
      "Interconnected room(s) available",
      "Kid-Friendly Buffet",
      "Landmark View",
      "Laptop Safe",
      "Mountain View",
      "Outdoor Dining Area",
      "Outdoor Fireplace",
      "Outdoor Furniture",
      "Patio",
      "Personal Trainer",
      "Paid Public Parking Nearby",
      "Seating Area",
      "Shallow End",
      "Snack Bar",
      "Soundproof Rooms",
      "Special Diet Menus",
      "Steam Room",
      "Sun Terrace",
      "Sun Umbrellas",
    ],
    parent_brand: "InterContinental",
    brand: "InterContinental",
    category: { name: "hotel", localized_name: "Hotel" },
    styles: ["Mountain View", "Luxury"],
    awards: [],
  },
];

const data = [
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 1 Chome−4−5, ARK Hills South Tower, 1F",
    geometry: {
      location: {
        lat: 35.6653768,
        lng: 139.7395884,
      },
      viewport: {
        northeast: {
          lat: 35.66672552989273,
          lng: 139.7409183798927,
        },
        southwest: {
          lat: 35.66402587010728,
          lng: 139.7382187201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Saito",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1416,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113577665052972196164">alwaysudon うどんが主食</a>',
        ],
        photo_reference:
          "AelY_Cv6gXrNfs8HFBog58cjLys44P4-jZ29OAIVhyJMZ3rIWxCfeJ3k8CB0LTg8dtV3LluNbeCtgrero5OJERxzUvWjaEK64RM574ixpcwHgI3S-Ke-kuWWu-bcpIphqYvtRWueUio4vkgwo7ParoGZvnHxN_m-XxQXk-V8Wo6nL7gFDPap",
        width: 2128,
      },
    ],
    place_id: "ChIJscN5u4-LGGARIyRklEh6-e4",
    plus_code: {
      compound_code: "MP8Q+5R Minato City, Tokyo, Japan",
      global_code: "8Q7XMP8Q+5R",
    },
    price_level: 4,
    rating: 4.5,
    reference: "ChIJscN5u4-LGGARIyRklEh6-e4",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 411,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒160-0004 Tokyo, Shinjuku City, Yotsuya, 1 Chome−11 陽臨堂ビル 1F",
    geometry: {
      location: {
        lat: 35.6855805,
        lng: 139.7283196,
      },
      viewport: {
        northeast: {
          lat: 35.68690022989273,
          lng: 139.7296754798927,
        },
        southwest: {
          lat: 35.68420057010728,
          lng: 139.7269758201072,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Sho Yotsuya",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1280,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114215894777645403116">久我航大</a>',
        ],
        photo_reference:
          "AelY_CtBBr02-D7PubCDj64cJ_dn4GSa0Ab2af5J0tYry-vDUW2CjcQ11bpydVAvHqjQDxzJx4xni9W78D06QY71U-qAkHprSEe5qMNgo5PKGH56LdeyD1-oOJt0ZqgDzZ2008BbHW5BslbP4P3hxW2jOmwABOM4DXxyKFO2-IAKmNKEOx6m",
        width: 1920,
      },
    ],
    place_id: "ChIJSyag6ouMGGARSwIX8ayCNCM",
    plus_code: {
      compound_code: "MPPH+68 Shinjuku City, Tokyo, Japan",
      global_code: "8Q7XMPPH+68",
    },
    price_level: 4,
    rating: 4.6,
    reference: "ChIJSyag6ouMGGARSwIX8ayCNCM",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 398,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒106-0031 Tokyo, Minato City, Nishiazabu, 4 Chome−1−15 セブン西麻布 B1F",
    geometry: {
      location: {
        lat: 35.6595096,
        lng: 139.723112,
      },
      viewport: {
        northeast: {
          lat: 35.66089692989272,
          lng: 139.7244512798927,
        },
        southwest: {
          lat: 35.65819727010728,
          lng: 139.7217516201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushisho Masa",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113013272853689779959">Anna at HYC Design Inc.</a>',
        ],
        photo_reference:
          "AelY_CuE87WcPQaMQijx_EF4Oe8RbfhbdtMno0Zs33pnzazuvf75qikvjRfBaTC14QBYShpYq_Ynp9cB-Xjubanm7gGvadoTBVSSiCVY6dgKWJIWVa-EU63lg6_nZBHVjqz4G8OetfGAxB2whRV8EYCuU6g2F4-1P1Rw--ZyQMS9gU3Ilfxa",
        width: 4032,
      },
    ],
    place_id: "ChIJiRDLCnCLGGARiICs7YnthzQ",
    plus_code: {
      compound_code: "MP5F+R6 Minato City, Tokyo, Japan",
      global_code: "8Q7XMP5F+R6",
    },
    price_level: 4,
    rating: 4.8,
    reference: "ChIJiRDLCnCLGGARiICs7YnthzQ",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 203,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒160-0021 Tokyo, Shinjuku City, Kabukicho, 2 Chome−25−8 エコプレイス新宿 １F",
    geometry: {
      location: {
        lat: 35.6955779,
        lng: 139.703685,
      },
      viewport: {
        northeast: {
          lat: 35.69692907989272,
          lng: 139.7050351798927,
        },
        southwest: {
          lat: 35.69422942010728,
          lng: 139.7023355201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "KABUKI Sushi",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/112830019027779052393">Cosimo Viesti</a>',
        ],
        photo_reference:
          "AelY_CsWKAPTFJL4G3M_VObn5N8-2myflWvvy_a1qNT1ADuUxZ_5bPqAcqe-YxogmX04JgNGQx5hUgx_YbY0HN_CIaj0cVYrvajB4zfsLkgXtJNgSRLL51DrYFI9X6WXZ4AD9fC8KJaLYrbmAjbh5T5jO1bAR-5aOfBtWfQulZreOpludzMc",
        width: 3024,
      },
    ],
    place_id: "ChIJoZJ6S72NGGAR0rjOmnbB5LM",
    plus_code: {
      compound_code: "MPW3+6F Shinjuku City, Tokyo, Japan",
      global_code: "8Q7XMPW3+6F",
    },
    rating: 4.7,
    reference: "ChIJoZJ6S72NGGAR0rjOmnbB5LM",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 970,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "8 Chome-7-6 Ginza, Chuo City, Tokyo 104-0061, Japan",
    geometry: {
      location: {
        lat: 35.6684684,
        lng: 139.7612701,
      },
      viewport: {
        northeast: {
          lat: 35.66979807989273,
          lng: 139.7626539798927,
        },
        southwest: {
          lat: 35.66709842010728,
          lng: 139.7599543201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Kyūbey",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/103112361268002091708">A Google User</a>',
        ],
        photo_reference:
          "AelY_Ctve0sQ3X67Mwgmmxr9vv3unCLRuG5_w_yPDPD6Bba4J8ZgJuCKl68RPDOADRZa9KKK7KurjXeNxhQVyz1ys8Lfz8vxP5UBYuSWqdaYkzk1j8RkxOWL-sP_6zgXxnHSRNYOr3m91gSSjlSYtyyvld97_BQs_q1rd8cRHtNzlAolqpUF",
        width: 4032,
      },
    ],
    place_id: "ChIJu3eG8uiLGGAR14kVvD_YrHI",
    plus_code: {
      compound_code: "MQ96+9G Chuo City, Tokyo, Japan",
      global_code: "8Q7XMQ96+9G",
    },
    price_level: 1,
    rating: 4.3,
    reference: "ChIJu3eG8uiLGGAR14kVvD_YrHI",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 2245,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 8 Chome−10−2 ルアンビル 地下1F",
    geometry: {
      location: {
        lat: 35.6680723,
        lng: 139.7627141,
      },
      viewport: {
        northeast: {
          lat: 35.66935987989272,
          lng: 139.7641155798927,
        },
        southwest: {
          lat: 35.66666022010728,
          lng: 139.7614159201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Arai",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3096,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102354029656568764801">MZ IS</a>',
        ],
        photo_reference:
          "AelY_CscVQHdUaAontDIFjOmkTe2h-l_XsL7SY6FzM8c6mKQ9WdGJTDf4qH8k_vB3XR1yprwshT56YqfKvb-zgQWwJc1qeWHDn3NrU2oq-bV-_tOZ_BKqY88I8PlyCgaUglY0c-h2ePFHtx2raVRRUskid0Sjzyh32DMxzw4mJlMe1O5gxQa",
        width: 5504,
      },
    ],
    place_id: "ChIJOTwf1ueLGGAR8t0EkQWReM0",
    plus_code: {
      compound_code: "MQ97+63 Chuo City, Tokyo, Japan",
      global_code: "8Q7XMQ97+63",
    },
    price_level: 4,
    rating: 4.6,
    reference: "ChIJOTwf1ueLGGAR8t0EkQWReM0",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 268,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒100-0005 Tokyo, Chiyoda City, Marunouchi, 1 Chome−1−1 パレスホテル東京 6階",
    geometry: {
      location: {
        lat: 35.6846,
        lng: 139.761,
      },
      viewport: {
        northeast: {
          lat: 35.68603317989272,
          lng: 139.7621797798927,
        },
        southwest: {
          lat: 35.68333352010728,
          lng: 139.7594801201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Kanesaka Palace Hotel Tokyo",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114892084673355994466">Atichon Charoenchainow</a>',
        ],
        photo_reference:
          "AelY_CvWD-c0fu76VBL7oF2KoQH1f3njVxAESdKahirfg8mtCeymZkyEmGzbBKM6lB0HrRXzw9Ex3pBOsFJ_ZkaskPN02n7Dqzg2uWuFEbO4cl9JH7jSoK99adtSo9ltZdr2UoHsArsks_XuYJJECxC-ZIp83Mlt9TOs6fafpr1Yob5lWmI9",
        width: 3024,
      },
    ],
    place_id: "ChIJ7VMKEAiMGGARwI1hrc3Fo_0",
    plus_code: {
      compound_code: "MQM6+R9 Chiyoda City, Tokyo, Japan",
      global_code: "8Q7XMQM6+R9",
    },
    rating: 4.5,
    reference: "ChIJ7VMKEAiMGGARwI1hrc3Fo_0",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 198,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−12−12 河西ビル 1F",
    geometry: {
      location: {
        lat: 35.6899828,
        lng: 139.6972998,
      },
      viewport: {
        northeast: {
          lat: 35.69137697989272,
          lng: 139.6986490798928,
        },
        southwest: {
          lat: 35.68867732010727,
          lng: 139.6959494201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Uogashi Nihon-Ichi",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1080,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/105234471069826383514">沙亜也中馬</a>',
        ],
        photo_reference:
          "AelY_CsQpiyfVx7Cx4PGAjzxvynDpfRiXgUGR1bJM5EkW5iyxTdFRXQCn3ct3lf7HzzwY-yW7Y9dNVfGg56SDPXI8J7N7AhRgYQqUn_roJA-daxA0jlMU76m1cqo4CKFB5id_ww40GKUk3dEG8hrB-Kfg31OGqUTwr2z2fgnN3rKfeIeZRwu",
        width: 1920,
      },
    ],
    place_id: "ChIJ5-LVSdGMGGARO2nfNb18X8c",
    plus_code: {
      compound_code: "MMQW+XW Shinjuku City, Tokyo, Japan",
      global_code: "8Q7XMMQW+XW",
    },
    price_level: 2,
    rating: 4.4,
    reference: "ChIJ5-LVSdGMGGARO2nfNb18X8c",
    types: ["bar", "restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 1868,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒107-0052 Tokyo, Minato City, Akasaka, 3 Chome−10−1 赤坂田町通り 対翠館ビル １階",
    geometry: {
      location: {
        lat: 35.6764437,
        lng: 139.7366623,
      },
      viewport: {
        northeast: {
          lat: 35.67781127989272,
          lng: 139.7379565298927,
        },
        southwest: {
          lat: 35.67511162010727,
          lng: 139.7352568701072,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "TOKYO SUSHI ITAMAE SUSHI Akasaka",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109816081070604461699">Ludy Aguirre</a>',
        ],
        photo_reference:
          "AelY_CvSb_07FQKjRCP8A8J7sTRfmjdTW-PII6QIg0m8I4tKVUUqjOdPTbHzOmJCtxNLIT6JUCbCfps81xcR47GpTGD4RtBaQxUraVNpE5FFKeymbNtBLMoZeJIcRk6ce55ZnrV3m3oVrNvPyevo1ormj6feTWxFoGTFwJCEzvVS2Jq3gX6i",
        width: 4032,
      },
    ],
    place_id: "ChIJf2Ir03iMGGAR07q54wEmmFw",
    plus_code: {
      compound_code: "MPGP+HM Minato City, Tokyo, Japan",
      global_code: "8Q7XMPGP+HM",
    },
    price_level: 2,
    rating: 4.2,
    reference: "ChIJf2Ir03iMGGAR07q54wEmmFw",
    types: [
      "meal_takeaway",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 1363,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "アットホームスクエア 2F, 4 Chome-24-8 Minamiaoyama, Minato City, Tokyo 107-0062, Japan",
    geometry: {
      location: {
        lat: 35.6623165,
        lng: 139.7178219,
      },
      viewport: {
        northeast: {
          lat: 35.66363737989271,
          lng: 139.7191473298927,
        },
        southwest: {
          lat: 35.66093772010727,
          lng: 139.7164476701072,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi m",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 4894,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109387502370702817160">A Google User</a>',
        ],
        photo_reference:
          "AelY_CsmbXIzno_wIGhiLisFxx4qAePcyGNBEKRnigRi8jsj_HlScYvBd-pQqZ0oob_-NcJLUKiApwqDbIf_0NTEZWTCpR6pcArPIFWWg-3_DxmMLAi--apiNkG_ISSa0RPGMJ13WQOR6kRDpEPZchCLpw6vKxT3w7xy08LMU9f71lfDueQU",
        width: 3915,
      },
    ],
    place_id: "ChIJH1xHzRuLGGARzz4nQntblww",
    plus_code: {
      compound_code: "MP69+W4 Minato City, Tokyo, Japan",
      global_code: "8Q7XMP69+W4",
    },
    rating: 4.6,
    reference: "ChIJH1xHzRuLGGARzz4nQntblww",
    types: [
      "grocery_or_supermarket",
      "bar",
      "store",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 142,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒106-0031 Tokyo, Minato City, Nishiazabu, 2 Chome−15−1 三澤ビル B1",
    geometry: {
      location: {
        lat: 35.6616559,
        lng: 139.7209961,
      },
      viewport: {
        northeast: {
          lat: 35.66301237989272,
          lng: 139.7223520298927,
        },
        southwest: {
          lat: 35.66031272010728,
          lng: 139.7196523701072,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Sho Nishiazabu",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/112732900213413666506">A Google User</a>',
        ],
        photo_reference:
          "AelY_CucSyq97w54Vmw-YI1mMSNNs3yuHWcnTyhooTYYIZPLR0GPaFtjcSS9Xb1goTUCM_vMNqWXpyBCWuMSNjCJj5zWfHZHCFr8TJtH9bJUUwPWbDmsl5CbMSAMkRxADDwlYGgjeAOqeo3pjVfCiggH2WQUskj6pjsqQg1jfwY84ZWGVbMe",
        width: 3024,
      },
    ],
    place_id: "ChIJvbA5NFyLGGARzVQunEtKel4",
    plus_code: {
      compound_code: "MP6C+M9 Minato City, Tokyo, Japan",
      global_code: "8Q7XMP6C+M9",
    },
    rating: 4.7,
    reference: "ChIJvbA5NFyLGGARzVQunEtKel4",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 43,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "2 Chome-24-8 Nishiazabu, Minato City, Tokyo 106-0031, Japan",
    geometry: {
      location: {
        lat: 35.6610332,
        lng: 139.7220572,
      },
      viewport: {
        northeast: {
          lat: 35.66239397989273,
          lng: 139.7234221798927,
        },
        southwest: {
          lat: 35.65969432010728,
          lng: 139.7207225201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Tou",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/110913065893413996122">Harrison Wang</a>',
        ],
        photo_reference:
          "AelY_CurQaOM1VyKVN5cqR7vI53dy7ETZj-47YMI5NklWqIryFAyGmV-g3PZxnGESfefI8QIeRtF4qlQvrk5i_7pN0s-4YmmbIKdO-tSHz4f9jQx63gJnH90AvFxXnM-IXmSCbscClAFUkbOpve9cHlqZZhbWJ5v283C1X0_TnWi08HRTsHi",
        width: 4032,
      },
    ],
    place_id: "ChIJj8jK03qLGGARwaWcPBbQuuI",
    plus_code: {
      compound_code: "MP6C+CR Minato City, Tokyo, Japan",
      global_code: "8Q7XMP6C+CR",
    },
    rating: 4.8,
    reference: "ChIJj8jK03qLGGARwaWcPBbQuuI",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 293,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒106-0031 Tokyo, Minato City, Nishiazabu, 1 Chome−4−15 寿司勇",
    geometry: {
      location: {
        lat: 35.66182939999999,
        lng: 139.7251847,
      },
      viewport: {
        northeast: {
          lat: 35.66318207989272,
          lng: 139.7265456298927,
        },
        southwest: {
          lat: 35.66048242010728,
          lng: 139.7238459701072,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Yuu",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109154125445902002150">Simone Sello</a>',
        ],
        photo_reference:
          "AelY_CtYl2vn6r7_n7sC84JZqlIPPiVzIhTNYyf24AnSB5vGCaFQXoNUtMYqW3Q4v5PmlDriuiDdlV9EQBOcXXcg6xrW2ESqI8DJ8rDBbBbnmM7rfN0ryvYlDfGOr3CdK4EX062BreghugKP84Y_6auP1Ddamzup-Y93IAps43T5BotLXhxC",
        width: 4032,
      },
    ],
    place_id: "ChIJ13sWRHqLGGARX9fpN_Tkxfc",
    plus_code: {
      compound_code: "MP6G+P3 Minato City, Tokyo, Japan",
      global_code: "8Q7XMP6G+P3",
    },
    price_level: 3,
    rating: 4.7,
    reference: "ChIJ13sWRHqLGGARX9fpN_Tkxfc",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 342,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "5 Chome-24-55 Sendagaya, Shibuya City, Tokyo 151-0051, Japan",
    geometry: {
      location: {
        lat: 35.6884554,
        lng: 139.7005282,
      },
      viewport: {
        northeast: {
          lat: 35.69005472989272,
          lng: 139.7017668798927,
        },
        southwest: {
          lat: 35.68735507010727,
          lng: 139.6990672201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Ten",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/118088768939505924573">松岡誠造</a>',
        ],
        photo_reference:
          "AelY_Ctq_0PQWikYctTzRr22z6J1BQKERdw-SSIL8ocbRAN06xVskmbrWEi7adcEKB8e0YeMu8ugOIlhpvaMEYClgwsFUkte_MnKHmeyIrOs8GuAzl6YNrZ9BQQXdYH1ZlrNVV-xm_7RJ0ygj5bdIPwxAHhtXZlgT0Sw9UFCE6jKWc4a_sAC",
        width: 4032,
      },
    ],
    place_id: "ChIJL5gxE9CMGGAR0Vtyrq_cFio",
    plus_code: {
      compound_code: "MPQ2+96 Shibuya City, Tokyo, Japan",
      global_code: "8Q7XMPQ2+96",
    },
    price_level: 2,
    rating: 3.9,
    reference: "ChIJL5gxE9CMGGAR0Vtyrq_cFio",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 845,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 1 Chome−12−3 マークシティイースト ４Ｆ",
    geometry: {
      location: {
        lat: 35.6583453,
        lng: 139.6989875,
      },
      viewport: {
        northeast: {
          lat: 35.65955002989273,
          lng: 139.7002333798927,
        },
        southwest: {
          lat: 35.65685037010729,
          lng: 139.6975337201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi no Midori Shibuya",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 2304,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109374423464668014937">Rodolphe ROCLE</a>',
        ],
        photo_reference:
          "AelY_CvWSFahR4r-Z3iAzhFsFEe_Crl4xvcenq9Sn1dvBl7g1kKifx5bvcbSvXPLKfhdb6x1wDqih7yogXS-hnPMiOUzC25ENwcmBg4uotx_k_6GFuOGIlrc_uF-Y6SjSFARccEZuaU0xxt4Q-HQnlDVXV7wbE4hr1Tdn4Gs2oR2hJo1B592",
        width: 4608,
      },
    ],
    place_id: "ChIJu9W4zVeLGGARXn0xCjGINF8",
    plus_code: {
      compound_code: "MM5X+8H Shibuya City, Tokyo, Japan",
      global_code: "8Q7XMM5X+8H",
    },
    price_level: 1,
    rating: 4.3,
    reference: "ChIJu9W4zVeLGGARXn0xCjGINF8",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 3455,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "1 Chome-5-9 Shibuya, Shibuya City, Tokyo 150-0002, Japan",
    geometry: {
      location: {
        lat: 35.6610552,
        lng: 139.7057335,
      },
      viewport: {
        northeast: {
          lat: 35.66240727989272,
          lng: 139.7070866798927,
        },
        southwest: {
          lat: 35.65970762010728,
          lng: 139.7043870201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Nakano",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1440,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109750907388039511297">A Google User</a>',
        ],
        photo_reference:
          "AelY_Cuni5_QTcghP8WdymmDg-cqc9P5eG6-rH804HBz3XxC4-3mVgqLzt02Wldi-PAfOSObIvR0mB39nDph3S3ZqIWk_k9SC2MhkvAHIbsnSUDSeLb6ukVCodAJ137a3wnrsHwVj43vO8eQ-SPWJjHDpM5sLaFBfPqkfq0fiCsUApk_r7o3",
        width: 1440,
      },
    ],
    place_id: "ChIJa9yHuliLGGAR5oWlfGXlwFg",
    plus_code: {
      compound_code: "MP64+C8 Shibuya City, Tokyo, Japan",
      global_code: "8Q7XMP64+C8",
    },
    rating: 4.6,
    reference: "ChIJa9yHuliLGGAR5oWlfGXlwFg",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 187,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−17−6 4F",
    geometry: {
      location: {
        lat: 35.6579318,
        lng: 139.732316,
      },
      viewport: {
        northeast: {
          lat: 35.65927142989272,
          lng: 139.7336148298928,
        },
        southwest: {
          lat: 35.65657177010728,
          lng: 139.7309151701073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushi Y",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/117398270203892645663">雄介土井</a>',
        ],
        photo_reference:
          "AelY_Csr7C6RMdqrYzOu203yhnRg2fPfiKGoAlT1mOm0ceHsoF0AgIZN7moDdV7ApE-w3He3c5oCGgeqr6yLyVBP-eSsKUOH0Hk22pEeryQrm-PrPrwM_smc3gcsXnuO-aeEuTJBcjB37yxu4RbEPCob1amOG5uD8f28XZmikeHBpPktIhMZ",
        width: 4032,
      },
    ],
    place_id: "ChIJw1zDlimLGGAR_tguy5YrvFY",
    plus_code: {
      compound_code: "MP5J+5W Minato City, Tokyo, Japan",
      global_code: "8Q7XMP5J+5W",
    },
    rating: 4.8,
    reference: "ChIJw1zDlimLGGAR_tguy5YrvFY",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 126,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒105-0001 Tokyo, Minato City, Toranomon, 4 Chome−1−28 １Ｆ",
    geometry: {
      location: {
        lat: 35.6663129,
        lng: 139.7437919,
      },
      viewport: {
        northeast: {
          lat: 35.66773287989272,
          lng: 139.7451943298927,
        },
        southwest: {
          lat: 35.66503322010728,
          lng: 139.7424946701073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "NOBU Tokyo",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 693,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109344783892560773045">A Google User</a>',
        ],
        photo_reference:
          "AelY_CsV8k4d165qL6gNoDpFdGdCdfLrCOqvM46D1_aA2sM-O2C9xNQl-MTeE13T2J1nSxhT_iswulyV_rG2gC2tdNwRCYShZY3j3PuYOfn_6UCeXLaOGPJAK8qJiXV9Q1JV0JvaUBLuEsrNpVBXqifLTP4ezMhiQfZe0LwAHXZ1XbkD3k8q",
        width: 540,
      },
    ],
    place_id: "ChIJVYCAW5CLGGARIvNkkLut6Jw",
    plus_code: {
      compound_code: "MP8V+GG Minato City, Tokyo, Japan",
      global_code: "8Q7XMP8V+GG",
    },
    price_level: 3,
    rating: 4.2,
    reference: "ChIJVYCAW5CLGGARIvNkkLut6Jw",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 948,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒150-0022 Tokyo, Shibuya City, Ebisuminami, 1 Chome−17−17 タイムゾーンテラスビル 4F",
    geometry: {
      location: {
        lat: 35.6447657,
        lng: 139.7104181,
      },
      viewport: {
        northeast: {
          lat: 35.64613842989272,
          lng: 139.7118392798927,
        },
        southwest: {
          lat: 35.64343877010727,
          lng: 139.7091396201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Takumi Sushi Owana",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101246148044336370454">A Google User</a>',
        ],
        photo_reference:
          "AelY_Cu2ZBGCbPzktONcKYunsWAjclWhQ_tnrUIbKvWx3DsmW0W5TA3jkdr-J1N8ZKn4P19uMSgUXvBnApOS2JknOzF6-29ZdsyPQIF_Lri2lnY-rpGZDSUAwBx4rRimyTAzBFiRrKNJzb_XKUJ7N-_8k0KBasP_rp_hhIBiMs9sj06yd1cl",
        width: 4032,
      },
    ],
    place_id: "ChIJVVWJ8j-LGGARG9J6uCuYogo",
    plus_code: {
      compound_code: "JPV6+W5 Shibuya City, Tokyo, Japan",
      global_code: "8Q7XJPV6+W5",
    },
    rating: 4.6,
    reference: "ChIJVVWJ8j-LGGARG9J6uCuYogo",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 140,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address:
      "Japan, 〒169-0072 Tokyo, Shinjuku City, Okubo, 1 Chome−1−15 1階･地下1階 ベルバウム",
    geometry: {
      location: {
        lat: 35.6984775,
        lng: 139.705238,
      },
      viewport: {
        northeast: {
          lat: 35.69972922989272,
          lng: 139.7065617798927,
        },
        southwest: {
          lat: 35.69702957010727,
          lng: 139.7038621201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Sushizanmai",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 3000,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102623420613587617209">Seraphine Leong</a>',
        ],
        photo_reference:
          "AelY_CtZtQegiOFmuq4PB2pgTwcpfINA9iKJlFOp3yIR5-ZpuYoCk3nZ54H3JqwDS0xZ6EAXzrJP2_VnTJMhg5rc5lXQw0HoMvXWseuKvgczA4L7_dmUD2xttw6zarLQMd9TFjTQuU3cl2ZC9uhzDbZ1-D5p0ZzOQo7hIwpcJCbZbcBgkmSJ",
        width: 4000,
      },
    ],
    place_id: "ChIJB61WXieNGGAR01U_-5KyFtA",
    plus_code: {
      compound_code: "MPX4+93 Shinjuku City, Tokyo, Japan",
      global_code: "8Q7XMPX4+93",
    },
    price_level: 2,
    rating: 4,
    reference: "ChIJB61WXieNGGAR01U_-5KyFtA",
    types: [
      "meal_takeaway",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 2380,
  },
];

const singleResto = {
  name: "places/ChIJscN5u4-LGGARIyRklEh6-e4",
  id: "ChIJscN5u4-LGGARIyRklEh6-e4",
  types: [
    "sushi_restaurant",
    "japanese_restaurant",
    "restaurant",
    "food",
    "point_of_interest",
    "establishment",
  ],
  nationalPhoneNumber: "050-5263-6863",
  internationalPhoneNumber: "+81 50-5263-6863",
  formattedAddress:
    "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 1-chōme−4−５, ARK Hills South Tower, 1F",
  addressComponents: [
    {
      longText: "1F",
      shortText: "1F",
      types: ["subpremise"],
      languageCode: "ja",
    },
    {
      longText: "ARK Hills South Tower",
      shortText: "ARK Hills South Tower",
      types: ["premise"],
      languageCode: "en",
    },
    {
      longText: "5",
      shortText: "5",
      types: ["premise"],
      languageCode: "en-US",
    },
    {
      longText: "4",
      shortText: "4",
      types: ["sublocality_level_4", "sublocality", "political"],
      languageCode: "en",
    },
    {
      longText: "1-chōme",
      shortText: "1-chōme",
      types: ["sublocality_level_3", "sublocality", "political"],
      languageCode: "ja-Latn",
    },
    {
      longText: "Roppongi",
      shortText: "Roppongi",
      types: ["sublocality_level_2", "sublocality", "political"],
      languageCode: "ja-Latn",
    },
    {
      longText: "Minato City",
      shortText: "Minato City",
      types: ["locality", "political"],
      languageCode: "en",
    },
    {
      longText: "Tokyo",
      shortText: "Tokyo",
      types: ["administrative_area_level_1", "political"],
      languageCode: "en",
    },
    {
      longText: "Japan",
      shortText: "JP",
      types: ["country", "political"],
      languageCode: "en",
    },
    {
      longText: "106-0032",
      shortText: "106-0032",
      types: ["postal_code"],
      languageCode: "en-US",
    },
  ],
  plusCode: {
    globalCode: "8Q7XMP8Q+5R",
    compoundCode: "MP8Q+5R Minato City, Tokyo, Japan",
  },
  location: {
    latitude: 35.6653768,
    longitude: 139.7395884,
  },
  viewport: {
    low: {
      latitude: 35.6640267197085,
      longitude: 139.73821956970849,
    },
    high: {
      latitude: 35.6667246802915,
      longitude: 139.74091753029148,
    },
  },
  rating: 4.5,
  googleMapsUri: "https://maps.google.com/?cid=17219929102373626915",
  websiteUri: "https://shokuoku.com/restaurant/?rstid=1",
  regularOpeningHours: {
    openNow: false,
    periods: [
      {
        open: {
          day: 1,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        open: {
          day: 2,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        open: {
          day: 3,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        open: {
          day: 4,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        open: {
          day: 5,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        open: {
          day: 6,
          hour: 12,
          minute: 0,
        },
        close: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        open: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        close: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
    weekdayDescriptions: [
      "Monday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Tuesday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Wednesday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Thursday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Friday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Saturday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Sunday: Closed",
    ],
  },
  utcOffsetMinutes: 540,
  adrFormatAddress:
    '\u003cspan class="country-name"\u003eJapan\u003c/span\u003e, \u003cspan class="postal-code"\u003e〒106-0032\u003c/span\u003e \u003cspan class="region"\u003eTokyo\u003c/span\u003e, \u003cspan class="street-address"\u003eMinato City, Roppongi, 1-chōme−4−５, ARK Hills South Tower, 1F\u003c/span\u003e',
  businessStatus: "OPERATIONAL",
  priceLevel: "PRICE_LEVEL_VERY_EXPENSIVE",
  userRatingCount: 411,
  iconMaskBaseUri:
    "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
  iconBackgroundColor: "#FF9E67",
  displayName: {
    text: "Sushi Saito",
    languageCode: "en",
  },
  primaryTypeDisplayName: {
    text: "Sushi restaurant",
    languageCode: "en",
  },
  takeout: true,
  delivery: false,
  dineIn: true,
  reservable: true,
  servesBreakfast: false,
  servesLunch: true,
  servesDinner: true,
  servesBeer: true,
  servesWine: true,
  servesBrunch: false,
  servesVegetarianFood: false,
  currentOpeningHours: {
    openNow: false,
    periods: [
      {
        open: {
          day: 1,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 5,
          },
        },
        close: {
          day: 1,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 5,
          },
        },
      },
      {
        open: {
          day: 1,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 5,
          },
        },
        close: {
          day: 1,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 5,
          },
        },
      },
      {
        open: {
          day: 2,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 6,
          },
        },
        close: {
          day: 2,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 6,
          },
        },
      },
      {
        open: {
          day: 2,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 6,
          },
        },
        close: {
          day: 2,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 6,
          },
        },
      },
      {
        open: {
          day: 3,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 7,
          },
        },
        close: {
          day: 3,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 7,
          },
        },
      },
      {
        open: {
          day: 3,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 7,
          },
        },
        close: {
          day: 3,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 7,
          },
        },
      },
      {
        open: {
          day: 4,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 8,
          },
        },
        close: {
          day: 4,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 8,
          },
        },
      },
      {
        open: {
          day: 4,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 8,
          },
        },
        close: {
          day: 4,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 8,
          },
        },
      },
      {
        open: {
          day: 5,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 9,
          },
        },
        close: {
          day: 5,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 9,
          },
        },
      },
      {
        open: {
          day: 5,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 9,
          },
        },
        close: {
          day: 5,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 9,
          },
        },
      },
      {
        open: {
          day: 6,
          hour: 12,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 10,
          },
        },
        close: {
          day: 6,
          hour: 14,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 10,
          },
        },
      },
      {
        open: {
          day: 6,
          hour: 17,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 10,
          },
        },
        close: {
          day: 6,
          hour: 22,
          minute: 0,
          date: {
            year: 2024,
            month: 8,
            day: 10,
          },
        },
      },
    ],
    weekdayDescriptions: [
      "Monday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Tuesday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Wednesday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Thursday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Friday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Saturday: 12:00 – 2:00 PM, 5:00 – 10:00 PM",
      "Sunday: Closed",
    ],
  },
  primaryType: "sushi_restaurant",
  shortFormattedAddress:
    "Minato City, Roppongi, 1-chōme−4−5, ARK Hills South Tower, 1F",
  editorialSummary: {
    text: "Familiar sushi & other raw fish dishes are served at this stylish restaurant with a warm vibe.",
    languageCode: "en",
  },
  reviews: [
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/reviews/ChZDSUhNMG9nS0VJQ0FnSURremF2ZFlnEAE",
      relativePublishTimeDescription: "5 years ago",
      rating: 5,
      text: {
        text: "This is the pinnacle of sushi experiences. If you find yourself fortunate enough to get a seat with Saito, you are in for an amazing evening. I was extremely fortunate to be invited to join a party here and had a wonderful time watching Saito in action and enjoying the perfection of his art. Every dish was amazing in preparation, presentation and umami.",
        languageCode: "en",
      },
      originalText: {
        text: "This is the pinnacle of sushi experiences. If you find yourself fortunate enough to get a seat with Saito, you are in for an amazing evening. I was extremely fortunate to be invited to join a party here and had a wonderful time watching Saito in action and enjoying the perfection of his art. Every dish was amazing in preparation, presentation and umami.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Eric Flynn",
        uri: "https://www.google.com/maps/contrib/106278090829374087533/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjVDz5pO83iux-LljXQzbt8HrG6tsNsC-1_hr4AeLpOskYFaJGZ80g=s128-c0x00000000-cc-rp-mo-ba5",
      },
      publishTime: "2019-07-21T15:18:46Z",
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/reviews/ChZDSUhNMG9nS0VJQ0FnSUNnM2ZIUFdREAE",
      relativePublishTimeDescription: "4 years ago",
      rating: 5,
      text: {
        text: "Definitely one of very best sushi place in Tokyo or even in Japan/World.  Definitely a must come if you have a chance.   Reservation is extremely difficult.  Awesome sushi, fantastic selection of fresh seasonal seafood, and great services.  Can't ask for more for sushi.",
        languageCode: "en",
      },
      originalText: {
        text: "Definitely one of very best sushi place in Tokyo or even in Japan/World.  Definitely a must come if you have a chance.   Reservation is extremely difficult.  Awesome sushi, fantastic selection of fresh seasonal seafood, and great services.  Can't ask for more for sushi.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Kent Ma",
        uri: "https://www.google.com/maps/contrib/117670113311169207526/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocIuYzwewmaBxzUAGIkSQBGyiwOBMWraATnlJ1g7fMRrXhMfrfs=s128-c0x00000000-cc-rp-mo-ba8",
      },
      publishTime: "2019-10-26T15:08:21Z",
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/reviews/ChZDSUhNMG9nS0VJQ0FnSUNNODZtX1h3EAE",
      relativePublishTimeDescription: "4 years ago",
      rating: 5,
      text: {
        text: "Been coming here for years and it is consistently excellent as always. Sushi Saito will no longer be in the Michelin guide starting next year 2020. They are converting into an introduction-only reservation system.",
        languageCode: "en",
      },
      originalText: {
        text: "Been coming here for years and it is consistently excellent as always. Sushi Saito will no longer be in the Michelin guide starting next year 2020. They are converting into an introduction-only reservation system.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Grace Chen",
        uri: "https://www.google.com/maps/contrib/105328043864720914456/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjWU5YzVHsLRGsN3BbXRXSbp73-tsp_4HqGG1c6xgBH0HTZ4VHA=s128-c0x00000000-cc-rp-mo-ba5",
      },
      publishTime: "2019-12-05T05:34:19Z",
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/reviews/ChZDSUhNMG9nS0VJQ0FnSUNZbjhYNFN3EAE",
      relativePublishTimeDescription: "5 years ago",
      rating: 5,
      text: {
        text: 'Can be said "best omakase sushi ever". The skillful and talented masterchef that can be considered as the most youngest legendary sushi masterchef in today world. Very charming and outstanding sushi masterchef. High quality ingregients, perfect acidity of sushi rice, mild and easy eating, soft and great size of each sushi, very impressive sushi meal. Still earn 3 michelin stars as of 2019. Delicious and enjoy with both the taste of foods and to look at the masterchef while he making sushi with his amazing skill. Great sushi meal. Surely need advance reservation and hard to get the seat anyway.\n\nAt Ark hills south tower.',
        languageCode: "en",
      },
      originalText: {
        text: 'Can be said "best omakase sushi ever". The skillful and talented masterchef that can be considered as the most youngest legendary sushi masterchef in today world. Very charming and outstanding sushi masterchef. High quality ingregients, perfect acidity of sushi rice, mild and easy eating, soft and great size of each sushi, very impressive sushi meal. Still earn 3 michelin stars as of 2019. Delicious and enjoy with both the taste of foods and to look at the masterchef while he making sushi with his amazing skill. Great sushi meal. Surely need advance reservation and hard to get the seat anyway.\n\nAt Ark hills south tower.',
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Tiddy W. D",
        uri: "https://www.google.com/maps/contrib/111003660923914303822/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjVOu_GVRpe63yR1yVD4S2RmcXQ6_rX3a6r5NP6bYyCuaFOYPWDwRg=s128-c0x00000000-cc-rp-mo-ba6",
      },
      publishTime: "2019-04-25T18:12:58Z",
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/reviews/ChZDSUhNMG9nS0VJQ0FnSURveEtickx3EAE",
      relativePublishTimeDescription: "5 years ago",
      rating: 5,
      text: {
        text: "My third visit to saito - amazing experience still. Lunch was about 30000 yen per pax - worth every penny!",
        languageCode: "en",
      },
      originalText: {
        text: "My third visit to saito - amazing experience still. Lunch was about 30000 yen per pax - worth every penny!",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Eat around With me",
        uri: "https://www.google.com/maps/contrib/108900576153720969491/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocJk7xkYzll0vb58gEmNR3nbFjmJWa8e8rYmhS3z1WS1VZyONQ=s128-c0x00000000-cc-rp-mo-ba4",
      },
      publishTime: "2019-03-12T14:46:54Z",
    },
  ],
  photos: [
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CsiByYukxRSqImvcpkwpN03Z7HOXDudcC-sqounw6AmJwh8LMaJxr9sIvp68P6O-v3uzI-VUaPWW5uEuWAALr5-wnTY-AD33bv_XbyJIjOl16g8PDYO29-elEcH5GFrFETQ5JO4UbrXd6Up5rHMniyqB9ziuo032PDM",
      widthPx: 2268,
      heightPx: 4032,
      authorAttributions: [
        {
          displayName: "daisuke arai",
          uri: "//maps.google.com/maps/contrib/105525206689076835977",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjUB3x7tzGR1KtP-zVkOSls0nNOq6MFgM1gGep1wR1tnKZs0pNrPVw=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CsvLhChaVMRO1X-5CYIpqmJVC4EUDNjzsGSZRLCejeRs0I2rJqVUqUzIsStyLrjJnqPfCHlWCoSsV_luKW2gHMKZP5Q2fg8IvZaMx8lfUk4UAEIVB9vPs3rmDw9HyBP53DAS0iEug0lUX3PPt3Kc0oq4A2d64mym0OU",
      widthPx: 4800,
      heightPx: 4800,
      authorAttributions: [
        {
          displayName: "A K",
          uri: "//maps.google.com/maps/contrib/118051942296013606057",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjWuS0ItYi3dEmkOxS3MA_KyHO1oz4f-a40EWVYJQ2TRw1nRm9-Uxw=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CuEnpPg54lNwMLgWG6zPNXJJVtqycng8NCpVmm5vsD-uHnpOyTOYUcrJFtcceK_F45UzjID_GM0yJEtldiUkUU8tJ0H6GjTFgUd4z53FILpALZUad00H6yjwpGUsV1ZwwKXCRKJcIdwTVv2nA-tN3F1v-PGgmUh2k72",
      widthPx: 1280,
      heightPx: 1146,
      authorAttributions: [
        {
          displayName: "グフゲルググ Japan",
          uri: "//maps.google.com/maps/contrib/102928901741597164673",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjXHZQSA6Vw47k5wNVVT_kbkcVXSDKNqkdKRAFRaMu-cJYO6Zt0k3w=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CuMvj2xswT6DR3rfJns6OH07D0hsHC_TgHYnAn1_KeWGPenM6oiY0_Eh4FI_fm2gaq9PoHH49I_KAAvjx59L98sn3p-ZMmXjOtPAZW1Fv-KABi9nA-zIO_3ENiluRCggvMfQUjzutA5wOp-UT6X9VQ2AAo58YXq3jSn",
      widthPx: 3778,
      heightPx: 2833,
      authorAttributions: [
        {
          displayName: "yuki yasui",
          uri: "//maps.google.com/maps/contrib/113269933782061472626",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjXkdlpdBNniao3T4_DLv2H3UkoE7Yz36R6XjAi9sQD8QBFmmPp8=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CvQOTkk5QjrEcVlKBUcZ4eKGgMYDBN0zzUaxG5XXGZLJR5lwt6Kt08J5fP5XqTawLOPCYJc1iia__C0-sVG-LlF6f5YpVEFgN4IMKVoiYVZ25_eqbRvyFGy1Z6yuT0Te5DA3QRc0V45hVAaiKgg8aG_u-sVi0Bx2E_i",
      widthPx: 1625,
      heightPx: 1170,
      authorAttributions: [
        {
          displayName: "うどんが主食",
          uri: "//maps.google.com/maps/contrib/113577665052972196164",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjU_bQuH0pAKaU0W7n_nw_pMZmlGep-0nPhausgT6BNiP-kUpcYyPA=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_CvKhiyt5swyHdQfgc72UyKNibC0WJ3r15raiA1A1LyAhEmkzDSyzfNZpUlcPpE4yeG5hMInnsc8RTOk9fcZMog22-e5Kx7WxKtf5GsSOT6NFewbXOckkBaEDN-DDa34JtRFaJ7JSSxe7Z4RUvvEXKVJ66SNP06Q8HYx",
      widthPx: 2227,
      heightPx: 1568,
      authorAttributions: [
        {
          displayName: "うどんが主食",
          uri: "//maps.google.com/maps/contrib/113577665052972196164",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjU_bQuH0pAKaU0W7n_nw_pMZmlGep-0nPhausgT6BNiP-kUpcYyPA=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_Cuve43aHQrs8j_hxcMKj35tU_BfBfe02Ze4CWEmQnjKSZPu9f0WxkJP5dv0r1TReDumIoEMWJEtisAXNUDzxrDJRERAoNXmSgCMy9USTNwm0tr-B5a4sr0IyP7hvov6ZzgnXRqdVNQJYskzVqXDjZ5G00SnK5zvpOdS",
      widthPx: 1492,
      heightPx: 1011,
      authorAttributions: [
        {
          displayName: "うどんが主食",
          uri: "//maps.google.com/maps/contrib/113577665052972196164",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjU_bQuH0pAKaU0W7n_nw_pMZmlGep-0nPhausgT6BNiP-kUpcYyPA=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_Cs2f-9JvDSd-2sYcJ9EBngP6_TQ3LGxJlXxowKDT5z-HC5VByDHlWCM94HEPqAsDXl2xwMSIkQhas33U25pNjRgaDkm_K1a3qQMgHQUKvQ219deL7aRsmwulFSY1g6eRwH4UXZudipLIZpbTm2F55vG672hheahD9UE",
      widthPx: 4032,
      heightPx: 3024,
      authorAttributions: [
        {
          displayName: "Hiromi SATO",
          uri: "//maps.google.com/maps/contrib/107541746747736238830",
          photoUri:
            "//lh3.googleusercontent.com/a/ACg8ocL6wghEkmEKEL6ea7w9WrFcMPPDy13x-7GVQI71DTOjpTCDdw=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_Cvau5t49oLJOFbSBvDUFviPr6EZyFjKe83AfTMhv1GO5B5G8fK7ux3InwNMjNswV6wYs0PqLYIbBmONLHx90oSWwRSaaLR8wtehROJ8Gqqy8Ks7iBzieuyAz7nqEaLohU0YZP7SCJqE5TpPwqTFW9c_MTj1TE5ELksV",
      widthPx: 2374,
      heightPx: 1617,
      authorAttributions: [
        {
          displayName: "うどんが主食",
          uri: "//maps.google.com/maps/contrib/113577665052972196164",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjU_bQuH0pAKaU0W7n_nw_pMZmlGep-0nPhausgT6BNiP-kUpcYyPA=s100-p-k-no-mo",
        },
      ],
    },
    {
      name: "places/ChIJscN5u4-LGGARIyRklEh6-e4/photos/AelY_Cu04Mq1N0_X6bSSVDIXvWLyd1SRL6vksdAajVHkw4SI9rEbuFP7crmqxzg6Dv8xY9tUDVA-VHt6zqkV6hxZ9poImtHOzNnqF9AVST7BsnYNaZ68PVdYbjENW5y82U47ljeRxCsQDbyd_8SHozSYF_rtpKO1ngyoGHNt",
      widthPx: 3008,
      heightPx: 2000,
      authorAttributions: [
        {
          displayName: "うどんが主食",
          uri: "//maps.google.com/maps/contrib/113577665052972196164",
          photoUri:
            "//lh3.googleusercontent.com/a-/ALV-UjU_bQuH0pAKaU0W7n_nw_pMZmlGep-0nPhausgT6BNiP-kUpcYyPA=s100-p-k-no-mo",
        },
      ],
    },
  ],
  outdoorSeating: false,
  liveMusic: false,
  menuForChildren: false,
  servesCocktails: false,
  servesDessert: false,
  servesCoffee: false,
  goodForChildren: false,
  allowsDogs: false,
  restroom: true,
  goodForWatchingSports: false,
  paymentOptions: {
    acceptsCreditCards: true,
    acceptsCashOnly: false,
  },
};
