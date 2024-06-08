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
