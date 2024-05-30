// const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later

// const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${location}&category=hotels`;

// //option to choose what kind of hotel is desired. (fancy, etc.)
// const options = { method: "GET", headers: { accept: "application/json" } };

// const res = await fetch(url, options);
// const hotels = await res.json();
// console.log(hotels);
const hotelDataArr = [
  {
    location_id: "32655",
    name: "Los Angeles",
    address_obj: {
      state: "California",
      country: "United States",
      address_string: "Los Angeles, CA",
    },
  },
  {
    location_id: "153349",
    name: "Los Angeles Locos",
    address_obj: {
      street1: "Km 20 Carretera Federal 200",
      street2: "",
      city: "Tenacatita",
      state: "Jalisco",
      country: "Mexico",
      postalcode: "49989",
      address_string: "Km 20 Carretera Federal 200, Tenacatita 49989 Mexico",
    },
  },
  {
    location_id: "77866",
    name: "The Biltmore Los Angeles",
    address_obj: {
      street1: "506 S. Grand Ave",
      street2: "",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90071-2602",
      address_string: "506 S. Grand Ave, Los Angeles, CA 90071-2602",
    },
  },
  {
    location_id: "488177",
    name: "Los Angeles",
    address_obj: {
      street1: "",
      street2: "",
      city: "Biobio Region",
      country: "Chile",
      postalcode: "",
      address_string: "Los Angeles Chile",
    },
  },
  {
    location_id: "11894770",
    name: "Freehand Los Angeles",
    address_obj: {
      street1: "416 W 8th St",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90014-3002",
      address_string: "416 W 8th St, Los Angeles, CA 90014-3002",
    },
  },
  {
    location_id: "84167",
    name: "Hilton Los Angeles Airport",
    address_obj: {
      street1: "5711 West Century Boulevard",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90045",
      address_string: "5711 West Century Boulevard, Los Angeles, CA 90045",
    },
  },
  {
    location_id: "23845025",
    name: "Conrad Los Angeles",
    address_obj: {
      street1: "100 South Grand Ave.",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90012",
      address_string: "100 South Grand Ave., Los Angeles, CA 90012",
    },
  },
  {
    location_id: "77798",
    name: "Sheraton Grand Los Angeles",
    address_obj: {
      street1: "711 South Hope Street",
      street2: "",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postalcode: "90017-3803",
      address_string: "711 South Hope Street, Los Angeles, CA 90017-3803",
    },
  },
  {
    location_id: "78694",
    name: "Hilton Los Angeles / Universal City",
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
  },
  {
    location_id: "8678267",
    name: "InterContinental Los Angeles Downtown",
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
  },
];

const hotelData = {
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
  review_rating_count: {
    1: "77",
    2: "64",
    3: "129",
    4: "220",
    5: "608",
  },
  subratings: {
    0: {
      name: "rate_location",
      localized_name: "Location",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss4.5.svg",
      value: "4.5",
    },
    1: {
      name: "rate_sleep",
      localized_name: "Sleep Quality",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss4.5.svg",
      value: "4.5",
    },
    2: {
      name: "rate_room",
      localized_name: "Rooms",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss4.5.svg",
      value: "4.5",
    },
    3: {
      name: "rate_service",
      localized_name: "Service",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss4.0.svg",
      value: "4.0",
    },
    4: {
      name: "rate_value",
      localized_name: "Value",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss3.5.svg",
      value: "3.5",
    },
    5: {
      name: "rate_cleanliness",
      localized_name: "Cleanliness",
      rating_image_url:
        "https://static.tacdn.com/img2/ratings/traveler/ss4.5.svg",
      value: "4.5",
    },
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
    "Taxi Service",
    "Telephone",
    "Tile / Marble Floor",
    "Umbrella",
    "Wake Up Service / Alarm Clock",
    "Walk-in Shower",
    "Wardrobe / Closet",
    "Wine / Champagne",
    "Yoga Room",
  ],
  parent_brand: "InterContinental",
  brand: "InterContinental",
  category: {
    name: "hotel",
    localized_name: "Hotel",
  },
  subcategory: [
    {
      name: "hotel",
      localized_name: "Hotel",
    },
  ],
  styles: ["Mountain View", "Luxury"],
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
      value: "298",
    },
    {
      name: "couples",
      localized_name: "Couples",
      value: "263",
    },
    {
      name: "solo",
      localized_name: "Solo travel",
      value: "67",
    },
    {
      name: "family",
      localized_name: "Family",
      value: "218",
    },
    {
      name: "friends",
      localized_name: "Friends getaway",
      value: "83",
    },
  ],
  awards: [],
};

//base hotel data ready to be formatted

import React from 'react'

function FetchHotels() {
  return (
    <div>FetchHotels</div>
  )
}

export default FetchHotels