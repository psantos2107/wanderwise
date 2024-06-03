import { supabase } from "./supabase";
import Amadeus from "amadeus";
import fetchLocationDetails from "./fetch-attraction-and-hotel-details";

//Code for fetching data will be displayed below.
export async function testConnection() {
  try {
    const { data, error } = await supabase.from("test").select("*").limit(1);
    if (error) {
      console.error(
        "Connection test FAILED. Here is the message: ",
        error.message
      );
    } else {
      console.log(`${data}!! Your connection to supabase was successful.`);
    }
  } catch (err) {
    console.error(
      "This connection failed. Please refer to error above and please try again."
    );
  }
}

export async function grabTripInfo() {
  //code
}

export async function searchRestaurants(location, searchTerm, price) {
  const encodedLocation = encodeURIComponent(location.trim()) || ""; //will change later
  const encodedSearchTerm = encodeURIComponent(searchTerm.trim()) || "";

  const url = `https://api.yelp.com/v3/businesses/search?location=${encodedLocation}&term=${encodedSearchTerm}&price=${price}&attributes=popular&sort_by=rating&limit=10`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const restaurantData = await res.json();
  return restaurantData?.businesses || [];
}

export async function searchFlights() {
  const amadeus = new Amadeus({
    clientId: `${process.env.AMADEUS_API_KEY}`,
    clientSecret: `${process.env.AMADEUS_API_SECRET}`,
  });

  const res = await amadeus.shopping.flightOffersSearch.get({
    originLocationCode: "SYD",
    destinationLocationCode: "BKK",
    departureDate: "2024-07-01",
    returnDate: "2024-08-01",
    adults: "2",
    children: "0",
    infants: "0",
    travelClass: "ECONOMY",
    nonStop: "false",
    max: "3",
  });

  const flightOffers = res.data;
  return flightOffers;
}

export async function searchHotels() {
  //ANTICPATED FETCH FUNCTION FOR HOTELS.
  const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later
  const searchTerm = "fancy hotels";

  //URL set-up
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${location}&category=${searchTerm}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  //data fetching!
  const res = await fetch(url, options);
  const hotels = await res.json();
  const hotelIDs = hotels.data.map((hotel) => hotel.location_id);
  const hotelDataArr = await fetchLocationDetails(hotelIDs);
  return hotelDataArr;
}

export async function searchAttractions() {
  //CODE TO QUERY THE ATTRACTIONS.

  const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later
  const searchTerm = encodeURIComponent("museums".trim());

  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${location}&category=${searchTerm}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const res = await fetch(url, options);
  const attractions = await res.json();
  const attractionIDs = attractions.data.map(
    (attraction) => attraction.location_id
  );
  const attractionDataArr = await fetchLocationDetails(attractionIDs);
  return attractionDataArr;
}
